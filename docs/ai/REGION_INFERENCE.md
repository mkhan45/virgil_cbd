# Region Inference

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

The constructive object is a recursive family of live `Region`s.

A `Region` is best understood as a scope in which a value is demanded.

The root region is the post-merge scope at `Finish`. Every non-root region is one side of one parent `Site`.

Scopes split in two ways:

- lexically, when control branches and different successor scopes demand different values
- by write effects, when a stateful operation creates a new state version and thereby kills the previous one for later demand

So a region is not an ownership partition of nodes. It is a live-demand scope induced by the values and state versions visible at some boundary.

This means regions may overlap in the current Sea. The same node may belong to multiple regions when each of those regions demands it.

For example, in the unLEM Sea for `IF`, `doBranch` and `doFallthru` belong to both children of the outer site. The outer true region demands them because that arm computes `merge(doFallthru, doBranch)`. The outer false region also demands them because that arm computes an inner `StatePhi(doBranch, doFallthru)`. Only later, during rewrite, do these overlapping regional demands become separate concrete node instances where needed.

### Determining Partitions

The simplest useful primitive is a contextual version of `branch_partition`. Instead of asking what one `Phi` or `StatePhi` looks like in isolation, it asks what that split looks like relative to a specific bottom demand context.

```text
type BottomCtx(
    boundary_values,   // value labels: IRNode
    boundary_states,   // state labels: (StateComponent, IRNode)
    demand_map,
    active
)

type Partition(
    phi,
    support,
    left,
    right,
    anchored,
    left_ctx,
    right_ctx
)

determine_all_partitions(bottom_node):
    root = make_root_ctx(bottom_node)
    out = []
    seen = {}
    visit_ctx(root, out, seen)
    return out

make_root_ctx(bottom_node):
    return make_ctx(
        exposed_boundary_values(bottom_node),
        live_finish_states(bottom_node)
    )

make_ctx(boundary_values, boundary_states):
    demand_map = labeled_backward_slice(boundary_values union boundary_states)
    active = keys(demand_map)
    return BottomCtx(boundary_values, boundary_states, demand_map, active)

visit_ctx(ctx, out, seen):
    for phi in visible_phis(ctx.active):
        key = (phi, ctx.boundary_values, ctx.boundary_states)
        if key in seen: continue
        seen.add(key)

        part = branch_partition_in_context(phi, ctx)
        out.put(part)

        if !part.left_ctx.active.empty():
            visit_ctx(part.left_ctx, out, seen)
        if !part.right_ctx.active.empty():
            visit_ctx(part.right_ctx, out, seen)

branch_partition_in_context(phi, ctx):
    cond = phi.value_deps[0]
    left_arm = phi.value_deps[1]
    right_arm = phi.value_deps[2]

    cond_deps = cachedTransitiveDeps(cond).intersection(ctx.active)
    left_phi = cachedTransitiveDepsPhiAware(left_arm).intersection(ctx.active)
    right_phi = cachedTransitiveDepsPhiAware(right_arm).intersection(ctx.active)
    support = cond_deps.union(left_phi.intersection(right_phi))

    left_full = cachedTransitiveDeps(left_arm).intersection(ctx.active)
    right_full = cachedTransitiveDeps(right_arm).intersection(ctx.active)
    shared = left_full.intersection(right_full).withoutAll(support)

    phi_labels = ctx.demand_map[phi]
    all_labels = ctx.boundary_values union ctx.boundary_states
    outside_labels = all_labels.withoutAll(phi_labels)
    anchored = {
        n in shared |
        has_writes(n) && ctx.demand_map[n].intersects(outside_labels)
    }
    cloneable = shared.withoutAll(anchored)

    left = left_full.withoutAll(support).withoutAll(shared).union(cloneable)
    right = right_full.withoutAll(support).withoutAll(shared).union(cloneable)

    left_ctx = child_ctx(left, ctx)
    right_ctx = child_ctx(right, ctx)

    return Partition(phi, support, left, right, anchored, left_ctx, right_ctx)

child_ctx(region, ctx):
    return make_ctx(
        exposed_child_values(region, ctx),
        exposed_child_states(region, ctx)
    )
```

This keeps the existing good parts of `branch_partition`:

- phi-aware support discovery uses `cachedTransitiveDepsPhiAware`
- side-local demand uses full transitive deps
- all set math stays as unions, intersections, and set subtraction

The new pieces are the bottom-relative `active` slice and the demand-provenance map `demand_map`. `labeled_backward_slice()` is just a backward slice that remembers which boundary values or state versions demand each node.

