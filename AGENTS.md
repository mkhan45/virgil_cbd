# AGENTS.md

## Project Overview

This project generates WASM execution tiers from the Canonical Bytecode Definitions found in wizard-engine/src/bytecode/CanonicalDefs.v3.

- **Validator**: Type-checks and validates WebAssembly bytecode semantics
- **Interpreter**: Executes WebAssembly bytecode with runtime value handling  
- **Compiler**: Generates target code (C-like output) from WebAssembly bytecode

All three components are code-generated from shared template files using a meta-programming approach with Virgil's S-expression parser.

## Build System

### Core Build Commands

```bash
# Build all components (validator, interpreter, wizeng-slow, site)
make all

# Build individual components
make validator          # Generate generated/Validator.v3
make interpreter        # Generate generated/Interpreter.v3
make compiler          # Generate generated/Compiler.v3

# Build ValidatorGen (can be used to check compile errors and basic functionality)
make ValidatorGen

# Run components with arguments
make run_validator ARGS='file.wasm'
make run_interpreter ARGS='file.wasm'
make run_compiler ARGS='file.wasm'

# Compile interpreter to binary
make InterpreterMain

# Clean generated files
make clean
```

### Wizard Engine Integration

The project depends on the `wizard-engine` WebAssembly engine (included as submodule). Key dependencies:
- `wizard-engine/src/bytecode/CanonicalDefs.v3` - Core WebAssembly definitions
- `wizard-engine/src/bytecode/Intrinsics.v3` - Intrinsic function type definitions
- `wizard-engine/src/engine/*.v3` - WebAssembly runtime engine components

## Architecture

### Code Generation Pipeline

1. **Templates** (`*Template.v3`) define the semantic behavior patterns for each WebAssembly instruction
2. **Generators** (`*Gen.v3`) read Canonical Definitions and Templates to produce specialized implementations
3. **Generated Code** (`generated/Validator.v3`, `generated/Interpreter.v3`, `generated/Compiler.v3`) are the final runnable components

Generators may use the Sea of Variables IR internally for analysis and optimization. The validator generator's full pipeline is:

```
SSAD → Sea of Variables → [graph rewrites] → schedule → SSAD → PrettyIR → generated code
```

The interpreter generator uses simpler direct SSAD transformations without the sea of variables.

### Directory Structure

```
tiers/                          # All tier implementations
├── validator/                  # Validator tier
├── interpreter/                # Interpreter tier
├── compiler/                   # Compiler tier (prototype)
├── abstract_interpreter/       # Abstract interpretation tier
├── fast_int/                   # Fast interpreter tier
└── v3compiler/                 # Virgil compiler tier

common/                         # Shared code
├── ir/                         # IR data structures and analysis
│   ├── Types.v3               # Core type system (CBDType, CBDEffect)
│   ├── IR.v3                  # SSAD representation
│   ├── IRAnalysis.v3          # Static analysis and optimizations
│   └── PrettyIR.v3            # IR pretty printing
├── Trace.v3                   # Mermaid/JS visualization trace output
├── sea/                        # Sea of nodes IR framework
│   ├── SeaOfVariables.v3          # Sea graph, IRNode, graph rewrites
│   ├── SeaTransforms.v3       # Graph rewrite passes
│   ├── SeaRender.v3           # Sea graph rendering
│   ├── Schedule.v3            # Bottom-up CFG scheduler (untangle + schedule)
│   ├── CheckSchedule.v3      # Schedule verification (dependency ordering + graph equivalence)
│   ├── DomGraph.v3            # Hierarchical dominance tracking for scheduler
│   └── NodeCollections.v3     # Node set types and collections
├── runtime/                    # Shared runtime types
│   └── Types.v3               # Runtime type definitions
└── codegen/                    # Code generation utilities
    ├── TierGen.v3             # Common tier generation utilities
    ├── VirgilSexpr.v3         # S-expression parsing for meta-programming
    └── DummyTarget.v3         # Stub runtime implementations for generators
```

### Key Components

#### IR (Intermediate Representation)
- `common/ir/Types.v3` - Core type system including `CBDType`, `CBDEffect`, and intrinsic type management
- `common/ir/IRAnalysis.v3` - Static analysis, dead code elimination, and optimization passes for SSAD representation

#### Template System
- `tiers/validator/ValidatorTemplate.v3` - Type checking semantics with TypeVar system and stack validation
- `tiers/interpreter/InterpreterTemplate.v3` - Runtime execution with Value boxing/unboxing and Frame management
- `tiers/compiler/CompilerTemplate.v3` - Code generation with string-based IR and control flow handling

#### Sea of Variables (`common/sea/`)

