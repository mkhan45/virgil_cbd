# BRANCH_LATTICE_FIX

## Goal

Document the scheduler-side fix suggested by the synthetic failures: make branch lattices represent a branch **site** rather than just a branch **condition node**.

The current code in `common/sea/Schedule.v3` groups phis primarily by `condition.id`, with `same_scope()` acting as a heuristic guard. The failing synthetic opcodes show that this model is too weak once the graph contains repeated occurrences of the same condition at different scopes, especially after `unLEM`.

The core change is:

- from: `BranchLattice ~= all phis with condition C`
- to: `BranchLattice ~= all compatible phis at one scope instance of condition C`

In practice, that means lattices should be keyed by `condition + scope/region signature`, not just `condition`.

## What each failing opcode teaches us

## `SAME_SCOPE_Q_ON_BOTH_P_SIDES`

What it teaches:

- the same `q` condition can legitimately appear in two sibling scopes
- after `unLEM`, both scopes may reuse the same derived condition node
- `condition.id` equality is not enough to justify merging those phis into one lattice

Immediate implication for branch lattices:

- the scheduler must distinguish:
  - same condition, same scope
  - same condition, different enclosing branch scope

This is the clearest evidence that branch-lattice identity must become scope-sensitive.

## `CROSSED_P_Q_SHARED_POP`

What it teaches:

- same-condition merging can create mutually-dependent lattices
- non-laminar crossed nesting (`p -> q` on one side, `q -> p` on the other) can deadlock grouped phi readiness
- effectful shared nodes make "just clone it" unsafe

Immediate implication for branch lattices:

- same-condition phis at different structural positions must remain separate if merging them creates a cycle
- the scheduler needs explicit lattice-cycle detection instead of silently trying to proceed

## Proposed design change

## 1) Replace heuristic scope checks with explicit scope signatures

For every phi considered by `find_branch_lattices()`, derive a scope signature relative to already-known enclosing lattices.

The signature should classify the phi against every enclosing lattice as one of:

- `outside`
- `left`
- `right`
- `shared`

Two phis may merge into one `BranchLattice` only if they have the same condition **and** compatible scope signatures.

This is stricter than the current `same_scope()` logic in `common/sea/Schedule.v3:185`, which mostly rejects only opposite-side cases.

## 2) Treat `condition + scope` as the branch-site key

Conceptually:

```text
BranchSiteKey = (condition_root, scope_signature)
```

This allows one logical condition to appear in multiple CFG regions without forcing them into one lattice.

That is the scheduler assumption that needs relaxing:

- repeated condition occurrences are normal
- one condition may map to multiple branch sites

## 3) Detect lattice dependency cycles explicitly

The scheduler already builds a lattice dependency graph in `topo_sort_lattices()`. That should become a hard validation step:

- if the graph contains an SCC with more than one lattice, do not continue as if the order were merely ambiguous
- either split one or more same-condition groups and recompute
- or emit a structural scheduler error early

This directly addresses the deadlock shape seen in `CROSSED_P_Q_SHARED_POP`.

## 4) Allow repeated same-condition branch sites in CFG construction

`scheduleReadyPhi()` currently treats same-condition fusion as an error (`common/sea/Schedule.v3:725`).

After the lattice fix, the safer assumption is:

- repeated same-condition branch sites are allowed
- only true same-site fusion needs special handling

So either:

- support reusing an existing branch site when the scope matches exactly
- or ensure earlier lattice splitting prevents invalid same-condition fusion from reaching this point

## What should pass after the branch-lattice fix

Most likely direct wins:

- `SAME_SCOPE_Q_ON_BOTH_P_SIDES`
- at least the structural part of `UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE`

Possible but less certain:

- `CROSSED_P_Q_SHARED_POP` if cycle-breaking via finer lattice separation is sufficient

Probably still not enough by itself:

- `UNTANGLE_BRAID_LIMIT_STRESS`

## Additional changes still needed after this fix

Even if branch lattices become scope-aware, more work is needed to pass the whole synthetic suite.

## A) Untangle must become overlap-driven

Why:

- `UNTANGLE_BRAID_LIMIT_STRESS` shows that cloning whole `l_subgraph` / `r_subgraph` is too expensive

Needed change:

- clone only `l_subgraph ∩ r_subgraph`
- rewire side-local users
- require overlap to shrink monotonically

Without this, even correct lattice partitioning may still blow up on braided graphs.

## B) `scheduleReadyPhi()` needs a clearer repeated-condition policy

Why:

- `UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE` strongly suggests same-condition branch sites can still reach CFG construction

Needed change:

- either support exact-site reuse
- or convert the current `ERROR: Fusing` condition into an earlier structural split/reject decision

## C) Add lattice sanity assertions

Why:

- today bad lattice structures fail late as `UnscheduledPhi`, `PhiBranchMissing`, or `PathEffectMismatch`

Needed change:

- assert pre-schedule that:
  - grouped phis are scope-compatible
  - no multi-lattice SCC survives
  - after untangle, `l_subgraph ∩ r_subgraph = ∅`

## D) Checker improvements are still needed for `unLEM`-specific noise

Why:

- `UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE` produces many impossible assignment combinations in `CheckSchedule`

Needed change:

- prune impossible `maybeTrue` / `maybeFalse` / `bool.&&` combinations in `common/sea/CheckSchedule.v3`

This is not a substitute for the lattice fix, but it is needed to make failures readable.

## Summary table

| Opcode | What the branch-lattice fix should solve | What still remains after |
|---|---|---|
| `SAME_SCOPE_Q_ON_BOTH_P_SIDES` | stop cross-scope same-condition merging | maybe only checker cleanup |
| `CROSSED_P_Q_SHARED_POP` | break invalid same-condition lattice cycles | possibly repeated-condition CFG support |
| `UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE` | reduce bad same-condition grouping after `unLEM` | checker constraint pruning, maybe `scheduleReadyPhi` follow-up |
| `UNTANGLE_BRAID_LIMIT_STRESS` | improve locality, reduce over-fusion | overlap-only untangle, progress metric, maybe data-structure scalability |

## Recommended implementation order

1. make lattice identity scope-sensitive
2. strengthen / replace `same_scope()` with exact scope-signature compatibility
3. detect lattice SCCs and split/reject them
4. re-run:
   - `SAME_SCOPE_Q_ON_BOTH_P_SIDES`
   - `CROSSED_P_Q_SHARED_POP`
   - `UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE`
5. then fix untangle cloning strategy for `UNTANGLE_BRAID_LIMIT_STRESS`

## Bottom line

The main scheduler assumption that must change is:

- from: one condition corresponds to one branch lattice
- to: one condition may correspond to many branch lattices, one per compatible scope instance

That one design shift should remove the root cause behind several of the current synthetic failures, but it is not enough on its own. After the branch-lattice fix, untangle and `unLEM`-aware checking still need follow-up work.
