# Initial Partition Inference Implementation

## Purpose

This note documents the first implementation pass of contextual partition inference in `common/sea/region/Inference.v3`, the standalone debug driver in `common/sea/region/PartitionTest.v3`, what the code currently computes, and what still needs to change before this becomes the scheduler's real region/site pipeline.

The implementation goal for this pass was limited on purpose:

- recover contextual partition instances from a Sea graph
- keep the implementation standalone, without changing `Schedule.v3`
- provide a driver that can dump partition discoveries per opcode
- validate the basic examples from `docs/ai/REGION_INFERENCE.md`

This is not yet branch-site realization, and it is not yet wired into `untangle` or final scheduling.

## Files Added

- `common/sea/region/Inference.v3`
- `common/sea/region/PartitionTest.v3`

## Build Wiring

`Makefile` now includes `common/*/*/*.v3` in `COMMON_LIB`, so `Inference.v3` is available to normal builds. `PartitionTest.v3` is explicitly filtered out of `COMMON_LIB` and built only by the dedicated `PartitionTest` target.

This keeps the reusable inference code in the shared library set, while avoiding multiple `main()` definitions in normal builds.

## Current Public Surface

The implementation currently exposes these main data structures:

```text
class RegionCtx {
    boundary_values: ImmNodeSet
    boundary_states: ImmNodeSet
    boundary_labels: ImmNodeSet
    demand_map: NodeMap<ImmNodeSet>
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

class PartitionDiscovery {
    root: RegionCtx
    partitions: Vector<InferredPartition>
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
- stores the resulting nodes in an `ImmNodeSet`

`make_root_ctx(sea, bottom)` then calls `make_ctx(...)` with those value/state boundary sets.

This matches the intended root model from the design doc: the root region is the post-merge demand visible at `Finish`.

## 2. Labeled Backward Slice

`make_ctx(sea, boundary_values, boundary_states)` computes the context-local demand slice.

The implementation uses:

- `boundary_labels = boundary_values union boundary_states`
- `demand_map: NodeMap<ImmNodeSet>`
- `active: ImmNodeSet`

The algorithm is a simple worklist over `(node, label)` pairs.

For each boundary label:

- enqueue `(label, label)`
- walk backward over `node.applyDeps(...)`
- record that `label` demands every node reached

This gives two useful products:

- `active`: every node demanded by at least one boundary label
- `demand_map[node]`: the set of boundary labels that demand `node`

This is the current implementation of the design doc's `labeled_backward_slice()` idea.

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

- `phi_labels = demand_map[phi]`
- `outside_labels = ctx.boundary_labels \ phi_labels`
- a shared node is `anchored` when:
  - it has writes, and
  - its demand labels intersect `outside_labels`
- `cloneable = shared \ anchored`

Finally it derives branch regions:

- `left = (left_full \ support \ shared) ∪ cloneable`
- `right = (right_full \ support \ shared) ∪ cloneable`

This is the implemented meaning of an initial contextual partition.

## 5. Child Context Construction

The current file still uses `collect_boundary_labels(sea, region, ctx)` as a temporary scaffold, but the intended semantics are more precise.

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

The important consequence is that exact child state boundaries are component-sensitive. One producer node may carry multiple state components, so the long-term semantic object for `boundary_states` must be a set of state labels like `(sc, node)`, not just a plain node set.

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

The current implementation does not yet compute the cut this way.

`collect_boundary_labels(...)` still works by walking `children`, checking label overlap, and collapsing state exposure down to plain node identity. That was sufficient for initial exploration, but it is not the exact semantics above.

So this part of the current implementation should be read as a provisional scaffold. The correct end state is an explicit cut-based child boundary construction, with component-sensitive state labels.

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

## Validation Results So Far

The current implementation was built and exercised with `PartitionTest`.

Important observed results:

- raw `IF`: `1` partition
- `IF` after `--unlem`: `3` partitions
- raw `SAME_SCOPE_Q_ON_BOTH_P_SIDES`: `10` partitions
- raw `OUTER_Q_AND_BOTH_P_SIDES_Q`: `7` partitions
- full synthetic suite runs in raw mode
- full synthetic suite runs in `--unlem` mode

These results are enough to say that the first-pass contextual walk is recovering the intended partition instances for the examples that motivated the design.

## Driver Behavior

`common/sea/region/PartitionTest.v3` is a standalone debug program.

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
```

## Important Workflow Mismatch

The current implementation uses `PartitionTest` as a separate executable, but the normal repository workflow for opcode-level investigation is `scripts/schedule_test.sh`.

There is also a naming mismatch in the existing `schedule_test.sh` usage comments:

- the script examples use lowercase canonical names like `i32_add`
- actual canonical definition names are uppercase, for example `I32_ADD`
- the current `PartitionTest` filter is exact-match, so `--canonical i32_add` matches nothing

For current work, the intended canonical opcode name should be treated as `I32_ADD`, not `i32_add`.

## Known Limitations

## 1. No Branch-Site Realization Yet

The implementation stops at partition instance discovery.

It does not yet:

- compute immediate partitions in a context
- merge immediate partitions into stable branch sites
- construct a parent/child `BranchSite` forest
- replace `BranchLattice`

## 2. Child Boundary Recovery Must Become Exact

`collect_boundary_labels(...)` is only a temporary implementation hook.

For the restructure to be valid, child boundary recovery must become exact. This is a correctness requirement, not a quality-of-implementation issue. The current helper is useful for exploration, but it is not the target semantics.

That exact construction should recover the value/state cut interface of a child region inside the parent active slice. In particular, exact state recovery likely requires promoting `boundary_states` from plain node sets to component-sensitive state labels.

## 3. No Scheduler Integration Yet

Nothing in `Schedule.v3` consumes `PartitionInference` yet.

The current scheduler still uses:

- `branch_partition`
- `find_branch_lattices`
- `same_scope`
- iterative untangle recomputation

## 4. No Graph-Stability Contract Across Rewrites

The inference currently runs on one Sea snapshot and produces contextual partitions for that snapshot.

There is not yet any machinery for:

- mapping inferred sites across cloning
- preserving site identity through untangle rewrites
- distinguishing original nodes from rewrite-time clones in a persistent site model

## Next Steps

## 1. Unify The Investigation Workflow Around `schedule_test`

Make `schedule_test` the authoritative entrypoint for partition debugging.

That likely means one of these:

- add a partition-dump mode to `tests/ScheduleTest.v3`
- or add a `schedule_test` flag that builds/runs `PartitionTest`

Either way, the workflow should stop depending on a separate ad hoc executable.

## 2. Normalize Canonical Opcode Naming To `I32_ADD`

Update the workflow and docs so canonical examples use the real extracted names.

Specifically:

- `scripts/schedule_test.sh` comments should stop using `i32_add`
- tests and docs should use `I32_ADD`
- any partition-oriented wrapper should pass exact canonical names through unchanged

## 3. Add A Stable Text Or Trace Output Hook

Right now partition output is printed to stdout only.

Next step:

- emit partition dumps through the existing trace/info infrastructure
- or attach them to the `schedule_test` tracing flow

That would make it much easier to compare raw vs `unLEM` partitions and keep evidence with the rest of the scheduler traces.

## 4. Implement Immediate-In-Context Filtering

The next core algorithmic step is to move from:

- all discovered partition instances

to:

- immediate partitions inside a given context

That should follow the rule described in `docs/ai/REGION_INFERENCE.md`:

- a partition is not immediate in `ctx` if its phi lies strictly on one side of another visible partition in the same `ctx`

## 5. Merge Immediate Partitions Into Stable Sites

Once immediate partitions are available, implement site formation:

- merge value phi + state phi when they are immediate in the same context
- keep same-condition partitions separate when they arise in different child contexts
- produce an explicit site object with parent and side placement

This is the step that replaces the scheduler's current flat same-condition grouping.

## 6. Define A Real `BranchSite` Data Structure

Promote the conceptual structure from the design doc into code.

That structure should carry:

- condition
- member phis
- parent and parent side
- support
- left-only region
- right-only region
- cloneable overlap
- anchored overlap
- left and right child contexts
- left and right child sites

## 7. Integrate Sites Into `untangle`

The current `untangle()` loop repeatedly discovers mutable branch lattices from the rewritten graph.

The target state is:

- infer the site tree once from the original graph
- process sites in a stable order
- clone only the current site's cloneable overlap
- rewire only consumers local to that site

This is the main architectural payoff of the region model.

## 8. Integrate Sites Into Bottom-Up Scheduling

After `untangle`, the bottom-up scheduler should consume the same site tree directly for:

- grouped phi readiness
- branch insertion
- same-scope reasoning

This removes the current split where untangle and scheduling each reconstruct branch structure separately.

## 9. Replace The Child-Boundary Scaffold With An Exact Cut Construction

The current child-boundary helper should be replaced, not merely tuned.

The next version should define child contexts from the exact boundary cut between a realized side region and the rest of the parent demand slice.

Follow-up work here should focus on:

- defining the exact boundary object formally
- representing state exposure with component-sensitive boundary labels
- proving that recursive child discovery preserves intended nesting on the traced examples
- only after the exact child cut exists, considering any optional sequencing or performance heuristics on top of the realized site tree

## 10. Add Assertions Or Golden Checks For The Key Examples

The examples that shaped the design should become explicit tests.

At minimum:

- raw `IF`
- `IF` after `unLEM`
- `SAME_SCOPE_Q_ON_BOTH_P_SIDES`
- `OUTER_Q_AND_BOTH_P_SIDES_Q`

The first useful assertion level is partition-count and repeated-context discovery. Later we can assert realized site trees.

## Recommended Near-Term Plan

If continuing this work from here, the most sensible order is:

1. replace `collect_boundary_labels(...)` with the exact cut-based child boundary construction
2. promote `boundary_states` to component-sensitive state labels
3. implement `immediate_in_ctx(...)`
4. implement merged site construction
5. switch `untangle` to consume stable inferred sites
6. switch scheduling to consume the same sites