The sea of variables is a graph-based IR used for analysis, optimization, and scheduling. It sits between the SSAD textual IR and the final generated code. Constructed from SSAD via `Seas.ofSSAD()`, it represents computations as an unordered dependency graph that is then scheduled back into a linear/structured form.

**Core types:**
- **`Sea`** - The graph container holding `IRNode`s. Provides graph analysis (LCA), Mermaid visualization, and cloning (`Seas.clone()`, `Seas.cloneSubgraph()`).
- **`IRNode`** - Graph nodes with `value_deps` (data flow), `state_deps` (one slot per `StateComponent` variant, sized to `StateComponent.count` and indexed by `.tag`), and `children` (reverse edges). Each carries `VarData` (name, type, stage) and an `IROp`.
- **`IROp`** - Node operation enum: `Start`, `Finish`, `Intrinsic(defn)`, `Lit(tipe, rep)`, `Phi`, `StatePhi(statecomps)`, `Move(val)`.
- **`NodeSet` / `ImmNodeSet`** - Mutable and immutable node set types used throughout for graph analysis.

**Graph rewrite passes** (applied via `sea.apply()`):
- `id_propagate` - Eliminates identity intrinsics
- `removeViews` - Eliminates view intrinsics
- `overloadOps` - Resolves type-polymorphic operators to type-specific ones (e.g., `+` -> `i32_+`)
- `addAbstractions` - Inserts `lift_*` operations for static-to-runtime transitions
- `unLEM` - Rewrites runtime conditionals for abstract interpretation (both-branches execution)
- `constUnLEM` - Constant-folds trivial unLEM rewrites
- `reifyConds` - Inserts `startIf`/`startElse`/`end` control flow markers
- `chooseMerge` - Simplifies merge nodes

**Scheduling** (`common/sea/Schedule.v3`) converts the unordered sea graph back into structured code. The scheduler operates in two phases:

1. **Untangle** — Resolves shared subgraphs between branches. Uses `branch_partition` (on `Sea`) to compute, for each phi node, a `BranchPartition` containing the left subgraph, right subgraph, and frontier (nodes reachable from both sides). `find_branch_lattices` groups phi nodes that share the same condition into `BranchLattice`s, merging their partitions. Lattices are topologically sorted so inner branches are processed first. For each lattice, the shared frontier nodes are cloned (`Seas.cloneSubgraph`) into each branch so no node belongs to both sides, then lattices are recomputed.

2. **Bottom-up schedule** — Walks from `Finish` upward, placing each node into the lowest valid position in a `ScheduleNode` tree (composed of `ScheduleBlock`, `ScheduleBranch`, and `SchedulePhi` nodes). `isReady` checks whether all of a node's live children have been scheduled (tracked via `DomGraph`). Phi nodes use grouped readiness: all children across the `BranchLattice` must be scheduled before any phi in the group is enqueued. When a phi becomes ready, `prependScheduleBranch` inserts a new `ScheduleBranch`/`SchedulePhi` pair into the schedule tree.

**Move nodes** (`IROp.Move(val)`) are inserted by the `addMoves` transform before scheduling. Each phi's condition node gets `move_true`/`move_false` children via `init_move`, which act as branch-side markers. The scheduler skips Move nodes during placement (they are not live) but uses them to associate values with their correct branch side. `SchedulePhi.toSSAD` unwraps Move nodes when emitting phi assignments.

**`ScheduleChecker`** (`common/sea/CheckSchedule.v3`) - Verifies scheduler output by checking three properties:

1. **Dependency ordering** (`check_top_down`) — Walks the scheduled CFG top-down maintaining a scope of already-scheduled nodes. For each node, verifies all its dependencies are in scope before it executes.

2. **Graph equivalence** — Compares the scheduled graph against the original via `graph_eq` to ensure the dependency structure is preserved.

3. **Path effects** (`check_path_effects`) — Enumerates all possible branch paths (2^n combinations for n conditions, up to n=20) and verifies that each path executes the same set of effectful nodes in both the graph and the CFG. This catches bugs where the scheduler places an effect in the wrong branch or unconditionally when it should be conditional.

4. **Effect count conservation** — For each path, compares the number of effectful nodes between the original sea (`orig_sea`) and the scheduled sea (`new_sea`). This detects over-cloning by untangle, where a node is duplicated onto the same execution path, producing more effects than the original graph. Conditions are mapped from `new_sea` to `orig_sea` by node ID (preserved by `Seas.clone`), bypassing the `orig_to_new` mapping which can be corrupted by untangle's clone remapping.

