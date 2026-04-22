# Instanced Scheduler Plan

## Goal

Replace the explicit `untangle()` graph rewrite with a scheduler that uses the
inferred `BranchSite` tree directly. Instead of cloning the Sea ahead of time,
the scheduler should create multiple `SchedulerInstance`s for the same Sea node
only when different contextual uses require different homes.

This keeps scope recovery in one place:

- `PartitionInference` discovers the realized branch tree once.
- `resolve_home(...)` decides how far a node may descend for a specific use.
- duplication appears as multiple scheduler instances with different homes.

The central question is no longer:

```text
Which subgraph should untangle clone next?
```

It becomes:

```text
For this use of node N in partition P, what is the deepest legal partition that
may own this instance?
```

## Core Objects

These are intentionally minimal. We should avoid caching derived membership
facts inside scheduler objects.

### `SchedulerInstance`

One scheduling obligation for one original Sea node in one partition.

```text
class SchedulerInstance {
    var root: IRNode;
    var home: PartitionFrame;

    var bottom_limit: CFGNode;
    var placed_in: CFGNode;
}
```

Conceptual role:

- `root` says which original Sea node this instance represents.
- `home` says which partition minimally owns this instance.
- two uses of the same `root` share work iff they resolve to the same `home`.
- duplication is represented by two instances with the same `root` and
  different `home`s.

### `PartitionFrame`

One schedulable CFG region.

```text
class PartitionFrame {
    var parent: PartitionFrame;
    var owner_site: SiteFrame;
    var side: SiteSide;

    var top_limit: CFGNode;
    var default_bottom: CFGNode;
}
```

Conceptual role:

- defines the legal placement region for instances.
- mostly CFG-facing.
- should not cache a set of Sea nodes; legality comes from the ancestor site
  path, not from mutable summaries.

### `SiteFrame`

Bridge from inferred branch semantics to concrete CFG structure.

```text
class SiteFrame {
    var site: BranchSite;

    var parent_partition: PartitionFrame;
    var left_partition: PartitionFrame;
    var right_partition: PartitionFrame;

    var branch_cfg: CFGBranch;
    var merge_cfg: CFGNode;
}
```

Conceptual role:

- one realized branch point.
- owns the branch/merge structure in CFG.
- uses `site: BranchSite` as the semantic source of truth.

### `UseRole`

This distinguishes ordinary dependency uses from site-owned phi uses.

```text
type UseRole #unboxed {
    case Value(idx: int);
    case State(sc: StateComponent);
    case PhiCond;
    case PhiLeft;
    case PhiRight;
}
```

Conceptual role:

- ordinary deps use the partition of the user instance.
- phi deps use partitions determined by the owning site:
  - `PhiCond` -> parent partition
  - `PhiLeft` -> left child partition
  - `PhiRight` -> right child partition

## Scheduler Phases

### Phase 0: Build The Static Scope Skeleton

Infer the realized `BranchSite` forest once and lower it into a CFG branch
skeleton.

Output:

- root `PartitionFrame`
- one `SiteFrame` per realized site
- child `PartitionFrame`s for each site
- grouped merge/phi CFG nodes for each site

Purpose:

- branch structure is fixed up front
- later scheduling no longer reconstructs scope from Sea overlap

### Phase 1: Define `resolve_home(...)`

This is the semantic center of the design. Given a node and a contextual use, it
returns the deepest partition that may legally own that use.

### Phase 2: Discover The Instance Graph

Build all demanded `SchedulerInstance`s eagerly.

Demand roots:

- `Finish` deps in the root partition
- site-owned phi demands

For each demand:

- compute `home = resolve_home(root, use_partition, use_role)`
- intern `SchedulerInstance(root, home)`
- record dependency edges between user and dep instances

The scheduler should keep these tables outside the objects themselves:

```text
instance_by_key[(root, home)] -> SchedulerInstance
deps[(root, home)] -> Vector<(dep_key, UseRole)>
pending_users[(root, home)] -> int
```

### Phase 3: Bottom-Up Placement

Run a worklist over `SchedulerInstance`s.

- an instance is ready when `pending_users` reaches `0`
- placement must stay between:
  - `home.top_limit` as the static ceiling
  - the accumulated `bottom_limit` from already-placed users

### Phase 4: Lower To Final Output

Only after placement is complete should the scheduler lower the scheduled
instances into final CFG/SSAD output.

The important property is that the Sea itself does not need an explicit untangle
rewrite.

## `resolve_home(...)`

