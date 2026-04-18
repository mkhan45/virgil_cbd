# Partition Inference Implementation Status

## Purpose

This note documents the current implementation status of contextual partition inference in `common/sea/region/Inference.v3`, the standalone debug driver in `common/sea/region/PartitionTest.v3`, what the code currently computes, and what still needs to change before this becomes the scheduler's real region/site pipeline.

The implementation goal for this pass was limited on purpose:

- recover contextual partition instances from a Sea graph
- keep the implementation standalone, without changing `Schedule.v3`
- provide a driver that can dump partition discoveries per opcode
- validate the basic examples from `docs/ai/REGION_INFERENCE.md`

This now includes standalone branch-site realization for debugging and validation, but it is still not wired into `untangle` or final scheduling.

## Files Added

- `common/sea/region/Inference.v3`
- `common/sea/region/PartitionTest.v3`
- `scripts/partition_golden_test.sh`
- `tests/golden/partition_if_raw.txt`
- `tests/golden/partition_if_unlem.txt`
- `tests/golden/partition_same_scope_q_on_both_p_sides.txt`
- `tests/golden/partition_outer_q_and_both_p_sides_q.txt`

## Build Wiring

`Makefile` now includes `common/*/*/*.v3` in `COMMON_LIB`, so `Inference.v3` is available to normal builds. `PartitionTest.v3` is explicitly filtered out of `COMMON_LIB` and built only by the dedicated `PartitionTest` target.

This keeps the reusable inference code in the shared library set, while avoiding multiple `main()` definitions in normal builds.

## Current Public Surface

The implementation currently exposes these main data structures:

```text
class RegionCtx {
    boundary_values: ImmNodeSet
    boundary_states: Array<ImmNodeSet>   // indexed by StateComponent.tag
    value_demand_map: NodeMap<ImmNodeSet>
    state_demand_map: NodeMap<Array<ImmNodeSet>>
    active: ImmNodeSet
}

class InferredPartition {
    phi: IRNode
    ctx: RegionCtx
    support: ImmNodeSet
    left: ImmNodeSet
    right: ImmNodeSet
    anchored: ImmNodeSet
    cloneable: ImmNodeSet
    left_ctx: RegionCtx
    right_ctx: RegionCtx
}

class BranchSite {
    condition: IRNode
    phis: Vector<IRNode>
    parent: BranchSite
    parent_side: SiteSide
    support: ImmNodeSet
    left_only: ImmNodeSet
    right_only: ImmNodeSet
    cloneable_overlap: ImmNodeSet
    anchored_overlap: ImmNodeSet
    left_ctx: RegionCtx
    right_ctx: RegionCtx
    left_children: Vector<BranchSite>
    right_children: Vector<BranchSite>
}

class PartitionDiscovery {
    root: RegionCtx
    partitions: Vector<InferredPartition>
    sites: Vector<BranchSite>
}
```

And this entry point:

```text
PartitionInference.determine_all_partitions(
    sea: Sea,
    bottom: IRNode,
    include_value_phis: bool,
    include_state_phis: bool
) -> PartitionDiscovery
```

## What The Implementation Actually Does

## 1. Root Context Construction

The root context is computed from the chosen bottom demand node, currently expected to be `sea.finish`.

`root_boundary_values(bottom)`:

- collects all non-null `bottom.value_deps`
- unwraps `Move` nodes using `unwrapMove()`
- stores the resulting nodes in an `ImmNodeSet`

`root_boundary_states(bottom)`:

- collects all non-null `bottom.state_deps`
- unwraps `Move` nodes using `unwrapMove()`
- stores the resulting nodes in an `Array<ImmNodeSet>`, one set per `StateComponent`

`make_root_ctx(sea, bottom)` then calls `make_ctx(...)` with those value/state boundary sets.

This matches the intended root model from the design doc: the root region is the post-merge demand visible at `Finish`.