The path effects check works by:
- Finding all unique conditions from phi nodes in the graph
- For each condition assignment (true/false for each condition):
  - `collect_graph_effs`: Walks the sea graph backward from `Finish`, following all `value_deps` and `state_deps`. At Phi/StatePhi nodes, follows only the branch matching the current assignment. Collects all `Intrinsic` nodes with non-empty `writes`.
  - `collect_cfg_effs`: Walks the scheduled CFG forward. At `ScheduleBranch`, follows only the active branch per assignment. Collects effectful nodes from `ScheduleBlock.prims`.
  - Compares the two sets and reports mismatches.
  - Builds `orig_assignment` by looking up each condition's ID in `orig_sea.nodes_by_id`, then collects `orig_effs` via `collect_graph_effs` on `orig_sea.finish`. Compares effect counts between orig and new.

Errors are reported as `ScheduleError` variants:
- `UnsatNeed(user, needed)` — A node was scheduled before one of its dependencies
- `BadOrdering(fst, snd)` — Two nodes appear in the wrong order
- `GraphDiff(diff)` — The scheduled graph structure differs from the original
- `PathEffectMismatch(path, graph_only, cfg_only)` — On a given branch path, effects differ between graph and CFG. `graph_only` lists effects the graph requires but CFG doesn't execute; `cfg_only` lists effects the CFG executes but graph doesn't require.
- `EffectCountMismatch(path, orig_effs, new_effs)` — On a given branch path, the number of effectful nodes in the scheduled graph differs from the original. Indicates over-cloning (new > orig) or lost effects (new < orig).

**`DomGraph`** (`common/sea/DomGraph.v3`) - Hierarchical dominance tracking with public/private node sets and parent chains. Used by the bottom-up scheduler to track which `IRNode`s have been scheduled before a given point, enabling readiness checks. The public/private distinction allows branch-specific nodes (like `Move` nodes) to be visible only within their branch.

#### Parser Infrastructure
- `common/codegen/VirgilSexpr.v3` - S-expression parsing for meta-programming
- `common/codegen/TierGen.v3` - Common code generation utilities

### Type System

The project uses a multi-tier type system:

- **CBDType**: Core types (`I32`, `U32`, `F32`, `Bot`) used across all tiers
- **CBDEffect**: Effect annotations (`Read`, `Push`, `Pop`, `Local`, `Global`, `Memory`, `Ctl`, `Emit`, `None`) for tracking side effects
- **TypeVar**: Validator-specific type variables with runtime type checking
- **Value**: Interpreter runtime values with boxing/unboxing

### Effect System

Instructions are annotated with effects that track:
- Stack operations (`Push`, `Pop`)
- State mutations (`Local`, `Global`, `Memory`) 
- Control transfers (`Ctl`)
- Code emission (`Emit`)

## Development Workflow

1. **Modify Templates**: Edit `tiers/*/Template.v3` files to change semantic behavior
2. **Regenerate**: Run `make all` to regenerate implementation files
3. **Test**: Use `make run_*` commands to test generated components
4. **Iterate**: The generated `.v3` files should not be edited directly

## File Relationships

- Generated files (`generated/Validator.v3`, etc.) are **never** edited directly
- Template files (`tiers/*/Template.v3`) define the core logic of the intrinsics that are implemented per-tier
- Generator files (`tiers/*/Gen.v3`) analyze and rewrite the definitions depending on the tier
- The build system automatically handles dependency tracking between templates and generated code
- Any changes to Wizard Engine canonical definitions trigger regeneration

## Testing

- `tests/` directory contains test cases
- Use `scripts/run_polybench.sh` for performance testing with polybench suite
  - Example: `bash scripts/run_polybench.sh jacobi-1d.wasm`
  - Use `--list` to see all available benchmarks
  - Use `--show-output` to debug failures

### Scheduler Tests

**Quick check** against real opcodes:
```
make validator
rg generated/Validator.v3 -e "ERROR" | wc -l
```

**Synthetic opcode tests** (`scripts/schedule_test.sh`) run the scheduler and `ScheduleChecker` on custom-defined opcodes in `tests/SyntheticDefs.v3`:
```bash
bash scripts/schedule_test.sh              # test all synthetic opcodes
bash scripts/schedule_test.sh SPLIT_BRANCHES  # test specific opcode(s)
```

Each opcode is tested in two phases: **initial** (after id_propagate, overloadOps, addAbstractions) and **unLEM** (after additionally applying unLEM, constUnLEM, chooseMerge). The test harness is `tests/ScheduleTest.v3`. It runs with `trace_full` enabled, so verbose scheduling output goes to stdout and info/graph traces are written to `docs/traces.js`.

