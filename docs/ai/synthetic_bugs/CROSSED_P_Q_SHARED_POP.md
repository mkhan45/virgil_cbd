# CROSSED_P_Q_SHARED_POP

## Overview

`CROSSED_P_Q_SHARED_POP` builds two values from the same conditions, but with crossed nesting:

```virgil
left  = if (p) { if (q) x + 1 else 11 } else 12
right = if (q) { if (p) x + 2 else 21 } else 22
```

where `x` comes from a shared `pop_u32()`.

In sea terms, the interesting shape is:

- an outer `p` phi for `left`
- an inner `q` phi under that `p`
- an outer `q` phi for `right`
- an inner `p` phi under that `q`
- one shared effectful `pop_u32()` feeding both `x + 1` and `x + 2`

So the branch structure is not laminar:

- on the left side, `p` contains `q`
- on the right side, `q` contains `p`

That is exactly the kind of crossed condition structure the current scheduler is weakest at.

## Observed failure mode

This opcode:

- fails in the `initial` scheduler pass
- passes in the `unLEM` pass

The concrete failure is:

1. the scheduler leaves phi nodes unscheduled
2. dependent nodes behind those phis never get enqueued properly
3. the shared `pop_u32()` never appears in the scheduled CFG
4. `ScheduleChecker` reports:
   - `UnsatNeed`
   - `UnscheduledPhi`
   - `PathEffectMismatch`

The most important semantic symptom is that the graph contains the shared pop effect, but the emitted CFG misses it on every path.

## Likely root cause

The scheduler currently groups same-condition phis into `BranchLattice`s in `common/sea/Schedule.v3`. That works when same-condition phis are in a compatible scope relationship.

Here, the natural same-condition groupings are bad:

- the outer `p` phi and the inner `p` phi get merged
- the outer `q` phi and the inner `q` phi get merged

That collapses four phi occurrences into two mutually-dependent lattices.

Then the grouped readiness logic deadlocks:

- the `p` lattice still has a live child in the `q` lattice
- the `q` lattice still has a live child in the `p` lattice

After the final pushes consume one child each, both lattices are still waiting on each other, so neither reaches `unscheduled_phi_child_count == 0`. No branch gets inserted, the phis never schedule, and the shared pop never gets pulled into the CFG.

Two design details make this worse:

- `same_scope()` only rejects opposite-side merges; it does not reject outside-vs-inside merges
- untangle cannot safely fix this by cloning, because the shared node is an effectful `pop_u32()`, and `filtered_clone_subgraphs()` already avoids cloning escaping writes

So this is not just a frontier bug or a missed clone. It is a real cyclic branch-lattice dependency on an effectful shared node.

## Why this is hard

This case is hard because it combines several of the scheduler's weakest assumptions:

1. crossed condition order: `p` is outer on one side, `q` is outer on the other
2. repeated conditions at different scopes
3. one shared effectful node, which cannot be cloned away safely
4. the source shape is sequential/SSAD-valid, but the current scheduler wants to recover one clean branch tree

## Plausible fix

The most plausible fix is to make same-condition lattice formation stricter, so the scheduler can keep multiple occurrences of the same condition as separate branch sites.

Concrete direction in `common/sea/Schedule.v3`:

1. strengthen `same_scope()`
   - today it rejects only "candidate is on left, existing is on right" and vice versa relative to another lattice
   - it should also reject:
     - candidate is inside another lattice, existing is outside it
     - existing is inside another lattice, candidate is outside it
2. treat two phis as merge-compatible only if they have the same relation to every already-formed lattice:
   - both outside
   - both left
   - both right
   - both shared
3. after `find_branch_lattices()`, explicitly detect lattice dependency cycles
   - if there is a nontrivial SCC, split the offending same-condition lattice and recompute

The practical goal is to allow the same condition to appear in multiple CFG branches instead of forcing one fused branch site per condition identity.

That should break the grouped-readiness deadlock and allow the outer phis to schedule first, exposing the inner phis afterward.

## Risks / regressions

- Splitting lattices will likely emit repeated tests of the same condition and increase CFG size.
- Over-splitting could regress prior same-condition fixes documented in `docs/ai/misc/MOCK_TEST_FIX.md`.
- More lattices mean more untangle work and possibly more pressure on existing iteration heuristics.
- A cycle detector improves diagnosis, but the real fix still has to change lattice formation or scheduling.

## Suggested validation

1. Re-run:
   - `bash scripts/schedule_test.sh CROSSED_P_Q_SHARED_POP`
2. Inspect the lattice graph before scheduling:
   - confirm there is no remaining mutual `p`/`q` lattice dependency cycle after the fix
3. Verify effect preservation:
   - the scheduled CFG should contain the shared `pop_u32()` exactly once on each execution, not zero times and not duplicated
4. Re-run related cases:
   - `bash scripts/schedule_test.sh DOUBLE_TRUE_SHARED_POP SAME_SCOPE_Q_ON_BOTH_P_SIDES CROSSED_P_Q_SHARED_POP`

## Bottom line

This is a real crossed-scope plus shared-effect failure, not just a missing special case. The scheduler merges same-condition phis too aggressively, creating two branch lattices that wait on each other forever. Because the shared node is an effectful pop, untangle cannot clone its way out. The best fix direction is to split same-condition lattices more aggressively when their scope relationship is non-identical, then reject any remaining cyclic lattice dependency before scheduling.
