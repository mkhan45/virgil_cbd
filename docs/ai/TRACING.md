# Tracing

Tracing emits per-opcode diagnostic data (graphs, IR snapshots, free-form text) to a JS file — `docs/traces.js` by default — which is then rendered by the docs viewer or printed by a Node inspection script. This doc explains the existing harness and walks through adding a new one.

## Components

A complete tracing setup has four pieces:

1. **Trace API** (`common/Trace.v3`) — `CBDTrace` / `CBDInfo` components that buffer entries and stream them as JS to a file.
2. **Trace call sites** — `addGraph` / `addCode` / `addString` calls inside the pass under inspection.
3. **Test-driver entry point** — a `main` (e.g. `tests/ScheduleTest.v3`, `common/sea/region/PartitionTest.v3`) that initializes the trace, iterates opcodes, and runs the pass.
4. **Build/run shell wrapper** + **Node inspection script** — `scripts/schedule_test.sh` compiles and runs; `scripts/schedule_info.js` reads `docs/traces.js` and prints filtered entries.

## Trace API

`common/Trace.v3` defines `TraceWriter` and two singleton components on top of it:

- `CBDTrace` — writes to `window.traces` (graphs + scheduled IR).
- `CBDInfo` — writes to `window.info` (compact info snapshots).

Both share one output file descriptor in the standard wiring:

```virgil
CBDTrace.init(TRACES_FILE);                       // opens docs/traces.js
CBDInfo.init_with_file(CBDTrace.writer.out_file); // shares the fd
```

Each component exposes:

| Method                                       | Purpose                                                       |
|----------------------------------------------|---------------------------------------------------------------|
| `addGraph(opcode, tag, sea)`                 | Renders a `Sea` as a Mermaid graph.                           |
| `addCode(opcode, tag, str)`                  | Stores `str` inside a plain `<pre>`.                          |
| `addString(opcode, tag, cssClass, str)`      | Like `addCode` but tags the `<pre>` with a CSS class.         |

Entries are appended to `window.<varname>[opcode][tag]` as HTML. **Multiple calls with the same `(opcode, tag)` concatenate** — useful for streaming intermediate states from a single pass.

### Adding new trace points

Pick the right method (graph vs. free-form code vs. classed HTML) and a **stable** tag — the docs viewer and `schedule_info.js` look up entries by tag, so renames break inspection. Examples already in tree:

- `tiers/validator/ValidatorGen.v3:47` — `addCode(opcode, "parsed", ...)`
- `common/sea/Schedule.v3:275` — `addGraph(opcode, "scheduler_start", sea)`
- `common/sea/Schedule.v3:280` — `addString(opcode, "info_untangled", "", ...)`

Gate expensive trace points on a flag so they're off by default. The scheduler does this with `trace_full` (see `common/sea/Schedule.v3:58`); `tests/ScheduleTest.v3` flips it on per-opcode via `--trace OPCODE`.

## Test-driver entry point

Two examples to match against:

- `tests/ScheduleTest.v3` — emits trace data to `docs/traces.js`.
- `common/sea/region/PartitionTest.v3` — prints to stdout (no JS trace), feeds `scripts/partition_golden_test.sh`.

Both share the same shape:

1. **Initialize trace** (only if writing to `docs/traces.js`):
   ```virgil
   CBDTrace.init(TRACES_FILE);
   CBDInfo.init_with_file(CBDTrace.writer.out_file);
   ```
2. **Initialize intrinsic types**: `IntrinsicTypes.init(IntrinsicTypes.TYPE_DEF_FILE);`
3. **Parse args** — flags (`--canonical`, `--details`, `--unlem`, `--trace`, …) plus opcode-name filters.
4. **Iterate opcodes** via `TierGen.extractDefs`, calling a per-opcode test function (`common/sea/region/PartitionTest.v3:132`):
   ```virgil
   def instrs = filterInstrs(TierGen.extractInstrNames(v3bytes));
   TierGen.extractDefs(instrs, sexpfile, sexp_bytes,
       fun (opcode: string, stmt: VirgilStmt) -> CBDDef {
           return testOpcode(opcode, stmt, ...);
       });
   ```
