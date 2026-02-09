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
# Build all components (validator, interpreter, compiler)
make all

# Build individual components
make validator          # Generate generated/validator/Validator.v3
make interpreter        # Generate generated/interpreter/Interpreter.v3  
make compiler          # Generate generated/compiler/Compiler.v3

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

Generators may use the Sea of Nodes IR internally for analysis and optimization. The validator generator's full pipeline is:

```
SSAD → Sea of Nodes → [graph rewrites] → schedule → SSAD → PrettyIR → generated code
```

The interpreter generator uses simpler direct SSAD transformations without the sea of nodes.

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
├── sea/                        # Sea of nodes IR framework
│   ├── SeaOfNodes.v3          # Sea graph, IRNode, graph rewrites
│   ├── SearchSchedule.v3     # Search-based DFS scheduler
│   ├── Schedule.v3            # Bottom-up CFG scheduler (WIP)
│   ├── DomGraph.v3            # Hierarchical dominance tracking for scheduler
│   └── Trace.v3               # Mermaid/JS visualization trace output
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

#### Sea of Nodes (`common/sea/`)

The sea of nodes is a graph-based IR used for analysis, optimization, and scheduling. It sits between the SSAD textual IR and the final generated code. Constructed from SSAD via `Seas.ofSSAD()`, it represents computations as an unordered dependency graph that is then scheduled back into a linear/structured form.

**Core types:**
- **`Sea`** - The graph container holding `IRNode`s. Provides graph analysis (LCA), Mermaid visualization, and cloning (`Seas.clone()`, `Seas.cloneSubgraph()`).
- **`IRNode`** - Graph nodes with `value_deps` (data flow), `state_deps` (one slot per `StateComponent` variant, sized to `StateComponent.count` and indexed by `.tag`), and `children` (reverse edges). Each carries `VarData` (name, type, stage) and an `IROp`.
- **`IROp`** - Node operation enum: `Start`, `Finish`, `Intrinsic(defn)`, `Lit(tipe, rep)`, `Phi`, `StatePhi(statecomps)`, `Proj(val)`, `Move(val)`.
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

**Scheduling** converts the unordered sea graph back into structured code. Scheduling is handled by separate modules outside of `SeaOfNodes.v3`.

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

The project includes WebAssembly test files:
- `test.wasm`, `test.wat` - Basic test cases
- `tests/` directory contains additional test cases
- Use `scripts/run_polybench.sh` for performance testing with polybench suite
  - Example: `bash scripts/run_polybench.sh jacobi-1d.wasm`
  - Use `--list` to see all available benchmarks
  - Use `--show-output` to debug failures

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
- **Sea of Nodes Pipeline**: The generator constructs a Sea of Nodes graph from SSAD, applies optimization passes (`id_propagate`, `overloadOps`, `addAbstractions`, `unLEM`, `constUnLEM`, `chooseMerge`), and schedules back to SSAD before generating Virgil code. The `unLEM` rewrite is key: it transforms runtime conditionals so both branches execute, since the validator must verify all paths.

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
- **Sea of Nodes IR**: Graph-based intermediate representation (`common/sea/`) used for analysis, optimization passes, and scheduling. Currently integrated into the validator generator; potentially applicable to other tiers.
- **Template System**: Common meta-programming approach with tier-specific transformations

# Amp Tools

This document defines Amp tools for this project that provide convenient access to common build and benchmarking tasks.

## makefile

**Description:** Build and run the WebAssembly CBD (Canonical Bytecode Definitions) project components.

**Command:** `makefile <target> [ARGS=...]`

**Targets:**

- `all` - Build validator, interpreter, and compiler
- `validator` - Generate validator from template
- `interpreter` - Generate interpreter from template
- `compiler` - Generate compiler from template
- `run_validator [ARGS=...]` - Run the validator with optional arguments
- `run_interpreter [ARGS=...]` - Run the interpreter with optional arguments
- `run_compiler [ARGS=...]` - Run the compiler with optional arguments
- `InterpreterMain` - Compile interpreter to native binary
- `clean` - Clean build artifacts
- `help` - Show build help message

**Examples:**

```bash
makefile all
makefile interpreter
makefile run_validator ARGS='test.wasm'
makefile run_interpreter ARGS='test.wasm'
makefile InterpreterMain
```

## polybench

**Description:** Run PolyBench benchmarks using the wizard-engine CBD interpreter.

**Command:** `polybench [OPTIONS] BENCHMARK [-- WIZENG_ARGS]`

**Options:**

- `--help` - Show help message
- `--list` - List all available benchmarks
- `--fast` - Use optimized wizeng binary (x86-64-linux)
- `--cbd=true|false` - Run in CBD mode (default: true)
  - `true`: uses CBD interpreter, saves to `benches-{slow,fast}.tsv`
  - `false`: uses base wizard interpreter, saves to `benches-{slow,fast}-base.tsv`
- `-v, --verbose` - Show full command being executed
- `--max-runs N` - Set hyperfine max runs (default: 10)
- `--time=time|hyperfine` - Choose timing method (default: auto-detect)

**Arguments:**

- `BENCHMARK` - Benchmark name with or without `.wasm` extension
- `WIZENG_ARGS` - Additional arguments passed to wizeng (after `--`)

**Environment Variables:**

- `POLYBENCH_DIR` - Override polybench directory path
  - Default: `../wish-you-were-fast/wasm/suites/polybench`

**Examples:**

```bash
polybench bicg
polybench --list
polybench --fast gemm
polybench --verbose jacobi-1d
polybench bicg -- --some-arg
polybench --cbd=false --fast bicg
```

**Output:** Results are saved to TSV files in the `generated/` directory:
- CBD mode: `benches-slow.tsv` or `benches-fast.tsv`
- Base mode: `benches-slow-base.tsv` or `benches-fast-base.tsv`

## run-wizard-slow

**Description:** Run WebAssembly files with the CBD slow interpreter.

**Command:** `run-wizard-slow [WASM_FILE] [ARGS...]`

**Arguments:**

- `WASM_FILE` - Path to WebAssembly file
- `ARGS` - Additional arguments passed to wizeng

**Examples:**

```bash
run-wizard-slow test.wasm
run-wizard-slow benchmark.wasm --some-arg
```

## run-wizard-fast

**Description:** Run WebAssembly files with the Wizard fast interpreter.

**Command:** `run-wizard-fast [WASM_FILE] [ARGS...]`

**Arguments:**

- `WASM_FILE` - Path to WebAssembly file
- `ARGS` - Additional arguments passed to wizeng

**Examples:**

```bash
run-wizard-fast test.wasm
run-wizard-fast benchmark.wasm --some-arg
```
