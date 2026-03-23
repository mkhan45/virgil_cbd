# Properties of a Schedulable Sea

## Context

The scheduler (`Schedule.v3`) converts a flat Sea of Nodes graph back into structured code (a `ScheduleNode` tree). This document catalogs the properties the input graph must satisfy for scheduling to succeed and produce correct output. The focus is on what we know with confidence, what we suspect, and what remains open.

The scheduler is currently used by the validator tier and the abstract interpreter tier. The interpreter tier does not use the sea scheduler.

## Structural Properties (Hard Requirements)

These are clearly necessary and will cause the scheduler to fail or produce garbage if violated.

### S1: Acyclic dependency graph

The graph must be a DAG when following `value_deps` and `state_deps` edges. The bottom-up scheduler walks from Finish toward Start, enqueueing each node only when all its children have been scheduled. A cycle means some set of nodes would each wait for the other, and none would ever become ready.

**Maintained by construction**: SSAD is a tree, and `Sea.addSSAD` only creates forward edges (new nodes depend on existing nodes). All transforms (`unLEM`, `addAbstractions`, etc.) create new nodes that depend on existing ones, never introducing back-edges.

### S2: Start and Finish existence

The sea must have a valid `start` and `finish` node. `Finish` is the entry point for backward traversal (liveness, `apply`, scheduling). `Start` terminates the backward walk.

### S3: Phi well-formedness

Every `Phi` and `StatePhi` node must have exactly 3 `value_deps`: `[condition, left, right]`. This is assumed throughout: `branch_partition`, `addMoves`, `unLEM`, `prependScheduleBranch`, `collect_graph_effs`, etc. A phi with fewer or more deps would cause array-index failures or incorrect partitioning.

### S4: Liveness and reachability

Every node that participates in the computation must be reachable from `Finish` by following `value_deps` and `state_deps` backward. Unreachable nodes are dead (not in the `live` set computed by `Seas.live`). The scheduler skips dead nodes. This is a soft requirement: dead nodes don't break scheduling, they're just ignored.

## Partition Properties (Needed for branch_partition + untangle)

These properties govern whether `branch_partition` produces meaningful results and whether `untangle` can resolve shared subgraphs.

### P1: Consistent phi semantics (left = condition true)

All phis with the same condition must agree on which branch is "true" and which is "false": `value_deps[1]` is the true-branch value, `value_deps[2]` is the false-branch value. If two phis sharing condition C have their branches semantically swapped, `find_branch_lattices` would group them, and `add_phi` would union their subgraphs. The result: both the left-exclusive and right-exclusive node sets contain the union of both sides, so everything ends up in the overlap. Untangle would clone everything, producing correct but maximally duplicated code.

With effects, the situation is worse: the merged lattice's left branch would contain effects that should only execute on the false path, leading to `PathEffectMismatch`.

**Maintained by construction**: `Sea.addSSAD` creates phis from SSAD `If` nodes, where the tree structure fixes which branch is left (then) and which is right (else). The condition is shared, and all phis from the same `If` get the same orientation.

**Risk**: Transforms that create new phis (like `unLEM`) must maintain this convention. `unLEM` does: the inner phi uses `maybeTrue` as condition with the same left/right orientation as the original.

### P2: Acyclic condition ordering

The conditions used by different phis must admit a partial order: if phi(C1) has phi(C2) in its subgraph, then C1 is "outer" and C2 is "inner." If there's a mutual dependency (C1's subgraph contains C2 and C2's subgraph contains C1), there's no valid nesting.

`sorted_phis_by_depth` and `topo_sort_lattices` both use Kahn's algorithm and append cyclic entries at the end. The scheduler doesn't explicitly fail on cycles -- it just processes them in arbitrary order, which may produce incorrect schedules.

**Maintained by construction from SSAD**: SSAD's tree structure gives a strict nesting order. The SSAD `If` nodes are nested, and phis from an outer `If` always contain phis from inner `If`s in their subgraphs, never vice versa.

