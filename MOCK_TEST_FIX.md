# MOCK_TEST Fixes

MOCK_TEST is a synthetic opcode with enough complexity (nested branches, multiple
stack pushes) to exercise the full transform pipeline. Fixing it required five
changes across two commits: three for the base MOCK_TEST (`9d27913`) and two
more for MOCK_TEST_ul (`d2ef32c`).

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

## Fix 5: Scheduling queue limit

**File:** `common/sea/Schedule.v3`, `schedule()`
**Commit:** `d2ef32c`

**Problem:** The queue iteration limit was 100, calibrated for the largest real
opcode (I32/I64_DIV_S at ~30 iterations). After unLEM, a 3-lattice graph becomes
an 8-lattice graph (each original condition splits into `maybeTrue` and
`maybeFalse`), roughly tripling the node count.

**Fix:** Increased the limit from 100 to 500.

```virgil
// Before
if (q_idx > 100) {

// After
if (q_idx > 500) {
```
