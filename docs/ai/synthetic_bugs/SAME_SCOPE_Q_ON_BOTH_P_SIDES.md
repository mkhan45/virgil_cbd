# SAME_SCOPE_Q_ON_BOTH_P_SIDES

## Overview

`SAME_SCOPE_Q_ON_BOTH_P_SIDES` builds the same `q`-guarded subproblem on both sides of an outer `p` branch:

```virgil
if (p) {
    if (q) inner = pop_u32(); else inner = 11;
    left = inner + 1;
} else {
    if (q) inner = pop_u32(); else inner = 21;
    left = inner + 2;
}
push_u32(left);
```

Important shape properties:

- one outer branch on `p`
- two sibling inner branches on the same condition `q`
- each `q` branch has an effectful true arm (`pop_u32`) and a pure false arm
- after `unLEM`, both inner `q` regions reuse the same derived condition nodes (`maybeTrue(q)`, `maybeFalse(q)`, `bool.&&(...)`)

This is the classic pattern that stresses branch-lattice grouping by condition identity.

## Observed failure mode

This opcode:

- passes the `initial` scheduler pass
- fails in the `unLEM` pass
- reports `PathEffectMismatch`

The concrete symptom is that on paths where the inner `q` branch should take the false arm, the scheduled CFG still executes the `pop_u32` effects from the `q`-true arms.

So the graph says "no inner pop on this path", but the CFG says "one or both `q` pops still ran".

## Likely root cause

The most likely bug is incorrect `BranchLattice` merging for phis that share a condition node but do not share a scope.

Relevant pieces:

- `SeaTransforms.unLEM` caches rewritten condition structure per original runtime condition, so both sibling `q` regions get the same derived condition nodes.
- `SeaScheduler.find_branch_lattices()` groups phis with the same condition into one `BranchLattice`.
- If grouping uses only condition identity plus ancestry checks, then the two sibling `q` phis get merged even though one lives in `p`'s left subgraph and the other lives in `p`'s right subgraph.

That merged lattice spans across the `p` boundary, which is structurally wrong.

This matches the class of issue described in `docs/ai/misc/MOCK_TEST_FIX.md` under the earlier `same_scope` fix.

In concrete terms:

1. the outer `p` lattice is formed first
2. the left-side `q` phi forms a `q` lattice
3. the right-side `q` phi has the same condition node, so naive merging tries to add it to that same lattice
4. now one `q` lattice contains phis from opposite sides of `p`
5. scheduling/untangle no longer has a laminar nesting for that condition
6. effectful `q`-true work leaks into paths where it should stay unreachable

## Why this is hard

This bug is hard because the condition equality is real:

- the two inner phis really do share the same condition node after `unLEM`
- but "same condition" does not imply "same schedulable region"

The scheduler has to distinguish:

- phis that should be grouped because they are different uses of the same branch in the same scope
- phis that must stay separate because they are on opposite sides of an enclosing branch

After `unLEM`, this gets worse because condition caching intentionally reuses nodes, so nested and sibling regions can now look identical by condition identity alone.

## Plausible fix

Tighten same-condition lattice merging in `common/sea/Schedule.v3` so phis only merge when they have the same enclosing scope, not just the same condition node.

Concrete direction:

- strengthen `same_scope(phi, bl)`
- compare the candidate phi and all phis already in `bl` against every already-formed lattice
- require them to have the same relation to that lattice:
  - both outside
  - both left
  - both right
  - both shared
- reject merges where one phi is inside a lattice and the other is outside it
- be conservative around the current "shared on both sides" escape hatch; under-merging is safer than cross-scope over-merging

The intended merge gate should stay in this form:

```virgil
if (bl.can_merge_branches(n) && same_scope(n, bl)) { ... }
```

The likely implementation work is in `find_branch_lattices()` / `same_scope()`, not in `unLEM` condition caching itself.

## Risks / regressions

- If the fix is too weak, cross-scope phis will still merge and `PathEffectMismatch` will persist.
- If the fix is too strong, same-scope phis will stop merging, leading to more lattices, more cloning, larger CFGs, or slower scheduling.
- The current logic treats "shared on both sides" as something untangle will repair later; changing that behavior may affect schedule quality or code size even when correctness improves.

## Suggested validation

1. Re-run:
   - `bash scripts/schedule_test.sh SAME_SCOPE_Q_ON_BOTH_P_SIDES`
2. Inspect branch lattices before and after untangle:
   - verify the two sibling `q` phis do not end up in one lattice spanning both sides of `p`
3. Check path-sensitive effects:
   - `p=true, q=false`: no inner `pop_u32`
   - `p=false, q=false`: no inner `pop_u32`
   - `p=true, q=true`: only the left inner `pop_u32`
   - `p=false, q=true`: only the right inner `pop_u32`
4. Re-run nearby regressions:
   - `bash scripts/schedule_test.sh EFFECT_LIFT_OVER_PARENT_COND SAME_SCOPE_Q_ON_BOTH_P_SIDES UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE`

## Bottom line

This is best understood as a scope-sensitive condition-sharing bug:

- `unLEM` legitimately makes the two inner `q` regions share one condition structure
- the scheduler must not treat that as permission to merge them into one branch lattice across the enclosing `p` split

The right fix is to keep condition reuse, but make lattice merging respect enclosing branch scope.
