# Scope Inference Implementation

## Goal

Replace the current `branch_partition` / `find_branch_lattices` / `same_scope` / fixed-point `untangle` loop with one explicit scope-inference pass that keeps the existing scheduler split intact:

- `untangle()` infers scope, rewrites the Sea, and produces concrete scheduler-facing site groups
- the existing bottom-up CFG scheduler consumes that rewritten Sea and those groups unchanged

This document is about the `untangle()` side of the pipeline.

## Output Contract

After `untangle()`, the scheduler should have:

- a rewritten Sea with any required pure clones already materialized
- no unsafe cloning of escaping effectful structure
- one `RealizedSite` per scheduler-facing branch group
- a `RealizedSite` map populated for every concrete `Phi` and `StatePhi` in the rewritten Sea
- derived `frontier`, `l_subgraph`, and `r_subgraph` for each realized site
- every live concrete `Phi` / `StatePhi` remaining after rewrite belongs to exactly one `RealizedSite`

It should not directly build the final CFG.

The existing scheduler should continue to own:

- grouped phi readiness
- bottom-up placement of ordinary nodes
- insertion of CFG branch/phi structure in `scheduleReadyPhi()` / `prependCFGBranch()`

It should consume `RealizedSite` directly. If `BranchLattice` remains in the code temporarily, it should be treated as the old name for the same concrete object rather than as a second adapter layer.

Each `RealizedSite` must be scheduler-valid: its grouped merge nodes must be consumable together by the unchanged readiness and branch-insertion logic.

In particular, one `RealizedSite` must preserve the current `can_merge_branches()` restriction: its grouped merge nodes must be pairwise non-ancestor/descendant in the Sea.

## What Changes

The rewrite should replace scheduling dependence on:

- `Sea.branch_partition()` as the way scope is discovered
- `find_branch_lattices()`
- `same_scope()`
- the current overlap-driven `untangle()` fixed-point loop

The rewrite should keep the rest of the pipeline as intact as possible:

- Sea cloning and `clone_to_orig` bookkeeping
- the existing `schedule()` loop after `untangle()` returns
- `compute_use_counts()` / `enqueue_dep()`
- the existing CFG node classes and SSAD rendering
- `ScheduleChecker`

## Core Types

```text
type ParentSide {
    case Root;
    case Left;
    case Right;
}

class Region {
    var id: int;
    var parent_site: Site;
    var parent_side: ParentSide;
    var state_frontier: Array<IRNode>;
    var boundary_values: Vector<IRNode>;
    var sites: Vector<Site>;
}

class Site {
    var id: int;
    var parent_region: Region;
    var predicate: IRNode;
    var merge_nodes: Vector<IRNode>; // only Phi and StatePhi
    var left_region: Region;
    var right_region: Region;
    var forced: bool;
}

class RealizedSite {
    var id: int;
    var abstract_site: Site;
    var parent_realized: RealizedSite;
    var condition: IRNode;
    var phis: Vector<IRNode>; // concrete Phi / StatePhi in rewritten Sea
    var planning_left_roots: Vector<IRNode>;
    var planning_right_roots: Vector<IRNode>;
    var frontier: ImmNodeSet;
    var l_subgraph: ImmNodeSet;
    var r_subgraph: ImmNodeSet;
    var unscheduled_phi_child_count: int;
}
```

Notes:

- `Region` and `Site` are inference objects.
- a site's child regions belong to its finished recursive structure, but they do not need to be known before the initial same-parent canonicalization step
- `RealizedSite` is the scheduler-facing output.
- it contains the full scheduler payload currently carried by `BranchLattice`
- it also keeps the extra realization data needed before scheduling, such as the back-pointer to the abstract site, chosen realized parent, and planning-time arm roots
- if `BranchLattice` remains in the code, it should just be the old structural name for `RealizedSite`

