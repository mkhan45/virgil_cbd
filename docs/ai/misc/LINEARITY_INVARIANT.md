# State Affinity Within Branches

## Background: VSDG Gamma Nodes vs Sea Phi Nodes

VSDG gamma nodes enforce that the scopes of all conditions form a **laminar family** — any two condition-scopes are either disjoint or one entirely contains the other. This falls out of the gamma being a region-bearing node: it *contains* two subgraphs, and every computation lives at exactly one level of the resulting nesting tree. Data crosses region boundaries only through explicit input/output ports.

Sea phi nodes don't create regions or boundaries. A phi is a flat dataflow node `(cond, left, right)` — no scoping, no containment. The nesting of conditions is undetermined in the graph and discovered at scheduling time by `branch_partition`. This means the Sea can represent graphs with non-laminar condition scopes (the Lawrence 5.2(a) pattern), where two conditions' guarded subgraphs partially overlap. The VSDG requires duplication to represent these; the Sea represents them directly and resolves them via `untangle`.

But this flexibility comes with preconditions. The Sea does not enforce structural scoping, so it must enforce semantic invariants on state flow to remain schedulable.

## Definitions

**State component.** One of `{Codeptr, Stack, Trap, Locals, Globals, Tables, Memory, Extra}`, each with a unique tag. A node's `state_deps` array is indexed by tag — `node.state_deps[S.tag]` is the node that last produced state S before `node`.

**State producer.** Node A *produces state S* if some node M has `M.state_deps[S.tag] = A`. Producers are: `Start` (initial state for all components), intrinsics with S in `defn.writes`, and `StatePhi` nodes whose `statecomps` includes S.

**State consumer.** Node M *consumes state S from A* if `M.state_deps[S.tag] = A`.

**State chain.** For a given state component S, the *state chain* is the subgraph of all producers and consumers of S, connected by `state_deps[S.tag]` edges. In a well-formed Sea derived from SSAD, this chain has the structure of a tree from `Start` to `Finish`:

```
Start ──→ W₁ ──→ W₂ ──→ ┬─ L₁ ──→ L₂ ──→ StatePhi ──→ W₃ ──→ Finish
                         └─ R₁ ──→ R₂ ──↗
```

Each node consumes S from exactly one predecessor and produces S for exactly one successor — except at branch points, where the chain forks into two paths (left/right), and at `StatePhi` nodes, where two paths merge.

**Branch-exclusive.** For a Phi or StatePhi P, `branch_partition(P) = (frontier, l_subgraph, r_subgraph)`. A node in `l_subgraph ∪ r_subgraph` is *branch-exclusive* for P — it exists on only one side of P's conditional. A node in `frontier` is *shared* — available regardless of which branch executes.

**Effectful.** Node A is *effectful* if `A.op = Intrinsic(defn)` with `defn.writes ≠ ∅`.

**Forward path.** A *forward path* from A to N is a sequence A → B₁ → B₂ → ... → N following children edges (from a node to its users/consumers).

**Post-merge consumer.** For a StatePhi P, a *post-merge consumer* is any node N that directly depends on P (P appears in `N.value_deps` or `N.state_deps`).

**Branch site.** A *branch site* is a particular merge occurrence identified by both its condition and its enclosing branch-scope context. Two `Phi`/`StatePhi` nodes may reference the same condition node while still representing distinct branch sites if they live in incompatible enclosing scopes.

**Pre-`addMoves` state arms.** Before `addMoves`, `StatePhi(cond, left, right)` stores its branch-state arms in `value_deps[1]` and `value_deps[2]`. These edges carry branch-state structure, not ordinary value escape by themselves.

## The Principle: State Affinity

State components are affine resources with respect to writes: at any program point, there is exactly one "current version" of state S, and any number of nodes may read it, but at most one write may advance it to a new version. The state chain for S — the sequence of writes — is a single thread of control that doesn't fork.

