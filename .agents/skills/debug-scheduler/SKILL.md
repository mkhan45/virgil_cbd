---
name: debug-scheduler
description: This skill should be used when the user asks to "debug scheduler", "fix schedule", "schedule failing", "schedule bug", "fix scheduler errors", is investigating ERROR output in generated/Validator.v3, or asks about "info traces", "renderScheduler", or "schedule_info.js".
version: 0.1.0
---

# Debug Scheduler

Guidance for debugging the Sea of Nodes scheduler, which converts the unordered sea graph into structured (scheduled) code during validator generation.

## Build/Test Loop

Regenerate the validator and check for scheduler errors:

```bash
make validator
rg generated/Validator.v3 -e "ERROR"
```

Count total errors:

```bash
rg generated/Validator.v3 -e "ERROR" | wc -l
```

Error lines take one of two forms:

```
ERROR: Invalid schedule for <OPCODE>
ERROR: Scheduling <OPCODE> reached limit
```

Each opcode typically appears twice — once for the base variant and once for the `_ul` (unaligned) variant.

## Debugging a Specific Opcode

Focus on a single opcode at a time (usually provided by the user). Once it passes, verify the other known problem opcodes still pass before considering the fix complete.

### Known problem opcodes

These opcodes are historically tricky and phase in and out of broken states:

- `END`
- `MEMORY_SIZE`
- `REF_AS_NON_NULL`
- `I32_DIV_S`

## `trace_full` Flag

Location: `common/sea/Schedule.v3:59` — `var trace_full: bool = false` on `SeaScheduler`.

When `true`, the scheduler emits verbose output to stdout:
- Each node as it is dequeued for scheduling
- Per-node readiness checks (which children are/aren't in scope)
- Which block each node is placed into

To enable for a specific opcode, edit the condition on line 133:

```virgil
if (opcode != null && Strings.startsWith(opcode, "I32_DIV_S")) trace_full = true;
```

Change `"I32_DIV_S"` to the opcode being debugged (exact prefix match).

## Info Traces

When `trace_full` is enabled for an opcode, the scheduler also writes textual snapshots to `window.info` in `docs/traces.js` (alongside the existing `window.traces` Mermaid graphs). Three snapshots are captured per opcode:

- `info_start` — state at the start of scheduling (before untangling): sea, orig_sea, and initial branch lattices
- `info_untangled` — state after `untangle()` completes: sea after untangling, branch lattices
- `info_final` — state after scheduling and `check()` complete: the final scheduled CFG, sea, orig_sea, branch lattices

Each snapshot is produced by `SeaRender.renderScheduler` (`common/sea/SeaRender.v3`) and contains four sections:
- `=== CFG ===` — the current scheduled CFG, rendered top-down with block/branch/phi nodes, their contained nodes, and dominants
- `=== sea ===` — all live nodes in the working sea in start→finish order, compact text: `#id[varname] = OpName(#deps) {StateComp:#dep}`
- `=== orig_sea ===` — same format for the original (unmodified) sea
- `=== branch_lattices (N) ===` — each branch lattice: condition node, phis, frontier, left subgraph, right subgraph

### `scripts/schedule_info.js`

Read info traces from the terminal:

```bash
node scripts/schedule_info.js                        # all opcodes
node scripts/schedule_info.js I32_DIV_S              # one opcode, all three snapshots
node scripts/schedule_info.js I32_DIV_S info_final   # one opcode, one snapshot
```

The script loads `docs/traces.js`, extracts `window.info`, strips HTML wrappers, and prints each snapshot with a `=== OPCODE / tag ===` header. If `window.info` is empty, it reminds to enable `trace_full` and run `make validator`.

### Rendering functions

`common/sea/SeaRender.v3` exposes two public methods for use in other debug contexts:

- `SeaRender.renderScheduler(scheduler, buf)` — full snapshot as described above
- `SeaRender.renderScheduleNode(node, buf)` — renders a single CFG node and its successors top-down
