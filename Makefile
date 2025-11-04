# Paths and variables
VIRGIL_STD = ../virgil/lib/util/*.v3
VIRGIL_X86_STD = ../virgil/lib/asm/x86-64/*.v3
WIZARD = ./wizard-engine
ENGINE = $(WIZARD)/src/engine/*.v3
WIZARD_UTIL = $(WIZARD)/src/util/*.v3
V3TARGET = $(WIZARD)/src/engine/v3/*.v3
UTIL = $(WIZARD)/src/util/*.v3
DEFS = $(WIZARD)/src/bytecode/CanonicalDefs.v3
TYPEDEFS = $(WIZARD)/src/bytecode/Intrinsics.v3

# Virgil compiler command (adjust as needed)
VIRGIL ?= ../virgil/bin/current/x86-64-linux/Aeneas -O2 -run -fun-exprs -simple-bodies
V3C ?= ../virgil/bin/v3c-x86-64-linux -O2 -fun-exprs -simple-bodies

GENERATE_LIB = $(wildcard gen_common/*.v3) $(wildcard gen_common/*/*.v3)
GENERATE_DEPS = $(GENERATE_LIB) $(DEFS) $(DEFS).sexp $(TYPEDEFS)

AIS = $(foreach I,$(wildcard abstract_interpreter/impls/*.v3),$(basename $I)AI.v3)

# Targets
.PHONY: all clean help run_interpreter run_validator run_compiler validator interpreter compiler abstract_interpreter wizeng-slow site

all: validator interpreter InterpreterMain

$(DEFS).sexp: wizard-engine/src/bytecode/CanonicalDefs.v3
	$(VIRGIL) -print-vst $(DEFS) > $(DEFS).sexp

generated/Validator.v3: $(GENERATE_DEPS) validator/*.v3
	$(V3C) $(VIRGIL_STD)\
		$(GENERATE_LIB)\
		$(ENGINE)\
		$(WIZARD_UTIL)\
		validator/ValidatorGen.v3
	./ValidatorGen $(DEFS).sexp $(DEFS) validator/ValidatorTemplate.v3 > $@~
	rm ./ValidatorGen
	mv --force $@~ $@

docs/traces.js: validator
site: docs/traces.js

generated/Interpreter.v3: $(GENERATE_DEPS) interpreter/*.v3
	$(VIRGIL) $(VIRGIL_STD) \
		$(GENERATE_LIB)\
		$(ENGINE)\
		$(WIZARD_UTIL)\
		interpreter/InterpreterGen.v3\
		$(DEFS).sexp $(DEFS)\
		interpreter/InterpreterTemplate.v3\
		> $@~
	mv --force $@~ $@

generated/Compiler.v3: $(GENERATE_DEPS) compiler/CompilerGen.v3 compiler/CompilerTemplate.v3 generated/Validator.v3 compiler/Intrinsics.v3
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

generated/V3Compiler.v3: $(GENERATE_DEPS) v3compiler/V3CompilerGen.v3 v3compiler/V3CompilerTemplate.v3 generated/Validator.v3 v3compiler/Intrinsics.v3 abstract_interpreter/AITemplate.v3
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

generated/AI.v3: $(GENERATE_DEPS) abstract_interpreter/*.v3 generated/Validator.v3
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

generated/FastInt.v3: $(GENERATE_DEPS) fast-int/*.v3 generated/Validator.v3
	$(VIRGIL) $(VIRGIL_STD) \
		$(GENERATE_LIB)\
		$(ENGINE)\
		$(WIZARD_UTIL)\
		fast-int/FastIntGen.v3\
		$(DEFS).sexp\
		$(DEFS)\
		fast-int/FastIntTemplate.v3\
		> $@~
	mv --force $@~ $@


validator: generated/Validator.v3
interpreter: generated/Interpreter.v3
compiler: generated/Compiler.v3
abstract_interpreter: generated/AI.v3
wizeng-slow: validator interpreter
	cp gen_common/IR/Types.v3 wizard-engine/src/engine/cbd/slow/CBDTypes.v3
	cat runtime_common/Types.v3 >> wizard-engine/src/engine/cbd/slow/CBDTypes.v3
	cp generated/Interpreter.v3 wizard-engine/src/engine/cbd/slow/CBDInterpreter.v3
	cp generated/Validator.v3 wizard-engine/src/engine/cbd/slow/CBDValidator.v3
	cd wizard-engine; ./build.sh wizeng x86-linux --cbd

wizeng-fast: generated/FastInt.v3
	cp generated/FastInt.v3 wizard-engine/src/engine/cbd/fast/CBDFastInt.v3
	cd wizard-engine; ./build.sh wizeng x86-64-linux --cbd

run_interpreter: generated/Interpreter.v3 generated/Validator.v3
	$(VIRGIL) -O2 $(VIRGIL_STD) $(ENGINE) $(V3TARGET) $(UTIL)\
		runtime_common/*.v3\
		gen_common/IR/Types.v3\
		generated/Validator.v3 generated/Interpreter.v3 interpreter/InterpreterMain.v3 $(ARGS)

run_validator: generated/Validator.v3
	$(VIRGIL) $(VIRGIL_STD) $(ENGINE) $(V3TARGET) $(UTIL)\
		gen_common/IR/Types.v3\
		generated/Validator.v3 validator/ValidatorMain.v3 $(ARGS)

run_compiler: generated/Compiler.v3
	$(VIRGIL) $(VIRGIL_STD) $(ENGINE) $(V3TARGET) $(UTIL)\
		gen_common/IR/Types.v3\
		runtime_common/*.v3 generated/Validator.v3 generated/Compiler.v3 compiler/CompilerMain.v3 $(ARGS)

InterpreterMain: generated/Interpreter.v3 generated/Validator.v3
	$(V3C) -O2 $(VIRGIL_STD) $(ENGINE) $(V3TARGET) $(UTIL)\
		gen_common/IR/Types.v3 generated/Validator.v3\
		runtime_common/*.v3\
		generated/Interpreter.v3 interpreter/InterpreterMain.v3

FastInterpreterMain: generated/FastInt.v3 generated/Validator.v3
	$(V3C) -O2 $(VIRGIL_STD) $(ENGINE) $(UTIL)\
		$(VIRGIL_X86_STD)\
		$(WIZARD)/src/engine/compiler/*.v3\
		$(WIZARD)/src/engine/x86-64/*.v3\
		gen_common/IR/Types.v3 generated/Validator.v3\
		runtime_common/*.v3\
		generated/FastInt.v3 fast-int/FastIntMain.v3

%AI: abstract_interpreter validator
	$(V3C) -O2 $(VIRGIL_STD) $(ENGINE) $(V3TARGET) $(UTIL)\
		gen_common/IR/Types.v3\
		runtime_common/*.v3 generated/Validator.v3 generated/AI.v3\
		abstract_interpreter/state_mgrs/*.v3 abstract_interpreter/impls/$*.v3 abstract_interpreter/AIMain.v3
	mv AIMain $@

V3CompilerMain: generated/V3Compiler.v3 validator abstract_interpreter/state_mgrs/CFGStateMgr.v3 generated/Compiler.v3
	$(V3C) -O2 $(VIRGIL_STD) $(ENGINE) $(V3TARGET) $(UTIL)\
		gen_common/IR/Types.v3\
		runtime_common/*.v3\
		generated/Validator.v3\
		abstract_interpreter/state_mgrs/CFGStateMgr.v3\
		generated/Compiler.v3\
		generated/V3Compiler.v3\
		v3compiler/V3CompilerMain.v3

# Clean build artifacts
clean:
	rm -f generated/Interpreter.v3 generated/Compiler.v3 generated/Validator.v3 generated/AI.v3 generated/V3Compiler.v3 $(DEFS).sexp *Main *AI docs/traces.js

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