At a conditional, the state chain *branches*: the version of S entering the conditional flows to both arms, each arm may produce new versions through writes, and a `StatePhi` merges the two resulting versions into one. After the merge, only the merged version exists — the branch-internal versions are consumed by the merge.

Affinity means each state version has at most one write successor. Reads don't consume the resource — any number of nodes may observe a state version without advancing it. If A writes state S inside a branch, A's state-S output has one write successor: either the next writer on the same branch, or `StatePhi` P itself. No write outside the branch may take A's output as its state-S predecessor, because that would fork the write chain.

## The Principle: Branch Isolation

An effectful branch-exclusive node is **pinned** to its branch. It can't be hoisted before the branch (doing so would execute the effect unconditionally) and it can't be sunk past the merge (the `StatePhi` consumes its state output at the merge point). Any node N that depends on a pinned node A must be schedulable within A's branch.

But if N also depends on `StatePhi` P, N must be schedulable after the merge — a position incompatible with "within A's branch."

For pure (non-effectful) nodes, `untangle` can clone a pure branch-exclusive node, placing one copy in the branch (for the phi arm) and leaving the original accessible outside. But `filtered_clone_subgraphs` (`Schedule.v3:447`) specifically prevents cloning of effectful nodes with escaping uses — duplicating a write would duplicate the effect. So effectful nodes can't escape their branch through cloning.

## The Invariant: Scope-Compatible Sealing

**Scope-Compatible Sealing for Effectful Nodes.** For every branch-exclusive effectful node A (arm of StatePhi P for state component S): every forward path from A to a post-merge consumer must pass through a `Phi`/`StatePhi` that is a scope-compatible merge boundary for A's branch site.

Crossing some phi-shaped node is not enough. A merge only seals the branch if it corresponds to the same branch site as A's enclosing conditional, or to a properly enclosing branch site that preserves a unique branch lineage for A. A repeated occurrence of the same condition in an incompatible enclosing scope does not count as sealing.

An exact way to state this is in terms of **outstanding branch obligations**.

- For a branch-exclusive effectful source `A`, its initial obligations are all branch sites for which `A` is on exactly one side of the site.
- As a forward path from `A` proceeds through descendants, those obligations remain in force until they are discharged by a scope-compatible merge boundary.
- A merge boundary may discharge one obligation while leaving enclosing obligations still active.
- A path is invalid as soon as an `A`-derived value reaches a node that lies outside any still-outstanding obligation.

So branch isolation is not just "eventually hit some phi". It is: an effectful branch-local value must remain inside **all** enclosing branch sites until each one is discharged by the right merge.

Equivalently: in the forward graph (following children edges from A), every reachable node must satisfy one of:

1. It is branch-exclusive for P on the same side as A, or
2. It is a scope-compatible `Phi` or `StatePhi` (which seals the branch boundary), or
3. It is `P` itself (or, after `addMoves`, its associated `Move` nodes)

Condition (1) is recursive — the entire subgraph forward-reachable from A must be contained within the branch until it hits a scope-compatible merge boundary.

This means: if A writes state and is pinned to one side of P's conditional, then ALL of A's outputs (state and value), and all downstream computations derived from those outputs, are visible only within that branch. Any value that needs to cross the branch boundary to reach a post-merge consumer must be routed through the right `Phi`/`StatePhi` boundary for that branch lineage.

### Why the direct-dependency formulation is insufficient

A weaker version of this invariant — "no node may have direct edges to both A and P" — is necessary but not sufficient. It misses transitive chains:

```
A = div(x, y)                  // writes Trap, branch-exclusive for P
B = pure_op(A_value)            // pure, branch-exclusive, depends on A
P = StatePhi(cond, A, D)        // merges Trap
C = use(B_value, P_state)       // depends on B (transitively on A) and P
```

No node has direct edges to both A and P — B depends on A but not P; C depends on B and P but not A. Yet this graph is unschedulable:

