# Wasm Canonical Bytecode Definitions

```scala
def I32_EQZ() {
	var x = pop_i32();
	if (x == 0) {
	    push_i32(1);
	} else {
	    push_i32(0);
	}
}
```

## Interpreter
```scala
def I32_EQZ() {
	def x0 = pop_i32();
	def right132 : int = 0;
	def cond73 = i32.==(x0, right132);
	if (cond73) {
		def arg94 : int = 1;
		def eff85 = push_i32(arg94);
	} else {
		def arg116 : int = 0;
		def eff107 = push_i32(arg116);
	}
}
```

## Validator
```scala
def I32_EQZ() {
	def x0 = pop_i32();
	def lit8 : int = 1;
	def arg94 = rtcast_i32(lit8);
	def eff85 = push_i32(arg94);
}
```

## Compiler
```scala
def I32_EQZ() {
	def x0 = pop_i32();
	def right132 : int = 0;
	def rtcast17 = rtcast_i32(right132);
	def cond73 = EmitOpI32.equals(x0, rtcast17);
	def stack_phi8 = emitFwdI32();
	def if12 = emitIf(cond73);
	def lit13 : int = 1;
	def arg94 = rtcast_i32(lit13);
	def eff85 = push_i32(arg94);
	def phi_pop9 = emitPopAssign(stack_phi8);
	def else14 = emitElse();
	def lit15 : int = 0;
	def arg116 = rtcast_i32(lit15);
	def eff107 = push_i32(arg116);
	def phi_pop10 = emitPopAssign(stack_phi8);
	def endBrace16 = emitEnd();
	def phi_push11 = push_i32(stack_phi8);
}
```