One abstract `Site` may realize into several `RealizedSite`s. Those realized groups share the same semantic branch distinction, but partition its concrete merge nodes into scheduler-valid groups.

The rewrite still wants a memo key:

```text
instance(node, region)
```

This is just a helper for recursive materialization.

## Two Dependency Views

The implementation needs two different dependency views.

### Exposed Slice

Used to discover which sites are visible in a region.

```text
expose(n, R):
    if n is ordinary:
        walk through deps
    if n is StatePhi:
        stop and record site evidence
    if n is Phi and transparent_pure_phi(n, R):
        walk condition
        walk common exposed interface of both arms
    if n is Phi and not transparent:
        stop and record site evidence
```

This is the implementation replacement for the insight currently encoded by `cachedTransitiveDepsPhiAware()`.

### Branch Slices

Used after a site is known.

```text
frontier = exposed shared support
l_subgraph = full live deps reachable from left arm minus frontier
r_subgraph = full live deps reachable from right arm minus frontier
```

This is the implementation replacement for the split currently present in `branch_partition()`.

## Phase 0: Prepare

Before inference starts:

1. keep the existing Sea clone and `clone_to_orig` setup
2. rebuild children
3. compute liveness
4. compute a topological order over live nodes
5. expose a few state helper queries over the existing graph shape
6. classify trivial pure `Phi`s that should be transparent during exposed-slice discovery

The state helpers should stay lightweight:

```text
written_components(node)
state_input(node, sc)
left_state_pred(statephi, sc)
right_state_pred(statephi, sc)
walk_write_chain(root_state, sc, out)
```

## Phase 1: Infer The Abstract Site Tree

Start from the root region at `Finish`.

```text
infer_scope(bottom):
    R0 = Region(
        parent_site = null,
        parent_side = Root,
        state_frontier = live_finish_states(bottom),
        boundary_values = live_finish_values(bottom)
    )
    discover_region(R0)
    return R0

discover_region(R):
    evidence = exposed_site_evidence(R)
    R.sites = canonicalize_sites(R, evidence)
    for S in R.sites:
        S.left_region = derive_child_region(R, S, Left)
        S.right_region = derive_child_region(R, S, Right)
        discover_region(S.left_region)
        discover_region(S.right_region)
```

### Exposed-Slice Discovery

```text
exposed_site_evidence(R):
    seen = {}
    evidence = {}
    for n in R.boundary_values:
        expose(n, R, seen, evidence)
    for s in R.state_frontier:
        expose(s, R, seen, evidence)
    return evidence

expose(n, R, seen, evidence):
    if n == null or n in seen:
        return
    seen.add(n)

    if n is StatePhi:
        evidence.add(n)
        return

    if n is Phi and not transparent_pure_phi(n, R):
        evidence.add(n)
        return

    if n is Phi and transparent_pure_phi(n, R):
        expose(n.condition, R, seen, evidence)
        expose_common_arms(n.left, n.right, R, seen, evidence)
        return

    for dep in deps(n):
        expose(dep, R, seen, evidence)

transparent_pure_phi(phi, R):
    L = exposed_interface(phi.left, R)
    Rhs = exposed_interface(phi.right, R)
    return L == Rhs
```

Important properties:

- only `Phi` and `StatePhi` define sites
- predicate deps stay in parent support
- the walk is over the live graph only
- a pure `Phi` is transparent exactly when it adds no new branch distinction at the boundary of `R`

Transparency is only a site-discovery property. If a transparent pure `Phi` remains live after rewriting, it must still end up in exactly one `RealizedSite`.

### Site Canonicalization

Abstract-site identity is intentionally simple.

```text
canonicalize_sites(R, evidence):
    uf = UnionFind(evidence)

    for each pair (a, b) in evidence:
        if same_predicate(a, b)
           and same_left_right_polarity(a, b):
            uf.union(a, b)

    sites = []
    for cls in uf.classes():
        rep = any_member(cls)
        sites.add(Site(
            parent_region = R,
            predicate = rep.condition,
            merge_nodes = cls.members,
            forced = any_state_phi(cls.members)
        ))
    return sites
```