**After transforms**: `unLEM` creates new phis (innerPhi) that are in the subgraph of the modified outer phi. The inner phi's condition (`maybeTrue`) is derived from the outer phi's condition, so the nesting is consistent: outer phi depends on `and(maybeTrue, maybeFalse)`, inner phi depends on `maybeTrue`, and the inner phi is in the outer phi's right subgraph.

### P3: PhiAware traversal correctness

`branch_partition` uses `transitiveDepsPhiAwareSet` to compute the frontier (nodes needed unconditionally by both branches). This traversal, when hitting a nested phi, follows only the condition and deps common to BOTH arms -- not the branch-exclusive deps.

This matters because a node reachable from one branch of a nested phi should NOT be in the frontier of the outer phi. If it were, the scheduler would place it unconditionally (before the outer branch), which could execute it on paths where it shouldn't run.

**Example**: Given `outerPhi(C1, innerPhi(C2, N, M), X)`, the phi-aware traversal from `innerPhi` follows C2 and the common deps of N and M, but not N or M individually. So N stays in the l_subgraph of outerPhi (inside the C1-true branch), where the nested C2 condition can further guard it.

**The property**: The phi-aware traversal must accurately reflect which nodes are unconditionally needed. A node is in the frontier iff it's needed regardless of how nested phi conditions resolve.

**BUG: `transitiveDepsPhiAwareAux` uses full traversal for inner common-set computation.**

At `SeaOfNodes.v3:496-497`, the phi-aware traversal computes "common deps of both arms" using `transitiveDepsSet()` (full traversal, not phi-aware). This bleeds through nested phi boundaries: a node behind a deeper phi's single arm appears in the common set if the deeper phi itself is common to both outer arms.

**Counterexample:**

```
A = effectful_write()           -- writes to Memory
B = effectful_write()
deepPhi  = phi(C3, A, B)       -- A on C3=T only, B on C3=F only
N        = pure(deepPhi)
trivPhi  = phi(C2, N, N)       -- N trivially on both arms
outerPhi = phi(C1, trivPhi, h(A))
```

Trace of `branch_partition(outerPhi)`:

1. `l_phi_aware` from `trivPhi`: trivPhi is a phi. Compute common of its arms:
   `transitiveDepsSet(N) ∩ transitiveDepsSet(N)` = `transitiveDepsSet(N)` = `{deepPhi, C3, A, B, ...}`.
   **A is in common** -- because the full traversal walked through deepPhi's left arm.
   A gets added to `buf`. Later `deepPhi.phiAwareAux(buf)` correctly excludes A from deepPhi's common set, but A is already in `buf` and `!buf.has(A)` prevents removal.

2. `r_phi_aware` from `h(A)`: not a phi, follows all deps. A reachable. A in `r_phi_aware`.

3. A is in both `l_phi_aware ∩ r_phi_aware` → **A goes to the FRONTIER**.

But A should NOT be unconditional. Path analysis:
- C1=T, C3=T: graph reaches A (deepPhi left arm). A executes. OK.
- **C1=T, C3=F: graph reaches B (deepPhi right arm). A does NOT execute. But A is in the frontier, so CFG executes A unconditionally. BUG.**
- C1=F: graph reaches h(A). A executes. OK.

`PathEffectMismatch` catches the symptom: on path C1=T, C3=F, A is in `cfg_effs` but not `graph_effs`.

**Root cause**: Line 496 uses `transitiveDepsSet()` instead of `transitiveDepsPhiAwareSet()`.

**Fix**: Replace lines 496-497 in `transitiveDepsPhiAwareAux`:
```
def left_deps = value_deps[1].transitiveDepsPhiAwareSet().put(value_deps[1]);
def right_deps = value_deps[2].transitiveDepsPhiAwareSet().put(value_deps[2]);
```

With the fix, `transitiveDepsPhiAwareSet(N)` would NOT include A (deepPhi is a phi, A is on one arm only). A would not be in the common set. A would go to the overlap (`l_full ∩ r_full`), untangle would clone it, and each copy would be correctly guarded.

