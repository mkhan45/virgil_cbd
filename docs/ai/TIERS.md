# Tiers

## Validator

The validator executes the WebAssembly code in a single pass. Because of this, it must analyze every possible branch, so conditionals in the CBD DSL are not directly mirrored into the generated validator. This is handled by rewriting conditionals based off of effects.

### Key Features
- **TypeVar System**: Uses runtime type checking with `TypeVar` enum (`I32`, `U32`, `F32`, `F64`, `V128`, `Object`, `Err`, `Bot`)
- **Stack Validation**: Maintains `ArrayStack<TypeVar>` for type checking stack operations
- **Side Table Generation**: Primary output is a side table for the interpreter that maps control flow labels to jump targets
- **Control Flow**: Uses `ControlEntry` and `SidetableBuilder` for tracking nested control structures
- **Effect-Based Rewriting**: Transforms conditionals based on `CBDEffect` analysis — if condition is not statically known, executes both branches
- **Sea of Variables Pipeline**: The generator constructs a Sea of Variables graph from SSAD, applies optimization passes (`id_propagate`, `overloadOps`, `addAbstractions`, `unLEM`, `constUnLEM`, `chooseMerge`), and schedules back to SSAD before generating Virgil code. The `unLEM` rewrite is key: it transforms runtime conditionals so both branches execute, since the validator must verify all paths.

### Template Structure
- `tiers/validator/ValidatorTemplate.v3` — Core validation logic with TypeVar operations
- `tiers/validator/ValidatorGen.v3` — Meta-programming that analyzes effects and generates side table instrumentation

---

## Interpreter

The interpreter does minimal rewriting of the canonical definitions. It attempts to leverage wizard's existing interpreter through its intrinsics.

### Key Features
- **Value System**: Uses wizard-engine's `Value` type with boxing/unboxing (`Values.box_i()`, `Values.unbox_i()`)
- **Frame Management**: Maintains execution frames with `Frame` class containing stack pointer, sidetable, and code pointer
- **Side Table Usage**: Leverages validator-generated side tables for efficient control flow via `getBrEntry()`
- **Minimal Transformation**: Generator performs simple operator rewriting (e.g., `+` → `i32.+`) without complex conditional handling
- **Direct Execution**: Executes one path through conditionals using side table for branch resolution

### Template Structure
- `tiers/interpreter/InterpreterTemplate.v3` — Runtime execution with Frame and Value management
- `tiers/interpreter/InterpreterGen.v3` — Simple SSA transformations without effect-based rewriting

---

## Compiler (Prototype)

The compiler is a prototype not kept up to date with the other tiers. It also rewrites conditionals to generate code for every branch in a single pass.

### Key Features
- **String-Based IR**: Generates C-like code strings stored in `StringBuilder`
- **Variable Naming**: Uses `uidl()` for unique identifier generation in target code
- **Type-Specific Operators**: Separate operator components (`EmitOpI32`, `EmitOpF32`) for different types
- **Control Flow Labels**: Generates goto-based control flow with unique labels
- **Forward Declarations**: For phi nodes in conditionals, generates forward declarations then assigns from each branch
- **Static/Runtime Hybrid**: Handles both compile-time constants and runtime values with `rtcast_*` functions

### Template Structure
- `tiers/compiler/CompilerTemplate.v3` — Code generation with string building and goto-based control flow
- `tiers/compiler/CompilerGen.v3` — Complex SSA transformations including phi node handling and static/runtime transitions

---

## Cross-Tier Architecture

All tiers share:
- **CBDType**: Common type system (`I32`, `U32`, `F32`, `Bot`, etc.)
- **CBDEffect**: Effect annotations for tracking instruction side effects
- **SSAD**: Shared SSA-based intermediate representation
- **Sea of Variables IR**: Graph-based IR (`common/sea/`) used for analysis, optimization, and scheduling — currently integrated into the validator generator; potentially applicable to other tiers
- **Template System**: Common meta-programming approach with tier-specific transformations
