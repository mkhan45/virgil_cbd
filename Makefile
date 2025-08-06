# Virgil S-Expression Project Makefile

# Paths and variables
VIRGIL_STD = ../virgil/lib/util/*.v3
WIZARD = ./wizard-engine
ENGINE = $(WIZARD)/src/engine/*.v3
WIZARD_UTIL = $(WIZARD)/src/util/*.v3
V3TARGET = $(WIZARD)/src/engine/v3/*.v3
UTIL = $(WIZARD)/src/util/*.v3
DEFS = $(WIZARD)/src/bytecode/CanonicalDefs.v3
TYPEDEFS = $(WIZARD)/src/bytecode/Intrinsics.v3

# Virgil compiler command (adjust as needed)
VIRGIL ?= ../virgil/bin/current/x86-64-linux/Aeneas -run -fun-exprs -simple-bodies
V3C ?= ../virgil/bin/v3c-x86-64-linux -fun-exprs -simple-bodies

GENERATE_LIB = $(wildcard gen_common/*.v3) $(wildcard gen_common/*/*.v3)
GENERATE_DEPS = $(GENERATE_LIB) $(DEFS) $(DEFS).sexp $(TYPEDEFS)

AIS = $(foreach I,$(wildcard abstract_interpreter/impls/*.v3),$(basename $I)AI.v3)

# Targets
.PHONY: all clean help run_interpreter run_validator run_compiler validator interpreter compiler abstract_interpreter

all: validator/Validator.v3 interpreter/Interpreter.v3 compiler/Compiler.v3 abstract_interpreter/AI.v3 InterpreterMain

$(DEFS).sexp:
	$(VIRGIL) -print-vst $(DEFS) > $(DEFS).sexp

validator/Validator.v3: $(GENERATE_DEPS) validator/ValidatorGen.v3 validator/ValidatorTemplate.v3
	$(VIRGIL) $(VIRGIL_STD)\
		$(GENERATE_LIB)\
		$(ENGINE)\
		$(WIZARD_UTIL)\
		validator/ValidatorGen.v3\
		$(DEFS).sexp\
		$(DEFS)\
		validator/ValidatorTemplate.v3\
		> $@~
	mv --force $@~ $@

interpreter/Interpreter.v3: $(GENERATE_DEPS) interpreter/InterpreterGen.v3 interpreter/InterpreterTemplate.v3 validator/Validator.v3
	$(VIRGIL) $(VIRGIL_STD) \
		$(GENERATE_LIB)\
		$(ENGINE)\
		$(WIZARD_UTIL)\
		interpreter/InterpreterGen.v3\
		$(DEFS).sexp $(DEFS)\
		interpreter/InterpreterTemplate.v3\
		> $@~
	mv --force $@~ $@

compiler/Compiler.v3: $(GENERATE_DEPS) compiler/CompilerGen.v3 compiler/CompilerTemplate.v3 validator/Validator.v3 compiler/Intrinsics.v3
	$(VIRGIL) $(VIRGIL_STD)\
		$(GENERATE_LIB)\
		$(ENGINE)\
		$(WIZARD_UTIL)\
		compiler/CompilerGen.v3\
		$(DEFS).sexp\
		$(DEFS)\
		compiler/CompilerTemplate.v3\
		> $@~
	mv --force $@~ $@

v3compiler/V3Compiler.v3: $(GENERATE_DEPS) v3compiler/V3CompilerGen.v3 v3compiler/V3CompilerTemplate.v3 validator/Validator.v3 v3compiler/Intrinsics.v3 abstract_interpreter/AITemplate.v3
	$(VIRGIL) $(VIRGIL_STD)\
		$(GENERATE_LIB)\
		$(ENGINE)\
		$(WIZARD_UTIL)\
		v3compiler/V3CompilerGen.v3\
		$(DEFS).sexp\
		$(DEFS)\
		abstract_interpreter/AITemplate.v3\
		> $@~
	mv --force $@~ $@

abstract_interpreter/AI.v3: $(GENERATE_DEPS) abstract_interpreter/AIGen.v3 abstract_interpreter/AITemplate.v3 validator/Validator.v3 abstract_interpreter/Intrinsics.v3
	$(VIRGIL) $(VIRGIL_STD) \
		$(GENERATE_LIB)\
		$(ENGINE)\
		$(WIZARD_UTIL)\
		abstract_interpreter/AIGen.v3\
		$(DEFS).sexp\
		$(DEFS)\
		abstract_interpreter/AITemplate.v3\
		> $@~
	mv --force $@~ $@

validator: validator/Validator.v3
interpreter: interpreter/Interpreter.v3
compiler: compiler/Compiler.v3
abstract_interpreter: abstract_interpreter/AI.v3

run_interpreter: interpreter/Interpreter.v3 validator/Validator.v3
	$(VIRGIL) -O2 $(VIRGIL_STD) $(ENGINE) $(V3TARGET) $(UTIL)\
		runtime_common/*.v3 validator/Validator.v3 interpreter/Interpreter.v3 interpreter/InterpreterMain.v3 $(ARGS)

run_validator: validator/Validator.v3
	$(VIRGIL) $(VIRGIL_STD) $(ENGINE) $(V3TARGET) $(UTIL)\
		validator/Validator.v3 validator/ValidatorMain.v3 $(ARGS)

run_compiler: compiler/Compiler.v3
	$(VIRGIL) $(VIRGIL_STD) $(ENGINE) $(V3TARGET) $(UTIL)\
		runtime_common/*.v3 validator/Validator.v3 compiler/Compiler.v3 compiler/CompilerMain.v3 $(ARGS)

InterpreterMain: interpreter/Interpreter.v3
	$(V3C) -O2 $(VIRGIL_STD) $(ENGINE) $(V3TARGET) $(UTIL)\
		runtime_common/*.v3 validator/Validator.v3 interpreter/Interpreter.v3 interpreter/InterpreterMain.v3

%AI: abstract_interpreter validator
	$(V3C) -O2 $(VIRGIL_STD) $(ENGINE) $(V3TARGET) $(UTIL)\
		gen_common/IR/Types.v3\
		runtime_common/*.v3 validator/Validator.v3 abstract_interpreter/AI.v3\
		abstract_interpreter/state_mgrs/*.v3 abstract_interpreter/impls/$*.v3 abstract_interpreter/AIMain.v3
	mv AIMain $@

V3CompilerMain: v3compiler/V3Compiler.v3 validator abstract_interpreter/state_mgrs/CFGStateMgr.v3 compiler/Compiler.v3
	$(V3C) -O2 $(VIRGIL_STD) $(ENGINE) $(V3TARGET) $(UTIL)\
		runtime_common/*.v3\
		validator/Validator.v3\
		abstract_interpreter/state_mgrs/CFGStateMgr.v3\
		compiler/Compiler.v3\
		v3compiler/V3Compiler.v3\
		v3compiler/V3CompilerMain.v3

# Clean build artifacts
clean:
	rm -f interpreter/Interpreter.v3 compiler/Compiler.v3 validator/Validator.v3 $(DEFS).sexp *Main *AI

# Usage instructions
help:
	@echo "Wasm CBD"
	@echo ""
	@echo "Available targets:"
	@echo "  make all                           - Build validator, interpreter, and compiler"
	@echo "  make validator                     - Generate validator from template"
	@echo "  make interpreter                   - Generate interpreter from template"
	@echo "  make compiler                      - Generate compiler from template"
	@echo "  make run_validator ARGS='args'     - Run the validator"
	@echo "  make run_interpreter ARGS='args'   - Run the interpreter"
	@echo "  make run_compiler ARGS='args'      - Run the compiler"
	@echo "  make InterpreterMain               - Compile interpreter to binary"
	@echo "  make clean                         - Clean build artifacts"
	@echo "  make help                          - Show this help message"
