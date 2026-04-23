# Instanced Scheduler

## Goal

The instanced scheduler replaces explicit `untangle()` graph rewriting with a
scheduler that uses the inferred `BranchSite` tree directly.

The old question was:

```text
Which subgraph should untangle clone next?
```

The new question is:

```text
For this use of node N in partition P, what is the deepest legal partition that
may own this instance?
```

Instead of cloning the Sea before scheduling, the scheduler creates multiple
`SchedulerInstance`s for the same original Sea node only when different
contextual uses resolve to different homes.

This keeps scope recovery in one place:

- `PartitionInference` discovers the realized branch tree once.
- Phase 0 lowers that fixed tree into a CFG skeleton.
- `resolve_home(...)` decides where a particular use of a node may live.
- Instance discovery computes per-root home plans, then materializes `(root node,
  home partition)` obligations.
- Later placement will schedule those instances without rewriting the Sea.

The important invariant is that branch structure is fixed before scheduling. The
scheduler may create several instances of a node, but it should not rediscover or
mutate branch scope.

## Current Status

Implemented:

- `common/sea/region/InstancedScheduler.v3`
- Phase 0 static scope skeleton construction.
- Phase 1 `resolve_home(...)`.
- Phase 2 home-plan instance discovery.
- `common/sea/region/ISRender.v3` for Phase 0, home-resolution, and instance rendering.
- `tests/InstancedSchedulerTest.v3` with `--resolve-home` and `--instances` modes.
- `scripts/instanced_scheduler_golden_test.sh` for Phase 0 skeleton goldens.
- `scripts/instanced_instance_golden_test.sh` for instance-discovery goldens.

Not implemented yet:

- bottom-up placement
- pending-user counts
- CFG mutation for placed instances
- final SSAD lowering
- schedule checker integration for the instanced scheduler

## Core Model

### `PartitionFrame`

A `PartitionFrame` is one schedulable region in the static branch skeleton.

Current shape:

```text
class PartitionFrame {
    var id: int;
    var parent: PartitionFrame;
    var owner_site: SiteFrame;
    var side: SiteSide;

    var top_limit: ICFGNode;
    var default_bottom: ICFGNode;
}
```

Meaning:

- `parent` forms the ancestor chain used by `resolve_home(...)`.
- `owner_site` is null only for the root partition.
- `side` records whether this is the left or right child of `owner_site`.
- `top_limit` is the branch CFG node that an instance may not move above.
- `default_bottom` is the leaf block for this partition before placement.

`PartitionFrame` intentionally does not cache membership sets. Legality comes
from the realized `BranchSite` fields along the ancestor path.

### `SiteFrame`

A `SiteFrame` bridges one inferred `BranchSite` to the concrete CFG skeleton.

Current shape:

```text
class SiteFrame {
    var site: BranchSite;

    var parent_partition: PartitionFrame;
    var left_partition: PartitionFrame;
    var right_partition: PartitionFrame;

    var branch_cfg: ICFGBranch;
    var merge_cfg: ICFGJoin;

    var left_children: Vector<SiteFrame>;
    var right_children: Vector<SiteFrame>;
}
```

Meaning:

- `site` is the semantic source of truth.
- `parent_partition` is where the branch condition is demanded.
- `left_partition` and `right_partition` are the child scheduling regions.
- `branch_cfg` and `merge_cfg` define the skeleton branch and join.
- child vectors preserve the realized site tree.

### `ICFGNode`

The instanced scheduler uses a parallel CFG skeleton instead of reusing the old
`CFGNode` classes in `Schedule.v3`.

Current node types:

```text
ICFGBlock
ICFGBranch
ICFGJoin
```

This keeps Phase 0 structural and avoids coupling new instance placement to the
old scheduler's branch-lattice, dominance, and phi-placement assumptions.

### `SchedulerInstance`

A `SchedulerInstance` is one scheduling obligation for one original Sea node in
one home partition.

Current shape:

```text
class SchedulerInstance {
    var id: int;
    var root: IRNode;
    var home: PartitionFrame;

    var bottom_limit: ICFGNode;
    var placed_in: ICFGNode;
}
```

Meaning:

- `root` is the original Sea node represented by this obligation.
- `home` is the deepest legal partition returned by `resolve_home(...)`.
- two uses share work iff they intern to the same `(root, home)` pair.
- duplication is represented by two instances with the same `root` and different
  `home`s.
- `bottom_limit` and `placed_in` are reserved for Phase 3 placement.

### `UseRole`

`UseRole` describes why a dependency is demanded.

Current shape:

```text
type UseRole #unboxed {
    case Value(idx: int);
    case State(sc: StateComponent);
    case PhiCond;
    case PhiLeft;
    case PhiRight;
}
```

Meaning:

- ordinary value deps use the user instance's home partition.
- ordinary state deps use the user instance's home partition.
- `PhiCond` uses the owning site's parent partition.
- `PhiLeft` uses the owning site's left child partition.
- `PhiRight` uses the owning site's right child partition.

`UseRole` is also recorded on instance dependency edges so placement and later
lowering can preserve why each dependency was needed.

## Phase 0: Static Scope Skeleton

Phase 0 builds a fixed CFG skeleton from the realized `BranchSite` forest.

Inputs:

- original Sea
- `PartitionInference.determine_all_partitions(sea, sea.finish, true, true)`

Outputs:

- one root `PartitionFrame`
- one `SiteFrame` per realized site
- left and right `PartitionFrame`s for every site
- a parallel `ICFGBranch` / `ICFGJoin` skeleton

Key properties:

- branch structure is fixed up front.
- sibling root sites stay siblings.
- same-condition sites under different parent sides remain distinct.
- the Sea is not cloned or rewritten.

The current Phase 0 goldens cover:

- canonical `IF --unlem`
- `SAME_SCOPE_Q_ON_BOTH_P_SIDES`
- `OUTER_Q_AND_BOTH_P_SIDES_Q`
- `TRIVIAL_PHI_STACK_SHARED_EFFECT`
- `UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE`

The synthetic Phase 0 goldens are currently raw, not `--unlem`. That is
intentional for now and can be changed later if we want the skeleton suite to
track unLEM stress shapes instead.

Useful commands:

```bash
make InstancedSchedulerTest
bash scripts/instanced_scheduler_golden_test.sh
bash scripts/instanced_instance_golden_test.sh
./InstancedSchedulerTest --canonical --unlem IF
```

## Phase 1: `resolve_home(...)`

`resolve_home(...)` is the semantic replacement for explicit untangle cloning.

Signature:

```text
resolve_home(root: IRNode, use_partition: PartitionFrame, use_role: UseRole)
    -> PartitionFrame
```

The implementation unwraps `Move` nodes before classification.

### Ancestor-Only Rule

`resolve_home(...)` inspects only the partition ancestor path from root to
`use_partition`.

Sibling sites do not matter. This is essential for cases like
`OUTER_Q_AND_BOTH_P_SIDES_Q`, where a use beneath root `p` must not be
constrained by sibling root `q_outer`.

### Site Classification

For each crossed site `s`, classify node `n` using the realized site fields:

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

- `support` must stay above the split.
- `anchored_overlap` is shared and may not be duplicated across the split.
- `left_only` may descend only into the left child.
- `right_only` may descend only into the right child.
- `cloneable_overlap` may descend into the side where this use occurs.
- unclassified nodes stop above the site conservatively.

Side mismatches also stop above the site. For example, if a node is `left_only`
but the use path crosses the right side, the deepest legal home is the current
partition above that split.

### Pseudocode

```text
resolve_home(n, use_partition):
    cur = root_partition
    path = ancestor_partitions(use_partition)

    for child_partition in path:
        site = child_partition.owner_site
        side = child_partition.side
        decision = classify(site, n)

        if decision == StopAbove:
            return cur

        if decision == DescendLeft:
            if side != left: return cur
            cur = site.left_partition
            continue

        if decision == DescendRight:
            if side != right: return cur
            cur = site.right_partition
            continue

        if decision == DescendEither:
            cur = child_partition_for_side(site, side)
            continue

    return cur
```

Useful commands:

```bash
./InstancedSchedulerTest --canonical --unlem --resolve-home IF
./InstancedSchedulerTest --resolve-home SAME_SCOPE_Q_ON_BOTH_P_SIDES
./InstancedSchedulerTest --resolve-home OUTER_Q_AND_BOTH_P_SIDES_Q
```

## Phase 2: Instance Discovery

Phase 2 discovers the instance graph demanded by `Finish`. Phi and StatePhi
instances then expand through their owning `SiteFrame` to demand the relevant
condition and arms.

Current scheduler tables:

```text
InstanceHomePlan(root, demands, homes)
instances: Vector<SchedulerInstance>
instance_deps: Vector<Vector<InstanceDep>>
```

The home-plan pass is the only phase that decides whether a root has one shared
instance or multiple path-exclusive instances. Placement must consume the final
instances as fixed facts; it must not merge, split, or clone them.

### Demand Seeds

Initial demand roots:

- every `Finish.value_deps[i]` in the root partition with `UseRole.Value(i)`
- every `Finish.state_deps[sc]` in the root partition with `UseRole.State(sc)`

For each demand:

```text
home = resolve_home(root, use_partition, role)
plan[root].demands += home
```

The selected `plan[root].homes` are recomputed from all demands. A selected home
covers a demand if it is equal to or an ancestor of the demanded home. If two
selected homes for the same root are not path-exclusive, discovery replaces them
with their nearest common partition and continues until the home set is stable.

