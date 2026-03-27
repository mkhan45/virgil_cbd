# Property-Based Testing Plan for the Sea of Nodes Scheduler

## Goal

Increase confidence in the scheduler's correctness by systematically generating diverse Seas and checking that scheduling preserves semantic correctness. This document identifies the minimal pre-conditions the scheduler requires, analyzes what makes a Sea "interesting" for testing, and outlines a strategy for generating test inputs.

## 1. The Sea as a Computational Model

A Sea is a dataflow graph with two kinds of edges:
- **Value dependencies**: pure functional data flow (arguments to operations)
- **State dependencies**: monadic state threading per `StateComponent`

Each `StateComponent` (Codeptr, Stack, Trap, Locals, Globals, Tables, Memory, Extra) is an independent state thread. Pure computations float freely. Effectful operations are sequenced through state deps on their relevant components -- like independent state monads running in parallel.

`Phi` is a value-level mux: `phi(cond, left, right)` selects between two values.
`StatePhi(scs)` is a state-level mux: merges two state threads for the given set of state components.

The scheduler's job: linearize this partially-ordered graph into a CFG that preserves the data and state dependencies, placing branch arms of phis into if/else blocks.

## 2. Minimal Pre-conditions for the Scheduler

These are the invariants the scheduler *actually requires* based on reading the code. The goal is to keep this list as small as possible -- anything not listed here should be something the scheduler handles gracefully.

### Hard requirements (scheduler crashes or produces nonsense without these)

**H1. DAG**: The dependency graph (via `deps()`) must be acyclic. `transitiveDepsSet()` does unbounded recursion with no cycle detection -- it will stack overflow on cycles.

**H2. Start and Finish nodes exist**: `SeaScheduler` takes `top_node` and `bottom_node` (typically Start/Finish). The scheduling BFS starts from `bottom_node` and the schedule check expects `start` to be the root of the dependency tree.

**H3. Phi/StatePhi value_deps = [cond, left, right]**: Hard-coded indexing at `value_deps[0]`, `[1]`, `[2]` throughout: `branch_partition`, `addMoves`, `untangle`, `scheduleReadyPhi`, `prependScheduleBranch`, `toSSAD`. This is the most rigid structural assumption.

**H4. state_deps.length == StateComponent.count (8)**: State deps are indexed by `sc.tag`. Out-of-bounds would crash.

**H5. Live nodes have non-null var_data**: Used for `sourceName` in `toSSAD`, rendering, and stage checks. Null var_data on a live non-Start node causes null dereference.

**H6. All deps of live nodes must be live**: If a live node depends on a dead node, the dependency won't be scheduled, causing `UnsatNeed` errors. (This is guaranteed when the Sea is self-consistent -- the live set is computed as transitive deps from Finish.)

### Soft requirements (scheduler may produce suboptimal results or trigger error checks, but won't crash)

**S1. Phi conditions should be INTERPRET-stage**: VALIDATE-stage conditions don't produce runtime branches. The scheduler doesn't special-case this -- it will still create `ScheduleBranch` nodes -- but the resulting schedule may be semantically odd.

**S2. BranchLattice mergeability**: `can_merge_branches` checks that phis sharing a condition are not ancestor/descendant of each other. If this fails, they get separate BranchLattices (separate if/else blocks for the same condition). Not a crash, but potentially suboptimal.

**S3. Untangle termination**: The untangle loop processes one condition at a time, cloning subgraphs. It assumes the process converges (no condition is reprocessed). This holds when the dependency structure is well-founded, which follows from H1 (DAG).

### What the scheduler does NOT require (opportunities for generality)

- **No requirement for imperative origin**: The scheduler does not assume properly nested branches or SESE regions. The `untangle` step explicitly handles shared subgraphs between branches by cloning.
- **No requirement for linear state threading**: A state component could have multiple writers in the same branch. The scheduler only cares about data/state dependency ordering, not semantic state consistency.
- **No requirement for frontier/subgraph disjointness**: `branch_partition` computes frontier as the intersection of left and right phi-aware transitive deps. The subgraphs are defined as full_deps minus frontier. Overlapping structures are handled by cloning during untangle.
- **No requirement for condition dominance**: The condition of a phi doesn't need to dominate both arms in any formal sense -- it just needs to be a node that both arms transitively depend on (which is structurally guaranteed by being `value_deps[0]`).

## 3. What Makes a Sea "Interesting" for Testing

The scheduler's complexity lives in a few key areas. Test generation should target these:

### 3a. Untangle (subgraph cloning)

