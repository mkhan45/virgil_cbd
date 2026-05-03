# Architecture

## Code Generation Pipeline

1. **Templates** (`*Template.v3`) define the semantic behavior patterns for each WebAssembly instruction
2. **Generators** (`*Gen.v3`) read Canonical Definitions and Templates to produce specialized implementations
3. **Generated Code** (`generated/Validator.v3`, `generated/Interpreter.v3`, `generated/Compiler.v3`) are the final runnable components

The validator generator's full pipeline is:

```
SSAD → Sea of Variables → [graph rewrites] → schedule → SSAD → PrettyIR → generated code
```

The interpreter generator uses simpler direct SSAD transformations without the sea of variables.

## Directory Structure

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
├── sea/                        # Sea of Variables IR framework
│   ├── SeaOfVariables.v3      # Sea graph, IRNode, graph rewrites
│   ├── SeaTransforms.v3       # Graph rewrite passes
│   ├── SeaRender.v3           # Sea graph rendering
│   ├── Schedule.v3            # Bottom-up CFG scheduler (untangle + schedule)
│   ├── CheckSchedule.v3       # Schedule verification
│   ├── DomGraph.v3            # Hierarchical dominance tracking for scheduler
│   └── NodeCollections.v3     # Node set types and collections
├── runtime/                    # Shared runtime types
│   └── Types.v3               # Runtime type definitions
└── codegen/                    # Code generation utilities
    ├── TierGen.v3             # Common tier generation utilities
    ├── VirgilSexpr.v3         # S-expression parsing for meta-programming
    └── DummyTarget.v3         # Stub runtime implementations for generators
```

## Key Components

### IR (Intermediate Representation)
- `common/ir/Types.v3` — Core type system including `CBDType`, `CBDEffect`, and intrinsic type management
- `common/ir/IR.v3` — SSAD representation
- `common/ir/IRAnalysis.v3` — Static analysis, dead code elimination, and optimization passes for SSAD
- `common/ir/PrettyIR.v3` — IR pretty printing

### Template System
- `tiers/validator/ValidatorTemplate.v3` — Type checking semantics with TypeVar system and stack validation
- `tiers/interpreter/InterpreterTemplate.v3` — Runtime execution with Value boxing/unboxing and Frame management
- `tiers/compiler/CompilerTemplate.v3` — Code generation with string-based IR and control flow handling

### Parser Infrastructure
- `common/codegen/VirgilSexpr.v3` — S-expression parsing for meta-programming
- `common/codegen/TierGen.v3` — Common code generation utilities

## Type System

- **CBDType**: Core types (`I32`, `U32`, `F32`, `Bot`) used across all tiers
- **CBDEffect**: Effect annotations (`Read`, `Push`, `Pop`, `Local`, `Global`, `Memory`, `Ctl`, `Emit`, `None`) for tracking side effects
- **TypeVar**: Validator-specific type variables with runtime type checking (`I32`, `U32`, `F32`, `F64`, `V128`, `Object`, `Err`, `Bot`)
- **Value**: Interpreter runtime values with boxing/unboxing

## Effect System

Instructions are annotated with effects that track:
- Stack operations (`Push`, `Pop`)
- State mutations (`Local`, `Global`, `Memory`)
- Control transfers (`Ctl`)
- Code emission (`Emit`)

## Wizard Engine Integration

The project depends on the `wizard-engine` WebAssembly engine (included as submodule). Key dependencies:
- `wizard-engine/src/bytecode/CanonicalDefs.v3` — Core WebAssembly definitions
- `wizard-engine/src/bytecode/Intrinsics.v3` — Intrinsic function type definitions
- `wizard-engine/src/engine/*.v3` — WebAssembly runtime engine components
