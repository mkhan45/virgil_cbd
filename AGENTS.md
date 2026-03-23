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

Templates (`*Template.v3`) define per-instruction semantics. Generators (`*Gen.v3`) read Canonical Definitions and Templates to produce specialized implementations. The validator generator uses a full Sea of Variables pipeline; the interpreter generator uses simpler direct SSAD transformations.

For full details: [docs/ai/ARCHITECTURE.md](docs/ai/ARCHITECTURE.md)

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

Quick scheduler check: `make validator && rg generated/Validator.v3 -e "ERROR" | wc -l`

Targeted scheduler check on real opcodes: `bash scripts/schedule_test.sh --canonical i32_add`

For full testing documentation (polybench, synthetic opcode tests, trace inspection): [docs/ai/TESTING.md](docs/ai/TESTING.md)

## Skills

Agent skills available for scheduler work:

- **`debug-scheduler`** (`.agents/skills/debug-scheduler`) — Use when investigating scheduler `ERROR` output, fixing schedule bugs, or working with info traces and `schedule_info.js`.
- **`optimize-scheduler`** (`.agents/skills/optimize-scheduler`) — Use when asked to speed up `ValidatorGen` or improve scheduler performance. Enforces correctness-first protocol.

## Reference

| File | Contents |
|------|----------|
| [docs/ai/ARCHITECTURE.md](docs/ai/ARCHITECTURE.md) | Directory structure, code gen pipeline, IR, type/effect systems, Wizard Engine integration |
| [docs/ai/SEA.md](docs/ai/SEA.md) | Sea of Variables graph, rewrite passes, scheduler (untangle + bottom-up), ScheduleChecker, DomGraph |
| [docs/ai/TIERS.md](docs/ai/TIERS.md) | Validator, Interpreter, Compiler tier implementations and cross-tier architecture |
| [docs/ai/TESTING.md](docs/ai/TESTING.md) | Test commands, synthetic opcodes, trace inspection, scheduler skills |
| [docs/ai/misc/GRAPH_PROPS.md](docs/ai/misc/GRAPH_PROPS.md) | Formal schedulability properties and invariants |
| [docs/ai/misc/PBT_PLAN.md](docs/ai/misc/PBT_PLAN.md) | Property-based testing design for the scheduler |
| [docs/ai/misc/LIT_REVIEW.md](docs/ai/misc/LIT_REVIEW.md) | Literature review: Sea of Nodes and related compiler work |
| [docs/ai/misc/MOCK_TEST_FIX.md](docs/ai/misc/MOCK_TEST_FIX.md) | Documentation of fixes applied to MOCK_TEST and MOCK_TEST_ul |