## 2. Labeled Backward Slice

`make_ctx(sea, boundary_values, boundary_states)` computes the context-local demand slice.

The implementation uses:

- `value_demand_map: NodeMap<ImmNodeSet>`
- `state_demand_map: NodeMap<Array<ImmNodeSet>>`
- `active: ImmNodeSet`

The algorithm is a worklist over `(node, label, kind)` items, where `kind` is either:

- `Value`
- `State(sc)` for a specific `StateComponent`

For each boundary value label:

- enqueue `(label, label)`
- walk backward over `node.applyDeps(...)`
- record that the value label demands every node reached

For each boundary state label `(sc, label)`:

- enqueue `(label, label, State(sc))`
- walk backward over `node.applyDeps(...)`
- record that the state label for component `sc` demands every node reached

This gives three useful products:

- `active`: every node demanded by at least one boundary label
- `value_demand_map[node]`: the set of boundary value labels that demand `node`
- `state_demand_map[node][sc]`: the set of boundary state labels for component `sc` that demand `node`

This is the current implementation of the design doc's `labeled_backward_slice()` idea, with state demand tracked in a component-sensitive way.

## 3. Visible Phi Discovery

`visible_phis(...)` scans `ctx.active` and selects:

- value phis when `include_value_phis` is true
- state phis when `include_state_phis` is true

This keeps the first pass flexible:

- value-only exploration
- state-only exploration
- combined exploration, which is the default

## 4. Contextual Partition Computation

`branch_partition_in_context(sea, phi, ctx)` is the core operation.

It follows the design in `docs/ai/REGION_INFERENCE.md` closely.

The implementation unwraps the phi arms first:

- `cond = phi.value_deps[0].unwrapMove()`
- `left_arm = phi.value_deps[1].unwrapMove()`
- `right_arm = phi.value_deps[2].unwrapMove()`

Then it computes:

- `cond_deps = cachedTransitiveDeps(cond) ∩ ctx.active`
- `left_phi = cachedTransitiveDepsPhiAware(left_arm) ∩ ctx.active`
- `right_phi = cachedTransitiveDepsPhiAware(right_arm) ∩ ctx.active`
- `support = cond_deps ∪ (left_phi ∩ right_phi)`

Then it computes full side-local demand:

- `left_full = cachedTransitiveDeps(left_arm) ∩ ctx.active`
- `right_full = cachedTransitiveDeps(right_arm) ∩ ctx.active`
- `shared = (left_full ∩ right_full) \ support`

Then it splits shared overlap into anchored vs cloneable:

- a shared node is `anchored` when:
  - it has writes, and
  - it has demand from outside the phi's own boundary interface
- `cloneable = shared \ anchored`

In code, that outside-demand test is no longer a single label-set subtraction. It checks both:

- outside value demand via `value_demand_map`
- outside state demand per component via `state_demand_map`

Finally it derives branch regions:

- `left = (left_full \ support \ shared) ∪ cloneable`
- `right = (right_full \ support \ shared) ∪ cloneable`

This is the implemented meaning of an initial contextual partition.

## 5. Child Context Construction

The current implementation now computes child contexts from the exact cut boundary between a child region and the rest of the parent context.

For a side region `R` inside parent context `ctx`, let:

```text
A = ctx.active
O = A \ R
```

The exact child boundary is the cut interface where `R` is visible from `O` or directly from the parent boundary.

```text
ExposedValue(R) =
    (R ∩ ctx.boundary_values)
    ∪ { n in R | exists u in O : value_exit(n, u) }

ExposedState(R) =
    parent_boundary_states_in(R, ctx)
    ∪ {
        state_label(sc, n) |
        n in R && exists u in O : state_exit(sc, n, u)
    }

child_ctx(R) = make_ctx(sea, ExposedValue(R), ExposedState(R))
```

This is the exact object the recursive walk needs. It is not a summary of "interesting" children and it is not a place for heuristics.