With that information, `anchored` no longer needs a separate escape-closure loop. A shared write is anchored exactly when it is still demanded by some boundary label outside the current `Phi`'s own label set. Pure overlap may still be cloned later. Writes inside `anchored` are never treated as cloneable overlap, which is the same safety condition the current scheduler enforces later with `filtered_clone_subgraphs()`.

### Exact Child Boundaries

The child contexts are not heuristic summaries of "useful" exiting users. They are the exact value/state cut interface between one child region and the rest of the parent demand slice.

For one side region `region` in parent context `ctx`, let:

```text
outside = ctx.active.withoutAll(region)

exposed_child_values(region, ctx) =
    ctx.boundary_values.intersection(region)
    union {
        n in region |
        exists u in outside : value_exit(n, u)
    }

exposed_child_states(region, ctx) =
    parent_boundary_states_in(region, ctx)
    union {
        state_label(sc, n) |
        n in region &&
        exists u in outside : state_exit(sc, n, u)
    }
```

Here:

- `value_exit(n, u)` means `u` consumes `n` through a real value edge
- `state_exit(sc, n, u)` means `u` consumes state component `sc` from `n`
- `parent_boundary_states_in(region, ctx)` means the state-boundary labels already present in the parent context whose producer node lies in `region`
- `state_label(sc, n)` is a state-boundary label that remembers both the state component and the producing node

So exact child boundaries require state labels, not just bare producer nodes. One node may carry multiple state components, and an exact child interface must preserve which component is exposed.

The role tests are structural:

- ordinary `value_deps` are value exits
- `Move` condition edges are bookkeeping and are not value exits
- `StatePhi` arm edges count as state exits, not ordinary value exits
- ordinary `state_deps[sc]` are state exits for that component

This construction is exact because every parent-visible demand path starting inside `region` either:

- already ends at a parent boundary label inside `region`, or
- has a first edge that leaves `region` and enters `outside`

The tail of that first exit is exactly the child interface item that makes the inner demand visible to the rest of the parent context. Conversely, every exposed boundary item is genuinely visible from outside the child region, so the cut is both sound and complete.

This also clarifies how the region sets relate to child contexts:

- `support` stays above the split and is outside both child regions
- `left` and `right` are the child regions whose cut interfaces are being recovered
- `cloneable` overlap may appear in both child boundaries, because each child may legitimately expose its own future clone of that structure
- `anchored` overlap remains shared in the parent context, though nodes inside a child region may still feed outward into it

### Worked Examples

Two traced examples are useful for calibrating what `determine_all_partitions()` is supposed to recover.

#### `IF_ul`

On the unLEM Sea for `IF_ul`, the contextual walk discovers 3 partition instances:

- outer `StatePhi[bool.&&]` in the root `Finish` context
- inner `StatePhi[U32_maybeTrue]` in the root `Finish` context
- inner `StatePhi[U32_maybeTrue]` again in the outer false-arm context

Those 3 instances collapse to 2 realized sites:

- the outer `bool.&&` site at root
- the inner `U32_maybeTrue` site nested under the outer false side

This example shows two important things.

First, a site may be visible from the root demand slice before its parent placement is known. The root walk already sees the inner `StatePhi`, because the final demand passes through it. Second, recursive rediscovery in a child context is what fixes the concrete scope of that site. The repeated inner partition is not redundant noise. It is the evidence that the inner site lives specifically inside the outer false region.

For `untangle`, the outer partition says that `doBranch` and `doFallthru` are overlapping regional demand under the outer split, while the nested rediscovery says that any cloning for the inner site is local to the outer false arm. For the scheduler, the same information becomes a branch tree: one outer branch, with one inner branch nested only under the false side.

#### `SAME_SCOPE_Q_ON_BOTH_P_SIDES`

On the base Sea for `SAME_SCOPE_Q_ON_BOTH_P_SIDES`, the contextual walk discovers 10 partition instances. Ignoring repeated visits in different contexts, there are 6 distinct phi-level partitions:

- outer `Phi[left]`
- outer `StatePhi[p]`
- left-arm `Phi[inner]`
- left-arm `StatePhi[q]`
- right-arm `Phi[inner]`
- right-arm `StatePhi[q]`

Those instances collapse to 3 realized sites:

- the outer `p` site
- one `q` site nested under `p=true`
- one `q` site nested under `p=false`

This is the key same-scope test. Both inner `q` sites are already visible from the root context, because both contribute to the final demand for `left` and the final stack state. So root visibility alone is not enough to decide whether they are one shared site or two separate ones. The useful information comes from recursive rediscovery:

- the left `q` value/state partitions recur under the left child context of the outer `p` site
- the right `q` value/state partitions recur under the right child context of the outer `p` site