At the abstract-site level, same-parent same-predicate same-polarity candidates merge. If later scheduler behavior needs to differ, that is handled at `RealizedSite` time, not here.

### Child Regions

```text
derive_child_region(parent, site, side):
    return Region(
        parent_site = site,
        parent_side = side,
        state_frontier = derive_child_frontier(parent, site, side),
        boundary_values = site_arm_values(site, side)
    )
```

For a state-backed site, `derive_child_frontier()` replaces each merged state component with the chosen arm predecessor. For a pure site, the state frontier may stay unchanged.

## Phase 2: Resolve `RealizedSite`s

Resolve abstract sites into the concrete site groups the scheduler will actually consume.

Mandatory sites are fixed:

- state-backed sites
- sites required for effectful sealing
- sites whose predicate or support is only available in one child region

Optional pure sites may have more than one legal realization:

- a deeper realization makes the site nested
- a shallower realization makes the site sequenced

At this phase, the algorithm picks the realized group structure that the current scheduler will later use for readiness and branch insertion.

```text
realize_sites(R):
    realized = []
    for S in R.sites:
        parent = choose_realized_parent(S)
        members = realized_members(S)
        for grp in partition_scheduler_valid_groups(S, members):
            realized.add(RealizedSite(
                abstract_site = S,
                parent_realized = parent,
                condition = S.predicate,
                planning_left_roots = group_arm_values(grp, Left),
                planning_right_roots = group_arm_values(grp, Right)
            ))
        realized.extend(realize_sites(S.left_region))
        realized.extend(realize_sites(S.right_region))
    return realized
```

`choose_realized_parent()` is the pure grouping-vs-sequencing heuristic. It should start simple and correctness-first.

`partition_scheduler_valid_groups()` is where the current `can_merge_branches()`-style constraint belongs. It partitions one abstract site's concrete merge nodes into groups that the unchanged scheduler can consume together.

Conceptually:

```text
partition_scheduler_valid_groups(S, members):
    groups = []
    for phi in sort_outermost_first(members):
        placed = false
        for g in groups:
            if can_merge_group(g, phi):
                g.add(phi)
                placed = true
                break
        if !placed:
            groups.add({phi})
    return groups

can_merge_group(g, phi):
    for existing in g:
        if isDescendant(phi, existing) or isDescendant(existing, phi):
            return false
    return true
```

This should be read as the direct replacement for the current scheduler-facing mergeability rule in `BranchLattice.can_merge_branches()`.

Important properties:

- `members` is the full set of live concrete `Phi` / `StatePhi` nodes assigned to the abstract site after any transparent-phi rewrite or attachment decision
- every member must appear in exactly one returned group
- every returned group becomes one `RealizedSite`
- all `RealizedSite`s produced from one abstract `Site` share the same semantic branch distinction and the same chosen realized parent attachment
- the partition is only about scheduler-valid grouping, not about changing the semantic site identity

There are no leftover "unrealized groups" after this step. There may be other legal ways to pack the same members into scheduler-valid groups, but only one partition is chosen. Any live merge node not included in some returned group is a bug.

Transparent pure `Phi`s that remain live after rewriting must be included in `realized_members(S)` for some compatible abstract site `S`, or else be rewritten away before scheduling.

## Phase 3: Plan Ownership And Cloning

Once the `RealizedSite` structure is fixed, plan the rewrite.

### Site Slices

```text
compute_site_slices(rs):
    frontier = exposed_support_from_roots(rs.planning_left_roots, rs.planning_right_roots)
    l_full = full_live_slice(rs.planning_left_roots)
    r_full = full_live_slice(rs.planning_right_roots)
    l_subgraph = l_full - frontier
    r_subgraph = r_full - frontier
    return (frontier, l_subgraph, r_subgraph)
```