After the home plans converge, instances are materialized from the selected
homes. Final instances for the same root must be pairwise path-exclusive.

### Dependency Expansion

For each selected ordinary non-move instance:

- each value dependency is demanded in the instance's home partition.
- each state dependency is demanded in the instance's home partition.
- each discovered dependency edge records the `UseRole` that caused it.

For each selected Phi or StatePhi instance:

- find the `SiteFrame` that contains the phi and whose `parent_partition` is the
  instance home.
- demand the phi condition in the site parent partition.
- demand the left arm in the site left partition.
- demand the right arm in the site right partition.

This preserves the distinction between ordinary dependencies and branch-owned
dependencies without eagerly seeding every contextual site occurrence.

Move nodes are normalized through `unwrapMove()` before interning, so they do
not become stable instance identities.

Useful commands:

```bash
./InstancedSchedulerTest --canonical --unlem --instances IF
./InstancedSchedulerTest --instances SAME_SCOPE_Q_ON_BOTH_P_SIDES
./InstancedSchedulerTest --instances OUTER_Q_AND_BOTH_P_SIDES_Q
./InstancedSchedulerTest --instances UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE
```

### Expected Instance Behavior

`IF --unlem` demonstrates duplication without Sea cloning:

- `doBranch [eff__1]` has one instance in the outer `bool.&&.left` home.
- `doBranch [eff__1]` has another instance in the nested `mt.left` home.
- `doFallthru [eff__3]` similarly appears in both outer and nested homes.
- condition and setup nodes stay in `root`.

`SAME_SCOPE_Q_ON_BOTH_P_SIDES` demonstrates same-condition separation:

- the two local `q` branch sites remain distinct because their partition
  ancestor paths differ.
- the shared `q` condition and `pop_u32 [c2]` stay in `root`.
- the two inner `pop_u32` arm effects stay under their respective local `q.left`
  homes.

`OUTER_Q_AND_BOTH_P_SIDES_Q` demonstrates no sibling interference:

- root `q_outer` and root `p` are siblings.
- uses under `p` walk only the `p` ancestor path.
- `pop_u32 [x]` and the shared `q` condition have one root instance, while the
  nested `q` phi arms specialize under `p.left` and `p.right`.

## Rendering And Tests

Rendering lives in `common/sea/region/ISRender.v3`.

Current render entry points:

- `renderPhase0(...)`
- `renderResolveHome(...)`
- `renderInstances(...)`

The main inspection driver is `tests/InstancedSchedulerTest.v3`.

Useful commands:

```bash
make InstancedSchedulerTest
make PartitionTest
bash scripts/instanced_scheduler_golden_test.sh
bash scripts/instanced_instance_golden_test.sh
```

The Phase 0 golden script checks only the static skeleton. The instance golden
script checks the eager `(root, home)` instance graph produced by `--instances`.
There is not yet a separate golden suite for raw `--resolve-home` traces; the
instance suite exercises `resolve_home(...)` indirectly.

## Next Steps

### 1. Compute Pending Users

Add placement-oriented dependency counts derived from `instance_deps`.

The likely tables are:

```text
pending_users[inst.id] -> int
users[dep.id] -> Vector<SchedulerInstance>
```

An instance is ready for bottom-up placement when all users below it have been
placed.

### 2. Define Placement Bounds

Use two bounds for each instance:

- static ceiling: `inst.home.top_limit`
- dynamic floor: accumulated `inst.bottom_limit` from already-placed users

The first placement implementation should keep this simple and conservative.
Correctness is more important than finding the highest or prettiest placement.

### 3. Implement Bottom-Up Placement

Run a worklist over ready instances.

Placement must:

- never move an instance above `home.top_limit`.
- never place it below an already placed user requirement incorrectly.
- update dependency instances' `bottom_limit`s.
- record `placed_in` for later lowering.

At this stage it is acceptable to place into existing `default_bottom` blocks if
that keeps correctness clear. More precise insertion points can come later.

### 4. Lower To Final CFG / SSAD

Only after all instances are placed should the scheduler lower to executable
output.

Open design points:

- how to name multiple instances of one root node.
- how to map phi arms to the placed instances used by each branch.
- how much of the old `SSADSeaInfo` alias machinery should be reused.
- how the existing `ScheduleChecker` should be adapted for instance placement.

## Summary

The instanced scheduler now has a cohesive front half:

- fixed branch skeleton from `BranchSite`s
- ancestor-only home resolution
- eager `(root, home)` instance discovery

The remaining work is placement and lowering. Those phases should consume the
instance graph as the source of truth and should not reintroduce Sea rewriting or
branch-scope rediscovery.
