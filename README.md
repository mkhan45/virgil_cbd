# Wasm Canonical Bytecode Definitions

<https://mkhan45.github.io/wasm-cbd>

## Canonical Definition (Concrete Interpreter)
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

## Sea of Variables
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10{{"
	Sϕ Stack "}}
	6 --> 10
	9 --> 10
	7 --> 10
	7["
	eff__668
	push_u32
	"]
	4 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_u32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	4["
	arg__671
	0
	"]
	9["
	eff__666
	push_u32
	"]
	8 --> 9
	3 -. Stack .-> 9
	8["
	arg__667
	1
	"]
	6["
	cond__665
	u32.==
	"]
	3 --> 6
```

## Abstract Interpreter Transform

```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10{{"
	Sϕ Stack "}}
	16 --> 10
	19 --> 10
	17 --> 10
	17{{"
	Sϕ Stack "}}
	14 --> 17
	9 --> 17
	7 --> 17
	7["
	eff__668
	push_u32
	"]
	13 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_u32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	13["
	abs__674
	lift_u32
	"]
	4 --> 13
	4["
	arg__671
	0
	"]
	9["
	eff__666
	push_u32
	"]
	12 --> 9
	3 -. Stack .-> 9
	12["
	abs__673
	lift_u32
	"]
	8 --> 12
	8["
	arg__667
	1
	"]
	14["
	mt__675
	U32_maybeTrue
	"]
	6 --> 14
	6["
	cond__665
	U32_equals
	"]
	3 --> 6
	11 --> 6
	11["
	abs__672
	lift_u32
	"]
	4 --> 11
	19["
	eff_push__679
	push_u32
	"]
	18 --> 19
	3 -. Stack .-> 19
	18["
	merge__678
	merge_u
	"]
	12 --> 18
	13 --> 18
	16["
	mb__677
	bool.&&
	"]
	14 --> 16
	15 --> 16
	15["
	mf__676
	U32_maybeFalse
	"]
	6 --> 15
```
```scala
def I32_EQZ() {
	def a = pop_u32();
	def mt = U32_maybeTrue(U32_equals(a, lift_u32(0)));
	def mf = U32_maybeFalse(U32_equals(a, lift_u32(0)));
	if (bool.&&(mt, mf)) {
		push_u32(merge_u(lift_u32(1), lift_u32(0)));
	} else {
		if (mt) {
			push_u32(lift_u32(1));
		} else {
			push_u32(lift_u32(0));
		}
	}
}
```

## Validator Specialization
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10["
	eff_push__679
	push_u32
	"]
	12 --> 10
	3 -. Stack .-> 10
	3["
	a
	pop_u32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	12["
	abs__673
	lift_u32
	"]
	8 --> 12
	8["
	arg__667
	1"]
```
```scala
def I32_EQZ() {
	def a = pop_u32();
	push_u32(lift_u32(1));
}
```