These planning roots are only for rewrite planning. Final scheduler-facing slices must be recomputed from the rewritten graph.

### Effectful Constraints

Effectful and state-threading nodes are constrained by state visibility and escaping use.

```text
effect_ok_to_clone(node, region):
    return state_versions_visible(node, region)
       and preserves_live_write_chain(node, region)
```

An escaping writer must remain on a legal live write chain.

### Pure Ownership

Pure nodes follow the realized region structure.

```text
owner_regions(node, rs):
    if one shared support placement serves all realized uses:
        return {support_region(rs)}
    else:
        return incompatible_realized_use_clusters(node, rs)
```

So cloning is driven by incompatible realized-region requests, not by arbitrary demand grouping.

## Phase 4: Materialize The Rewrite

After ownership and clone requirements are known, rewrite the Sea once.

```text
materialize(realized_sites):
    for rs in postorder(realized_sites):
        slices = compute_site_slices(rs)
        clone_set = clone_safe_overlap(rs, slices)
        clones = cloneSubgraph(clone_set)
        rewire_realized_site(rs, clones)
    rebuild_children_and_live()
```

The key helper is the clone filter:

```text
clone_safe_overlap(rs, slices):
    shared = slices.l_subgraph intersection slices.r_subgraph
    cloneable = shared
    while true:
        escaping = escaping_nodes_after_rewrite(rs, cloneable)
        bad_writes = {n in escaping | has_writes(n)}
        if bad_writes is empty:
            return cloneable
        cloneable = cloneable - bad_writes
```

This keeps the current correctness constraint from `filtered_clone_subgraphs()`, but applies it while materializing a stable realized-site plan rather than while rediscovering sites.

At the end of this phase:

- the Sea itself should embody the inferred scope structure
- pure overlap should already have been separated by concrete cloning
- effectful nodes should already satisfy state and escaping constraints

No overlap-driven untangle recomputation loop should remain.

## Phase 5: Derive Scheduler-Facing Metadata

After materialization, derive the final scheduler-facing site metadata from the rewritten graph.

```text
finalize_realized_site(rs):
    rs.phis = concrete_merge_nodes(rs)
    (rs.frontier, rs.l_subgraph, rs.r_subgraph) = recompute_site_slices_from_graph(rs.phis)
    for phi in rs.phis:
        site_map[phi] = rs
```

At this point the scheduler has what it needs.

## Phase 6: Run The Existing Scheduler

After finalization, `untangle()` returns.

Then the existing code path continues:

- `compute_use_counts()`
- queue-based readiness scheduling
- `scheduleReadyPhi()` / `prependCFGBranch()`
- final CFG formation and SSAD rendering

That is the whole point of the rewrite: hand the current scheduler a graph whose branch structure is already normalized.

## Open Points

- The exact heuristic in `choose_realized_parent()` should start simple, but it must avoid unnecessary blow-up on cases like `UNTANGLE_BRAID_LIMIT_STRESS`.
- The scheduler-valid grouping rule in `partition_scheduler_valid_groups()` should preserve the current `can_merge_branches()` restriction without over-splitting.
- The exposed-support computation used in planning and recomputation should match the exposed-slice meaning closely enough that scheduler readiness and traces stay coherent.

## Summary

The implementation plan is:

1. infer a recursive region/site structure from live `Phi` / `StatePhi` structure
2. discover sites from phi-sensitive exposed slices, not raw transitive reachability
3. resolve optional pure structure as concrete `RealizedSite`s
4. plan ownership and cloning from full live branch slices, constrained by state visibility and escaping use
5. materialize the rewrite directly into the Sea
6. derive scheduler-facing site metadata from the rewritten graph
7. hand that result to the existing CFG scheduler unchanged

This keeps the current scheduler split intact while replacing the local branch-partition fixed point with explicit scope inference.