That is exactly the scope information the current scheduler tries to reconstruct later with `same_scope`. In the region model, it falls out of the partition walk itself.

For `untangle`, these child-context rediscoveries prevent incorrectly treating the two `q` branches as one shared lattice just because they use the same condition node. For the scheduler, they say to emit two separate nested `q` branches, one in each `p` arm.

### What The Partitions Are For

The raw output of `determine_all_partitions()` is not itself the final scheduler object. Its purpose is to provide the evidence needed to build `RealizedSite`s.

Each partition instance contributes four things:

- `support`: the part of the demand slice that must stay above the split
- `left` and `right`: the branch-local demand regions for that site in that context
- `anchored`: shared writes that may not be cloned across this split
- `left_ctx` and `right_ctx`: the child demand contexts in which nested sites may be rediscovered

That gives two direct consumers.

For `untangle`, a realized site needs exactly this information: what overlap belongs to this split, what part is cloneable, and what escaping writes must remain shared. The contextual walk matters because clone domains are scoped. The right cloning decision for a site depends on the parent region in which the site is realized, not just on the phi node in isolation.

For the scheduler, a realized site is a branch constructor. The recursive rediscoveries determine parent/child placement in the branch tree. Root visibility says a split is demanded somewhere under the current boundary. Child-context rediscovery says where that split is actually nested. In other words, contextual partition discovery should replace both flat lattice formation and the later heuristic question of whether two phis are "in the same scope".

So the intended pipeline is:

- discover partition instances relative to demand contexts
- quotient those instances by scope into realized sites
- use realized sites to drive both untangle rewriting and final bottom-up scheduling

The examples above suggest that repeated discovery of the "same" phi in different contexts is not a bug. It is the mechanism by which the region model recovers lexical nesting from bottom demand.

### Realizing Branch Sites

What `untangle` and the scheduler actually want is not the raw multiset of partition instances, but a stable list of branch sites with parent/child structure. The important shift is:

- infer sites once from the original sea plus bottom demand
- keep that site tree fixed
- let rewrites change only node instances, not branch scope

This separates three concerns that are fused together in the current `BranchLattice`:

- which phis belong to one split
- what the clone-safe domains of that split are
- where that split sits in the lexical branch tree

#### Proposed `BranchSite`

```text
type BranchSite(
    id,
    condition,
    phis,

    parent,
    parent_side,      // root | left | right

    support,
    left_only,
    right_only,
    cloneable_overlap,
    anchored_overlap,

    left_ctx,
    right_ctx,
    left_children,
    right_children
)
```

The intended meaning is:

- `condition`: the shared branch discriminator for the site
- `phis`: all value/state phis realized by this split in this scope
- `parent` and `parent_side`: where this site is nested in the branch tree
- `support`: nodes that must remain above the split
- `left_only` and `right_only`: branch-local demand that exists only on one side
- `cloneable_overlap`: shared demand that may be duplicated during untangle
- `anchored_overlap`: shared writes that must remain shared
- `left_ctx` and `right_ctx`: the child demand contexts from which nested sites are discovered

For a site formed from multiple phi partitions, `support` still comes from a straight union, but clone safety does not. Merging partitions can create shared overlap that did not exist in any member partition by itself, so `anchored_overlap` must be computed at the site level.

```text
raw_support = union(part.support)
raw_left = union(part.left)
raw_right = union(part.right)

raw_domain = raw_left.union(raw_right)
raw_shared = raw_left.intersection(raw_right)
```

The site-level clone decision is driven by a structural escape check on that raw merged domain.

Define the raw escape seed as the nodes in `raw_domain` that still have a real consuming use outside `raw_domain`, excluding uses that will be rewired when this site's phis are cloned:

```text
escape_seed(site) = {
    n in raw_domain |
    exists child notin raw_domain :
        real_use(n, child)
        && !rewired_site_use_raw(n, child, site)
}
```

`real_use` follows the same edge-role rules used elsewhere in the region model:

- ordinary consuming edges count
- `Move` condition edges are bookkeeping and do not count
- site-owned phi arm edges that will be rewritten during cloning do not count as escaping uses

Then define `escaping(site)` as the backward closure of that seed inside `raw_domain`:

```text
escaping(site) = least E subseteq raw_domain such that:
    escape_seed(site) subseteq E
    and if n in E and dep in raw_domain and dep -> n is a real dependency,
        then dep in E
```

Intuitively: if a node in the candidate clone domain still feeds the outside world, then everything needed to build that escaping node also escapes.

The site fields then come directly from that one structural pass:

```text
site.support = raw_support
site.anchored_overlap = raw_shared.intersection(writes).intersection(escaping(site))

site.left_region = raw_left.withoutAll(site.anchored_overlap)
site.right_region = raw_right.withoutAll(site.anchored_overlap)

site.cloneable_overlap = site.left_region.intersection(site.right_region)
site.left_only = site.left_region.withoutAll(site.cloneable_overlap)
site.right_only = site.right_region.withoutAll(site.cloneable_overlap)
```

This is still a graph-structural property, not pure set algebra over partition summaries, because `escaping(site)` depends on actual consumers and on which phi-arm uses untangle will rewire. But it is one structural closure, not a fixed point.

#### Why The Fixed Point Appears Unnecessary

The earlier formulation used an iterative anchored-set fixed point: remove escaping shared writes from the domain, recompute escaping, and repeat. The one-shot rule above should be equivalent.

The key observation is that removing anchored nodes only shrinks the domain. So the only "new" outside users that can appear after one round are former in-domain consumers that now point to a removed anchored node.

Suppose a shared write `w` were not in the original `escaping(site)` set, but became escaping only after some earlier anchored write `a` was removed. Then `a` must be the first outside consumer witnessing that new escape. So `w` must be a dependency of `a`.

But `a` was already in the original escape closure, and `escaping(site)` is closed backward over in-domain dependencies. So every in-domain dependency of `a`, including `w`, was already in `escaping(site)` from the start. That is a contradiction.

So removing anchored writes cannot create a genuinely new escaping shared write. Any shared write that would be anchored in a later round is already in the first raw-domain closure.

This argument relies on the current untangle model, where only escaping shared writes must stay above the split. Pure shared structure may still remain in `cloneable_overlap` even if it also feeds users outside the site, because untangle keeps the original shared instance and only duplicates the overlap needed by the branch-local rewrite.

#### Tracked Opcode Intuition

The tracked problem opcodes all match the one-shot rule:

- `IF --unlem`: the outer `bool.&&` site has no raw outside escape that forces `doBranch` or `doFallthru` to anchor, so `anchored_overlap` stays empty
- `OUTER_Q_AND_BOTH_P_SIDES_Q`: the merged root `p` site sees raw outside use from the root `q` site, so one closure already reaches shared `{pop_u32[c2], u32.!=[q], pop_u32[x], 0}` and anchors exactly the shared writes `{pop_u32[c2], pop_u32[x]}`
- `TRIVIAL_PHI_STACK_SHARED_EFFECT`: the root `p` site and nested trivial `r` site both have raw outside use of the shared effect chain, so one closure already reaches the wrapped shared pops and anchors them without iteration
- `UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE`: the root `z`/`p` site and the nested `y` site both already expose the shared `x`-effect chain through raw-domain users, so one closure reaches the shared effectful pops while leaving the pure `Phi[x]`/constant structure cloneable

So the branch-lattice-style clone domains become derived values instead of primary fields.

#### Immediate Sites In A Context

The core rule is: a partition may be visible in a context without being realized there.

A partition `p` is **immediate in `ctx`** when there is no other visible partition `q` in the same `ctx` such that `p.phi` is demanded strictly inside one side of `q`:

```text
immediate_in_ctx(p, visible):
    for q in visible:
        if q.phi.id == p.phi.id: continue

        in_left = q.left.has(p.phi)
        in_right = q.right.has(p.phi)

        if in_left != in_right:
            return false

    return true
```

So:

- if `p.phi` lies only in `q.left`, then `p` is nested under `q`'s left child, not realized in `ctx`
- if `p.phi` lies only in `q.right`, then `p` is nested under `q`'s right child
- if `p.phi` lies in neither side, `q` says nothing about `p`
- if `p.phi` lies in both sides, then `p` is shared relative to `q` and is not placed by `q`

This is what makes the examples come out right:

- in `IF_ul`, the inner `mt` partition is visible at root but not immediate there, because it lies only in the outer false side
- in `SAME_SCOPE_Q_ON_BOTH_P_SIDES`, both `q` sites are visible at root but neither is immediate there, because each lies on exactly one side of the outer `p` site

#### Merging Immediate Partitions Into One Site

Once the immediate partitions of `ctx` are known, they are merged into sites. Two immediate partitions belong to the same site when:

- they have the same `condition`
- neither phi is an ancestor of the other
- they are immediate in the same `ctx`

In the common case, this merges the value phi and state phi created by one branch split into one branch site. In the examples above:

- `Phi[left]` and `StatePhi[p]` merge into the outer `p` site
- `Phi[inner]` and `StatePhi[q]` merge into each inner `q` site
- the left and right `q` sites do not merge, because they are not immediate in the same child context