**Why the fix is not too conservative**: The phi-aware intersection correctly identifies "unconditionally needed" -- nodes reachable regardless of how any nested phi condition resolves. Verified on several cases:
- N in both arms of a nested phi: still in phi-aware common set (correct, N is unconditional).
- N in only one arm of a nested phi: excluded from phi-aware common set (correct, N is conditional).
- N in both arms of two different nested phis on different outer branches: still in both l_phi_aware and r_phi_aware → frontier (correct).

### P4: Untangle termination

`untangle` iterates: find a lattice with overlapping l/r subgraphs, clone the overlap, recompute lattices, repeat. The iteration limit is `branch_lattices.length` (the initial lattice count).

**Why it should terminate**: Each cloning step takes nodes from the overlap (nodes in both l_subgraph and r_subgraph) and creates two copies -- one exclusively in l, one exclusively in r. The overlap for that lattice decreases. Recomputing lattices may reveal new overlaps for OTHER lattices (because the cloned nodes participate differently), but the total number of distinct sharing relationships should decrease.

**What I'm not sure about**: Whether the limit of `branch_lattices.length` iterations is always sufficient. The code has a `// XXX: idk if this is reasonable` comment on the limit. It's possible that cloning for one lattice creates new overlaps for other lattices in a way that requires more iterations than there are initial lattices. The current code would silently stop with unresolved overlaps, which might cause scheduling failures.

## Effect Properties (Needed for Correctness)

These properties ensure the scheduled CFG executes the same effects on each execution path as the original graph.

### E1: Effect guarding -- effectful nodes in correct branches

An effectful node (one with non-empty `writes` on its `IntrinsicTypedef`) must appear in the scheduled CFG only on execution paths where the original graph would reach it.

If effectful node E is in the l_subgraph of phi(C), it should only execute when C is true. The scheduler places it in the left branch block. If E were incorrectly placed in the frontier (unconditional), it would execute on ALL paths, including C=false.

**Checked by**: `check_path_effects` in `ScheduleChecker`. For each truth assignment to all conditions, it compares the set of effectful nodes reached in the graph (`collect_graph_effs`) vs. the CFG (`collect_cfg_effs`). A mismatch produces `PathEffectMismatch`.

### E2: No effect over-cloning

When `untangle` clones a subgraph, ALL nodes in the subgraph are cloned, including effectful ones. If an effectful node E is in the overlap of two independent conditions' subgraphs, cloning creates E1 and E2. On execution paths where both conditions' relevant branches are taken, both E1 and E2 execute -- but in the original graph, only one E exists.

**Concrete scenario**: `phi(C1, L1, R1)` and `phi(C2, L2, R2)` where E feeds into both L1 and L2 but not R1 or R2. E is in both C1's l_subgraph and C2's l_subgraph. After untangling:
- Path C1=T, C2=T: both E1 and E2 execute (2 effects). Original: E executes once (1 effect).
- Path C1=T, C2=F: E1 executes. Original: E executes. (1 = 1, OK)
- Path C1=F, C2=T: E2 executes. Original: E executes. (1 = 1, OK)
- Path C1=F, C2=F: neither. Original: E doesn't execute. (0 = 0, OK)

The C1=T, C2=T path has 2 effects instead of 1. This is detected by `EffectCountMismatch`.

**Current status**: The scheduler does not prevent this. It clones first, then checks. The check produces error output but doesn't fix the schedule.

**For the validator tier**: This is somewhat less dangerous because the validator's semantics (via unLEM) already expect both branches to execute effects. The merge infrastructure handles double-execution. But for a general-purpose scheduler, this would be a correctness bug.

### E3: State dependency ordering

State deps (`state_deps[sc.tag]`) thread effectful operations in order: if op A writes to Stack and op B reads from Stack, B's `state_deps[Stack.tag]` points to A. This ensures A is scheduled before B.

For phis, `StatePhi` nodes merge state from two branches. After a StatePhi, downstream nodes depend on the StatePhi for state, which correctly serializes them after the branch.

