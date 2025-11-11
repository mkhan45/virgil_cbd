# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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
├── sea/                        # Sea of nodes representation
│   ├── SeaOfNodes.v3
│   └── Trace.v3
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
- Use `run_benchmark.sh` for performance testing

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
- **Template System**: Common meta-programming approach with tier-specific transformations