### Exact Edge Roles

The cut depends on structural edge roles:

- ordinary `value_deps` are value exits
- `Move(cond, value)` condition edges are bookkeeping and are not value exits
- `StatePhi` arm edges are state exits, not ordinary value exits
- ordinary `state_deps[sc]` are state exits for component `sc`

The important consequence is that exact child state boundaries are component-sensitive. One producer node may carry multiple state components, so `boundary_states` is now represented as an `Array<ImmNodeSet>`, one set per `StateComponent`.

### Why This Is Exact

Every parent-visible demand path that starts inside `R` has only two possibilities:

- it already ends at a parent boundary label whose producer lies in `R`, or
- it has a first edge that leaves `R` and enters `O`

The tail of that first exit is exactly the child interface item that makes the inner demand visible to the rest of the parent context. So the cut is complete.

Conversely, every item in `ExposedValue(R)` or `ExposedState(R)` is genuinely consumed from outside `R` or is already part of the parent boundary. So the cut is sound.

This is why exact child-boundary recovery is a correctness requirement. If the cut is wrong, recursive discovery is wrong:

- nested phis may be missed
- unrelated phis may be pulled into a child context
- parent/child site placement becomes unsound

### Relationship To The Partition Sets

- `support` remains above the split and does not itself form the child interface
- `left` and `right` are the child regions whose outward-facing interface is being recovered
- `cloneable` overlap may contribute to both child boundaries, because each child may later receive its own clone
- `anchored` overlap remains shared at the parent level, though nodes in a child region may still expose outputs to that shared context

### Current Code Status

The current implementation uses `collect_child_boundary(sea, region, ctx)` to compute this cut explicitly.

It does three things:

- starts from parent boundary items that already lie inside `region`
- scans edges from nodes in `region` to children in `ctx.active \ region`
- records value exits and per-component state exits using the exact edge-role rules above

This means the old provisional `collect_boundary_labels(...)` scaffold is gone. Child context recovery is now doing the exact cut-based construction needed for recursive discovery.

## 6. Recursive Discovery

`visit_ctx(...)` recursively walks contexts.

For every visible phi in the current context:

- skip if we have already seen the same `(phi, boundary_values, boundary_states)` context key
- compute the contextual partition
- append it to the output list
- recurse into `left_ctx` and `right_ctx` if they are non-empty

The dedup key is currently represented by `SeenPartitionCtx`.

This means repeated discovery of the same phi in different contexts is preserved, while exact rediscovery in the same context is suppressed.

That is the key property needed for examples like:

- `IF` after `unLEM`, where the inner state phi is discovered twice
- `SAME_SCOPE_Q_ON_BOTH_P_SIDES`, where the same condition recurs in distinct child scopes

## 7. Site Realization

The current implementation does not stop at raw partition discovery anymore. `determine_all_partitions(...)` also realizes a `BranchSite` forest from the discovered contexts.

The current realization flow is:

- compute all visible contextual partitions in a context
- filter them with `immediate_in_ctx(...)`
- merge immediate same-condition, non-ancestor partitions into one site
- build exact child contexts from the merged site regions
- recurse on the realized left/right child contexts

This is enough to recover the intended site trees for the motivating examples:

- raw `IF`: one root site
- `IF --unlem`: root `bool.&&` site with nested right-side `U32_maybeTrue`
- `SAME_SCOPE_Q_ON_BOTH_P_SIDES`: one root `p` site with one nested `q` site on each side
- `OUTER_Q_AND_BOTH_P_SIDES_Q`: one root `q` site plus one root `p` site with nested left/right `q` sites

### Site-Level Clone Safety

Per-partition `anchored` is computed directly from labeled demand in a single context. Merged-site `anchored_overlap` is harder, because merging immediate partitions can create shared overlap that did not exist in any member partition by itself.

