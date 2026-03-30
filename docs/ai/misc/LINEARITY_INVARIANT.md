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

## The Principle: State Affinity

State components are affine resources with respect to writes: at any program point, there is exactly one "current version" of state S, and any number of nodes may read it, but at most one write may advance it to a new version. The state chain for S — the sequence of writes — is a single thread of control that doesn't fork.

At a conditional, the state chain *branches*: the version of S entering the conditional flows to both arms, each arm may produce new versions through writes, and a `StatePhi` merges the two resulting versions into one. After the merge, only the merged version exists — the branch-internal versions are consumed by the merge.

Affinity means each state version has at most one write successor. Reads don't consume the resource — any number of nodes may observe a state version without advancing it. If A writes state S inside a branch, A's state-S output has one write successor: either the next writer on the same branch, or `StatePhi` P itself. No write outside the branch may take A's output as its state-S predecessor, because that would fork the write chain.

## The Principle: Branch Isolation

An effectful branch-exclusive node is **pinned** to its branch. It can't be hoisted before the branch (doing so would execute the effect unconditionally) and it can't be sunk past the merge (the `StatePhi` consumes its state output at the merge point). Any node N that depends on a pinned node A must be schedulable within A's branch.

But if N also depends on `StatePhi` P, N must be schedulable after the merge — a position incompatible with "within A's branch."

For pure (non-effectful) nodes, `untangle` can clone a pure branch-exclusive node, placing one copy in the branch (for the phi arm) and leaving the original accessible outside. But `filtered_clone_subgraphs` (`Schedule.v3:447`) specifically prevents cloning of effectful nodes with escaping uses — duplicating a write would duplicate the effect. So effectful nodes can't escape their branch through cloning.

## The Invariant: Sealed Branches

**Sealed Branches for Effectful Nodes.** For every branch-exclusive effectful node A (arm of StatePhi P for state component S): every forward path from A to a post-merge consumer of P must pass through a Phi or StatePhi node.

Equivalently: in the forward graph (following children edges from A), every reachable node must satisfy one of:

1. It is branch-exclusive for P on the same side as A, or
2. It is a Phi or StatePhi (which seals the branch boundary), or
3. It is P itself or its associated Move nodes

Condition (1) is recursive — the entire subgraph forward-reachable from A must be contained within the branch until it hits a Phi/StatePhi boundary.

This means: if A writes state and is pinned to one side of P's conditional, then ALL of A's outputs (state and value), and all downstream computations derived from those outputs, are visible only within that branch. Any value that needs to cross the branch boundary to reach a post-merge consumer must be routed through a Phi (for values) or StatePhi (for state).

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

### Justifications

The sealed branches invariant has two independent justifications:

| Justification | What it prohibits | Why |
|---|---|---|
| **State affinity** | State S output from A used as write-predecessor by anything other than the next writer on the same branch or P | Forks the write chain — two writers advancing the same state-S version |
| **Branch isolation** | Any forward-reachable descendant of A having a post-merge dependency without passing through a Phi/StatePhi | Creates a chain that pulls the effectful node out of the branch, causing unconditional execution of a conditional effect |

## What This Rules Out

The invariant prevents any graph where a value derived from a branch-exclusive effectful node "leaks" past the branch boundary without going through a Phi/StatePhi. This includes:

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
C = use(B_value, P_state)        // VIOLATION: B escapes without Phi boundary
```

In both cases the fix is the same — route escaping values through a Phi:
```
P_state = StatePhi(cond, A, D)      // merges Trap
P_value = Phi(cond, escaping_val, _) // seals at boundary
N = use(P_value, P_state)           // clean
```

## Full Schedulability Preconditions

For a pre-untangle Sea to be schedulable, the following must hold:

1. **Acyclic data dependencies** — the graph is a DAG following dep edges. This implies acyclic condition ordering (if BranchLattice A contains B's phis and vice versa, there's a data cycle).

2. **Basic structural well-formedness** — correct arity (phis have 3 value_deps: `[cond, left, right]`), valid state_deps indexing, Start/Finish exist, etc.

3. **Sealed branches for effectful nodes** — every forward path from a branch-exclusive effectful node to a post-merge consumer passes through a Phi/StatePhi boundary.

Pure branch-exclusive nodes don't need sealing — `untangle` clones them to resolve cross-boundary dependencies. Effectful nodes can't be cloned (`filtered_clone_subgraphs` prevents it), so the graph must be pre-sealed.

## Construction and Fragility

The SSAD-to-Sea translation (`addSSAD` in `SeaOfNodes.v3:89`) produces graphs that satisfy all three preconditions by construction. The SSAD's tree structure ensures that every branch-internal computation is sealed behind Phi/StatePhi nodes at the merge point — values and state from each branch are routed through explicit merge nodes before becoming available to post-merge code.

Transforms that manipulate the Sea directly (graph rewrites, optimizations) can violate the sealed branches invariant if they create forward paths from branch-internal effectful nodes to post-merge consumers that bypass Phi/StatePhi boundaries. This is analogous to the point from the lit review about "Sea Phi NOT from SSAD": the SSAD structure guarantees well-formedness, but raw transforms have no safety net and must maintain these invariants manually.
