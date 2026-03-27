# Testing

## Polybench

Use `scripts/run_polybench.sh` for performance testing with the polybench suite:

```bash
bash scripts/run_polybench.sh jacobi-1d.wasm   # run a specific benchmark
bash scripts/run_polybench.sh --list            # list all available benchmarks
bash scripts/run_polybench.sh --show-output     # debug failures
```

## Scheduler Quick Check

Regenerate the validator and count errors across all real opcodes:

```bash
make validator
rg generated/Validator.v3 -e "ERROR" | wc -l
```

Error lines take one of two forms. Each opcode typically appears twice — once for the base variant and once for the `_ul` (unLEM) variant:

```
ERROR: Invalid schedule for <OPCODE>
ERROR: Scheduling <OPCODE> reached limit
```

## Synthetic Opcode Tests

`scripts/schedule_test.sh` runs the scheduler and `ScheduleChecker` on custom-defined opcodes in `tests/SyntheticDefs.v3`, and optionally on real opcodes from `CanonicalDefs.v3`:

```bash
bash scripts/schedule_test.sh                        # test all synthetic opcodes
bash scripts/schedule_test.sh SPLIT_BRANCHES         # test specific synthetic opcode(s)
bash scripts/schedule_test.sh --canonical            # test synthetic + all canonical opcodes
bash scripts/schedule_test.sh --canonical i32_add    # test synthetic + specific canonical opcode
bash scripts/schedule_test.sh --trace SPLIT_BRANCHES # enable verbose trace for one opcode
bash scripts/schedule_test.sh --trace A --trace B    # enable verbose trace for multiple opcodes
```

The `--canonical` flag loads `wizard-engine/src/bytecode/CanonicalDefs.v3` and its `.sexp` (built automatically if stale). Opcode name filters apply to whichever def sets are active — if `--canonical` is absent, only synthetic opcodes are searched; if present, both sets are filtered.

`--trace OPCODE` enables `trace_full` for that opcode only (both the initial and unLEM phases). By default `trace_full` is off for all opcodes. The flag may be repeated for multiple opcodes. Tracing a named opcode writes verbose scheduling output to stdout and emits info snapshots (`info_start`, `info_untangled`, `info_final`) to `docs/traces.js`.

Each opcode is tested in two phases: **initial** (after id_propagate, overloadOps, addAbstractions) and **unLEM** (after additionally applying unLEM). The test harness is `tests/ScheduleTest.v3`.

### Adding a New Synthetic Opcode

Add its definition to `tests/SyntheticDefs.v3` between the `@bytecode start/end` markers. It only needs to use intrinsics declared at the top of that file — add more declarations as needed. The sexp is regenerated automatically:

```bash
make tests/SyntheticDefs.v3.sexp
```

## Inspecting Traces

After running `schedule_test.sh` or `make validator` (with `trace_full` enabled):

```bash
node scripts/schedule_info.js                                            # all opcodes, scheduled SSAD tags (compact)
node scripts/schedule_info.js SPLIT_BRANCHES                             # scheduled SSAD tags (compact)
node scripts/schedule_info.js SPLIT_BRANCHES scheduler_ssad_pretty       # initial scheduled SSAD only
node scripts/schedule_info.js SPLIT_BRANCHES unlem_scheduler_ssa_pretty  # unLEM scheduled SSAD only
node scripts/schedule_info.js SPLIT_BRANCHES info_start                  # state at start of scheduling
node scripts/schedule_info.js SPLIT_BRANCHES info_untangled              # state after untangle()
node scripts/schedule_info.js SPLIT_BRANCHES info_final                  # final scheduled CFG
```

The script loads `docs/traces.js` and prints from both `window.info` (info snapshots) and `window.traces` (scheduled SSAD). By default it prints only scheduled SSAD tags for compact output. To view info snapshots, pass an explicit info tag argument (`info_start`, `info_untangled`, or `info_final`).

## Skills

### `debug-scheduler` (`.agents/skills/debug-scheduler`)

Use when: investigating `ERROR` output in `generated/Validator.v3`, debugging a schedule failure, or working with info traces / `schedule_info.js`.

Provides:
- Preferred workflow: synthetic opcode tests for isolated debugging, full validator build for coverage
- Known historically tricky opcodes: `END`, `MEMORY_SIZE`, `REF_AS_NON_NULL`, `I32_DIV_S`
- `trace_full` flag: `common/sea/Schedule.v3:58` — pass `--trace OPCODE` to `schedule_test.sh` to enable per-opcode verbose output; off by default
- Info trace format: what `info_start`, `info_untangled`, `info_final` contain and how to read them
- `SeaRender.renderScheduler` / `SeaRender.renderScheduleNode` for use in other debug contexts

### `optimize-scheduler` (`.agents/skills/optimize-scheduler`)

Use when: asked to speed up `ValidatorGen`, reduce scheduler build time, or improve scheduler performance.

Provides:
- Correctness-first protocol: verify error count is 0 before and after any change
- Timing baseline with `time ./ValidatorGen > /dev/null`
- Build/test loop: `make clean && make ValidatorGen` for clean timing comparisons
