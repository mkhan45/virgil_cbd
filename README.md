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

## Abstract Interpreter
```scala
def I32_EQZ() {
	def a0 = pop_i32();
	def arg211 : int = 0;
	def rtcast8 = rtcast_i32(arg211);
	def cond153 = I32_equals(a0, rtcast8);
	def condTrue9 = I32_maybeTrue(cond153);
	def condFalse10 = I32_maybeFalse(cond153);
	def condBoth11 = bool.&&(condTrue9, condFalse10);
	if (condBoth11) {
		def arg174 : int = 1;
		def rtcast12 = rtcast_i32(arg174);
		def arg196 : int = 0;
		def rtcast13 = rtcast_i32(arg196);
		def stack_merge14 = merge_i(rtcast12, rtcast13);
		def eff15 = push_i32(stack_merge14);
	} else {
		if (condTrue9) {
			def arg174 : int = 1;
			def rtcast12 = rtcast_i32(arg174);
			def eff165 = push_i32(rtcast12);
		} else {
			def arg196 : int = 0;
			def rtcast13 = rtcast_i32(arg196);
			def eff187 = push_i32(rtcast13);
		}
	}
}
```
