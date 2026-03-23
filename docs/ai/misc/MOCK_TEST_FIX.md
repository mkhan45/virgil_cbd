# MOCK_TEST Fixes

MOCK_TEST is a synthetic opcode with enough complexity (nested branches, multiple
stack pushes) to exercise the full transform pipeline. Fixing it required six
changes across three commits: two for the base MOCK_TEST (`9d27913`), three
for MOCK_TEST_ul (`d2ef32c`), and one more for correct push counts.

---

## Fix 1: Depth-ordered phi processing (`sorted_phis_by_depth`)

**File:** `common/sea/Schedule.v3`
**Commit:** `9d27913`

**Problem:** `find_branch_lattices` previously iterated over live phis in
arbitrary order (via `live.apply`). When an inner phi was visited before its
enclosing outer phi, it would form its own BranchLattice with a subgraph that
included the outer phi. Later, when the outer phi was visited, it would try to
form a lattice whose subgraph overlapped with the inner one, producing incorrect
lattice structure.

**Fix:** Added `sorted_phis_by_depth`, which computes a containment graph over
all live phis — phi A contains phi B if B is in A's `l_subgraph` or
`r_subgraph` — then topologically sorts them via Kahn's algorithm so outermost
phis are processed first. `find_branch_lattices` now iterates over this sorted
order, guaranteeing that a lattice's subgraph boundaries are established before
any nested phis are considered.

```virgil
def sorted_phis_by_depth() -> (Array<IRNode>, NodeMap<BranchPartition>) {
    // Collect phis, compute partitions, build containment graph,
    // topo-sort outermost-first via Kahn's algorithm
    ...
}

def find_branch_lattices() {
    def sorted = sorted_phis_by_depth();
    def sorted_phis = sorted.0;
    def partitions = sorted.1;
    for (idx < sorted_phis.length) { ... }
}
```

---

## Fix 2: Scope-aware lattice merging (`same_scope`)

**File:** `common/sea/Schedule.v3`
**Commit:** `9d27913`

**Problem:** Two phis sharing the same condition node were merged into one
BranchLattice if `can_merge_branches` allowed it (no ancestor/descendant
relationship). But after unLEM, the same condition (e.g. `bool.&&`) can appear
at multiple nesting levels. Two phis with the same condition might live on
opposite sides of a third, unrelated branch. Merging them into one lattice would
create a lattice that spans across a branch boundary — violating the invariant
that a lattice's phis must all be in the same scope.

**Fix:** Added `same_scope(phi, bl)`, called alongside `can_merge_branches`.
It checks every already-formed BranchLattice (with a different condition) and
verifies that the candidate phi and all existing phis in `bl` are on the same
side — or entirely outside — of each other lattice. If the candidate is in the
left subgraph of some other lattice but an existing phi is in the right (or vice
versa), they are in different scopes and must not be merged.

```virgil
def same_scope(phi: IRNode, bl: BranchLattice) -> bool {
    for (i < branch_lattices.length) {
        def other = branch_lattices[i];
        if (other.condition.id == bl.condition.id) continue;

        def phi_in_l = other.l_subgraph.has(phi);
        def phi_in_r = other.r_subgraph.has(phi);
        if (!phi_in_l && !phi_in_r) continue;

        for (j < bl.phis.length) {
            def existing = bl.phis[j];
            if (phi_in_l && other.r_subgraph.has(existing)) return false;
            if (phi_in_r && other.l_subgraph.has(existing)) return false;
        }
    }
    return true;
}
```

The merge guard in `find_branch_lattices` now reads:
```virgil
if (bl.can_merge_branches(n) && same_scope(n, bl)) { ... }
```

---

## Fix 3: Overlap-based untangle iteration

**File:** `common/sea/Schedule.v3`, `untangle()`
**Commit:** `d2ef32c`

**Problem:** `untangle` tracked which conditions had been processed via a
`processed_conds` set keyed on node identity. After unLEM, the same condition
node (e.g. `bool.&&`) appears in multiple independent BranchLattices at
different scopes. Once the first lattice using that condition was untangled,
every other lattice sharing the condition was skipped — even if it still had
overlapping l/r subgraphs that needed cloning.