1. `untangle` clones B (pure). Clone B' goes in the branch for P's left arm. Original B keeps its dep on A and its child C.
2. After recompute, A is still in l_subgraph (reachable from P's left arm through B'). B is outside the partition (no longer reachable from P's arms) but still depends on A.
3. No overlap in the recomputed lattice — untangle terminates without resolving the problem.
4. The scheduler pulls A before the branch (to be accessible to both B outside and B' inside), causing A's effect to execute unconditionally. If A's effect should be conditional (e.g., a trap), the schedule is semantically wrong.

The root cause: B's value escapes the branch (through C) without passing through a Phi. Since B depends on A (effectful, pinned), the escaping chain drags A out of the branch.

The fix is to route B's value through a Phi at the branch boundary:

```
A = div(x, y)
B = pure_op(A_value)
P_state = StatePhi(cond, A, D)
P_value = Phi(cond, B_value, _)    // seals B's value at the boundary
C = use(P_value, P_state)          // clean: only post-merge deps
```

### Why the "any phi seals" formulation is insufficient

Even the stronger rule "every escaping path must pass through a `Phi`/`StatePhi`" is still incomplete. It misses cases where the path crosses a phi boundary that belongs to a different branch site:

```
if (p) {
    if (q) { A = pop_u32(); ... }
} else {
    if (q) { B = pop_u32(); ... }
}

P1 = StatePhi(q, A, ...)
P2 = StatePhi(q, B, ...)
```

Both `P1` and `P2` mention the same condition `q`, but they do not represent the same branch site: one is nested under `p`, the other under `!p`. A value derived from `A` is not meaningfully sealed by crossing `P2`, and vice versa. Treating them as interchangeable would assign the same conditional value/effect to two incompatible enclosing scopes.

So the real requirement is not "cross a phi" but "cross the right merge boundary for the originating scope."

### Exact path formulation

Let a forward path from effectful source `A` be:

```text
A -> N1 -> N2 -> ... -> Nk
```

Associate to each path position `Ni` a set `O_i` of outstanding branch obligations.

1. `O_0` is the set of all branch sites for which `A` is branch-exclusive.
2. Moving from `Ni` to `Ni+1`:
   - first discharge any obligations whose scope-compatible merge boundary is `Ni+1`
   - then require `Ni+1` to remain on the required side of every obligation still in `O_i`
3. The path is valid iff this succeeds at every step until all escaping uses have crossed compatible merge boundaries.

This formulation captures all of the earlier examples:

- direct escape: an obligation is violated immediately
- transitive escape: the obligation survives through pure intermediates, then is violated later
- repeated-condition sibling escape: the wrong `q` merge does not discharge the obligation, because it is not scope-compatible

### Justifications

The scope-compatible sealing invariant has two independent justifications:

| Justification | What it prohibits | Why |
|---|---|---|
| **State affinity** | State S output from A used as write-predecessor by anything other than the next writer on the same branch or P | Forks the write chain — two writers advancing the same state-S version |
| **Branch isolation** | Any forward-reachable descendant of A having a post-merge dependency without passing through a scope-compatible merge boundary | Creates a chain that pulls the effectful node out of the branch, or assigns its conditional meaning to an incompatible branch site |

## What This Rules Out

The invariant prevents any graph where a value derived from a branch-exclusive effectful node "leaks" past the branch boundary without going through a scope-compatible merge boundary. This includes:

**Direct escape** — a post-merge consumer directly depends on the effectful node:
```
A = div(x, y)                    // writes Trap, produces quotient
D = some_op(z)                   // writes Trap on other branch
P = StatePhi(cond, A, D)         // merges Trap state
N = use_both(A_value, P_state)   // VIOLATION: direct edges to both A and P
```

**Transitive escape** — a chain of pure nodes carries the value out:
```
A = div(x, y)                    // writes Trap, branch-exclusive
B = pure_op(A_value)             // pure, branch-exclusive
P = StatePhi(cond, A, D)         // merges Trap
C = use(B_value, P_state)        // VIOLATION: B escapes without a compatible Phi boundary
```

In both cases the fix is the same — route escaping values through a Phi:
```
P_state = StatePhi(cond, A, D)      // merges Trap
P_value = Phi(cond, escaping_val, _) // seals at boundary
N = use(P_value, P_state)           // clean
```

**Incompatible repeated-condition escape** — a value crosses a phi boundary, but the boundary belongs to a different branch site:

```
if (p) {
    if (q) { A = pop_u32(); ... }
} else {
    if (q) { B = pop_u32(); ... }
}

P1 = StatePhi(q, A, ...)
P2 = StatePhi(q, B, ...)
```

This is still a violation: `P1` does not seal values from `B`, and `P2` does not seal values from `A`, because the two `q` merges live in incompatible scopes under `p` and `!p`.

## Full Semantic / Schedulability Preconditions

For a pre-untangle, pre-`addMoves` Sea to have an unambiguous conditional meaning, the following must hold:

1. **Acyclic data dependencies** — the graph is a DAG following dep edges. This implies acyclic condition ordering (if BranchLattice A contains B's phis and vice versa, there's a data cycle).

2. **Basic structural well-formedness** — correct arity (phis have 3 value_deps: `[cond, left, right]`), valid state_deps indexing, Start/Finish exist, etc.

3. **Affine state chains** — for each state component, the write chain from `Finish` reaches every live writer; otherwise a state modification is lost.

4. **Scope-compatible sealing for effectful nodes** — every forward path from a branch-exclusive effectful node to a post-merge use passes through a scope-compatible `Phi`/`StatePhi` boundary.

5. **Branch-site coherence** — repeated uses of the same condition are allowed, but they do not denote the same boundary unless their enclosing branch scopes are compatible.

Equivalently, for every effectful source there exists a well-defined set of outstanding branch obligations, and every value-carrying forward path from that source remains within those obligations until they are discharged by scope-compatible merges.

Pure branch-exclusive nodes don't need sealing — `untangle` clones them to resolve cross-boundary dependencies. Effectful nodes can't be cloned (`filtered_clone_subgraphs` prevents it), so the graph must be pre-sealed.

## Construction and Fragility

The SSAD-to-Sea translation (`addSSAD` in `SeaOfVariables.v3:89`) produces graphs that satisfy these preconditions by construction. The SSAD's tree structure ensures that every branch-internal computation is sealed behind the correct Phi/StatePhi nodes at the merge point — values and state from each branch are routed through explicit merge nodes before becoming available to post-merge code.

Transforms that manipulate the Sea directly (graph rewrites, optimizations) can violate the scope-compatible sealing invariant if they create forward paths from branch-internal effectful nodes to post-merge consumers that bypass the correct merge boundary, or if they re-materialize the same condition in incompatible enclosing scopes and let effectful value flow treat those occurrences as interchangeable. This is analogous to the point from the lit review about "Sea Phi NOT from SSAD": the SSAD structure guarantees well-formedness, but raw transforms have no safety net and must maintain these invariants manually.

## Checker Note

The exact graph-checking formulation suggested by this document is a path-sensitive obligation analysis:

1. Start each effectful branch-exclusive source with the set of all branch-site obligations it is inside.
2. Walk forward through descendants while tracking whether the source's value has begun to flow along the path.
3. At each `Phi`/`StatePhi`, discharge only the obligations for which that merge is scope-compatible.
4. Report an error as soon as a value-carrying descendant lies outside any still-outstanding obligation.

The current graph checker does not yet implement this exact formulation. Instead it approximates the semantic condition in two passes:

1. A local escape walk that rejects branch-exclusive effectful nodes whose forward-reachable descendants reach post-merge consumers without crossing a phi boundary.
2. An extra repeated-condition check that rejects incompatible same-condition `StatePhi` sites when branch-exclusive effectful values can escape to a phi boundary.

This captures the known semantic failures in the current pipeline, but it should be understood as an approximation of the broader scope-compatible sealing principle, not as its final complete characterization.