## Purpose

`resolve_home(...)` answers the question that `untangle()` was approximating by
graph cloning:

```text
For this use of node N, what is the deepest partition where one legal instance
of N may live?
```

If two uses of the same node resolve to the same home, they share one instance.
If they resolve to different homes, they require separate instances.

This makes duplication a consequence of placement legality rather than a
separate rewrite pass.

## Inputs

```text
resolve_home(root: IRNode, use_partition: PartitionFrame, use_role: UseRole)
    -> PartitionFrame
```

`use_partition` is determined as follows:

- ordinary value/state deps use the partition of the user instance
- site-owned phi uses use the owning site's partitions:
  - `PhiCond` -> parent partition
  - `PhiLeft` -> left partition
  - `PhiRight` -> right partition

## Ancestor-Only Rule

`resolve_home(...)` must inspect only the site chain from the root partition
down to `use_partition`.

Sibling root sites do not matter.

This is essential for cases like `OUTER_Q_AND_BOTH_P_SIDES_Q`, where the outer
root `q` site and the root `p` site are siblings. A use beneath `p` must not be
constrained by `q_outer`, because `q_outer` is not on the ancestor path.

## Site Classification

For each crossed ancestor site `s`, classify the node `n` using the realized
site fields:

```text
if n in s.support or n in s.anchored_overlap:
    StopAbove

else if n in s.left_only:
    DescendLeft

else if n in s.right_only:
    DescendRight

else if n in s.cloneable_overlap:
    DescendEither

else:
    StopAbove
```

Interpretation:

- `support`: the node must remain above the split
- `anchored_overlap`: the node is shared but may not be duplicated across the
  split, so it must remain above the split
- `left_only`: the node may exist only in the left child partition
- `right_only`: the node may exist only in the right child partition
- `cloneable_overlap`: the node may descend into whichever side this particular
  use occurs on
- defaulting to `StopAbove` is conservative and prevents accidentally sinking a
  node into unrelated subtrees

## Pseudocode

```text
resolve_home(n, use_partition):
    cur = root_partition

    for each crossed site s on the ancestor path from root to use_partition,
        with chosen side sigma in {left, right}:

        d = classify(s, n)

        if d == StopAbove:
            return cur

        if d == DescendLeft:
            require sigma == left
            cur = s.left_partition
            continue

        if d == DescendRight:
            require sigma == right
            cur = s.right_partition
            continue

        if d == DescendEither:
            cur = child_partition(s, sigma)
            continue

    return cur
```

## Key Properties

### Monotone Descent

`resolve_home(...)` only moves downward along the use path. It never crosses to
another subtree and never revisits siblings.

### Duplication Emerges Naturally

There is no separate untangle phase. If two uses of the same node follow
different descendant paths through cloneable sites, they simply resolve to
different homes.

### Anchored And Support Nodes Stop Early

`support` and `anchored_overlap` have the same scheduling effect: the node may
not cross that split. The distinction matters semantically but not for home
resolution.

### Same-Condition Sites Stay Distinct

Two same-condition sites under different ancestor paths remain distinct because
their `use_partition`s have different ancestor chains. This is what fixes
`SAME_SCOPE_Q_ON_BOTH_P_SIDES` without a mutable `same_scope` heuristic.

### No Sibling Interference

Only ancestors matter. This is what fixes `OUTER_Q_AND_BOTH_P_SIDES_Q` without
the cloned-context overreach that appeared in the untangle rewrite attempts.

### Conservative Default

If a crossed site does not classify the node, the node stops above that site.
This is safer than assuming it may descend.

## Traces

These traces are not full execution traces. They are home-resolution traces that
show how the rule should behave on the tracked examples.

### `END`

Realized site tree:

```text
root
- site(f_isAtEnd)
```

Key nodes:

- `doEnd [eff__2]`
  - `doEnd in support`
  - home: `root`
- `doReturn [eff__1]`
  - `doReturn in left_only`
  - a left-arm use descends to `f_isAtEnd.left`

Meaning:

- no duplication
- one shared support chain
- one left-local effect

### `IF [unLEM]`

Realized site tree:

```text
root
- site(bool.&&)
  - right: site(U32_maybeTrue)
```

Key nodes:

- `doBranch [eff__1]`
  - outer merge use crosses root `bool.&&`
  - `doBranch in cloneable_overlap`
  - for the outer use, home: `bool&&.left`
  - for the nested true-arm use, path continues through `bool&&.right`
  - nested `mt` site classifies `doBranch` as `left_only`
  - home: `bool&&.right / mt.left`