**Fix:** Replaced `processed_conds` with an overlap check. Each iteration finds
the next lattice whose `l_subgraph` and `r_subgraph` have a non-empty
intersection, and clones the shared nodes. The loop terminates when no lattice
has overlapping subgraphs. After each cloning step, all lattices are recomputed
from scratch to avoid stale subgraph references.

```virgil
// Before: tracked by condition identity (BROKEN)
if (processed_conds.has(bl.condition)) continue;
processed_conds.put(bl.condition);

// After: check actual overlap (CORRECT)
var next_bl: BranchLattice = null;
for (i < sorted.length) {
    if (!sorted[i].l_subgraph.intersection(sorted[i].r_subgraph).isEmpty()) {
        next_bl = sorted[i];
        break;
    }
}
if (next_bl == null) break;
```

---

## Fix 4: Recursive state dep merging in `mergeEffsAI`

**File:** `common/sea/SeaTransforms.v3`
**Commit:** `d2ef32c`

**Problem:** When merging two push operations (e.g. `push(val_L)` and
`push(val_R)`) in the unLEM "can't determine" branch, the code correctly created
`merge_u(val_L, val_R)` for the pushed value, but used `left.state_deps`
directly as the new push's state deps. If the left and right pushes had
different state deps (e.g. prior pushes in their respective chains), the right's
state deps were silently dropped.

**Fix:** Added `mergeStateDeps` which recursively merges state dep arrays
element-by-element. When a state component has different deps on left and right,
it calls `mergeEffsAI` recursively — producing the correct chain of merge nodes
for nested push sequences.

```virgil
def mergeStateDeps(node: IRNode, sea: Sea, left: IRNode, right: IRNode) -> Array<IRNode> {
    def merged = Arrays.dup(left.state_deps);
    for (i < merged.length) {
        def l_dep = left.state_deps[i], r_dep = right.state_deps[i];
        if (l_dep != null && r_dep != null && l_dep.id != r_dep.id) {
            merged[i] = mergeEffsAI(node, sea, l_dep, r_dep);
        }
    }
    return merged;
}
```

---

## Fix 5: Structural merge of StatePhi nodes in `mergeEffsAI`

**File:** `common/sea/SeaTransforms.v3`, `mergeEffsAI()`

**Problem:** When the outer StatePhi (condition p) was unLEM'd, its left and
right branches were already-transformed inner StatePhi nodes (condition
`bool.&&_q`). `mergeEffsAI` only handled the case where both operands are push
intrinsics. Two StatePhi nodes failed the `IROp.Intrinsic.?` check and fell
through to `mergeEffsValidator`, which created a `merge` node that "runs both"
— executing both push chains independently, producing 4 pushes instead of 2.

**Root cause:** `mergeEffsAI` had no case for merging two StatePhi/Phi nodes.
When two StatePhi nodes share the same condition, the correct merge is to
recursively merge their corresponding branches:
```
merge(StatePhi(c, L1, R1), StatePhi(c, L2, R2))
  = StatePhi(c, merge(L1, L2), merge(L1, R2))
```
This preserves the branch structure while combining the effects at each leaf,
keeping the push count at 2 per path.

**Fix:** Added a StatePhi/Phi check at the top of `mergeEffsAI`, before the
push-intrinsic check. When both operands are StatePhi or Phi with the same
condition, it recursively merges their true and false branches.

```virgil
// Merge two StatePhi/Phi nodes with the same condition by merging their branches
if ((IROp.StatePhi.?(left.op) || IROp.Phi.?(left.op)) &&
    (IROp.StatePhi.?(right.op) || IROp.Phi.?(right.op))) {
    def l_cond = left.value_deps[0], r_cond = right.value_deps[0];
    if (l_cond.id == r_cond.id) {
        def merged_true = mergeEffsAI(node, sea, left.value_deps[1], right.value_deps[1]);
        def merged_false = mergeEffsAI(node, sea, left.value_deps[2], right.value_deps[2]);
        return sea.mkNode(left.op, Array.new(nstates), [l_cond, merged_true, merged_false]);
    }
}
```