If a future counterexample shows that same-condition immediate partitions can still name different splits inside one context, the refinement should be to split by contextual side-signature against the full visible partition set, not to fall back to recomputing mutable lattices from the rewritten graph.

#### Site Construction Sketch

```text
realize_sites(ctx, parent, parent_side):
    visible = []
    for phi in visible_phis(ctx.active):
        visible.put(branch_partition_in_context(phi, ctx))

    immediate = [ p in visible | immediate_in_ctx(p, visible) ]
    groups = merge_immediate_by_condition(immediate)

    out = []
    for g in groups:
        site = make_site(g, parent, parent_side)
        site.left_children = realize_sites(site.left_ctx, site, left)
        site.right_children = realize_sites(site.right_ctx, site, right)
        out.put(site)

    return out
```

The root call is:

```text
root_sites = realize_sites(make_root_ctx(bottom_node), null, root)
```

This gives a globally computed branch-site forest whose structure does not depend on untangle's cloning decisions.

#### How This Replaces Mutable Lattices

The current scheduler repeatedly:

- discovers lattices from the present sea
- filters them with `filter_branch_lattices_clone_domains()`
- clones a shared region
- recomputes lattices because the graph changed

With global sites, that becomes:

- infer the `BranchSite` tree once from the original sea
- compute `anchored_overlap` and `cloneable_overlap` at inference time
- process sites in postorder during untangle
- for each site, clone only `cloneable_overlap`
- rewire only the branch-local consumers of that site

The scheduler then consumes the same site tree directly for grouped phi readiness and for branch insertion. So the branch structure used by untangle and the branch structure used by scheduling become the same object, instead of two approximate reconstructions of the same thing.

### Site Realization Examples

The `immediate_in_ctx()` rule is easiest to validate on examples where multiple same-condition partitions are visible from the root context.

#### `IF` unLEM

In the unLEM Sea for `IF`, the root context can see two partitions:

- outer `StatePhi[bool.&&]`
- inner `StatePhi[U32_maybeTrue]`

But only the outer partition is immediate at root. The inner phi lies strictly in the outer false side, so it is visible from the root demand slice without being realized there.

So `realize_sites(make_root_ctx(Finish), null, root)` returns:

```text
root
- site(bool.&&)
  - right: site(U32_maybeTrue)
```

This is the intended outcome. The inner split is discovered at root, but lexical placement comes from child-context rediscovery. The site tree says:

- there is one outer branch at root
- its true side has no nested branch site
- its false side contains one nested `U32_maybeTrue` site

This is exactly the structure `untangle` and the final scheduler need.

#### `OUTER_Q_AND_BOTH_P_SIDES_Q`

This example is a stronger test because the root context sees three different `q`-condition partitions at once:

- one outer `q` site that directly contributes to `outer`
- one left-arm `q` site nested under `p`
- one right-arm `q` site nested under `p`

It also sees the two `p`-condition phis that combine into the root `p` site.

At root, the visible partitions are:

- `Phi[outer]` with condition `q`
- `Phi[left]` with condition `q`
- `Phi[left]` with condition `p`
- `Phi[right]` with condition `q`
- `Phi[right]` with condition `p`

The immediate ones are:

- outer `q`
- left `p`
- right `p`

The nested left/right `q` partitions are not immediate at root, because each lies strictly on one side of the corresponding `p` partition. The two immediate `p` partitions merge into one root `p` site, and the outer `q` partition remains a separate root site because it is not contained in either `p` side.

This example is also the clearest reason that merged-site clone safety must be computed structurally instead of inherited from `union(part.anchored)`. After the two root `p` partitions merge, the merged site has new shared overlap:

- `pop_u32[c2]`
- `u32.!=[q]`
- `pop_u32[x]`
- `0`

The shared pops still feed the outer root `q` site, so they escape the root `p` site's clone domain and must stay in `anchored_overlap`. The pure `q` condition structure remains cloneable.

So the realized site forest is:

```text
root
- site(q)
- site(p)
  - left: site(q)
  - right: site(q)
```

More explicitly:

```text
root
- site(cond = q, phis = {outer})
- site(cond = p, phis = {left@p, right@p})
  - left: site(cond = q, phis = {left@q})
  - right: site(cond = q, phis = {right@q})
```

This is the behavior we want.

- The outer `q` site stays at root.
- The left and right `q` sites do not merge with that root `q` site, even though all three use the same condition node.
- The left and right `q` sites also do not merge with each other, because they are realized in different child contexts of the `p` site.

So this example supports the core claim of the construction: site identity should be determined by contextual immediacy and parent placement, not by a flat same-condition grouping over all visible phis.