To add a new synthetic opcode, add its definition to `tests/SyntheticDefs.v3` between the `@bytecode start/end` markers. It only needs to use intrinsics declared at the top of that file (add more declarations as needed). The sexp is regenerated automatically by the script via `make tests/SyntheticDefs.v3.sexp`.

**Inspecting traces** after running `schedule_test.sh`:
```bash
node scripts/schedule_info.js SPLIT_BRANCHES                          # info traces + scheduled SSAD
node scripts/schedule_info.js SPLIT_BRANCHES scheduler_ssad_pretty    # initial scheduled SSAD only
node scripts/schedule_info.js SPLIT_BRANCHES unlem_scheduler_ssa_pretty  # unLEM scheduled SSAD only
node scripts/schedule_info.js SPLIT_BRANCHES info_start               # specific info snapshot
```

# Tiers

## Validator

The validator executes the WebAssembly code in a single pass. Because of this,
it must analyze every possible branch, so conditionals in the CBD DSL are
not directly mirrored into the generated validator. This is handled by
rewriting conditionals based off of effects. 

### Key Features:
- **TypeVar System**: Uses runtime type checking with `TypeVar` enum (`I32`, `U32`, `F32`, `F64`, `V128`, `Object`, `Err`, `Bot`)
- **Stack Validation**: Maintains `ArrayStack<TypeVar>` for type checking stack operations
- **Side Table Generation**: Primary output is a side table for the interpreter that maps control flow labels to jump targets
- **Control Flow**: Uses `ControlEntry` and `SidetableBuilder` for tracking nested control structures
- **Effect-Based Rewriting**: Transforms conditionals based on `CBDEffect` analysis - if condition is not statically known, executes both branches
- **Sea of Variables Pipeline**: The generator constructs a Sea of Variables graph from SSAD, applies optimization passes (`id_propagate`, `overloadOps`, `addAbstractions`, `unLEM`, `constUnLEM`, `chooseMerge`), and schedules back to SSAD before generating Virgil code. The `unLEM` rewrite is key: it transforms runtime conditionals so both branches execute, since the validator must verify all paths.

### Template Structure:
- `tiers/validator/ValidatorTemplate.v3` - Core validation logic with TypeVar operations
- `tiers/validator/ValidatorGen.v3` - Meta-programming that analyzes effects and generates side table instrumentation

## Interpreter

The interpreter does minimal rewriting of the canonical definitions.
It attempts to leverage wizard's existing interpreter through its intrinsics.

### Key Features:
- **Value System**: Uses wizard-engine's `Value` type with boxing/unboxing (`Values.box_i()`, `Values.unbox_i()`)
- **Frame Management**: Maintains execution frames with `Frame` class containing stack pointer, sidetable, and code pointer
- **Side Table Usage**: Leverages validator-generated side tables for efficient control flow via `getBrEntry()`
- **Minimal Transformation**: Generator performs simple operator rewriting (e.g., `+` → `i32.+`) without complex conditional handling
- **Direct Execution**: Executes one path through conditionals using side table for branch resolution

### Template Structure:
- `tiers/interpreter/InterpreterTemplate.v3` - Runtime execution with Frame and Value management
- `tiers/interpreter/InterpreterGen.v3` - Simple SSA transformations without effect-based rewriting

## Compiler

The compiler is a prototype not kept up to date with the other tiers.
It also rewrites conditionals to generate code for every branch in a single pass.

### Key Features:
- **String-Based IR**: Generates C-like code strings stored in `StringBuilder`
- **Variable Naming**: Uses `uidl()` for unique identifier generation in target code
- **Type-Specific Operators**: Separate operator components (`EmitOpI32`, `EmitOpF32`) for different types
- **Control Flow Labels**: Generates goto-based control flow with unique labels
- **Forward Declarations**: For phi nodes in conditionals, generates forward declarations then assigns from each branch
- **Static/Runtime Hybrid**: Handles both compile-time constants and runtime values with `rtcast_*` functions

### Template Structure:
- `tiers/compiler/CompilerTemplate.v3` - Code generation with string building and goto-based control flow
- `tiers/compiler/CompilerGen.v3` - Complex SSA transformations including phi node handling and static/runtime transitions

## Cross-Tier Architecture

All tiers share:
- **CBDType**: Common type system (`I32`, `U32`, `F32`, `Bot`, etc.)
- **CBDEffect**: Effect annotations for tracking instruction side effects
- **SSAD**: Shared SSA-based intermediate representation
- **Sea of Variables IR**: Graph-based intermediate representation (`common/sea/`) used for analysis, optimization passes, and scheduling. Currently integrated into the validator generator; potentially applicable to other tiers.
- **Template System**: Common meta-programming approach with tier-specific transformations