- `doFallthru [eff__3]`
  - outer merge use: home `bool&&.left`
  - nested false-arm use: home `bool&&.right / mt.right`

- `doIf [label]`, `pop_u32 [cond]`, `u32.==`, outer condition structure
  - all are in root `support`
  - home: `root`

Meaning:

- `IF` is the simplest demonstration that one original node may produce multiple
  instances without explicit graph cloning.

### `SAME_SCOPE_Q_ON_BOTH_P_SIDES`

Conceptual site tree:

```text
root
- site(p)
  - left: site(q_left)
  - right: site(q_right)
```

The important point is that the two `q` sites are distinct realized sites even
though they share a condition node.

Key nodes:

- `u32.+ [left__3]`
  - at `p`, cloneable
  - a use under the true arm resolves to `p.left`

- `u32.+ [left__9]`
  - symmetric
  - home: `p.right`

- `11`
  - cloneable at `p`, so it descends to `p.left`
  - then the local `q_left` site pushes it further toward the false arm

- `21`
  - symmetric in `p.right`

- `pop_u32 [c2]`
  - root support
  - home: `root`

Meaning:

- same-condition branches on different sides of `p` do not need rediscovery or
  mutable lattice recomputation
- the ancestor path already separates them

### `OUTER_Q_AND_BOTH_P_SIDES_Q`

Realized site forest:

```text
root
- site(q_outer)
- site(p)
  - left: site(q_left)
  - right: site(q_right)
```

Key nodes:

- `pop_u32 [x]`
  - at root `p`, `anchored_overlap`
  - home: `root`

- `pop_u32 [c2]`
  - also anchored at root `p`
  - home: `root`

- `u32.!= [q]`
  - at root `p`, cloneable, not anchored
  - nested `q_left` and `q_right` may each get their own home for pure `q`
    structure

- `u32.+ [outer__20]`
  - only the `q_outer` ancestor chain matters
  - `p` is a sibling, not an ancestor
  - home is determined only by `q_outer`

- `u32.+ [left__9]`
  - uses under `p.left` cross `p`, not `q_outer`
  - it descends through `p.left`, then through the nested local `q`

Meaning:

- sibling root sites must not interfere with one another
- anchored effectful inputs stay at `root`
- pure repeated `q` structure may specialize lower

### `TRIVIAL_PHI_STACK_SHARED_EFFECT`

Representative site structure:

```text
root
- site(q_base)
- site(p_wrap2)
  - left: site(q_base)
  - left: site(r_wrap1)
```

Key nodes:

- `pop_u32 [c3]`
  - anchored at the relevant higher sites
  - home: `root`

- `pop_u32 [base__11]`
  - also stops high due to anchoring in wrap contexts

- `5`
  - pure value, cloneable at higher sites
  - descends through wrapper sites toward the uses that need it

- `merge [merge__36]`, `Phi [innerPhi__35]`
  - pure branch-local structure
  - continue descending into child contexts

Meaning:

- effect chain stays high
- pure wrapper/value structure descends lower

### `UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE`

Representative root sites:

```text
root
- site(p_x)
- site(p_z)
- nested q and r sites below them
```

Key nodes:

- `pop_u32 [c3]`
  - anchored at the relevant root `p/z` site
  - home: `root`

- `pop_u32 [x__16]`, `pop_u32 [x__19]`
  - likewise anchored high
  - home: `root`

- `u32.+ [z__4]`
  - pure and cloneable in the `p/z` split
  - only the `p=false` path needs it
  - home: the right child of that root `p` site

- `Phi [y]`
  - cloneable in the same root split
  - used only on the `p=true` side
  - then refined further by the nested `r` site

- `10`, `20`, `Phi [x]`
  - descend through the `p=true` side into the local `q/x` sites
  - effect acquisition remains high, pure value structure continues downward

Meaning:

- this is the main case where explicit untangle cloning became hard to control
- instance scheduling should be better suited because it reasons directly about
  the contextual use path

## Summary

`resolve_home(...)` should be the semantic replacement for explicit untangle.

Its key behavior is:

- walk only the ancestor site path of the use
- stop at `support` or `anchored_overlap`
- force the side for `left_only` / `right_only`
- follow the use side for `cloneable_overlap`
- default to stopping above an unclassified crossed site

If this rule is right, the rest of the scheduler can be built around instance
discovery and bottom-up placement without a separate graph untangle pass.
