# Scope Inference Problems

This document records the current audit findings for:

- `docs/ai/SCOPE_INFERENCE.md`
- `docs/ai/SCOPE_INFERENCE_IMPL.md`

Source of truth:

- the current code is correct
- the current scheduler, checker, and tests are authoritative

## Findings

### High: Scheduler-facing mergeability is underspecified

References:

- `docs/ai/SCOPE_INFERENCE.md`: `Canonicalize Candidates Into Sites`, `Resolve Abstract Sites Into Realized Sites`
- `docs/ai/SCOPE_INFERENCE_IMPL.md`: `Site Canonicalization`, `Resolve RealizedSites`
- `common/sea/Schedule.v3`: `BranchLattice.can_merge_branches()`

What is wrong:

- The docs say each abstract `Site` maps to exactly one `RealizedSite`.
- They also merge same-parent same-predicate same-polarity evidence at the abstract level.
- But they do not preserve the current scheduler-facing constraint from `BranchLattice.can_merge_branches()`: grouped merge nodes must not be ancestor/descendant of one another.

Why this matters:

- The unchanged scheduler consumes one concrete group and inserts one branch/phi structure for that group.
- Current code explicitly refuses to merge descendant same-condition phis into one `BranchLattice`.
- Without an equivalent constraint, the proposed model can produce scheduler-facing groups that the current readiness and branch insertion logic are not prepared to consume.
- This weakens coverage for dense same-condition phi structures, including the kind of graphs stressed by `UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE`.

What the docs should correct:

- Add a scheduler-facing mergeability invariant equivalent to `can_merge_branches()`.
- Either:
  - allow one abstract `Site` to realize into multiple scheduler-facing `RealizedSite`s when its merge nodes are not jointly schedulable, or
  - require a prior normalization that guarantees all merge nodes in one `RealizedSite` are pairwise non-descendant before the unchanged scheduler sees them.

### High: Transparent pure `Phi`s have no complete handoff story

References:

- `docs/ai/SCOPE_INFERENCE.md`: `Unconditional Exposed Dependencies`, `Discover Site Candidates Visible In A Region`
- `docs/ai/SCOPE_INFERENCE_IMPL.md`: `Exposed-Slice Discovery`, `Output Contract`
- `common/sea/Schedule.v3`: `find_branch_lattices()`, `branch_lattice_map`, `compute_use_counts()`, `enqueue_dep()`

What is wrong:

- Transparent pure `Phi`s are described as not site-forming, and the exposed-slice walk passes through them.
- But the docs do not say what happens to the actual live transparent `Phi` node afterward.

Why this matters:

- The current scheduler groups every live phi into a scheduler-facing object.
- The proposed output contract also says every concrete `Phi` / `StatePhi` in the rewritten Sea gets a `RealizedSite` map entry.
- Without an explicit rule, a live transparent phi can disappear from site discovery while still existing in the rewritten graph, leaving the unchanged scheduler with an unmapped live phi.
- `P3_EFFECTFUL_VARIANT` is the clearest example: the trivial `Phi(r, B, B)` is not a new site, but it still has to be handled coherently by scheduling.

What the docs should correct:

- State explicitly that a transparent pure `Phi` must be handled in one of two ways:
  - rewritten away before scheduling, or
  - attached as a non-site-forming merge node of an existing compatible `Site` / `RealizedSite`
- Add the invariant: every live concrete `Phi` / `StatePhi` remaining after rewrite belongs to exactly one scheduler-facing `RealizedSite`.

### Medium: `RealizedSite` arm roots vs final slices are underspecified

References:

- `docs/ai/SCOPE_INFERENCE_IMPL.md`: `Core Types`, `Resolve RealizedSites`, `Site Slices`, `Derive Scheduler-Facing Metadata`
- `common/sea/Schedule.v3`: `untangle()` lattice recomputation

What is wrong:

- `RealizedSite` stores `left_arm_roots` and `right_arm_roots`.
- `compute_site_slices(rs)` is used both for planning and for final scheduler-facing metadata.
- The docs do not say whether those arm roots are abstract pre-rewrite roots or concrete post-rewrite roots.

Why this matters:

- Current `untangle()` recomputes lattices after each rewrite specifically to avoid stale `frontier`, `l_subgraph`, and `r_subgraph`.
- The new model only works without that fixed point if final slices are computed from the actual rewritten graph, not stale pre-rewrite roots.
- If the arm roots are not updated to concrete post-rewrite roots, final `RealizedSite` metadata can drift from the graph the scheduler consumes.

What the docs should correct:

- Specify that `left_arm_roots` and `right_arm_roots` are concrete roots in the rewritten Sea and are updated by rewiring, or
- change finalization to recompute slices directly from `rs.phis` and the rewritten graph rather than from cached roots.

### Medium: `RealizedSite` needs an explicit scheduler-validity invariant

References:

- `docs/ai/SCOPE_INFERENCE.md`: `RealizedSite`, `CFG Construction`
- `docs/ai/SCOPE_INFERENCE_IMPL.md`: `Output Contract`, `Core Types`
- `common/sea/Schedule.v3`: `compute_use_counts()`, `enqueue_dep()`, `isReady()`, `prependCFGBranch()`

What is wrong:

- The docs correctly say the scheduler should consume `RealizedSite` directly.
- But they only describe it as a collection of fields.
- They do not state that a `RealizedSite` must preserve the same operational invariants the current scheduler assumes from `BranchLattice`.

Why this matters:

- The unchanged scheduler depends on a concrete group whose `phis`, `frontier`, `l_subgraph`, and `r_subgraph` are mutually coherent and correspond to one schedulable branch insertion.
- Without an explicit scheduler-validity invariant, the docs under-specify what it means for `RealizedSite` to safely replace `BranchLattice`.

What the docs should correct:

- Add one explicit invariant: a `RealizedSite` is a scheduler-valid branch group whose merge nodes can be inserted together by the unchanged readiness and branch-insertion logic.
- Reference preservation of current `BranchLattice` operational constraints, not just its field shape.

## No-Finding Confirmations

- The docs correctly separate unconditional exposed dependencies from conditional branch slices. This matches the current split between `cachedTransitiveDepsPhiAware()` and full transitive closures in `branch_partition()`.
- The docs correctly treat all reasoning as live-graph-relative, which matches both the scheduler and checker.
- The docs correctly keep `Phi` and `StatePhi` as the only site-defining merge points. This is compatible with current code, where merge proxies matter for checker discharge but not for branch-site identity.
- The docs correctly treat predicate deps as parent support, matching both `branch_partition()` and `initial_obligations()`.
- The docs correctly make state visibility and escaping-writer constraints the anchor for effectful cloning legality, which matches `filtered_clone_subgraphs()` and `check_branch_effs_sealed()`.

## Open Questions

- Where should the current `can_merge_branches()` restriction live in the new model?
  - as a refinement of abstract `Site` identity, or
  - as a scheduler-facing split when forming `RealizedSite`s
- The current code proves that the restriction is necessary for unchanged downstream scheduling. It does not by itself determine which abstraction layer is the cleaner home for it.
