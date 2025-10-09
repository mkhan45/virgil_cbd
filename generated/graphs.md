## UNREACHABLE
```mermaid
---
config:
  layout: elk
---
graph TD
	0["
	eff__0
	trapUnreachable
	"]
```
## NOP
```mermaid
---
config:
  layout: elk
---
graph TD
```
## LOCAL_GET
```mermaid
---
config:
  layout: elk
---
graph TD
	3["
	eff__2
	push_Value
	"]
	1 --> 3
	2 --> 3
	2 --> 3
	2["
	val
	getLocal
	"]
	1 --> 2
	0 --> 2
	0["
	index
	imm_readULEB32
	"]
	1["
	tv
	f_getLocalType
	"]
	0 --> 1
```
## LOCAL_SET
```mermaid
---
config:
  layout: elk
---
graph TD
	3["
	eff__8
	setLocal
	"]
	1 --> 3
	0 --> 3
	2 --> 3
	2["
	val
	pop_Value
	"]
	1 --> 2
	1["
	tv
	f_getLocalType
	"]
	0 --> 1
	0["
	index
	imm_readULEB32
	"]
```
## LOCAL_TEE
```mermaid
---
config:
  layout: elk
---
graph TD
	4["
	eff__14
	push_Value
	"]
	1 --> 4
	2 --> 4
	2 --> 4
	2["
	val
	pop_Value
	"]
	1 --> 2
	1["
	tv
	f_getLocalType
	"]
	0 --> 1
	0["
	index
	imm_readULEB32
	"]
	3["
	eff__17
	setLocal
	"]
	1 --> 3
	0 --> 3
	2 --> 3
```
## GLOBAL_GET
```mermaid
---
config:
  layout: elk
---
graph TD
	3["
	eff__23
	push_Value
	"]
	1 --> 3
	2 --> 3
	2 --> 3
	2["
	val
	getGlobal
	"]
	1 --> 2
	0 --> 2
	0["
	index
	imm_readULEB32
	"]
	1["
	tv
	m_getGlobalType
	"]
	0 --> 1
```
## GLOBAL_SET
```mermaid
---
config:
  layout: elk
---
graph TD
	3["
	eff__29
	setGlobal
	"]
	1 --> 3
	0 --> 3
	2 --> 3
	2["
	val
	pop_Value
	"]
	1 --> 2
	1["
	tv
	m_getGlobalType
	"]
	0 --> 1
	0["
	index
	imm_readULEB32
	"]
```
## TABLE_GET
```mermaid
---
config:
  layout: elk
---
graph TD
	11["
	state phi Stack 	"]
	1 --> 11
	4 --> 11
	10 --> 11
	7 --> 11
	7["
	eff__40
	push_Object
	"]
	6 --> 7
	5 --> 7
	3 --> 7
	3["
	else
	"]
	1 --> 3
	0 --> 3
	10 --> 3
	10["
	eff__36
	push_Object
	"]
	9 --> 10
	8 --> 10
	2 --> 10
	2["
	if
	"]
	1 --> 2
	1["
	cond__35
	m_isTable64
	"]
	0 --> 1
	0["
	table_index
	imm_readULEB32
	"]
	8["
	index
	pop_u64
	"]
	2 --> 8
	9["
	val
	mach_readTable64
	"]
	0 --> 9
	8 --> 9
	2 --> 9
	5["
	index
	pop_u32
	"]
	3 --> 5
	6["
	val
	mach_readTable32
	"]
	0 --> 6
	5 --> 6
	3 --> 6
	4["
	end
	"]
	1 --> 4
	3 --> 4
	0 --> 4
	7 --> 4
```
## TABLE_SET
```mermaid
---
config:
  layout: elk
---
graph TD
	11["
	state phi Stack 	"]
	1 --> 11
	4 --> 11
	9 --> 11
	6 --> 11
	6["
	index
	pop_u32
	"]
	5 --> 6
	3 --> 6
	3["
	else
	"]
	1 --> 3
	0 --> 3
	9 --> 3
	9["
	index
	pop_u64
	"]
	8 --> 9
	2 --> 9
	2["
	if
	"]
	1 --> 2
	1["
	cond__45
	m_isTable64
	"]
	0 --> 1
	0["
	table_index
	imm_readULEB32
	"]
	8["
	val
	pop_Object
	"]
	2 --> 8
	5["
	val
	pop_Object
	"]
	3 --> 5
	4["
	end
	"]
	1 --> 4
	3 --> 4
	0 --> 4
	6 --> 4
	10["
	eff__46
	mach_writeTable64
	"]
	0 --> 10
	9 --> 10
	8 --> 10
	2 --> 10
	7["
	eff__50
	mach_writeTable32
	"]
	0 --> 7
	6 --> 7
	5 --> 7
	3 --> 7
```
## CALL
```mermaid
---
config:
  layout: elk
---
graph TD
	3["
	eff__55
	doCall
	"]
	1 --> 3
	2 --> 3
	0 --> 3
	0["
	index
	imm_readULEB32
	"]
	2["
	target
	i_getFunction
	"]
	0 --> 2
	1["
	sig
	m_getFuncSignature
	"]
	0 --> 1
```
## CALL_INDIRECT
```mermaid
---
config:
  layout: elk
---
graph TD
	14["
	st_put__75
	ctlxfer.put_CALL_INDIRECT
	"]
	3 --> 14
	3["
	is64
	m_isTable64
	"]
	1 --> 3
	1["
	table_index
	imm_readULEB32
	"]
	0 --> 1
	0["
	sig_index
	imm_readULEB32
	"]
	13["
	state phi Codeptr Stack Locals Tables Memory Sidetable Codebuilder 	"]
	3 --> 13
	6 --> 13
	12 --> 13
	9 --> 13
	9["
	eff__67
	doCall
	"]
	2 --> 9
	8 --> 9
	7 --> 9
	1 --> 9
	5 --> 9
	5["
	else
	"]
	3 --> 5
	12 --> 5
	12["
	eff__61
	doCall
	"]
	2 --> 12
	11 --> 12
	10 --> 12
	1 --> 12
	4 --> 12
	4["
	if
	"]
	3 --> 4
	10["
	func_index
	pop_u64
	"]
	4 --> 10
	11["
	target
	i_getTableFunction64
	"]
	1 --> 11
	2 --> 11
	10 --> 11
	4 --> 11
	2["
	sig
	m_getSignature
	"]
	0 --> 2
	7["
	func_index
	pop_u32
	"]
	5 --> 7
	8["
	target
	i_getTableFunction32
	"]
	1 --> 8
	2 --> 8
	7 --> 8
	5 --> 8
	6["
	end
	"]
	3 --> 6
	5 --> 6
	9 --> 6
```
## RETURN_CALL
```mermaid
---
config:
  layout: elk
---
graph TD
	3["
	eff__76
	doReturnCall
	"]
	1 --> 3
	2 --> 3
	0 --> 3
	0["
	index
	imm_readULEB32
	"]
	2["
	target
	i_getFunction
	"]
	0 --> 2
	1["
	sig
	m_getFuncSignature
	"]
	0 --> 1
```
## DROP
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	eff__81
	pop_Value
	"]
	0 --> 1
	0["
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
	11["
	state phi Stack 	"]
	5 --> 11
	8 --> 11
	10 --> 11
	9 --> 11
	9["
	eff__87
	push_Value
	"]
	1 --> 9
	2 --> 9
	3 --> 9
	7 --> 9
	7["
	else
	"]
	5 --> 7
	10 --> 7
	10["
	eff__84
	push_Value
	"]
	1 --> 10
	3 --> 10
	3 --> 10
	6 --> 10
	6["
	if
	"]
	5 --> 6
	5["
	cond__83
	u32.!=
	"]
	0 --> 5
	4 --> 5
	4["
	arg__91
	0
	"]
	0["
	c
	pop_u32
	"]
	3["
	a
	pop_Value
	"]
	1 --> 3
	2 --> 3
	2["
	b
	pop_Value
	"]
	1 --> 2
	0 --> 2
	1["
	tv
	f_getTopOfStackType
	"]
	8["
	end
	"]
	5 --> 8
	7 --> 8
	9 --> 8
```
## I32_CONST
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	eff__94
	push_u32
	"]
	0 --> 1
	0["
	x
	imm_readILEB32
	"]
```
## I32_ADD
```mermaid
---
config:
  layout: elk
---
graph TD
	3["
	eff__96
	push_u32
	"]
	2 --> 3
	1 --> 3
	1["
	a
	pop_u32
	"]
	0 --> 1
	0["
	b
	pop_u32
	"]
	2["
	r
	u32.+
	"]
	1 --> 2
	0 --> 2
```
## I32_SUB
```mermaid
---
config:
  layout: elk
---
graph TD
	3["
	eff__100
	push_u32
	"]
	2 --> 3
	1 --> 3
	1["
	a
	pop_u32
	"]
	0 --> 1
	0["
	b
	pop_u32
	"]
	2["
	r
	u32.-
	"]
	1 --> 2
	0 --> 2
```
## I32_MUL
```mermaid
---
config:
  layout: elk
---
graph TD
	3["
	eff__104
	push_u32
	"]
	2 --> 3
	1 --> 3
	1["
	a
	pop_u32
	"]
	0 --> 1
	0["
	b
	pop_u32
	"]
	2["
	r
	u32.*
	"]
	1 --> 2
	0 --> 2
```
## I32_DIV_S
```mermaid
---
config:
  layout: elk
---
graph TD
	31["
	state phi Sidetable 	"]
	21 --> 31
	24 --> 31
	25 --> 31
	13 --> 31
	13["
	state phi Sidetable 	"]
	3 --> 13
	6 --> 13
	7 --> 13
	7["
	ret__123
	trapDivideByZero
	"]
	1 --> 7
	4 --> 7
	4["
	if
	"]
	3 --> 4
	3["
	cond__122
	u32.==
	"]
	0 --> 3
	2 --> 3
	2["
	arg__125
	0
	"]
	0["
	b
	pop_u32
	"]
	1["
	a
	pop_u32
	"]
	0 --> 1
	6["
	end
	"]
	3 --> 6
	5 --> 6
	1 --> 6
	5["
	else
	"]
	3 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	25["
	ret__113
	trapDivideUnrepresentable
	"]
	14 --> 25
	13 --> 25
	12 --> 25
	11 --> 25
	10 --> 25
	9 --> 25
	8 --> 25
	22 --> 25
	22["
	if
	"]
	21 --> 22
	21["
	cond__112
	bool.&&
	"]
	20 --> 21
	17 --> 21
	17["
	arg__115
	u32.==
	"]
	1 --> 17
	16 --> 17
	16["
	arg__120
	u32.view
	"]
	15 --> 16
	15["
	arg__121
	-2_147_483_648
	"]
	20["
	arg__114
	u32.==
	"]
	0 --> 20
	19 --> 20
	19["
	arg__117
	u32.view
	"]
	18 --> 19
	18["
	arg__118
	-1
	"]
	8["
	state phi Codeptr 	"]
	3 --> 8
	6 --> 8
	7 --> 8
	9["
	state phi Stack 	"]
	3 --> 9
	6 --> 9
	7 --> 9
	1 --> 9
	10["
	state phi Locals 	"]
	3 --> 10
	6 --> 10
	7 --> 10
	11["
	state phi Tables 	"]
	3 --> 11
	6 --> 11
	7 --> 11
	12["
	state phi Memory 	"]
	3 --> 12
	6 --> 12
	7 --> 12
	14["
	state phi Codebuilder 	"]
	3 --> 14
	6 --> 14
	7 --> 14
	24["
	end
	"]
	21 --> 24
	23 --> 24
	8 --> 24
	9 --> 24
	10 --> 24
	11 --> 24
	12 --> 24
	13 --> 24
	14 --> 24
	23["
	else
	"]
	21 --> 23
	25 --> 23
	25 --> 23
	25 --> 23
	25 --> 23
	25 --> 23
	25 --> 23
	25 --> 23
	30["
	state phi Memory 	"]
	21 --> 30
	24 --> 30
	25 --> 30
	12 --> 30
	29["
	state phi Tables 	"]
	21 --> 29
	24 --> 29
	25 --> 29
	11 --> 29
	28["
	state phi Locals 	"]
	21 --> 28
	24 --> 28
	25 --> 28
	10 --> 28
	27["
	state phi Stack 	"]
	21 --> 27
	24 --> 27
	25 --> 27
	9 --> 27
	26["
	state phi Codeptr 	"]
	21 --> 26
	24 --> 26
	25 --> 26
	8 --> 26
	34["
	eff__108
	push_u32
	"]
	33 --> 34
	27 --> 34
	33["
	r
	U32_div_s
	"]
	1 --> 33
	0 --> 33
	32["
	state phi Codebuilder 	"]
	21 --> 32
	24 --> 32
	25 --> 32
	14 --> 32
```
## I32_DIV_U
```mermaid
---
config:
  layout: elk
---
graph TD
	14["
	state phi Codebuilder 	"]
	3 --> 14
	6 --> 14
	7 --> 14
	7["
	ret__131
	trapDivideByZero
	"]
	1 --> 7
	4 --> 7
	4["
	if
	"]
	3 --> 4
	3["
	cond__130
	u32.==
	"]
	0 --> 3
	2 --> 3
	2["
	arg__133
	0
	"]
	0["
	b
	pop_u32
	"]
	1["
	a
	pop_u32
	"]
	0 --> 1
	6["
	end
	"]
	3 --> 6
	5 --> 6
	1 --> 6
	5["
	else
	"]
	3 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	13["
	state phi Sidetable 	"]
	3 --> 13
	6 --> 13
	7 --> 13
	12["
	state phi Memory 	"]
	3 --> 12
	6 --> 12
	7 --> 12
	11["
	state phi Tables 	"]
	3 --> 11
	6 --> 11
	7 --> 11
	10["
	state phi Locals 	"]
	3 --> 10
	6 --> 10
	7 --> 10
	9["
	state phi Stack 	"]
	3 --> 9
	6 --> 9
	7 --> 9
	1 --> 9
	8["
	state phi Codeptr 	"]
	3 --> 8
	6 --> 8
	7 --> 8
	16["
	eff__126
	push_u32
	"]
	15 --> 16
	9 --> 16
	15["
	r
	u32./
	"]
	1 --> 15
	0 --> 15
```
## I32_EQZ
```mermaid
---
config:
  layout: elk
---
graph TD
	9["
	state phi Stack 	"]
	2 --> 9
	5 --> 9
	8 --> 9
	6 --> 9
	6["
	eff__137
	push_u32
	"]
	1 --> 6
	0 --> 6
	4 --> 6
	4["
	else
	"]
	2 --> 4
	8 --> 4
	8["
	eff__135
	push_u32
	"]
	7 --> 8
	0 --> 8
	3 --> 8
	3["
	if
	"]
	2 --> 3
	2["
	cond__134
	u32.==
	"]
	0 --> 2
	1 --> 2
	1["
	arg__140
	0
	"]
	0["
	a
	pop_u32
	"]
	7["
	arg__136
	1
	"]
	5["
	end
	"]
	2 --> 5
	4 --> 5
	6 --> 5
```
## I32_EQ
```mermaid
---
config:
  layout: elk
---
graph TD
	10["
	state phi Stack 	"]
	2 --> 10
	5 --> 10
	9 --> 10
	7 --> 10
	7["
	eff__144
	push_u32
	"]
	6 --> 7
	1 --> 7
	4 --> 7
	4["
	else
	"]
	2 --> 4
	9 --> 4
	9["
	eff__142
	push_u32
	"]
	8 --> 9
	1 --> 9
	3 --> 9
	3["
	if
	"]
	2 --> 3
	2["
	cond__141
	u32.==
	"]
	1 --> 2
	0 --> 2
	0["
	b
	pop_u32
	"]
	1["
	a
	pop_u32
	"]
	0 --> 1
	8["
	arg__143
	1
	"]
	6["
	arg__145
	0
	"]
	5["
	end
	"]
	2 --> 5
	4 --> 5
	7 --> 5
```
## I32_NE
```mermaid
---
config:
  layout: elk
---
graph TD
	10["
	state phi Stack 	"]
	2 --> 10
	5 --> 10
	9 --> 10
	7 --> 10
	7["
	eff__151
	push_u32
	"]
	6 --> 7
	1 --> 7
	4 --> 7
	4["
	else
	"]
	2 --> 4
	9 --> 4
	9["
	eff__149
	push_u32
	"]
	8 --> 9
	1 --> 9
	3 --> 9
	3["
	if
	"]
	2 --> 3
	2["
	cond__148
	u32.!=
	"]
	1 --> 2
	0 --> 2
	0["
	b
	pop_u32
	"]
	1["
	a
	pop_u32
	"]
	0 --> 1
	8["
	arg__150
	1
	"]
	6["
	arg__152
	0
	"]
	5["
	end
	"]
	2 --> 5
	4 --> 5
	7 --> 5
```
## I32_LT_U
```mermaid
---
config:
  layout: elk
---
graph TD
	10["
	state phi Stack 	"]
	2 --> 10
	5 --> 10
	9 --> 10
	7 --> 10
	7["
	eff__158
	push_u32
	"]
	6 --> 7
	1 --> 7
	4 --> 7
	4["
	else
	"]
	2 --> 4
	9 --> 4
	9["
	eff__156
	push_u32
	"]
	8 --> 9
	1 --> 9
	3 --> 9
	3["
	if
	"]
	2 --> 3
	2["
	cond__155
	u32.<
	"]
	1 --> 2
	0 --> 2
	0["
	b
	pop_u32
	"]
	1["
	a
	pop_u32
	"]
	0 --> 1
	8["
	arg__157
	1
	"]
	6["
	arg__159
	0
	"]
	5["
	end
	"]
	2 --> 5
	4 --> 5
	7 --> 5
```
## I32_LT_S
```mermaid
---
config:
  layout: elk
---
graph TD
	10["
	state phi Stack 	"]
	2 --> 10
	5 --> 10
	9 --> 10
	7 --> 10
	7["
	eff__165
	push_u32
	"]
	6 --> 7
	1 --> 7
	4 --> 7
	4["
	else
	"]
	2 --> 4
	9 --> 4
	9["
	eff__163
	push_u32
	"]
	8 --> 9
	1 --> 9
	3 --> 9
	3["
	if
	"]
	2 --> 3
	2["
	cond__162
	U32_lt_s
	"]
	1 --> 2
	0 --> 2
	0["
	b
	pop_u32
	"]
	1["
	a
	pop_u32
	"]
	0 --> 1
	8["
	arg__164
	1
	"]
	6["
	arg__166
	0
	"]
	5["
	end
	"]
	2 --> 5
	4 --> 5
	7 --> 5
```
## I32_LE_S
```mermaid
---
config:
  layout: elk
---
graph TD
	10["
	state phi Stack 	"]
	2 --> 10
	5 --> 10
	9 --> 10
	7 --> 10
	7["
	eff__172
	push_u32
	"]
	6 --> 7
	1 --> 7
	4 --> 7
	4["
	else
	"]
	2 --> 4
	9 --> 4
	9["
	eff__170
	push_u32
	"]
	8 --> 9
	1 --> 9
	3 --> 9
	3["
	if
	"]
	2 --> 3
	2["
	cond__169
	U32_le_s
	"]
	1 --> 2
	0 --> 2
	0["
	b
	pop_u32
	"]
	1["
	a
	pop_u32
	"]
	0 --> 1
	8["
	arg__171
	1
	"]
	6["
	arg__173
	0
	"]
	5["
	end
	"]
	2 --> 5
	4 --> 5
	7 --> 5
```
## I32_GT_U
```mermaid
---
config:
  layout: elk
---
graph TD
	10["
	state phi Stack 	"]
	2 --> 10
	5 --> 10
	9 --> 10
	7 --> 10
	7["
	eff__179
	push_u32
	"]
	6 --> 7
	1 --> 7
	4 --> 7
	4["
	else
	"]
	2 --> 4
	9 --> 4
	9["
	eff__177
	push_u32
	"]
	8 --> 9
	1 --> 9
	3 --> 9
	3["
	if
	"]
	2 --> 3
	2["
	cond__176
	u32.>
	"]
	1 --> 2
	0 --> 2
	0["
	b
	pop_u32
	"]
	1["
	a
	pop_u32
	"]
	0 --> 1
	8["
	arg__178
	1
	"]
	6["
	arg__180
	0
	"]
	5["
	end
	"]
	2 --> 5
	4 --> 5
	7 --> 5
```
## I32_LE_U
```mermaid
---
config:
  layout: elk
---
graph TD
	10["
	state phi Stack 	"]
	2 --> 10
	5 --> 10
	9 --> 10
	7 --> 10
	7["
	eff__186
	push_u32
	"]
	6 --> 7
	1 --> 7
	4 --> 7
	4["
	else
	"]
	2 --> 4
	9 --> 4
	9["
	eff__184
	push_u32
	"]
	8 --> 9
	1 --> 9
	3 --> 9
	3["
	if
	"]
	2 --> 3
	2["
	cond__183
	u32.<=
	"]
	1 --> 2
	0 --> 2
	0["
	b
	pop_u32
	"]
	1["
	a
	pop_u32
	"]
	0 --> 1
	8["
	arg__185
	1
	"]
	6["
	arg__187
	0
	"]
	5["
	end
	"]
	2 --> 5
	4 --> 5
	7 --> 5
```
## I32_GT_S
```mermaid
---
config:
  layout: elk
---
graph TD
	10["
	state phi Stack 	"]
	2 --> 10
	5 --> 10
	9 --> 10
	7 --> 10
	7["
	eff__193
	push_u32
	"]
	6 --> 7
	1 --> 7
	4 --> 7
	4["
	else
	"]
	2 --> 4
	9 --> 4
	9["
	eff__191
	push_u32
	"]
	8 --> 9
	1 --> 9
	3 --> 9
	3["
	if
	"]
	2 --> 3
	2["
	cond__190
	U32_gt_s
	"]
	1 --> 2
	0 --> 2
	0["
	b
	pop_u32
	"]
	1["
	a
	pop_u32
	"]
	0 --> 1
	8["
	arg__192
	1
	"]
	6["
	arg__194
	0
	"]
	5["
	end
	"]
	2 --> 5
	4 --> 5
	7 --> 5
```
## I32_GE_U
```mermaid
---
config:
  layout: elk
---
graph TD
	10["
	state phi Stack 	"]
	2 --> 10
	5 --> 10
	9 --> 10
	7 --> 10
	7["
	eff__200
	push_u32
	"]
	6 --> 7
	1 --> 7
	4 --> 7
	4["
	else
	"]
	2 --> 4
	9 --> 4
	9["
	eff__198
	push_u32
	"]
	8 --> 9
	1 --> 9
	3 --> 9
	3["
	if
	"]
	2 --> 3
	2["
	cond__197
	U32_ge_u
	"]
	1 --> 2
	0 --> 2
	0["
	b
	pop_u32
	"]
	1["
	a
	pop_u32
	"]
	0 --> 1
	8["
	arg__199
	1
	"]
	6["
	arg__201
	0
	"]
	5["
	end
	"]
	2 --> 5
	4 --> 5
	7 --> 5
```
## I32_GE_S
```mermaid
---
config:
  layout: elk
---
graph TD
	10["
	state phi Stack 	"]
	2 --> 10
	5 --> 10
	9 --> 10
	7 --> 10
	7["
	eff__207
	push_u32
	"]
	6 --> 7
	1 --> 7
	4 --> 7
	4["
	else
	"]
	2 --> 4
	9 --> 4
	9["
	eff__205
	push_u32
	"]
	8 --> 9
	1 --> 9
	3 --> 9
	3["
	if
	"]
	2 --> 3
	2["
	cond__204
	U32_ge_s
	"]
	1 --> 2
	0 --> 2
	0["
	b
	pop_u32
	"]
	1["
	a
	pop_u32
	"]
	0 --> 1
	8["
	arg__206
	1
	"]
	6["
	arg__208
	0
	"]
	5["
	end
	"]
	2 --> 5
	4 --> 5
	7 --> 5
```
## I32_AND
```mermaid
---
config:
  layout: elk
---
graph TD
	3["
	eff__211
	push_u32
	"]
	2 --> 3
	1 --> 3
	1["
	a
	pop_u32
	"]
	0 --> 1
	0["
	b
	pop_u32
	"]
	2["
	r
	u32.&
	"]
	1 --> 2
	0 --> 2
```
## I32_OR
```mermaid
---
config:
  layout: elk
---
graph TD
	3["
	eff__215
	push_u32
	"]
	2 --> 3
	1 --> 3
	1["
	a
	pop_u32
	"]
	0 --> 1
	0["
	b
	pop_u32
	"]
	2["
	r
	u32.|
	"]
	1 --> 2
	0 --> 2
```
## I32_XOR
```mermaid
---
config:
  layout: elk
---
graph TD
	3["
	eff__219
	push_u32
	"]
	2 --> 3
	1 --> 3
	1["
	a
	pop_u32
	"]
	0 --> 1
	0["
	b
	pop_u32
	"]
	2["
	r
	u32.^
	"]
	1 --> 2
	0 --> 2
```
## I32_SHL
```mermaid
---
config:
  layout: elk
---
graph TD
	3["
	eff__223
	push_u32
	"]
	2 --> 3
	1 --> 3
	1["
	a
	pop_u32
	"]
	0 --> 1
	0["
	b
	pop_u32
	"]
	2["
	r
	U32_shl
	"]
	1 --> 2
	0 --> 2
```
## I32_SHR_U
```mermaid
---
config:
  layout: elk
---
graph TD
	3["
	eff__227
	push_u32
	"]
	2 --> 3
	1 --> 3
	1["
	a
	pop_u32
	"]
	0 --> 1
	0["
	b
	pop_u32
	"]
	2["
	r
	U32_shr_u
	"]
	1 --> 2
	0 --> 2
```
## I32_SHR_S
```mermaid
---
config:
  layout: elk
---
graph TD
	3["
	eff__231
	push_u32
	"]
	2 --> 3
	1 --> 3
	1["
	a
	pop_u32
	"]
	0 --> 1
	0["
	b
	pop_u32
	"]
	2["
	r
	U32_shr_s
	"]
	1 --> 2
	0 --> 2
```
## I32_ROTL
```mermaid
---
config:
  layout: elk
---
graph TD
	3["
	eff__235
	push_u32
	"]
	2 --> 3
	1 --> 3
	1["
	a
	pop_u32
	"]
	0 --> 1
	0["
	b
	pop_u32
	"]
	2["
	r
	U32_rotl
	"]
	1 --> 2
	0 --> 2
```
## I32_ROTR
```mermaid
---
config:
  layout: elk
---
graph TD
	3["
	eff__239
	push_u32
	"]
	2 --> 3
	1 --> 3
	1["
	a
	pop_u32
	"]
	0 --> 1
	0["
	b
	pop_u32
	"]
	2["
	r
	U32_rotr
	"]
	1 --> 2
	0 --> 2
```
## I32_CLZ
```mermaid
---
config:
  layout: elk
---
graph TD
	2["
	eff__243
	push_u32
	"]
	1 --> 2
	0 --> 2
	0["
	a
	pop_u32
	"]
	1["
	r
	U32_clz
	"]
	0 --> 1
```
## I32_CTZ
```mermaid
---
config:
  layout: elk
---
graph TD
	2["
	eff__246
	push_u32
	"]
	1 --> 2
	0 --> 2
	0["
	a
	pop_u32
	"]
	1["
	r
	U32_ctz
	"]
	0 --> 1
```
## I32_POPCNT
```mermaid
---
config:
  layout: elk
---
graph TD
	2["
	eff__249
	push_u32
	"]
	1 --> 2
	0 --> 2
	0["
	a
	pop_u32
	"]
	1["
	r
	U32_popcnt
	"]
	0 --> 1
```
## I32_REM_S
```mermaid
---
config:
  layout: elk
---
graph TD
	14["
	state phi Codebuilder 	"]
	3 --> 14
	6 --> 14
	7 --> 14
	7["
	ret__257
	trapDivideByZero
	"]
	1 --> 7
	4 --> 7
	4["
	if
	"]
	3 --> 4
	3["
	cond__256
	u32.==
	"]
	0 --> 3
	2 --> 3
	2["
	arg__259
	0
	"]
	0["
	b
	pop_u32
	"]
	1["
	a
	pop_u32
	"]
	0 --> 1
	6["
	end
	"]
	3 --> 6
	5 --> 6
	1 --> 6
	5["
	else
	"]
	3 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	13["
	state phi Sidetable 	"]
	3 --> 13
	6 --> 13
	7 --> 13
	12["
	state phi Memory 	"]
	3 --> 12
	6 --> 12
	7 --> 12
	11["
	state phi Tables 	"]
	3 --> 11
	6 --> 11
	7 --> 11
	10["
	state phi Locals 	"]
	3 --> 10
	6 --> 10
	7 --> 10
	9["
	state phi Stack 	"]
	3 --> 9
	6 --> 9
	7 --> 9
	1 --> 9
	8["
	state phi Codeptr 	"]
	3 --> 8
	6 --> 8
	7 --> 8
	16["
	eff__252
	push_u32
	"]
	15 --> 16
	9 --> 16
	15["
	r
	U32_rem_s
	"]
	1 --> 15
	0 --> 15
```
## I32_REM_U
```mermaid
---
config:
  layout: elk
---
graph TD
	14["
	state phi Codebuilder 	"]
	3 --> 14
	6 --> 14
	7 --> 14
	7["
	ret__265
	trapDivideByZero
	"]
	1 --> 7
	4 --> 7
	4["
	if
	"]
	3 --> 4
	3["
	cond__264
	u32.==
	"]
	0 --> 3
	2 --> 3
	2["
	arg__267
	0
	"]
	0["
	b
	pop_u32
	"]
	1["
	a
	pop_u32
	"]
	0 --> 1
	6["
	end
	"]
	3 --> 6
	5 --> 6
	1 --> 6
	5["
	else
	"]
	3 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	13["
	state phi Sidetable 	"]
	3 --> 13
	6 --> 13
	7 --> 13
	12["
	state phi Memory 	"]
	3 --> 12
	6 --> 12
	7 --> 12
	11["
	state phi Tables 	"]
	3 --> 11
	6 --> 11
	7 --> 11
	10["
	state phi Locals 	"]
	3 --> 10
	6 --> 10
	7 --> 10
	9["
	state phi Stack 	"]
	3 --> 9
	6 --> 9
	7 --> 9
	1 --> 9
	8["
	state phi Codeptr 	"]
	3 --> 8
	6 --> 8
	7 --> 8
	16["
	eff__260
	push_u32
	"]
	15 --> 16
	9 --> 16
	15["
	r
	U32_rem_u
	"]
	1 --> 15
	0 --> 15
```
## I32_EXTEND8_S
```mermaid
---
config:
  layout: elk
---
graph TD
	2["
	eff__268
	push_u32
	"]
	1 --> 2
	0 --> 2
	0["
	a
	pop_u32
	"]
	1["
	r
	U32_extend8_s
	"]
	0 --> 1
```
## I32_EXTEND16_S
```mermaid
---
config:
  layout: elk
---
graph TD
	2["
	eff__271
	push_u32
	"]
	1 --> 2
	0 --> 2
	0["
	a
	pop_u32
	"]
	1["
	r
	U32_extend16_s
	"]
	0 --> 1
```
## I64_CONST
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	eff__274
	push_u64
	"]
	0 --> 1
	0["
	x
	imm_readILEB64
	"]
```
## I64_ADD
```mermaid
---
config:
  layout: elk
---
graph TD
	3["
	eff__276
	push_u64
	"]
	2 --> 3
	1 --> 3
	1["
	a
	pop_u64
	"]
	0 --> 1
	0["
	b
	pop_u64
	"]
	2["
	r
	u64.+
	"]
	1 --> 2
	0 --> 2
```
## I64_SUB
```mermaid
---
config:
  layout: elk
---
graph TD
	3["
	eff__280
	push_u64
	"]
	2 --> 3
	1 --> 3
	1["
	a
	pop_u64
	"]
	0 --> 1
	0["
	b
	pop_u64
	"]
	2["
	r
	u64.-
	"]
	1 --> 2
	0 --> 2
```
## I64_MUL
```mermaid
---
config:
  layout: elk
---
graph TD
	3["
	eff__284
	push_u64
	"]
	2 --> 3
	1 --> 3
	1["
	a
	pop_u64
	"]
	0 --> 1
	0["
	b
	pop_u64
	"]
	2["
	r
	u64.*
	"]
	1 --> 2
	0 --> 2
```
## I64_DIV_S
```mermaid
---
config:
  layout: elk
---
graph TD
	31["
	state phi Sidetable 	"]
	21 --> 31
	24 --> 31
	25 --> 31
	13 --> 31
	13["
	state phi Sidetable 	"]
	3 --> 13
	6 --> 13
	7 --> 13
	7["
	ret__303
	trapDivideByZero
	"]
	1 --> 7
	4 --> 7
	4["
	if
	"]
	3 --> 4
	3["
	cond__302
	u64.==
	"]
	0 --> 3
	2 --> 3
	2["
	arg__305
	0
	"]
	0["
	b
	pop_u64
	"]
	1["
	a
	pop_u64
	"]
	0 --> 1
	6["
	end
	"]
	3 --> 6
	5 --> 6
	1 --> 6
	5["
	else
	"]
	3 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	25["
	ret__293
	trapDivideUnrepresentable
	"]
	14 --> 25
	13 --> 25
	12 --> 25
	11 --> 25
	10 --> 25
	9 --> 25
	8 --> 25
	22 --> 25
	22["
	if
	"]
	21 --> 22
	21["
	cond__292
	bool.&&
	"]
	20 --> 21
	17 --> 21
	17["
	arg__295
	u64.==
	"]
	1 --> 17
	16 --> 17
	16["
	arg__300
	u64.view
	"]
	15 --> 16
	15["
	arg__301
	-9223372036854775808L
	"]
	20["
	arg__294
	u64.==
	"]
	0 --> 20
	19 --> 20
	19["
	arg__297
	u64.view
	"]
	18 --> 19
	18["
	arg__298
	-1
	"]
	8["
	state phi Codeptr 	"]
	3 --> 8
	6 --> 8
	7 --> 8
	9["
	state phi Stack 	"]
	3 --> 9
	6 --> 9
	7 --> 9
	1 --> 9
	10["
	state phi Locals 	"]
	3 --> 10
	6 --> 10
	7 --> 10
	11["
	state phi Tables 	"]
	3 --> 11
	6 --> 11
	7 --> 11
	12["
	state phi Memory 	"]
	3 --> 12
	6 --> 12
	7 --> 12
	14["
	state phi Codebuilder 	"]
	3 --> 14
	6 --> 14
	7 --> 14
	24["
	end
	"]
	21 --> 24
	23 --> 24
	8 --> 24
	9 --> 24
	10 --> 24
	11 --> 24
	12 --> 24
	13 --> 24
	14 --> 24
	23["
	else
	"]
	21 --> 23
	25 --> 23
	25 --> 23
	25 --> 23
	25 --> 23
	25 --> 23
	25 --> 23
	25 --> 23
	30["
	state phi Memory 	"]
	21 --> 30
	24 --> 30
	25 --> 30
	12 --> 30
	29["
	state phi Tables 	"]
	21 --> 29
	24 --> 29
	25 --> 29
	11 --> 29
	28["
	state phi Locals 	"]
	21 --> 28
	24 --> 28
	25 --> 28
	10 --> 28
	27["
	state phi Stack 	"]
	21 --> 27
	24 --> 27
	25 --> 27
	9 --> 27
	26["
	state phi Codeptr 	"]
	21 --> 26
	24 --> 26
	25 --> 26
	8 --> 26
	34["
	eff__288
	push_u64
	"]
	33 --> 34
	27 --> 34
	33["
	r
	U64_div_s
	"]
	1 --> 33
	0 --> 33
	32["
	state phi Codebuilder 	"]
	21 --> 32
	24 --> 32
	25 --> 32
	14 --> 32
```
## I64_DIV_U
```mermaid
---
config:
  layout: elk
---
graph TD
	14["
	state phi Codebuilder 	"]
	3 --> 14
	6 --> 14
	7 --> 14
	7["
	ret__311
	trapDivideByZero
	"]
	1 --> 7
	4 --> 7
	4["
	if
	"]
	3 --> 4
	3["
	cond__310
	u64.==
	"]
	0 --> 3
	2 --> 3
	2["
	arg__313
	0
	"]
	0["
	b
	pop_u64
	"]
	1["
	a
	pop_u64
	"]
	0 --> 1
	6["
	end
	"]
	3 --> 6
	5 --> 6
	1 --> 6
	5["
	else
	"]
	3 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	13["
	state phi Sidetable 	"]
	3 --> 13
	6 --> 13
	7 --> 13
	12["
	state phi Memory 	"]
	3 --> 12
	6 --> 12
	7 --> 12
	11["
	state phi Tables 	"]
	3 --> 11
	6 --> 11
	7 --> 11
	10["
	state phi Locals 	"]
	3 --> 10
	6 --> 10
	7 --> 10
	9["
	state phi Stack 	"]
	3 --> 9
	6 --> 9
	7 --> 9
	1 --> 9
	8["
	state phi Codeptr 	"]
	3 --> 8
	6 --> 8
	7 --> 8
	16["
	eff__306
	push_u64
	"]
	15 --> 16
	9 --> 16
	15["
	r
	u64./
	"]
	1 --> 15
	0 --> 15
```
## I64_REM_S
```mermaid
---
config:
  layout: elk
---
graph TD
	14["
	state phi Codebuilder 	"]
	3 --> 14
	6 --> 14
	7 --> 14
	7["
	ret__319
	trapDivideByZero
	"]
	1 --> 7
	4 --> 7
	4["
	if
	"]
	3 --> 4
	3["
	cond__318
	u64.==
	"]
	0 --> 3
	2 --> 3
	2["
	arg__321
	0
	"]
	0["
	b
	pop_u64
	"]
	1["
	a
	pop_u64
	"]
	0 --> 1
	6["
	end
	"]
	3 --> 6
	5 --> 6
	1 --> 6
	5["
	else
	"]
	3 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	13["
	state phi Sidetable 	"]
	3 --> 13
	6 --> 13
	7 --> 13
	12["
	state phi Memory 	"]
	3 --> 12
	6 --> 12
	7 --> 12
	11["
	state phi Tables 	"]
	3 --> 11
	6 --> 11
	7 --> 11
	10["
	state phi Locals 	"]
	3 --> 10
	6 --> 10
	7 --> 10
	9["
	state phi Stack 	"]
	3 --> 9
	6 --> 9
	7 --> 9
	1 --> 9
	8["
	state phi Codeptr 	"]
	3 --> 8
	6 --> 8
	7 --> 8
	16["
	eff__314
	push_u64
	"]
	15 --> 16
	9 --> 16
	15["
	r
	U64_rem_s
	"]
	1 --> 15
	0 --> 15
```
## I64_REM_U
```mermaid
---
config:
  layout: elk
---
graph TD
	14["
	state phi Codebuilder 	"]
	3 --> 14
	6 --> 14
	7 --> 14
	7["
	ret__327
	trapDivideByZero
	"]
	1 --> 7
	4 --> 7
	4["
	if
	"]
	3 --> 4
	3["
	cond__326
	u64.==
	"]
	0 --> 3
	2 --> 3
	2["
	arg__329
	0
	"]
	0["
	b
	pop_u64
	"]
	1["
	a
	pop_u64
	"]
	0 --> 1
	6["
	end
	"]
	3 --> 6
	5 --> 6
	1 --> 6
	5["
	else
	"]
	3 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	13["
	state phi Sidetable 	"]
	3 --> 13
	6 --> 13
	7 --> 13
	12["
	state phi Memory 	"]
	3 --> 12
	6 --> 12
	7 --> 12
	11["
	state phi Tables 	"]
	3 --> 11
	6 --> 11
	7 --> 11
	10["
	state phi Locals 	"]
	3 --> 10
	6 --> 10
	7 --> 10
	9["
	state phi Stack 	"]
	3 --> 9
	6 --> 9
	7 --> 9
	1 --> 9
	8["
	state phi Codeptr 	"]
	3 --> 8
	6 --> 8
	7 --> 8
	16["
	eff__322
	push_u64
	"]
	15 --> 16
	9 --> 16
	15["
	r
	U64_rem_u
	"]
	1 --> 15
	0 --> 15
```
## I64_AND
```mermaid
---
config:
  layout: elk
---
graph TD
	3["
	eff__330
	push_u64
	"]
	2 --> 3
	1 --> 3
	1["
	a
	pop_u64
	"]
	0 --> 1
	0["
	b
	pop_u64
	"]
	2["
	r
	u64.&
	"]
	1 --> 2
	0 --> 2
```
## I64_OR
```mermaid
---
config:
  layout: elk
---
graph TD
	3["
	eff__334
	push_u64
	"]
	2 --> 3
	1 --> 3
	1["
	a
	pop_u64
	"]
	0 --> 1
	0["
	b
	pop_u64
	"]
	2["
	r
	u64.|
	"]
	1 --> 2
	0 --> 2
```
## I64_XOR
```mermaid
---
config:
  layout: elk
---
graph TD
	3["
	eff__338
	push_u64
	"]
	2 --> 3
	1 --> 3
	1["
	a
	pop_u64
	"]
	0 --> 1
	0["
	b
	pop_u64
	"]
	2["
	r
	u64.^
	"]
	1 --> 2
	0 --> 2
```
## I64_SHL
```mermaid
---
config:
  layout: elk
---
graph TD
	3["
	eff__342
	push_u64
	"]
	2 --> 3
	1 --> 3
	1["
	a
	pop_u64
	"]
	0 --> 1
	0["
	b
	pop_u64
	"]
	2["
	r
	U64_shl
	"]
	1 --> 2
	0 --> 2
```
## I64_SHR_U
```mermaid
---
config:
  layout: elk
---
graph TD
	3["
	eff__346
	push_u64
	"]
	2 --> 3
	1 --> 3
	1["
	a
	pop_u64
	"]
	0 --> 1
	0["
	b
	pop_u64
	"]
	2["
	r
	U64_shr_u
	"]
	1 --> 2
	0 --> 2
```
## I64_SHR_S
```mermaid
---
config:
  layout: elk
---
graph TD
	3["
	eff__350
	push_u64
	"]
	2 --> 3
	1 --> 3
	1["
	a
	pop_u64
	"]
	0 --> 1
	0["
	b
	pop_u64
	"]
	2["
	r
	U64_shr_s
	"]
	1 --> 2
	0 --> 2
```
## I64_ROTL
```mermaid
---
config:
  layout: elk
---
graph TD
	3["
	eff__354
	push_u64
	"]
	2 --> 3
	1 --> 3
	1["
	a
	pop_u64
	"]
	0 --> 1
	0["
	b
	pop_u64
	"]
	2["
	r
	U64_rotl
	"]
	1 --> 2
	0 --> 2
```
## I64_ROTR
```mermaid
---
config:
  layout: elk
---
graph TD
	3["
	eff__358
	push_u64
	"]
	2 --> 3
	1 --> 3
	1["
	a
	pop_u64
	"]
	0 --> 1
	0["
	b
	pop_u64
	"]
	2["
	r
	U64_rotr
	"]
	1 --> 2
	0 --> 2
```
## I64_CLZ
```mermaid
---
config:
  layout: elk
---
graph TD
	2["
	eff__362
	push_u64
	"]
	1 --> 2
	0 --> 2
	0["
	a
	pop_u64
	"]
	1["
	r
	U64_clz
	"]
	0 --> 1
```
## I64_CTZ
```mermaid
---
config:
  layout: elk
---
graph TD
	2["
	eff__365
	push_u64
	"]
	1 --> 2
	0 --> 2
	0["
	a
	pop_u64
	"]
	1["
	r
	U64_ctz
	"]
	0 --> 1
```
## I64_POPCNT
```mermaid
---
config:
  layout: elk
---
graph TD
	2["
	eff__368
	push_u64
	"]
	1 --> 2
	0 --> 2
	0["
	a
	pop_u64
	"]
	1["
	r
	U64_popcnt
	"]
	0 --> 1
```
## I64_EQZ
```mermaid
---
config:
  layout: elk
---
graph TD
	9["
	state phi Stack 	"]
	2 --> 9
	5 --> 9
	8 --> 9
	6 --> 9
	6["
	eff__374
	push_u32
	"]
	1 --> 6
	0 --> 6
	4 --> 6
	4["
	else
	"]
	2 --> 4
	8 --> 4
	8["
	eff__372
	push_u32
	"]
	7 --> 8
	0 --> 8
	3 --> 8
	3["
	if
	"]
	2 --> 3
	2["
	cond__371
	u64.==
	"]
	0 --> 2
	1 --> 2
	1["
	arg__377
	0
	"]
	0["
	a
	pop_u64
	"]
	7["
	arg__373
	1
	"]
	5["
	end
	"]
	2 --> 5
	4 --> 5
	6 --> 5
```
## I64_EQ
```mermaid
---
config:
  layout: elk
---
graph TD
	10["
	state phi Stack 	"]
	2 --> 10
	5 --> 10
	9 --> 10
	7 --> 10
	7["
	eff__381
	push_u32
	"]
	6 --> 7
	1 --> 7
	4 --> 7
	4["
	else
	"]
	2 --> 4
	9 --> 4
	9["
	eff__379
	push_u32
	"]
	8 --> 9
	1 --> 9
	3 --> 9
	3["
	if
	"]
	2 --> 3
	2["
	cond__378
	u64.==
	"]
	1 --> 2
	0 --> 2
	0["
	b
	pop_u64
	"]
	1["
	a
	pop_u64
	"]
	0 --> 1
	8["
	arg__380
	1
	"]
	6["
	arg__382
	0
	"]
	5["
	end
	"]
	2 --> 5
	4 --> 5
	7 --> 5
```
## I64_NE
```mermaid
---
config:
  layout: elk
---
graph TD
	10["
	state phi Stack 	"]
	2 --> 10
	5 --> 10
	9 --> 10
	7 --> 10
	7["
	eff__388
	push_u32
	"]
	6 --> 7
	1 --> 7
	4 --> 7
	4["
	else
	"]
	2 --> 4
	9 --> 4
	9["
	eff__386
	push_u32
	"]
	8 --> 9
	1 --> 9
	3 --> 9
	3["
	if
	"]
	2 --> 3
	2["
	cond__385
	u64.!=
	"]
	1 --> 2
	0 --> 2
	0["
	b
	pop_u64
	"]
	1["
	a
	pop_u64
	"]
	0 --> 1
	8["
	arg__387
	1
	"]
	6["
	arg__389
	0
	"]
	5["
	end
	"]
	2 --> 5
	4 --> 5
	7 --> 5
```
## I64_LT_S
```mermaid
---
config:
  layout: elk
---
graph TD
	10["
	state phi Stack 	"]
	2 --> 10
	5 --> 10
	9 --> 10
	7 --> 10
	7["
	eff__395
	push_u32
	"]
	6 --> 7
	1 --> 7
	4 --> 7
	4["
	else
	"]
	2 --> 4
	9 --> 4
	9["
	eff__393
	push_u32
	"]
	8 --> 9
	1 --> 9
	3 --> 9
	3["
	if
	"]
	2 --> 3
	2["
	cond__392
	U64_lt_s
	"]
	1 --> 2
	0 --> 2
	0["
	b
	pop_u64
	"]
	1["
	a
	pop_u64
	"]
	0 --> 1
	8["
	arg__394
	1
	"]
	6["
	arg__396
	0
	"]
	5["
	end
	"]
	2 --> 5
	4 --> 5
	7 --> 5
```
## I64_LT_U
```mermaid
---
config:
  layout: elk
---
graph TD
	10["
	state phi Stack 	"]
	2 --> 10
	5 --> 10
	9 --> 10
	7 --> 10
	7["
	eff__402
	push_u32
	"]
	6 --> 7
	1 --> 7
	4 --> 7
	4["
	else
	"]
	2 --> 4
	9 --> 4
	9["
	eff__400
	push_u32
	"]
	8 --> 9
	1 --> 9
	3 --> 9
	3["
	if
	"]
	2 --> 3
	2["
	cond__399
	u64.<
	"]
	1 --> 2
	0 --> 2
	0["
	b
	pop_u64
	"]
	1["
	a
	pop_u64
	"]
	0 --> 1
	8["
	arg__401
	1
	"]
	6["
	arg__403
	0
	"]
	5["
	end
	"]
	2 --> 5
	4 --> 5
	7 --> 5
```
## I64_LE_S
```mermaid
---
config:
  layout: elk
---
graph TD
	10["
	state phi Stack 	"]
	2 --> 10
	5 --> 10
	9 --> 10
	7 --> 10
	7["
	eff__409
	push_u32
	"]
	6 --> 7
	1 --> 7
	4 --> 7
	4["
	else
	"]
	2 --> 4
	9 --> 4
	9["
	eff__407
	push_u32
	"]
	8 --> 9
	1 --> 9
	3 --> 9
	3["
	if
	"]
	2 --> 3
	2["
	cond__406
	U64_le_s
	"]
	1 --> 2
	0 --> 2
	0["
	b
	pop_u64
	"]
	1["
	a
	pop_u64
	"]
	0 --> 1
	8["
	arg__408
	1
	"]
	6["
	arg__410
	0
	"]
	5["
	end
	"]
	2 --> 5
	4 --> 5
	7 --> 5
```
## I64_LE_U
```mermaid
---
config:
  layout: elk
---
graph TD
	10["
	state phi Stack 	"]
	2 --> 10
	5 --> 10
	9 --> 10
	7 --> 10
	7["
	eff__416
	push_u32
	"]
	6 --> 7
	1 --> 7
	4 --> 7
	4["
	else
	"]
	2 --> 4
	9 --> 4
	9["
	eff__414
	push_u32
	"]
	8 --> 9
	1 --> 9
	3 --> 9
	3["
	if
	"]
	2 --> 3
	2["
	cond__413
	u64.<=
	"]
	1 --> 2
	0 --> 2
	0["
	b
	pop_u64
	"]
	1["
	a
	pop_u64
	"]
	0 --> 1
	8["
	arg__415
	1
	"]
	6["
	arg__417
	0
	"]
	5["
	end
	"]
	2 --> 5
	4 --> 5
	7 --> 5
```
## I64_GT_S
```mermaid
---
config:
  layout: elk
---
graph TD
	10["
	state phi Stack 	"]
	2 --> 10
	5 --> 10
	9 --> 10
	7 --> 10
	7["
	eff__423
	push_u32
	"]
	6 --> 7
	1 --> 7
	4 --> 7
	4["
	else
	"]
	2 --> 4
	9 --> 4
	9["
	eff__421
	push_u32
	"]
	8 --> 9
	1 --> 9
	3 --> 9
	3["
	if
	"]
	2 --> 3
	2["
	cond__420
	U64_gt_s
	"]
	1 --> 2
	0 --> 2
	0["
	b
	pop_u64
	"]
	1["
	a
	pop_u64
	"]
	0 --> 1
	8["
	arg__422
	1
	"]
	6["
	arg__424
	0
	"]
	5["
	end
	"]
	2 --> 5
	4 --> 5
	7 --> 5
```
## I64_GT_U
```mermaid
---
config:
  layout: elk
---
graph TD
	10["
	state phi Stack 	"]
	2 --> 10
	5 --> 10
	9 --> 10
	7 --> 10
	7["
	eff__430
	push_u32
	"]
	6 --> 7
	1 --> 7
	4 --> 7
	4["
	else
	"]
	2 --> 4
	9 --> 4
	9["
	eff__428
	push_u32
	"]
	8 --> 9
	1 --> 9
	3 --> 9
	3["
	if
	"]
	2 --> 3
	2["
	cond__427
	u64.>
	"]
	1 --> 2
	0 --> 2
	0["
	b
	pop_u64
	"]
	1["
	a
	pop_u64
	"]
	0 --> 1
	8["
	arg__429
	1
	"]
	6["
	arg__431
	0
	"]
	5["
	end
	"]
	2 --> 5
	4 --> 5
	7 --> 5
```
## I64_GE_S
```mermaid
---
config:
  layout: elk
---
graph TD
	10["
	state phi Stack 	"]
	2 --> 10
	5 --> 10
	9 --> 10
	7 --> 10
	7["
	eff__437
	push_u32
	"]
	6 --> 7
	1 --> 7
	4 --> 7
	4["
	else
	"]
	2 --> 4
	9 --> 4
	9["
	eff__435
	push_u32
	"]
	8 --> 9
	1 --> 9
	3 --> 9
	3["
	if
	"]
	2 --> 3
	2["
	cond__434
	U64_ge_s
	"]
	1 --> 2
	0 --> 2
	0["
	b
	pop_u64
	"]
	1["
	a
	pop_u64
	"]
	0 --> 1
	8["
	arg__436
	1
	"]
	6["
	arg__438
	0
	"]
	5["
	end
	"]
	2 --> 5
	4 --> 5
	7 --> 5
```
## I64_GE_U
```mermaid
---
config:
  layout: elk
---
graph TD
	10["
	state phi Stack 	"]
	2 --> 10
	5 --> 10
	9 --> 10
	7 --> 10
	7["
	eff__444
	push_u32
	"]
	6 --> 7
	1 --> 7
	4 --> 7
	4["
	else
	"]
	2 --> 4
	9 --> 4
	9["
	eff__442
	push_u32
	"]
	8 --> 9
	1 --> 9
	3 --> 9
	3["
	if
	"]
	2 --> 3
	2["
	cond__441
	U64_ge_u
	"]
	1 --> 2
	0 --> 2
	0["
	b
	pop_u64
	"]
	1["
	a
	pop_u64
	"]
	0 --> 1
	8["
	arg__443
	1
	"]
	6["
	arg__445
	0
	"]
	5["
	end
	"]
	2 --> 5
	4 --> 5
	7 --> 5
```
## I64_EXTEND8_S
```mermaid
---
config:
  layout: elk
---
graph TD
	2["
	eff__448
	push_u64
	"]
	1 --> 2
	0 --> 2
	0["
	a
	pop_u64
	"]
	1["
	r
	U64_extend8_s
	"]
	0 --> 1
```
## I64_EXTEND16_S
```mermaid
---
config:
  layout: elk
---
graph TD
	2["
	eff__451
	push_u64
	"]
	1 --> 2
	0 --> 2
	0["
	a
	pop_u64
	"]
	1["
	r
	U64_extend16_s
	"]
	0 --> 1
```
## I64_EXTEND32_S
```mermaid
---
config:
  layout: elk
---
graph TD
	2["
	eff__454
	push_u64
	"]
	1 --> 2
	0 --> 2
	0["
	a
	pop_u64
	"]
	1["
	r
	U64_extend32_s
	"]
	0 --> 1
```
## F32_CONST
```mermaid
---
config:
  layout: elk
---
graph TD
	2["
	eff__457
	push_f32
	"]
	1 --> 2
	1["
	arg__458
	f32_reinterpret_u32
	"]
	0 --> 1
	0["
	x
	imm_readULEB32
	"]
```
## F32_ADD
```mermaid
---
config:
  layout: elk
---
graph TD
	3["
	eff__460
	push_f32
	"]
	2 --> 3
	1 --> 3
	1["
	a
	pop_f32
	"]
	0 --> 1
	0["
	b
	pop_f32
	"]
	2["
	r
	float.+
	"]
	1 --> 2
	0 --> 2
```
## F32_SUB
```mermaid
---
config:
  layout: elk
---
graph TD
	3["
	eff__464
	push_f32
	"]
	2 --> 3
	1 --> 3
	1["
	a
	pop_f32
	"]
	0 --> 1
	0["
	b
	pop_f32
	"]
	2["
	r
	float.-
	"]
	1 --> 2
	0 --> 2
```
## F32_MUL
```mermaid
---
config:
  layout: elk
---
graph TD
	3["
	eff__468
	push_f32
	"]
	2 --> 3
	1 --> 3
	1["
	a
	pop_f32
	"]
	0 --> 1
	0["
	b
	pop_f32
	"]
	2["
	r
	float.*
	"]
	1 --> 2
	0 --> 2
```
## F32_DIV
```mermaid
---
config:
  layout: elk
---
graph TD
	14["
	state phi Codebuilder 	"]
	3 --> 14
	6 --> 14
	7 --> 14
	7["
	ret__477
	trapDivideByZero
	"]
	1 --> 7
	4 --> 7
	4["
	if
	"]
	3 --> 4
	3["
	cond__476
	float.==
	"]
	0 --> 3
	2 --> 3
	2["
	arg__479
	0.0f
	"]
	0["
	b
	pop_f32
	"]
	1["
	a
	pop_f32
	"]
	0 --> 1
	6["
	end
	"]
	3 --> 6
	5 --> 6
	1 --> 6
	5["
	else
	"]
	3 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	7 --> 5
	13["
	state phi Sidetable 	"]
	3 --> 13
	6 --> 13
	7 --> 13
	12["
	state phi Memory 	"]
	3 --> 12
	6 --> 12
	7 --> 12
	11["
	state phi Tables 	"]
	3 --> 11
	6 --> 11
	7 --> 11
	10["
	state phi Locals 	"]
	3 --> 10
	6 --> 10
	7 --> 10
	9["
	state phi Stack 	"]
	3 --> 9
	6 --> 9
	7 --> 9
	1 --> 9
	8["
	state phi Codeptr 	"]
	3 --> 8
	6 --> 8
	7 --> 8
	16["
	eff__472
	push_f32
	"]
	15 --> 16
	9 --> 16
	15["
	r
	float./
	"]
	1 --> 15
	0 --> 15
```
## F32_SQRT
```mermaid
---
config:
  layout: elk
---
graph TD
	2["
	eff__480
	push_f32
	"]
	1 --> 2
	0 --> 2
	0["
	a
	pop_f32
	"]
	1["
	r
	float.sqrt
	"]
	0 --> 1
```
## F32_EQ
```mermaid
---
config:
  layout: elk
---
graph TD
	10["
	state phi Stack 	"]
	2 --> 10
	5 --> 10
	9 --> 10
	7 --> 10
	7["
	eff__486
	push_u32
	"]
	6 --> 7
	1 --> 7
	4 --> 7
	4["
	else
	"]
	2 --> 4
	9 --> 4
	9["
	eff__484
	push_u32
	"]
	8 --> 9
	1 --> 9
	3 --> 9
	3["
	if
	"]
	2 --> 3
	2["
	cond__483
	float.==
	"]
	1 --> 2
	0 --> 2
	0["
	b
	pop_f32
	"]
	1["
	a
	pop_f32
	"]
	0 --> 1
	8["
	arg__485
	1
	"]
	6["
	arg__487
	0
	"]
	5["
	end
	"]
	2 --> 5
	4 --> 5
	7 --> 5
```
## F32_NE
```mermaid
---
config:
  layout: elk
---
graph TD
	10["
	state phi Stack 	"]
	2 --> 10
	5 --> 10
	9 --> 10
	7 --> 10
	7["
	eff__493
	push_u32
	"]
	6 --> 7
	1 --> 7
	4 --> 7
	4["
	else
	"]
	2 --> 4
	9 --> 4
	9["
	eff__491
	push_u32
	"]
	8 --> 9
	1 --> 9
	3 --> 9
	3["
	if
	"]
	2 --> 3
	2["
	cond__490
	float.!=
	"]
	1 --> 2
	0 --> 2
	0["
	b
	pop_f32
	"]
	1["
	a
	pop_f32
	"]
	0 --> 1
	8["
	arg__492
	1
	"]
	6["
	arg__494
	0
	"]
	5["
	end
	"]
	2 --> 5
	4 --> 5
	7 --> 5
```
## F32_LT
```mermaid
---
config:
  layout: elk
---
graph TD
	10["
	state phi Stack 	"]
	2 --> 10
	5 --> 10
	9 --> 10
	7 --> 10
	7["
	eff__500
	push_u32
	"]
	6 --> 7
	1 --> 7
	4 --> 7
	4["
	else
	"]
	2 --> 4
	9 --> 4
	9["
	eff__498
	push_u32
	"]
	8 --> 9
	1 --> 9
	3 --> 9
	3["
	if
	"]
	2 --> 3
	2["
	cond__497
	float.<
	"]
	1 --> 2
	0 --> 2
	0["
	b
	pop_f32
	"]
	1["
	a
	pop_f32
	"]
	0 --> 1
	8["
	arg__499
	1
	"]
	6["
	arg__501
	0
	"]
	5["
	end
	"]
	2 --> 5
	4 --> 5
	7 --> 5
```
## F32_LE
```mermaid
---
config:
  layout: elk
---
graph TD
	10["
	state phi Stack 	"]
	2 --> 10
	5 --> 10
	9 --> 10
	7 --> 10
	7["
	eff__507
	push_u32
	"]
	6 --> 7
	1 --> 7
	4 --> 7
	4["
	else
	"]
	2 --> 4
	9 --> 4
	9["
	eff__505
	push_u32
	"]
	8 --> 9
	1 --> 9
	3 --> 9
	3["
	if
	"]
	2 --> 3
	2["
	cond__504
	float.<=
	"]
	1 --> 2
	0 --> 2
	0["
	b
	pop_f32
	"]
	1["
	a
	pop_f32
	"]
	0 --> 1
	8["
	arg__506
	1
	"]
	6["
	arg__508
	0
	"]
	5["
	end
	"]
	2 --> 5
	4 --> 5
	7 --> 5
```
## F32_GT
```mermaid
---
config:
  layout: elk
---
graph TD
	10["
	state phi Stack 	"]
	2 --> 10
	5 --> 10
	9 --> 10
	7 --> 10
	7["
	eff__514
	push_u32
	"]
	6 --> 7
	1 --> 7
	4 --> 7
	4["
	else
	"]
	2 --> 4
	9 --> 4
	9["
	eff__512
	push_u32
	"]
	8 --> 9
	1 --> 9
	3 --> 9
	3["
	if
	"]
	2 --> 3
	2["
	cond__511
	float.>
	"]
	1 --> 2
	0 --> 2
	0["
	b
	pop_f32
	"]
	1["
	a
	pop_f32
	"]
	0 --> 1
	8["
	arg__513
	1
	"]
	6["
	arg__515
	0
	"]
	5["
	end
	"]
	2 --> 5
	4 --> 5
	7 --> 5
```
## BR
```mermaid
---
config:
  layout: elk
---
graph TD
	3["
	st_put__521
	ctlxfer.put_BR
	"]
	1 --> 3
	1["
	label
	f_getLabel
	"]
	0 --> 1
	0["
	depth
	imm_readULEB32
	"]
	2["
	ret__518
	doBranch
	"]
	1 --> 2
	0 --> 2
```
## BR_IF
```mermaid
---
config:
  layout: elk
---
graph TD
	11["
	st_put__529
	ctlxfer.put_BR_IF
	"]
	1 --> 11
	1["
	label
	f_getLabel
	"]
	0 --> 1
	0["
	depth
	imm_readULEB32
	"]
	10["
	state phi Codeptr Stack Locals Tables Memory Sidetable Codebuilder 	"]
	4 --> 10
	7 --> 10
	9 --> 10
	8 --> 10
	8["
	ret__525
	doFallthru
	"]
	2 --> 8
	0 --> 8
	6 --> 8
	6["
	else
	"]
	4 --> 6
	9 --> 6
	9["
	ret__523
	doBranch
	"]
	1 --> 9
	2 --> 9
	0 --> 9
	5 --> 9
	5["
	if
	"]
	4 --> 5
	4["
	cond__522
	u32.!=
	"]
	2 --> 4
	3 --> 4
	3["
	arg__527
	0
	"]
	2["
	cond
	pop_u32
	"]
	7["
	end
	"]
	4 --> 7
	6 --> 7
	8 --> 7
```
## BR_TABLE
```mermaid
---
config:
  layout: elk
---
graph TD
	3["
	st_put__533
	ctlxfer.put_BR_TABLE
	"]
	0 --> 3
	0["
	labels
	imm_readLabels
	"]
	2["
	eff__530
	doSwitch
	"]
	0 --> 2
	1 --> 2
	1 --> 2
	0 --> 2
	1["
	key
	pop_u32
	"]
```
## BLOCK
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	eff__534
	doBlock
	"]
	0 --> 1
	0 --> 1
	0["
	bt
	imm_readBlockType
	"]
```
## LOOP
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	eff__536
	doLoop
	"]
	0 --> 1
	0 --> 1
	0["
	bt
	imm_readBlockType
	"]
```
## TRY
```mermaid
---
config:
  layout: elk
---
graph TD
	1["
	eff__538
	doTry
	"]
	0 --> 1
	0 --> 1
	0["
	bt
	imm_readBlockType
	"]
```
## IF
```mermaid
---
config:
  layout: elk
---
graph TD
	11["
	st_put__547
	ctlxfer.put_IF
	"]
	2 --> 11
	2["
	label
	doIf
	"]
	0 --> 2
	1 --> 2
	0 --> 2
	0["
	bt
	imm_readBlockType
	"]
	1["
	cond
	pop_u32
	"]
	10["
	state phi Codeptr Stack Locals Tables Memory Sidetable Codebuilder 	"]
	4 --> 10
	7 --> 10
	9 --> 10
	8 --> 10
	8["
	ret__543
	doFallthru
	"]
	2 --> 8
	2 --> 8
	2 --> 8
	2 --> 8
	2 --> 8
	2 --> 8
	2 --> 8
	6 --> 8
	6["
	else
	"]
	4 --> 6
	9 --> 6
	9["
	ret__541
	doBranch
	"]
	2 --> 9
	2 --> 9
	2 --> 9
	2 --> 9
	2 --> 9
	2 --> 9
	2 --> 9
	2 --> 9
	5 --> 9
	5["
	if
	"]
	4 --> 5
	4["
	cond__540
	u32.==
	"]
	1 --> 4
	3 --> 4
	3["
	arg__545
	0
	"]
	7["
	end
	"]
	4 --> 7
	6 --> 7
	8 --> 7
```
## ELSE
```mermaid
---
config:
  layout: elk
---
graph TD
	2["
	st_put__550
	ctlxfer.put_ELSE
	"]
	0 --> 2
	0["
	label
	doElse
	"]
	1["
	ret__548
	doBranch
	"]
	0 --> 1
	0 --> 1
	0 --> 1
	0 --> 1
	0 --> 1
	0 --> 1
	0 --> 1
	0 --> 1
```
## END
```mermaid
---
config:
  layout: elk
---
graph TD
	6["
	state phi Codeptr Stack Locals Tables Memory Sidetable Codebuilder 	"]
	1 --> 6
	4 --> 6
	5 --> 6
	0 --> 6
	0["
	eff__553
	doEnd
	"]
	5["
	ret__552
	doReturn
	"]
	0 --> 5
	0 --> 5
	0 --> 5
	0 --> 5
	0 --> 5
	0 --> 5
	0 --> 5
	2 --> 5
	2["
	if
	"]
	1 --> 2
	1["
	cond__551
	f_isAtEnd
	"]
	4["
	end
	"]
	1 --> 4
	3 --> 4
	0 --> 4
	3["
	else
	"]
	1 --> 3
	5 --> 3
```
## RETURN
```mermaid
---
config:
  layout: elk
---
graph TD
	0["
	ret__554
	doReturn
	"]
```
## REF_NULL
```mermaid
---
config:
  layout: elk
---
graph TD
	2["
	eff__555
	push_Object
	"]
	1 --> 2
	1["
	arg__556
	object_Null
	"]
	0["
	idx
	imm_readULEB32
	"]
```
## REF_IS_NULL
```mermaid
---
config:
  layout: elk
---
graph TD
	9["
	state phi Stack 	"]
	1 --> 9
	4 --> 9
	8 --> 9
	6 --> 9
	6["
	eff__560
	push_u32
	"]
	5 --> 6
	0 --> 6
	3 --> 6
	3["
	else
	"]
	1 --> 3
	8 --> 3
	8["
	eff__558
	push_u32
	"]
	7 --> 8
	0 --> 8
	2 --> 8
	2["
	if
	"]
	1 --> 2
	1["
	cond__557
	object_isNull
	"]
	0 --> 1
	0["
	obj
	pop_Object
	"]
	7["
	arg__559
	1
	"]
	5["
	arg__561
	0
	"]
	4["
	end
	"]
	1 --> 4
	3 --> 4
	6 --> 4
```
## REF_AS_NON_NULL
```mermaid
---
config:
  layout: elk
---
graph TD
	13["
	eff__563
	push_Object
	"]
	0 --> 13
	7 --> 13
	7["
	state phi Stack 	"]
	1 --> 7
	4 --> 7
	5 --> 7
	0 --> 7
	0["
	obj
	pop_Object
	"]
	5["
	eff__566
	trapNull
	"]
	0 --> 5
	2 --> 5
	2["
	if
	"]
	1 --> 2
	1["
	cond__565
	object_isNull
	"]
	0 --> 1
	4["
	end
	"]
	1 --> 4
	3 --> 4
	0 --> 4
	3["
	else
	"]
	1 --> 3
	5 --> 3
	5 --> 3
	5 --> 3
	5 --> 3
	5 --> 3
	5 --> 3
	5 --> 3
	12["
	state phi Codebuilder 	"]
	1 --> 12
	4 --> 12
	5 --> 12
	11["
	state phi Sidetable 	"]
	1 --> 11
	4 --> 11
	5 --> 11
	10["
	state phi Memory 	"]
	1 --> 10
	4 --> 10
	5 --> 10
	9["
	state phi Tables 	"]
	1 --> 9
	4 --> 9
	5 --> 9
	8["
	state phi Locals 	"]
	1 --> 8
	4 --> 8
	5 --> 8
	6["
	state phi Codeptr 	"]
	1 --> 6
	4 --> 6
	5 --> 6
```
## STRUCT_NEW
```mermaid
---
config:
  layout: elk
---
graph TD
	3["
	eff__568
	push_Object
	"]
	2 --> 3
	2["
	obj
	object_New
	"]
	1 --> 2
	1["
	sig
	m_getSignature
	"]
	0 --> 1
	0["
	struct_idx
	imm_readULEB32
	"]
```
## STRUCT_GET
```mermaid
---
config:
  layout: elk
---
graph TD
	15["
	state phi Sidetable 	"]
	5 --> 15
	8 --> 15
	9 --> 15
	9["
	ret__598
	trapNull
	"]
	4 --> 9
	1 --> 9
	6 --> 9
	6["
	if
	"]
	5 --> 6
	5["
	cond__597
	object_isNull
	"]
	4 --> 5
	4["
	obj
	pop_Object
	"]
	1["
	field_index
	imm_readULEB32
	"]
	0 --> 1
	0["
	struct_index
	imm_readULEB32
	"]
	8["
	end
	"]
	5 --> 8
	7 --> 8
	1 --> 8
	4 --> 8
	7["
	else
	"]
	5 --> 7
	9 --> 7
	9 --> 7
	9 --> 7
	9 --> 7
	9 --> 7
	9 --> 7
	9 --> 7
	14["
	state phi Memory 	"]
	5 --> 14
	8 --> 14
	9 --> 14
	13["
	state phi Tables 	"]
	5 --> 13
	8 --> 13
	9 --> 13
	12["
	state phi Locals 	"]
	5 --> 12
	8 --> 12
	9 --> 12
	11["
	state phi Stack 	"]
	5 --> 11
	8 --> 11
	9 --> 11
	4 --> 11
	10["
	state phi Codeptr 	"]
	5 --> 10
	8 --> 10
	9 --> 10
	1 --> 10
	3["
	offset
	m_getFieldOffset
	"]
	0 --> 3
	1 --> 3
	2["
	kind
	m_getFieldKind
	"]
	0 --> 2
	1 --> 2
	16["
	state phi Codebuilder 	"]
	5 --> 16
	8 --> 16
	9 --> 16
```
## STRUCT_GET_S
```mermaid
---
config:
  layout: elk
---
graph TD
	15["
	state phi Sidetable 	"]
	5 --> 15
	8 --> 15
	9 --> 15
	9["
	ret__617
	trapNull
	"]
	4 --> 9
	1 --> 9
	6 --> 9
	6["
	if
	"]
	5 --> 6
	5["
	cond__616
	object_isNull
	"]
	4 --> 5
	4["
	obj
	pop_Object
	"]
	1["
	field_index
	imm_readULEB32
	"]
	0 --> 1
	0["
	struct_index
	imm_readULEB32
	"]
	8["
	end
	"]
	5 --> 8
	7 --> 8
	1 --> 8
	4 --> 8
	7["
	else
	"]
	5 --> 7
	9 --> 7
	9 --> 7
	9 --> 7
	9 --> 7
	9 --> 7
	9 --> 7
	9 --> 7
	14["
	state phi Memory 	"]
	5 --> 14
	8 --> 14
	9 --> 14
	13["
	state phi Tables 	"]
	5 --> 13
	8 --> 13
	9 --> 13
	12["
	state phi Locals 	"]
	5 --> 12
	8 --> 12
	9 --> 12
	11["
	state phi Stack 	"]
	5 --> 11
	8 --> 11
	9 --> 11
	4 --> 11
	10["
	state phi Codeptr 	"]
	5 --> 10
	8 --> 10
	9 --> 10
	1 --> 10
	3["
	offset
	m_getFieldOffset
	"]
	0 --> 3
	1 --> 3
	2["
	kind
	m_getFieldKind
	"]
	0 --> 2
	1 --> 2
	16["
	state phi Codebuilder 	"]
	5 --> 16
	8 --> 16
	9 --> 16
```
## STRUCT_GET_U
```mermaid
---
config:
  layout: elk
---
graph TD
	15["
	state phi Sidetable 	"]
	5 --> 15
	8 --> 15
	9 --> 15
	9["
	ret__636
	trapNull
	"]
	4 --> 9
	1 --> 9
	6 --> 9
	6["
	if
	"]
	5 --> 6
	5["
	cond__635
	object_isNull
	"]
	4 --> 5
	4["
	obj
	pop_Object
	"]
	1["
	field_index
	imm_readULEB32
	"]
	0 --> 1
	0["
	struct_index
	imm_readULEB32
	"]
	8["
	end
	"]
	5 --> 8
	7 --> 8
	1 --> 8
	4 --> 8
	7["
	else
	"]
	5 --> 7
	9 --> 7
	9 --> 7
	9 --> 7
	9 --> 7
	9 --> 7
	9 --> 7
	9 --> 7
	14["
	state phi Memory 	"]
	5 --> 14
	8 --> 14
	9 --> 14
	13["
	state phi Tables 	"]
	5 --> 13
	8 --> 13
	9 --> 13
	12["
	state phi Locals 	"]
	5 --> 12
	8 --> 12
	9 --> 12
	11["
	state phi Stack 	"]
	5 --> 11
	8 --> 11
	9 --> 11
	4 --> 11
	10["
	state phi Codeptr 	"]
	5 --> 10
	8 --> 10
	9 --> 10
	1 --> 10
	3["
	offset
	m_getFieldOffset
	"]
	0 --> 3
	1 --> 3
	2["
	kind
	m_getFieldKind
	"]
	0 --> 2
	1 --> 2
	16["
	state phi Codebuilder 	"]
	5 --> 16
	8 --> 16
	9 --> 16
```
## I32_LOAD
```mermaid
---
config:
  layout: elk
---
graph TD
	13["
	if
	"]
	12 --> 13
	12["
	cond__643
	m_isMemory64
	"]
	10 --> 12
	10["
	memindex
	phi
	"]
	5 --> 10
	8 --> 10
	9 --> 10
	1 --> 10
	1["
	memindex
	0u
	"]
	9["
	memindex__656
	imm_readULEB32
	"]
	0 --> 9
	6 --> 9
	6["
	if
	"]
	5 --> 6
	5["
	cond__655
	u8.!=
	"]
	4 --> 5
	2 --> 5
	2["
	arg__658
	0
	"]
	4["
	arg__657
	u8.&
	"]
	0 --> 4
	3 --> 4
	3["
	arg__660
	0x40u8
	"]
	0["
	flags
	imm_readU8
	"]
	8["
	end
	"]
	5 --> 8
	7 --> 8
	1 --> 8
	0 --> 8
	7["
	else
	"]
	5 --> 7
	9 --> 7
	9 --> 7
	11["
	state phi Codeptr 	"]
	5 --> 11
	8 --> 11
	9 --> 11
	0 --> 11
	25["
	state phi Stack 	"]
	12 --> 25
	15 --> 25
	23 --> 25
	19 --> 25
	19["
	eff__649
	push_u32
	"]
	18 --> 19
	17 --> 19
	14 --> 19
	14["
	else
	"]
	12 --> 14
	20 --> 14
	23 --> 14
	23["
	eff__644
	push_u32
	"]
	22 --> 23
	21 --> 23
	13 --> 23
	21["
	index
	pop_u64
	"]
	13 --> 21
	22["
	val
	mach_readMemory64_u32
	"]
	10 --> 22
	21 --> 22
	20 --> 22
	13 --> 22
	20["
	offset
	imm_readULEB64
	"]
	11 --> 20
	13 --> 20
	17["
	index
	pop_u32
	"]
	14 --> 17
	18["
	val
	mach_readMemory32_u32
	"]
	10 --> 18
	17 --> 18
	16 --> 18
	14 --> 18
	16["
	offset
	imm_readULEB32
	"]
	11 --> 16
	14 --> 16
	15["
	end
	"]
	12 --> 15
	14 --> 15
	16 --> 15
	19 --> 15
	24["
	state phi Codeptr 	"]
	12 --> 24
	15 --> 24
	20 --> 24
	16 --> 24
```
## I32_LOAD8_U
```mermaid
---
config:
  layout: elk
---
graph TD
	13["
	if
	"]
	12 --> 13
	12["
	cond__661
	m_isMemory64
	"]
	10 --> 12
	10["
	memindex
	phi
	"]
	5 --> 10
	8 --> 10
	9 --> 10
	1 --> 10
	1["
	memindex
	0u
	"]
	9["
	memindex__674
	imm_readULEB32
	"]
	0 --> 9
	6 --> 9
	6["
	if
	"]
	5 --> 6
	5["
	cond__673
	u8.!=
	"]
	4 --> 5
	2 --> 5
	2["
	arg__676
	0
	"]
	4["
	arg__675
	u8.&
	"]
	0 --> 4
	3 --> 4
	3["
	arg__678
	0x40u8
	"]
	0["
	flags
	imm_readU8
	"]
	8["
	end
	"]
	5 --> 8
	7 --> 8
	1 --> 8
	0 --> 8
	7["
	else
	"]
	5 --> 7
	9 --> 7
	9 --> 7
	11["
	state phi Codeptr 	"]
	5 --> 11
	8 --> 11
	9 --> 11
	0 --> 11
	25["
	state phi Stack 	"]
	12 --> 25
	15 --> 25
	23 --> 25
	19 --> 25
	19["
	eff__667
	push_u32
	"]
	18 --> 19
	17 --> 19
	14 --> 19
	14["
	else
	"]
	12 --> 14
	20 --> 14
	23 --> 14
	23["
	eff__662
	push_u32
	"]
	22 --> 23
	21 --> 23
	13 --> 23
	21["
	index
	pop_u64
	"]
	13 --> 21
	22["
	val
	mach_readMemory64_u8
	"]
	10 --> 22
	21 --> 22
	20 --> 22
	13 --> 22
	20["
	offset
	imm_readULEB64
	"]
	11 --> 20
	13 --> 20
	17["
	index
	pop_u32
	"]
	14 --> 17
	18["
	val
	mach_readMemory32_u8
	"]
	10 --> 18
	17 --> 18
	16 --> 18
	14 --> 18
	16["
	offset
	imm_readULEB32
	"]
	11 --> 16
	14 --> 16
	15["
	end
	"]
	12 --> 15
	14 --> 15
	16 --> 15
	19 --> 15
	24["
	state phi Codeptr 	"]
	12 --> 24
	15 --> 24
	20 --> 24
	16 --> 24
```
## I32_LOAD16_S
```mermaid
---
config:
  layout: elk
---
graph TD
	13["
	if
	"]
	12 --> 13
	12["
	cond__679
	m_isMemory64
	"]
	10 --> 12
	10["
	memindex
	phi
	"]
	5 --> 10
	8 --> 10
	9 --> 10
	1 --> 10
	1["
	memindex
	0u
	"]
	9["
	memindex__692
	imm_readULEB32
	"]
	0 --> 9
	6 --> 9
	6["
	if
	"]
	5 --> 6
	5["
	cond__691
	u8.!=
	"]
	4 --> 5
	2 --> 5
	2["
	arg__694
	0
	"]
	4["
	arg__693
	u8.&
	"]
	0 --> 4
	3 --> 4
	3["
	arg__696
	0x40u8
	"]
	0["
	flags
	imm_readU8
	"]
	8["
	end
	"]
	5 --> 8
	7 --> 8
	1 --> 8
	0 --> 8
	7["
	else
	"]
	5 --> 7
	9 --> 7
	9 --> 7
	11["
	state phi Codeptr 	"]
	5 --> 11
	8 --> 11
	9 --> 11
	0 --> 11
	25["
	state phi Stack 	"]
	12 --> 25
	15 --> 25
	23 --> 25
	19 --> 25
	19["
	eff__685
	push_u32
	"]
	18 --> 19
	17 --> 19
	14 --> 19
	14["
	else
	"]
	12 --> 14
	20 --> 14
	23 --> 14
	23["
	eff__680
	push_u32
	"]
	22 --> 23
	21 --> 23
	13 --> 23
	21["
	index
	pop_u64
	"]
	13 --> 21
	22["
	val
	mach_readMemory64_u16
	"]
	10 --> 22
	21 --> 22
	20 --> 22
	13 --> 22
	20["
	offset
	imm_readULEB64
	"]
	11 --> 20
	13 --> 20
	17["
	index
	pop_u32
	"]
	14 --> 17
	18["
	val
	mach_readMemory32_u16
	"]
	10 --> 18
	17 --> 18
	16 --> 18
	14 --> 18
	16["
	offset
	imm_readULEB32
	"]
	11 --> 16
	14 --> 16
	15["
	end
	"]
	12 --> 15
	14 --> 15
	16 --> 15
	19 --> 15
	24["
	state phi Codeptr 	"]
	12 --> 24
	15 --> 24
	20 --> 24
	16 --> 24
```
## I64_LOAD
```mermaid
---
config:
  layout: elk
---
graph TD
	13["
	if
	"]
	12 --> 13
	12["
	cond__697
	m_isMemory64
	"]
	10 --> 12
	10["
	memindex
	phi
	"]
	5 --> 10
	8 --> 10
	9 --> 10
	1 --> 10
	1["
	memindex
	0u
	"]
	9["
	memindex__710
	imm_readULEB32
	"]
	0 --> 9
	6 --> 9
	6["
	if
	"]
	5 --> 6
	5["
	cond__709
	u8.!=
	"]
	4 --> 5
	2 --> 5
	2["
	arg__712
	0
	"]
	4["
	arg__711
	u8.&
	"]
	0 --> 4
	3 --> 4
	3["
	arg__714
	0x40u8
	"]
	0["
	flags
	imm_readU8
	"]
	8["
	end
	"]
	5 --> 8
	7 --> 8
	1 --> 8
	0 --> 8
	7["
	else
	"]
	5 --> 7
	9 --> 7
	9 --> 7
	11["
	state phi Codeptr 	"]
	5 --> 11
	8 --> 11
	9 --> 11
	0 --> 11
	25["
	state phi Stack 	"]
	12 --> 25
	15 --> 25
	23 --> 25
	19 --> 25
	19["
	eff__703
	push_u64
	"]
	18 --> 19
	17 --> 19
	14 --> 19
	14["
	else
	"]
	12 --> 14
	20 --> 14
	23 --> 14
	23["
	eff__698
	push_u64
	"]
	22 --> 23
	21 --> 23
	13 --> 23
	21["
	index
	pop_u64
	"]
	13 --> 21
	22["
	val
	mach_readMemory64_u64
	"]
	10 --> 22
	21 --> 22
	20 --> 22
	13 --> 22
	20["
	offset
	imm_readULEB64
	"]
	11 --> 20
	13 --> 20
	17["
	index
	pop_u32
	"]
	14 --> 17
	18["
	val
	mach_readMemory32_u64
	"]
	10 --> 18
	17 --> 18
	16 --> 18
	14 --> 18
	16["
	offset
	imm_readULEB32
	"]
	11 --> 16
	14 --> 16
	15["
	end
	"]
	12 --> 15
	14 --> 15
	16 --> 15
	19 --> 15
	24["
	state phi Codeptr 	"]
	12 --> 24
	15 --> 24
	20 --> 24
	16 --> 24
```
## F32_LOAD
```mermaid
---
config:
  layout: elk
---
graph TD
	13["
	if
	"]
	12 --> 13
	12["
	cond__715
	m_isMemory64
	"]
	10 --> 12
	10["
	memindex
	phi
	"]
	5 --> 10
	8 --> 10
	9 --> 10
	1 --> 10
	1["
	memindex
	0u
	"]
	9["
	memindex__728
	imm_readULEB32
	"]
	0 --> 9
	6 --> 9
	6["
	if
	"]
	5 --> 6
	5["
	cond__727
	u8.!=
	"]
	4 --> 5
	2 --> 5
	2["
	arg__730
	0
	"]
	4["
	arg__729
	u8.&
	"]
	0 --> 4
	3 --> 4
	3["
	arg__732
	0x40u8
	"]
	0["
	flags
	imm_readU8
	"]
	8["
	end
	"]
	5 --> 8
	7 --> 8
	1 --> 8
	0 --> 8
	7["
	else
	"]
	5 --> 7
	9 --> 7
	9 --> 7
	11["
	state phi Codeptr 	"]
	5 --> 11
	8 --> 11
	9 --> 11
	0 --> 11
	25["
	state phi Stack 	"]
	12 --> 25
	15 --> 25
	23 --> 25
	19 --> 25
	19["
	eff__721
	push_f32
	"]
	18 --> 19
	17 --> 19
	14 --> 19
	14["
	else
	"]
	12 --> 14
	20 --> 14
	23 --> 14
	23["
	eff__716
	push_f32
	"]
	22 --> 23
	21 --> 23
	13 --> 23
	21["
	index
	pop_u64
	"]
	13 --> 21
	22["
	val
	mach_readMemory64_f32
	"]
	10 --> 22
	21 --> 22
	20 --> 22
	13 --> 22
	20["
	offset
	imm_readULEB64
	"]
	11 --> 20
	13 --> 20
	17["
	index
	pop_u32
	"]
	14 --> 17
	18["
	val
	mach_readMemory32_f32
	"]
	10 --> 18
	17 --> 18
	16 --> 18
	14 --> 18
	16["
	offset
	imm_readULEB32
	"]
	11 --> 16
	14 --> 16
	15["
	end
	"]
	12 --> 15
	14 --> 15
	16 --> 15
	19 --> 15
	24["
	state phi Codeptr 	"]
	12 --> 24
	15 --> 24
	20 --> 24
	16 --> 24
```
## F64_LOAD
```mermaid
---
config:
  layout: elk
---
graph TD
	13["
	if
	"]
	12 --> 13
	12["
	cond__733
	m_isMemory64
	"]
	10 --> 12
	10["
	memindex
	phi
	"]
	5 --> 10
	8 --> 10
	9 --> 10
	1 --> 10
	1["
	memindex
	0u
	"]
	9["
	memindex__746
	imm_readULEB32
	"]
	0 --> 9
	6 --> 9
	6["
	if
	"]
	5 --> 6
	5["
	cond__745
	u8.!=
	"]
	4 --> 5
	2 --> 5
	2["
	arg__748
	0
	"]
	4["
	arg__747
	u8.&
	"]
	0 --> 4
	3 --> 4
	3["
	arg__750
	0x40u8
	"]
	0["
	flags
	imm_readU8
	"]
	8["
	end
	"]
	5 --> 8
	7 --> 8
	1 --> 8
	0 --> 8
	7["
	else
	"]
	5 --> 7
	9 --> 7
	9 --> 7
	11["
	state phi Codeptr 	"]
	5 --> 11
	8 --> 11
	9 --> 11
	0 --> 11
	25["
	state phi Stack 	"]
	12 --> 25
	15 --> 25
	23 --> 25
	19 --> 25
	19["
	eff__739
	push_f64
	"]
	18 --> 19
	17 --> 19
	14 --> 19
	14["
	else
	"]
	12 --> 14
	20 --> 14
	23 --> 14
	23["
	eff__734
	push_f64
	"]
	22 --> 23
	21 --> 23
	13 --> 23
	21["
	index
	pop_u64
	"]
	13 --> 21
	22["
	val
	mach_readMemory64_f64
	"]
	10 --> 22
	21 --> 22
	20 --> 22
	13 --> 22
	20["
	offset
	imm_readULEB64
	"]
	11 --> 20
	13 --> 20
	17["
	index
	pop_u32
	"]
	14 --> 17
	18["
	val
	mach_readMemory32_f64
	"]
	10 --> 18
	17 --> 18
	16 --> 18
	14 --> 18
	16["
	offset
	imm_readULEB32
	"]
	11 --> 16
	14 --> 16
	15["
	end
	"]
	12 --> 15
	14 --> 15
	16 --> 15
	19 --> 15
	24["
	state phi Codeptr 	"]
	12 --> 24
	15 --> 24
	20 --> 24
	16 --> 24
```
## I32_STORE
```mermaid
---
config:
  layout: elk
---
graph TD
	14["
	if
	"]
	13 --> 14
	13["
	cond__751
	m_isMemory64
	"]
	10 --> 13
	10["
	memindex
	phi
	"]
	5 --> 10
	8 --> 10
	9 --> 10
	1 --> 10
	1["
	memindex
	0u
	"]
	9["
	memindex__764
	imm_readULEB32
	"]
	0 --> 9
	6 --> 9
	6["
	if
	"]
	5 --> 6
	5["
	cond__763
	u8.!=
	"]
	4 --> 5
	2 --> 5
	2["
	arg__766
	0
	"]
	4["
	arg__765
	u8.&
	"]
	0 --> 4
	3 --> 4
	3["
	arg__768
	0x40u8
	"]
	0["
	flags
	imm_readU8
	"]
	8["
	end
	"]
	5 --> 8
	7 --> 8
	1 --> 8
	0 --> 8
	7["
	else
	"]
	5 --> 7
	9 --> 7
	9 --> 7
	11["
	state phi Codeptr 	"]
	5 --> 11
	8 --> 11
	9 --> 11
	0 --> 11
	25["
	state phi Memory 	"]
	13 --> 25
	16 --> 25
	22 --> 25
	19 --> 25
	19["
	eff__757
	mach_writeMemory32_u32
	"]
	10 --> 19
	18 --> 19
	17 --> 19
	12 --> 19
	15 --> 19
	15["
	else
	"]
	13 --> 15
	20 --> 15
	21 --> 15
	22 --> 15
	22["
	eff__752
	mach_writeMemory64_u32
	"]
	10 --> 22
	21 --> 22
	20 --> 22
	12 --> 22
	14 --> 22
	12["
	val
	pop_u32
	"]
	20["
	offset
	imm_readULEB64
	"]
	11 --> 20
	14 --> 20
	21["
	index
	pop_u64
	"]
	12 --> 21
	14 --> 21
	17["
	offset
	imm_readULEB32
	"]
	11 --> 17
	15 --> 17
	18["
	index
	pop_u32
	"]
	12 --> 18
	15 --> 18
	16["
	end
	"]
	13 --> 16
	15 --> 16
	17 --> 16
	18 --> 16
	19 --> 16
	24["
	state phi Stack 	"]
	13 --> 24
	16 --> 24
	21 --> 24
	18 --> 24
	23["
	state phi Codeptr 	"]
	13 --> 23
	16 --> 23
	20 --> 23
	17 --> 23
```
## I32_STORE8
```mermaid
---
config:
  layout: elk
---
graph TD
	14["
	if
	"]
	13 --> 14
	13["
	cond__769
	m_isMemory64
	"]
	10 --> 13
	10["
	memindex
	phi
	"]
	5 --> 10
	8 --> 10
	9 --> 10
	1 --> 10
	1["
	memindex
	0u
	"]
	9["
	memindex__782
	imm_readULEB32
	"]
	0 --> 9
	6 --> 9
	6["
	if
	"]
	5 --> 6
	5["
	cond__781
	u8.!=
	"]
	4 --> 5
	2 --> 5
	2["
	arg__784
	0
	"]
	4["
	arg__783
	u8.&
	"]
	0 --> 4
	3 --> 4
	3["
	arg__786
	0x40u8
	"]
	0["
	flags
	imm_readU8
	"]
	8["
	end
	"]
	5 --> 8
	7 --> 8
	1 --> 8
	0 --> 8
	7["
	else
	"]
	5 --> 7
	9 --> 7
	9 --> 7
	11["
	state phi Codeptr 	"]
	5 --> 11
	8 --> 11
	9 --> 11
	0 --> 11
	25["
	state phi Memory 	"]
	13 --> 25
	16 --> 25
	22 --> 25
	19 --> 25
	19["
	eff__775
	mach_writeMemory32_u8
	"]
	10 --> 19
	18 --> 19
	17 --> 19
	12 --> 19
	15 --> 19
	15["
	else
	"]
	13 --> 15
	20 --> 15
	21 --> 15
	22 --> 15
	22["
	eff__770
	mach_writeMemory64_u8
	"]
	10 --> 22
	21 --> 22
	20 --> 22
	12 --> 22
	14 --> 22
	12["
	val
	pop_u32
	"]
	20["
	offset
	imm_readULEB64
	"]
	11 --> 20
	14 --> 20
	21["
	index
	pop_u64
	"]
	12 --> 21
	14 --> 21
	17["
	offset
	imm_readULEB32
	"]
	11 --> 17
	15 --> 17
	18["
	index
	pop_u32
	"]
	12 --> 18
	15 --> 18
	16["
	end
	"]
	13 --> 16
	15 --> 16
	17 --> 16
	18 --> 16
	19 --> 16
	24["
	state phi Stack 	"]
	13 --> 24
	16 --> 24
	21 --> 24
	18 --> 24
	23["
	state phi Codeptr 	"]
	13 --> 23
	16 --> 23
	20 --> 23
	17 --> 23
```
## I32_STORE16
```mermaid
---
config:
  layout: elk
---
graph TD
	14["
	if
	"]
	13 --> 14
	13["
	cond__787
	m_isMemory64
	"]
	10 --> 13
	10["
	memindex
	phi
	"]
	5 --> 10
	8 --> 10
	9 --> 10
	1 --> 10
	1["
	memindex
	0u
	"]
	9["
	memindex__800
	imm_readULEB32
	"]
	0 --> 9
	6 --> 9
	6["
	if
	"]
	5 --> 6
	5["
	cond__799
	u8.!=
	"]
	4 --> 5
	2 --> 5
	2["
	arg__802
	0
	"]
	4["
	arg__801
	u8.&
	"]
	0 --> 4
	3 --> 4
	3["
	arg__804
	0x40u8
	"]
	0["
	flags
	imm_readU8
	"]
	8["
	end
	"]
	5 --> 8
	7 --> 8
	1 --> 8
	0 --> 8
	7["
	else
	"]
	5 --> 7
	9 --> 7
	9 --> 7
	11["
	state phi Codeptr 	"]
	5 --> 11
	8 --> 11
	9 --> 11
	0 --> 11
	25["
	state phi Memory 	"]
	13 --> 25
	16 --> 25
	22 --> 25
	19 --> 25
	19["
	eff__793
	mach_writeMemory32_u16
	"]
	10 --> 19
	18 --> 19
	17 --> 19
	12 --> 19
	15 --> 19
	15["
	else
	"]
	13 --> 15
	20 --> 15
	21 --> 15
	22 --> 15
	22["
	eff__788
	mach_writeMemory64_u16
	"]
	10 --> 22
	21 --> 22
	20 --> 22
	12 --> 22
	14 --> 22
	12["
	val
	pop_u32
	"]
	20["
	offset
	imm_readULEB64
	"]
	11 --> 20
	14 --> 20
	21["
	index
	pop_u64
	"]
	12 --> 21
	14 --> 21
	17["
	offset
	imm_readULEB32
	"]
	11 --> 17
	15 --> 17
	18["
	index
	pop_u32
	"]
	12 --> 18
	15 --> 18
	16["
	end
	"]
	13 --> 16
	15 --> 16
	17 --> 16
	18 --> 16
	19 --> 16
	24["
	state phi Stack 	"]
	13 --> 24
	16 --> 24
	21 --> 24
	18 --> 24
	23["
	state phi Codeptr 	"]
	13 --> 23
	16 --> 23
	20 --> 23
	17 --> 23
```
## I64_STORE
```mermaid
---
config:
  layout: elk
---
graph TD
	14["
	if
	"]
	13 --> 14
	13["
	cond__805
	m_isMemory64
	"]
	10 --> 13
	10["
	memindex
	phi
	"]
	5 --> 10
	8 --> 10
	9 --> 10
	1 --> 10
	1["
	memindex
	0u
	"]
	9["
	memindex__818
	imm_readULEB32
	"]
	0 --> 9
	6 --> 9
	6["
	if
	"]
	5 --> 6
	5["
	cond__817
	u8.!=
	"]
	4 --> 5
	2 --> 5
	2["
	arg__820
	0
	"]
	4["
	arg__819
	u8.&
	"]
	0 --> 4
	3 --> 4
	3["
	arg__822
	0x40u8
	"]
	0["
	flags
	imm_readU8
	"]
	8["
	end
	"]
	5 --> 8
	7 --> 8
	1 --> 8
	0 --> 8
	7["
	else
	"]
	5 --> 7
	9 --> 7
	9 --> 7
	11["
	state phi Codeptr 	"]
	5 --> 11
	8 --> 11
	9 --> 11
	0 --> 11
	25["
	state phi Memory 	"]
	13 --> 25
	16 --> 25
	22 --> 25
	19 --> 25
	19["
	eff__811
	mach_writeMemory32_u64
	"]
	10 --> 19
	18 --> 19
	17 --> 19
	12 --> 19
	15 --> 19
	15["
	else
	"]
	13 --> 15
	20 --> 15
	21 --> 15
	22 --> 15
	22["
	eff__806
	mach_writeMemory64_u64
	"]
	10 --> 22
	21 --> 22
	20 --> 22
	12 --> 22
	14 --> 22
	12["
	val
	pop_u64
	"]
	20["
	offset
	imm_readULEB64
	"]
	11 --> 20
	14 --> 20
	21["
	index
	pop_u64
	"]
	12 --> 21
	14 --> 21
	17["
	offset
	imm_readULEB32
	"]
	11 --> 17
	15 --> 17
	18["
	index
	pop_u32
	"]
	12 --> 18
	15 --> 18
	16["
	end
	"]
	13 --> 16
	15 --> 16
	17 --> 16
	18 --> 16
	19 --> 16
	24["
	state phi Stack 	"]
	13 --> 24
	16 --> 24
	21 --> 24
	18 --> 24
	23["
	state phi Codeptr 	"]
	13 --> 23
	16 --> 23
	20 --> 23
	17 --> 23
```
## F32_STORE
```mermaid
---
config:
  layout: elk
---
graph TD
	14["
	if
	"]
	13 --> 14
	13["
	cond__823
	m_isMemory64
	"]
	10 --> 13
	10["
	memindex
	phi
	"]
	5 --> 10
	8 --> 10
	9 --> 10
	1 --> 10
	1["
	memindex
	0u
	"]
	9["
	memindex__836
	imm_readULEB32
	"]
	0 --> 9
	6 --> 9
	6["
	if
	"]
	5 --> 6
	5["
	cond__835
	u8.!=
	"]
	4 --> 5
	2 --> 5
	2["
	arg__838
	0
	"]
	4["
	arg__837
	u8.&
	"]
	0 --> 4
	3 --> 4
	3["
	arg__840
	0x40u8
	"]
	0["
	flags
	imm_readU8
	"]
	8["
	end
	"]
	5 --> 8
	7 --> 8
	1 --> 8
	0 --> 8
	7["
	else
	"]
	5 --> 7
	9 --> 7
	9 --> 7
	11["
	state phi Codeptr 	"]
	5 --> 11
	8 --> 11
	9 --> 11
	0 --> 11
	24["
	state phi Stack 	"]
	13 --> 24
	16 --> 24
	21 --> 24
	18 --> 24
	18["
	index
	pop_u32
	"]
	12 --> 18
	15 --> 18
	15["
	else
	"]
	13 --> 15
	20 --> 15
	21 --> 15
	21["
	index
	pop_u64
	"]
	12 --> 21
	14 --> 21
	12["
	val
	pop_f32
	"]
	20["
	offset
	imm_readULEB64
	"]
	11 --> 20
	14 --> 20
	16["
	end
	"]
	13 --> 16
	15 --> 16
	17 --> 16
	18 --> 16
	17["
	offset
	imm_readULEB32
	"]
	11 --> 17
	15 --> 17
	23["
	state phi Codeptr 	"]
	13 --> 23
	16 --> 23
	20 --> 23
	17 --> 23
	22["
	eff__824
	mach_writeMemory64_f32
	"]
	10 --> 22
	21 --> 22
	20 --> 22
	12 --> 22
	14 --> 22
	19["
	eff__829
	mach_writeMemory32_f32
	"]
	10 --> 19
	18 --> 19
	17 --> 19
	12 --> 19
	15 --> 19
```
## F64_STORE
```mermaid
---
config:
  layout: elk
---
graph TD
	14["
	if
	"]
	13 --> 14
	13["
	cond__841
	m_isMemory64
	"]
	10 --> 13
	10["
	memindex
	phi
	"]
	5 --> 10
	8 --> 10
	9 --> 10
	1 --> 10
	1["
	memindex
	0u
	"]
	9["
	memindex__854
	imm_readULEB32
	"]
	0 --> 9
	6 --> 9
	6["
	if
	"]
	5 --> 6
	5["
	cond__853
	u8.!=
	"]
	4 --> 5
	2 --> 5
	2["
	arg__856
	0
	"]
	4["
	arg__855
	u8.&
	"]
	0 --> 4
	3 --> 4
	3["
	arg__858
	0x40u8
	"]
	0["
	flags
	imm_readU8
	"]
	8["
	end
	"]
	5 --> 8
	7 --> 8
	1 --> 8
	0 --> 8
	7["
	else
	"]
	5 --> 7
	9 --> 7
	9 --> 7
	11["
	state phi Codeptr 	"]
	5 --> 11
	8 --> 11
	9 --> 11
	0 --> 11
	25["
	state phi Memory 	"]
	13 --> 25
	16 --> 25
	22 --> 25
	19 --> 25
	19["
	eff__847
	mach_writeMemory32_f64
	"]
	10 --> 19
	18 --> 19
	17 --> 19
	12 --> 19
	15 --> 19
	15["
	else
	"]
	13 --> 15
	20 --> 15
	21 --> 15
	22 --> 15
	22["
	eff__842
	mach_writeMemory64_f64
	"]
	10 --> 22
	21 --> 22
	20 --> 22
	12 --> 22
	14 --> 22
	12["
	val
	pop_f64
	"]
	20["
	offset
	imm_readULEB64
	"]
	11 --> 20
	14 --> 20
	21["
	index
	pop_u64
	"]
	12 --> 21
	14 --> 21
	17["
	offset
	imm_readULEB32
	"]
	11 --> 17
	15 --> 17
	18["
	index
	pop_u32
	"]
	12 --> 18
	15 --> 18
	16["
	end
	"]
	13 --> 16
	15 --> 16
	17 --> 16
	18 --> 16
	19 --> 16
	24["
	state phi Stack 	"]
	13 --> 24
	16 --> 24
	21 --> 24
	18 --> 24
	23["
	state phi Codeptr 	"]
	13 --> 23
	16 --> 23
	20 --> 23
	17 --> 23
```
