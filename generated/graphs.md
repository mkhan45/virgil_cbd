## I32_DIV_S
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	20 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	21 -. Stack .-> 1
	21["
	state phi Stack 	"]
	6 --> 21
	19 --> 21
	18 --> 21
	18["
	state phi Stack 	"]
	13 --> 18
	16 --> 18
	15 --> 18
	15["
	eff__4
	push_u32
	"]
	14 --> 15
	4 -. Stack .-> 15
	4["
	a
	pop_u32
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_u32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	14["
	r
	U32_div_s
	"]
	4 --> 14
	3 --> 14
	16["
	ret__3
	trapDivideUnrepresentable
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 16
	4 -. Stack .-> 16
	13["
	cond__2
	bool.&&
	"]
	12 --> 13
	9 --> 13
	9["
	arg__9
	u32.==
	"]
	4 --> 9
	8 --> 9
	8["
	arg__14
	u32.view
	"]
	7 --> 8
	7["
	arg__15
	-2_147_483_648
	"]
	12["
	arg__8
	u32.==
	"]
	3 --> 12
	11 --> 12
	11["
	arg__11
	u32.view
	"]
	10 --> 11
	10["
	arg__12
	-1
	"]
	19["
	ret__1
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 19
	4 -. Stack .-> 19
	6["
	cond__0
	u32.==
	"]
	3 --> 6
	5 --> 6
	5["
	arg__17
	0
	"]
	20["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	6 --> 20
	19 --> 20
	17 --> 20
	17["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	13 --> 17
	16 --> 17
	0 --> 17
```
