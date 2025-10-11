## UNREACHABLE
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	3 -. Codeptr Stack Locals Tables Memory Extra .-> 1
	3["
	eff__0
	trapUnreachable
	"]
	0 -. Codeptr Stack Locals Tables Memory Extra .-> 3
	0["
	Start
	"]
```
## NOP
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Stack Locals Tables Memory Extra .-> 1
	0["
	Start
	"]
```
## LOCAL_GET
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	3 -. Codeptr .-> 1
	6 -. Stack .-> 1
	0 -. Locals Tables Memory Extra .-> 1
	0["
	Start
	"]
	6["
	eff__2
	push_Value
	"]
	4 --> 6
	5 --> 6
	5 -. Stack .-> 6
	5["
	val
	getLocal
	"]
	4 --> 5
	3 --> 5
	0 -. Stack .-> 5
	3["
	index
	imm_readULEB32
	"]
	0 -. Codeptr .-> 3
	4["
	tv
	f_getLocalType
	"]
	3 --> 4
```
## LOCAL_SET
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	3 -. Codeptr .-> 1
	5 -. Stack .-> 1
	0 -. Locals Tables Memory Extra .-> 1
	0["
	Start
	"]
	5["
	val
	pop_Value
	"]
	4 --> 5
	0 -. Stack .-> 5
	4["
	tv
	f_getLocalType
	"]
	3 --> 4
	3["
	index
	imm_readULEB32
	"]
	0 -. Codeptr .-> 3
```
## LOCAL_TEE
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	3 -. Codeptr .-> 1
	7 -. Stack .-> 1
	0 -. Locals Tables Memory Extra .-> 1
	0["
	Start
	"]
	7["
	eff__14
	push_Value
	"]
	4 --> 7
	5 --> 7
	5 -. Stack .-> 7
	5["
	val
	pop_Value
	"]
	4 --> 5
	0 -. Stack .-> 5
	4["
	tv
	f_getLocalType
	"]
	3 --> 4
	3["
	index
	imm_readULEB32
	"]
	0 -. Codeptr .-> 3
```
## GLOBAL_GET
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	3 -. Codeptr .-> 1
	6 -. Stack .-> 1
	0 -. Locals Tables Memory Extra .-> 1
	0["
	Start
	"]
	6["
	eff__23
	push_Value
	"]
	4 --> 6
	5 --> 6
	5 -. Stack .-> 6
	5["
	val
	getGlobal
	"]
	4 --> 5
	3 --> 5
	0 -. Stack .-> 5
	3["
	index
	imm_readULEB32
	"]
	0 -. Codeptr .-> 3
	4["
	tv
	m_getGlobalType
	"]
	3 --> 4
```
## GLOBAL_SET
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	3 -. Codeptr .-> 1
	5 -. Stack .-> 1
	0 -. Locals Tables Memory Extra .-> 1
	0["
	Start
	"]
	5["
	val
	pop_Value
	"]
	4 --> 5
	0 -. Stack .-> 5
	4["
	tv
	m_getGlobalType
	"]
	3 --> 4
	3["
	index
	imm_readULEB32
	"]
	0 -. Codeptr .-> 3
```
## TABLE_GET
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	3 -. Codeptr .-> 1
	11 -. Stack .-> 1
	0 -. Locals Tables Memory Extra .-> 1
	0["
	Start
	"]
	11["
	state phi Stack 	"]
	4 --> 11
	7 --> 11
	10 --> 11
	10["
	eff__40
	push_Object
	"]
	9 --> 10
	8 -. Stack .-> 10
	8["
	index
	pop_u32
	"]
	0 -. Stack .-> 8
	9["
	val
	mach_readTable32
	"]
	3 --> 9
	8 --> 9
	3["
	table_index
	imm_readULEB32
	"]
	0 -. Codeptr .-> 3
	7["
	eff__36
	push_Object
	"]
	6 --> 7
	5 -. Stack .-> 7
	5["
	index
	pop_u64
	"]
	0 -. Stack .-> 5
	6["
	val
	mach_readTable64
	"]
	3 --> 6
	5 --> 6
	4["
	cond__35
	m_isTable64
	"]
	3 --> 4
```
## TABLE_SET
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	3 -. Codeptr .-> 1
	11 -. Stack .-> 1
	0 -. Locals Tables Memory Extra .-> 1
	0["
	Start
	"]
	11["
	state phi Stack 	"]
	4 --> 11
	6 --> 11
	9 --> 11
	9["
	index
	pop_u32
	"]
	8 -. Stack .-> 9
	8["
	val
	pop_Object
	"]
	0 -. Stack .-> 8
	6["
	index
	pop_u64
	"]
	5 -. Stack .-> 6
	5["
	val
	pop_Object
	"]
	0 -. Stack .-> 5
	4["
	cond__45
	m_isTable64
	"]
	3 --> 4
	3["
	table_index
	imm_readULEB32
	"]
	0 -. Codeptr .-> 3
```
## CALL
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	6 -. Codeptr Stack Locals Tables Memory Extra .-> 1
	6["
	eff__55
	doCall
	"]
	4 --> 6
	5 --> 6
	3 -. Codeptr .-> 6
	0 -. Stack Locals Tables Memory Extra .-> 6
	0["
	Start
	"]
	3["
	index
	imm_readULEB32
	"]
	0 -. Codeptr .-> 3
	5["
	target
	i_getFunction
	"]
	3 --> 5
	4["
	sig
	m_getFuncSignature
	"]
	3 --> 4
```
## CALL_INDIRECT
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	13 -. Codeptr Stack Locals Tables Memory Extra .-> 1
	13["
	state phi Codeptr Stack Locals Tables Memory Extra 	"]
	6 --> 13
	9 --> 13
	12 --> 13
	12["
	eff__67
	doCall
	"]
	5 --> 12
	11 --> 12
	4 -. Codeptr .-> 12
	10 -. Stack .-> 12
	0 -. Locals Tables Memory Extra .-> 12
	0["
	Start
	"]
	10["
	func_index
	pop_u32
	"]
	0 -. Stack .-> 10
	4["
	table_index
	imm_readULEB32
	"]
	3 -. Codeptr .-> 4
	3["
	sig_index
	imm_readULEB32
	"]
	0 -. Codeptr .-> 3
	11["
	target
	i_getTableFunction32
	"]
	4 --> 11
	5 --> 11
	10 --> 11
	5["
	sig
	m_getSignature
	"]
	3 --> 5
	9["
	eff__61
	doCall
	"]
	5 --> 9
	8 --> 9
	4 -. Codeptr .-> 9
	7 -. Stack .-> 9
	0 -. Locals Tables Memory Extra .-> 9
	7["
	func_index
	pop_u64
	"]
	0 -. Stack .-> 7
	8["
	target
	i_getTableFunction64
	"]
	4 --> 8
	5 --> 8
	7 --> 8
	6["
	is64
	m_isTable64
	"]
	4 --> 6
```
## RETURN_CALL
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	6 -. Codeptr Stack Locals Tables Memory Extra .-> 1
	6["
	eff__76
	doReturnCall
	"]
	4 --> 6
	5 --> 6
	3 -. Codeptr .-> 6
	0 -. Stack Locals Tables Memory Extra .-> 6
	0["
	Start
	"]
	3["
	index
	imm_readULEB32
	"]
	0 -. Codeptr .-> 3
	5["
	target
	i_getFunction
	"]
	3 --> 5
	4["
	sig
	m_getFuncSignature
	"]
	3 --> 4
```
## DROP
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	4 -. Stack .-> 1
	4["
	eff__81
	pop_Value
	"]
	3 --> 4
	0 -. Stack .-> 4
	0["
	Start
	"]
	3["
	tv
	f_getTopOfStackType
	"]
```
## SELECT
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	11 -. Stack .-> 1
	11["
	state phi Stack 	"]
	8 --> 11
	9 --> 11
	10 --> 11
	10["
	eff__87
	push_Value
	"]
	4 --> 10
	5 --> 10
	6 -. Stack .-> 10
	6["
	a
	pop_Value
	"]
	4 --> 6
	5 -. Stack .-> 6
	5["
	b
	pop_Value
	"]
	4 --> 5
	3 -. Stack .-> 5
	3["
	c
	pop_u32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	4["
	tv
	f_getTopOfStackType
	"]
	9["
	eff__84
	push_Value
	"]
	4 --> 9
	6 --> 9
	6 -. Stack .-> 9
	8["
	cond__83
	u32.!=
	"]
	3 --> 8
	7 --> 8
	7["
	arg__91
	0
	"]
```
## I32_CONST
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	3 -. Codeptr .-> 1
	4 -. Stack .-> 1
	0 -. Locals Tables Memory Extra .-> 1
	0["
	Start
	"]
	4["
	eff__94
	push_u32
	"]
	3 --> 4
	0 -. Stack .-> 4
	3["
	x
	imm_readILEB32
	"]
	0 -. Codeptr .-> 3
```
## I32_ADD
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["
	eff__96
	push_u32
	"]
	5 --> 6
	4 -. Stack .-> 6
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
	5["
	r
	u32.+
	"]
	4 --> 5
	3 --> 5
```
## I32_SUB
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["
	eff__100
	push_u32
	"]
	5 --> 6
	4 -. Stack .-> 6
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
	5["
	r
	u32.-
	"]
	4 --> 5
	3 --> 5
```
## I32_MUL
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["
	eff__104
	push_u32
	"]
	5 --> 6
	4 -. Stack .-> 6
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
	5["
	r
	u32.*
	"]
	4 --> 5
	3 --> 5
```
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
	18 -. Codeptr Locals Tables Memory Extra .-> 1
	21 -. Stack .-> 1
	21["
	eff__108
	push_u32
	"]
	20 --> 21
	19 -. Stack .-> 21
	19["
	state phi Stack 	"]
	16 --> 19
	17 --> 19
	9 --> 19
	9["
	state phi Stack 	"]
	6 --> 9
	7 --> 9
	4 --> 9
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
	7["
	ret__123
	trapDivideByZero
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 7
	4 -. Stack .-> 7
	6["
	cond__122
	u32.==
	"]
	3 --> 6
	5 --> 6
	5["
	arg__125
	0
	"]
	17["
	ret__113
	trapDivideUnrepresentable
	"]
	8 -. Codeptr Locals Tables Memory Extra .-> 17
	9 -. Stack .-> 17
	8["
	state phi Codeptr Locals Tables Memory Extra 	"]
	6 --> 8
	7 --> 8
	0 --> 8
	16["
	cond__112
	bool.&&
	"]
	15 --> 16
	12 --> 16
	12["
	arg__115
	u32.==
	"]
	4 --> 12
	11 --> 12
	11["
	arg__120
	u32.view
	"]
	10 --> 11
	10["
	arg__121
	-2_147_483_648
	"]
	15["
	arg__114
	u32.==
	"]
	3 --> 15
	14 --> 15
	14["
	arg__117
	u32.view
	"]
	13 --> 14
	13["
	arg__118
	-1
	"]
	20["
	r
	U32_div_s
	"]
	4 --> 20
	3 --> 20
	18["
	state phi Codeptr Locals Tables Memory Extra 	"]
	16 --> 18
	17 --> 18
	8 --> 18
```
## I32_DIV_U
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	8 -. Codeptr Locals Tables Memory Extra .-> 1
	11 -. Stack .-> 1
	11["
	eff__126
	push_u32
	"]
	10 --> 11
	9 -. Stack .-> 11
	9["
	state phi Stack 	"]
	6 --> 9
	7 --> 9
	4 --> 9
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
	7["
	ret__131
	trapDivideByZero
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 7
	4 -. Stack .-> 7
	6["
	cond__130
	u32.==
	"]
	3 --> 6
	5 --> 6
	5["
	arg__133
	0
	"]
	10["
	r
	u32./
	"]
	4 --> 10
	3 --> 10
	8["
	state phi Codeptr Locals Tables Memory Extra 	"]
	6 --> 8
	7 --> 8
	0 --> 8
```
## I32_EQZ
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["
	state phi Stack 	"]
	5 --> 9
	7 --> 9
	8 --> 9
	8["
	eff__137
	push_u32
	"]
	4 --> 8
	3 -. Stack .-> 8
	3["
	a
	pop_u32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	4["
	arg__140
	0
	"]
	7["
	eff__135
	push_u32
	"]
	6 --> 7
	3 -. Stack .-> 7
	6["
	arg__136
	1
	"]
	5["
	cond__134
	u32.==
	"]
	3 --> 5
	4 --> 5
```
## I32_EQ
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10["
	state phi Stack 	"]
	5 --> 10
	7 --> 10
	9 --> 10
	9["
	eff__144
	push_u32
	"]
	8 --> 9
	4 -. Stack .-> 9
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
	8["
	arg__145
	0
	"]
	7["
	eff__142
	push_u32
	"]
	6 --> 7
	4 -. Stack .-> 7
	6["
	arg__143
	1
	"]
	5["
	cond__141
	u32.==
	"]
	4 --> 5
	3 --> 5
```
## I32_NE
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10["
	state phi Stack 	"]
	5 --> 10
	7 --> 10
	9 --> 10
	9["
	eff__151
	push_u32
	"]
	8 --> 9
	4 -. Stack .-> 9
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
	8["
	arg__152
	0
	"]
	7["
	eff__149
	push_u32
	"]
	6 --> 7
	4 -. Stack .-> 7
	6["
	arg__150
	1
	"]
	5["
	cond__148
	u32.!=
	"]
	4 --> 5
	3 --> 5
```
## I32_LT_U
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10["
	state phi Stack 	"]
	5 --> 10
	7 --> 10
	9 --> 10
	9["
	eff__158
	push_u32
	"]
	8 --> 9
	4 -. Stack .-> 9
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
	8["
	arg__159
	0
	"]
	7["
	eff__156
	push_u32
	"]
	6 --> 7
	4 -. Stack .-> 7
	6["
	arg__157
	1
	"]
	5["
	cond__155
	u32.<
	"]
	4 --> 5
	3 --> 5
```
## I32_LT_S
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10["
	state phi Stack 	"]
	5 --> 10
	7 --> 10
	9 --> 10
	9["
	eff__165
	push_u32
	"]
	8 --> 9
	4 -. Stack .-> 9
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
	8["
	arg__166
	0
	"]
	7["
	eff__163
	push_u32
	"]
	6 --> 7
	4 -. Stack .-> 7
	6["
	arg__164
	1
	"]
	5["
	cond__162
	U32_lt_s
	"]
	4 --> 5
	3 --> 5
```
## I32_LE_S
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10["
	state phi Stack 	"]
	5 --> 10
	7 --> 10
	9 --> 10
	9["
	eff__172
	push_u32
	"]
	8 --> 9
	4 -. Stack .-> 9
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
	8["
	arg__173
	0
	"]
	7["
	eff__170
	push_u32
	"]
	6 --> 7
	4 -. Stack .-> 7
	6["
	arg__171
	1
	"]
	5["
	cond__169
	U32_le_s
	"]
	4 --> 5
	3 --> 5
```
## I32_GT_U
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10["
	state phi Stack 	"]
	5 --> 10
	7 --> 10
	9 --> 10
	9["
	eff__179
	push_u32
	"]
	8 --> 9
	4 -. Stack .-> 9
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
	8["
	arg__180
	0
	"]
	7["
	eff__177
	push_u32
	"]
	6 --> 7
	4 -. Stack .-> 7
	6["
	arg__178
	1
	"]
	5["
	cond__176
	u32.>
	"]
	4 --> 5
	3 --> 5
```
## I32_LE_U
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10["
	state phi Stack 	"]
	5 --> 10
	7 --> 10
	9 --> 10
	9["
	eff__186
	push_u32
	"]
	8 --> 9
	4 -. Stack .-> 9
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
	8["
	arg__187
	0
	"]
	7["
	eff__184
	push_u32
	"]
	6 --> 7
	4 -. Stack .-> 7
	6["
	arg__185
	1
	"]
	5["
	cond__183
	u32.<=
	"]
	4 --> 5
	3 --> 5
```
## I32_GT_S
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10["
	state phi Stack 	"]
	5 --> 10
	7 --> 10
	9 --> 10
	9["
	eff__193
	push_u32
	"]
	8 --> 9
	4 -. Stack .-> 9
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
	8["
	arg__194
	0
	"]
	7["
	eff__191
	push_u32
	"]
	6 --> 7
	4 -. Stack .-> 7
	6["
	arg__192
	1
	"]
	5["
	cond__190
	U32_gt_s
	"]
	4 --> 5
	3 --> 5
```
## I32_GE_U
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10["
	state phi Stack 	"]
	5 --> 10
	7 --> 10
	9 --> 10
	9["
	eff__200
	push_u32
	"]
	8 --> 9
	4 -. Stack .-> 9
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
	8["
	arg__201
	0
	"]
	7["
	eff__198
	push_u32
	"]
	6 --> 7
	4 -. Stack .-> 7
	6["
	arg__199
	1
	"]
	5["
	cond__197
	U32_ge_u
	"]
	4 --> 5
	3 --> 5
```
## I32_GE_S
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10["
	state phi Stack 	"]
	5 --> 10
	7 --> 10
	9 --> 10
	9["
	eff__207
	push_u32
	"]
	8 --> 9
	4 -. Stack .-> 9
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
	8["
	arg__208
	0
	"]
	7["
	eff__205
	push_u32
	"]
	6 --> 7
	4 -. Stack .-> 7
	6["
	arg__206
	1
	"]
	5["
	cond__204
	U32_ge_s
	"]
	4 --> 5
	3 --> 5
```
## I32_AND
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["
	eff__211
	push_u32
	"]
	5 --> 6
	4 -. Stack .-> 6
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
	5["
	r
	u32.&
	"]
	4 --> 5
	3 --> 5
```
## I32_OR
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["
	eff__215
	push_u32
	"]
	5 --> 6
	4 -. Stack .-> 6
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
	5["
	r
	u32.|
	"]
	4 --> 5
	3 --> 5
```
## I32_XOR
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["
	eff__219
	push_u32
	"]
	5 --> 6
	4 -. Stack .-> 6
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
	5["
	r
	u32.^
	"]
	4 --> 5
	3 --> 5
```
## I32_SHL
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["
	eff__223
	push_u32
	"]
	5 --> 6
	4 -. Stack .-> 6
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
	5["
	r
	U32_shl
	"]
	4 --> 5
	3 --> 5
```
## I32_SHR_U
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["
	eff__227
	push_u32
	"]
	5 --> 6
	4 -. Stack .-> 6
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
	5["
	r
	U32_shr_u
	"]
	4 --> 5
	3 --> 5
```
## I32_SHR_S
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["
	eff__231
	push_u32
	"]
	5 --> 6
	4 -. Stack .-> 6
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
	5["
	r
	U32_shr_s
	"]
	4 --> 5
	3 --> 5
```
## I32_ROTL
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["
	eff__235
	push_u32
	"]
	5 --> 6
	4 -. Stack .-> 6
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
	5["
	r
	U32_rotl
	"]
	4 --> 5
	3 --> 5
```
## I32_ROTR
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["
	eff__239
	push_u32
	"]
	5 --> 6
	4 -. Stack .-> 6
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
	5["
	r
	U32_rotr
	"]
	4 --> 5
	3 --> 5
```
## I32_CLZ
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	5 -. Stack .-> 1
	5["
	eff__243
	push_u32
	"]
	4 --> 5
	3 -. Stack .-> 5
	3["
	a
	pop_u32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	4["
	r
	U32_clz
	"]
	3 --> 4
```
## I32_CTZ
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	5 -. Stack .-> 1
	5["
	eff__246
	push_u32
	"]
	4 --> 5
	3 -. Stack .-> 5
	3["
	a
	pop_u32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	4["
	r
	U32_ctz
	"]
	3 --> 4
```
## I32_POPCNT
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	5 -. Stack .-> 1
	5["
	eff__249
	push_u32
	"]
	4 --> 5
	3 -. Stack .-> 5
	3["
	a
	pop_u32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	4["
	r
	U32_popcnt
	"]
	3 --> 4
```
## I32_REM_S
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	8 -. Codeptr Locals Tables Memory Extra .-> 1
	11 -. Stack .-> 1
	11["
	eff__252
	push_u32
	"]
	10 --> 11
	9 -. Stack .-> 11
	9["
	state phi Stack 	"]
	6 --> 9
	7 --> 9
	4 --> 9
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
	7["
	ret__257
	trapDivideByZero
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 7
	4 -. Stack .-> 7
	6["
	cond__256
	u32.==
	"]
	3 --> 6
	5 --> 6
	5["
	arg__259
	0
	"]
	10["
	r
	U32_rem_s
	"]
	4 --> 10
	3 --> 10
	8["
	state phi Codeptr Locals Tables Memory Extra 	"]
	6 --> 8
	7 --> 8
	0 --> 8
```
## I32_REM_U
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	8 -. Codeptr Locals Tables Memory Extra .-> 1
	11 -. Stack .-> 1
	11["
	eff__260
	push_u32
	"]
	10 --> 11
	9 -. Stack .-> 11
	9["
	state phi Stack 	"]
	6 --> 9
	7 --> 9
	4 --> 9
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
	7["
	ret__265
	trapDivideByZero
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 7
	4 -. Stack .-> 7
	6["
	cond__264
	u32.==
	"]
	3 --> 6
	5 --> 6
	5["
	arg__267
	0
	"]
	10["
	r
	U32_rem_u
	"]
	4 --> 10
	3 --> 10
	8["
	state phi Codeptr Locals Tables Memory Extra 	"]
	6 --> 8
	7 --> 8
	0 --> 8
```
## I32_EXTEND8_S
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	5 -. Stack .-> 1
	5["
	eff__268
	push_u32
	"]
	4 --> 5
	3 -. Stack .-> 5
	3["
	a
	pop_u32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	4["
	r
	U32_extend8_s
	"]
	3 --> 4
```
## I32_EXTEND16_S
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	5 -. Stack .-> 1
	5["
	eff__271
	push_u32
	"]
	4 --> 5
	3 -. Stack .-> 5
	3["
	a
	pop_u32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	4["
	r
	U32_extend16_s
	"]
	3 --> 4
```
## I64_CONST
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	3 -. Codeptr .-> 1
	4 -. Stack .-> 1
	0 -. Locals Tables Memory Extra .-> 1
	0["
	Start
	"]
	4["
	eff__274
	push_u64
	"]
	3 --> 4
	0 -. Stack .-> 4
	3["
	x
	imm_readILEB64
	"]
	0 -. Codeptr .-> 3
```
## I64_ADD
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["
	eff__276
	push_u64
	"]
	5 --> 6
	4 -. Stack .-> 6
	4["
	a
	pop_u64
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	u64.+
	"]
	4 --> 5
	3 --> 5
```
## I64_SUB
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["
	eff__280
	push_u64
	"]
	5 --> 6
	4 -. Stack .-> 6
	4["
	a
	pop_u64
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	u64.-
	"]
	4 --> 5
	3 --> 5
```
## I64_MUL
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["
	eff__284
	push_u64
	"]
	5 --> 6
	4 -. Stack .-> 6
	4["
	a
	pop_u64
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	u64.*
	"]
	4 --> 5
	3 --> 5
```
## I64_DIV_S
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	18 -. Codeptr Locals Tables Memory Extra .-> 1
	21 -. Stack .-> 1
	21["
	eff__288
	push_u64
	"]
	20 --> 21
	19 -. Stack .-> 21
	19["
	state phi Stack 	"]
	16 --> 19
	17 --> 19
	9 --> 19
	9["
	state phi Stack 	"]
	6 --> 9
	7 --> 9
	4 --> 9
	4["
	a
	pop_u64
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	7["
	ret__303
	trapDivideByZero
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 7
	4 -. Stack .-> 7
	6["
	cond__302
	u64.==
	"]
	3 --> 6
	5 --> 6
	5["
	arg__305
	0
	"]
	17["
	ret__293
	trapDivideUnrepresentable
	"]
	8 -. Codeptr Locals Tables Memory Extra .-> 17
	9 -. Stack .-> 17
	8["
	state phi Codeptr Locals Tables Memory Extra 	"]
	6 --> 8
	7 --> 8
	0 --> 8
	16["
	cond__292
	bool.&&
	"]
	15 --> 16
	12 --> 16
	12["
	arg__295
	u64.==
	"]
	4 --> 12
	11 --> 12
	11["
	arg__300
	u64.view
	"]
	10 --> 11
	10["
	arg__301
	-9223372036854775808L
	"]
	15["
	arg__294
	u64.==
	"]
	3 --> 15
	14 --> 15
	14["
	arg__297
	u64.view
	"]
	13 --> 14
	13["
	arg__298
	-1
	"]
	20["
	r
	U64_div_s
	"]
	4 --> 20
	3 --> 20
	18["
	state phi Codeptr Locals Tables Memory Extra 	"]
	16 --> 18
	17 --> 18
	8 --> 18
```
## I64_DIV_U
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	8 -. Codeptr Locals Tables Memory Extra .-> 1
	11 -. Stack .-> 1
	11["
	eff__306
	push_u64
	"]
	10 --> 11
	9 -. Stack .-> 11
	9["
	state phi Stack 	"]
	6 --> 9
	7 --> 9
	4 --> 9
	4["
	a
	pop_u64
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	7["
	ret__311
	trapDivideByZero
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 7
	4 -. Stack .-> 7
	6["
	cond__310
	u64.==
	"]
	3 --> 6
	5 --> 6
	5["
	arg__313
	0
	"]
	10["
	r
	u64./
	"]
	4 --> 10
	3 --> 10
	8["
	state phi Codeptr Locals Tables Memory Extra 	"]
	6 --> 8
	7 --> 8
	0 --> 8
```
## I64_REM_S
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	8 -. Codeptr Locals Tables Memory Extra .-> 1
	11 -. Stack .-> 1
	11["
	eff__314
	push_u64
	"]
	10 --> 11
	9 -. Stack .-> 11
	9["
	state phi Stack 	"]
	6 --> 9
	7 --> 9
	4 --> 9
	4["
	a
	pop_u64
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	7["
	ret__319
	trapDivideByZero
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 7
	4 -. Stack .-> 7
	6["
	cond__318
	u64.==
	"]
	3 --> 6
	5 --> 6
	5["
	arg__321
	0
	"]
	10["
	r
	U64_rem_s
	"]
	4 --> 10
	3 --> 10
	8["
	state phi Codeptr Locals Tables Memory Extra 	"]
	6 --> 8
	7 --> 8
	0 --> 8
```
## I64_REM_U
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	8 -. Codeptr Locals Tables Memory Extra .-> 1
	11 -. Stack .-> 1
	11["
	eff__322
	push_u64
	"]
	10 --> 11
	9 -. Stack .-> 11
	9["
	state phi Stack 	"]
	6 --> 9
	7 --> 9
	4 --> 9
	4["
	a
	pop_u64
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	7["
	ret__327
	trapDivideByZero
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 7
	4 -. Stack .-> 7
	6["
	cond__326
	u64.==
	"]
	3 --> 6
	5 --> 6
	5["
	arg__329
	0
	"]
	10["
	r
	U64_rem_u
	"]
	4 --> 10
	3 --> 10
	8["
	state phi Codeptr Locals Tables Memory Extra 	"]
	6 --> 8
	7 --> 8
	0 --> 8
```
## I64_AND
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["
	eff__330
	push_u64
	"]
	5 --> 6
	4 -. Stack .-> 6
	4["
	a
	pop_u64
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	u64.&
	"]
	4 --> 5
	3 --> 5
```
## I64_OR
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["
	eff__334
	push_u64
	"]
	5 --> 6
	4 -. Stack .-> 6
	4["
	a
	pop_u64
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	u64.|
	"]
	4 --> 5
	3 --> 5
```
## I64_XOR
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["
	eff__338
	push_u64
	"]
	5 --> 6
	4 -. Stack .-> 6
	4["
	a
	pop_u64
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	u64.^
	"]
	4 --> 5
	3 --> 5
```
## I64_SHL
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["
	eff__342
	push_u64
	"]
	5 --> 6
	4 -. Stack .-> 6
	4["
	a
	pop_u64
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	U64_shl
	"]
	4 --> 5
	3 --> 5
```
## I64_SHR_U
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["
	eff__346
	push_u64
	"]
	5 --> 6
	4 -. Stack .-> 6
	4["
	a
	pop_u64
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	U64_shr_u
	"]
	4 --> 5
	3 --> 5
```
## I64_SHR_S
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["
	eff__350
	push_u64
	"]
	5 --> 6
	4 -. Stack .-> 6
	4["
	a
	pop_u64
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	U64_shr_s
	"]
	4 --> 5
	3 --> 5
```
## I64_ROTL
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["
	eff__354
	push_u64
	"]
	5 --> 6
	4 -. Stack .-> 6
	4["
	a
	pop_u64
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	U64_rotl
	"]
	4 --> 5
	3 --> 5
```
## I64_ROTR
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["
	eff__358
	push_u64
	"]
	5 --> 6
	4 -. Stack .-> 6
	4["
	a
	pop_u64
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	U64_rotr
	"]
	4 --> 5
	3 --> 5
```
## I64_CLZ
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	5 -. Stack .-> 1
	5["
	eff__362
	push_u64
	"]
	4 --> 5
	3 -. Stack .-> 5
	3["
	a
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	4["
	r
	U64_clz
	"]
	3 --> 4
```
## I64_CTZ
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	5 -. Stack .-> 1
	5["
	eff__365
	push_u64
	"]
	4 --> 5
	3 -. Stack .-> 5
	3["
	a
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	4["
	r
	U64_ctz
	"]
	3 --> 4
```
## I64_POPCNT
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	5 -. Stack .-> 1
	5["
	eff__368
	push_u64
	"]
	4 --> 5
	3 -. Stack .-> 5
	3["
	a
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	4["
	r
	U64_popcnt
	"]
	3 --> 4
```
## I64_EQZ
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["
	state phi Stack 	"]
	5 --> 9
	7 --> 9
	8 --> 9
	8["
	eff__374
	push_u32
	"]
	4 --> 8
	3 -. Stack .-> 8
	3["
	a
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	4["
	arg__377
	0
	"]
	7["
	eff__372
	push_u32
	"]
	6 --> 7
	3 -. Stack .-> 7
	6["
	arg__373
	1
	"]
	5["
	cond__371
	u64.==
	"]
	3 --> 5
	4 --> 5
```
## I64_EQ
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10["
	state phi Stack 	"]
	5 --> 10
	7 --> 10
	9 --> 10
	9["
	eff__381
	push_u32
	"]
	8 --> 9
	4 -. Stack .-> 9
	4["
	a
	pop_u64
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	8["
	arg__382
	0
	"]
	7["
	eff__379
	push_u32
	"]
	6 --> 7
	4 -. Stack .-> 7
	6["
	arg__380
	1
	"]
	5["
	cond__378
	u64.==
	"]
	4 --> 5
	3 --> 5
```
## I64_NE
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10["
	state phi Stack 	"]
	5 --> 10
	7 --> 10
	9 --> 10
	9["
	eff__388
	push_u32
	"]
	8 --> 9
	4 -. Stack .-> 9
	4["
	a
	pop_u64
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	8["
	arg__389
	0
	"]
	7["
	eff__386
	push_u32
	"]
	6 --> 7
	4 -. Stack .-> 7
	6["
	arg__387
	1
	"]
	5["
	cond__385
	u64.!=
	"]
	4 --> 5
	3 --> 5
```
## I64_LT_S
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10["
	state phi Stack 	"]
	5 --> 10
	7 --> 10
	9 --> 10
	9["
	eff__395
	push_u32
	"]
	8 --> 9
	4 -. Stack .-> 9
	4["
	a
	pop_u64
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	8["
	arg__396
	0
	"]
	7["
	eff__393
	push_u32
	"]
	6 --> 7
	4 -. Stack .-> 7
	6["
	arg__394
	1
	"]
	5["
	cond__392
	U64_lt_s
	"]
	4 --> 5
	3 --> 5
```
## I64_LT_U
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10["
	state phi Stack 	"]
	5 --> 10
	7 --> 10
	9 --> 10
	9["
	eff__402
	push_u32
	"]
	8 --> 9
	4 -. Stack .-> 9
	4["
	a
	pop_u64
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	8["
	arg__403
	0
	"]
	7["
	eff__400
	push_u32
	"]
	6 --> 7
	4 -. Stack .-> 7
	6["
	arg__401
	1
	"]
	5["
	cond__399
	u64.<
	"]
	4 --> 5
	3 --> 5
```
## I64_LE_S
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10["
	state phi Stack 	"]
	5 --> 10
	7 --> 10
	9 --> 10
	9["
	eff__409
	push_u32
	"]
	8 --> 9
	4 -. Stack .-> 9
	4["
	a
	pop_u64
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	8["
	arg__410
	0
	"]
	7["
	eff__407
	push_u32
	"]
	6 --> 7
	4 -. Stack .-> 7
	6["
	arg__408
	1
	"]
	5["
	cond__406
	U64_le_s
	"]
	4 --> 5
	3 --> 5
```
## I64_LE_U
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10["
	state phi Stack 	"]
	5 --> 10
	7 --> 10
	9 --> 10
	9["
	eff__416
	push_u32
	"]
	8 --> 9
	4 -. Stack .-> 9
	4["
	a
	pop_u64
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	8["
	arg__417
	0
	"]
	7["
	eff__414
	push_u32
	"]
	6 --> 7
	4 -. Stack .-> 7
	6["
	arg__415
	1
	"]
	5["
	cond__413
	u64.<=
	"]
	4 --> 5
	3 --> 5
```
## I64_GT_S
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10["
	state phi Stack 	"]
	5 --> 10
	7 --> 10
	9 --> 10
	9["
	eff__423
	push_u32
	"]
	8 --> 9
	4 -. Stack .-> 9
	4["
	a
	pop_u64
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	8["
	arg__424
	0
	"]
	7["
	eff__421
	push_u32
	"]
	6 --> 7
	4 -. Stack .-> 7
	6["
	arg__422
	1
	"]
	5["
	cond__420
	U64_gt_s
	"]
	4 --> 5
	3 --> 5
```
## I64_GT_U
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10["
	state phi Stack 	"]
	5 --> 10
	7 --> 10
	9 --> 10
	9["
	eff__430
	push_u32
	"]
	8 --> 9
	4 -. Stack .-> 9
	4["
	a
	pop_u64
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	8["
	arg__431
	0
	"]
	7["
	eff__428
	push_u32
	"]
	6 --> 7
	4 -. Stack .-> 7
	6["
	arg__429
	1
	"]
	5["
	cond__427
	u64.>
	"]
	4 --> 5
	3 --> 5
```
## I64_GE_S
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10["
	state phi Stack 	"]
	5 --> 10
	7 --> 10
	9 --> 10
	9["
	eff__437
	push_u32
	"]
	8 --> 9
	4 -. Stack .-> 9
	4["
	a
	pop_u64
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	8["
	arg__438
	0
	"]
	7["
	eff__435
	push_u32
	"]
	6 --> 7
	4 -. Stack .-> 7
	6["
	arg__436
	1
	"]
	5["
	cond__434
	U64_ge_s
	"]
	4 --> 5
	3 --> 5
```
## I64_GE_U
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10["
	state phi Stack 	"]
	5 --> 10
	7 --> 10
	9 --> 10
	9["
	eff__444
	push_u32
	"]
	8 --> 9
	4 -. Stack .-> 9
	4["
	a
	pop_u64
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	8["
	arg__445
	0
	"]
	7["
	eff__442
	push_u32
	"]
	6 --> 7
	4 -. Stack .-> 7
	6["
	arg__443
	1
	"]
	5["
	cond__441
	U64_ge_u
	"]
	4 --> 5
	3 --> 5
```
## I64_EXTEND8_S
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	5 -. Stack .-> 1
	5["
	eff__448
	push_u64
	"]
	4 --> 5
	3 -. Stack .-> 5
	3["
	a
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	4["
	r
	U64_extend8_s
	"]
	3 --> 4
```
## I64_EXTEND16_S
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	5 -. Stack .-> 1
	5["
	eff__451
	push_u64
	"]
	4 --> 5
	3 -. Stack .-> 5
	3["
	a
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	4["
	r
	U64_extend16_s
	"]
	3 --> 4
```
## I64_EXTEND32_S
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	5 -. Stack .-> 1
	5["
	eff__454
	push_u64
	"]
	4 --> 5
	3 -. Stack .-> 5
	3["
	a
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	4["
	r
	U64_extend32_s
	"]
	3 --> 4
```
## F32_CONST
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	3 -. Codeptr .-> 1
	5 -. Stack .-> 1
	0 -. Locals Tables Memory Extra .-> 1
	0["
	Start
	"]
	5["
	eff__457
	push_f32
	"]
	4 --> 5
	0 -. Stack .-> 5
	4["
	arg__458
	f32_reinterpret_u32
	"]
	3 --> 4
	3["
	x
	imm_readULEB32
	"]
	0 -. Codeptr .-> 3
```
## F32_ADD
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["
	eff__460
	push_f32
	"]
	5 --> 6
	4 -. Stack .-> 6
	4["
	a
	pop_f32
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_f32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	float.+
	"]
	4 --> 5
	3 --> 5
```
## F32_SUB
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["
	eff__464
	push_f32
	"]
	5 --> 6
	4 -. Stack .-> 6
	4["
	a
	pop_f32
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_f32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	float.-
	"]
	4 --> 5
	3 --> 5
```
## F32_MUL
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["
	eff__468
	push_f32
	"]
	5 --> 6
	4 -. Stack .-> 6
	4["
	a
	pop_f32
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_f32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	float.*
	"]
	4 --> 5
	3 --> 5
```
## F32_DIV
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	8 -. Codeptr Locals Tables Memory Extra .-> 1
	11 -. Stack .-> 1
	11["
	eff__472
	push_f32
	"]
	10 --> 11
	9 -. Stack .-> 11
	9["
	state phi Stack 	"]
	6 --> 9
	7 --> 9
	4 --> 9
	4["
	a
	pop_f32
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_f32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	7["
	ret__477
	trapDivideByZero
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 7
	4 -. Stack .-> 7
	6["
	cond__476
	float.==
	"]
	3 --> 6
	5 --> 6
	5["
	arg__479
	0.0f
	"]
	10["
	r
	float./
	"]
	4 --> 10
	3 --> 10
	8["
	state phi Codeptr Locals Tables Memory Extra 	"]
	6 --> 8
	7 --> 8
	0 --> 8
```
## F32_SQRT
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	5 -. Stack .-> 1
	5["
	eff__480
	push_f32
	"]
	4 --> 5
	3 -. Stack .-> 5
	3["
	a
	pop_f32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	4["
	r
	float.sqrt
	"]
	3 --> 4
```
## F32_EQ
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10["
	state phi Stack 	"]
	5 --> 10
	7 --> 10
	9 --> 10
	9["
	eff__486
	push_u32
	"]
	8 --> 9
	4 -. Stack .-> 9
	4["
	a
	pop_f32
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_f32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	8["
	arg__487
	0
	"]
	7["
	eff__484
	push_u32
	"]
	6 --> 7
	4 -. Stack .-> 7
	6["
	arg__485
	1
	"]
	5["
	cond__483
	float.==
	"]
	4 --> 5
	3 --> 5
```
## F32_NE
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10["
	state phi Stack 	"]
	5 --> 10
	7 --> 10
	9 --> 10
	9["
	eff__493
	push_u32
	"]
	8 --> 9
	4 -. Stack .-> 9
	4["
	a
	pop_f32
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_f32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	8["
	arg__494
	0
	"]
	7["
	eff__491
	push_u32
	"]
	6 --> 7
	4 -. Stack .-> 7
	6["
	arg__492
	1
	"]
	5["
	cond__490
	float.!=
	"]
	4 --> 5
	3 --> 5
```
## F32_LT
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10["
	state phi Stack 	"]
	5 --> 10
	7 --> 10
	9 --> 10
	9["
	eff__500
	push_u32
	"]
	8 --> 9
	4 -. Stack .-> 9
	4["
	a
	pop_f32
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_f32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	8["
	arg__501
	0
	"]
	7["
	eff__498
	push_u32
	"]
	6 --> 7
	4 -. Stack .-> 7
	6["
	arg__499
	1
	"]
	5["
	cond__497
	float.<
	"]
	4 --> 5
	3 --> 5
```
## F32_LE
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10["
	state phi Stack 	"]
	5 --> 10
	7 --> 10
	9 --> 10
	9["
	eff__507
	push_u32
	"]
	8 --> 9
	4 -. Stack .-> 9
	4["
	a
	pop_f32
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_f32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	8["
	arg__508
	0
	"]
	7["
	eff__505
	push_u32
	"]
	6 --> 7
	4 -. Stack .-> 7
	6["
	arg__506
	1
	"]
	5["
	cond__504
	float.<=
	"]
	4 --> 5
	3 --> 5
```
## F32_GT
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10["
	state phi Stack 	"]
	5 --> 10
	7 --> 10
	9 --> 10
	9["
	eff__514
	push_u32
	"]
	8 --> 9
	4 -. Stack .-> 9
	4["
	a
	pop_f32
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_f32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	8["
	arg__515
	0
	"]
	7["
	eff__512
	push_u32
	"]
	6 --> 7
	4 -. Stack .-> 7
	6["
	arg__513
	1
	"]
	5["
	cond__511
	float.>
	"]
	4 --> 5
	3 --> 5
```
## BR
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	5 -. Codeptr Stack Locals Tables Memory Extra .-> 1
	5["
	ret__518
	doBranch
	"]
	4 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Locals Tables Memory Extra .-> 5
	0["
	Start
	"]
	3["
	depth
	imm_readULEB32
	"]
	0 -. Codeptr .-> 3
	4["
	label
	f_getLabel
	"]
	3 --> 4
```
## BR_IF
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	10 -. Codeptr Stack Locals Tables Memory Extra .-> 1
	10["
	state phi Codeptr Stack Locals Tables Memory Extra 	"]
	7 --> 10
	8 --> 10
	9 --> 10
	9["
	ret__525
	doFallthru
	"]
	3 -. Codeptr .-> 9
	5 -. Stack .-> 9
	0 -. Locals Tables Memory Extra .-> 9
	0["
	Start
	"]
	5["
	cond
	pop_u32
	"]
	0 -. Stack .-> 5
	3["
	depth
	imm_readULEB32
	"]
	0 -. Codeptr .-> 3
	8["
	ret__523
	doBranch
	"]
	4 --> 8
	3 -. Codeptr .-> 8
	5 -. Stack .-> 8
	0 -. Locals Tables Memory Extra .-> 8
	4["
	label
	f_getLabel
	"]
	3 --> 4
	7["
	cond__522
	u32.!=
	"]
	5 --> 7
	6 --> 7
	6["
	arg__527
	0
	"]
```
## BR_TABLE
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	5 -. Codeptr Stack Locals Tables Memory Extra .-> 1
	5["
	eff__530
	doSwitch
	"]
	3 --> 5
	4 --> 5
	3 -. Codeptr .-> 5
	4 -. Stack .-> 5
	0 -. Locals Tables Memory Extra .-> 5
	0["
	Start
	"]
	4["
	key
	pop_u32
	"]
	0 -. Stack .-> 4
	3["
	labels
	imm_readLabels
	"]
	0 -. Codeptr .-> 3
```
## BLOCK
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	4 -. Codeptr Stack Locals Tables Memory Extra .-> 1
	4["
	eff__534
	doBlock
	"]
	3 --> 4
	3 -. Codeptr .-> 4
	0 -. Stack Locals Tables Memory Extra .-> 4
	0["
	Start
	"]
	3["
	bt
	imm_readBlockType
	"]
	0 -. Codeptr .-> 3
```
## LOOP
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	4 -. Codeptr Stack Locals Tables Memory Extra .-> 1
	4["
	eff__536
	doLoop
	"]
	3 --> 4
	3 -. Codeptr .-> 4
	0 -. Stack Locals Tables Memory Extra .-> 4
	0["
	Start
	"]
	3["
	bt
	imm_readBlockType
	"]
	0 -. Codeptr .-> 3
```
## TRY
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	4 -. Codeptr Stack Locals Tables Memory Extra .-> 1
	4["
	eff__538
	doTry
	"]
	3 --> 4
	3 -. Codeptr .-> 4
	0 -. Stack Locals Tables Memory Extra .-> 4
	0["
	Start
	"]
	3["
	bt
	imm_readBlockType
	"]
	0 -. Codeptr .-> 3
```
## IF
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	10 -. Codeptr Stack Locals Tables Memory Extra .-> 1
	10["
	state phi Codeptr Stack Locals Tables Memory Extra 	"]
	7 --> 10
	8 --> 10
	9 --> 10
	9["
	ret__543
	doFallthru
	"]
	5 -. Codeptr Stack Locals Tables Memory Extra .-> 9
	5["
	label
	doIf
	"]
	3 --> 5
	3 -. Codeptr .-> 5
	4 -. Stack .-> 5
	0 -. Locals Tables Memory Extra .-> 5
	0["
	Start
	"]
	4["
	cond
	pop_u32
	"]
	0 -. Stack .-> 4
	3["
	bt
	imm_readBlockType
	"]
	0 -. Codeptr .-> 3
	8["
	ret__541
	doBranch
	"]
	5 --> 8
	5 -. Codeptr Stack Locals Tables Memory Extra .-> 8
	7["
	cond__540
	u32.==
	"]
	4 --> 7
	6 --> 7
	6["
	arg__545
	0
	"]
```
## ELSE
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	4 -. Codeptr Stack Locals Tables Memory Extra .-> 1
	4["
	ret__548
	doBranch
	"]
	3 --> 4
	3 -. Codeptr Stack Locals Tables Memory Extra .-> 4
	3["
	label
	doElse
	"]
	0 -. Codeptr Stack Locals Tables Memory Extra .-> 3
	0["
	Start
	"]
```
## END
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	6 -. Codeptr Stack Locals Tables Memory Extra .-> 1
	6["
	state phi Codeptr Stack Locals Tables Memory Extra 	"]
	4 --> 6
	5 --> 6
	3 --> 6
	3["
	eff__553
	doEnd
	"]
	0 -. Codeptr Stack Locals Tables Memory Extra .-> 3
	0["
	Start
	"]
	5["
	ret__552
	doReturn
	"]
	3 -. Codeptr Stack Locals Tables Memory Extra .-> 5
	4["
	cond__551
	f_isAtEnd
	"]
```
## RETURN
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	3 -. Codeptr Stack Locals Tables Memory Extra .-> 1
	3["
	ret__554
	doReturn
	"]
	0 -. Codeptr Stack Locals Tables Memory Extra .-> 3
	0["
	Start
	"]
```
## REF_NULL
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	3 -. Codeptr .-> 1
	5 -. Stack .-> 1
	0 -. Locals Tables Memory Extra .-> 1
	0["
	Start
	"]
	5["
	eff__555
	push_Object
	"]
	4 --> 5
	0 -. Stack .-> 5
	4["
	arg__556
	object_Null
	"]
	3["
	idx
	imm_readULEB32
	"]
	0 -. Codeptr .-> 3
```
## REF_IS_NULL
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["
	state phi Stack 	"]
	4 --> 9
	6 --> 9
	8 --> 9
	8["
	eff__560
	push_u32
	"]
	7 --> 8
	3 -. Stack .-> 8
	3["
	obj
	pop_Object
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	7["
	arg__561
	0
	"]
	6["
	eff__558
	push_u32
	"]
	5 --> 6
	3 -. Stack .-> 6
	5["
	arg__559
	1
	"]
	4["
	cond__557
	object_isNull
	"]
	3 --> 4
```
## REF_AS_NON_NULL
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	6 -. Codeptr Locals Tables Memory Extra .-> 1
	8 -. Stack .-> 1
	8["
	eff__563
	push_Object
	"]
	3 --> 8
	7 -. Stack .-> 8
	7["
	state phi Stack 	"]
	4 --> 7
	5 --> 7
	3 --> 7
	3["
	obj
	pop_Object
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	eff__566
	trapNull
	"]
	0 -. Codeptr Locals Tables Memory Extra .-> 5
	3 -. Stack .-> 5
	4["
	cond__565
	object_isNull
	"]
	3 --> 4
	6["
	state phi Codeptr Locals Tables Memory Extra 	"]
	4 --> 6
	5 --> 6
	0 --> 6
```
## STRUCT_NEW
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	3 -. Codeptr .-> 1
	6 -. Stack .-> 1
	0 -. Locals Tables Memory Extra .-> 1
	0["
	Start
	"]
	6["
	eff__568
	push_Object
	"]
	5 --> 6
	0 -. Stack .-> 6
	5["
	obj
	object_New
	"]
	4 --> 5
	4["
	sig
	m_getSignature
	"]
	3 --> 4
	3["
	struct_idx
	imm_readULEB32
	"]
	0 -. Codeptr .-> 3
```
## STRUCT_GET
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	10 -. Codeptr .-> 1
	11 -. Stack .-> 1
	12 -. Locals Tables Memory Extra .-> 1
	12["
	state phi Locals Tables Memory Extra 	"]
	8 --> 12
	9 --> 12
	0 --> 12
	0["
	Start
	"]
	9["
	ret__598
	trapNull
	"]
	4 -. Codeptr .-> 9
	7 -. Stack .-> 9
	0 -. Locals Tables Memory Extra .-> 9
	7["
	obj
	pop_Object
	"]
	0 -. Stack .-> 7
	4["
	field_index
	imm_readULEB32
	"]
	3 -. Codeptr .-> 4
	3["
	struct_index
	imm_readULEB32
	"]
	0 -. Codeptr .-> 3
	8["
	cond__597
	object_isNull
	"]
	7 --> 8
	11["
	state phi Stack 	"]
	8 --> 11
	9 --> 11
	7 --> 11
	10["
	state phi Codeptr 	"]
	8 --> 10
	9 --> 10
	4 --> 10
```
## STRUCT_GET_S
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	10 -. Codeptr .-> 1
	11 -. Stack .-> 1
	12 -. Locals Tables Memory Extra .-> 1
	12["
	state phi Locals Tables Memory Extra 	"]
	8 --> 12
	9 --> 12
	0 --> 12
	0["
	Start
	"]
	9["
	ret__617
	trapNull
	"]
	4 -. Codeptr .-> 9
	7 -. Stack .-> 9
	0 -. Locals Tables Memory Extra .-> 9
	7["
	obj
	pop_Object
	"]
	0 -. Stack .-> 7
	4["
	field_index
	imm_readULEB32
	"]
	3 -. Codeptr .-> 4
	3["
	struct_index
	imm_readULEB32
	"]
	0 -. Codeptr .-> 3
	8["
	cond__616
	object_isNull
	"]
	7 --> 8
	11["
	state phi Stack 	"]
	8 --> 11
	9 --> 11
	7 --> 11
	10["
	state phi Codeptr 	"]
	8 --> 10
	9 --> 10
	4 --> 10
```
## STRUCT_GET_U
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	10 -. Codeptr .-> 1
	11 -. Stack .-> 1
	12 -. Locals Tables Memory Extra .-> 1
	12["
	state phi Locals Tables Memory Extra 	"]
	8 --> 12
	9 --> 12
	0 --> 12
	0["
	Start
	"]
	9["
	ret__636
	trapNull
	"]
	4 -. Codeptr .-> 9
	7 -. Stack .-> 9
	0 -. Locals Tables Memory Extra .-> 9
	7["
	obj
	pop_Object
	"]
	0 -. Stack .-> 7
	4["
	field_index
	imm_readULEB32
	"]
	3 -. Codeptr .-> 4
	3["
	struct_index
	imm_readULEB32
	"]
	0 -. Codeptr .-> 3
	8["
	cond__635
	object_isNull
	"]
	7 --> 8
	11["
	state phi Stack 	"]
	8 --> 11
	9 --> 11
	7 --> 11
	10["
	state phi Codeptr 	"]
	8 --> 10
	9 --> 10
	4 --> 10
```
## I32_LOAD
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	21 -. Codeptr .-> 1
	22 -. Stack .-> 1
	0 -. Locals Tables Memory Extra .-> 1
	0["
	Start
	"]
	22["
	state phi Stack 	"]
	12 --> 22
	16 --> 22
	20 --> 22
	20["
	eff__649
	push_u32
	"]
	19 --> 20
	18 -. Stack .-> 20
	18["
	index
	pop_u32
	"]
	0 -. Stack .-> 18
	19["
	val
	mach_readMemory32_u32
	"]
	10 --> 19
	18 --> 19
	17 --> 19
	17["
	offset
	imm_readULEB32
	"]
	11 -. Codeptr .-> 17
	11["
	state phi Codeptr 	"]
	8 --> 11
	9 --> 11
	3 --> 11
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	9["
	memindex__656
	imm_readULEB32
	"]
	3 -. Codeptr .-> 9
	8["
	cond__655
	u8.!=
	"]
	7 --> 8
	5 --> 8
	5["
	arg__658
	0
	"]
	7["
	arg__657
	u8.&
	"]
	3 --> 7
	6 --> 7
	6["
	arg__660
	0x40u8
	"]
	10["
	memindex
	phi
	"]
	8 --> 10
	4 --> 10
	9 --> 10
	4["
	memindex
	0u
	"]
	16["
	eff__644
	push_u32
	"]
	15 --> 16
	14 -. Stack .-> 16
	14["
	index
	pop_u64
	"]
	0 -. Stack .-> 14
	15["
	val
	mach_readMemory64_u32
	"]
	10 --> 15
	14 --> 15
	13 --> 15
	13["
	offset
	imm_readULEB64
	"]
	11 -. Codeptr .-> 13
	12["
	cond__643
	m_isMemory64
	"]
	10 --> 12
	21["
	state phi Codeptr 	"]
	12 --> 21
	13 --> 21
	17 --> 21
```
## I32_LOAD8_U
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	21 -. Codeptr .-> 1
	22 -. Stack .-> 1
	0 -. Locals Tables Memory Extra .-> 1
	0["
	Start
	"]
	22["
	state phi Stack 	"]
	12 --> 22
	16 --> 22
	20 --> 22
	20["
	eff__667
	push_u32
	"]
	19 --> 20
	18 -. Stack .-> 20
	18["
	index
	pop_u32
	"]
	0 -. Stack .-> 18
	19["
	val
	mach_readMemory32_u8
	"]
	10 --> 19
	18 --> 19
	17 --> 19
	17["
	offset
	imm_readULEB32
	"]
	11 -. Codeptr .-> 17
	11["
	state phi Codeptr 	"]
	8 --> 11
	9 --> 11
	3 --> 11
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	9["
	memindex__674
	imm_readULEB32
	"]
	3 -. Codeptr .-> 9
	8["
	cond__673
	u8.!=
	"]
	7 --> 8
	5 --> 8
	5["
	arg__676
	0
	"]
	7["
	arg__675
	u8.&
	"]
	3 --> 7
	6 --> 7
	6["
	arg__678
	0x40u8
	"]
	10["
	memindex
	phi
	"]
	8 --> 10
	4 --> 10
	9 --> 10
	4["
	memindex
	0u
	"]
	16["
	eff__662
	push_u32
	"]
	15 --> 16
	14 -. Stack .-> 16
	14["
	index
	pop_u64
	"]
	0 -. Stack .-> 14
	15["
	val
	mach_readMemory64_u8
	"]
	10 --> 15
	14 --> 15
	13 --> 15
	13["
	offset
	imm_readULEB64
	"]
	11 -. Codeptr .-> 13
	12["
	cond__661
	m_isMemory64
	"]
	10 --> 12
	21["
	state phi Codeptr 	"]
	12 --> 21
	13 --> 21
	17 --> 21
```
## I32_LOAD16_S
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	21 -. Codeptr .-> 1
	22 -. Stack .-> 1
	0 -. Locals Tables Memory Extra .-> 1
	0["
	Start
	"]
	22["
	state phi Stack 	"]
	12 --> 22
	16 --> 22
	20 --> 22
	20["
	eff__685
	push_u32
	"]
	19 --> 20
	18 -. Stack .-> 20
	18["
	index
	pop_u32
	"]
	0 -. Stack .-> 18
	19["
	val
	mach_readMemory32_u16
	"]
	10 --> 19
	18 --> 19
	17 --> 19
	17["
	offset
	imm_readULEB32
	"]
	11 -. Codeptr .-> 17
	11["
	state phi Codeptr 	"]
	8 --> 11
	9 --> 11
	3 --> 11
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	9["
	memindex__692
	imm_readULEB32
	"]
	3 -. Codeptr .-> 9
	8["
	cond__691
	u8.!=
	"]
	7 --> 8
	5 --> 8
	5["
	arg__694
	0
	"]
	7["
	arg__693
	u8.&
	"]
	3 --> 7
	6 --> 7
	6["
	arg__696
	0x40u8
	"]
	10["
	memindex
	phi
	"]
	8 --> 10
	4 --> 10
	9 --> 10
	4["
	memindex
	0u
	"]
	16["
	eff__680
	push_u32
	"]
	15 --> 16
	14 -. Stack .-> 16
	14["
	index
	pop_u64
	"]
	0 -. Stack .-> 14
	15["
	val
	mach_readMemory64_u16
	"]
	10 --> 15
	14 --> 15
	13 --> 15
	13["
	offset
	imm_readULEB64
	"]
	11 -. Codeptr .-> 13
	12["
	cond__679
	m_isMemory64
	"]
	10 --> 12
	21["
	state phi Codeptr 	"]
	12 --> 21
	13 --> 21
	17 --> 21
```
## I64_LOAD
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	21 -. Codeptr .-> 1
	22 -. Stack .-> 1
	0 -. Locals Tables Memory Extra .-> 1
	0["
	Start
	"]
	22["
	state phi Stack 	"]
	12 --> 22
	16 --> 22
	20 --> 22
	20["
	eff__703
	push_u64
	"]
	19 --> 20
	18 -. Stack .-> 20
	18["
	index
	pop_u32
	"]
	0 -. Stack .-> 18
	19["
	val
	mach_readMemory32_u64
	"]
	10 --> 19
	18 --> 19
	17 --> 19
	17["
	offset
	imm_readULEB32
	"]
	11 -. Codeptr .-> 17
	11["
	state phi Codeptr 	"]
	8 --> 11
	9 --> 11
	3 --> 11
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	9["
	memindex__710
	imm_readULEB32
	"]
	3 -. Codeptr .-> 9
	8["
	cond__709
	u8.!=
	"]
	7 --> 8
	5 --> 8
	5["
	arg__712
	0
	"]
	7["
	arg__711
	u8.&
	"]
	3 --> 7
	6 --> 7
	6["
	arg__714
	0x40u8
	"]
	10["
	memindex
	phi
	"]
	8 --> 10
	4 --> 10
	9 --> 10
	4["
	memindex
	0u
	"]
	16["
	eff__698
	push_u64
	"]
	15 --> 16
	14 -. Stack .-> 16
	14["
	index
	pop_u64
	"]
	0 -. Stack .-> 14
	15["
	val
	mach_readMemory64_u64
	"]
	10 --> 15
	14 --> 15
	13 --> 15
	13["
	offset
	imm_readULEB64
	"]
	11 -. Codeptr .-> 13
	12["
	cond__697
	m_isMemory64
	"]
	10 --> 12
	21["
	state phi Codeptr 	"]
	12 --> 21
	13 --> 21
	17 --> 21
```
## F32_LOAD
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	21 -. Codeptr .-> 1
	22 -. Stack .-> 1
	0 -. Locals Tables Memory Extra .-> 1
	0["
	Start
	"]
	22["
	state phi Stack 	"]
	12 --> 22
	16 --> 22
	20 --> 22
	20["
	eff__721
	push_f32
	"]
	19 --> 20
	18 -. Stack .-> 20
	18["
	index
	pop_u32
	"]
	0 -. Stack .-> 18
	19["
	val
	mach_readMemory32_f32
	"]
	10 --> 19
	18 --> 19
	17 --> 19
	17["
	offset
	imm_readULEB32
	"]
	11 -. Codeptr .-> 17
	11["
	state phi Codeptr 	"]
	8 --> 11
	9 --> 11
	3 --> 11
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	9["
	memindex__728
	imm_readULEB32
	"]
	3 -. Codeptr .-> 9
	8["
	cond__727
	u8.!=
	"]
	7 --> 8
	5 --> 8
	5["
	arg__730
	0
	"]
	7["
	arg__729
	u8.&
	"]
	3 --> 7
	6 --> 7
	6["
	arg__732
	0x40u8
	"]
	10["
	memindex
	phi
	"]
	8 --> 10
	4 --> 10
	9 --> 10
	4["
	memindex
	0u
	"]
	16["
	eff__716
	push_f32
	"]
	15 --> 16
	14 -. Stack .-> 16
	14["
	index
	pop_u64
	"]
	0 -. Stack .-> 14
	15["
	val
	mach_readMemory64_f32
	"]
	10 --> 15
	14 --> 15
	13 --> 15
	13["
	offset
	imm_readULEB64
	"]
	11 -. Codeptr .-> 13
	12["
	cond__715
	m_isMemory64
	"]
	10 --> 12
	21["
	state phi Codeptr 	"]
	12 --> 21
	13 --> 21
	17 --> 21
```
## F64_LOAD
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	21 -. Codeptr .-> 1
	22 -. Stack .-> 1
	0 -. Locals Tables Memory Extra .-> 1
	0["
	Start
	"]
	22["
	state phi Stack 	"]
	12 --> 22
	16 --> 22
	20 --> 22
	20["
	eff__739
	push_f64
	"]
	19 --> 20
	18 -. Stack .-> 20
	18["
	index
	pop_u32
	"]
	0 -. Stack .-> 18
	19["
	val
	mach_readMemory32_f64
	"]
	10 --> 19
	18 --> 19
	17 --> 19
	17["
	offset
	imm_readULEB32
	"]
	11 -. Codeptr .-> 17
	11["
	state phi Codeptr 	"]
	8 --> 11
	9 --> 11
	3 --> 11
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	9["
	memindex__746
	imm_readULEB32
	"]
	3 -. Codeptr .-> 9
	8["
	cond__745
	u8.!=
	"]
	7 --> 8
	5 --> 8
	5["
	arg__748
	0
	"]
	7["
	arg__747
	u8.&
	"]
	3 --> 7
	6 --> 7
	6["
	arg__750
	0x40u8
	"]
	10["
	memindex
	phi
	"]
	8 --> 10
	4 --> 10
	9 --> 10
	4["
	memindex
	0u
	"]
	16["
	eff__734
	push_f64
	"]
	15 --> 16
	14 -. Stack .-> 16
	14["
	index
	pop_u64
	"]
	0 -. Stack .-> 14
	15["
	val
	mach_readMemory64_f64
	"]
	10 --> 15
	14 --> 15
	13 --> 15
	13["
	offset
	imm_readULEB64
	"]
	11 -. Codeptr .-> 13
	12["
	cond__733
	m_isMemory64
	"]
	10 --> 12
	21["
	state phi Codeptr 	"]
	12 --> 21
	13 --> 21
	17 --> 21
```
## I32_STORE
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	20 -. Codeptr .-> 1
	21 -. Stack .-> 1
	0 -. Locals Tables Extra .-> 1
	22 -. Memory .-> 1
	22["
	state phi Memory 	"]
	13 --> 22
	16 --> 22
	19 --> 22
	19["
	eff__757
	mach_writeMemory32_u32
	"]
	10 --> 19
	18 --> 19
	17 --> 19
	12 --> 19
	0 -. Memory .-> 19
	0["
	Start
	"]
	12["
	val
	pop_u32
	"]
	0 -. Stack .-> 12
	17["
	offset
	imm_readULEB32
	"]
	11 -. Codeptr .-> 17
	11["
	state phi Codeptr 	"]
	8 --> 11
	9 --> 11
	3 --> 11
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	9["
	memindex__764
	imm_readULEB32
	"]
	3 -. Codeptr .-> 9
	8["
	cond__763
	u8.!=
	"]
	7 --> 8
	5 --> 8
	5["
	arg__766
	0
	"]
	7["
	arg__765
	u8.&
	"]
	3 --> 7
	6 --> 7
	6["
	arg__768
	0x40u8
	"]
	18["
	index
	pop_u32
	"]
	12 -. Stack .-> 18
	10["
	memindex
	phi
	"]
	8 --> 10
	4 --> 10
	9 --> 10
	4["
	memindex
	0u
	"]
	16["
	eff__752
	mach_writeMemory64_u32
	"]
	10 --> 16
	15 --> 16
	14 --> 16
	12 --> 16
	0 -. Memory .-> 16
	14["
	offset
	imm_readULEB64
	"]
	11 -. Codeptr .-> 14
	15["
	index
	pop_u64
	"]
	12 -. Stack .-> 15
	13["
	cond__751
	m_isMemory64
	"]
	10 --> 13
	21["
	state phi Stack 	"]
	13 --> 21
	15 --> 21
	18 --> 21
	20["
	state phi Codeptr 	"]
	13 --> 20
	14 --> 20
	17 --> 20
```
## I32_STORE8
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	20 -. Codeptr .-> 1
	21 -. Stack .-> 1
	0 -. Locals Tables Extra .-> 1
	22 -. Memory .-> 1
	22["
	state phi Memory 	"]
	13 --> 22
	16 --> 22
	19 --> 22
	19["
	eff__775
	mach_writeMemory32_u8
	"]
	10 --> 19
	18 --> 19
	17 --> 19
	12 --> 19
	0 -. Memory .-> 19
	0["
	Start
	"]
	12["
	val
	pop_u32
	"]
	0 -. Stack .-> 12
	17["
	offset
	imm_readULEB32
	"]
	11 -. Codeptr .-> 17
	11["
	state phi Codeptr 	"]
	8 --> 11
	9 --> 11
	3 --> 11
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	9["
	memindex__782
	imm_readULEB32
	"]
	3 -. Codeptr .-> 9
	8["
	cond__781
	u8.!=
	"]
	7 --> 8
	5 --> 8
	5["
	arg__784
	0
	"]
	7["
	arg__783
	u8.&
	"]
	3 --> 7
	6 --> 7
	6["
	arg__786
	0x40u8
	"]
	18["
	index
	pop_u32
	"]
	12 -. Stack .-> 18
	10["
	memindex
	phi
	"]
	8 --> 10
	4 --> 10
	9 --> 10
	4["
	memindex
	0u
	"]
	16["
	eff__770
	mach_writeMemory64_u8
	"]
	10 --> 16
	15 --> 16
	14 --> 16
	12 --> 16
	0 -. Memory .-> 16
	14["
	offset
	imm_readULEB64
	"]
	11 -. Codeptr .-> 14
	15["
	index
	pop_u64
	"]
	12 -. Stack .-> 15
	13["
	cond__769
	m_isMemory64
	"]
	10 --> 13
	21["
	state phi Stack 	"]
	13 --> 21
	15 --> 21
	18 --> 21
	20["
	state phi Codeptr 	"]
	13 --> 20
	14 --> 20
	17 --> 20
```
## I32_STORE16
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	20 -. Codeptr .-> 1
	21 -. Stack .-> 1
	0 -. Locals Tables Extra .-> 1
	22 -. Memory .-> 1
	22["
	state phi Memory 	"]
	13 --> 22
	16 --> 22
	19 --> 22
	19["
	eff__793
	mach_writeMemory32_u16
	"]
	10 --> 19
	18 --> 19
	17 --> 19
	12 --> 19
	0 -. Memory .-> 19
	0["
	Start
	"]
	12["
	val
	pop_u32
	"]
	0 -. Stack .-> 12
	17["
	offset
	imm_readULEB32
	"]
	11 -. Codeptr .-> 17
	11["
	state phi Codeptr 	"]
	8 --> 11
	9 --> 11
	3 --> 11
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	9["
	memindex__800
	imm_readULEB32
	"]
	3 -. Codeptr .-> 9
	8["
	cond__799
	u8.!=
	"]
	7 --> 8
	5 --> 8
	5["
	arg__802
	0
	"]
	7["
	arg__801
	u8.&
	"]
	3 --> 7
	6 --> 7
	6["
	arg__804
	0x40u8
	"]
	18["
	index
	pop_u32
	"]
	12 -. Stack .-> 18
	10["
	memindex
	phi
	"]
	8 --> 10
	4 --> 10
	9 --> 10
	4["
	memindex
	0u
	"]
	16["
	eff__788
	mach_writeMemory64_u16
	"]
	10 --> 16
	15 --> 16
	14 --> 16
	12 --> 16
	0 -. Memory .-> 16
	14["
	offset
	imm_readULEB64
	"]
	11 -. Codeptr .-> 14
	15["
	index
	pop_u64
	"]
	12 -. Stack .-> 15
	13["
	cond__787
	m_isMemory64
	"]
	10 --> 13
	21["
	state phi Stack 	"]
	13 --> 21
	15 --> 21
	18 --> 21
	20["
	state phi Codeptr 	"]
	13 --> 20
	14 --> 20
	17 --> 20
```
## I64_STORE
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	20 -. Codeptr .-> 1
	21 -. Stack .-> 1
	0 -. Locals Tables Extra .-> 1
	22 -. Memory .-> 1
	22["
	state phi Memory 	"]
	13 --> 22
	16 --> 22
	19 --> 22
	19["
	eff__811
	mach_writeMemory32_u64
	"]
	10 --> 19
	18 --> 19
	17 --> 19
	12 --> 19
	0 -. Memory .-> 19
	0["
	Start
	"]
	12["
	val
	pop_u64
	"]
	0 -. Stack .-> 12
	17["
	offset
	imm_readULEB32
	"]
	11 -. Codeptr .-> 17
	11["
	state phi Codeptr 	"]
	8 --> 11
	9 --> 11
	3 --> 11
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	9["
	memindex__818
	imm_readULEB32
	"]
	3 -. Codeptr .-> 9
	8["
	cond__817
	u8.!=
	"]
	7 --> 8
	5 --> 8
	5["
	arg__820
	0
	"]
	7["
	arg__819
	u8.&
	"]
	3 --> 7
	6 --> 7
	6["
	arg__822
	0x40u8
	"]
	18["
	index
	pop_u32
	"]
	12 -. Stack .-> 18
	10["
	memindex
	phi
	"]
	8 --> 10
	4 --> 10
	9 --> 10
	4["
	memindex
	0u
	"]
	16["
	eff__806
	mach_writeMemory64_u64
	"]
	10 --> 16
	15 --> 16
	14 --> 16
	12 --> 16
	0 -. Memory .-> 16
	14["
	offset
	imm_readULEB64
	"]
	11 -. Codeptr .-> 14
	15["
	index
	pop_u64
	"]
	12 -. Stack .-> 15
	13["
	cond__805
	m_isMemory64
	"]
	10 --> 13
	21["
	state phi Stack 	"]
	13 --> 21
	15 --> 21
	18 --> 21
	20["
	state phi Codeptr 	"]
	13 --> 20
	14 --> 20
	17 --> 20
```
## F32_STORE
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	20 -. Codeptr .-> 1
	21 -. Stack .-> 1
	0 -. Locals Tables Memory Extra .-> 1
	0["
	Start
	"]
	21["
	state phi Stack 	"]
	13 --> 21
	15 --> 21
	18 --> 21
	18["
	index
	pop_u32
	"]
	12 -. Stack .-> 18
	12["
	val
	pop_f32
	"]
	0 -. Stack .-> 12
	15["
	index
	pop_u64
	"]
	12 -. Stack .-> 15
	13["
	cond__823
	m_isMemory64
	"]
	10 --> 13
	10["
	memindex
	phi
	"]
	8 --> 10
	4 --> 10
	9 --> 10
	9["
	memindex__836
	imm_readULEB32
	"]
	3 -. Codeptr .-> 9
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	4["
	memindex
	0u
	"]
	8["
	cond__835
	u8.!=
	"]
	7 --> 8
	5 --> 8
	5["
	arg__838
	0
	"]
	7["
	arg__837
	u8.&
	"]
	3 --> 7
	6 --> 7
	6["
	arg__840
	0x40u8
	"]
	20["
	state phi Codeptr 	"]
	13 --> 20
	14 --> 20
	17 --> 20
	17["
	offset
	imm_readULEB32
	"]
	11 -. Codeptr .-> 17
	11["
	state phi Codeptr 	"]
	8 --> 11
	9 --> 11
	3 --> 11
	14["
	offset
	imm_readULEB64
	"]
	11 -. Codeptr .-> 14
```
## F64_STORE
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	20 -. Codeptr .-> 1
	21 -. Stack .-> 1
	0 -. Locals Tables Extra .-> 1
	22 -. Memory .-> 1
	22["
	state phi Memory 	"]
	13 --> 22
	16 --> 22
	19 --> 22
	19["
	eff__847
	mach_writeMemory32_f64
	"]
	10 --> 19
	18 --> 19
	17 --> 19
	12 --> 19
	0 -. Memory .-> 19
	0["
	Start
	"]
	12["
	val
	pop_f64
	"]
	0 -. Stack .-> 12
	17["
	offset
	imm_readULEB32
	"]
	11 -. Codeptr .-> 17
	11["
	state phi Codeptr 	"]
	8 --> 11
	9 --> 11
	3 --> 11
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	9["
	memindex__854
	imm_readULEB32
	"]
	3 -. Codeptr .-> 9
	8["
	cond__853
	u8.!=
	"]
	7 --> 8
	5 --> 8
	5["
	arg__856
	0
	"]
	7["
	arg__855
	u8.&
	"]
	3 --> 7
	6 --> 7
	6["
	arg__858
	0x40u8
	"]
	18["
	index
	pop_u32
	"]
	12 -. Stack .-> 18
	10["
	memindex
	phi
	"]
	8 --> 10
	4 --> 10
	9 --> 10
	4["
	memindex
	0u
	"]
	16["
	eff__842
	mach_writeMemory64_f64
	"]
	10 --> 16
	15 --> 16
	14 --> 16
	12 --> 16
	0 -. Memory .-> 16
	14["
	offset
	imm_readULEB64
	"]
	11 -. Codeptr .-> 14
	15["
	index
	pop_u64
	"]
	12 -. Stack .-> 15
	13["
	cond__841
	m_isMemory64
	"]
	10 --> 13
	21["
	state phi Stack 	"]
	13 --> 21
	15 --> 21
	18 --> 21
	20["
	state phi Codeptr 	"]
	13 --> 20
	14 --> 20
	17 --> 20
```
