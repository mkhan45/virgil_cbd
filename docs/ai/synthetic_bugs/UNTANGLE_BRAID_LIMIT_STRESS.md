# UNTANGLE_BRAID_LIMIT_STRESS

## Summary

`UNTANGLE_BRAID_LIMIT_STRESS` is a synthetic scheduler stress case designed to create a dense, non-laminar overlap pattern across four conditions (`p`, `q`, `r`, `s`). The `initial` scheduler pass succeeds, but the `unLEM` pass blows up before `ScheduleChecker` can report semantic errors.

The current failure is a resource-exhaustion bug, not a clean rejected schedule.

## Synthetic opcode shape

The opcode is seeded by four boolean conditions and built in three stacked stages:

- `a` depends on `(p, q, r)` with a `p` outer split and `q` / `r` on opposite sides
- `b` depends on `(q, r, s)` and also on `a`
- `c` depends on `(r, s, p)` and also on `a` and `b`

In source form, the same values get reused across different condition nestings, but not in a tree-like way. The branch structure is deliberately braided rather than laminar.

This matters because the scheduler's untangle phase expects to resolve overlap by cloning shared subgraphs until each branch lattice has disjoint left/right regions, but this opcode creates overlap that keeps reappearing across multiple conditions and scopes.

## Observed failure mode

Observed by running:

```bash
bash scripts/schedule_test.sh UNTANGLE_BRAID_LIMIT_STRESS
```

Result:

- `UNTANGLE_BRAID_LIMIT_STRESS [initial]` passes
- the `_ul` / `unLEM` phase crashes with `HeapOverflow`

Important details:

- the crash happens during CFG construction, not in `ScheduleChecker`
- the failure occurs while repeatedly inserting new branch/phi structure (`prependCFGBranch`)
- memory blows up in `NodeSet.put`, which uses a sparse array indexed by `node.id`

So the user-visible symptom is: `unLEM` creates a scheduleable-looking graph structurally, but scheduling it causes branch/clone explosion large enough to exhaust heap before any correctness check runs.

## Likely root cause

### 1) `unLEM` turns the braid into a much denser phi lattice

`unLEM` rewrites each runtime phi into an outer phi plus an inner phi and merge structure. For this opcode, that means:

- each original braid edge now induces more phis
- conditions are reused across multiple scopes
- overlap is no longer just "shared value used in two branches"; it becomes "shared value feeding nested phi bundles under several derived conditions"

This is exactly the kind of case where `same_scope` and overlap-based untangle iteration help, but do not solve the underlying growth problem.

### 2) `untangle()` clones entire left/right subgraphs, not just the overlapping region

This looks like the main algorithmic problem.

In `common/sea/Schedule.v3`, once a lattice with overlap is found, the code clones `bl.l_subgraph` and `bl.r_subgraph`. That is much larger than cloning only `bl.l_subgraph ∩ bl.r_subgraph`.

For a braid, this is costly because:

- large parts of each side are already exclusive
- cloning them anyway creates fresh ids and fresh phis
- recomputing lattices on the cloned graph can expose new overlaps among the clones
- the next untangle step repeats on an even larger graph

So the algorithm is paying for duplication of whole branch domains every time it resolves a local overlap.

### 3) the current termination bound is heuristic, not a proven progress metric

`untangle()` uses a heuristic limit and `docs/ai/misc/GRAPH_PROPS.md` already flags untangle termination as an open question.

For this opcode, even if the loop technically terminates, it can still leave a graph so inflated that bottom-up scheduling becomes intractable.

### 4) `DomGraph` / `NodeSet` amplify the blow-up

The crash site is not cloning itself; it is dominance bookkeeping.

`NodeSet` is backed by an array indexed by `node.id`, so once untangle has created many clones with large ids, each `DomGraph.addLocal()` may trigger large sparse-array growth. That turns graph-size blow-up into heap blow-up.

This is likely an amplifier, not the root semantic bug.

## Why this is hard

This case is hard because it violates the nice tree-of-conditionals shape that most of the current logic assumes:

1. the overlap is braided, not nested
2. each stage feeds the next, so untangling one lattice can increase the size and complexity of later ones
3. `unLEM` adds phi structure exactly where the braid is already dense
4. the scheduler resolves overlap by cloning, not by representing sharing explicitly

For pure tree-shaped sharing, cloning is fine. For a braid, repeated full-domain cloning behaves combinatorially.

## Plausible fix

The strongest likely fix is to make untangle clone only the actual overlap and then rewire side-local users, instead of cloning whole left and right subgraphs every time.

Concrete direction:

1. compute:

```text
overlap = bl.l_subgraph ∩ bl.r_subgraph
```

2. clone only `overlap` twice
3. rewrite left-side users of overlap nodes to the left clone set
4. rewrite right-side users of overlap nodes to the right clone set
5. leave already-exclusive nodes alone
6. recompute lattices as today
7. add a progress assertion so overlap must shrink monotonically or the scheduler fails with a controlled diagnostic

This directly targets the observed blow-up:

- exclusive nodes stop being recopied every iteration
- node ids grow more slowly
- lattice recomputation is less likely to discover clone-induced fake work
- progress is tied to shrinking `l_subgraph ∩ r_subgraph`

Secondary mitigation: replacing the raw sparse-array `NodeSet` representation with a segmented or chunked structure would make blow-ups less catastrophic, but that is mitigation, not the main fix.

## Risks / regressions

- Incorrect rewiring could silently break graph equivalence.
- Effect handling must stay conservative; overlap-only cloning must preserve the existing escaping-write rules.
- Some pure shared nodes may still belong in the frontier rather than cloned copies.
- Performance could regress if rewiring scans too much of each subgraph naively.

## Suggested validation

1. Re-run:
   - `bash scripts/schedule_test.sh UNTANGLE_BRAID_LIMIT_STRESS`
   - expected: no heap overflow, both phases complete
2. Run all synthetic tests:
   - `bash scripts/schedule_test.sh`
3. Check nearby hard cases:
   - `bash scripts/schedule_test.sh SAME_SCOPE_Q_ON_BOTH_P_SIDES UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE UNTANGLE_BRAID_LIMIT_STRESS`
4. Verify untangle invariants directly:
   - after untangle, every lattice should satisfy `l_subgraph ∩ r_subgraph = ∅`
5. Run wider coverage:
   - `make validator`
   - `rg generated/Validator.v3 -e "ERROR" | wc -l`

## Bottom line

`UNTANGLE_BRAID_LIMIT_STRESS` is a good reproducer for a real scheduler scalability bug: in the `unLEM` phase, a braided multi-condition value graph causes `untangle()` to over-clone, which inflates the graph until CFG construction and dominance tracking run out of memory. The strongest fix is to make untangle clone only the actual overlap and rewire side-local users, rather than cloning whole left/right subgraphs on every step.
