# Graph Invariant for Untangle Cloning

## Problem

`untangle()` clones branch subgraphs to separate left/right overlap before scheduling.
Cloning writes is only correct when the original write does not remain live outside
the rewritten lattice. Otherwise we get an extra effect (the original + clone).

This is exactly what happened in `P3_FRONTIER_ul` with duplicated `pop_u32`.

At the same time, we must still allow cloning writes for unLEM control effects,
like `BR_IF_ul` where both `doBranch` and `doFallthru` need cloned instances in
the lattice-local merged path.

## Candidate Invariant (from discussion)

"Any state write depended on by a state phi of that component must have no uses
that also depend on the state phi."

This is close in spirit but not the clean general rule:

- Too strong: valid unLEM patterns (e.g. `BR_IF_ul`, `I32_DIV_S_ul`) intentionally
  route writes through branch-local `StatePhi`/`merge` structure.
- Too weak: `P3_FRONTIER_ul` failure is driven by escaping liveness of a write
  through shared state/value structure, not by a single state-phi relation.

## Cleaner General Invariant: Clone-Consumption

For one lattice `L` with clone domains `L_lsg` and `L_rsg`, define:

- `D = L_lsg ∪ L_rsg` (nodes we plan to clone this untangle step)
- `R` = phi-edge rewrites performed by untangle for this lattice
  (left/right arm root replacements for `L.phis`)
- Ignore Move condition bookkeeping edge `(cond -> Move)` as non-consuming.

Define escaping nodes as least fixed point:

1. Seed:
   - `Esc0 = { n in D | n has a live child c outside D and edge (n -> c) is not in R }`
2. Closure:
   - If `m in Esc` and `d in deps(m)` with `d in D`, then `d in Esc`.

Invariant for semantic-preserving cloning:

- Any node with observable writes cloned in this step must satisfy `n notin Esc`.

Equivalent path statement:

- For every cloned write `n`, every live path from `n` to `Finish` in the pre-clone
  graph must pass through an edge rewritten by this lattice step.

Intuition: cloning is safe only if the lattice rewrite fully consumes the original.

## Why this matches key cases

- `P3_FRONTIER_ul`: shared `pop_u32` escapes through live state usage outside the
  lattice rewrite, so it is in `Esc` and must not be cloned.
- `BR_IF_ul`: `doBranch`/`doFallthru` are consumed within the lattice-local
  `StatePhi`/`merge` rewrite, so they are not escaping and may be cloned.
- `END_ul`: no meaningful overlap to untangle; invariant is vacuously satisfied.
- `MEMORY_SIZE_ul`, `I32_DIV_S_ul`: branch/control writes stay consumed by lattice
  structure; cloning remains allowed where needed.

## Operational vs Input Invariant

This is best treated as an **untangle-time operational invariant**, not a global
input Sea well-formedness rule.

- The same Sea node may be clone-safe for one lattice and unsafe for another,
  depending on rewrite boundaries.
- So safety must be checked against the current lattice clone domain and rewrite
  edges, not declared once globally for the whole Sea.

## Enforcement Strategy

At untangle step selection time for a lattice:

1. Compute escaping set `Esc` for current clone domain.
2. Remove escaping write nodes from clone domains.
3. Recompute escapes until fixed point (removing one write can expose another).
4. Clone only the remaining filtered domains.

This keeps the existing scheduler architecture but prevents effect duplication from
escape paths.