Untangle is the trickiest part of the scheduler. Interesting inputs:
- **Shared subgraphs**: Left and right branches of a phi share intermediate computations. Forces cloning.
- **Deep frontier**: Many shared ancestors between branches. The frontier set is large relative to the subgraphs.
- **Multiple phis sharing a condition**: Triggers BranchLattice merging, which unions frontier/l_subgraph/r_subgraph across phis.
- **Nested phis with different conditions**: Triggers topo_sort_lattices. The inner phi's branches may contain nodes that are also in an outer phi's subgraph.
- **Cascading untangle**: After cloning one condition's subgraphs, the recomputed lattices for the next condition see different subgraph shapes.

### 3b. Scheduling (node placement)

- **Effectful operations in branches**: Operations with state writes inside branches must end up in the correct branch of the schedule. This is what path-sensitive effect checking validates.
- **Operations with cross-component effects**: An intrinsic that writes both Memory and Stack creates ordering constraints across two state threads simultaneously.
- **Deep dependency chains**: A node far from Finish with many transitive dependents. Tests that `lowBounds` propagation works correctly.
- **Wide fan-out**: A single node used by many others. Tests `unscheduled_use_count` tracking.

### 3c. BranchLattice grouping

- **Phis that *can* merge**: Same condition, no ancestor/descendant relationship between phis.
- **Phis that *cannot* merge**: Same condition but one phi is an ancestor of another.
- **Many phis for one condition**: 3+ phis all sharing the same condition. Tests that the merged frontier/subgraphs remain consistent.

### 3d. Edge cases

- **Empty Sea**: Just Start/Finish.
- **No phis**: Purely linear computation (no branches to schedule).
- **Pure-only Sea**: No state dependencies at all (everything floats). The scheduler must still produce a valid linear order.
- **All-effectful Sea**: Every operation writes state. Maximum ordering constraints.
- **Single-node subgraphs**: Branches where each arm is a single Lit or single Intrinsic.

## 4. Generation Strategy

Two approaches, both worth pursuing. Approach A is the easy path. Approach B is the interesting one.

---

### Approach A: Generate SSAD, convert via `Seas.ofSSAD()`

The straightforward path. Generate random SSAD trees, convert to Sea, schedule.

**SSAD Generator design**: Maintain a scope of available variables (all u32 for simplicity). At each step, randomly choose:
- `LetLit("vN", "42", "u32", rest)` -- new literal, adds to scope
- `LetApp("vN", intrinsic, [args...], rest)` -- apply intrinsic, args from scope
- `If("cond", then_body, else_body, phis, rest)` -- branch, recursively generate bodies

Parameters to vary per test:
- `seed`: PRNG seed for reproducibility
- `max_depth`: 0-3 (branch nesting)
- `width`: 1-6 (operations per level)
- `effect_density`: fraction of operations that are effectful
- `shared_cond_prob`: probability of reusing an existing condition (BranchLattice merging)

Pros: Automatically satisfies all hard pre-conditions (H1-H6). Easy to implement.
Cons: Only generates imperative-shaped Seas. Can't produce arbitrary sharing patterns, can't express copyable-state semantics.

---

### Approach B: Functional DSL for direct Sea construction

A small functional expression language where programs directly describe Sea graphs. This is more expressive than SSAD and lets us control the exact graph shape, including shared subgraphs and state copy semantics.

#### The language

Think of it as a typed lambda calculus with monadic state:

```
-- Values (pure, freely shareable)
e ::= lit n                        -- literal constant
    | op(e, e, ...)                -- pure operation
    | if c then e else e           -- value-level mux (produces Phi)

-- State operations (sequenced per component)
s ::= read_sc(e)                   -- read state component sc, returns value
    | write_sc(e, ...)             -- write state component sc
    | clone_sc                     -- fork state component sc (returns two handles)

-- Programs (sequence of bindings)
p ::= let x = e; p                 -- bind pure value
    | let x = s; p                 -- bind effectful operation (threads state)
    | let (sl, sr) = clone_sc; p   -- fork state for branching
    | branch c { left: p, right: p, merge: ... }  -- conditional with state merge
    | done
```

But we don't need to literally implement a parser or interpreter. The DSL is a *construction API* for building Seas directly via `sea.mkNode()`. Something like:

```
// Builder API (conceptual)
def b = SeaBuilder.new();
def x = b.lit(42, TypeVar.U32);
def y = b.lit(10, TypeVar.U32);
def c = b.pure("test_cond", [x]);       // pure op, no state
def w = b.effect("write_mem", [x, y]);  // writes Memory
def r = b.effect("read_mem", [x]);      // reads Memory (sequenced after w)
def v = b.phi(c, r, y);                 // value mux
b.finish([v]);                           // wire to Finish
```

The builder tracks state threads internally, wiring `state_deps` automatically based on intrinsic reads/writes -- similar to how `addSSAD` threads `state_vars`, but without the imperative control flow constraint.

#### Copyable vs. non-copyable state

This is the key design idea. Each `StateComponent` can be classified as:

- **Linear (non-copyable)**: Must be used exactly once per path. The scheduler MUST use branches to avoid re-executing effects. Examples: Memory writes, I/O, traps.
- **Copyable**: Can be cheaply duplicated. The scheduler MAY clone operations on this state if it's beneficial. Examples: a counter, a validation flag, the codeptr.

This classification affects what the scheduler is *allowed* to do during untangle. Currently, untangle clones graph nodes (creating duplicate IR nodes for shared subgraphs). For non-copyable state, the path-effect checker ensures each effectful operation executes exactly once. For copyable state, duplicating an operation is semantically fine -- executing it on both paths is equivalent to executing it once and copying the result.

#### The `clone` intrinsic

A `clone_sc` intrinsic explicitly marks where a state component is forked:

```
reads: {sc}
writes: {sc}    -- "consumes" the current state, produces a new one
```

Actually, the tricky part: a clone needs to produce TWO independent state threads from one. In the current model, an intrinsic node has one output that feeds into state_deps of downstream nodes. To produce two threads, we'd need either:

**Option 1: Clone as a phi-like construct.** A `clone` node appears at the branch point. The left branch reads from clone's "left output" and the right branch from "right output." But this doesn't fit the current state_deps model (a node IS the state -- there's no separate "left output" vs "right output").

**Option 2: Clone is implicit -- expressed through StateComponent classification.** Instead of an explicit clone intrinsic, annotate each StateComponent as copyable or non-copyable. The scheduler (specifically, untangle + the checker) then knows:
- For non-copyable components: when untangle clones a subgraph, effectful operations on these components must NOT be duplicated across paths. They stay in the frontier (shared).
- For copyable components: untangle can freely clone effectful operations on these components. Running `write_sc` on both paths is semantically equivalent to running it once and copying.

**Option 3: Clone is opt-in per branch point.** At each Phi/StatePhi, certain state components are marked as "cloned at this branch." This is a per-phi annotation rather than a global component property. This is the most flexible: Memory might be non-copyable in one branch but (in principle) copyable at a different branch where it's known to be cheap.

Option 2 seems like the right starting point -- it's the simplest and doesn't require new node types.

#### How this affects the Sea model

With copyable state, the correctness property changes:

- **Non-copyable sc**: For every path (assignment of branch conditions), the *set* of operations that write to `sc` must be the same in the graph and CFG. (Current path-effect check.)
- **Copyable sc**: For every path, the *final state* of `sc` must be equivalent. But we don't need to check that individual operations appear exactly once -- duplicates are OK.

In practice, for testing:
- Generate Seas where some components are copyable and some aren't.
- The path-effect checker should only check non-copyable components for exact operation-set equality.
- For copyable components, we only need: if the original graph says `sc` was written on a path, the CFG also writes `sc` on that path (but possibly more times).

#### Properties functional programs should satisfy

For a functional-DSL-generated Sea to be a valid scheduler input:

1. **H1-H6 from section 2** (DAG, Start/Finish, Phi structure, state_deps sizing, var_data, liveness). The builder API ensures these by construction.

2. **State threading consistency**: For each state component, the dependency chain should be a valid partial order. Specifically:
   - Every read of `sc` depends (via state_deps) on the most recent write to `sc`.
   - Every write to `sc` depends on the most recent prior read-or-write to `sc`.
   - At branch points: each branch gets its own state thread (a copy for copyable components, or a mux for non-copyable ones).
   - At merge points: non-copyable components require a StatePhi to select; copyable components may also use StatePhi, or may simply take one side.

3. **No dangling state**: Every state thread that's started must be either consumed by a downstream operation or flow to Finish's state_deps.

4. **Pure operations are genuinely pure**: A node with no reads/writes in its intrinsic_def should have all-null state_deps (except possibly pointing to Start). This lets the scheduler freely reorder it.

#### Generation strategy for Approach B

The builder maintains, per state component, a "current state node" (like `state_vars` in `addSSAD` but explicit).

```
component SeaBuilder {
    var sea: Sea;
    var state_heads: Array<IRNode>;  // current state per component
    var values: Vector<IRNode>;      // available value nodes
    var copyable: StateComponent.set; // which components are copyable

    def lit(val: string, tipe: TypeVar) -> IRNode;
    def pure(name: string, args: Array<IRNode>) -> IRNode;
    def effect(name: string, args: Array<IRNode>) -> IRNode;  // threads relevant state
    def phi(cond: IRNode, left: IRNode, right: IRNode) -> IRNode;
    def statePhi(cond: IRNode, scs: StateComponent.set,
                 left_state: Array<IRNode>, right_state: Array<IRNode>);
    def fork() -> Array<IRNode>;  // snapshot state_heads for a branch
    def finish();                 // wire state_heads to Finish
}
```

To generate interesting programs:

1. Start with some literals and pure ops (build a base of values).
2. Introduce effectful ops on various state components.
3. At random points, introduce a branch:
   a. Pick a condition value.
   b. Fork the state (`fork()` returns a copy of state_heads).
   c. Generate left branch operations (using the forked state).
   d. Generate right branch operations (using a second fork).
   e. Create Phi/StatePhi to merge.
4. Key: sometimes generate shared subgraphs by having both branches depend on a common intermediate computation. This is the thing SSAD can't naturally express.
5. For copyable components: sometimes skip the StatePhi entirely, letting both branches "own" independent copies.

### Synthetic intrinsic palette (shared by both approaches)

Register a small set of intrinsics with controlled effect profiles (bypass file I/O):

| Name | Args | Return | Reads | Writes |
|------|------|--------|-------|--------|
| `pure_u32` | `[u32.I]` | `u32.I` | {} | {} |
| `pure_bin` | `[u32.I, u32.I]` | `u32.I` | {} | {} |
| `test_cond` | `[u32.I]` | `u32.I` | {} | {} |
| `write_mem` | `[u32.I, u32.I]` | void | {} | {Memory} |
| `read_mem` | `[u32.I]` | `u32.I` | {Memory} | {} |
| `rw_mem` | `[u32.I]` | `u32.I` | {Memory} | {Memory} |
| `write_stack` | `[u32.I]` | void | {} | {Stack} |
| `read_stack` | `[]` | `u32.I` | {Stack} | {Stack} |
| `write_glob` | `[u32.I]` | void | {} | {Globals} |

All return types `Stage.INTERPRET` so phis produce runtime branches.

For copyable-state testing, add:

| Name | Args | Return | Reads | Writes | Notes |
|------|------|--------|-------|--------|-------|
| `write_codeptr` | `[u32.I]` | void | {} | {Codeptr} | Copyable component |
| `read_codeptr` | `[]` | `u32.I` | {Codeptr} | {} | Copyable component |
| `write_extra` | `[u32.I]` | void | {} | {Extra} | Copyable component |

Mark Codeptr and Extra as copyable; Memory, Stack, Globals as non-copyable. This gives us a mix for testing.

## 5. Properties to Check

### Already checked by ScheduleChecker (runs automatically via `scheduler.check()`)

- **Graph equivalence**: Post-scheduling graph structurally equals original (unwrapping Moves)
- **Dependency ordering**: All deps of each node appear earlier in the schedule
- **Path-sensitive effect correctness**: For every 2^n path through conditions, same effectful nodes are reached via graph traversal and CFG traversal

### Additional properties to test

**P1: Schedule completeness** -- Every live node (except Start, Move nodes) appears exactly once across all `ScheduleBlock.prims` and `CFGPhi.phis`.

**P2: Liveness after finalize** -- Every node remaining in `ScheduleBlock.prims` after `finalize()` is in the live set.

**P3: Round-trip** -- `scheduler.bottom_block.toSSAD()` produces valid SSAD that can be re-scheduled without errors.

**P4: Determinism** -- Scheduling the same Sea twice produces identical `ScheduleBlock.prims` orderings.

**P5: Branch topology** -- Every `ScheduleBranch.condition` corresponds to a phi condition in the original graph. Every `ScheduleBranch` has a matching `CFGPhi`.

## 6. Open Questions

### Copyable state semantics

- **Should copyability be a global property of a StateComponent, or per-branch?** Global is simpler (Option 2 above). Per-branch (Option 3) is more expressive but adds complexity to both the Sea model and the checker.

- **What does the path-effect checker need to change?** Currently it checks exact operation-set equality per path. For copyable components, we'd need a weaker check: the set of operations on a copyable component in the CFG is a *superset* of those in the graph (duplicates are OK). Or we only check ordering constraints, not exact sets.

- **Does the scheduler need to change, or just the checker?** The scheduler's untangle already clones subgraphs. For copyable state, the current behavior might already be correct -- we just need the checker to not flag the duplicates as errors. The interesting optimization question is: should the scheduler *choose* to clone effectful operations on copyable state when it leads to a better schedule?

### Testing infrastructure

- **How should we handle scheduler errors that are "expected"?** The scheduler currently prints errors to stdout. Should the test harness capture these and count them as failures? Or are some errors acceptable for certain graph shapes?

- **Scaling**: How many random tests are sufficient? Start with ~1000 for Approach A, fewer (but more carefully constructed) for Approach B.

### Future directions

- **Transformed Seas**: Test Seas after `SeaTransforms.unLEM`, `constUnLEM`, `chooseMerge`. These produce non-imperative-shaped Seas that the scheduler must handle.

- **Round-trip testing**: SSAD -> Sea -> schedule -> toSSAD -> Sea -> schedule. Verifies `toSSAD()` produces semantically valid output.

- **Shrinking**: When a random test fails, automatically simplify the input (remove nodes, flatten branches) to find a minimal reproducer.