The current code handles that in `merged_site_anchored_overlap(...)` with an iterative helper:

- start from the merged site's current `left_region` and `right_region`
- compute structural escape inside the current clone domain
- anchor any shared escaping writes
- remove those anchored writes from the clone domain and repeat

This fixed-point helper is intentionally conservative, and it matches the tracked examples. But the design note now records a likely simplification: one raw-domain escape closure should be enough.

The proposed simplified rule is:

- form `raw_left = union(part.left)` and `raw_right = union(part.right)`
- define `raw_domain = raw_left ∪ raw_right`
- compute one structural `escaping(site)` closure inside that raw domain, excluding rewired phi-arm uses
- set `anchored_overlap = raw_shared ∩ writes ∩ escaping(site)` where `raw_shared = raw_left ∩ raw_right`

The reason the fixed point appears unnecessary is that shrinking the domain can only turn former in-domain consumers into outside consumers. If a later-round anchored write `w` only becomes escaping after some earlier anchored write `a` is removed, then `w` must already be a dependency of `a`, so backward closure from the original raw-domain escape seeds would already have included `w`.

The tracked opcodes support this simplification:

- `IF --unlem`: the outer site has no raw-domain escaping shared writes
- `OUTER_Q_AND_BOTH_P_SIDES_Q`: one raw closure already reaches the shared `q` structure and anchors exactly the shared effectful pops
- `TRIVIAL_PHI_STACK_SHARED_EFFECT`: one raw closure already reaches the wrapped shared effect chain
- `UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE`: one raw closure already reaches the shared `x`-effect chain at the hard merged sites

## Validation Results So Far

The current implementation was built and exercised with `PartitionTest`.

Important observed results:

- raw `IF`: `1` partition
- `IF` after `--unlem`: `3` partitions
- raw `SAME_SCOPE_Q_ON_BOTH_P_SIDES`: `10` partitions
- raw `OUTER_Q_AND_BOTH_P_SIDES_Q`: `7` partitions
- raw `IF`: `1` site
- `IF` after `--unlem`: `2` sites
- raw `SAME_SCOPE_Q_ON_BOTH_P_SIDES`: `3` sites
- raw `OUTER_Q_AND_BOTH_P_SIDES_Q`: `4` sites
- full synthetic suite runs in raw mode
- full synthetic suite runs in `--unlem` mode

The implementation was also checked on detailed partition dumps, not just counts. The important examples match the intended nesting and repeated-context rediscovery behavior from `docs/ai/REGION_INFERENCE.md`.

Those detailed outputs are now captured as golden files under `tests/golden/` and checked by `scripts/partition_golden_test.sh`.

These results are enough to say that the first-pass contextual walk is recovering the intended partition instances for the examples that motivated the design.

## Driver Behavior

`common/sea/region/PartitionTest.v3` is a standalone debug program.

`scripts/partition_golden_test.sh` is a thin wrapper around `PartitionTest` that:

- builds required inputs
- runs a small set of key cases with `--details`
- diffs output against checked-in golden files
- can refresh those goldens with `--update`

It mirrors the structure of `tests/ScheduleTest.v3`:

- parse synthetic or canonical opcode definitions using `TierGen`
- lower each opcode with `SSAD_IR.from_virgil`
- build Sea with `Seas.ofSSADWithInfo`
- apply `SeaTransforms.id_propagate`
- optionally apply `SeaTransforms.unLEM`
- run `GraphChecker`
- run `PartitionInference.determine_all_partitions(...)`
- print a summary, and optionally full partition details

Supported flags:

- `--canonical`
- `--unlem`
- `--details`
- `--state-only`
- `--value-only`

Current behavior on graph-check failures:

- print a `WARN`
- still continue with partition inference

That choice was intentional. Some synthetic graphs are useful for partition exploration even when they still violate the current branch sealing checker.

## Current Run Commands

Current standalone commands are:

```bash
make PartitionTest
./PartitionTest
./PartitionTest --unlem
./PartitionTest SAME_SCOPE_Q_ON_BOTH_P_SIDES
./PartitionTest --canonical IF
./PartitionTest --canonical --unlem IF
bash scripts/partition_golden_test.sh
```

## Important Workflow Mismatch

The current implementation uses `PartitionTest` as a separate executable, but the normal repository workflow for opcode-level investigation is `scripts/schedule_test.sh`.

There is also a naming mismatch in the existing `schedule_test.sh` usage comments:

- the script examples use lowercase canonical names like `i32_add`
- actual canonical definition names are uppercase, for example `I32_ADD`
- the current `PartitionTest` filter is exact-match, so `--canonical i32_add` matches nothing

For current work, the intended canonical opcode name should be treated as `I32_ADD`, not `i32_add`.

## Known Limitations

## 1. No Scheduler Integration Yet

Nothing in `Schedule.v3` consumes `PartitionInference` yet.

The current scheduler still uses:

- `branch_partition`
- `find_branch_lattices`
- `same_scope`
- iterative untangle recomputation

## 2. No Graph-Stability Contract Across Rewrites

The inference currently runs on one Sea snapshot and produces contextual partitions for that snapshot.

There is not yet any machinery for:

- mapping inferred sites across cloning
- preserving site identity through untangle rewrites
- distinguishing original nodes from rewrite-time clones in a persistent site model

## 3. Site-Level Escape Still Uses An Iterative Helper

The current merged-site anchoring code uses a fixed-point helper in `merged_site_anchored_overlap(...)`.

That implementation appears to be correct on the tracked cases, but it is likely stronger than necessary. The design doc now records the likely-equivalent one-shot rule based on a single raw-domain escape closure.

So one concrete next step is to replace the iterative helper with the simpler structural rule and revalidate on the tracked examples and stress cases.

## Next Steps

## 1. Simplify Site-Level Escape To One Raw-Domain Closure

The next core algorithmic step is likely to replace `merged_site_anchored_overlap(...)` with the simpler site-level rule from `docs/ai/REGION_INFERENCE.md`:

- compute structural escape once on the merged site's raw domain
- anchor only `raw_shared ∩ writes ∩ escaping(site)`
- verify equivalence on the tracked opcodes and the shared-effect stress cases

This should remove the need for a fixed-point anchored-set computation without changing the intended site trees.

## 2. Integrate Sites Into `untangle`

The current `untangle()` loop repeatedly discovers mutable branch lattices from the rewritten graph.

The target state is:

- infer the site tree once from the original graph
- process sites in a stable order
- clone only the current site's cloneable overlap
- rewire only consumers local to that site

This is the main architectural payoff of the region model.

## 3. Integrate Sites Into Bottom-Up Scheduling

After `untangle`, the bottom-up scheduler should consume the same site tree directly for:

- grouped phi readiness
- branch insertion
- same-scope reasoning

This removes the current split where untangle and scheduling each reconstruct branch structure separately.

## 4. Expand Assertions Beyond The Current Goldens

The examples that shaped the design now have golden partition dumps, but there is still room to add more targeted assertions.

At minimum:

- raw `IF`
- `IF` after `unLEM`
- `SAME_SCOPE_Q_ON_BOTH_P_SIDES`
- `OUTER_Q_AND_BOTH_P_SIDES_Q`

The next useful assertion level is structural checks over the discovered contexts and, later, realized site trees.

## Recommended Near-Term Plan

If continuing this work from here, the most sensible order is:

1. replace the iterative merged-site anchoring helper with the one-shot raw-domain closure rule
2. switch `untangle` to consume stable inferred sites
3. switch bottom-up scheduling to consume the same site tree
4. fold the partition goldens into the standard scheduler debugging workflow
5. clean up the remaining naming/docs mismatch around canonical opcodes in `schedule_test.sh`