**After unLEM**: New nodes (innerPhi, merge operations) are created with empty state_deps arrays (`Array.new(nstates)`). This is correct because:
- Merge intrinsics (`merge`, `merge_Val`) are pure value operations with `CBDEffect.None`, so they don't need state deps for ordering.
- The innerPhi's state_deps are empty, but its value is only consumed by the outer phi, which retains its original state deps. The outer phi enforces ordering with the rest of the graph.

**Risk**: If a transform after unLEM tries to use the innerPhi's state deps for anything (e.g., inserting a state-dependent node between innerPhi and the outer phi), it would find them empty and lose ordering. This hasn't happened yet but is a latent fragility.

## unLEM-Specific Properties

### U1: Structure of the unLEM rewrite

`unLEM` transforms `phi(cond, L, R)` where `cond` is runtime (INTERPRET stage) into:

```
maybeTrue  = cond.maybeTrue          -- could cond be true?
maybeFalse = cond.maybeFalse         -- could cond be false?
new_cond   = maybeTrue && maybeFalse -- is cond unknown?
innerPhi   = phi(maybeTrue, L, R)    -- if definite, select correct branch
merged     = merge(L, R)             -- both-branches value
result     = phi(new_cond, merged, innerPhi)
```

Semantics by execution path:
- **cond definitely true** (maybeTrue=T, maybeFalse=F): new_cond=F, take innerPhi, maybeTrue=T, take L. Effects: L only.
- **cond definitely false** (maybeTrue=F, maybeFalse=T): new_cond=F, take innerPhi, maybeTrue=F, take R. Effects: R only.
- **cond unknown** (maybeTrue=T, maybeFalse=T): new_cond=T, take merged. Effects: both L and R.
- **impossible** (maybeTrue=F, maybeFalse=F): Would mean cond is neither true nor false. The scheduler/checker doesn't know this is impossible.

### U2: Condition caching across phis

When multiple phis share the same runtime condition, `unLEM` reuses the same `maybeTrue`, `maybeFalse`, and `new_cond` nodes (cached in the state map). This is important because:
- It avoids creating redundant condition tests.
- The BranchLattice grouping can correctly identify phis that share the new_cond condition.
- The merged_effs tracking prevents double-counting of effects that appear in multiple phis' branches.

### U3: Effect deduplication for StatePhi

For `StatePhi` nodes, `unLEM` tracks which effect nodes have already been included in a merge (via the `merged_effs` vector). If a left or right branch node was already merged for a previous phi with the same condition, it replaces it with a `nop` intrinsic. This prevents the same effect from being merged (and thus executed) twice when the "both branches" path is taken.

**The property**: Every effectful node must appear at most once in the merged path for a given condition. The `merged_effs` tracking is per-condition (stored in the state map keyed by the original condition).

**Potential gap**: The check is by node identity (`merged_effs[i].id == left.id`). If a transform before `unLEM` creates two distinct nodes with the same effect, they would not be detected as duplicates. However, since the sea is constructed from SSAD where each operation is a unique node, this shouldn't happen in practice.

### U4: constUnLEM correctness

`constUnLEM` eliminates phis whose condition matches the pattern `bool.&&(X_maybeTrue, X_maybeFalse)` by replacing the phi with its left branch (the merged value). This is correct because:
- The condition `maybeTrue(x) && maybeFalse(x)` always evaluates to true for abstract values that can be both (the common case in the validator).
- The left branch is the "both branches" merged value, which is the correct result for the validator.
- For concrete values where only one direction is possible, constUnLEM should NOT fire... but it does fire unconditionally on the pattern match. This means it assumes the validator context where "always take both" is correct.

**Important**: constUnLEM is specific to the validator tier's semantics. It would be incorrect for the interpreter or any tier where conditional execution should be preserved.

### U5: chooseMerge and final scheduling

After `constUnLEM`, `chooseMerge` replaces `merge_*` intrinsics with their first argument. This simplifies the graph for the final scheduling pass.

The final schedule (`finalss.schedule()`) operates on a graph where:
- Phis with runtime conditions have been eliminated by constUnLEM (replaced by merge).
- Remaining phis have VALIDATE-stage conditions (compile-time known).
- merge nodes have been simplified away.

