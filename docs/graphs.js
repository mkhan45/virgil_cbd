window.graphs = {
	UNREACHABLE:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	3["
	eff__0
	trapUnreachable
	"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0["
	Start
	"]
	`,
	NOP:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	0["
	Start
	"]
	`,
	BLOCK:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["
	eff__2
	doBlock
	"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0["
	Start
	"]
	3["
	bt
	imm_readBlockType
	"]
	0 -. Codeptr .-> 3
	`,
	LOOP:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["
	eff__4
	doLoop
	"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0["
	Start
	"]
	3["
	bt
	imm_readBlockType
	"]
	0 -. Codeptr .-> 3
	`,
	IF:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	13 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	13["
	state phi Codeptr Stack Trap Locals Globals Tables Memory Extra 	"]
	9 --> 13
	12 --> 13
	10 --> 13
	10["
	eff__9
	doFallthru
	"]
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 10
	6["
	label
	doIf
	"]
	3 --> 6
	3 -. Codeptr .-> 6
	4 -. Stack .-> 6
	0 -. Trap Locals Globals Tables Memory Extra .-> 6
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
	12["
	eff__7
	doBranch
	"]
	6 --> 12
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 12
	9["
	cond__6
	u32.==
	"]
	4 --> 9
	7 --> 9
	7["
	arg__11
	0
	"]
	`,
	ELSE:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["
	eff__19
	doBranch
	"]
	3 --> 5
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 5
	3["
	label
	doElse
	"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0["
	Start
	"]
	`,
	TRY:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	5["
	eff__22
	doTry
	"]
	3 --> 5
	3 -. Codeptr .-> 5
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 5
	0["
	Start
	"]
	3["
	bt
	imm_readBlockType
	"]
	0 -. Codeptr .-> 3
	`,
	END:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	6 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	6["
	state phi Codeptr Stack Trap Locals Globals Tables Memory Extra 	"]
	4 --> 6
	5 --> 6
	3 --> 6
	3["
	eff__26
	doEnd
	"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0["
	Start
	"]
	5["
	eff__25
	doReturn
	"]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 5
	4["
	cond__24
	f_isAtEnd
	"]
	`,
	BR:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	7["
	eff__27
	doBranch
	"]
	5 --> 7
	3 -. Codeptr .-> 7
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 7
	0["
	Start
	"]
	3["
	depth
	imm_readULEB32
	"]
	0 -. Codeptr .-> 3
	5["
	label
	f_getLabel
	"]
	3 --> 5
	`,
	BR_IF:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	13 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	13["
	state phi Codeptr Stack Trap Locals Globals Tables Memory Extra 	"]
	9 --> 13
	12 --> 13
	10 --> 13
	10["
	eff__34
	doFallthru
	"]
	3 -. Codeptr .-> 10
	6 -. Stack .-> 10
	0 -. Trap Locals Globals Tables Memory Extra .-> 10
	0["
	Start
	"]
	6["
	cond
	pop_u32
	"]
	0 -. Stack .-> 6
	3["
	depth
	imm_readULEB32
	"]
	0 -. Codeptr .-> 3
	12["
	eff__32
	doBranch
	"]
	5 --> 12
	3 -. Codeptr .-> 12
	6 -. Stack .-> 12
	0 -. Trap Locals Globals Tables Memory Extra .-> 12
	5["
	label
	f_getLabel
	"]
	3 --> 5
	9["
	cond__31
	u32.!=
	"]
	6 --> 9
	7 --> 9
	7["
	arg__36
	0
	"]
	`,
	BR_TABLE:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	7["
	eff__44
	doSwitch
	"]
	3 --> 7
	4 --> 7
	3 -. Codeptr .-> 7
	4 -. Stack .-> 7
	0 -. Trap Locals Globals Tables Memory Extra .-> 7
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
	`,
	RETURN:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	3 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	3["
	eff__48
	doReturn
	"]
	0 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 3
	0["
	Start
	"]
	`,
	CALL:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	10 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	10["
	eff__49
	doCall
	"]
	5 --> 10
	7 --> 10
	3 -. Codeptr .-> 10
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 10
	0["
	Start
	"]
	3["
	index
	imm_readULEB32
	"]
	0 -. Codeptr .-> 3
	7["
	target
	i_getFunction
	"]
	3 --> 7
	5["
	sig
	m_getFuncSignature
	"]
	3 --> 5
	`,
	CALL_INDIRECT:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	26 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	26["
	state phi Codeptr Stack Trap Locals Globals Tables Memory Extra 	"]
	8 --> 26
	25 --> 26
	17 --> 26
	17["
	eff__61
	doCall
	"]
	6 --> 17
	14 --> 17
	4 -. Codeptr .-> 17
	10 -. Stack .-> 17
	0 -. Trap Locals Globals Tables Memory Extra .-> 17
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
	14["
	target
	i_getTableFunction32
	"]
	4 --> 14
	6 --> 14
	10 --> 14
	6["
	sig
	m_getSignature
	"]
	3 --> 6
	25["
	eff__55
	doCall
	"]
	6 --> 25
	22 --> 25
	4 -. Codeptr .-> 25
	18 -. Stack .-> 25
	0 -. Trap Locals Globals Tables Memory Extra .-> 25
	18["
	func_index
	pop_u64
	"]
	0 -. Stack .-> 18
	22["
	target
	i_getTableFunction64
	"]
	4 --> 22
	6 --> 22
	18 --> 22
	8["
	is64
	m_isTable64
	"]
	4 --> 8
	`,
	RETURN_CALL:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	10 -. Codeptr Stack Trap Locals Globals Tables Memory Extra .-> 1
	10["
	eff__70
	doReturnCall
	"]
	5 --> 10
	7 --> 10
	3 -. Codeptr .-> 10
	0 -. Stack Trap Locals Globals Tables Memory Extra .-> 10
	0["
	Start
	"]
	3["
	index
	imm_readULEB32
	"]
	0 -. Codeptr .-> 3
	7["
	target
	i_getFunction
	"]
	3 --> 7
	5["
	sig
	m_getFuncSignature
	"]
	3 --> 5
	`,
	DROP:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	5 -. Stack .-> 1
	5["
	eff__75
	pop_Value
	"]
	3 --> 5
	0 -. Stack .-> 5
	0["
	Start
	"]
	3["
	tv
	f_getTopOfStackType
	"]
	0 -. Stack .-> 3
	`,
	SELECT:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	18 -. Stack .-> 1
	18["
	state phi Stack 	"]
	11 --> 18
	17 --> 18
	14 --> 18
	14["
	eff__81
	push_Value
	"]
	4 --> 14
	6 --> 14
	8 -. Stack .-> 14
	8["
	a
	pop_Value
	"]
	4 --> 8
	6 -. Stack .-> 8
	6["
	b
	pop_Value
	"]
	4 --> 6
	3 -. Stack .-> 6
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
	3 -. Stack .-> 4
	17["
	eff__78
	push_Value
	"]
	4 --> 17
	8 --> 17
	8 -. Stack .-> 17
	11["
	cond__77
	u32.!=
	"]
	3 --> 11
	9 --> 11
	9["
	arg__85
	0
	"]
	`,
	LOCAL_GET:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	3 -. Codeptr .-> 1
	11 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0["
	Start
	"]
	11["
	eff__94
	push_Value
	"]
	5 --> 11
	8 --> 11
	8 -. Stack .-> 11
	8["
	val
	getLocal
	"]
	5 --> 8
	3 --> 8
	0 -. Stack .-> 8
	3["
	index
	imm_readULEB32
	"]
	0 -. Codeptr .-> 3
	5["
	tv
	f_getLocalType
	"]
	3 --> 5
	`,
	LOCAL_SET:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	3 -. Codeptr .-> 1
	7 -. Stack .-> 1
	0 -. Trap Globals Tables Memory Extra .-> 1
	11 -. Locals .-> 1
	11["
	eff__100
	setLocal
	"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Locals .-> 11
	0["
	Start
	"]
	7["
	val
	pop_Value
	"]
	5 --> 7
	0 -. Stack .-> 7
	5["
	tv
	f_getLocalType
	"]
	3 --> 5
	3["
	index
	imm_readULEB32
	"]
	0 -. Codeptr .-> 3
	`,
	LOCAL_TEE:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	3 -. Codeptr .-> 1
	14 -. Stack .-> 1
	0 -. Trap Globals Tables Memory Extra .-> 1
	11 -. Locals .-> 1
	11["
	eff__109
	setLocal
	"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Locals .-> 11
	0["
	Start
	"]
	7["
	val
	pop_Value
	"]
	5 --> 7
	0 -. Stack .-> 7
	5["
	tv
	f_getLocalType
	"]
	3 --> 5
	3["
	index
	imm_readULEB32
	"]
	0 -. Codeptr .-> 3
	14["
	eff__106
	push_Value
	"]
	5 --> 14
	7 --> 14
	7 -. Stack .-> 14
	`,
	GLOBAL_GET:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	3 -. Codeptr .-> 1
	11 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0["
	Start
	"]
	11["
	eff__115
	push_Value
	"]
	5 --> 11
	8 --> 11
	8 -. Stack .-> 11
	8["
	val
	getGlobal
	"]
	5 --> 8
	3 --> 8
	0 -. Stack .-> 8
	3["
	index
	imm_readULEB32
	"]
	0 -. Codeptr .-> 3
	5["
	tv
	m_getGlobalType
	"]
	3 --> 5
	`,
	GLOBAL_SET:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	3 -. Codeptr .-> 1
	7 -. Stack .-> 1
	0 -. Trap Locals Tables Memory Extra .-> 1
	11 -. Globals .-> 1
	11["
	eff__121
	setGlobal
	"]
	5 --> 11
	3 --> 11
	7 --> 11
	0 -. Globals .-> 11
	0["
	Start
	"]
	7["
	val
	pop_Value
	"]
	5 --> 7
	0 -. Stack .-> 7
	5["
	tv
	m_getGlobalType
	"]
	3 --> 5
	3["
	index
	imm_readULEB32
	"]
	0 -. Codeptr .-> 3
	`,
	TABLE_GET:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	3 -. Codeptr .-> 1
	18 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0["
	Start
	"]
	18["
	state phi Stack 	"]
	5 --> 18
	17 --> 18
	11 --> 18
	11["
	eff__132
	push_Object
	"]
	9 --> 11
	6 -. Stack .-> 11
	6["
	index
	pop_u32
	"]
	0 -. Stack .-> 6
	9["
	val
	mach_readTable32
	"]
	3 --> 9
	6 --> 9
	3["
	table_index
	imm_readULEB32
	"]
	0 -. Codeptr .-> 3
	17["
	eff__128
	push_Object
	"]
	15 --> 17
	12 -. Stack .-> 17
	12["
	index
	pop_u64
	"]
	0 -. Stack .-> 12
	15["
	val
	mach_readTable64
	"]
	3 --> 15
	12 --> 15
	5["
	cond__127
	m_isTable64
	"]
	3 --> 5
	`,
	TABLE_SET:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	3 -. Codeptr .-> 1
	18 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0["
	Start
	"]
	18["
	state phi Stack 	"]
	5 --> 18
	13 --> 18
	7 --> 18
	7["
	index
	pop_u32
	"]
	6 -. Stack .-> 7
	6["
	val
	pop_Object
	"]
	0 -. Stack .-> 6
	13["
	index
	pop_u64
	"]
	12 -. Stack .-> 13
	12["
	val
	pop_Object
	"]
	0 -. Stack .-> 12
	5["
	cond__137
	m_isTable64
	"]
	3 --> 5
	3["
	table_index
	imm_readULEB32
	"]
	0 -. Codeptr .-> 3
	`,
	I32_LOAD:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0["
	Start
	"]
	32["
	state phi Stack 	"]
	14 --> 32
	30 --> 32
	22 --> 32
	22["
	eff__153
	push_u32
	"]
	20 --> 22
	16 -. Stack .-> 22
	16["
	index
	pop_u32
	"]
	0 -. Stack .-> 16
	20["
	val
	mach_readMemory32_u32
	"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["
	offset
	imm_readULEB32
	"]
	12 -. Codeptr .-> 15
	12["
	state phi Codeptr 	"]
	9 --> 12
	10 --> 12
	3 --> 12
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	10["
	memindex__160
	imm_readULEB32
	"]
	3 -. Codeptr .-> 10
	9["
	cond__159
	u8.!=
	"]
	8 --> 9
	5 --> 9
	5["
	arg__162
	0
	"]
	8["
	arg__161
	u8.&
	"]
	3 --> 8
	6 --> 8
	6["
	arg__164
	0x40u8
	"]
	11["
	memindex
	phi
	"]
	9 --> 11
	10 --> 11
	4 --> 11
	4["
	memindex__165
	0u
	"]
	30["
	eff__148
	push_u32
	"]
	28 --> 30
	24 -. Stack .-> 30
	24["
	index
	pop_u64
	"]
	0 -. Stack .-> 24
	28["
	val
	mach_readMemory64_u32
	"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["
	offset
	imm_readULEB64
	"]
	12 -. Codeptr .-> 23
	14["
	cond__147
	m_isMemory64
	"]
	11 --> 14
	31["
	state phi Codeptr 	"]
	14 --> 31
	23 --> 31
	15 --> 31
	`,
	I64_LOAD:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0["
	Start
	"]
	32["
	state phi Stack 	"]
	14 --> 32
	30 --> 32
	22 --> 32
	22["
	eff__173
	push_u64
	"]
	20 --> 22
	16 -. Stack .-> 22
	16["
	index
	pop_u32
	"]
	0 -. Stack .-> 16
	20["
	val
	mach_readMemory32_u64
	"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["
	offset
	imm_readULEB32
	"]
	12 -. Codeptr .-> 15
	12["
	state phi Codeptr 	"]
	9 --> 12
	10 --> 12
	3 --> 12
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	10["
	memindex__180
	imm_readULEB32
	"]
	3 -. Codeptr .-> 10
	9["
	cond__179
	u8.!=
	"]
	8 --> 9
	5 --> 9
	5["
	arg__182
	0
	"]
	8["
	arg__181
	u8.&
	"]
	3 --> 8
	6 --> 8
	6["
	arg__184
	0x40u8
	"]
	11["
	memindex
	phi
	"]
	9 --> 11
	10 --> 11
	4 --> 11
	4["
	memindex__185
	0u
	"]
	30["
	eff__168
	push_u64
	"]
	28 --> 30
	24 -. Stack .-> 30
	24["
	index
	pop_u64
	"]
	0 -. Stack .-> 24
	28["
	val
	mach_readMemory64_u64
	"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["
	offset
	imm_readULEB64
	"]
	12 -. Codeptr .-> 23
	14["
	cond__167
	m_isMemory64
	"]
	11 --> 14
	31["
	state phi Codeptr 	"]
	14 --> 31
	23 --> 31
	15 --> 31
	`,
	F32_LOAD:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0["
	Start
	"]
	32["
	state phi Stack 	"]
	14 --> 32
	30 --> 32
	22 --> 32
	22["
	eff__193
	push_f32
	"]
	20 --> 22
	16 -. Stack .-> 22
	16["
	index
	pop_u32
	"]
	0 -. Stack .-> 16
	20["
	val
	mach_readMemory32_f32
	"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["
	offset
	imm_readULEB32
	"]
	12 -. Codeptr .-> 15
	12["
	state phi Codeptr 	"]
	9 --> 12
	10 --> 12
	3 --> 12
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	10["
	memindex__200
	imm_readULEB32
	"]
	3 -. Codeptr .-> 10
	9["
	cond__199
	u8.!=
	"]
	8 --> 9
	5 --> 9
	5["
	arg__202
	0
	"]
	8["
	arg__201
	u8.&
	"]
	3 --> 8
	6 --> 8
	6["
	arg__204
	0x40u8
	"]
	11["
	memindex
	phi
	"]
	9 --> 11
	10 --> 11
	4 --> 11
	4["
	memindex__205
	0u
	"]
	30["
	eff__188
	push_f32
	"]
	28 --> 30
	24 -. Stack .-> 30
	24["
	index
	pop_u64
	"]
	0 -. Stack .-> 24
	28["
	val
	mach_readMemory64_f32
	"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["
	offset
	imm_readULEB64
	"]
	12 -. Codeptr .-> 23
	14["
	cond__187
	m_isMemory64
	"]
	11 --> 14
	31["
	state phi Codeptr 	"]
	14 --> 31
	23 --> 31
	15 --> 31
	`,
	F64_LOAD:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0["
	Start
	"]
	32["
	state phi Stack 	"]
	14 --> 32
	30 --> 32
	22 --> 32
	22["
	eff__213
	push_f64
	"]
	20 --> 22
	16 -. Stack .-> 22
	16["
	index
	pop_u32
	"]
	0 -. Stack .-> 16
	20["
	val
	mach_readMemory32_f64
	"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["
	offset
	imm_readULEB32
	"]
	12 -. Codeptr .-> 15
	12["
	state phi Codeptr 	"]
	9 --> 12
	10 --> 12
	3 --> 12
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	10["
	memindex__220
	imm_readULEB32
	"]
	3 -. Codeptr .-> 10
	9["
	cond__219
	u8.!=
	"]
	8 --> 9
	5 --> 9
	5["
	arg__222
	0
	"]
	8["
	arg__221
	u8.&
	"]
	3 --> 8
	6 --> 8
	6["
	arg__224
	0x40u8
	"]
	11["
	memindex
	phi
	"]
	9 --> 11
	10 --> 11
	4 --> 11
	4["
	memindex__225
	0u
	"]
	30["
	eff__208
	push_f64
	"]
	28 --> 30
	24 -. Stack .-> 30
	24["
	index
	pop_u64
	"]
	0 -. Stack .-> 24
	28["
	val
	mach_readMemory64_f64
	"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["
	offset
	imm_readULEB64
	"]
	12 -. Codeptr .-> 23
	14["
	cond__207
	m_isMemory64
	"]
	11 --> 14
	31["
	state phi Codeptr 	"]
	14 --> 31
	23 --> 31
	15 --> 31
	`,
	I32_LOAD8_S:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	35 -. Codeptr .-> 1
	36 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0["
	Start
	"]
	36["
	state phi Stack 	"]
	14 --> 36
	34 --> 36
	24 --> 36
	24["
	eff__234
	push_u32
	"]
	22 --> 24
	16 -. Stack .-> 24
	16["
	index
	pop_u32
	"]
	0 -. Stack .-> 16
	22["
	extend
	U32_extend8_s
	"]
	20 --> 22
	20["
	val
	mach_readMemory32_u8
	"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["
	offset
	imm_readULEB32
	"]
	12 -. Codeptr .-> 15
	12["
	state phi Codeptr 	"]
	9 --> 12
	10 --> 12
	3 --> 12
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	10["
	memindex__242
	imm_readULEB32
	"]
	3 -. Codeptr .-> 10
	9["
	cond__241
	u8.!=
	"]
	8 --> 9
	5 --> 9
	5["
	arg__244
	0
	"]
	8["
	arg__243
	u8.&
	"]
	3 --> 8
	6 --> 8
	6["
	arg__246
	0x40u8
	"]
	11["
	memindex
	phi
	"]
	9 --> 11
	10 --> 11
	4 --> 11
	4["
	memindex__247
	0u
	"]
	34["
	eff__228
	push_u32
	"]
	32 --> 34
	26 -. Stack .-> 34
	26["
	index
	pop_u64
	"]
	0 -. Stack .-> 26
	32["
	extend
	U32_extend8_s
	"]
	30 --> 32
	30["
	val
	mach_readMemory64_u8
	"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["
	offset
	imm_readULEB64
	"]
	12 -. Codeptr .-> 25
	14["
	cond__227
	m_isMemory64
	"]
	11 --> 14
	35["
	state phi Codeptr 	"]
	14 --> 35
	25 --> 35
	15 --> 35
	`,
	I32_LOAD8_U:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0["
	Start
	"]
	32["
	state phi Stack 	"]
	14 --> 32
	30 --> 32
	22 --> 32
	22["
	eff__255
	push_u32
	"]
	20 --> 22
	16 -. Stack .-> 22
	16["
	index
	pop_u32
	"]
	0 -. Stack .-> 16
	20["
	val
	mach_readMemory32_u8
	"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["
	offset
	imm_readULEB32
	"]
	12 -. Codeptr .-> 15
	12["
	state phi Codeptr 	"]
	9 --> 12
	10 --> 12
	3 --> 12
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	10["
	memindex__262
	imm_readULEB32
	"]
	3 -. Codeptr .-> 10
	9["
	cond__261
	u8.!=
	"]
	8 --> 9
	5 --> 9
	5["
	arg__264
	0
	"]
	8["
	arg__263
	u8.&
	"]
	3 --> 8
	6 --> 8
	6["
	arg__266
	0x40u8
	"]
	11["
	memindex
	phi
	"]
	9 --> 11
	10 --> 11
	4 --> 11
	4["
	memindex__267
	0u
	"]
	30["
	eff__250
	push_u32
	"]
	28 --> 30
	24 -. Stack .-> 30
	24["
	index
	pop_u64
	"]
	0 -. Stack .-> 24
	28["
	val
	mach_readMemory64_u8
	"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["
	offset
	imm_readULEB64
	"]
	12 -. Codeptr .-> 23
	14["
	cond__249
	m_isMemory64
	"]
	11 --> 14
	31["
	state phi Codeptr 	"]
	14 --> 31
	23 --> 31
	15 --> 31
	`,
	I32_LOAD16_S:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	35 -. Codeptr .-> 1
	36 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0["
	Start
	"]
	36["
	state phi Stack 	"]
	14 --> 36
	34 --> 36
	24 --> 36
	24["
	eff__276
	push_u32
	"]
	22 --> 24
	16 -. Stack .-> 24
	16["
	index
	pop_u32
	"]
	0 -. Stack .-> 16
	22["
	extend
	U32_extend16_s
	"]
	20 --> 22
	20["
	val
	mach_readMemory32_u16
	"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["
	offset
	imm_readULEB32
	"]
	12 -. Codeptr .-> 15
	12["
	state phi Codeptr 	"]
	9 --> 12
	10 --> 12
	3 --> 12
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	10["
	memindex__284
	imm_readULEB32
	"]
	3 -. Codeptr .-> 10
	9["
	cond__283
	u8.!=
	"]
	8 --> 9
	5 --> 9
	5["
	arg__286
	0
	"]
	8["
	arg__285
	u8.&
	"]
	3 --> 8
	6 --> 8
	6["
	arg__288
	0x40u8
	"]
	11["
	memindex
	phi
	"]
	9 --> 11
	10 --> 11
	4 --> 11
	4["
	memindex__289
	0u
	"]
	34["
	eff__270
	push_u32
	"]
	32 --> 34
	26 -. Stack .-> 34
	26["
	index
	pop_u64
	"]
	0 -. Stack .-> 26
	32["
	extend
	U32_extend16_s
	"]
	30 --> 32
	30["
	val
	mach_readMemory64_u16
	"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["
	offset
	imm_readULEB64
	"]
	12 -. Codeptr .-> 25
	14["
	cond__269
	m_isMemory64
	"]
	11 --> 14
	35["
	state phi Codeptr 	"]
	14 --> 35
	25 --> 35
	15 --> 35
	`,
	I32_LOAD16_U:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0["
	Start
	"]
	32["
	state phi Stack 	"]
	14 --> 32
	30 --> 32
	22 --> 32
	22["
	eff__297
	push_u32
	"]
	20 --> 22
	16 -. Stack .-> 22
	16["
	index
	pop_u32
	"]
	0 -. Stack .-> 16
	20["
	val
	mach_readMemory32_u16
	"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["
	offset
	imm_readULEB32
	"]
	12 -. Codeptr .-> 15
	12["
	state phi Codeptr 	"]
	9 --> 12
	10 --> 12
	3 --> 12
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	10["
	memindex__304
	imm_readULEB32
	"]
	3 -. Codeptr .-> 10
	9["
	cond__303
	u8.!=
	"]
	8 --> 9
	5 --> 9
	5["
	arg__306
	0
	"]
	8["
	arg__305
	u8.&
	"]
	3 --> 8
	6 --> 8
	6["
	arg__308
	0x40u8
	"]
	11["
	memindex
	phi
	"]
	9 --> 11
	10 --> 11
	4 --> 11
	4["
	memindex__309
	0u
	"]
	30["
	eff__292
	push_u32
	"]
	28 --> 30
	24 -. Stack .-> 30
	24["
	index
	pop_u64
	"]
	0 -. Stack .-> 24
	28["
	val
	mach_readMemory64_u16
	"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["
	offset
	imm_readULEB64
	"]
	12 -. Codeptr .-> 23
	14["
	cond__291
	m_isMemory64
	"]
	11 --> 14
	31["
	state phi Codeptr 	"]
	14 --> 31
	23 --> 31
	15 --> 31
	`,
	I64_LOAD8_S:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	35 -. Codeptr .-> 1
	36 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0["
	Start
	"]
	36["
	state phi Stack 	"]
	14 --> 36
	34 --> 36
	24 --> 36
	24["
	eff__318
	push_u64
	"]
	22 --> 24
	16 -. Stack .-> 24
	16["
	index
	pop_u32
	"]
	0 -. Stack .-> 16
	22["
	extend
	U64_extend8_s
	"]
	20 --> 22
	20["
	val
	mach_readMemory32_u8_64
	"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["
	offset
	imm_readULEB32
	"]
	12 -. Codeptr .-> 15
	12["
	state phi Codeptr 	"]
	9 --> 12
	10 --> 12
	3 --> 12
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	10["
	memindex__326
	imm_readULEB32
	"]
	3 -. Codeptr .-> 10
	9["
	cond__325
	u8.!=
	"]
	8 --> 9
	5 --> 9
	5["
	arg__328
	0
	"]
	8["
	arg__327
	u8.&
	"]
	3 --> 8
	6 --> 8
	6["
	arg__330
	0x40u8
	"]
	11["
	memindex
	phi
	"]
	9 --> 11
	10 --> 11
	4 --> 11
	4["
	memindex__331
	0u
	"]
	34["
	eff__312
	push_u64
	"]
	32 --> 34
	26 -. Stack .-> 34
	26["
	index
	pop_u64
	"]
	0 -. Stack .-> 26
	32["
	extend
	U64_extend8_s
	"]
	30 --> 32
	30["
	val
	mach_readMemory64_u8_64
	"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["
	offset
	imm_readULEB64
	"]
	12 -. Codeptr .-> 25
	14["
	cond__311
	m_isMemory64
	"]
	11 --> 14
	35["
	state phi Codeptr 	"]
	14 --> 35
	25 --> 35
	15 --> 35
	`,
	I64_LOAD8_U:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0["
	Start
	"]
	32["
	state phi Stack 	"]
	14 --> 32
	30 --> 32
	22 --> 32
	22["
	eff__339
	push_u64
	"]
	20 --> 22
	16 -. Stack .-> 22
	16["
	index
	pop_u32
	"]
	0 -. Stack .-> 16
	20["
	val
	mach_readMemory32_u8_64
	"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["
	offset
	imm_readULEB32
	"]
	12 -. Codeptr .-> 15
	12["
	state phi Codeptr 	"]
	9 --> 12
	10 --> 12
	3 --> 12
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	10["
	memindex__346
	imm_readULEB32
	"]
	3 -. Codeptr .-> 10
	9["
	cond__345
	u8.!=
	"]
	8 --> 9
	5 --> 9
	5["
	arg__348
	0
	"]
	8["
	arg__347
	u8.&
	"]
	3 --> 8
	6 --> 8
	6["
	arg__350
	0x40u8
	"]
	11["
	memindex
	phi
	"]
	9 --> 11
	10 --> 11
	4 --> 11
	4["
	memindex__351
	0u
	"]
	30["
	eff__334
	push_u64
	"]
	28 --> 30
	24 -. Stack .-> 30
	24["
	index
	pop_u64
	"]
	0 -. Stack .-> 24
	28["
	val
	mach_readMemory64_u8_64
	"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["
	offset
	imm_readULEB64
	"]
	12 -. Codeptr .-> 23
	14["
	cond__333
	m_isMemory64
	"]
	11 --> 14
	31["
	state phi Codeptr 	"]
	14 --> 31
	23 --> 31
	15 --> 31
	`,
	I64_LOAD16_S:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	35 -. Codeptr .-> 1
	36 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0["
	Start
	"]
	36["
	state phi Stack 	"]
	14 --> 36
	34 --> 36
	24 --> 36
	24["
	eff__360
	push_u64
	"]
	22 --> 24
	16 -. Stack .-> 24
	16["
	index
	pop_u32
	"]
	0 -. Stack .-> 16
	22["
	extend
	U64_extend16_s
	"]
	20 --> 22
	20["
	val
	mach_readMemory32_u16_64
	"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["
	offset
	imm_readULEB32
	"]
	12 -. Codeptr .-> 15
	12["
	state phi Codeptr 	"]
	9 --> 12
	10 --> 12
	3 --> 12
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	10["
	memindex__368
	imm_readULEB32
	"]
	3 -. Codeptr .-> 10
	9["
	cond__367
	u8.!=
	"]
	8 --> 9
	5 --> 9
	5["
	arg__370
	0
	"]
	8["
	arg__369
	u8.&
	"]
	3 --> 8
	6 --> 8
	6["
	arg__372
	0x40u8
	"]
	11["
	memindex
	phi
	"]
	9 --> 11
	10 --> 11
	4 --> 11
	4["
	memindex__373
	0u
	"]
	34["
	eff__354
	push_u64
	"]
	32 --> 34
	26 -. Stack .-> 34
	26["
	index
	pop_u64
	"]
	0 -. Stack .-> 26
	32["
	extend
	U64_extend16_s
	"]
	30 --> 32
	30["
	val
	mach_readMemory64_u16_64
	"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["
	offset
	imm_readULEB64
	"]
	12 -. Codeptr .-> 25
	14["
	cond__353
	m_isMemory64
	"]
	11 --> 14
	35["
	state phi Codeptr 	"]
	14 --> 35
	25 --> 35
	15 --> 35
	`,
	I64_LOAD16_U:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0["
	Start
	"]
	32["
	state phi Stack 	"]
	14 --> 32
	30 --> 32
	22 --> 32
	22["
	eff__381
	push_u64
	"]
	20 --> 22
	16 -. Stack .-> 22
	16["
	index
	pop_u32
	"]
	0 -. Stack .-> 16
	20["
	val
	mach_readMemory32_u16_64
	"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["
	offset
	imm_readULEB32
	"]
	12 -. Codeptr .-> 15
	12["
	state phi Codeptr 	"]
	9 --> 12
	10 --> 12
	3 --> 12
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	10["
	memindex__388
	imm_readULEB32
	"]
	3 -. Codeptr .-> 10
	9["
	cond__387
	u8.!=
	"]
	8 --> 9
	5 --> 9
	5["
	arg__390
	0
	"]
	8["
	arg__389
	u8.&
	"]
	3 --> 8
	6 --> 8
	6["
	arg__392
	0x40u8
	"]
	11["
	memindex
	phi
	"]
	9 --> 11
	10 --> 11
	4 --> 11
	4["
	memindex__393
	0u
	"]
	30["
	eff__376
	push_u64
	"]
	28 --> 30
	24 -. Stack .-> 30
	24["
	index
	pop_u64
	"]
	0 -. Stack .-> 24
	28["
	val
	mach_readMemory64_u16_64
	"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["
	offset
	imm_readULEB64
	"]
	12 -. Codeptr .-> 23
	14["
	cond__375
	m_isMemory64
	"]
	11 --> 14
	31["
	state phi Codeptr 	"]
	14 --> 31
	23 --> 31
	15 --> 31
	`,
	I64_LOAD32_S:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	35 -. Codeptr .-> 1
	36 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0["
	Start
	"]
	36["
	state phi Stack 	"]
	14 --> 36
	34 --> 36
	24 --> 36
	24["
	eff__402
	push_u64
	"]
	22 --> 24
	16 -. Stack .-> 24
	16["
	index
	pop_u32
	"]
	0 -. Stack .-> 16
	22["
	extend
	U64_extend32_s
	"]
	20 --> 22
	20["
	val
	mach_readMemory32_u32_64
	"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["
	offset
	imm_readULEB32
	"]
	12 -. Codeptr .-> 15
	12["
	state phi Codeptr 	"]
	9 --> 12
	10 --> 12
	3 --> 12
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	10["
	memindex__410
	imm_readULEB32
	"]
	3 -. Codeptr .-> 10
	9["
	cond__409
	u8.!=
	"]
	8 --> 9
	5 --> 9
	5["
	arg__412
	0
	"]
	8["
	arg__411
	u8.&
	"]
	3 --> 8
	6 --> 8
	6["
	arg__414
	0x40u8
	"]
	11["
	memindex
	phi
	"]
	9 --> 11
	10 --> 11
	4 --> 11
	4["
	memindex__415
	0u
	"]
	34["
	eff__396
	push_u64
	"]
	32 --> 34
	26 -. Stack .-> 34
	26["
	index
	pop_u64
	"]
	0 -. Stack .-> 26
	32["
	extend
	U64_extend32_s
	"]
	30 --> 32
	30["
	val
	mach_readMemory64_u32_64
	"]
	11 --> 30
	26 --> 30
	25 --> 30
	25["
	offset
	imm_readULEB64
	"]
	12 -. Codeptr .-> 25
	14["
	cond__395
	m_isMemory64
	"]
	11 --> 14
	35["
	state phi Codeptr 	"]
	14 --> 35
	25 --> 35
	15 --> 35
	`,
	I64_LOAD32_U:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	31 -. Codeptr .-> 1
	32 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0["
	Start
	"]
	32["
	state phi Stack 	"]
	14 --> 32
	30 --> 32
	22 --> 32
	22["
	eff__423
	push_u64
	"]
	20 --> 22
	16 -. Stack .-> 22
	16["
	index
	pop_u32
	"]
	0 -. Stack .-> 16
	20["
	val
	mach_readMemory32_u32_64
	"]
	11 --> 20
	16 --> 20
	15 --> 20
	15["
	offset
	imm_readULEB32
	"]
	12 -. Codeptr .-> 15
	12["
	state phi Codeptr 	"]
	9 --> 12
	10 --> 12
	3 --> 12
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	10["
	memindex__430
	imm_readULEB32
	"]
	3 -. Codeptr .-> 10
	9["
	cond__429
	u8.!=
	"]
	8 --> 9
	5 --> 9
	5["
	arg__432
	0
	"]
	8["
	arg__431
	u8.&
	"]
	3 --> 8
	6 --> 8
	6["
	arg__434
	0x40u8
	"]
	11["
	memindex
	phi
	"]
	9 --> 11
	10 --> 11
	4 --> 11
	4["
	memindex__435
	0u
	"]
	30["
	eff__418
	push_u64
	"]
	28 --> 30
	24 -. Stack .-> 30
	24["
	index
	pop_u64
	"]
	0 -. Stack .-> 24
	28["
	val
	mach_readMemory64_u32_64
	"]
	11 --> 28
	24 --> 28
	23 --> 28
	23["
	offset
	imm_readULEB64
	"]
	12 -. Codeptr .-> 23
	14["
	cond__417
	m_isMemory64
	"]
	11 --> 14
	31["
	state phi Codeptr 	"]
	14 --> 31
	23 --> 31
	15 --> 31
	`,
	I32_STORE:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32["
	state phi Memory 	"]
	15 --> 32
	29 --> 32
	22 --> 32
	22["
	eff__443
	mach_writeMemory32_u32
	"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0["
	Start
	"]
	13["
	val
	pop_u32
	"]
	0 -. Stack .-> 13
	16["
	offset
	imm_readULEB32
	"]
	12 -. Codeptr .-> 16
	12["
	state phi Codeptr 	"]
	9 --> 12
	10 --> 12
	3 --> 12
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	10["
	memindex__450
	imm_readULEB32
	"]
	3 -. Codeptr .-> 10
	9["
	cond__449
	u8.!=
	"]
	8 --> 9
	5 --> 9
	5["
	arg__452
	0
	"]
	8["
	arg__451
	u8.&
	"]
	3 --> 8
	6 --> 8
	6["
	arg__454
	0x40u8
	"]
	17["
	index
	pop_u32
	"]
	13 -. Stack .-> 17
	11["
	memindex
	phi
	"]
	9 --> 11
	10 --> 11
	4 --> 11
	4["
	memindex__455
	0u
	"]
	29["
	eff__438
	mach_writeMemory64_u32
	"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["
	offset
	imm_readULEB64
	"]
	12 -. Codeptr .-> 23
	24["
	index
	pop_u64
	"]
	13 -. Stack .-> 24
	15["
	cond__437
	m_isMemory64
	"]
	11 --> 15
	31["
	state phi Stack 	"]
	15 --> 31
	24 --> 31
	17 --> 31
	30["
	state phi Codeptr 	"]
	15 --> 30
	23 --> 30
	16 --> 30
	`,
	I64_STORE:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32["
	state phi Memory 	"]
	15 --> 32
	29 --> 32
	22 --> 32
	22["
	eff__463
	mach_writeMemory32_u64
	"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0["
	Start
	"]
	13["
	val
	pop_u64
	"]
	0 -. Stack .-> 13
	16["
	offset
	imm_readULEB32
	"]
	12 -. Codeptr .-> 16
	12["
	state phi Codeptr 	"]
	9 --> 12
	10 --> 12
	3 --> 12
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	10["
	memindex__470
	imm_readULEB32
	"]
	3 -. Codeptr .-> 10
	9["
	cond__469
	u8.!=
	"]
	8 --> 9
	5 --> 9
	5["
	arg__472
	0
	"]
	8["
	arg__471
	u8.&
	"]
	3 --> 8
	6 --> 8
	6["
	arg__474
	0x40u8
	"]
	17["
	index
	pop_u32
	"]
	13 -. Stack .-> 17
	11["
	memindex
	phi
	"]
	9 --> 11
	10 --> 11
	4 --> 11
	4["
	memindex__475
	0u
	"]
	29["
	eff__458
	mach_writeMemory64_u64
	"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["
	offset
	imm_readULEB64
	"]
	12 -. Codeptr .-> 23
	24["
	index
	pop_u64
	"]
	13 -. Stack .-> 24
	15["
	cond__457
	m_isMemory64
	"]
	11 --> 15
	31["
	state phi Stack 	"]
	15 --> 31
	24 --> 31
	17 --> 31
	30["
	state phi Codeptr 	"]
	15 --> 30
	23 --> 30
	16 --> 30
	`,
	F32_STORE:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0["
	Start
	"]
	31["
	state phi Stack 	"]
	15 --> 31
	24 --> 31
	17 --> 31
	17["
	index
	pop_u32
	"]
	13 -. Stack .-> 17
	13["
	val
	pop_f32
	"]
	0 -. Stack .-> 13
	24["
	index
	pop_u64
	"]
	13 -. Stack .-> 24
	15["
	cond__477
	m_isMemory64
	"]
	11 --> 15
	11["
	memindex
	phi
	"]
	9 --> 11
	10 --> 11
	4 --> 11
	4["
	memindex__495
	0u
	"]
	10["
	memindex__490
	imm_readULEB32
	"]
	3 -. Codeptr .-> 10
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	9["
	cond__489
	u8.!=
	"]
	8 --> 9
	5 --> 9
	5["
	arg__492
	0
	"]
	8["
	arg__491
	u8.&
	"]
	3 --> 8
	6 --> 8
	6["
	arg__494
	0x40u8
	"]
	30["
	state phi Codeptr 	"]
	15 --> 30
	23 --> 30
	16 --> 30
	16["
	offset
	imm_readULEB32
	"]
	12 -. Codeptr .-> 16
	12["
	state phi Codeptr 	"]
	9 --> 12
	10 --> 12
	3 --> 12
	23["
	offset
	imm_readULEB64
	"]
	12 -. Codeptr .-> 23
	`,
	F64_STORE:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32["
	state phi Memory 	"]
	15 --> 32
	29 --> 32
	22 --> 32
	22["
	eff__503
	mach_writeMemory32_f64
	"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0["
	Start
	"]
	13["
	val
	pop_f64
	"]
	0 -. Stack .-> 13
	16["
	offset
	imm_readULEB32
	"]
	12 -. Codeptr .-> 16
	12["
	state phi Codeptr 	"]
	9 --> 12
	10 --> 12
	3 --> 12
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	10["
	memindex__510
	imm_readULEB32
	"]
	3 -. Codeptr .-> 10
	9["
	cond__509
	u8.!=
	"]
	8 --> 9
	5 --> 9
	5["
	arg__512
	0
	"]
	8["
	arg__511
	u8.&
	"]
	3 --> 8
	6 --> 8
	6["
	arg__514
	0x40u8
	"]
	17["
	index
	pop_u32
	"]
	13 -. Stack .-> 17
	11["
	memindex
	phi
	"]
	9 --> 11
	10 --> 11
	4 --> 11
	4["
	memindex__515
	0u
	"]
	29["
	eff__498
	mach_writeMemory64_f64
	"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["
	offset
	imm_readULEB64
	"]
	12 -. Codeptr .-> 23
	24["
	index
	pop_u64
	"]
	13 -. Stack .-> 24
	15["
	cond__497
	m_isMemory64
	"]
	11 --> 15
	31["
	state phi Stack 	"]
	15 --> 31
	24 --> 31
	17 --> 31
	30["
	state phi Codeptr 	"]
	15 --> 30
	23 --> 30
	16 --> 30
	`,
	I32_STORE8:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32["
	state phi Memory 	"]
	15 --> 32
	29 --> 32
	22 --> 32
	22["
	eff__523
	mach_writeMemory32_u8
	"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0["
	Start
	"]
	13["
	val
	pop_u32
	"]
	0 -. Stack .-> 13
	16["
	offset
	imm_readULEB32
	"]
	12 -. Codeptr .-> 16
	12["
	state phi Codeptr 	"]
	9 --> 12
	10 --> 12
	3 --> 12
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	10["
	memindex__530
	imm_readULEB32
	"]
	3 -. Codeptr .-> 10
	9["
	cond__529
	u8.!=
	"]
	8 --> 9
	5 --> 9
	5["
	arg__532
	0
	"]
	8["
	arg__531
	u8.&
	"]
	3 --> 8
	6 --> 8
	6["
	arg__534
	0x40u8
	"]
	17["
	index
	pop_u32
	"]
	13 -. Stack .-> 17
	11["
	memindex
	phi
	"]
	9 --> 11
	10 --> 11
	4 --> 11
	4["
	memindex__535
	0u
	"]
	29["
	eff__518
	mach_writeMemory64_u8
	"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["
	offset
	imm_readULEB64
	"]
	12 -. Codeptr .-> 23
	24["
	index
	pop_u64
	"]
	13 -. Stack .-> 24
	15["
	cond__517
	m_isMemory64
	"]
	11 --> 15
	31["
	state phi Stack 	"]
	15 --> 31
	24 --> 31
	17 --> 31
	30["
	state phi Codeptr 	"]
	15 --> 30
	23 --> 30
	16 --> 30
	`,
	I32_STORE16:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32["
	state phi Memory 	"]
	15 --> 32
	29 --> 32
	22 --> 32
	22["
	eff__543
	mach_writeMemory32_u16
	"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0["
	Start
	"]
	13["
	val
	pop_u32
	"]
	0 -. Stack .-> 13
	16["
	offset
	imm_readULEB32
	"]
	12 -. Codeptr .-> 16
	12["
	state phi Codeptr 	"]
	9 --> 12
	10 --> 12
	3 --> 12
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	10["
	memindex__550
	imm_readULEB32
	"]
	3 -. Codeptr .-> 10
	9["
	cond__549
	u8.!=
	"]
	8 --> 9
	5 --> 9
	5["
	arg__552
	0
	"]
	8["
	arg__551
	u8.&
	"]
	3 --> 8
	6 --> 8
	6["
	arg__554
	0x40u8
	"]
	17["
	index
	pop_u32
	"]
	13 -. Stack .-> 17
	11["
	memindex
	phi
	"]
	9 --> 11
	10 --> 11
	4 --> 11
	4["
	memindex__555
	0u
	"]
	29["
	eff__538
	mach_writeMemory64_u16
	"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["
	offset
	imm_readULEB64
	"]
	12 -. Codeptr .-> 23
	24["
	index
	pop_u64
	"]
	13 -. Stack .-> 24
	15["
	cond__537
	m_isMemory64
	"]
	11 --> 15
	31["
	state phi Stack 	"]
	15 --> 31
	24 --> 31
	17 --> 31
	30["
	state phi Codeptr 	"]
	15 --> 30
	23 --> 30
	16 --> 30
	`,
	I64_STORE8:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32["
	state phi Memory 	"]
	15 --> 32
	29 --> 32
	22 --> 32
	22["
	eff__563
	mach_writeMemory32_u8_64
	"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0["
	Start
	"]
	13["
	val
	pop_u64
	"]
	0 -. Stack .-> 13
	16["
	offset
	imm_readULEB32
	"]
	12 -. Codeptr .-> 16
	12["
	state phi Codeptr 	"]
	9 --> 12
	10 --> 12
	3 --> 12
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	10["
	memindex__570
	imm_readULEB32
	"]
	3 -. Codeptr .-> 10
	9["
	cond__569
	u8.!=
	"]
	8 --> 9
	5 --> 9
	5["
	arg__572
	0
	"]
	8["
	arg__571
	u8.&
	"]
	3 --> 8
	6 --> 8
	6["
	arg__574
	0x40u8
	"]
	17["
	index
	pop_u32
	"]
	13 -. Stack .-> 17
	11["
	memindex
	phi
	"]
	9 --> 11
	10 --> 11
	4 --> 11
	4["
	memindex__575
	0u
	"]
	29["
	eff__558
	mach_writeMemory64_u8_64
	"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["
	offset
	imm_readULEB64
	"]
	12 -. Codeptr .-> 23
	24["
	index
	pop_u64
	"]
	13 -. Stack .-> 24
	15["
	cond__557
	m_isMemory64
	"]
	11 --> 15
	31["
	state phi Stack 	"]
	15 --> 31
	24 --> 31
	17 --> 31
	30["
	state phi Codeptr 	"]
	15 --> 30
	23 --> 30
	16 --> 30
	`,
	I64_STORE16:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32["
	state phi Memory 	"]
	15 --> 32
	29 --> 32
	22 --> 32
	22["
	eff__583
	mach_writeMemory32_u16_64
	"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0["
	Start
	"]
	13["
	val
	pop_u64
	"]
	0 -. Stack .-> 13
	16["
	offset
	imm_readULEB32
	"]
	12 -. Codeptr .-> 16
	12["
	state phi Codeptr 	"]
	9 --> 12
	10 --> 12
	3 --> 12
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	10["
	memindex__590
	imm_readULEB32
	"]
	3 -. Codeptr .-> 10
	9["
	cond__589
	u8.!=
	"]
	8 --> 9
	5 --> 9
	5["
	arg__592
	0
	"]
	8["
	arg__591
	u8.&
	"]
	3 --> 8
	6 --> 8
	6["
	arg__594
	0x40u8
	"]
	17["
	index
	pop_u32
	"]
	13 -. Stack .-> 17
	11["
	memindex
	phi
	"]
	9 --> 11
	10 --> 11
	4 --> 11
	4["
	memindex__595
	0u
	"]
	29["
	eff__578
	mach_writeMemory64_u16_64
	"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["
	offset
	imm_readULEB64
	"]
	12 -. Codeptr .-> 23
	24["
	index
	pop_u64
	"]
	13 -. Stack .-> 24
	15["
	cond__577
	m_isMemory64
	"]
	11 --> 15
	31["
	state phi Stack 	"]
	15 --> 31
	24 --> 31
	17 --> 31
	30["
	state phi Codeptr 	"]
	15 --> 30
	23 --> 30
	16 --> 30
	`,
	I64_STORE32:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	30 -. Codeptr .-> 1
	31 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Extra .-> 1
	32 -. Memory .-> 1
	32["
	state phi Memory 	"]
	15 --> 32
	29 --> 32
	22 --> 32
	22["
	eff__603
	mach_writeMemory32_u32_64
	"]
	11 --> 22
	17 --> 22
	16 --> 22
	13 --> 22
	0 -. Memory .-> 22
	0["
	Start
	"]
	13["
	val
	pop_u64
	"]
	0 -. Stack .-> 13
	16["
	offset
	imm_readULEB32
	"]
	12 -. Codeptr .-> 16
	12["
	state phi Codeptr 	"]
	9 --> 12
	10 --> 12
	3 --> 12
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	10["
	memindex__610
	imm_readULEB32
	"]
	3 -. Codeptr .-> 10
	9["
	cond__609
	u8.!=
	"]
	8 --> 9
	5 --> 9
	5["
	arg__612
	0
	"]
	8["
	arg__611
	u8.&
	"]
	3 --> 8
	6 --> 8
	6["
	arg__614
	0x40u8
	"]
	17["
	index
	pop_u32
	"]
	13 -. Stack .-> 17
	11["
	memindex
	phi
	"]
	9 --> 11
	10 --> 11
	4 --> 11
	4["
	memindex__615
	0u
	"]
	29["
	eff__598
	mach_writeMemory64_u32_64
	"]
	11 --> 29
	24 --> 29
	23 --> 29
	13 --> 29
	0 -. Memory .-> 29
	23["
	offset
	imm_readULEB64
	"]
	12 -. Codeptr .-> 23
	24["
	index
	pop_u64
	"]
	13 -. Stack .-> 24
	15["
	cond__597
	m_isMemory64
	"]
	11 --> 15
	31["
	state phi Stack 	"]
	15 --> 31
	24 --> 31
	17 --> 31
	30["
	state phi Codeptr 	"]
	15 --> 30
	23 --> 30
	16 --> 30
	`,
	MEMORY_SIZE:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	12 -. Codeptr .-> 1
	23 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0["
	Start
	"]
	23["
	state phi Stack 	"]
	14 --> 23
	22 --> 23
	18 --> 23
	18["
	eff__621
	push_u32
	"]
	16 --> 18
	0 -. Stack .-> 18
	16["
	r
	mach_memorySize32
	"]
	11 --> 16
	11["
	memindex
	phi
	"]
	9 --> 11
	10 --> 11
	4 --> 11
	4["
	memindex__631
	0u
	"]
	10["
	memindex__626
	imm_readULEB32
	"]
	3 -. Codeptr .-> 10
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	9["
	cond__625
	u8.!=
	"]
	8 --> 9
	5 --> 9
	5["
	arg__628
	0
	"]
	8["
	arg__627
	u8.&
	"]
	3 --> 8
	6 --> 8
	6["
	arg__630
	0x40u8
	"]
	22["
	eff__618
	push_u64
	"]
	20 --> 22
	0 -. Stack .-> 22
	20["
	r
	mach_memorySize64
	"]
	11 --> 20
	14["
	cond__617
	m_isMemory64
	"]
	11 --> 14
	12["
	state phi Codeptr 	"]
	9 --> 12
	10 --> 12
	3 --> 12
	`,
	MEMORY_GROW:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	12 -. Codeptr .-> 1
	27 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0["
	Start
	"]
	27["
	state phi Stack 	"]
	14 --> 27
	26 --> 27
	20 --> 27
	20["
	eff__638
	push_u32
	"]
	18 --> 20
	15 -. Stack .-> 20
	15["
	val
	pop_u32
	"]
	0 -. Stack .-> 15
	18["
	r
	mach_memoryGrow32
	"]
	11 --> 18
	15 --> 18
	11["
	memindex
	phi
	"]
	9 --> 11
	10 --> 11
	4 --> 11
	4["
	memindex__649
	0u
	"]
	10["
	memindex__644
	imm_readULEB32
	"]
	3 -. Codeptr .-> 10
	3["
	flags
	imm_readU8
	"]
	0 -. Codeptr .-> 3
	9["
	cond__643
	u8.!=
	"]
	8 --> 9
	5 --> 9
	5["
	arg__646
	0
	"]
	8["
	arg__645
	u8.&
	"]
	3 --> 8
	6 --> 8
	6["
	arg__648
	0x40u8
	"]
	26["
	eff__634
	push_u64
	"]
	24 --> 26
	21 -. Stack .-> 26
	21["
	val
	pop_u64
	"]
	0 -. Stack .-> 21
	24["
	r
	mach_memoryGrow64
	"]
	11 --> 24
	21 --> 24
	14["
	cond__633
	m_isMemory64
	"]
	11 --> 14
	12["
	state phi Codeptr 	"]
	9 --> 12
	10 --> 12
	3 --> 12
	`,
	I32_CONST:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	3 -. Codeptr .-> 1
	5 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0["
	Start
	"]
	5["
	eff__651
	push_u32
	"]
	3 --> 5
	0 -. Stack .-> 5
	3["
	x
	imm_readILEB32
	"]
	0 -. Codeptr .-> 3
	`,
	I64_CONST:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	3 -. Codeptr .-> 1
	5 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0["
	Start
	"]
	5["
	eff__654
	push_u64
	"]
	3 --> 5
	0 -. Stack .-> 5
	3["
	x
	imm_readILEB64
	"]
	0 -. Codeptr .-> 3
	`,
	F32_CONST:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["
	eff__657
	push_f32
	"]
	5 --> 6
	0 -. Stack .-> 6
	0["
	Start
	"]
	5["
	arg__658
	f32_reinterpret_u32
	"]
	3 --> 5
	3["
	x
	imm_readU32
	"]
	`,
	F64_CONST:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	6 -. Stack .-> 1
	6["
	eff__661
	push_f64
	"]
	5 --> 6
	0 -. Stack .-> 6
	0["
	Start
	"]
	5["
	arg__662
	f64_reinterpret_u64
	"]
	3 --> 5
	3["
	x
	imm_readU64
	"]
	`,
	I32_EQZ:`---
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
	state phi Stack 	"]
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
	4 --> 6
	`,
	I32_EQ:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["
	state phi Stack 	"]
	7 --> 12
	11 --> 12
	9 --> 12
	9["
	eff__683
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
	arg__684
	0
	"]
	11["
	eff__681
	push_u32
	"]
	10 --> 11
	4 -. Stack .-> 11
	10["
	arg__682
	1
	"]
	7["
	cond__680
	u32.==
	"]
	4 --> 7
	3 --> 7
	`,
	I32_NE:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["
	state phi Stack 	"]
	7 --> 12
	11 --> 12
	9 --> 12
	9["
	eff__697
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
	arg__698
	0
	"]
	11["
	eff__695
	push_u32
	"]
	10 --> 11
	4 -. Stack .-> 11
	10["
	arg__696
	1
	"]
	7["
	cond__694
	u32.!=
	"]
	4 --> 7
	3 --> 7
	`,
	I32_LT_S:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["
	state phi Stack 	"]
	7 --> 12
	11 --> 12
	9 --> 12
	9["
	eff__711
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
	arg__712
	0
	"]
	11["
	eff__709
	push_u32
	"]
	10 --> 11
	4 -. Stack .-> 11
	10["
	arg__710
	1
	"]
	7["
	cond__708
	U32_lt_s
	"]
	4 --> 7
	3 --> 7
	`,
	I32_LT_U:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["
	state phi Stack 	"]
	7 --> 12
	11 --> 12
	9 --> 12
	9["
	eff__725
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
	arg__726
	0
	"]
	11["
	eff__723
	push_u32
	"]
	10 --> 11
	4 -. Stack .-> 11
	10["
	arg__724
	1
	"]
	7["
	cond__722
	u32.<
	"]
	4 --> 7
	3 --> 7
	`,
	I32_GT_S:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["
	state phi Stack 	"]
	7 --> 12
	11 --> 12
	9 --> 12
	9["
	eff__739
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
	arg__740
	0
	"]
	11["
	eff__737
	push_u32
	"]
	10 --> 11
	4 -. Stack .-> 11
	10["
	arg__738
	1
	"]
	7["
	cond__736
	U32_gt_s
	"]
	4 --> 7
	3 --> 7
	`,
	I32_GT_U:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["
	state phi Stack 	"]
	7 --> 12
	11 --> 12
	9 --> 12
	9["
	eff__753
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
	arg__754
	0
	"]
	11["
	eff__751
	push_u32
	"]
	10 --> 11
	4 -. Stack .-> 11
	10["
	arg__752
	1
	"]
	7["
	cond__750
	u32.>
	"]
	4 --> 7
	3 --> 7
	`,
	I32_LE_S:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["
	state phi Stack 	"]
	7 --> 12
	11 --> 12
	9 --> 12
	9["
	eff__767
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
	arg__768
	0
	"]
	11["
	eff__765
	push_u32
	"]
	10 --> 11
	4 -. Stack .-> 11
	10["
	arg__766
	1
	"]
	7["
	cond__764
	U32_le_s
	"]
	4 --> 7
	3 --> 7
	`,
	I32_LE_U:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["
	state phi Stack 	"]
	7 --> 12
	11 --> 12
	9 --> 12
	9["
	eff__781
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
	arg__782
	0
	"]
	11["
	eff__779
	push_u32
	"]
	10 --> 11
	4 -. Stack .-> 11
	10["
	arg__780
	1
	"]
	7["
	cond__778
	u32.<=
	"]
	4 --> 7
	3 --> 7
	`,
	I32_GE_S:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["
	state phi Stack 	"]
	7 --> 12
	11 --> 12
	9 --> 12
	9["
	eff__795
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
	arg__796
	0
	"]
	11["
	eff__793
	push_u32
	"]
	10 --> 11
	4 -. Stack .-> 11
	10["
	arg__794
	1
	"]
	7["
	cond__792
	U32_ge_s
	"]
	4 --> 7
	3 --> 7
	`,
	I32_GE_U:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["
	state phi Stack 	"]
	7 --> 12
	11 --> 12
	9 --> 12
	9["
	eff__809
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
	arg__810
	0
	"]
	11["
	eff__807
	push_u32
	"]
	10 --> 11
	4 -. Stack .-> 11
	10["
	arg__808
	1
	"]
	7["
	cond__806
	u32.>=
	"]
	4 --> 7
	3 --> 7
	`,
	I64_EQZ:`---
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
	state phi Stack 	"]
	6 --> 10
	9 --> 10
	7 --> 10
	7["
	eff__823
	push_u32
	"]
	4 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	4["
	arg__826
	0
	"]
	9["
	eff__821
	push_u32
	"]
	8 --> 9
	3 -. Stack .-> 9
	8["
	arg__822
	1
	"]
	6["
	cond__820
	u64.==
	"]
	3 --> 6
	4 --> 6
	`,
	I64_EQ:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["
	state phi Stack 	"]
	7 --> 12
	11 --> 12
	9 --> 12
	9["
	eff__838
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
	arg__839
	0
	"]
	11["
	eff__836
	push_u32
	"]
	10 --> 11
	4 -. Stack .-> 11
	10["
	arg__837
	1
	"]
	7["
	cond__835
	u64.==
	"]
	4 --> 7
	3 --> 7
	`,
	I64_NE:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["
	state phi Stack 	"]
	7 --> 12
	11 --> 12
	9 --> 12
	9["
	eff__852
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
	arg__853
	0
	"]
	11["
	eff__850
	push_u32
	"]
	10 --> 11
	4 -. Stack .-> 11
	10["
	arg__851
	1
	"]
	7["
	cond__849
	u64.!=
	"]
	4 --> 7
	3 --> 7
	`,
	I64_LT_S:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["
	state phi Stack 	"]
	7 --> 12
	11 --> 12
	9 --> 12
	9["
	eff__866
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
	arg__867
	0
	"]
	11["
	eff__864
	push_u32
	"]
	10 --> 11
	4 -. Stack .-> 11
	10["
	arg__865
	1
	"]
	7["
	cond__863
	U64_lt_s
	"]
	4 --> 7
	3 --> 7
	`,
	I64_LT_U:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["
	state phi Stack 	"]
	7 --> 12
	11 --> 12
	9 --> 12
	9["
	eff__880
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
	arg__881
	0
	"]
	11["
	eff__878
	push_u32
	"]
	10 --> 11
	4 -. Stack .-> 11
	10["
	arg__879
	1
	"]
	7["
	cond__877
	u64.<
	"]
	4 --> 7
	3 --> 7
	`,
	I64_GT_S:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["
	state phi Stack 	"]
	7 --> 12
	11 --> 12
	9 --> 12
	9["
	eff__894
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
	arg__895
	0
	"]
	11["
	eff__892
	push_u32
	"]
	10 --> 11
	4 -. Stack .-> 11
	10["
	arg__893
	1
	"]
	7["
	cond__891
	U64_gt_s
	"]
	4 --> 7
	3 --> 7
	`,
	I64_GT_U:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["
	state phi Stack 	"]
	7 --> 12
	11 --> 12
	9 --> 12
	9["
	eff__908
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
	arg__909
	0
	"]
	11["
	eff__906
	push_u32
	"]
	10 --> 11
	4 -. Stack .-> 11
	10["
	arg__907
	1
	"]
	7["
	cond__905
	u64.>
	"]
	4 --> 7
	3 --> 7
	`,
	I64_LE_S:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["
	state phi Stack 	"]
	7 --> 12
	11 --> 12
	9 --> 12
	9["
	eff__922
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
	arg__923
	0
	"]
	11["
	eff__920
	push_u32
	"]
	10 --> 11
	4 -. Stack .-> 11
	10["
	arg__921
	1
	"]
	7["
	cond__919
	U64_le_s
	"]
	4 --> 7
	3 --> 7
	`,
	I64_LE_U:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["
	state phi Stack 	"]
	7 --> 12
	11 --> 12
	9 --> 12
	9["
	eff__936
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
	arg__937
	0
	"]
	11["
	eff__934
	push_u32
	"]
	10 --> 11
	4 -. Stack .-> 11
	10["
	arg__935
	1
	"]
	7["
	cond__933
	u64.<=
	"]
	4 --> 7
	3 --> 7
	`,
	I64_GE_S:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["
	state phi Stack 	"]
	7 --> 12
	11 --> 12
	9 --> 12
	9["
	eff__950
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
	arg__951
	0
	"]
	11["
	eff__948
	push_u32
	"]
	10 --> 11
	4 -. Stack .-> 11
	10["
	arg__949
	1
	"]
	7["
	cond__947
	U64_ge_s
	"]
	4 --> 7
	3 --> 7
	`,
	I64_GE_U:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["
	state phi Stack 	"]
	7 --> 12
	11 --> 12
	9 --> 12
	9["
	eff__964
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
	arg__965
	0
	"]
	11["
	eff__962
	push_u32
	"]
	10 --> 11
	4 -. Stack .-> 11
	10["
	arg__963
	1
	"]
	7["
	cond__961
	u64.>=
	"]
	4 --> 7
	3 --> 7
	`,
	F32_EQ:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["
	state phi Stack 	"]
	7 --> 12
	11 --> 12
	9 --> 12
	9["
	eff__978
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
	arg__979
	0
	"]
	11["
	eff__976
	push_u32
	"]
	10 --> 11
	4 -. Stack .-> 11
	10["
	arg__977
	1
	"]
	7["
	cond__975
	float.==
	"]
	4 --> 7
	3 --> 7
	`,
	F32_NE:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["
	state phi Stack 	"]
	7 --> 12
	11 --> 12
	9 --> 12
	9["
	eff__992
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
	arg__993
	0
	"]
	11["
	eff__990
	push_u32
	"]
	10 --> 11
	4 -. Stack .-> 11
	10["
	arg__991
	1
	"]
	7["
	cond__989
	float.!=
	"]
	4 --> 7
	3 --> 7
	`,
	F32_LT:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["
	state phi Stack 	"]
	7 --> 12
	11 --> 12
	9 --> 12
	9["
	eff__1006
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
	arg__1007
	0
	"]
	11["
	eff__1004
	push_u32
	"]
	10 --> 11
	4 -. Stack .-> 11
	10["
	arg__1005
	1
	"]
	7["
	cond__1003
	float.<
	"]
	4 --> 7
	3 --> 7
	`,
	F32_GT:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["
	state phi Stack 	"]
	7 --> 12
	11 --> 12
	9 --> 12
	9["
	eff__1020
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
	arg__1021
	0
	"]
	11["
	eff__1018
	push_u32
	"]
	10 --> 11
	4 -. Stack .-> 11
	10["
	arg__1019
	1
	"]
	7["
	cond__1017
	float.>
	"]
	4 --> 7
	3 --> 7
	`,
	F32_LE:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["
	state phi Stack 	"]
	7 --> 12
	11 --> 12
	9 --> 12
	9["
	eff__1034
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
	arg__1035
	0
	"]
	11["
	eff__1032
	push_u32
	"]
	10 --> 11
	4 -. Stack .-> 11
	10["
	arg__1033
	1
	"]
	7["
	cond__1031
	float.<=
	"]
	4 --> 7
	3 --> 7
	`,
	F32_GE:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["
	state phi Stack 	"]
	7 --> 12
	11 --> 12
	9 --> 12
	9["
	eff__1048
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
	arg__1049
	0
	"]
	11["
	eff__1046
	push_u32
	"]
	10 --> 11
	4 -. Stack .-> 11
	10["
	arg__1047
	1
	"]
	7["
	cond__1045
	float.>=
	"]
	4 --> 7
	3 --> 7
	`,
	F64_EQ:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["
	state phi Stack 	"]
	7 --> 12
	11 --> 12
	9 --> 12
	9["
	eff__1062
	push_u32
	"]
	8 --> 9
	4 -. Stack .-> 9
	4["
	a
	pop_f64
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_f64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	8["
	arg__1063
	0
	"]
	11["
	eff__1060
	push_u32
	"]
	10 --> 11
	4 -. Stack .-> 11
	10["
	arg__1061
	1
	"]
	7["
	cond__1059
	double.==
	"]
	4 --> 7
	3 --> 7
	`,
	F64_NE:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["
	state phi Stack 	"]
	7 --> 12
	11 --> 12
	9 --> 12
	9["
	eff__1076
	push_u32
	"]
	8 --> 9
	4 -. Stack .-> 9
	4["
	a
	pop_f64
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_f64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	8["
	arg__1077
	0
	"]
	11["
	eff__1074
	push_u32
	"]
	10 --> 11
	4 -. Stack .-> 11
	10["
	arg__1075
	1
	"]
	7["
	cond__1073
	double.!=
	"]
	4 --> 7
	3 --> 7
	`,
	F64_LT:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["
	state phi Stack 	"]
	7 --> 12
	11 --> 12
	9 --> 12
	9["
	eff__1090
	push_u32
	"]
	8 --> 9
	4 -. Stack .-> 9
	4["
	a
	pop_f64
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_f64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	8["
	arg__1091
	0
	"]
	11["
	eff__1088
	push_u32
	"]
	10 --> 11
	4 -. Stack .-> 11
	10["
	arg__1089
	1
	"]
	7["
	cond__1087
	double.<
	"]
	4 --> 7
	3 --> 7
	`,
	F64_GT:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["
	state phi Stack 	"]
	7 --> 12
	11 --> 12
	9 --> 12
	9["
	eff__1104
	push_u32
	"]
	8 --> 9
	4 -. Stack .-> 9
	4["
	a
	pop_f64
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_f64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	8["
	arg__1105
	0
	"]
	11["
	eff__1102
	push_u32
	"]
	10 --> 11
	4 -. Stack .-> 11
	10["
	arg__1103
	1
	"]
	7["
	cond__1101
	double.>
	"]
	4 --> 7
	3 --> 7
	`,
	F64_LE:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["
	state phi Stack 	"]
	7 --> 12
	11 --> 12
	9 --> 12
	9["
	eff__1118
	push_u32
	"]
	8 --> 9
	4 -. Stack .-> 9
	4["
	a
	pop_f64
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_f64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	8["
	arg__1119
	0
	"]
	11["
	eff__1116
	push_u32
	"]
	10 --> 11
	4 -. Stack .-> 11
	10["
	arg__1117
	1
	"]
	7["
	cond__1115
	double.<=
	"]
	4 --> 7
	3 --> 7
	`,
	F64_GE:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	12 -. Stack .-> 1
	12["
	state phi Stack 	"]
	7 --> 12
	11 --> 12
	9 --> 12
	9["
	eff__1132
	push_u32
	"]
	8 --> 9
	4 -. Stack .-> 9
	4["
	a
	pop_f64
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_f64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	8["
	arg__1133
	0
	"]
	11["
	eff__1130
	push_u32
	"]
	10 --> 11
	4 -. Stack .-> 11
	10["
	arg__1131
	1
	"]
	7["
	cond__1129
	double.>=
	"]
	4 --> 7
	3 --> 7
	`,
	I32_CLZ:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1143
	push_u32
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_u32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	U32_clz
	"]
	3 --> 5
	`,
	I32_CTZ:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1146
	push_u32
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_u32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	U32_ctz
	"]
	3 --> 5
	`,
	I32_POPCNT:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1149
	push_u32
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_u32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	U32_popcnt
	"]
	3 --> 5
	`,
	I32_ADD:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["
	eff__1152
	push_u32
	"]
	7 --> 9
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
	7["
	r
	u32.+
	"]
	4 --> 7
	3 --> 7
	`,
	I32_SUB:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["
	eff__1156
	push_u32
	"]
	7 --> 9
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
	7["
	r
	u32.-
	"]
	4 --> 7
	3 --> 7
	`,
	I32_MUL:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["
	eff__1160
	push_u32
	"]
	7 --> 9
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
	7["
	r
	u32.*
	"]
	4 --> 7
	3 --> 7
	`,
	I32_DIV_S:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	26 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	27 -. Stack .-> 1
	27["
	state phi Stack 	"]
	10 --> 27
	25 --> 27
	24 --> 27
	24["
	state phi Stack 	"]
	19 --> 24
	22 --> 24
	21 --> 24
	21["
	eff__1168
	push_u32
	"]
	7 --> 21
	4 -. Stack .-> 21
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
	r
	U32_div_s
	"]
	4 --> 7
	3 --> 7
	22["
	eff__1167
	trapDivideUnrepresentable
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 22
	4 -. Stack .-> 22
	19["
	cond__1166
	bool.&&
	"]
	18 --> 19
	14 --> 19
	14["
	arg__1171
	u32.==
	"]
	4 --> 14
	12 --> 14
	12["
	arg__1176
	u32.view
	"]
	11 --> 12
	11["
	arg__1177
	-2_147_483_648
	"]
	18["
	arg__1170
	u32.==
	"]
	3 --> 18
	16 --> 18
	16["
	arg__1173
	u32.view
	"]
	15 --> 16
	15["
	arg__1174
	-1
	"]
	25["
	eff__1165
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 25
	4 -. Stack .-> 25
	10["
	cond__1164
	u32.==
	"]
	3 --> 10
	8 --> 10
	8["
	arg__1179
	0
	"]
	26["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	10 --> 26
	25 --> 26
	23 --> 26
	23["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	19 --> 23
	22 --> 23
	0 --> 23
	`,
	I32_DIV_U:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	14 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	15 -. Stack .-> 1
	15["
	state phi Stack 	"]
	10 --> 15
	13 --> 15
	12 --> 15
	12["
	eff__1202
	push_u32
	"]
	7 --> 12
	4 -. Stack .-> 12
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
	r
	u32./
	"]
	4 --> 7
	3 --> 7
	13["
	eff__1201
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 13
	4 -. Stack .-> 13
	10["
	cond__1200
	u32.==
	"]
	3 --> 10
	8 --> 10
	8["
	arg__1205
	0
	"]
	14["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	10 --> 14
	13 --> 14
	0 --> 14
	`,
	I32_REM_S:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	14 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	15 -. Stack .-> 1
	15["
	state phi Stack 	"]
	10 --> 15
	13 --> 15
	12 --> 15
	12["
	eff__1218
	push_u32
	"]
	7 --> 12
	4 -. Stack .-> 12
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
	r
	U32_rem_s
	"]
	4 --> 7
	3 --> 7
	13["
	eff__1217
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 13
	4 -. Stack .-> 13
	10["
	cond__1216
	u32.==
	"]
	3 --> 10
	8 --> 10
	8["
	arg__1221
	0
	"]
	14["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	10 --> 14
	13 --> 14
	0 --> 14
	`,
	I32_REM_U:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	14 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	15 -. Stack .-> 1
	15["
	state phi Stack 	"]
	10 --> 15
	13 --> 15
	12 --> 15
	12["
	eff__1234
	push_u32
	"]
	7 --> 12
	4 -. Stack .-> 12
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
	r
	U32_rem_u
	"]
	4 --> 7
	3 --> 7
	13["
	eff__1233
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 13
	4 -. Stack .-> 13
	10["
	cond__1232
	u32.==
	"]
	3 --> 10
	8 --> 10
	8["
	arg__1237
	0
	"]
	14["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	10 --> 14
	13 --> 14
	0 --> 14
	`,
	I32_AND:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["
	eff__1248
	push_u32
	"]
	7 --> 9
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
	7["
	r
	u32.&
	"]
	4 --> 7
	3 --> 7
	`,
	I32_OR:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["
	eff__1252
	push_u32
	"]
	7 --> 9
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
	7["
	r
	u32.|
	"]
	4 --> 7
	3 --> 7
	`,
	I32_XOR:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["
	eff__1256
	push_u32
	"]
	7 --> 9
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
	7["
	r
	u32.^
	"]
	4 --> 7
	3 --> 7
	`,
	I32_SHL:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["
	eff__1260
	push_u32
	"]
	7 --> 9
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
	7["
	r
	U32_shl
	"]
	4 --> 7
	3 --> 7
	`,
	I32_SHR_S:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["
	eff__1264
	push_u32
	"]
	7 --> 9
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
	7["
	r
	U32_shr_s
	"]
	4 --> 7
	3 --> 7
	`,
	I32_SHR_U:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["
	eff__1268
	push_u32
	"]
	7 --> 9
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
	7["
	r
	U32_shr_u
	"]
	4 --> 7
	3 --> 7
	`,
	I32_ROTL:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["
	eff__1272
	push_u32
	"]
	7 --> 9
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
	7["
	r
	U32_rotl
	"]
	4 --> 7
	3 --> 7
	`,
	I32_ROTR:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["
	eff__1276
	push_u32
	"]
	7 --> 9
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
	7["
	r
	U32_rotr
	"]
	4 --> 7
	3 --> 7
	`,
	I64_CLZ:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1280
	push_u64
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	U64_clz
	"]
	3 --> 5
	`,
	I64_CTZ:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1283
	push_u64
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	U64_ctz
	"]
	3 --> 5
	`,
	I64_POPCNT:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1286
	push_u64
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	U64_popcnt
	"]
	3 --> 5
	`,
	I64_ADD:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["
	eff__1289
	push_u64
	"]
	7 --> 9
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
	7["
	r
	u64.+
	"]
	4 --> 7
	3 --> 7
	`,
	I64_SUB:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["
	eff__1293
	push_u64
	"]
	7 --> 9
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
	7["
	r
	u64.-
	"]
	4 --> 7
	3 --> 7
	`,
	I64_MUL:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["
	eff__1297
	push_u64
	"]
	7 --> 9
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
	7["
	r
	u64.*
	"]
	4 --> 7
	3 --> 7
	`,
	I64_DIV_S:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	26 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	27 -. Stack .-> 1
	27["
	state phi Stack 	"]
	10 --> 27
	25 --> 27
	24 --> 27
	24["
	state phi Stack 	"]
	19 --> 24
	22 --> 24
	21 --> 24
	21["
	eff__1305
	push_u64
	"]
	7 --> 21
	4 -. Stack .-> 21
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
	r
	U64_div_s
	"]
	4 --> 7
	3 --> 7
	22["
	eff__1304
	trapDivideUnrepresentable
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 22
	4 -. Stack .-> 22
	19["
	cond__1303
	bool.&&
	"]
	18 --> 19
	14 --> 19
	14["
	arg__1308
	u64.==
	"]
	4 --> 14
	12 --> 14
	12["
	arg__1313
	u64.view
	"]
	11 --> 12
	11["
	arg__1314
	-9223372036854775808L
	"]
	18["
	arg__1307
	u64.==
	"]
	3 --> 18
	16 --> 18
	16["
	arg__1310
	u64.view
	"]
	15 --> 16
	15["
	arg__1311
	-1
	"]
	25["
	eff__1302
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 25
	4 -. Stack .-> 25
	10["
	cond__1301
	u64.==
	"]
	3 --> 10
	8 --> 10
	8["
	arg__1316
	0
	"]
	26["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	10 --> 26
	25 --> 26
	23 --> 26
	23["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	19 --> 23
	22 --> 23
	0 --> 23
	`,
	I64_DIV_U:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	14 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	15 -. Stack .-> 1
	15["
	state phi Stack 	"]
	10 --> 15
	13 --> 15
	12 --> 15
	12["
	eff__1339
	push_u64
	"]
	7 --> 12
	4 -. Stack .-> 12
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
	r
	u64./
	"]
	4 --> 7
	3 --> 7
	13["
	eff__1338
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 13
	4 -. Stack .-> 13
	10["
	cond__1337
	u64.==
	"]
	3 --> 10
	8 --> 10
	8["
	arg__1342
	0
	"]
	14["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	10 --> 14
	13 --> 14
	0 --> 14
	`,
	I64_REM_S:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	14 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	15 -. Stack .-> 1
	15["
	state phi Stack 	"]
	10 --> 15
	13 --> 15
	12 --> 15
	12["
	eff__1355
	push_u64
	"]
	7 --> 12
	4 -. Stack .-> 12
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
	r
	U64_rem_s
	"]
	4 --> 7
	3 --> 7
	13["
	eff__1354
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 13
	4 -. Stack .-> 13
	10["
	cond__1353
	u64.==
	"]
	3 --> 10
	8 --> 10
	8["
	arg__1358
	0
	"]
	14["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	10 --> 14
	13 --> 14
	0 --> 14
	`,
	I64_REM_U:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	14 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	15 -. Stack .-> 1
	15["
	state phi Stack 	"]
	10 --> 15
	13 --> 15
	12 --> 15
	12["
	eff__1371
	push_u64
	"]
	7 --> 12
	4 -. Stack .-> 12
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
	r
	U64_rem_u
	"]
	4 --> 7
	3 --> 7
	13["
	eff__1370
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 13
	4 -. Stack .-> 13
	10["
	cond__1369
	u64.==
	"]
	3 --> 10
	8 --> 10
	8["
	arg__1374
	0
	"]
	14["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	10 --> 14
	13 --> 14
	0 --> 14
	`,
	I64_AND:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["
	eff__1385
	push_u64
	"]
	7 --> 9
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
	7["
	r
	u64.&
	"]
	4 --> 7
	3 --> 7
	`,
	I64_OR:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["
	eff__1389
	push_u64
	"]
	7 --> 9
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
	7["
	r
	u64.|
	"]
	4 --> 7
	3 --> 7
	`,
	I64_XOR:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["
	eff__1393
	push_u64
	"]
	7 --> 9
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
	7["
	r
	u64.^
	"]
	4 --> 7
	3 --> 7
	`,
	I64_SHL:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["
	eff__1397
	push_u64
	"]
	7 --> 9
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
	7["
	r
	U64_shl
	"]
	4 --> 7
	3 --> 7
	`,
	I64_SHR_S:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["
	eff__1401
	push_u64
	"]
	7 --> 9
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
	7["
	r
	U64_shr_s
	"]
	4 --> 7
	3 --> 7
	`,
	I64_SHR_U:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["
	eff__1405
	push_u64
	"]
	7 --> 9
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
	7["
	r
	U64_shr_u
	"]
	4 --> 7
	3 --> 7
	`,
	I64_ROTL:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["
	eff__1409
	push_u64
	"]
	7 --> 9
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
	7["
	r
	U64_rotl
	"]
	4 --> 7
	3 --> 7
	`,
	I64_ROTR:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["
	eff__1413
	push_u64
	"]
	7 --> 9
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
	7["
	r
	U64_rotr
	"]
	4 --> 7
	3 --> 7
	`,
	F32_ABS:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1417
	push_f32
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_f32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	float.abs
	"]
	3 --> 5
	`,
	F32_NEG:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1420
	push_f32
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_f32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	F32_neg
	"]
	3 --> 5
	`,
	F32_CEIL:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1423
	push_f32
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_f32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	F32_ceil
	"]
	3 --> 5
	`,
	F32_FLOOR:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1426
	push_f32
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_f32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	F32_floor
	"]
	3 --> 5
	`,
	F32_TRUNC:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1429
	push_f32
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_f32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	F32_trunc
	"]
	3 --> 5
	`,
	F32_NEAREST:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1432
	push_f32
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_f32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	float.round
	"]
	3 --> 5
	`,
	F32_SQRT:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1435
	push_f32
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_f32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	float.sqrt
	"]
	3 --> 5
	`,
	F32_ADD:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["
	eff__1438
	push_f32
	"]
	7 --> 9
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
	7["
	r
	float.+
	"]
	4 --> 7
	3 --> 7
	`,
	F32_SUB:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["
	eff__1442
	push_f32
	"]
	7 --> 9
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
	7["
	r
	float.-
	"]
	4 --> 7
	3 --> 7
	`,
	F32_MUL:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["
	eff__1446
	push_f32
	"]
	7 --> 9
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
	7["
	r
	float.*
	"]
	4 --> 7
	3 --> 7
	`,
	F32_DIV:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	14 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	15 -. Stack .-> 1
	15["
	state phi Stack 	"]
	10 --> 15
	13 --> 15
	12 --> 15
	12["
	eff__1452
	push_f32
	"]
	7 --> 12
	4 -. Stack .-> 12
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
	r
	float./
	"]
	4 --> 7
	3 --> 7
	13["
	eff__1451
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 13
	4 -. Stack .-> 13
	10["
	cond__1450
	float.==
	"]
	3 --> 10
	8 --> 10
	8["
	arg__1455
	0.0f
	"]
	14["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	10 --> 14
	13 --> 14
	0 --> 14
	`,
	F64_ABS:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1466
	push_f64
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_f64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	double.abs
	"]
	3 --> 5
	`,
	F64_NEG:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1469
	push_f64
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_f64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	F64_neg
	"]
	3 --> 5
	`,
	F64_CEIL:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1472
	push_f64
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_f64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	F64_ceil
	"]
	3 --> 5
	`,
	F64_FLOOR:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1475
	push_f64
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_f64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	F64_floor
	"]
	3 --> 5
	`,
	F64_TRUNC:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1478
	push_f64
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_f64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	F64_trunc
	"]
	3 --> 5
	`,
	F64_NEAREST:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1481
	push_f64
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_f64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	double.round
	"]
	3 --> 5
	`,
	F64_SQRT:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1484
	push_f64
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_f64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	double.sqrt
	"]
	3 --> 5
	`,
	F64_ADD:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["
	eff__1487
	push_f64
	"]
	7 --> 9
	4 -. Stack .-> 9
	4["
	a
	pop_f64
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_f64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	7["
	r
	double.+
	"]
	4 --> 7
	3 --> 7
	`,
	F64_SUB:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["
	eff__1491
	push_f64
	"]
	7 --> 9
	4 -. Stack .-> 9
	4["
	a
	pop_f64
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_f64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	7["
	r
	double.-
	"]
	4 --> 7
	3 --> 7
	`,
	F64_MUL:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	9 -. Stack .-> 1
	9["
	eff__1495
	push_f64
	"]
	7 --> 9
	4 -. Stack .-> 9
	4["
	a
	pop_f64
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_f64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	7["
	r
	double.*
	"]
	4 --> 7
	3 --> 7
	`,
	F64_DIV:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	14 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	15 -. Stack .-> 1
	15["
	state phi Stack 	"]
	10 --> 15
	13 --> 15
	12 --> 15
	12["
	eff__1501
	push_f64
	"]
	7 --> 12
	4 -. Stack .-> 12
	4["
	a
	pop_f64
	"]
	3 -. Stack .-> 4
	3["
	b
	pop_f64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	7["
	r
	double./
	"]
	4 --> 7
	3 --> 7
	13["
	eff__1500
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 13
	4 -. Stack .-> 13
	10["
	cond__1499
	double.==
	"]
	3 --> 10
	8 --> 10
	8["
	arg__1504
	0.0f
	"]
	14["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	10 --> 14
	13 --> 14
	0 --> 14
	`,
	I32_WRAP_I64:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1515
	push_u32
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	U32_wrap_u64
	"]
	3 --> 5
	`,
	I32_TRUNC_F32_S:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1518
	push_u32
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_f32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	U32_trunc_f32_s
	"]
	3 --> 5
	`,
	I32_TRUNC_F32_U:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1521
	push_u32
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_f32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	U32_trunc_f32_u
	"]
	3 --> 5
	`,
	I32_TRUNC_F64_S:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1524
	push_u32
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_f64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	U32_trunc_f64_s
	"]
	3 --> 5
	`,
	I32_TRUNC_F64_U:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1527
	push_u32
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_f64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	U32_trunc_f64_u
	"]
	3 --> 5
	`,
	I64_EXTEND_I32_S:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1530
	push_u64
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_u32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	U64_extend_i32_s
	"]
	3 --> 5
	`,
	I64_EXTEND_I32_U:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1533
	push_u64
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_u32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	U64_extend_i32_u
	"]
	3 --> 5
	`,
	I64_TRUNC_F32_S:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1536
	push_u64
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_f32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	U64_trunc_f32_s
	"]
	3 --> 5
	`,
	I64_TRUNC_F32_U:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1539
	push_u64
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_f32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	U64_trunc_f32_u
	"]
	3 --> 5
	`,
	I64_TRUNC_F64_S:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1542
	push_u64
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_f64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	U64_trunc_f64_s
	"]
	3 --> 5
	`,
	I64_TRUNC_F64_U:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1545
	push_u64
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_f64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	U64_trunc_f64_u
	"]
	3 --> 5
	`,
	F32_CONVERT_I32_S:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1548
	push_f32
	"]
	5 --> 7
	3 -. Stack .-> 7
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
	F32_convert_i32_s
	"]
	3 --> 5
	`,
	F32_CONVERT_I32_U:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1551
	push_f32
	"]
	5 --> 7
	3 -. Stack .-> 7
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
	F32_convert_i32_u
	"]
	3 --> 5
	`,
	F32_CONVERT_I64_S:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1554
	push_f32
	"]
	5 --> 7
	3 -. Stack .-> 7
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
	F32_convert_i64_s
	"]
	3 --> 5
	`,
	F32_CONVERT_I64_U:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1557
	push_f32
	"]
	5 --> 7
	3 -. Stack .-> 7
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
	F32_convert_i64_u
	"]
	3 --> 5
	`,
	F64_CONVERT_I32_S:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1560
	push_f64
	"]
	5 --> 7
	3 -. Stack .-> 7
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
	F64_convert_i32_s
	"]
	3 --> 5
	`,
	F64_CONVERT_I32_U:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1563
	push_f64
	"]
	5 --> 7
	3 -. Stack .-> 7
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
	F64_convert_i32_u
	"]
	3 --> 5
	`,
	F64_CONVERT_I64_S:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1566
	push_f64
	"]
	5 --> 7
	3 -. Stack .-> 7
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
	F64_convert_i64_s
	"]
	3 --> 5
	`,
	F64_CONVERT_I64_U:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1569
	push_f64
	"]
	5 --> 7
	3 -. Stack .-> 7
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
	F64_convert_i64_u
	"]
	3 --> 5
	`,
	I32_REINTERPRET_F32:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1572
	push_u32
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_f32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	u32_reinterpret_f32
	"]
	3 --> 5
	`,
	I64_REINTERPRET_F64:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1575
	push_u64
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_f64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	u64_reinterpret_f64
	"]
	3 --> 5
	`,
	F32_REINTERPRET_I32:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1578
	push_f32
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_u32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	f32_reinterpret_u32
	"]
	3 --> 5
	`,
	F64_REINTERPRET_I64:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1581
	push_f64
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	f64_reinterpret_u64
	"]
	3 --> 5
	`,
	I32_EXTEND8_S:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1584
	push_u32
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_u32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	U32_extend8_s
	"]
	3 --> 5
	`,
	I32_EXTEND16_S:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1587
	push_u32
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_u32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	U32_extend16_s
	"]
	3 --> 5
	`,
	I64_EXTEND8_S:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1590
	push_u64
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	U64_extend8_s
	"]
	3 --> 5
	`,
	I64_EXTEND16_S:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1593
	push_u64
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	U64_extend16_s
	"]
	3 --> 5
	`,
	I64_EXTEND32_S:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	7 -. Stack .-> 1
	7["
	eff__1596
	push_u64
	"]
	5 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	5["
	r
	U64_extend32_s
	"]
	3 --> 5
	`,
	REF_NULL:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	3 -. Codeptr .-> 1
	5 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0["
	Start
	"]
	5["
	eff__1599
	push_Object
	"]
	4 --> 5
	0 -. Stack .-> 5
	4["
	arg__1600
	object_Null
	"]
	3["
	idx
	imm_readULEB32
	"]
	0 -. Codeptr .-> 3
	`,
	REF_IS_NULL:`---
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
	state phi Stack 	"]
	5 --> 10
	9 --> 10
	7 --> 10
	7["
	eff__1604
	push_u32
	"]
	6 --> 7
	3 -. Stack .-> 7
	3["
	obj
	pop_Object
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	6["
	arg__1605
	0
	"]
	9["
	eff__1602
	push_u32
	"]
	8 --> 9
	3 -. Stack .-> 9
	8["
	arg__1603
	1
	"]
	5["
	cond__1601
	object_isNull
	"]
	3 --> 5
	`,
	REF_AS_NON_NULL:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	7 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	10 -. Stack .-> 1
	10["
	eff__1614
	push_Object
	"]
	3 --> 10
	8 -. Stack .-> 10
	8["
	state phi Stack 	"]
	5 --> 8
	6 --> 8
	3 --> 8
	3["
	obj
	pop_Object
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	6["
	eff__1617
	trapNull
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 6
	3 -. Stack .-> 6
	5["
	cond__1616
	object_isNull
	"]
	3 --> 5
	7["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	5 --> 7
	6 --> 7
	0 --> 7
	`,
	STRUCT_NEW:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	3 -. Codeptr .-> 1
	9 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0["
	Start
	"]
	9["
	eff__1626
	push_Object
	"]
	7 --> 9
	0 -. Stack .-> 9
	7["
	obj
	object_New
	"]
	5 --> 7
	5["
	sig
	m_getSignature
	"]
	3 --> 5
	3["
	struct_idx
	imm_readULEB32
	"]
	0 -. Codeptr .-> 3
	`,
	STRUCT_GET:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	15 -. Codeptr .-> 1
	16 -. Stack .-> 1
	17 -. Trap Locals Globals Tables Memory Extra .-> 1
	17["
	state phi Trap Locals Globals Tables Memory Extra 	"]
	13 --> 17
	14 --> 17
	0 --> 17
	0["
	Start
	"]
	14["
	ret__1656
	trapNull
	"]
	4 -. Codeptr .-> 14
	11 -. Stack .-> 14
	0 -. Trap Locals Globals Tables Memory Extra .-> 14
	11["
	obj
	pop_Object
	"]
	0 -. Stack .-> 11
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
	13["
	cond__1655
	object_isNull
	"]
	11 --> 13
	16["
	state phi Stack 	"]
	13 --> 16
	14 --> 16
	11 --> 16
	15["
	state phi Codeptr 	"]
	13 --> 15
	14 --> 15
	4 --> 15
	`,
	STRUCT_GET_S:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	15 -. Codeptr .-> 1
	16 -. Stack .-> 1
	17 -. Trap Locals Globals Tables Memory Extra .-> 1
	17["
	state phi Trap Locals Globals Tables Memory Extra 	"]
	13 --> 17
	14 --> 17
	0 --> 17
	0["
	Start
	"]
	14["
	ret__1684
	trapNull
	"]
	4 -. Codeptr .-> 14
	11 -. Stack .-> 14
	0 -. Trap Locals Globals Tables Memory Extra .-> 14
	11["
	obj
	pop_Object
	"]
	0 -. Stack .-> 11
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
	13["
	cond__1683
	object_isNull
	"]
	11 --> 13
	16["
	state phi Stack 	"]
	13 --> 16
	14 --> 16
	11 --> 16
	15["
	state phi Codeptr 	"]
	13 --> 15
	14 --> 15
	4 --> 15
	`,
	STRUCT_GET_U:`---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	15 -. Codeptr .-> 1
	16 -. Stack .-> 1
	17 -. Trap Locals Globals Tables Memory Extra .-> 1
	17["
	state phi Trap Locals Globals Tables Memory Extra 	"]
	13 --> 17
	14 --> 17
	0 --> 17
	0["
	Start
	"]
	14["
	ret__1712
	trapNull
	"]
	4 -. Codeptr .-> 14
	11 -. Stack .-> 14
	0 -. Trap Locals Globals Tables Memory Extra .-> 14
	11["
	obj
	pop_Object
	"]
	0 -. Stack .-> 11
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
	13["
	cond__1711
	object_isNull
	"]
	11 --> 13
	16["
	state phi Stack 	"]
	13 --> 16
	14 --> 16
	11 --> 16
	15["
	state phi Codeptr 	"]
	13 --> 15
	14 --> 15
	4 --> 15
	`,
}
