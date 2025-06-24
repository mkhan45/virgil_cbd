# Virgil S-Expression Project Makefile

# Paths and variables
VIRGIL_STD = ../virgil/lib/util/*.v3
WIZARD = ../wizard-engine
ENGINE = $(WIZARD)/src/engine/*.v3
V3TARGET = $(WIZARD)/src/engine/v3/*.v3
UTIL = $(WIZARD)/src/util/*.v3

# Virgil compiler command (adjust as needed)
VIRGIL ?= ../virgil/bin/current/x86-64-linux/Aeneas -run
V3C ?= ../virgil/bin/v3c-host

# Targets
.PHONY: all clean test_virgil test_base test_processor run_interpreter

all: test_virgil test_base test_processor run_interpreter

# Test the Virgil S-expression parser
test_virgil:
	$(VIRGIL) $(VIRGIL_STD) parser/VirgilSexpr.v3 parser/TestVirgilSexpr.v3 $(ARGS)

# Test the base S-expression parser
test_base:
	$(VIRGIL) $(VIRGIL_STD) parser/TestBase.v3 $(ARGS)

# Test the Canonical Bytecode Definition Processor
test_processor:
	$(VIRGIL) $(VIRGIL_STD) parser/VirgilSexpr.v3 interpreter/InterpreterGen.v3 $(ARGS)

# Run the interpreter
run_interpreter: generate_interpreter generate_validator
	$(VIRGIL) -O3 -fun-exprs -simple-bodies $(VIRGIL_STD) $(ENGINE) $(V3TARGET) $(UTIL) validator/Validator.v3 interpreter/Interpreter.v3 interpreter/InterpreterMain.v3 $(ARGS)

compile_interpreter: generate_interpreter
	$(V3C) -O2 -fun-exprs -simple-bodies $(VIRGIL_STD) $(ENGINE) $(V3TARGET) $(UTIL) validator/Validator.v3 interpreter/Interpreter.v3 interpreter/InterpreterMain.v3 $(ARGS)

# Generate the interpreter from template
generate_interpreter: cbd_sexp
	cp defs/CanonicalDefs.v3 defs/CanonicalDefs.v3cbd
	$(VIRGIL) -fun-exprs $(VIRGIL_STD) parser/VirgilSexpr.v3 IR/*.v3 interpreter/InterpreterGen.v3 defs/CanonicalDefs.v3cbd defs/CanonicalDefs.v3cbd.sexp interpreter/InterpreterTemplate.v3 > interpreter/Interpreter.v3
	rm defs/CanonicalDefs.v3cbd

generate_validator: cbd_sexp
	cp defs/CanonicalDefs.v3 defs/CanonicalDefs.v3cbd
	$(VIRGIL) -fun-exprs $(VIRGIL_STD) parser/VirgilSexpr.v3 IR/*.v3 validator/ValidatorGen.v3 defs/CanonicalDefs.v3cbd defs/CanonicalDefs.v3cbd.sexp validator/ValidatorTemplate.v3 > validator/Validator.v3

run_validator: generate_validator
	$(VIRGIL) -fun-exprs -simple-bodies $(VIRGIL_STD) $(ENGINE) $(V3TARGET) $(UTIL) validator/Validator.v3 validator/ValidatorMain.v3 $(ARGS)
cbd_sexp:

generate_compiler: cbd_sexp
	cp defs/CanonicalDefs.v3 defs/CanonicalDefs.v3cbd
	$(VIRGIL) -fun-exprs -simple-bodies $(VIRGIL_STD) parser/VirgilSexpr.v3 IR/*.v3 compiler/CompilerGen.v3 defs/CanonicalDefs.v3cbd defs/CanonicalDefs.v3cbd.sexp compiler/CompilerTemplate.v3 > compiler/Compiler.v3

run_compiler: generate_compiler
	$(VIRGIL) -fun-exprs -simple-bodies $(VIRGIL_STD) $(ENGINE) $(V3TARGET) $(UTIL) validator/Validator.v3 compiler/Compiler.v3 compiler/CompilerMain.v3 $(ARGS)

# Clean build artifacts
clean:
	# Add commands to clean build artifacts here
	# For example: rm -f *.class *.jar

# Usage instructions
help:
	@echo "Virgil S-Expression Project Makefile"
	@echo ""
	@echo "Available targets:"
	@echo "  make test_virgil ARGS='file.sexp'  - Test the Virgil S-expression parser"
	@echo "  make test_base ARGS='file.sexp'    - Test the base S-expression parser"
	@echo "  make test_processor ARGS='args'    - Test the CBD processor"
	@echo "  make run_interpreter ARGS='args'   - Run the interpreter"
	@echo "  make generate_interpreter          - Generate interpreter from template"
	@echo "  make clean                         - Clean build artifacts"
	@echo "  make help                          - Show this help message"