This means the final schedule is "easy" -- it only needs to handle compile-time conditionals, which are the ones that produce branching code in the generated validator.

## The ScheduleChecker's Role

The checker (`CheckSchedule.v3`) is a post-hoc verification, not an input validator. It checks three properties of the scheduled output:

1. **Dependency ordering** (`check_top_down`): Walks the CFG maintaining a scope. For each node, verifies all deps are in scope. Reports `UnsatNeed`.

2. **Graph equivalence** (`graph_eq`): Structurally compares the scheduled graph against the original. Reports `GraphDiff`. This unwraps Move nodes during comparison.

3. **Path effects** (`check_path_effects`): Exhaustively checks all 2^n condition assignments (up to n=20 conditions):
   - Compares graph-derived effects vs. CFG-derived effects per path (`PathEffectMismatch`).
   - Compares effect counts against orig_sea per path (`EffectCountMismatch`).
   - Groups cloned conditions (via `clone_to_orig`) so copies of the same condition get the same truth value.

The checker can catch bugs in the scheduler and in untangle. But it cannot prevent them -- it's a runtime assertion, not a static guarantee.

### Coverage gaps and proposed additions

**What the existing checks catch for P3-type bugs (frontier misclassification):**

If an effectful node E is incorrectly placed in the frontier (unconditional) when it should be conditional on C, then on the path where C takes the "wrong" branch, E is in `cfg_effs` (it executes unconditionally) but NOT in `graph_effs` (the graph doesn't reach E on that path). `PathEffectMismatch` fires. So the existing check catches effectful frontier misclassification, but as a side effect of a broader check -- the error message says "these effects differ" not "this node was misclassified as frontier."

**Gap 1: Pure node frontier misclassification.** If a pure (non-effectful) node is incorrectly placed in the frontier, no check catches it. The node executes unnecessarily on some paths, producing wasted computation in the generated code. Not a correctness bug, but a code quality issue.

**Gap 2: No attribution to root cause.** When `PathEffectMismatch` fires, it reports which effects differ on which path. It doesn't identify WHETHER the root cause is frontier misclassification (P3), over-cloning (E2), or some other scheduling bug. A more targeted check could distinguish these.

**Proposed check: Scope tightness for effectful nodes.**

For each `ScheduleBranch(C)` in the CFG, collect all effectful nodes in the unconditional blocks above this branch (nodes that execute regardless of C). For each such node E, use the same graph-walk technique as `collect_graph_effs` to verify E is reachable in the graph under BOTH C=T and C=F. If E is only reachable under one truth value of C, report a new error:

```
case FrontierMisclassification(node: IRNode, condition: IRNode, reachable_on: bool);
```

This is structurally similar to the existing `check_path_effects` -- it enumerates truth assignments and walks the graph. But it checks per-branch frontier membership rather than global effect sets, giving a precise diagnosis: "node E was placed before branch C but is only needed when C=[T/F]."

**Implementation sketch:** Walk the CFG tree. At each `ScheduleBranch`, identify all effectful nodes in ancestor blocks (between this branch and the next enclosing branch or root). For each, run `collect_graph_effs` under two assignments: one with C=T, one with C=F (other conditions at both values to be thorough). If E appears in graph_effs under only one, it's a frontier misclassification.

**Proposed check: Partition self-consistency.**

After `untangle` and before scheduling, verify that for each `BranchLattice`:
- `frontier ∩ l_subgraph = ∅` and `frontier ∩ r_subgraph = ∅`
- `l_subgraph ∩ r_subgraph = ∅` (untangle should have resolved all overlaps)
- Every node in `frontier ∪ l_subgraph ∪ r_subgraph` is live

This is cheap to compute and catches untangle failures (unresolved overlaps) directly rather than through downstream effect mismatches.

## Synthesis: What Makes a Sea Schedulable?

### For pure graphs (no effectful nodes)

Any acyclic graph with well-formed phis (S1, S2, S3) is schedulable, provided the condition ordering is acyclic (P2). Untangle handles all shared subgraphs by cloning, and cloning pure nodes is always semantically neutral.

### For effectful graphs

In addition to the structural properties, the graph must satisfy:

- **P2 strictly**: Condition ordering must be acyclic. Cyclic conditions make it impossible to find a valid nesting.
- **E1 and E2**: After untangle, effectful nodes must be correctly guarded and not over-cloned. This is not a property of the INPUT graph alone -- it depends on how untangle resolves overlaps.

A sufficient (but not necessary) condition for E2: **no effectful node is in the dependency subgraph of more than one phi's branch-exclusive region across different conditions.** If an effectful node is needed by only one condition's branch, untangle won't clone it. If it's in the frontier of all conditions, it stays unconditional. The problem arises only when an effectful node is branch-exclusive for two different conditions simultaneously.

### For the validator tier specifically

The validator's unLEM transform explicitly creates a graph where "both branches execute." The merge infrastructure and effect deduplication (U3) handle the double-execution. So the validator is tolerant of effect-sharing patterns that would be bugs in a general-purpose scheduler.

The pipeline `unLEM → schedule → constUnLEM → chooseMerge → schedule` is carefully ordered:
1. unLEM creates the "execute both" structure.
2. First schedule verifies the unLEMed graph is schedulable (catches bugs in unLEM).
3. constUnLEM collapses the LEM phis, committing to "always both."
4. chooseMerge simplifies merge nodes.
5. Final schedule produces the actual output code, which only has compile-time conditionals.

## Open Questions

### Q1: Is the untangle iteration limit always sufficient?

The limit is `branch_lattices.length`. Can cloning create MORE lattices than existed initially? If cloning a subgraph splits one phi into pieces that form new lattices, the count could grow. The `// XXX: idk if this is reasonable` comment suggests this hasn't been proven.

**How to investigate**: Construct or find a graph where untangle exhausts the limit and terminates with unresolved overlaps. Check whether the ScheduleChecker catches the resulting error.

### Q2: What is the minimal set of well-formedness conditions on phis that guarantees schedulability?

The lit review poses this as the central open question. From this analysis, the candidates are:
- Acyclic deps (S1)
- Phi well-formedness (S3)
- Acyclic condition ordering (P2)
- Consistent branch orientation (P1)
- Finite untangle convergence (P4)
- Effect guarding after untangle (E1, E2)

Are these sufficient? Are some redundant? Is there a simpler formulation?

**Approach**: Property-based testing. Generate random well-formed seas, schedule them, check the output. When a failure is found, identify which property was violated.

### Q3: Can impossible condition assignments cause false positives in the path effects checker?

The checker treats all conditions as independent, enumerating all 2^n combinations. After unLEM, conditions like `new_cond = maybeTrue && maybeFalse` are logically constrained: `new_cond=T` implies `maybeTrue=T`. But the checker tests `new_cond=T, maybeTrue=F` anyway.

If the graph and CFG behave differently on impossible paths, the checker reports an error. Is this a real concern?

**Observation**: The `collect_graph_effs` function uses `take_cond_branch` which defaults to `true` for unknown conditions. On impossible paths, both graph and CFG walk may follow "default true" for unrecognized conditions, producing the same result by accident. But this is fragile.

**How to investigate**: Check whether any current unLEM output has conditions where the checker tests impossible assignments, and whether the checker reports spurious errors for them.

### Q4: Is phi-aware traversal always correct for frontier computation?

**Resolved**: see P3 above. The traversal has a bug where `transitiveDepsSet()` is used instead of `transitiveDepsPhiAwareSet()` for the inner common-set computation. A concrete counterexample and fix are documented in P3.

With the fix applied, the remaining question is whether the FIXED phi-aware traversal is always correct. Verified cases:
- N in both arms of nested phi, X doesn't depend on N: N goes to l_subgraph (correct -- only needed when C1=T).
- N in both arms of nested phi, X depends on N: N in frontier (correct -- needed on both paths).
- N behind one arm of a deeper phi, but deeper phi common to both outer arms: N excluded from phi-aware (correct after fix).

No counterexample found against the fixed version. The fixed traversal accurately computes "unconditionally needed" = "reachable regardless of how any nested phi condition resolves."

### Q5: What are the semantics of scheduling a sea produced by arbitrary graph rewrites (not from SSAD)?

Currently all seas originate from SSAD. But the lit review contemplates using Sea as a general IR. Transforms like unLEM create new phis that didn't come from SSAD. These phis inherit well-formedness from the careful structure of unLEM, but a more general rewrite engine might create phis that violate P1 or P2.

The question from the lit review: "what is the minimal set of well-formedness conditions on phis that guarantees schedulability, independent of how the Sea was produced?" This document's properties are a first attempt at an answer, but they haven't been verified as sufficient by any formal argument.

### Q6: Effect interaction between untangle and unLEM's merge structure

After unLEM, the graph has merge nodes that combine effects from both branches. Untangle may then clone parts of this merge structure. Does cloning a merge node (or its inputs) preserve the "execute both" semantics correctly?

Specifically: if `merge(L, R)` is in a shared subgraph and gets cloned, both copies merge L and R. But the cloned copy's L and R might themselves be clones. Does the chain of cloning preserve the correct effect relationships?

I believe this is correct because `cloneSubgraph` remaps all internal deps: the cloned merge points to cloned copies of L and R (if they're in the subgraph), preserving the dependency structure. But the interaction between multiple rounds of cloning (untangle iterates) and the unLEM merge structure hasn't been carefully verified.

### Q7: Is `same_scope` sufficient to prevent incorrect BranchLattice merging?

`same_scope` checks that a phi isn't on opposite sides of another lattice from the existing phis in its target lattice. But it skips phis that are in BOTH subgraphs of another lattice (`phi_in_l && phi_in_r`), reasoning that they'll be cloned.

What if the phi is in both subgraphs of lattice A, gets cloned, and the clone ends up on the opposite side of lattice B from where same_scope expected it? The same_scope check runs before untangle, using pre-clone subgraph information. Untangle recomputes lattices after each step, so stale same_scope decisions get revisited. But is the recomputation always sufficient?

### Q8: The `can_merge_branches` check

`can_merge_branches` rejects merging a phi into a BranchLattice if the phi is an ancestor or descendant of any existing phi in the lattice. This prevents grouping phis that have a dependency relationship.

But it only checks direct Sea ancestry (via `isAncestor`/`isDescendant`), which does a full transitive dependency walk. This is correct but expensive (O(n) per phi pair). More importantly, are there cases where two phis pass this check but should still not be grouped? For instance, if they share a complex dependency pattern that makes their partitions incompatible after merging?

## Summary Table

| Property | Category | Maintained by SSAD construction? | Maintained by unLEM? | Checked by ScheduleChecker? |
|----------|----------|----------------------------------|----------------------|-----------------------------|
| S1: Acyclic deps | Structural | Yes | Yes (new nodes only add forward edges) | Implicitly (scheduler would hang) |
| S2: Start/Finish | Structural | Yes | Yes (not modified) | No |
| S3: Phi well-formedness | Structural | Yes | Yes (3-element value_deps) | No |
| P1: Branch orientation | Partition | Yes (from If nesting) | Yes (same orientation) | Indirectly (PathEffectMismatch) |
| P2: Acyclic conditions | Partition | Yes (tree nesting) | Yes (inner from outer) | No (cyclic entries appended silently) |
| P3: PhiAware correctness | Partition | **BUG**: full traversal bleeds through nested phis | Same bug | Indirectly (PathEffectMismatch) |
| P4: Untangle termination | Partition | Likely yes | Unknown | No (limit hit silently) |
| E1: Effect guarding | Effect | N/A (pre-scheduling) | N/A | Yes (PathEffectMismatch) |
| E2: No over-cloning | Effect | N/A (pre-scheduling) | N/A | Yes (EffectCountMismatch) |
| E3: State dep ordering | Effect | Yes (linear threading) | Fragile (empty state_deps on innerPhi) | Indirectly (dependency ordering) |
