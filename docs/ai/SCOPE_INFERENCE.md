# Scope Inference

## Goal

Replace the current split between local `branch_partition`, heuristic phi grouping (`find_branch_lattices` / `same_scope`), and iterative rediscovery in `untangle` with one cohesive model of branch scope.

The intended model is:

- infer a recursive family of live `Region`s and abstract `Site`s
- resolve optional pure structure into concrete scheduler-valid `RealizedSite`s
- use those `RealizedSite`s to rewrite the Sea
- let the existing bottom-up CFG scheduler consume the rewritten Sea and the realized sites unchanged

This is a conceptual document. It describes the object the scheduler is trying to recover, not a staged migration plan.

## Core Idea

The scheduler should not primarily think in terms of flat phi partitions or "the first context that fits".

The constructive object is a recursive scope tree:

- a `Region` is one live branch-scope subproblem
- a `Site` is one abstract branch split inside a parent region
- a `RealizedSite` is one concrete scheduler-valid branch group after optional pure structure has been resolved
- a node instance is the realization of one node in one region during graph rewrite

Branch obligations remain important, but they are a derived summary of region ancestry rather than the primary thing being constructed.

The scope tree is not the final CFG. It is the hidden structure `untangle()` is trying to recover so that the existing bottom-up CFG scheduler can run on a normalized graph.

## What Scope Inference Produces

The output of scope inference should match the current role of `untangle()`.

It should produce:

- a rewritten Sea where nodes have been cloned and rewired to match inferred regions
- one `RealizedSite` per scheduler-facing branch group
- for each `RealizedSite`, the concrete `Phi` / `StatePhi` nodes and the derived `frontier`, `l_subgraph`, and `r_subgraph`
- every live concrete `Phi` / `StatePhi` remaining after rewrite belongs to exactly one `RealizedSite`

It should not directly construct the final CFG.

The existing scheduler can then keep doing what it already does:

- wait until uses are ready
- use `RealizedSite`s directly for grouped phi readiness
- insert CFG branch/phi structure when a realized site becomes schedulable
- place ordinary nodes bottom-up inside that structure

So the new algorithm replaces scope discovery and graph rewriting, not the later scheduling policy.

## Core Objects

### Region

A `Region` is a live branch-scope subproblem.

- the root region is the post-merge scope at `Finish`
- every non-root region has a parent `Site`
- each region has an entry state frontier: the live state versions visible on entry to that region
- each region is discovered from the live value and state demands visible at that boundary

### Site

A `Site` is one abstract branch split inside one parent region.

It is not identified by condition equality alone. Its identity is determined by its position in the recursive structure:

- its parent region
- its branch predicate
- its left child region
- its right child region

The child regions are part of the completed recursive identity of the site. They do not need to be known before the initial same-parent canonicalization step.

Only `Phi` and `StatePhi` define merge structure.

If multiple `Phi` / `StatePhi` nodes describe the same split of the same parent region, they belong to one site.

`Site` is an inference object, not the thing the scheduler consumes directly.

### RealizedSite

A `RealizedSite` is one concrete scheduler-valid branch group.

It is derived from the abstract site structure after any optional pure nesting-vs-sequencing decisions have been resolved.

One abstract `Site` may realize into more than one `RealizedSite` when the unchanged scheduler cannot consume all of that site's concrete merge nodes as one group.

Conceptually it contains:

- one condition node
- the concrete `Phi` / `StatePhi` nodes that should be scheduled together
- the concrete support / left / right partition over the rewritten Sea

This is the object the scheduler should consume directly. If `BranchLattice` remains in the code temporarily, it should be treated as the old name for this same concrete object rather than as a second adapter layer.

A `RealizedSite` must satisfy the same operational constraint the current scheduler expects from `BranchLattice`: its grouped merge nodes must be schedulable together by the unchanged readiness and branch-insertion logic. In particular, merge nodes in one `RealizedSite` must satisfy the current `can_merge_branches()`-style restriction and therefore must not be ancestor/descendant of one another.

### Context And Obligations

A `Context` is the derived set of ancestor branch obligations for a region.

Conceptually, it is a set of `(site, side)` facts such as:

