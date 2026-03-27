# UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE

## Overview

`UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE` is a synthetic stress case for the `unLEM` pipeline.

It combines three hard patterns in one opcode:

1. `p` controls an outer split that contains the same `q`-shaped subproblem on both sides
2. `r` branches over the merged `x` value after the `p/q` bundle
3. `p` is used again later to choose between `y` and `x + 3`

Source shape:

```virgil
x = if p {
      if q { pop_u32() } else { 10 }
    } else {
      if q { pop_u32() } else { 20 }
    }

y = if r { x + 1 } else { x + 2 }

z = if p { y } else { x + 3 }

push_u32(z)
```

This is hard because `unLEM` rewrites each runtime phi into a two-level bundle with cached `maybeTrue`, `maybeFalse`, and `unknown` conditions, so after rewriting the graph contains repeated uses of the same `p`- and `q`-derived condition nodes at different nesting levels and with both value and state phis attached.

## Observed failure mode

This opcode:

- passes the `initial` scheduling phase
- fails in the `unLEM` phase

Observed symptoms are:

- `UnsatNeed`
- `UnscheduledPhi`
- `PhiBranchMissing`
- many `PathEffectMismatch` errors

What that means concretely:

- some live phis never get placed into a `CFGPhi`
- some phi arm values are not scheduled inside the branch subtree where `toSSAD` expects them
- some nodes appear scheduled before required deps are in scope
- effectful `pop_u32()`-related state/effect nodes end up executing on CFG paths that do not match graph reachability

The number of `PathEffectMismatch` reports is probably amplified by `CheckSchedule.v3`, which enumerates all condition assignments independently, including impossible `unLEM` combinations such as `unknown = true` while `maybeTrue = false`.

## Likely root cause

### Primary issue: same-condition lattice merging is still too weak for cached `unLEM` conditions

The most likely real bug is in branch-lattice formation and scope handling in `common/sea/Schedule.v3`.

Relevant facts:

- `find_branch_lattices()` groups phis by condition node identity
- `unLEM` intentionally reuses the same derived condition nodes for every phi from the same source condition
- `same_scope()` is heuristic and explicitly skips some cases where a phi looks "shared" by another lattice, assuming untangle will clean it up later

That is brittle for this opcode shape.

This test creates repeated `p`- and `q`-conditioned phis at different nesting levels, with `r` in between, plus state/value pairing from `pop_u32()`. A phi can look shared relative to another lattice before untangle, pass `same_scope()`, and still belong to a different effective scope instance after cloning/rewrite. Once incompatible phis get merged into one `BranchLattice`, the scheduler can:

- wait on the wrong grouped children
- prepend a branch in the wrong place
- leave some phis unscheduled
- place phi-arm producers outside the branch subtree that needs them

That matches `UnsatNeed`, `UnscheduledPhi`, and `PhiBranchMissing`.

### Secondary issue: impossible assignments make the checker noisy

`check_path_effects()` in `common/sea/CheckSchedule.v3` treats all discovered phi conditions as independent roots except clone-grouping. For `unLEM`-generated conditions, that is not enough. It does not encode implications like:

- `unknown(cond) = maybeTrue(cond) && maybeFalse(cond)`
- `unknown(cond) => maybeTrue(cond)`
- `unknown(cond) => maybeFalse(cond)`

So once the CFG is even slightly malformed, the checker reports many mismatches on impossible paths, obscuring the first bad structural merge.

## Why this is hard

1. condition reuse is intentional, so "same node id" no longer implies "same scope site"
2. value and state phis move together, so a scope mistake is both a CFG-placement bug and an effect-ordering bug
3. the shape is non-laminar because later uses of `p` tie outer and inner regions back together
4. checker output is noisy because impossible assignments multiply `PathEffectMismatch` reports

## Plausible fix

### 1) Strengthen branch-lattice scope discrimination

In `common/sea/Schedule.v3`, make `same_scope()` stricter for same-condition phis.

Concrete direction:

- for every candidate phi and every existing phi in the target lattice, compare their relation to every other lattice using a 4-way classification:
  - `outside`
  - `left-only`
  - `right-only`
  - `shared/both`
- only allow merging when these classifications are compatible
- in particular, do not treat `shared/both` as automatically harmless; if one phi is `shared/both` relative to another lattice and another phi is `left-only` or `right-only`, reject the merge

A stronger version would derive a per-phi scope signature from containment within already-computed lattices, and only merge same-condition phis with identical signatures.

### 2) Add a pre-schedule lattice sanity check

Before bottom-up scheduling, assert for every lattice that:

- grouped phis are scope-compatible
- no phi in the lattice lies on opposite sides of another lattice from another grouped phi
- after untangle, `l_subgraph ∩ r_subgraph = ∅`

That should fail closer to root cause instead of later as `UnscheduledPhi` / `PhiBranchMissing`.

### 3) Reduce checker noise by skipping impossible `unLEM` assignments

In `common/sea/CheckSchedule.v3`, add a feasibility filter for assignments involving:

- `bool.&&`
- `*_maybeTrue`
- `*_maybeFalse`

At minimum, if a condition is syntactically `bool.&&(a, b)`, skip assignments where that condition is `true` but either `a` or `b` is `false`.

This should be treated as a checker improvement, not the core fix.

## Risks / regressions

- More conservative lattice merging may increase cloning and CFG size.
- It could regress previously-fixed same-condition sharing cases.
- Checker filtering could hide real bugs if it is too broad; only syntactically provable impossible assignments should be pruned.
- State/effect behavior is fragile, so any change that alters grouping or cloning around state phis risks reintroducing over-execution or dropped effects.

## Suggested validation

1. Re-run with tracing:
   - `bash scripts/schedule_test.sh --trace UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE`
2. Confirm the `unLEM` phase has no:
   - `UnsatNeed`
   - `UnscheduledPhi`
   - `PhiBranchMissing`
   - `PathEffectMismatch`
3. Re-run nearby synthetic regressions:
   - `bash scripts/schedule_test.sh SAME_SCOPE_Q_ON_BOTH_P_SIDES P3_EFFECTFUL_VARIANT UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE`
4. If the checker feasibility filter is added, verify that true bugs still fail and only impossible-path noise disappears.

## Bottom line

This opcode likely exposes a real scheduler bug first and a checker modeling gap second:

- real bug: same-condition phis created by cached `unLEM` rewriting are being merged across incompatible scopes
- noise bug: the path-effects checker explores impossible assignments among `maybeTrue`, `maybeFalse`, and `unknown`

The scheduler-side scope bug should be fixed first; the checker-side impossible-assignment filter is a follow-up to make failures easier to diagnose.