5. **Per-opcode test function** — build the IR (`SSAD_IR.from_virgil`, `Seas.ofSSADWithInfo`), apply transforms, run the pass, emit trace points and/or `System.puts` results. See `testOpcode` in `common/sea/region/PartitionTest.v3:42`.

Pick the output channel based on how the user will inspect:

- **JS trace** — graphs, scheduled IR, anything you'd want to view in the docs UI.
- **stdout** — short text suitable for diff-based golden tests (see `scripts/partition_golden_test.sh`).

## Build/run shell wrapper

`scripts/schedule_test.sh` is the template. The skeleton:

```bash
# 1. Make sure sexp deps are fresh.
make tests/SyntheticDefs.v3.sexp --quiet
# (and CanonicalDefs.v3.sexp when --canonical is passed)

# 2. Compile and run.
SOURCES="$VIRGIL_STD common/*.v3 common/*/*.v3 $ENGINE $WIZARD_UTIL tests/ScheduleTest.v3"
V3C="${V3C:-../virgil/bin/v3c-x86-64-linux -O2 -fun-exprs -simple-bodies}"
$V3C $SOURCES
./ScheduleTest "$@"
rm -f ./ScheduleTest
```

Conventions to mirror in new wrappers:

- Run `make <foo>.v3.sexp --quiet` for any sexp file the driver reads. Don't hand-regenerate.
- Default `V3C` to the optimized `v3c-x86-64-linux` invocation but allow a `V3C=...` env override for debug builds.
- Forward `"$@"` to the binary so flags pass through.
- Delete the binary on exit — compile-then-run is faster than shipping a checked-in artifact.
- For an allocation-profiling variant, follow `schedule_test.sh`'s `--profile` branch (switches to `Aeneas -profile -O2 -run`).

When the driver compiles independently (e.g. `PartitionTest`), prefer adding a `make` target and calling `make <Target> --quiet` from the shell wrapper instead of reinvoking `$V3C` — see `scripts/partition_golden_test.sh:66`.

## Node inspection script

`scripts/schedule_info.js` is the template. It loads `docs/traces.js` in a `vm` sandbox and prints by `(opcode, tag)`:

```js
const src = fs.readFileSync(tracesPath, 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(src, sandbox);
// sandbox.window.traces and sandbox.window.info are now populated.
```

Conventions:

- Strip the surrounding `<pre>` before printing (`stripPre` in `schedule_info.js:31`).
- Default to a **curated** set of tags (`SSAD_TAGS` in `schedule_info.js:39`); print other tags only when the user names one explicitly. Full dumps are rarely useful.
- Treat `window.info` and `window.traces` as independent namespaces — the script falls back gracefully when one is empty.

The docs viewer (`docs/`) and the inspection script both consume the same JS file, so any tag added at a call site is automatically reachable from both.

## Adding a new tracing harness — checklist

1. **Namespace.** Reuse `CBDTrace` / `CBDInfo`, or add a new component in `common/Trace.v3` modeled on `CBDInfo` if you want a fresh `window.<name>` keyspace.
2. **Call sites.** Add `addGraph` / `addCode` / `addString` in the pass with stable tags. Gate expensive ones on a flag.
3. **Driver.** Create `tests/<Name>Test.v3` (or `common/<area>/<Name>Test.v3`) with the structure above. Wire `CBDTrace.init` + `CBDInfo.init_with_file` in `main` only if you're emitting to `docs/traces.js`.
4. **Make target.** Add a target for the driver if it builds independently — see how `PartitionTest` is wired.
5. **Shell wrapper.** Copy `scripts/schedule_test.sh`, swap the `SOURCES` and binary name, keep the sexp `make` calls and `"$@"` forwarding.
6. **Inspection script.** If the harness writes to `docs/traces.js`, copy `scripts/schedule_info.js` and update its curated tag list. If the harness prints to stdout instead, consider a golden-test wrapper modeled on `scripts/partition_golden_test.sh`.
7. **Document.** Add the invocations to `docs/ai/TESTING.md` so they're discoverable.