```text
{}
{S_p:left}
{S_p:left, S_q:right}
```

Important properties:

- order does not matter
- obligations are attached to branch sites, not bare condition nodes
- a node remains inside all outstanding obligations until it crosses the matching merge lineage

This is the right language for checking and reasoning. It is not the primary constructive object.

## Two Dependency Views

The model needs two different dependency views of a site.

### Unconditional Exposed Dependencies

These determine what is visible at a region boundary and therefore which sites are present in that region.

This is a phi-sensitive exposed slice over the live graph:

- for an ordinary node, continue through its deps
- for a meaningful `Phi` or `StatePhi`, stop there and record site evidence
- for a transparent pure `Phi`, continue only through what is unconditionally exposed to the current region
  - traverse the condition
  - traverse the common exposed deps of the left and right arms

This is the region-level version of the key insight already present in `branch_partition`: site discovery must use unconditional exposed dependencies, not raw transitive reachability.

For a pure `Phi(c, l, r)`, this yields a precise transparency rule:

- compute the region-relative exposed interface of `l` and `r`
- if those two interfaces are equal, the `Phi` is transparent
- otherwise it is the first visible merge point and must be treated as site evidence

So a pure `Phi` is transparent exactly when it adds no new branch distinction at the current region boundary.

Transparency is only a site-discovery property. A transparent pure `Phi` that remains live after rewriting still needs a scheduler story:

- either it is rewritten away before scheduling
- or it is attached to a compatible abstract `Site` and later assigned to exactly one scheduler-valid `RealizedSite`

### Conditional Branch Dependencies

These determine ownership and cloning once a site is known.

For a realized site:

- the parent support comes from unconditional exposed deps
- the left and right branch slices come from the full live dependencies reachable under each arm, after removing shared support

So the model should not treat site discovery and clone planning as one traversal. They are related, but they answer different questions.

## Why State Frontier Matters

The main source of real scope is state reachability.

At a conditional:

- a state version may fork into branch-local versions
- a `StatePhi` merges those versions again
- after that merge, the branch-local versions are no longer separately reachable

That is why effectful structure is anchored by the state frontier:

- a branch-local writer belongs to the deepest region whose frontier still exposes its state version
- it cannot be hoisted above the split without becoming unconditional
- it cannot be cloned if doing so would duplicate or fork an escaping live write chain

This is the conceptual role of the current escaping-writer filtering in `untangle()`: cloning is constrained not just by branch structure, but by state visibility and sealing.

## Why State Frontier Is Not Enough

State reachability is the primary anchor for effectful semantics, but it is not the whole scope model.

Pure branch structure still matters:

- value-only phis can create real branch sites even when state alone does not distinguish them
- repeated use of the same condition in different enclosing regions still denotes different sites
- trivial/common phis do not automatically create meaningful new sites
- some pure sites admit multiple legal scheduler-facing realizations, so nesting vs sequencing is sometimes a heuristic choice rather than a semantic fact

So the correct model is hybrid:

- `StatePhi` structure anchors effectful branch scope
- value `Phi` structure extends the region tree where pure control structure still matters

## Predicate Support

Predicate dependencies have a special status.

The deps used to compute a site's condition are not merely shared support in a loose sense. They are structurally outside that site's left/right obligations.

Conceptually:

- predicate support belongs in the site's frontier / parent support
- a node that helps compute the predicate for site `S` cannot simultaneously be branch-local to `S`

This is why condition dependencies must always be treated as part of the exposed support slice of the site.

## Recursive Construction

### 1. Build The Root Region

Start from the root region at `Finish`.

- its entry frontier is the set of live state versions visible at `finish.state_deps`
- its value boundary is the set of live demanded values visible at `Finish`
- it represents the fully merged scope after all inner branch structure has been discharged

This is the global starting point for scope inference.

Pseudo-code:

```text
infer_scope(bottom):
    R0 = Region(
        parent_site = null,
        parent_side = Root,
        state_frontier = live_finish_states(bottom),
        boundary_values = live_finish_values(bottom),
        context = {}
    )
    discover_region(R0)
    realized = realize_sites(R0)
    return (R0, realized)

discover_region(R):
    evidence = exposed_site_evidence(R)
    R.sites = canonicalize_sites(R, evidence)
    for S in R.sites:
        S.left_region = derive_child_region(R, S, Left)
        S.right_region = derive_child_region(R, S, Right)
        discover_region(S.left_region)
        discover_region(S.right_region)
```

### 2. Discover Site Candidates Visible In A Region

Within one region, discover branch structure from the region's unconditional exposed slice.

Useful rules:

- a `StatePhi` is authoritative for effectful branch boundaries
- a value `Phi` may induce a pure site even when no state change distinguishes the branches
- a trivial phi that carries the same value on both sides does not, by itself, justify a new site
- a value `Phi` and `StatePhi` may both be evidence for the same site

This step is region-relative. A `Phi` or `StatePhi` does not define a global site on its own.

Pseudo-code:

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

    if transparent_pure_phi(n, R):
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

### 3. Canonicalize Candidates Into Sites

Candidates visible in one parent region must be merged only when they describe the same split of that region.

Good merge criteria are:

- same parent region
- same branch predicate
- same left/right polarity

Bad merge criterion:

- condition equality alone

At the abstract-site level, this is enough. If two same-predicate occurrences in one parent region later need different scheduler behavior, that is a `RealizedSite` question, not an abstract-site question.

So this is the place where a union-find or similar canonicalization mechanism is useful: it can merge occurrences that belong to the same parent-region split. It is not the mechanism that discovers scope in the first place.

Pseudo-code:

```text
canonicalize_sites(R, evidence):
    uf = UnionFind(evidence)

    for each pair (a, b) in evidence:
        if same_parent_region(R, a, b)
           and same_predicate(a, b)
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

same_parent_region(R, a, b):
    return true  // both came from exposed_site_evidence(R)

same_predicate(a, b):
    return a.condition == b.condition

same_left_right_polarity(a, b):
    return arms_are_not_swapped(a, b)
```

### 4. Resolve Abstract Sites Into Realized Sites

Not every abstract pure site has one semantically forced scheduler-facing realization.

- state-backed sites, and any site needed for effectful sealing, are part of the mandatory recursive skeleton
- some pure sites are also forced nested because their predicate, support, or dependencies are only available inside a child region
- other pure sites remain legal at multiple ancestor realizations because their support can be shared or hoisted

Those last cases are where the grouping-vs-sequencing heuristic belongs.

For a pure site with multiple legal realizations:

- choosing a deeper realized parent makes it a nested `RealizedSite`
- choosing a shallower realized parent makes it a sequenced `RealizedSite`

This is the right place for the heuristic because the existing scheduler already uses branch groups to determine:

- which phis are checked together for readiness
- which groups appear inside another group's left or right subgraph
- whether the later CFG construction becomes nested or sequenced

So optional pure structure should be resolved as realized scheduler-facing groups, not as a separate later CFG-layout choice.

After that attachment choice, one abstract `Site` may still need to be partitioned into several scheduler-valid `RealizedSite`s if its concrete merge nodes cannot all be grouped together by the unchanged scheduler.

That partition must cover all live concrete merge nodes of the site that remain after rewriting or transparent-phi attachment. There are no leftover unrealized groups.

### 5. Derive Child Regions

Each site produces a left and right child region.

For stateful structure:

- the child region inherits the parent frontier
- each merged state component is replaced by its left or right predecessor for that child

For pure structure:

- the state frontier may remain unchanged
- the child regions still differ because they carry different branch obligations

After abstract site identity and realized-site attachment have been chosen, child derivation makes the realized nesting or sequencing clear.

Pseudo-code:

```text
derive_child_region(parent, site, side):
    child = Region(
        parent_site = site,
        parent_side = side,
        state_frontier = derive_child_frontier(parent, site, side),
        boundary_values = site_arm_values(site, side),
        context = parent.context union {(site, side)}
    )
    return child
```

### 6. Recurse Until The Site Structure Is Built

Repeat candidate discovery, canonicalization, and child derivation inside each child region.

The result is:

- a recursive family of abstract `Site`s
- a family of concrete scheduler-valid `RealizedSite`s that the scheduler will consume
- a region context for each live branch-scope subproblem

### Relation To Existing Code

The pseudocode in this section is not a line-for-line replacement for any one current function. It reorganizes responsibilities that are currently split across several local heuristics.

- `exposed_site_evidence()` corresponds most closely to the phi-aware part of `branch_partition()`
  - today that logic is local to one phi and appears as the `frontier` computation
  - in the new model, the same idea becomes a region-level exposed-slice walk
- `canonicalize_sites()` corresponds to what `find_branch_lattices()` and `same_scope()` are trying to do today
  - they currently approximate abstract site identity from local partitions
  - the pseudocode makes that grouping explicit and recursive
- `derive_child_region()` corresponds to structure that is currently implicit in each lattice's `l_subgraph` / `r_subgraph`
  - today child structure is inferred indirectly from those subgraphs and their nesting order
  - the pseudocode turns that into explicit left/right child regions
- `realize_sites()` corresponds to the work currently spread across `untangle()` and its recomputation loop
  - today the scheduler discovers grouping, clones overlap, recomputes lattices, then repeats
  - the pseudocode separates those into: infer abstract sites first, resolve concrete `RealizedSite`s second
- the later cloning step corresponds to the current `filtered_clone_subgraphs()` plus the shared-overlap rewrite in `untangle()`
  - `filtered_clone_subgraphs()` captures the current correctness constraint on escaping effectful structure
  - the new model keeps that constraint, but applies it while materializing a stable realized-site plan instead of while rediscovering sites

So the main change is not a different end result. It is that the current local cycle

- partition one phi
- group phis heuristically
- clone overlap
- recompute and repeat

is replaced by one explicit recursive construction:

- discover exposed region structure
- canonicalize abstract sites
- resolve realized sites
- materialize clones once

## Node Classification And Cloning

Once the realized site structure exists, graph rewrite becomes simpler.

What matters is recursive ownership during rewrite:

- a node may remain shared in parent support
- it may belong only to the left realized child region
- it may belong only to the right realized child region
- or it may need multiple concrete instances because incompatible realized regions request it

The useful internal memoization key is still:

```text
instance(node, region)
```

but this is just a helper for materialization, not a separate analysis result the scheduler needs.

### Effectful And State-Threading Nodes

Effectful classification is determined primarily by the state frontier and by escaping use.

- a node can only be materialized in a region where its required input state versions are visible
- an escaping writer must remain on a legal live write chain
- effectful cloning is allowed only when it preserves that chain structure

### Pure Nodes

Pure nodes are classified by realized-region use and dependency structure.

- a pure node may remain in the shallowest realized support region that can serve all uses
- if multiple incompatible realized regions require it, it gets multiple concrete instances
- cloning is therefore not "split an arbitrary demand group"
- cloning is "multiple incompatible realized regions request the same pure node"

### Partition Invariant

For a realized site, the support / left / right partition must be dependency-closed except at the intended cut points:

- shared frontier support
- explicit phi-arm rewires introduced by materialization
- effectful nodes deliberately excluded from clone domains for legality

This is what keeps the rewritten graph faithful to the realized site plan.

## Materialization

After the realized sites and recursive ownership are known:

- create the required concrete node instances
- wire each instance to the appropriate dependency instance
- clone pure overlap where realized regions require separation
- keep effectful nodes constrained by state visibility and escaping use
- derive each `RealizedSite`'s concrete `frontier`, `l_subgraph`, and `r_subgraph` from the rewritten graph

The important contract is that, after this rewrite:

- each realized site's left and right subgraphs are separated except for deliberate shared support
- pure overlap has been cloned as needed
- unsafe effectful cloning has not occurred
- grouped `Phi` / `StatePhi` nodes now correspond to actual realized branch sites rather than heuristic guesses

## Untangle

`untangle()` should stay conceptually close to what it already is: a graph-normalization pass before scheduling.

What changes is its input.

Today, `BranchLattice` is doing two jobs at once:

- it is a guess about branch-site identity
- it is the mutable object `untangle()` uses to decide cloning

That is why the current code must recompute lattices after each rewrite step.

In the new model, `untangle()` should instead consume stable realized site information:

- which concrete `Phi` / `StatePhi` nodes belong to each `RealizedSite`
- which realized sites are nested vs sequenced
- which nodes are support vs left-local vs right-local
- which pure nodes require cloning
- which effectful nodes are constrained by escaping use and therefore not freely cloneable

Then `untangle()` becomes "materialize this realized site plan" rather than "mutate the graph and rediscover scope until the guesses stop changing".

So `untangle()` should not have to change much structurally. The fixed-point rediscovery loop is the part that should disappear.

After that, the scheduler should consume `RealizedSite` directly. There is no need for a second scheduler-facing grouping object with different semantics.

## CFG Construction

Actual CFG construction stays as it is today.

- the existing bottom-up scheduler still computes readiness, schedules ordinary nodes, and inserts CFG branch structure when a `RealizedSite` becomes ready
- the only change is that the rewritten graph and the `RealizedSite`s it consumes now come from explicit scope inference rather than heuristic `BranchLattice` discovery

So the region tree is a normalization artifact for `untangle()`, not a replacement for the current scheduling machinery.

## Relation To The Current Scheduler

The current code is already implementing the right correctness constraints, but it discovers the structure indirectly.

- `Sea.branch_partition()` contains an important insight: scope discovery needs phi-sensitive exposed dependencies rather than raw transitive reachability
- the same function also reflects the second dependency view: branch ownership and clone pressure come from the full arm slices after shared support is removed
- `find_branch_lattices()` and `same_scope()` are local approximations to site canonicalization
- `BranchLattice.can_merge_branches()` is a scheduler-facing mergeability constraint; in the new model that constraint belongs to `RealizedSite` formation, not abstract `Site` identity
- `untangle()` clones shared pure overlap so that hidden region structure becomes visible in the graph
- the recomputation loop is needed because site identity often becomes clearer only after cloning
- escaping-writer filtering preserves the state and sealing constraints that make the current rewrite correct
- after that normalization, the existing CFG scheduler is already adequate

So the current scheduler should be read as a conservative fixed-point approximation to the same recursive region model.

## Test Intuition

The synthetic cases line up naturally with this model.

- `EFFECT_LIFT_OVER_PARENT_COND`: the value and state occurrences of `p` describe one site in one parent region
- `P3_EFFECTFUL_VARIANT`: transparent pure structure should not leak branch-exclusive deps upward into shared support
- `OUTSIDE_AND_INSIDE_SAME_Q`: outer `q` and inner `q` are different sites because they live in different parent regions
- `SAME_SCOPE_Q_ON_BOTH_P_SIDES`: sibling `q` sites under opposite sides of `p` are distinct because their parent regions differ
- `UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE`: dense repeated-condition graphs require recursive site lineage, not condition equality
- `UNTANGLE_BRAID_LIMIT_STRESS`: many pure sites are legally nestable, but some should be realized as shallower scheduler-facing groups to avoid blow-up

## Summary

The intended scope model is:

- infer a recursive tree of live `Region`s and abstract `Site`s
- use state frontier as the primary anchor for effectful scope
- extend the same tree with value-only branch structure where pure control still matters
- discover region-visible branch structure through a phi-sensitive exposed slice, not raw transitive dependency sets
- use full live branch slices to determine ownership and clone pressure once a site is known
- resolve optional pure structure as concrete scheduler-valid `RealizedSite`s, since that is what the existing scheduler actually consumes
- allow one abstract `Site` to realize into several `RealizedSite`s when the unchanged scheduler cannot consume all of its merge nodes as one group
- treat obligations as a derived summary of region ancestry
- treat cloning as a consequence of incompatible realized-region requests, constrained by state visibility and escaping use
- use `untangle()` to materialize the realized site plan into a rewritten Sea
- hand the rewritten Sea and `RealizedSite`s to the existing CFG scheduler unchanged

This is the object the current scheduler is already approximating. The main deficiency of the current code is not correctness, but that `untangle()` discovers the structure locally and iteratively instead of representing it directly before handing the graph off to the existing scheduler.
