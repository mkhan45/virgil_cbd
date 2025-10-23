window.traces = {};
window.traces.UNREACHABLE = {}
window.traces.UNREACHABLE.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.UNREACHABLE.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.UNREACHABLE.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.UNREACHABLE.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.UNREACHABLE.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.UNREACHABLE.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.NOP = {}
window.traces.NOP.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.NOP.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.NOP.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.NOP.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.NOP.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.NOP.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.BLOCK = {}
window.traces.BLOCK.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.BLOCK.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.BLOCK.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.BLOCK.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.BLOCK.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.BLOCK.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.LOOP = {}
window.traces.LOOP.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.LOOP.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.LOOP.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.LOOP.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.LOOP.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.LOOP.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.IF = {}
window.traces.IF.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.IF.overloadOps = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	13 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["
	eff_st_put__13
	ctlxfer.put_IF
	"]
	6 --> 14
	13 -. Extra .-> 14
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
	U32_equals
	"]
	4 --> 9
	7 --> 9
	7["
	arg__11
	0
	"]
</pre>`;
window.traces.IF.addAbstractions = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	13 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["
	eff_st_put__13
	ctlxfer.put_IF
	"]
	6 --> 14
	13 -. Extra .-> 14
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
	U32_equals
	"]
	4 --> 9
	15 --> 9
	15["
	abs__14
	rtcast_u32
	"]
	7 --> 15
	7["
	arg__11
	0
	"]
</pre>`;
window.traces.IF.unLEM = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	13 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["
	eff_st_put__13
	ctlxfer.put_IF
	"]
	6 --> 14
	13 -. Extra .-> 14
	13["
	state phi Codeptr Stack Trap Locals Globals Tables Memory Extra 	"]
	18 --> 13
	20 --> 13
	19 --> 13
	19["
	state phi Codeptr Stack Trap Locals Globals Tables Memory Extra 	"]
	16 --> 19
	12 --> 19
	10 --> 19
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
	16["
	mt__15
	U32_maybeTrue
	"]
	9 --> 16
	9["
	cond__6
	U32_equals
	"]
	4 --> 9
	15 --> 9
	15["
	abs__14
	rtcast_u32
	"]
	7 --> 15
	7["
	arg__11
	0
	"]
	20["
	eff_merge__18
	merge
	"]
	12 --> 20
	10 --> 20
	18["
	mb__17
	bool.&&
	"]
	16 --> 18
	17 --> 18
	17["
	mf__16
	U32_maybeFalse
	"]
	9 --> 17
</pre>`;
window.traces.IF.constUnLEM = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	13 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["
	eff_st_put__13
	ctlxfer.put_IF
	"]
	6 --> 14
	20 -. Extra .-> 14
	20["
	eff_merge__18
	merge
	"]
	12 --> 20
	10 --> 20
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
	13["
	eff_merge__18
	merge
	"]
	12 --> 13
	10 --> 13
</pre>`;
window.traces.IF.chooseMerge = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	13 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["
	eff_st_put__13
	ctlxfer.put_IF
	"]
	6 --> 14
	20 -. Extra .-> 14
	20["
	eff_merge__18
	merge
	"]
	12 --> 20
	10 --> 20
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
	13["
	eff_merge__18
	merge
	"]
	12 --> 13
	10 --> 13
</pre>`;
window.traces.ELSE = {}
window.traces.ELSE.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.ELSE.overloadOps = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	6 -. Extra .-> 1
	6["
	eff_st_put__21
	ctlxfer.put_ELSE
	"]
	3 --> 6
	5 -. Extra .-> 6
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
</pre>`;
window.traces.ELSE.addAbstractions = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	6 -. Extra .-> 1
	6["
	eff_st_put__21
	ctlxfer.put_ELSE
	"]
	3 --> 6
	5 -. Extra .-> 6
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
</pre>`;
window.traces.ELSE.unLEM = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	6 -. Extra .-> 1
	6["
	eff_st_put__21
	ctlxfer.put_ELSE
	"]
	3 --> 6
	5 -. Extra .-> 6
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
</pre>`;
window.traces.ELSE.constUnLEM = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	6 -. Extra .-> 1
	6["
	eff_st_put__21
	ctlxfer.put_ELSE
	"]
	3 --> 6
	5 -. Extra .-> 6
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
</pre>`;
window.traces.ELSE.chooseMerge = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	5 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	6 -. Extra .-> 1
	6["
	eff_st_put__21
	ctlxfer.put_ELSE
	"]
	3 --> 6
	5 -. Extra .-> 6
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
</pre>`;
window.traces.TRY = {}
window.traces.TRY.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.TRY.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.TRY.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.TRY.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.TRY.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.TRY.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.END = {}
window.traces.END.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.END.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.END.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.END.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.END.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.END.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.BR = {}
window.traces.BR.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.BR.overloadOps = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	8 -. Extra .-> 1
	8["
	eff_st_put__30
	ctlxfer.put_BR
	"]
	5 --> 8
	7 -. Extra .-> 8
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
</pre>`;
window.traces.BR.addAbstractions = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	8 -. Extra .-> 1
	8["
	eff_st_put__30
	ctlxfer.put_BR
	"]
	5 --> 8
	7 -. Extra .-> 8
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
</pre>`;
window.traces.BR.unLEM = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	8 -. Extra .-> 1
	8["
	eff_st_put__30
	ctlxfer.put_BR
	"]
	5 --> 8
	7 -. Extra .-> 8
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
</pre>`;
window.traces.BR.constUnLEM = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	8 -. Extra .-> 1
	8["
	eff_st_put__30
	ctlxfer.put_BR
	"]
	5 --> 8
	7 -. Extra .-> 8
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
</pre>`;
window.traces.BR.chooseMerge = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	8 -. Extra .-> 1
	8["
	eff_st_put__30
	ctlxfer.put_BR
	"]
	5 --> 8
	7 -. Extra .-> 8
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
</pre>`;
window.traces.BR_IF = {}
window.traces.BR_IF.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.BR_IF.overloadOps = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	13 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["
	eff_st_put__38
	ctlxfer.put_BR_IF
	"]
	5 --> 14
	13 -. Extra .-> 14
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
	U32_not_equals
	"]
	6 --> 9
	7 --> 9
	7["
	arg__36
	0
	"]
</pre>`;
window.traces.BR_IF.addAbstractions = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	13 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["
	eff_st_put__38
	ctlxfer.put_BR_IF
	"]
	5 --> 14
	13 -. Extra .-> 14
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
	U32_not_equals
	"]
	6 --> 9
	15 --> 9
	15["
	abs__39
	rtcast_u32
	"]
	7 --> 15
	7["
	arg__36
	0
	"]
</pre>`;
window.traces.BR_IF.unLEM = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	13 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["
	eff_st_put__38
	ctlxfer.put_BR_IF
	"]
	5 --> 14
	13 -. Extra .-> 14
	13["
	state phi Codeptr Stack Trap Locals Globals Tables Memory Extra 	"]
	18 --> 13
	20 --> 13
	19 --> 13
	19["
	state phi Codeptr Stack Trap Locals Globals Tables Memory Extra 	"]
	16 --> 19
	12 --> 19
	10 --> 19
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
	16["
	mt__40
	U32_maybeTrue
	"]
	9 --> 16
	9["
	cond__31
	U32_not_equals
	"]
	6 --> 9
	15 --> 9
	15["
	abs__39
	rtcast_u32
	"]
	7 --> 15
	7["
	arg__36
	0
	"]
	20["
	eff_merge__43
	merge
	"]
	12 --> 20
	10 --> 20
	18["
	mb__42
	bool.&&
	"]
	16 --> 18
	17 --> 18
	17["
	mf__41
	U32_maybeFalse
	"]
	9 --> 17
</pre>`;
window.traces.BR_IF.constUnLEM = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	13 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["
	eff_st_put__38
	ctlxfer.put_BR_IF
	"]
	5 --> 14
	20 -. Extra .-> 14
	20["
	eff_merge__43
	merge
	"]
	12 --> 20
	10 --> 20
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
	13["
	eff_merge__43
	merge
	"]
	12 --> 13
	10 --> 13
</pre>`;
window.traces.BR_IF.chooseMerge = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	13 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	14 -. Extra .-> 1
	14["
	eff_st_put__38
	ctlxfer.put_BR_IF
	"]
	5 --> 14
	20 -. Extra .-> 14
	20["
	eff_merge__43
	merge
	"]
	12 --> 20
	10 --> 20
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
	13["
	eff_merge__43
	merge
	"]
	12 --> 13
	10 --> 13
</pre>`;
window.traces.BR_TABLE = {}
window.traces.BR_TABLE.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.BR_TABLE.overloadOps = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	8 -. Extra .-> 1
	8["
	eff_st_put__47
	ctlxfer.put_BR_TABLE
	"]
	3 --> 8
	7 -. Extra .-> 8
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
</pre>`;
window.traces.BR_TABLE.addAbstractions = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	8 -. Extra .-> 1
	8["
	eff_st_put__47
	ctlxfer.put_BR_TABLE
	"]
	3 --> 8
	7 -. Extra .-> 8
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
</pre>`;
window.traces.BR_TABLE.unLEM = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	8 -. Extra .-> 1
	8["
	eff_st_put__47
	ctlxfer.put_BR_TABLE
	"]
	3 --> 8
	7 -. Extra .-> 8
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
</pre>`;
window.traces.BR_TABLE.constUnLEM = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	8 -. Extra .-> 1
	8["
	eff_st_put__47
	ctlxfer.put_BR_TABLE
	"]
	3 --> 8
	7 -. Extra .-> 8
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
</pre>`;
window.traces.BR_TABLE.chooseMerge = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	7 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	8 -. Extra .-> 1
	8["
	eff_st_put__47
	ctlxfer.put_BR_TABLE
	"]
	3 --> 8
	7 -. Extra .-> 8
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
</pre>`;
window.traces.RETURN = {}
window.traces.RETURN.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.RETURN.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.RETURN.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.RETURN.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.RETURN.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.RETURN.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.CALL = {}
window.traces.CALL.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.CALL.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.CALL.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.CALL.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.CALL.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.CALL.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.CALL_INDIRECT = {}
window.traces.CALL_INDIRECT.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.CALL_INDIRECT.overloadOps = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	26 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	27 -. Extra .-> 1
	27["
	eff_st_put__69
	ctlxfer.put_CALL_INDIRECT
	"]
	8 --> 27
	26 -. Extra .-> 27
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
</pre>`;
window.traces.CALL_INDIRECT.addAbstractions = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	26 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	27 -. Extra .-> 1
	27["
	eff_st_put__69
	ctlxfer.put_CALL_INDIRECT
	"]
	8 --> 27
	26 -. Extra .-> 27
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
</pre>`;
window.traces.CALL_INDIRECT.unLEM = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	26 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	27 -. Extra .-> 1
	27["
	eff_st_put__69
	ctlxfer.put_CALL_INDIRECT
	"]
	8 --> 27
	26 -. Extra .-> 27
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
</pre>`;
window.traces.CALL_INDIRECT.constUnLEM = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	26 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	27 -. Extra .-> 1
	27["
	eff_st_put__69
	ctlxfer.put_CALL_INDIRECT
	"]
	8 --> 27
	26 -. Extra .-> 27
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
</pre>`;
window.traces.CALL_INDIRECT.chooseMerge = `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1["
	Finish
	"]
	26 -. Codeptr Stack Trap Locals Globals Tables Memory .-> 1
	27 -. Extra .-> 1
	27["
	eff_st_put__69
	ctlxfer.put_CALL_INDIRECT
	"]
	8 --> 27
	26 -. Extra .-> 27
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
</pre>`;
window.traces.RETURN_CALL = {}
window.traces.RETURN_CALL.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.RETURN_CALL.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.RETURN_CALL.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.RETURN_CALL.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.RETURN_CALL.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.RETURN_CALL.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.DROP = {}
window.traces.DROP.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.DROP.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.DROP.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.DROP.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.DROP.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.DROP.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.SELECT = {}
window.traces.SELECT.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.SELECT.overloadOps = `<pre class='graph'>---
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
	U32_not_equals
	"]
	3 --> 11
	9 --> 11
	9["
	arg__85
	0
	"]
</pre>`;
window.traces.SELECT.addAbstractions = `<pre class='graph'>---
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
	U32_not_equals
	"]
	3 --> 11
	19 --> 11
	19["
	abs__88
	rtcast_u32
	"]
	9 --> 19
	9["
	arg__85
	0
	"]
</pre>`;
window.traces.SELECT.unLEM = `<pre class='graph'>---
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
	22 --> 18
	25 --> 18
	23 --> 18
	23["
	state phi Stack 	"]
	20 --> 23
	17 --> 23
	14 --> 23
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
	20["
	mt__89
	U32_maybeTrue
	"]
	11 --> 20
	11["
	cond__77
	U32_not_equals
	"]
	3 --> 11
	19 --> 11
	19["
	abs__88
	rtcast_u32
	"]
	9 --> 19
	9["
	arg__85
	0
	"]
	25["
	push__93
	push_Value
	"]
	4 --> 25
	24 --> 25
	8 -. Stack .-> 25
	24["
	merge__92
	merge_Val
	"]
	4 --> 24
	8 --> 24
	6 --> 24
	6 -. Stack .-> 24
	22["
	mb__91
	bool.&&
	"]
	20 --> 22
	21 --> 22
	21["
	mf__90
	U32_maybeFalse
	"]
	11 --> 21
</pre>`;
window.traces.SELECT.constUnLEM = `<pre class='graph'>---
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
	push__93
	push_Value
	"]
	4 --> 18
	24 --> 18
	8 -. Stack .-> 18
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
	24["
	merge__92
	merge_Val
	"]
	4 --> 24
	8 --> 24
	6 --> 24
	6 -. Stack .-> 24
</pre>`;
window.traces.SELECT.chooseMerge = `<pre class='graph'>---
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
	push__93
	push_Value
	"]
	4 --> 18
	4 --> 18
	8 -. Stack .-> 18
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
</pre>`;
window.traces.LOCAL_GET = {}
window.traces.LOCAL_GET.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.LOCAL_GET.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.LOCAL_GET.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.LOCAL_GET.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.LOCAL_GET.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.LOCAL_GET.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.LOCAL_SET = {}
window.traces.LOCAL_SET.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.LOCAL_SET.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.LOCAL_SET.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.LOCAL_SET.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.LOCAL_SET.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.LOCAL_SET.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.LOCAL_TEE = {}
window.traces.LOCAL_TEE.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.LOCAL_TEE.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.LOCAL_TEE.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.LOCAL_TEE.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.LOCAL_TEE.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.LOCAL_TEE.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.GLOBAL_GET = {}
window.traces.GLOBAL_GET.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.GLOBAL_GET.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.GLOBAL_GET.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.GLOBAL_GET.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.GLOBAL_GET.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.GLOBAL_GET.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.GLOBAL_SET = {}
window.traces.GLOBAL_SET.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.GLOBAL_SET.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.GLOBAL_SET.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.GLOBAL_SET.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.GLOBAL_SET.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.GLOBAL_SET.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.TABLE_GET = {}
window.traces.TABLE_GET.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.TABLE_GET.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.TABLE_GET.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.TABLE_GET.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.TABLE_GET.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.TABLE_GET.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.TABLE_SET = {}
window.traces.TABLE_SET.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.TABLE_SET.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.TABLE_SET.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.TABLE_SET.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.TABLE_SET.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.TABLE_SET.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_LOAD = {}
window.traces.I32_LOAD.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_LOAD.overloadOps = `<pre class='graph'>---
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
	memindex__166
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
</pre>`;
window.traces.I32_LOAD.addAbstractions = `<pre class='graph'>---
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
	memindex__166
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
</pre>`;
window.traces.I32_LOAD.unLEM = `<pre class='graph'>---
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
	memindex__166
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
</pre>`;
window.traces.I32_LOAD.constUnLEM = `<pre class='graph'>---
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
	memindex__166
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
</pre>`;
window.traces.I32_LOAD.chooseMerge = `<pre class='graph'>---
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
	memindex__166
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
</pre>`;
window.traces.I64_LOAD = {}
window.traces.I64_LOAD.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_LOAD.overloadOps = `<pre class='graph'>---
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
	memindex__186
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
</pre>`;
window.traces.I64_LOAD.addAbstractions = `<pre class='graph'>---
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
	memindex__186
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
</pre>`;
window.traces.I64_LOAD.unLEM = `<pre class='graph'>---
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
	memindex__186
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
</pre>`;
window.traces.I64_LOAD.constUnLEM = `<pre class='graph'>---
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
	memindex__186
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
</pre>`;
window.traces.I64_LOAD.chooseMerge = `<pre class='graph'>---
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
	memindex__186
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
</pre>`;
window.traces.F32_LOAD = {}
window.traces.F32_LOAD.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_LOAD.overloadOps = `<pre class='graph'>---
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
	memindex__206
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
</pre>`;
window.traces.F32_LOAD.addAbstractions = `<pre class='graph'>---
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
	memindex__206
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
</pre>`;
window.traces.F32_LOAD.unLEM = `<pre class='graph'>---
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
	memindex__206
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
</pre>`;
window.traces.F32_LOAD.constUnLEM = `<pre class='graph'>---
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
	memindex__206
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
</pre>`;
window.traces.F32_LOAD.chooseMerge = `<pre class='graph'>---
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
	memindex__206
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
</pre>`;
window.traces.F64_LOAD = {}
window.traces.F64_LOAD.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_LOAD.overloadOps = `<pre class='graph'>---
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
	memindex__226
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
</pre>`;
window.traces.F64_LOAD.addAbstractions = `<pre class='graph'>---
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
	memindex__226
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
</pre>`;
window.traces.F64_LOAD.unLEM = `<pre class='graph'>---
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
	memindex__226
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
</pre>`;
window.traces.F64_LOAD.constUnLEM = `<pre class='graph'>---
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
	memindex__226
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
</pre>`;
window.traces.F64_LOAD.chooseMerge = `<pre class='graph'>---
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
	memindex__226
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
</pre>`;
window.traces.I32_LOAD8_S = {}
window.traces.I32_LOAD8_S.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_LOAD8_S.overloadOps = `<pre class='graph'>---
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
	memindex__248
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
</pre>`;
window.traces.I32_LOAD8_S.addAbstractions = `<pre class='graph'>---
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
	memindex__248
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
</pre>`;
window.traces.I32_LOAD8_S.unLEM = `<pre class='graph'>---
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
	memindex__248
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
</pre>`;
window.traces.I32_LOAD8_S.constUnLEM = `<pre class='graph'>---
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
	memindex__248
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
</pre>`;
window.traces.I32_LOAD8_S.chooseMerge = `<pre class='graph'>---
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
	memindex__248
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
</pre>`;
window.traces.I32_LOAD8_U = {}
window.traces.I32_LOAD8_U.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_LOAD8_U.overloadOps = `<pre class='graph'>---
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
	memindex__268
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
</pre>`;
window.traces.I32_LOAD8_U.addAbstractions = `<pre class='graph'>---
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
	memindex__268
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
</pre>`;
window.traces.I32_LOAD8_U.unLEM = `<pre class='graph'>---
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
	memindex__268
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
</pre>`;
window.traces.I32_LOAD8_U.constUnLEM = `<pre class='graph'>---
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
	memindex__268
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
</pre>`;
window.traces.I32_LOAD8_U.chooseMerge = `<pre class='graph'>---
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
	memindex__268
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
</pre>`;
window.traces.I32_LOAD16_S = {}
window.traces.I32_LOAD16_S.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_LOAD16_S.overloadOps = `<pre class='graph'>---
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
	memindex__290
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
</pre>`;
window.traces.I32_LOAD16_S.addAbstractions = `<pre class='graph'>---
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
	memindex__290
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
</pre>`;
window.traces.I32_LOAD16_S.unLEM = `<pre class='graph'>---
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
	memindex__290
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
</pre>`;
window.traces.I32_LOAD16_S.constUnLEM = `<pre class='graph'>---
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
	memindex__290
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
</pre>`;
window.traces.I32_LOAD16_S.chooseMerge = `<pre class='graph'>---
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
	memindex__290
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
</pre>`;
window.traces.I32_LOAD16_U = {}
window.traces.I32_LOAD16_U.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_LOAD16_U.overloadOps = `<pre class='graph'>---
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
	memindex__310
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
</pre>`;
window.traces.I32_LOAD16_U.addAbstractions = `<pre class='graph'>---
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
	memindex__310
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
</pre>`;
window.traces.I32_LOAD16_U.unLEM = `<pre class='graph'>---
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
	memindex__310
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
</pre>`;
window.traces.I32_LOAD16_U.constUnLEM = `<pre class='graph'>---
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
	memindex__310
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
</pre>`;
window.traces.I32_LOAD16_U.chooseMerge = `<pre class='graph'>---
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
	memindex__310
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
</pre>`;
window.traces.I64_LOAD8_S = {}
window.traces.I64_LOAD8_S.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_LOAD8_S.overloadOps = `<pre class='graph'>---
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
	memindex__332
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
</pre>`;
window.traces.I64_LOAD8_S.addAbstractions = `<pre class='graph'>---
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
	memindex__332
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
</pre>`;
window.traces.I64_LOAD8_S.unLEM = `<pre class='graph'>---
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
	memindex__332
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
</pre>`;
window.traces.I64_LOAD8_S.constUnLEM = `<pre class='graph'>---
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
	memindex__332
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
</pre>`;
window.traces.I64_LOAD8_S.chooseMerge = `<pre class='graph'>---
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
	memindex__332
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
</pre>`;
window.traces.I64_LOAD8_U = {}
window.traces.I64_LOAD8_U.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_LOAD8_U.overloadOps = `<pre class='graph'>---
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
	memindex__352
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
</pre>`;
window.traces.I64_LOAD8_U.addAbstractions = `<pre class='graph'>---
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
	memindex__352
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
</pre>`;
window.traces.I64_LOAD8_U.unLEM = `<pre class='graph'>---
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
	memindex__352
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
</pre>`;
window.traces.I64_LOAD8_U.constUnLEM = `<pre class='graph'>---
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
	memindex__352
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
</pre>`;
window.traces.I64_LOAD8_U.chooseMerge = `<pre class='graph'>---
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
	memindex__352
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
</pre>`;
window.traces.I64_LOAD16_S = {}
window.traces.I64_LOAD16_S.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_LOAD16_S.overloadOps = `<pre class='graph'>---
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
	memindex__374
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
</pre>`;
window.traces.I64_LOAD16_S.addAbstractions = `<pre class='graph'>---
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
	memindex__374
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
</pre>`;
window.traces.I64_LOAD16_S.unLEM = `<pre class='graph'>---
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
	memindex__374
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
</pre>`;
window.traces.I64_LOAD16_S.constUnLEM = `<pre class='graph'>---
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
	memindex__374
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
</pre>`;
window.traces.I64_LOAD16_S.chooseMerge = `<pre class='graph'>---
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
	memindex__374
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
</pre>`;
window.traces.I64_LOAD16_U = {}
window.traces.I64_LOAD16_U.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_LOAD16_U.overloadOps = `<pre class='graph'>---
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
	memindex__394
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
</pre>`;
window.traces.I64_LOAD16_U.addAbstractions = `<pre class='graph'>---
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
	memindex__394
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
</pre>`;
window.traces.I64_LOAD16_U.unLEM = `<pre class='graph'>---
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
	memindex__394
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
</pre>`;
window.traces.I64_LOAD16_U.constUnLEM = `<pre class='graph'>---
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
	memindex__394
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
</pre>`;
window.traces.I64_LOAD16_U.chooseMerge = `<pre class='graph'>---
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
	memindex__394
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
</pre>`;
window.traces.I64_LOAD32_S = {}
window.traces.I64_LOAD32_S.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_LOAD32_S.overloadOps = `<pre class='graph'>---
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
	memindex__416
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
</pre>`;
window.traces.I64_LOAD32_S.addAbstractions = `<pre class='graph'>---
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
	memindex__416
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
</pre>`;
window.traces.I64_LOAD32_S.unLEM = `<pre class='graph'>---
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
	memindex__416
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
</pre>`;
window.traces.I64_LOAD32_S.constUnLEM = `<pre class='graph'>---
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
	memindex__416
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
</pre>`;
window.traces.I64_LOAD32_S.chooseMerge = `<pre class='graph'>---
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
	memindex__416
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
</pre>`;
window.traces.I64_LOAD32_U = {}
window.traces.I64_LOAD32_U.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_LOAD32_U.overloadOps = `<pre class='graph'>---
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
	memindex__436
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
</pre>`;
window.traces.I64_LOAD32_U.addAbstractions = `<pre class='graph'>---
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
	memindex__436
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
</pre>`;
window.traces.I64_LOAD32_U.unLEM = `<pre class='graph'>---
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
	memindex__436
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
</pre>`;
window.traces.I64_LOAD32_U.constUnLEM = `<pre class='graph'>---
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
	memindex__436
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
</pre>`;
window.traces.I64_LOAD32_U.chooseMerge = `<pre class='graph'>---
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
	memindex__436
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
</pre>`;
window.traces.I32_STORE = {}
window.traces.I32_STORE.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_STORE.overloadOps = `<pre class='graph'>---
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
	memindex__456
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
</pre>`;
window.traces.I32_STORE.addAbstractions = `<pre class='graph'>---
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
	memindex__456
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
</pre>`;
window.traces.I32_STORE.unLEM = `<pre class='graph'>---
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
	memindex__456
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
</pre>`;
window.traces.I32_STORE.constUnLEM = `<pre class='graph'>---
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
	memindex__456
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
</pre>`;
window.traces.I32_STORE.chooseMerge = `<pre class='graph'>---
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
	memindex__456
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
</pre>`;
window.traces.I64_STORE = {}
window.traces.I64_STORE.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_STORE.overloadOps = `<pre class='graph'>---
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
	memindex__476
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
</pre>`;
window.traces.I64_STORE.addAbstractions = `<pre class='graph'>---
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
	memindex__476
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
</pre>`;
window.traces.I64_STORE.unLEM = `<pre class='graph'>---
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
	memindex__476
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
</pre>`;
window.traces.I64_STORE.constUnLEM = `<pre class='graph'>---
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
	memindex__476
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
</pre>`;
window.traces.I64_STORE.chooseMerge = `<pre class='graph'>---
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
	memindex__476
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
</pre>`;
window.traces.F32_STORE = {}
window.traces.F32_STORE.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_STORE.overloadOps = `<pre class='graph'>---
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
	memindex__496
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
</pre>`;
window.traces.F32_STORE.addAbstractions = `<pre class='graph'>---
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
	memindex__496
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
</pre>`;
window.traces.F32_STORE.unLEM = `<pre class='graph'>---
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
	memindex__496
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
</pre>`;
window.traces.F32_STORE.constUnLEM = `<pre class='graph'>---
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
	memindex__496
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
</pre>`;
window.traces.F32_STORE.chooseMerge = `<pre class='graph'>---
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
	memindex__496
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
</pre>`;
window.traces.F64_STORE = {}
window.traces.F64_STORE.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_STORE.overloadOps = `<pre class='graph'>---
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
	memindex__516
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
</pre>`;
window.traces.F64_STORE.addAbstractions = `<pre class='graph'>---
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
	memindex__516
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
</pre>`;
window.traces.F64_STORE.unLEM = `<pre class='graph'>---
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
	memindex__516
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
</pre>`;
window.traces.F64_STORE.constUnLEM = `<pre class='graph'>---
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
	memindex__516
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
</pre>`;
window.traces.F64_STORE.chooseMerge = `<pre class='graph'>---
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
	memindex__516
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
</pre>`;
window.traces.I32_STORE8 = {}
window.traces.I32_STORE8.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_STORE8.overloadOps = `<pre class='graph'>---
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
	memindex__536
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
</pre>`;
window.traces.I32_STORE8.addAbstractions = `<pre class='graph'>---
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
	memindex__536
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
</pre>`;
window.traces.I32_STORE8.unLEM = `<pre class='graph'>---
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
	memindex__536
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
</pre>`;
window.traces.I32_STORE8.constUnLEM = `<pre class='graph'>---
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
	memindex__536
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
</pre>`;
window.traces.I32_STORE8.chooseMerge = `<pre class='graph'>---
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
	memindex__536
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
</pre>`;
window.traces.I32_STORE16 = {}
window.traces.I32_STORE16.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_STORE16.overloadOps = `<pre class='graph'>---
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
	memindex__556
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
</pre>`;
window.traces.I32_STORE16.addAbstractions = `<pre class='graph'>---
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
	memindex__556
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
</pre>`;
window.traces.I32_STORE16.unLEM = `<pre class='graph'>---
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
	memindex__556
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
</pre>`;
window.traces.I32_STORE16.constUnLEM = `<pre class='graph'>---
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
	memindex__556
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
</pre>`;
window.traces.I32_STORE16.chooseMerge = `<pre class='graph'>---
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
	memindex__556
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
</pre>`;
window.traces.I64_STORE8 = {}
window.traces.I64_STORE8.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_STORE8.overloadOps = `<pre class='graph'>---
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
	memindex__576
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
</pre>`;
window.traces.I64_STORE8.addAbstractions = `<pre class='graph'>---
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
	memindex__576
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
</pre>`;
window.traces.I64_STORE8.unLEM = `<pre class='graph'>---
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
	memindex__576
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
</pre>`;
window.traces.I64_STORE8.constUnLEM = `<pre class='graph'>---
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
	memindex__576
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
</pre>`;
window.traces.I64_STORE8.chooseMerge = `<pre class='graph'>---
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
	memindex__576
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
</pre>`;
window.traces.I64_STORE16 = {}
window.traces.I64_STORE16.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_STORE16.overloadOps = `<pre class='graph'>---
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
	memindex__596
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
</pre>`;
window.traces.I64_STORE16.addAbstractions = `<pre class='graph'>---
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
	memindex__596
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
</pre>`;
window.traces.I64_STORE16.unLEM = `<pre class='graph'>---
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
	memindex__596
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
</pre>`;
window.traces.I64_STORE16.constUnLEM = `<pre class='graph'>---
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
	memindex__596
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
</pre>`;
window.traces.I64_STORE16.chooseMerge = `<pre class='graph'>---
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
	memindex__596
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
</pre>`;
window.traces.I64_STORE32 = {}
window.traces.I64_STORE32.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_STORE32.overloadOps = `<pre class='graph'>---
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
	memindex__616
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
</pre>`;
window.traces.I64_STORE32.addAbstractions = `<pre class='graph'>---
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
	memindex__616
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
</pre>`;
window.traces.I64_STORE32.unLEM = `<pre class='graph'>---
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
	memindex__616
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
</pre>`;
window.traces.I64_STORE32.constUnLEM = `<pre class='graph'>---
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
	memindex__616
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
</pre>`;
window.traces.I64_STORE32.chooseMerge = `<pre class='graph'>---
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
	memindex__616
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
</pre>`;
window.traces.MEMORY_SIZE = {}
window.traces.MEMORY_SIZE.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.MEMORY_SIZE.overloadOps = `<pre class='graph'>---
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
	memindex__632
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
</pre>`;
window.traces.MEMORY_SIZE.addAbstractions = `<pre class='graph'>---
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
	memindex__632
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
</pre>`;
window.traces.MEMORY_SIZE.unLEM = `<pre class='graph'>---
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
	memindex__632
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
</pre>`;
window.traces.MEMORY_SIZE.constUnLEM = `<pre class='graph'>---
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
	memindex__632
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
</pre>`;
window.traces.MEMORY_SIZE.chooseMerge = `<pre class='graph'>---
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
	memindex__632
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
</pre>`;
window.traces.MEMORY_GROW = {}
window.traces.MEMORY_GROW.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.MEMORY_GROW.overloadOps = `<pre class='graph'>---
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
	memindex__650
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
</pre>`;
window.traces.MEMORY_GROW.addAbstractions = `<pre class='graph'>---
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
	memindex__650
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
</pre>`;
window.traces.MEMORY_GROW.unLEM = `<pre class='graph'>---
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
	memindex__650
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
</pre>`;
window.traces.MEMORY_GROW.constUnLEM = `<pre class='graph'>---
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
	memindex__650
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
</pre>`;
window.traces.MEMORY_GROW.chooseMerge = `<pre class='graph'>---
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
	memindex__650
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
</pre>`;
window.traces.I32_CONST = {}
window.traces.I32_CONST.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_CONST.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_CONST.addAbstractions = `<pre class='graph'>---
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
	6 --> 5
	0 -. Stack .-> 5
	6["
	abs__653
	rtcast_u32
	"]
	3 --> 6
	3["
	x
	imm_readILEB32
	"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces.I32_CONST.unLEM = `<pre class='graph'>---
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
	6 --> 5
	0 -. Stack .-> 5
	6["
	abs__653
	rtcast_u32
	"]
	3 --> 6
	3["
	x
	imm_readILEB32
	"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces.I32_CONST.constUnLEM = `<pre class='graph'>---
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
	6 --> 5
	0 -. Stack .-> 5
	6["
	abs__653
	rtcast_u32
	"]
	3 --> 6
	3["
	x
	imm_readILEB32
	"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces.I32_CONST.chooseMerge = `<pre class='graph'>---
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
	6 --> 5
	0 -. Stack .-> 5
	6["
	abs__653
	rtcast_u32
	"]
	3 --> 6
	3["
	x
	imm_readILEB32
	"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces.I64_CONST = {}
window.traces.I64_CONST.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_CONST.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_CONST.addAbstractions = `<pre class='graph'>---
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
	6 --> 5
	0 -. Stack .-> 5
	6["
	abs__656
	rtcast_u64
	"]
	3 --> 6
	3["
	x
	imm_readILEB64
	"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces.I64_CONST.unLEM = `<pre class='graph'>---
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
	6 --> 5
	0 -. Stack .-> 5
	6["
	abs__656
	rtcast_u64
	"]
	3 --> 6
	3["
	x
	imm_readILEB64
	"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces.I64_CONST.constUnLEM = `<pre class='graph'>---
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
	6 --> 5
	0 -. Stack .-> 5
	6["
	abs__656
	rtcast_u64
	"]
	3 --> 6
	3["
	x
	imm_readILEB64
	"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces.I64_CONST.chooseMerge = `<pre class='graph'>---
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
	6 --> 5
	0 -. Stack .-> 5
	6["
	abs__656
	rtcast_u64
	"]
	3 --> 6
	3["
	x
	imm_readILEB64
	"]
	0 -. Codeptr .-> 3
</pre>`;
window.traces.F32_CONST = {}
window.traces.F32_CONST.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_CONST.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_CONST.addAbstractions = `<pre class='graph'>---
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
	7 --> 5
	7["
	abs__660
	rtcast_u32
	"]
	3 --> 7
	3["
	x
	imm_readU32
	"]
</pre>`;
window.traces.F32_CONST.unLEM = `<pre class='graph'>---
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
	7 --> 5
	7["
	abs__660
	rtcast_u32
	"]
	3 --> 7
	3["
	x
	imm_readU32
	"]
</pre>`;
window.traces.F32_CONST.constUnLEM = `<pre class='graph'>---
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
	7 --> 5
	7["
	abs__660
	rtcast_u32
	"]
	3 --> 7
	3["
	x
	imm_readU32
	"]
</pre>`;
window.traces.F32_CONST.chooseMerge = `<pre class='graph'>---
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
	7 --> 5
	7["
	abs__660
	rtcast_u32
	"]
	3 --> 7
	3["
	x
	imm_readU32
	"]
</pre>`;
window.traces.F64_CONST = {}
window.traces.F64_CONST.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_CONST.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_CONST.addAbstractions = `<pre class='graph'>---
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
	7 --> 5
	7["
	abs__664
	rtcast_u64
	"]
	3 --> 7
	3["
	x
	imm_readU64
	"]
</pre>`;
window.traces.F64_CONST.unLEM = `<pre class='graph'>---
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
	7 --> 5
	7["
	abs__664
	rtcast_u64
	"]
	3 --> 7
	3["
	x
	imm_readU64
	"]
</pre>`;
window.traces.F64_CONST.constUnLEM = `<pre class='graph'>---
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
	7 --> 5
	7["
	abs__664
	rtcast_u64
	"]
	3 --> 7
	3["
	x
	imm_readU64
	"]
</pre>`;
window.traces.F64_CONST.chooseMerge = `<pre class='graph'>---
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
	7 --> 5
	7["
	abs__664
	rtcast_u64
	"]
	3 --> 7
	3["
	x
	imm_readU64
	"]
</pre>`;
window.traces.I32_EQZ = {}
window.traces.I32_EQZ.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_EQZ.overloadOps = `<pre class='graph'>---
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
	U32_equals
	"]
	3 --> 6
	4 --> 6
</pre>`;
window.traces.I32_EQZ.addAbstractions = `<pre class='graph'>---
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
	rtcast_u32
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
	rtcast_u32
	"]
	8 --> 12
	8["
	arg__667
	1
	"]
	6["
	cond__665
	U32_equals
	"]
	3 --> 6
	11 --> 6
	11["
	abs__672
	rtcast_u32
	"]
	4 --> 11
</pre>`;
window.traces.I32_EQZ.unLEM = `<pre class='graph'>---
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
	16 --> 10
	19 --> 10
	17 --> 10
	17["
	state phi Stack 	"]
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
	rtcast_u32
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
	rtcast_u32
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
	rtcast_u32
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
</pre>`;
window.traces.I32_EQZ.constUnLEM = `<pre class='graph'>---
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
	18 --> 10
	3 -. Stack .-> 10
	3["
	a
	pop_u32
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	18["
	merge__678
	merge_u
	"]
	12 --> 18
	13 --> 18
	13["
	abs__674
	rtcast_u32
	"]
	4 --> 13
	4["
	arg__671
	0
	"]
	12["
	abs__673
	rtcast_u32
	"]
	8 --> 12
	8["
	arg__667
	1
	"]
</pre>`;
window.traces.I32_EQZ.chooseMerge = `<pre class='graph'>---
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
	rtcast_u32
	"]
	8 --> 12
	8["
	arg__667
	1
	"]
</pre>`;
window.traces.I32_EQ = {}
window.traces.I32_EQ.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_EQ.overloadOps = `<pre class='graph'>---
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
	U32_equals
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_EQ.addAbstractions = `<pre class='graph'>---
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
	14 --> 9
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
	14["
	abs__688
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__684
	0
	"]
	11["
	eff__681
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__687
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__682
	1
	"]
	7["
	cond__680
	U32_equals
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_EQ.unLEM = `<pre class='graph'>---
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
	17 --> 12
	20 --> 12
	18 --> 12
	18["
	state phi Stack 	"]
	15 --> 18
	11 --> 18
	9 --> 18
	9["
	eff__683
	push_u32
	"]
	14 --> 9
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
	14["
	abs__688
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__684
	0
	"]
	11["
	eff__681
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__687
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__682
	1
	"]
	15["
	mt__689
	U32_maybeTrue
	"]
	7 --> 15
	7["
	cond__680
	U32_equals
	"]
	4 --> 7
	3 --> 7
	20["
	eff_push__693
	push_u32
	"]
	19 --> 20
	4 -. Stack .-> 20
	19["
	merge__692
	merge_u
	"]
	13 --> 19
	14 --> 19
	17["
	mb__691
	bool.&&
	"]
	15 --> 17
	16 --> 17
	16["
	mf__690
	U32_maybeFalse
	"]
	7 --> 16
</pre>`;
window.traces.I32_EQ.constUnLEM = `<pre class='graph'>---
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
	eff_push__693
	push_u32
	"]
	19 --> 12
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
	19["
	merge__692
	merge_u
	"]
	13 --> 19
	14 --> 19
	14["
	abs__688
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__684
	0
	"]
	13["
	abs__687
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__682
	1
	"]
</pre>`;
window.traces.I32_EQ.chooseMerge = `<pre class='graph'>---
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
	eff_push__693
	push_u32
	"]
	13 --> 12
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
	13["
	abs__687
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__682
	1
	"]
</pre>`;
window.traces.I32_NE = {}
window.traces.I32_NE.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_NE.overloadOps = `<pre class='graph'>---
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
	U32_not_equals
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_NE.addAbstractions = `<pre class='graph'>---
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
	14 --> 9
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
	14["
	abs__702
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__698
	0
	"]
	11["
	eff__695
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__701
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__696
	1
	"]
	7["
	cond__694
	U32_not_equals
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_NE.unLEM = `<pre class='graph'>---
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
	17 --> 12
	20 --> 12
	18 --> 12
	18["
	state phi Stack 	"]
	15 --> 18
	11 --> 18
	9 --> 18
	9["
	eff__697
	push_u32
	"]
	14 --> 9
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
	14["
	abs__702
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__698
	0
	"]
	11["
	eff__695
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__701
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__696
	1
	"]
	15["
	mt__703
	U32_maybeTrue
	"]
	7 --> 15
	7["
	cond__694
	U32_not_equals
	"]
	4 --> 7
	3 --> 7
	20["
	eff_push__707
	push_u32
	"]
	19 --> 20
	4 -. Stack .-> 20
	19["
	merge__706
	merge_u
	"]
	13 --> 19
	14 --> 19
	17["
	mb__705
	bool.&&
	"]
	15 --> 17
	16 --> 17
	16["
	mf__704
	U32_maybeFalse
	"]
	7 --> 16
</pre>`;
window.traces.I32_NE.constUnLEM = `<pre class='graph'>---
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
	eff_push__707
	push_u32
	"]
	19 --> 12
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
	19["
	merge__706
	merge_u
	"]
	13 --> 19
	14 --> 19
	14["
	abs__702
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__698
	0
	"]
	13["
	abs__701
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__696
	1
	"]
</pre>`;
window.traces.I32_NE.chooseMerge = `<pre class='graph'>---
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
	eff_push__707
	push_u32
	"]
	13 --> 12
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
	13["
	abs__701
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__696
	1
	"]
</pre>`;
window.traces.I32_LT_S = {}
window.traces.I32_LT_S.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_LT_S.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_LT_S.addAbstractions = `<pre class='graph'>---
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
	14 --> 9
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
	14["
	abs__716
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__712
	0
	"]
	11["
	eff__709
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__715
	rtcast_u32
	"]
	10 --> 13
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
</pre>`;
window.traces.I32_LT_S.unLEM = `<pre class='graph'>---
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
	17 --> 12
	20 --> 12
	18 --> 12
	18["
	state phi Stack 	"]
	15 --> 18
	11 --> 18
	9 --> 18
	9["
	eff__711
	push_u32
	"]
	14 --> 9
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
	14["
	abs__716
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__712
	0
	"]
	11["
	eff__709
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__715
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__710
	1
	"]
	15["
	mt__717
	U32_maybeTrue
	"]
	7 --> 15
	7["
	cond__708
	U32_lt_s
	"]
	4 --> 7
	3 --> 7
	20["
	eff_push__721
	push_u32
	"]
	19 --> 20
	4 -. Stack .-> 20
	19["
	merge__720
	merge_u
	"]
	13 --> 19
	14 --> 19
	17["
	mb__719
	bool.&&
	"]
	15 --> 17
	16 --> 17
	16["
	mf__718
	U32_maybeFalse
	"]
	7 --> 16
</pre>`;
window.traces.I32_LT_S.constUnLEM = `<pre class='graph'>---
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
	eff_push__721
	push_u32
	"]
	19 --> 12
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
	19["
	merge__720
	merge_u
	"]
	13 --> 19
	14 --> 19
	14["
	abs__716
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__712
	0
	"]
	13["
	abs__715
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__710
	1
	"]
</pre>`;
window.traces.I32_LT_S.chooseMerge = `<pre class='graph'>---
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
	eff_push__721
	push_u32
	"]
	13 --> 12
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
	13["
	abs__715
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__710
	1
	"]
</pre>`;
window.traces.I32_LT_U = {}
window.traces.I32_LT_U.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_LT_U.overloadOps = `<pre class='graph'>---
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
	U32_lt
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_LT_U.addAbstractions = `<pre class='graph'>---
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
	14 --> 9
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
	14["
	abs__730
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__726
	0
	"]
	11["
	eff__723
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__729
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__724
	1
	"]
	7["
	cond__722
	U32_lt
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_LT_U.unLEM = `<pre class='graph'>---
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
	17 --> 12
	20 --> 12
	18 --> 12
	18["
	state phi Stack 	"]
	15 --> 18
	11 --> 18
	9 --> 18
	9["
	eff__725
	push_u32
	"]
	14 --> 9
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
	14["
	abs__730
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__726
	0
	"]
	11["
	eff__723
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__729
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__724
	1
	"]
	15["
	mt__731
	U32_maybeTrue
	"]
	7 --> 15
	7["
	cond__722
	U32_lt
	"]
	4 --> 7
	3 --> 7
	20["
	eff_push__735
	push_u32
	"]
	19 --> 20
	4 -. Stack .-> 20
	19["
	merge__734
	merge_u
	"]
	13 --> 19
	14 --> 19
	17["
	mb__733
	bool.&&
	"]
	15 --> 17
	16 --> 17
	16["
	mf__732
	U32_maybeFalse
	"]
	7 --> 16
</pre>`;
window.traces.I32_LT_U.constUnLEM = `<pre class='graph'>---
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
	eff_push__735
	push_u32
	"]
	19 --> 12
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
	19["
	merge__734
	merge_u
	"]
	13 --> 19
	14 --> 19
	14["
	abs__730
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__726
	0
	"]
	13["
	abs__729
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__724
	1
	"]
</pre>`;
window.traces.I32_LT_U.chooseMerge = `<pre class='graph'>---
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
	eff_push__735
	push_u32
	"]
	13 --> 12
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
	13["
	abs__729
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__724
	1
	"]
</pre>`;
window.traces.I32_GT_S = {}
window.traces.I32_GT_S.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_GT_S.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_GT_S.addAbstractions = `<pre class='graph'>---
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
	14 --> 9
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
	14["
	abs__744
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__740
	0
	"]
	11["
	eff__737
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__743
	rtcast_u32
	"]
	10 --> 13
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
</pre>`;
window.traces.I32_GT_S.unLEM = `<pre class='graph'>---
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
	17 --> 12
	20 --> 12
	18 --> 12
	18["
	state phi Stack 	"]
	15 --> 18
	11 --> 18
	9 --> 18
	9["
	eff__739
	push_u32
	"]
	14 --> 9
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
	14["
	abs__744
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__740
	0
	"]
	11["
	eff__737
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__743
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__738
	1
	"]
	15["
	mt__745
	U32_maybeTrue
	"]
	7 --> 15
	7["
	cond__736
	U32_gt_s
	"]
	4 --> 7
	3 --> 7
	20["
	eff_push__749
	push_u32
	"]
	19 --> 20
	4 -. Stack .-> 20
	19["
	merge__748
	merge_u
	"]
	13 --> 19
	14 --> 19
	17["
	mb__747
	bool.&&
	"]
	15 --> 17
	16 --> 17
	16["
	mf__746
	U32_maybeFalse
	"]
	7 --> 16
</pre>`;
window.traces.I32_GT_S.constUnLEM = `<pre class='graph'>---
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
	eff_push__749
	push_u32
	"]
	19 --> 12
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
	19["
	merge__748
	merge_u
	"]
	13 --> 19
	14 --> 19
	14["
	abs__744
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__740
	0
	"]
	13["
	abs__743
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__738
	1
	"]
</pre>`;
window.traces.I32_GT_S.chooseMerge = `<pre class='graph'>---
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
	eff_push__749
	push_u32
	"]
	13 --> 12
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
	13["
	abs__743
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__738
	1
	"]
</pre>`;
window.traces.I32_GT_U = {}
window.traces.I32_GT_U.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_GT_U.overloadOps = `<pre class='graph'>---
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
	U32_gt
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_GT_U.addAbstractions = `<pre class='graph'>---
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
	14 --> 9
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
	14["
	abs__758
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__754
	0
	"]
	11["
	eff__751
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__757
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__752
	1
	"]
	7["
	cond__750
	U32_gt
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_GT_U.unLEM = `<pre class='graph'>---
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
	17 --> 12
	20 --> 12
	18 --> 12
	18["
	state phi Stack 	"]
	15 --> 18
	11 --> 18
	9 --> 18
	9["
	eff__753
	push_u32
	"]
	14 --> 9
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
	14["
	abs__758
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__754
	0
	"]
	11["
	eff__751
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__757
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__752
	1
	"]
	15["
	mt__759
	U32_maybeTrue
	"]
	7 --> 15
	7["
	cond__750
	U32_gt
	"]
	4 --> 7
	3 --> 7
	20["
	eff_push__763
	push_u32
	"]
	19 --> 20
	4 -. Stack .-> 20
	19["
	merge__762
	merge_u
	"]
	13 --> 19
	14 --> 19
	17["
	mb__761
	bool.&&
	"]
	15 --> 17
	16 --> 17
	16["
	mf__760
	U32_maybeFalse
	"]
	7 --> 16
</pre>`;
window.traces.I32_GT_U.constUnLEM = `<pre class='graph'>---
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
	eff_push__763
	push_u32
	"]
	19 --> 12
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
	19["
	merge__762
	merge_u
	"]
	13 --> 19
	14 --> 19
	14["
	abs__758
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__754
	0
	"]
	13["
	abs__757
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__752
	1
	"]
</pre>`;
window.traces.I32_GT_U.chooseMerge = `<pre class='graph'>---
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
	eff_push__763
	push_u32
	"]
	13 --> 12
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
	13["
	abs__757
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__752
	1
	"]
</pre>`;
window.traces.I32_LE_S = {}
window.traces.I32_LE_S.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_LE_S.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_LE_S.addAbstractions = `<pre class='graph'>---
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
	14 --> 9
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
	14["
	abs__772
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__768
	0
	"]
	11["
	eff__765
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__771
	rtcast_u32
	"]
	10 --> 13
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
</pre>`;
window.traces.I32_LE_S.unLEM = `<pre class='graph'>---
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
	17 --> 12
	20 --> 12
	18 --> 12
	18["
	state phi Stack 	"]
	15 --> 18
	11 --> 18
	9 --> 18
	9["
	eff__767
	push_u32
	"]
	14 --> 9
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
	14["
	abs__772
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__768
	0
	"]
	11["
	eff__765
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__771
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__766
	1
	"]
	15["
	mt__773
	U32_maybeTrue
	"]
	7 --> 15
	7["
	cond__764
	U32_le_s
	"]
	4 --> 7
	3 --> 7
	20["
	eff_push__777
	push_u32
	"]
	19 --> 20
	4 -. Stack .-> 20
	19["
	merge__776
	merge_u
	"]
	13 --> 19
	14 --> 19
	17["
	mb__775
	bool.&&
	"]
	15 --> 17
	16 --> 17
	16["
	mf__774
	U32_maybeFalse
	"]
	7 --> 16
</pre>`;
window.traces.I32_LE_S.constUnLEM = `<pre class='graph'>---
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
	eff_push__777
	push_u32
	"]
	19 --> 12
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
	19["
	merge__776
	merge_u
	"]
	13 --> 19
	14 --> 19
	14["
	abs__772
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__768
	0
	"]
	13["
	abs__771
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__766
	1
	"]
</pre>`;
window.traces.I32_LE_S.chooseMerge = `<pre class='graph'>---
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
	eff_push__777
	push_u32
	"]
	13 --> 12
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
	13["
	abs__771
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__766
	1
	"]
</pre>`;
window.traces.I32_LE_U = {}
window.traces.I32_LE_U.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_LE_U.overloadOps = `<pre class='graph'>---
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
	U32_lte
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_LE_U.addAbstractions = `<pre class='graph'>---
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
	14 --> 9
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
	14["
	abs__786
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__782
	0
	"]
	11["
	eff__779
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__785
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__780
	1
	"]
	7["
	cond__778
	U32_lte
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_LE_U.unLEM = `<pre class='graph'>---
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
	17 --> 12
	20 --> 12
	18 --> 12
	18["
	state phi Stack 	"]
	15 --> 18
	11 --> 18
	9 --> 18
	9["
	eff__781
	push_u32
	"]
	14 --> 9
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
	14["
	abs__786
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__782
	0
	"]
	11["
	eff__779
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__785
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__780
	1
	"]
	15["
	mt__787
	U32_maybeTrue
	"]
	7 --> 15
	7["
	cond__778
	U32_lte
	"]
	4 --> 7
	3 --> 7
	20["
	eff_push__791
	push_u32
	"]
	19 --> 20
	4 -. Stack .-> 20
	19["
	merge__790
	merge_u
	"]
	13 --> 19
	14 --> 19
	17["
	mb__789
	bool.&&
	"]
	15 --> 17
	16 --> 17
	16["
	mf__788
	U32_maybeFalse
	"]
	7 --> 16
</pre>`;
window.traces.I32_LE_U.constUnLEM = `<pre class='graph'>---
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
	eff_push__791
	push_u32
	"]
	19 --> 12
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
	19["
	merge__790
	merge_u
	"]
	13 --> 19
	14 --> 19
	14["
	abs__786
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__782
	0
	"]
	13["
	abs__785
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__780
	1
	"]
</pre>`;
window.traces.I32_LE_U.chooseMerge = `<pre class='graph'>---
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
	eff_push__791
	push_u32
	"]
	13 --> 12
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
	13["
	abs__785
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__780
	1
	"]
</pre>`;
window.traces.I32_GE_S = {}
window.traces.I32_GE_S.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_GE_S.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_GE_S.addAbstractions = `<pre class='graph'>---
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
	14 --> 9
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
	14["
	abs__800
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__796
	0
	"]
	11["
	eff__793
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__799
	rtcast_u32
	"]
	10 --> 13
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
</pre>`;
window.traces.I32_GE_S.unLEM = `<pre class='graph'>---
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
	17 --> 12
	20 --> 12
	18 --> 12
	18["
	state phi Stack 	"]
	15 --> 18
	11 --> 18
	9 --> 18
	9["
	eff__795
	push_u32
	"]
	14 --> 9
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
	14["
	abs__800
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__796
	0
	"]
	11["
	eff__793
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__799
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__794
	1
	"]
	15["
	mt__801
	U32_maybeTrue
	"]
	7 --> 15
	7["
	cond__792
	U32_ge_s
	"]
	4 --> 7
	3 --> 7
	20["
	eff_push__805
	push_u32
	"]
	19 --> 20
	4 -. Stack .-> 20
	19["
	merge__804
	merge_u
	"]
	13 --> 19
	14 --> 19
	17["
	mb__803
	bool.&&
	"]
	15 --> 17
	16 --> 17
	16["
	mf__802
	U32_maybeFalse
	"]
	7 --> 16
</pre>`;
window.traces.I32_GE_S.constUnLEM = `<pre class='graph'>---
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
	eff_push__805
	push_u32
	"]
	19 --> 12
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
	19["
	merge__804
	merge_u
	"]
	13 --> 19
	14 --> 19
	14["
	abs__800
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__796
	0
	"]
	13["
	abs__799
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__794
	1
	"]
</pre>`;
window.traces.I32_GE_S.chooseMerge = `<pre class='graph'>---
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
	eff_push__805
	push_u32
	"]
	13 --> 12
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
	13["
	abs__799
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__794
	1
	"]
</pre>`;
window.traces.I32_GE_U = {}
window.traces.I32_GE_U.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_GE_U.overloadOps = `<pre class='graph'>---
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
	U32_>=
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_GE_U.addAbstractions = `<pre class='graph'>---
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
	14 --> 9
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
	14["
	abs__814
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__810
	0
	"]
	11["
	eff__807
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__813
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__808
	1
	"]
	7["
	cond__806
	U32_>=
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_GE_U.unLEM = `<pre class='graph'>---
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
	17 --> 12
	20 --> 12
	18 --> 12
	18["
	state phi Stack 	"]
	15 --> 18
	11 --> 18
	9 --> 18
	9["
	eff__809
	push_u32
	"]
	14 --> 9
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
	14["
	abs__814
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__810
	0
	"]
	11["
	eff__807
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__813
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__808
	1
	"]
	15["
	mt__815
	bot_maybeTrue
	"]
	7 --> 15
	7["
	cond__806
	U32_>=
	"]
	4 --> 7
	3 --> 7
	20["
	eff_push__819
	push_u32
	"]
	19 --> 20
	4 -. Stack .-> 20
	19["
	merge__818
	merge_u
	"]
	13 --> 19
	14 --> 19
	17["
	mb__817
	bool.&&
	"]
	15 --> 17
	16 --> 17
	16["
	mf__816
	bot_maybeFalse
	"]
	7 --> 16
</pre>`;
window.traces.I32_GE_U.constUnLEM = `<pre class='graph'>---
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
	eff_push__819
	push_u32
	"]
	19 --> 12
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
	19["
	merge__818
	merge_u
	"]
	13 --> 19
	14 --> 19
	14["
	abs__814
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__810
	0
	"]
	13["
	abs__813
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__808
	1
	"]
</pre>`;
window.traces.I32_GE_U.chooseMerge = `<pre class='graph'>---
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
	eff_push__819
	push_u32
	"]
	13 --> 12
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
	13["
	abs__813
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__808
	1
	"]
</pre>`;
window.traces.I64_EQZ = {}
window.traces.I64_EQZ.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_EQZ.overloadOps = `<pre class='graph'>---
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
	U64_equals
	"]
	3 --> 6
	4 --> 6
</pre>`;
window.traces.I64_EQZ.addAbstractions = `<pre class='graph'>---
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
	13 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	13["
	abs__829
	rtcast_u32
	"]
	4 --> 13
	4["
	arg__826
	0
	"]
	9["
	eff__821
	push_u32
	"]
	12 --> 9
	3 -. Stack .-> 9
	12["
	abs__828
	rtcast_u32
	"]
	8 --> 12
	8["
	arg__822
	1
	"]
	6["
	cond__820
	U64_equals
	"]
	3 --> 6
	11 --> 6
	11["
	abs__827
	rtcast_u64
	"]
	4 --> 11
</pre>`;
window.traces.I64_EQZ.unLEM = `<pre class='graph'>---
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
	16 --> 10
	19 --> 10
	17 --> 10
	17["
	state phi Stack 	"]
	14 --> 17
	9 --> 17
	7 --> 17
	7["
	eff__823
	push_u32
	"]
	13 --> 7
	3 -. Stack .-> 7
	3["
	a
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	13["
	abs__829
	rtcast_u32
	"]
	4 --> 13
	4["
	arg__826
	0
	"]
	9["
	eff__821
	push_u32
	"]
	12 --> 9
	3 -. Stack .-> 9
	12["
	abs__828
	rtcast_u32
	"]
	8 --> 12
	8["
	arg__822
	1
	"]
	14["
	mt__830
	bot_maybeTrue
	"]
	6 --> 14
	6["
	cond__820
	U64_equals
	"]
	3 --> 6
	11 --> 6
	11["
	abs__827
	rtcast_u64
	"]
	4 --> 11
	19["
	eff_push__834
	push_u32
	"]
	18 --> 19
	3 -. Stack .-> 19
	18["
	merge__833
	merge_u
	"]
	12 --> 18
	13 --> 18
	16["
	mb__832
	bool.&&
	"]
	14 --> 16
	15 --> 16
	15["
	mf__831
	bot_maybeFalse
	"]
	6 --> 15
</pre>`;
window.traces.I64_EQZ.constUnLEM = `<pre class='graph'>---
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
	eff_push__834
	push_u32
	"]
	18 --> 10
	3 -. Stack .-> 10
	3["
	a
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	18["
	merge__833
	merge_u
	"]
	12 --> 18
	13 --> 18
	13["
	abs__829
	rtcast_u32
	"]
	4 --> 13
	4["
	arg__826
	0
	"]
	12["
	abs__828
	rtcast_u32
	"]
	8 --> 12
	8["
	arg__822
	1
	"]
</pre>`;
window.traces.I64_EQZ.chooseMerge = `<pre class='graph'>---
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
	eff_push__834
	push_u32
	"]
	12 --> 10
	3 -. Stack .-> 10
	3["
	a
	pop_u64
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	12["
	abs__828
	rtcast_u32
	"]
	8 --> 12
	8["
	arg__822
	1
	"]
</pre>`;
window.traces.I64_EQ = {}
window.traces.I64_EQ.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_EQ.overloadOps = `<pre class='graph'>---
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
	U64_equals
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_EQ.addAbstractions = `<pre class='graph'>---
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
	14 --> 9
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
	14["
	abs__843
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__839
	0
	"]
	11["
	eff__836
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__842
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__837
	1
	"]
	7["
	cond__835
	U64_equals
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_EQ.unLEM = `<pre class='graph'>---
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
	17 --> 12
	20 --> 12
	18 --> 12
	18["
	state phi Stack 	"]
	15 --> 18
	11 --> 18
	9 --> 18
	9["
	eff__838
	push_u32
	"]
	14 --> 9
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
	14["
	abs__843
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__839
	0
	"]
	11["
	eff__836
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__842
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__837
	1
	"]
	15["
	mt__844
	bot_maybeTrue
	"]
	7 --> 15
	7["
	cond__835
	U64_equals
	"]
	4 --> 7
	3 --> 7
	20["
	eff_push__848
	push_u32
	"]
	19 --> 20
	4 -. Stack .-> 20
	19["
	merge__847
	merge_u
	"]
	13 --> 19
	14 --> 19
	17["
	mb__846
	bool.&&
	"]
	15 --> 17
	16 --> 17
	16["
	mf__845
	bot_maybeFalse
	"]
	7 --> 16
</pre>`;
window.traces.I64_EQ.constUnLEM = `<pre class='graph'>---
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
	eff_push__848
	push_u32
	"]
	19 --> 12
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
	19["
	merge__847
	merge_u
	"]
	13 --> 19
	14 --> 19
	14["
	abs__843
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__839
	0
	"]
	13["
	abs__842
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__837
	1
	"]
</pre>`;
window.traces.I64_EQ.chooseMerge = `<pre class='graph'>---
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
	eff_push__848
	push_u32
	"]
	13 --> 12
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
	13["
	abs__842
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__837
	1
	"]
</pre>`;
window.traces.I64_NE = {}
window.traces.I64_NE.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_NE.overloadOps = `<pre class='graph'>---
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
	U64_not_equals
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_NE.addAbstractions = `<pre class='graph'>---
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
	14 --> 9
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
	14["
	abs__857
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__853
	0
	"]
	11["
	eff__850
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__856
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__851
	1
	"]
	7["
	cond__849
	U64_not_equals
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_NE.unLEM = `<pre class='graph'>---
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
	17 --> 12
	20 --> 12
	18 --> 12
	18["
	state phi Stack 	"]
	15 --> 18
	11 --> 18
	9 --> 18
	9["
	eff__852
	push_u32
	"]
	14 --> 9
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
	14["
	abs__857
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__853
	0
	"]
	11["
	eff__850
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__856
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__851
	1
	"]
	15["
	mt__858
	bot_maybeTrue
	"]
	7 --> 15
	7["
	cond__849
	U64_not_equals
	"]
	4 --> 7
	3 --> 7
	20["
	eff_push__862
	push_u32
	"]
	19 --> 20
	4 -. Stack .-> 20
	19["
	merge__861
	merge_u
	"]
	13 --> 19
	14 --> 19
	17["
	mb__860
	bool.&&
	"]
	15 --> 17
	16 --> 17
	16["
	mf__859
	bot_maybeFalse
	"]
	7 --> 16
</pre>`;
window.traces.I64_NE.constUnLEM = `<pre class='graph'>---
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
	eff_push__862
	push_u32
	"]
	19 --> 12
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
	19["
	merge__861
	merge_u
	"]
	13 --> 19
	14 --> 19
	14["
	abs__857
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__853
	0
	"]
	13["
	abs__856
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__851
	1
	"]
</pre>`;
window.traces.I64_NE.chooseMerge = `<pre class='graph'>---
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
	eff_push__862
	push_u32
	"]
	13 --> 12
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
	13["
	abs__856
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__851
	1
	"]
</pre>`;
window.traces.I64_LT_S = {}
window.traces.I64_LT_S.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_LT_S.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_LT_S.addAbstractions = `<pre class='graph'>---
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
	14 --> 9
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
	14["
	abs__871
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__867
	0
	"]
	11["
	eff__864
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__870
	rtcast_u32
	"]
	10 --> 13
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
</pre>`;
window.traces.I64_LT_S.unLEM = `<pre class='graph'>---
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
	17 --> 12
	20 --> 12
	18 --> 12
	18["
	state phi Stack 	"]
	15 --> 18
	11 --> 18
	9 --> 18
	9["
	eff__866
	push_u32
	"]
	14 --> 9
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
	14["
	abs__871
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__867
	0
	"]
	11["
	eff__864
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__870
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__865
	1
	"]
	15["
	mt__872
	bot_maybeTrue
	"]
	7 --> 15
	7["
	cond__863
	U64_lt_s
	"]
	4 --> 7
	3 --> 7
	20["
	eff_push__876
	push_u32
	"]
	19 --> 20
	4 -. Stack .-> 20
	19["
	merge__875
	merge_u
	"]
	13 --> 19
	14 --> 19
	17["
	mb__874
	bool.&&
	"]
	15 --> 17
	16 --> 17
	16["
	mf__873
	bot_maybeFalse
	"]
	7 --> 16
</pre>`;
window.traces.I64_LT_S.constUnLEM = `<pre class='graph'>---
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
	eff_push__876
	push_u32
	"]
	19 --> 12
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
	19["
	merge__875
	merge_u
	"]
	13 --> 19
	14 --> 19
	14["
	abs__871
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__867
	0
	"]
	13["
	abs__870
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__865
	1
	"]
</pre>`;
window.traces.I64_LT_S.chooseMerge = `<pre class='graph'>---
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
	eff_push__876
	push_u32
	"]
	13 --> 12
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
	13["
	abs__870
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__865
	1
	"]
</pre>`;
window.traces.I64_LT_U = {}
window.traces.I64_LT_U.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_LT_U.overloadOps = `<pre class='graph'>---
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
	U64_lt
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_LT_U.addAbstractions = `<pre class='graph'>---
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
	14 --> 9
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
	14["
	abs__885
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__881
	0
	"]
	11["
	eff__878
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__884
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__879
	1
	"]
	7["
	cond__877
	U64_lt
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_LT_U.unLEM = `<pre class='graph'>---
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
	17 --> 12
	20 --> 12
	18 --> 12
	18["
	state phi Stack 	"]
	15 --> 18
	11 --> 18
	9 --> 18
	9["
	eff__880
	push_u32
	"]
	14 --> 9
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
	14["
	abs__885
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__881
	0
	"]
	11["
	eff__878
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__884
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__879
	1
	"]
	15["
	mt__886
	bot_maybeTrue
	"]
	7 --> 15
	7["
	cond__877
	U64_lt
	"]
	4 --> 7
	3 --> 7
	20["
	eff_push__890
	push_u32
	"]
	19 --> 20
	4 -. Stack .-> 20
	19["
	merge__889
	merge_u
	"]
	13 --> 19
	14 --> 19
	17["
	mb__888
	bool.&&
	"]
	15 --> 17
	16 --> 17
	16["
	mf__887
	bot_maybeFalse
	"]
	7 --> 16
</pre>`;
window.traces.I64_LT_U.constUnLEM = `<pre class='graph'>---
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
	eff_push__890
	push_u32
	"]
	19 --> 12
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
	19["
	merge__889
	merge_u
	"]
	13 --> 19
	14 --> 19
	14["
	abs__885
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__881
	0
	"]
	13["
	abs__884
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__879
	1
	"]
</pre>`;
window.traces.I64_LT_U.chooseMerge = `<pre class='graph'>---
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
	eff_push__890
	push_u32
	"]
	13 --> 12
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
	13["
	abs__884
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__879
	1
	"]
</pre>`;
window.traces.I64_GT_S = {}
window.traces.I64_GT_S.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_GT_S.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_GT_S.addAbstractions = `<pre class='graph'>---
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
	14 --> 9
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
	14["
	abs__899
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__895
	0
	"]
	11["
	eff__892
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__898
	rtcast_u32
	"]
	10 --> 13
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
</pre>`;
window.traces.I64_GT_S.unLEM = `<pre class='graph'>---
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
	17 --> 12
	20 --> 12
	18 --> 12
	18["
	state phi Stack 	"]
	15 --> 18
	11 --> 18
	9 --> 18
	9["
	eff__894
	push_u32
	"]
	14 --> 9
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
	14["
	abs__899
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__895
	0
	"]
	11["
	eff__892
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__898
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__893
	1
	"]
	15["
	mt__900
	U64_maybeTrue
	"]
	7 --> 15
	7["
	cond__891
	U64_gt_s
	"]
	4 --> 7
	3 --> 7
	20["
	eff_push__904
	push_u32
	"]
	19 --> 20
	4 -. Stack .-> 20
	19["
	merge__903
	merge_u
	"]
	13 --> 19
	14 --> 19
	17["
	mb__902
	bool.&&
	"]
	15 --> 17
	16 --> 17
	16["
	mf__901
	U64_maybeFalse
	"]
	7 --> 16
</pre>`;
window.traces.I64_GT_S.constUnLEM = `<pre class='graph'>---
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
	eff_push__904
	push_u32
	"]
	19 --> 12
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
	19["
	merge__903
	merge_u
	"]
	13 --> 19
	14 --> 19
	14["
	abs__899
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__895
	0
	"]
	13["
	abs__898
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__893
	1
	"]
</pre>`;
window.traces.I64_GT_S.chooseMerge = `<pre class='graph'>---
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
	eff_push__904
	push_u32
	"]
	13 --> 12
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
	13["
	abs__898
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__893
	1
	"]
</pre>`;
window.traces.I64_GT_U = {}
window.traces.I64_GT_U.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_GT_U.overloadOps = `<pre class='graph'>---
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
	U64_gt
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_GT_U.addAbstractions = `<pre class='graph'>---
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
	14 --> 9
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
	14["
	abs__913
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__909
	0
	"]
	11["
	eff__906
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__912
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__907
	1
	"]
	7["
	cond__905
	U64_gt
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_GT_U.unLEM = `<pre class='graph'>---
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
	17 --> 12
	20 --> 12
	18 --> 12
	18["
	state phi Stack 	"]
	15 --> 18
	11 --> 18
	9 --> 18
	9["
	eff__908
	push_u32
	"]
	14 --> 9
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
	14["
	abs__913
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__909
	0
	"]
	11["
	eff__906
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__912
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__907
	1
	"]
	15["
	mt__914
	bot_maybeTrue
	"]
	7 --> 15
	7["
	cond__905
	U64_gt
	"]
	4 --> 7
	3 --> 7
	20["
	eff_push__918
	push_u32
	"]
	19 --> 20
	4 -. Stack .-> 20
	19["
	merge__917
	merge_u
	"]
	13 --> 19
	14 --> 19
	17["
	mb__916
	bool.&&
	"]
	15 --> 17
	16 --> 17
	16["
	mf__915
	bot_maybeFalse
	"]
	7 --> 16
</pre>`;
window.traces.I64_GT_U.constUnLEM = `<pre class='graph'>---
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
	eff_push__918
	push_u32
	"]
	19 --> 12
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
	19["
	merge__917
	merge_u
	"]
	13 --> 19
	14 --> 19
	14["
	abs__913
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__909
	0
	"]
	13["
	abs__912
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__907
	1
	"]
</pre>`;
window.traces.I64_GT_U.chooseMerge = `<pre class='graph'>---
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
	eff_push__918
	push_u32
	"]
	13 --> 12
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
	13["
	abs__912
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__907
	1
	"]
</pre>`;
window.traces.I64_LE_S = {}
window.traces.I64_LE_S.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_LE_S.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_LE_S.addAbstractions = `<pre class='graph'>---
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
	14 --> 9
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
	14["
	abs__927
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__923
	0
	"]
	11["
	eff__920
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__926
	rtcast_u32
	"]
	10 --> 13
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
</pre>`;
window.traces.I64_LE_S.unLEM = `<pre class='graph'>---
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
	17 --> 12
	20 --> 12
	18 --> 12
	18["
	state phi Stack 	"]
	15 --> 18
	11 --> 18
	9 --> 18
	9["
	eff__922
	push_u32
	"]
	14 --> 9
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
	14["
	abs__927
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__923
	0
	"]
	11["
	eff__920
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__926
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__921
	1
	"]
	15["
	mt__928
	bot_maybeTrue
	"]
	7 --> 15
	7["
	cond__919
	U64_le_s
	"]
	4 --> 7
	3 --> 7
	20["
	eff_push__932
	push_u32
	"]
	19 --> 20
	4 -. Stack .-> 20
	19["
	merge__931
	merge_u
	"]
	13 --> 19
	14 --> 19
	17["
	mb__930
	bool.&&
	"]
	15 --> 17
	16 --> 17
	16["
	mf__929
	bot_maybeFalse
	"]
	7 --> 16
</pre>`;
window.traces.I64_LE_S.constUnLEM = `<pre class='graph'>---
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
	eff_push__932
	push_u32
	"]
	19 --> 12
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
	19["
	merge__931
	merge_u
	"]
	13 --> 19
	14 --> 19
	14["
	abs__927
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__923
	0
	"]
	13["
	abs__926
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__921
	1
	"]
</pre>`;
window.traces.I64_LE_S.chooseMerge = `<pre class='graph'>---
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
	eff_push__932
	push_u32
	"]
	13 --> 12
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
	13["
	abs__926
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__921
	1
	"]
</pre>`;
window.traces.I64_LE_U = {}
window.traces.I64_LE_U.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_LE_U.overloadOps = `<pre class='graph'>---
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
	U64_lte
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_LE_U.addAbstractions = `<pre class='graph'>---
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
	14 --> 9
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
	14["
	abs__941
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__937
	0
	"]
	11["
	eff__934
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__940
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__935
	1
	"]
	7["
	cond__933
	U64_lte
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_LE_U.unLEM = `<pre class='graph'>---
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
	17 --> 12
	20 --> 12
	18 --> 12
	18["
	state phi Stack 	"]
	15 --> 18
	11 --> 18
	9 --> 18
	9["
	eff__936
	push_u32
	"]
	14 --> 9
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
	14["
	abs__941
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__937
	0
	"]
	11["
	eff__934
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__940
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__935
	1
	"]
	15["
	mt__942
	bot_maybeTrue
	"]
	7 --> 15
	7["
	cond__933
	U64_lte
	"]
	4 --> 7
	3 --> 7
	20["
	eff_push__946
	push_u32
	"]
	19 --> 20
	4 -. Stack .-> 20
	19["
	merge__945
	merge_u
	"]
	13 --> 19
	14 --> 19
	17["
	mb__944
	bool.&&
	"]
	15 --> 17
	16 --> 17
	16["
	mf__943
	bot_maybeFalse
	"]
	7 --> 16
</pre>`;
window.traces.I64_LE_U.constUnLEM = `<pre class='graph'>---
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
	eff_push__946
	push_u32
	"]
	19 --> 12
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
	19["
	merge__945
	merge_u
	"]
	13 --> 19
	14 --> 19
	14["
	abs__941
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__937
	0
	"]
	13["
	abs__940
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__935
	1
	"]
</pre>`;
window.traces.I64_LE_U.chooseMerge = `<pre class='graph'>---
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
	eff_push__946
	push_u32
	"]
	13 --> 12
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
	13["
	abs__940
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__935
	1
	"]
</pre>`;
window.traces.I64_GE_S = {}
window.traces.I64_GE_S.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_GE_S.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_GE_S.addAbstractions = `<pre class='graph'>---
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
	14 --> 9
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
	14["
	abs__955
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__951
	0
	"]
	11["
	eff__948
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__954
	rtcast_u32
	"]
	10 --> 13
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
</pre>`;
window.traces.I64_GE_S.unLEM = `<pre class='graph'>---
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
	17 --> 12
	20 --> 12
	18 --> 12
	18["
	state phi Stack 	"]
	15 --> 18
	11 --> 18
	9 --> 18
	9["
	eff__950
	push_u32
	"]
	14 --> 9
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
	14["
	abs__955
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__951
	0
	"]
	11["
	eff__948
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__954
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__949
	1
	"]
	15["
	mt__956
	U64_maybeTrue
	"]
	7 --> 15
	7["
	cond__947
	U64_ge_s
	"]
	4 --> 7
	3 --> 7
	20["
	eff_push__960
	push_u32
	"]
	19 --> 20
	4 -. Stack .-> 20
	19["
	merge__959
	merge_u
	"]
	13 --> 19
	14 --> 19
	17["
	mb__958
	bool.&&
	"]
	15 --> 17
	16 --> 17
	16["
	mf__957
	U64_maybeFalse
	"]
	7 --> 16
</pre>`;
window.traces.I64_GE_S.constUnLEM = `<pre class='graph'>---
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
	eff_push__960
	push_u32
	"]
	19 --> 12
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
	19["
	merge__959
	merge_u
	"]
	13 --> 19
	14 --> 19
	14["
	abs__955
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__951
	0
	"]
	13["
	abs__954
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__949
	1
	"]
</pre>`;
window.traces.I64_GE_S.chooseMerge = `<pre class='graph'>---
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
	eff_push__960
	push_u32
	"]
	13 --> 12
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
	13["
	abs__954
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__949
	1
	"]
</pre>`;
window.traces.I64_GE_U = {}
window.traces.I64_GE_U.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_GE_U.overloadOps = `<pre class='graph'>---
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
	U64_>=
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_GE_U.addAbstractions = `<pre class='graph'>---
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
	14 --> 9
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
	14["
	abs__969
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__965
	0
	"]
	11["
	eff__962
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__968
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__963
	1
	"]
	7["
	cond__961
	U64_>=
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_GE_U.unLEM = `<pre class='graph'>---
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
	17 --> 12
	20 --> 12
	18 --> 12
	18["
	state phi Stack 	"]
	15 --> 18
	11 --> 18
	9 --> 18
	9["
	eff__964
	push_u32
	"]
	14 --> 9
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
	14["
	abs__969
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__965
	0
	"]
	11["
	eff__962
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__968
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__963
	1
	"]
	15["
	mt__970
	bot_maybeTrue
	"]
	7 --> 15
	7["
	cond__961
	U64_>=
	"]
	4 --> 7
	3 --> 7
	20["
	eff_push__974
	push_u32
	"]
	19 --> 20
	4 -. Stack .-> 20
	19["
	merge__973
	merge_u
	"]
	13 --> 19
	14 --> 19
	17["
	mb__972
	bool.&&
	"]
	15 --> 17
	16 --> 17
	16["
	mf__971
	bot_maybeFalse
	"]
	7 --> 16
</pre>`;
window.traces.I64_GE_U.constUnLEM = `<pre class='graph'>---
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
	eff_push__974
	push_u32
	"]
	19 --> 12
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
	19["
	merge__973
	merge_u
	"]
	13 --> 19
	14 --> 19
	14["
	abs__969
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__965
	0
	"]
	13["
	abs__968
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__963
	1
	"]
</pre>`;
window.traces.I64_GE_U.chooseMerge = `<pre class='graph'>---
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
	eff_push__974
	push_u32
	"]
	13 --> 12
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
	13["
	abs__968
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__963
	1
	"]
</pre>`;
window.traces.F32_EQ = {}
window.traces.F32_EQ.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_EQ.overloadOps = `<pre class='graph'>---
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
	F32_equals
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F32_EQ.addAbstractions = `<pre class='graph'>---
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
	14 --> 9
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
	14["
	abs__983
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__979
	0
	"]
	11["
	eff__976
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__982
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__977
	1
	"]
	7["
	cond__975
	F32_equals
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F32_EQ.unLEM = `<pre class='graph'>---
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
	17 --> 12
	20 --> 12
	18 --> 12
	18["
	state phi Stack 	"]
	15 --> 18
	11 --> 18
	9 --> 18
	9["
	eff__978
	push_u32
	"]
	14 --> 9
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
	14["
	abs__983
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__979
	0
	"]
	11["
	eff__976
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__982
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__977
	1
	"]
	15["
	mt__984
	U32_maybeTrue
	"]
	7 --> 15
	7["
	cond__975
	F32_equals
	"]
	4 --> 7
	3 --> 7
	20["
	eff_push__988
	push_u32
	"]
	19 --> 20
	4 -. Stack .-> 20
	19["
	merge__987
	merge_u
	"]
	13 --> 19
	14 --> 19
	17["
	mb__986
	bool.&&
	"]
	15 --> 17
	16 --> 17
	16["
	mf__985
	U32_maybeFalse
	"]
	7 --> 16
</pre>`;
window.traces.F32_EQ.constUnLEM = `<pre class='graph'>---
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
	eff_push__988
	push_u32
	"]
	19 --> 12
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
	19["
	merge__987
	merge_u
	"]
	13 --> 19
	14 --> 19
	14["
	abs__983
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__979
	0
	"]
	13["
	abs__982
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__977
	1
	"]
</pre>`;
window.traces.F32_EQ.chooseMerge = `<pre class='graph'>---
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
	eff_push__988
	push_u32
	"]
	13 --> 12
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
	13["
	abs__982
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__977
	1
	"]
</pre>`;
window.traces.F32_NE = {}
window.traces.F32_NE.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_NE.overloadOps = `<pre class='graph'>---
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
	F32_not_equals
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F32_NE.addAbstractions = `<pre class='graph'>---
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
	14 --> 9
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
	14["
	abs__997
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__993
	0
	"]
	11["
	eff__990
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__996
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__991
	1
	"]
	7["
	cond__989
	F32_not_equals
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F32_NE.unLEM = `<pre class='graph'>---
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
	17 --> 12
	20 --> 12
	18 --> 12
	18["
	state phi Stack 	"]
	15 --> 18
	11 --> 18
	9 --> 18
	9["
	eff__992
	push_u32
	"]
	14 --> 9
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
	14["
	abs__997
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__993
	0
	"]
	11["
	eff__990
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__996
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__991
	1
	"]
	15["
	mt__998
	U32_maybeTrue
	"]
	7 --> 15
	7["
	cond__989
	F32_not_equals
	"]
	4 --> 7
	3 --> 7
	20["
	eff_push__1002
	push_u32
	"]
	19 --> 20
	4 -. Stack .-> 20
	19["
	merge__1001
	merge_u
	"]
	13 --> 19
	14 --> 19
	17["
	mb__1000
	bool.&&
	"]
	15 --> 17
	16 --> 17
	16["
	mf__999
	U32_maybeFalse
	"]
	7 --> 16
</pre>`;
window.traces.F32_NE.constUnLEM = `<pre class='graph'>---
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
	eff_push__1002
	push_u32
	"]
	19 --> 12
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
	19["
	merge__1001
	merge_u
	"]
	13 --> 19
	14 --> 19
	14["
	abs__997
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__993
	0
	"]
	13["
	abs__996
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__991
	1
	"]
</pre>`;
window.traces.F32_NE.chooseMerge = `<pre class='graph'>---
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
	eff_push__1002
	push_u32
	"]
	13 --> 12
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
	13["
	abs__996
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__991
	1
	"]
</pre>`;
window.traces.F32_LT = {}
window.traces.F32_LT.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_LT.overloadOps = `<pre class='graph'>---
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
	F32_lt
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F32_LT.addAbstractions = `<pre class='graph'>---
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
	14 --> 9
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
	14["
	abs__1011
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__1007
	0
	"]
	11["
	eff__1004
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__1010
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1005
	1
	"]
	7["
	cond__1003
	F32_lt
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F32_LT.unLEM = `<pre class='graph'>---
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
	17 --> 12
	20 --> 12
	18 --> 12
	18["
	state phi Stack 	"]
	15 --> 18
	11 --> 18
	9 --> 18
	9["
	eff__1006
	push_u32
	"]
	14 --> 9
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
	14["
	abs__1011
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__1007
	0
	"]
	11["
	eff__1004
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__1010
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1005
	1
	"]
	15["
	mt__1012
	U32_maybeTrue
	"]
	7 --> 15
	7["
	cond__1003
	F32_lt
	"]
	4 --> 7
	3 --> 7
	20["
	eff_push__1016
	push_u32
	"]
	19 --> 20
	4 -. Stack .-> 20
	19["
	merge__1015
	merge_u
	"]
	13 --> 19
	14 --> 19
	17["
	mb__1014
	bool.&&
	"]
	15 --> 17
	16 --> 17
	16["
	mf__1013
	U32_maybeFalse
	"]
	7 --> 16
</pre>`;
window.traces.F32_LT.constUnLEM = `<pre class='graph'>---
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
	eff_push__1016
	push_u32
	"]
	19 --> 12
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
	19["
	merge__1015
	merge_u
	"]
	13 --> 19
	14 --> 19
	14["
	abs__1011
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__1007
	0
	"]
	13["
	abs__1010
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1005
	1
	"]
</pre>`;
window.traces.F32_LT.chooseMerge = `<pre class='graph'>---
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
	eff_push__1016
	push_u32
	"]
	13 --> 12
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
	13["
	abs__1010
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1005
	1
	"]
</pre>`;
window.traces.F32_GT = {}
window.traces.F32_GT.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_GT.overloadOps = `<pre class='graph'>---
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
	F32_gt
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F32_GT.addAbstractions = `<pre class='graph'>---
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
	14 --> 9
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
	14["
	abs__1025
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__1021
	0
	"]
	11["
	eff__1018
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__1024
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1019
	1
	"]
	7["
	cond__1017
	F32_gt
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F32_GT.unLEM = `<pre class='graph'>---
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
	17 --> 12
	20 --> 12
	18 --> 12
	18["
	state phi Stack 	"]
	15 --> 18
	11 --> 18
	9 --> 18
	9["
	eff__1020
	push_u32
	"]
	14 --> 9
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
	14["
	abs__1025
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__1021
	0
	"]
	11["
	eff__1018
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__1024
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1019
	1
	"]
	15["
	mt__1026
	U32_maybeTrue
	"]
	7 --> 15
	7["
	cond__1017
	F32_gt
	"]
	4 --> 7
	3 --> 7
	20["
	eff_push__1030
	push_u32
	"]
	19 --> 20
	4 -. Stack .-> 20
	19["
	merge__1029
	merge_u
	"]
	13 --> 19
	14 --> 19
	17["
	mb__1028
	bool.&&
	"]
	15 --> 17
	16 --> 17
	16["
	mf__1027
	U32_maybeFalse
	"]
	7 --> 16
</pre>`;
window.traces.F32_GT.constUnLEM = `<pre class='graph'>---
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
	eff_push__1030
	push_u32
	"]
	19 --> 12
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
	19["
	merge__1029
	merge_u
	"]
	13 --> 19
	14 --> 19
	14["
	abs__1025
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__1021
	0
	"]
	13["
	abs__1024
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1019
	1
	"]
</pre>`;
window.traces.F32_GT.chooseMerge = `<pre class='graph'>---
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
	eff_push__1030
	push_u32
	"]
	13 --> 12
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
	13["
	abs__1024
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1019
	1
	"]
</pre>`;
window.traces.F32_LE = {}
window.traces.F32_LE.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_LE.overloadOps = `<pre class='graph'>---
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
	F32_lte
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F32_LE.addAbstractions = `<pre class='graph'>---
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
	14 --> 9
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
	14["
	abs__1039
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__1035
	0
	"]
	11["
	eff__1032
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__1038
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1033
	1
	"]
	7["
	cond__1031
	F32_lte
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F32_LE.unLEM = `<pre class='graph'>---
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
	17 --> 12
	20 --> 12
	18 --> 12
	18["
	state phi Stack 	"]
	15 --> 18
	11 --> 18
	9 --> 18
	9["
	eff__1034
	push_u32
	"]
	14 --> 9
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
	14["
	abs__1039
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__1035
	0
	"]
	11["
	eff__1032
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__1038
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1033
	1
	"]
	15["
	mt__1040
	U32_maybeTrue
	"]
	7 --> 15
	7["
	cond__1031
	F32_lte
	"]
	4 --> 7
	3 --> 7
	20["
	eff_push__1044
	push_u32
	"]
	19 --> 20
	4 -. Stack .-> 20
	19["
	merge__1043
	merge_u
	"]
	13 --> 19
	14 --> 19
	17["
	mb__1042
	bool.&&
	"]
	15 --> 17
	16 --> 17
	16["
	mf__1041
	U32_maybeFalse
	"]
	7 --> 16
</pre>`;
window.traces.F32_LE.constUnLEM = `<pre class='graph'>---
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
	eff_push__1044
	push_u32
	"]
	19 --> 12
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
	19["
	merge__1043
	merge_u
	"]
	13 --> 19
	14 --> 19
	14["
	abs__1039
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__1035
	0
	"]
	13["
	abs__1038
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1033
	1
	"]
</pre>`;
window.traces.F32_LE.chooseMerge = `<pre class='graph'>---
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
	eff_push__1044
	push_u32
	"]
	13 --> 12
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
	13["
	abs__1038
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1033
	1
	"]
</pre>`;
window.traces.F32_GE = {}
window.traces.F32_GE.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_GE.overloadOps = `<pre class='graph'>---
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
	F32_>=
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F32_GE.addAbstractions = `<pre class='graph'>---
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
	14 --> 9
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
	14["
	abs__1053
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__1049
	0
	"]
	11["
	eff__1046
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__1052
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1047
	1
	"]
	7["
	cond__1045
	F32_>=
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F32_GE.unLEM = `<pre class='graph'>---
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
	17 --> 12
	20 --> 12
	18 --> 12
	18["
	state phi Stack 	"]
	15 --> 18
	11 --> 18
	9 --> 18
	9["
	eff__1048
	push_u32
	"]
	14 --> 9
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
	14["
	abs__1053
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__1049
	0
	"]
	11["
	eff__1046
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__1052
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1047
	1
	"]
	15["
	mt__1054
	bot_maybeTrue
	"]
	7 --> 15
	7["
	cond__1045
	F32_>=
	"]
	4 --> 7
	3 --> 7
	20["
	eff_push__1058
	push_u32
	"]
	19 --> 20
	4 -. Stack .-> 20
	19["
	merge__1057
	merge_u
	"]
	13 --> 19
	14 --> 19
	17["
	mb__1056
	bool.&&
	"]
	15 --> 17
	16 --> 17
	16["
	mf__1055
	bot_maybeFalse
	"]
	7 --> 16
</pre>`;
window.traces.F32_GE.constUnLEM = `<pre class='graph'>---
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
	eff_push__1058
	push_u32
	"]
	19 --> 12
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
	19["
	merge__1057
	merge_u
	"]
	13 --> 19
	14 --> 19
	14["
	abs__1053
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__1049
	0
	"]
	13["
	abs__1052
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1047
	1
	"]
</pre>`;
window.traces.F32_GE.chooseMerge = `<pre class='graph'>---
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
	eff_push__1058
	push_u32
	"]
	13 --> 12
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
	13["
	abs__1052
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1047
	1
	"]
</pre>`;
window.traces.F64_EQ = {}
window.traces.F64_EQ.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_EQ.overloadOps = `<pre class='graph'>---
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
	F64_equals
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F64_EQ.addAbstractions = `<pre class='graph'>---
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
	14 --> 9
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
	14["
	abs__1067
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__1063
	0
	"]
	11["
	eff__1060
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__1066
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1061
	1
	"]
	7["
	cond__1059
	F64_equals
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F64_EQ.unLEM = `<pre class='graph'>---
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
	17 --> 12
	20 --> 12
	18 --> 12
	18["
	state phi Stack 	"]
	15 --> 18
	11 --> 18
	9 --> 18
	9["
	eff__1062
	push_u32
	"]
	14 --> 9
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
	14["
	abs__1067
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__1063
	0
	"]
	11["
	eff__1060
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__1066
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1061
	1
	"]
	15["
	mt__1068
	bot_maybeTrue
	"]
	7 --> 15
	7["
	cond__1059
	F64_equals
	"]
	4 --> 7
	3 --> 7
	20["
	eff_push__1072
	push_u32
	"]
	19 --> 20
	4 -. Stack .-> 20
	19["
	merge__1071
	merge_u
	"]
	13 --> 19
	14 --> 19
	17["
	mb__1070
	bool.&&
	"]
	15 --> 17
	16 --> 17
	16["
	mf__1069
	bot_maybeFalse
	"]
	7 --> 16
</pre>`;
window.traces.F64_EQ.constUnLEM = `<pre class='graph'>---
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
	eff_push__1072
	push_u32
	"]
	19 --> 12
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
	19["
	merge__1071
	merge_u
	"]
	13 --> 19
	14 --> 19
	14["
	abs__1067
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__1063
	0
	"]
	13["
	abs__1066
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1061
	1
	"]
</pre>`;
window.traces.F64_EQ.chooseMerge = `<pre class='graph'>---
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
	eff_push__1072
	push_u32
	"]
	13 --> 12
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
	13["
	abs__1066
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1061
	1
	"]
</pre>`;
window.traces.F64_NE = {}
window.traces.F64_NE.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_NE.overloadOps = `<pre class='graph'>---
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
	F64_not_equals
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F64_NE.addAbstractions = `<pre class='graph'>---
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
	14 --> 9
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
	14["
	abs__1081
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__1077
	0
	"]
	11["
	eff__1074
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__1080
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1075
	1
	"]
	7["
	cond__1073
	F64_not_equals
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F64_NE.unLEM = `<pre class='graph'>---
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
	17 --> 12
	20 --> 12
	18 --> 12
	18["
	state phi Stack 	"]
	15 --> 18
	11 --> 18
	9 --> 18
	9["
	eff__1076
	push_u32
	"]
	14 --> 9
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
	14["
	abs__1081
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__1077
	0
	"]
	11["
	eff__1074
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__1080
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1075
	1
	"]
	15["
	mt__1082
	bot_maybeTrue
	"]
	7 --> 15
	7["
	cond__1073
	F64_not_equals
	"]
	4 --> 7
	3 --> 7
	20["
	eff_push__1086
	push_u32
	"]
	19 --> 20
	4 -. Stack .-> 20
	19["
	merge__1085
	merge_u
	"]
	13 --> 19
	14 --> 19
	17["
	mb__1084
	bool.&&
	"]
	15 --> 17
	16 --> 17
	16["
	mf__1083
	bot_maybeFalse
	"]
	7 --> 16
</pre>`;
window.traces.F64_NE.constUnLEM = `<pre class='graph'>---
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
	eff_push__1086
	push_u32
	"]
	19 --> 12
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
	19["
	merge__1085
	merge_u
	"]
	13 --> 19
	14 --> 19
	14["
	abs__1081
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__1077
	0
	"]
	13["
	abs__1080
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1075
	1
	"]
</pre>`;
window.traces.F64_NE.chooseMerge = `<pre class='graph'>---
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
	eff_push__1086
	push_u32
	"]
	13 --> 12
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
	13["
	abs__1080
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1075
	1
	"]
</pre>`;
window.traces.F64_LT = {}
window.traces.F64_LT.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_LT.overloadOps = `<pre class='graph'>---
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
	F64_lt
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F64_LT.addAbstractions = `<pre class='graph'>---
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
	14 --> 9
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
	14["
	abs__1095
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__1091
	0
	"]
	11["
	eff__1088
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__1094
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1089
	1
	"]
	7["
	cond__1087
	F64_lt
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F64_LT.unLEM = `<pre class='graph'>---
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
	17 --> 12
	20 --> 12
	18 --> 12
	18["
	state phi Stack 	"]
	15 --> 18
	11 --> 18
	9 --> 18
	9["
	eff__1090
	push_u32
	"]
	14 --> 9
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
	14["
	abs__1095
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__1091
	0
	"]
	11["
	eff__1088
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__1094
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1089
	1
	"]
	15["
	mt__1096
	bot_maybeTrue
	"]
	7 --> 15
	7["
	cond__1087
	F64_lt
	"]
	4 --> 7
	3 --> 7
	20["
	eff_push__1100
	push_u32
	"]
	19 --> 20
	4 -. Stack .-> 20
	19["
	merge__1099
	merge_u
	"]
	13 --> 19
	14 --> 19
	17["
	mb__1098
	bool.&&
	"]
	15 --> 17
	16 --> 17
	16["
	mf__1097
	bot_maybeFalse
	"]
	7 --> 16
</pre>`;
window.traces.F64_LT.constUnLEM = `<pre class='graph'>---
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
	eff_push__1100
	push_u32
	"]
	19 --> 12
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
	19["
	merge__1099
	merge_u
	"]
	13 --> 19
	14 --> 19
	14["
	abs__1095
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__1091
	0
	"]
	13["
	abs__1094
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1089
	1
	"]
</pre>`;
window.traces.F64_LT.chooseMerge = `<pre class='graph'>---
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
	eff_push__1100
	push_u32
	"]
	13 --> 12
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
	13["
	abs__1094
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1089
	1
	"]
</pre>`;
window.traces.F64_GT = {}
window.traces.F64_GT.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_GT.overloadOps = `<pre class='graph'>---
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
	F64_gt
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F64_GT.addAbstractions = `<pre class='graph'>---
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
	14 --> 9
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
	14["
	abs__1109
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__1105
	0
	"]
	11["
	eff__1102
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__1108
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1103
	1
	"]
	7["
	cond__1101
	F64_gt
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F64_GT.unLEM = `<pre class='graph'>---
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
	17 --> 12
	20 --> 12
	18 --> 12
	18["
	state phi Stack 	"]
	15 --> 18
	11 --> 18
	9 --> 18
	9["
	eff__1104
	push_u32
	"]
	14 --> 9
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
	14["
	abs__1109
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__1105
	0
	"]
	11["
	eff__1102
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__1108
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1103
	1
	"]
	15["
	mt__1110
	bot_maybeTrue
	"]
	7 --> 15
	7["
	cond__1101
	F64_gt
	"]
	4 --> 7
	3 --> 7
	20["
	eff_push__1114
	push_u32
	"]
	19 --> 20
	4 -. Stack .-> 20
	19["
	merge__1113
	merge_u
	"]
	13 --> 19
	14 --> 19
	17["
	mb__1112
	bool.&&
	"]
	15 --> 17
	16 --> 17
	16["
	mf__1111
	bot_maybeFalse
	"]
	7 --> 16
</pre>`;
window.traces.F64_GT.constUnLEM = `<pre class='graph'>---
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
	eff_push__1114
	push_u32
	"]
	19 --> 12
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
	19["
	merge__1113
	merge_u
	"]
	13 --> 19
	14 --> 19
	14["
	abs__1109
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__1105
	0
	"]
	13["
	abs__1108
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1103
	1
	"]
</pre>`;
window.traces.F64_GT.chooseMerge = `<pre class='graph'>---
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
	eff_push__1114
	push_u32
	"]
	13 --> 12
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
	13["
	abs__1108
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1103
	1
	"]
</pre>`;
window.traces.F64_LE = {}
window.traces.F64_LE.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_LE.overloadOps = `<pre class='graph'>---
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
	F64_lte
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F64_LE.addAbstractions = `<pre class='graph'>---
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
	14 --> 9
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
	14["
	abs__1123
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__1119
	0
	"]
	11["
	eff__1116
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__1122
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1117
	1
	"]
	7["
	cond__1115
	F64_lte
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F64_LE.unLEM = `<pre class='graph'>---
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
	17 --> 12
	20 --> 12
	18 --> 12
	18["
	state phi Stack 	"]
	15 --> 18
	11 --> 18
	9 --> 18
	9["
	eff__1118
	push_u32
	"]
	14 --> 9
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
	14["
	abs__1123
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__1119
	0
	"]
	11["
	eff__1116
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__1122
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1117
	1
	"]
	15["
	mt__1124
	bot_maybeTrue
	"]
	7 --> 15
	7["
	cond__1115
	F64_lte
	"]
	4 --> 7
	3 --> 7
	20["
	eff_push__1128
	push_u32
	"]
	19 --> 20
	4 -. Stack .-> 20
	19["
	merge__1127
	merge_u
	"]
	13 --> 19
	14 --> 19
	17["
	mb__1126
	bool.&&
	"]
	15 --> 17
	16 --> 17
	16["
	mf__1125
	bot_maybeFalse
	"]
	7 --> 16
</pre>`;
window.traces.F64_LE.constUnLEM = `<pre class='graph'>---
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
	eff_push__1128
	push_u32
	"]
	19 --> 12
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
	19["
	merge__1127
	merge_u
	"]
	13 --> 19
	14 --> 19
	14["
	abs__1123
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__1119
	0
	"]
	13["
	abs__1122
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1117
	1
	"]
</pre>`;
window.traces.F64_LE.chooseMerge = `<pre class='graph'>---
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
	eff_push__1128
	push_u32
	"]
	13 --> 12
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
	13["
	abs__1122
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1117
	1
	"]
</pre>`;
window.traces.F64_GE = {}
window.traces.F64_GE.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_GE.overloadOps = `<pre class='graph'>---
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
	F64_>=
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F64_GE.addAbstractions = `<pre class='graph'>---
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
	14 --> 9
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
	14["
	abs__1137
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__1133
	0
	"]
	11["
	eff__1130
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__1136
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1131
	1
	"]
	7["
	cond__1129
	F64_>=
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F64_GE.unLEM = `<pre class='graph'>---
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
	17 --> 12
	20 --> 12
	18 --> 12
	18["
	state phi Stack 	"]
	15 --> 18
	11 --> 18
	9 --> 18
	9["
	eff__1132
	push_u32
	"]
	14 --> 9
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
	14["
	abs__1137
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__1133
	0
	"]
	11["
	eff__1130
	push_u32
	"]
	13 --> 11
	4 -. Stack .-> 11
	13["
	abs__1136
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1131
	1
	"]
	15["
	mt__1138
	bot_maybeTrue
	"]
	7 --> 15
	7["
	cond__1129
	F64_>=
	"]
	4 --> 7
	3 --> 7
	20["
	eff_push__1142
	push_u32
	"]
	19 --> 20
	4 -. Stack .-> 20
	19["
	merge__1141
	merge_u
	"]
	13 --> 19
	14 --> 19
	17["
	mb__1140
	bool.&&
	"]
	15 --> 17
	16 --> 17
	16["
	mf__1139
	bot_maybeFalse
	"]
	7 --> 16
</pre>`;
window.traces.F64_GE.constUnLEM = `<pre class='graph'>---
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
	eff_push__1142
	push_u32
	"]
	19 --> 12
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
	19["
	merge__1141
	merge_u
	"]
	13 --> 19
	14 --> 19
	14["
	abs__1137
	rtcast_u32
	"]
	8 --> 14
	8["
	arg__1133
	0
	"]
	13["
	abs__1136
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1131
	1
	"]
</pre>`;
window.traces.F64_GE.chooseMerge = `<pre class='graph'>---
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
	eff_push__1142
	push_u32
	"]
	13 --> 12
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
	13["
	abs__1136
	rtcast_u32
	"]
	10 --> 13
	10["
	arg__1131
	1
	"]
</pre>`;
window.traces.I32_CLZ = {}
window.traces.I32_CLZ.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_CLZ.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_CLZ.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_CLZ.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_CLZ.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_CLZ.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_CTZ = {}
window.traces.I32_CTZ.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_CTZ.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_CTZ.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_CTZ.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_CTZ.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_CTZ.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_POPCNT = {}
window.traces.I32_POPCNT.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_POPCNT.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_POPCNT.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_POPCNT.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_POPCNT.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_POPCNT.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_ADD = {}
window.traces.I32_ADD.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_ADD.overloadOps = `<pre class='graph'>---
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
	U32_plus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_ADD.addAbstractions = `<pre class='graph'>---
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
	U32_plus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_ADD.unLEM = `<pre class='graph'>---
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
	U32_plus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_ADD.constUnLEM = `<pre class='graph'>---
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
	U32_plus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_ADD.chooseMerge = `<pre class='graph'>---
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
	U32_plus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_SUB = {}
window.traces.I32_SUB.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_SUB.overloadOps = `<pre class='graph'>---
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
	U32_minus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_SUB.addAbstractions = `<pre class='graph'>---
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
	U32_minus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_SUB.unLEM = `<pre class='graph'>---
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
	U32_minus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_SUB.constUnLEM = `<pre class='graph'>---
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
	U32_minus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_SUB.chooseMerge = `<pre class='graph'>---
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
	U32_minus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_MUL = {}
window.traces.I32_MUL.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_MUL.overloadOps = `<pre class='graph'>---
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
	U32_times
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_MUL.addAbstractions = `<pre class='graph'>---
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
	U32_times
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_MUL.unLEM = `<pre class='graph'>---
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
	U32_times
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_MUL.constUnLEM = `<pre class='graph'>---
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
	U32_times
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_MUL.chooseMerge = `<pre class='graph'>---
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
	U32_times
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_DIV_S = {}
window.traces.I32_DIV_S.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_DIV_S.overloadOps = `<pre class='graph'>---
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
	U32_and
	"]
	18 --> 19
	14 --> 19
	14["
	arg__1171
	U32_equals
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
	U32_equals
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
	U32_equals
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
</pre>`;
window.traces.I32_DIV_S.addAbstractions = `<pre class='graph'>---
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
	U32_and
	"]
	18 --> 19
	14 --> 19
	14["
	arg__1171
	U32_equals
	"]
	4 --> 14
	30 --> 14
	30["
	abs__1184
	rtcast_u32
	"]
	12 --> 30
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
	U32_equals
	"]
	3 --> 18
	29 --> 18
	29["
	abs__1183
	rtcast_u32
	"]
	16 --> 29
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
	U32_equals
	"]
	3 --> 10
	28 --> 10
	28["
	abs__1182
	rtcast_u32
	"]
	8 --> 28
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
</pre>`;
window.traces.I32_DIV_S.unLEM = `<pre class='graph'>---
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
	33 --> 27
	38 --> 27
	36 --> 27
	36["
	state phi Stack 	"]
	31 --> 36
	25 --> 36
	24 --> 36
	24["
	r_state__1191
	state phi Stack 	"]
	41 --> 24
	46 --> 24
	44 --> 24
	44["
	state phi Stack 	"]
	39 --> 44
	22 --> 44
	21 --> 44
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
	r_state__1196
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
	39["
	mt__1193
	bot_maybeTrue
	"]
	19 --> 39
	19["
	cond__1166
	U32_and
	"]
	18 --> 19
	14 --> 19
	14["
	arg__1171
	U32_equals
	"]
	4 --> 14
	30 --> 14
	30["
	abs__1184
	rtcast_u32
	"]
	12 --> 30
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
	U32_equals
	"]
	3 --> 18
	29 --> 18
	29["
	abs__1183
	rtcast_u32
	"]
	16 --> 29
	16["
	arg__1173
	u32.view
	"]
	15 --> 16
	15["
	arg__1174
	-1
	"]
	46["
	eff_merge__1199
	merge
	"]
	45 --> 46
	21 --> 46
	45["
	eff_nop__1198
	nop
	"]
	41["
	mb__1195
	bool.&&
	"]
	39 --> 41
	40 --> 41
	40["
	mf__1194
	bot_maybeFalse
	"]
	19 --> 40
	25["
	eff__1165
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 25
	4 -. Stack .-> 25
	31["
	mt__1185
	U32_maybeTrue
	"]
	10 --> 31
	10["
	cond__1164
	U32_equals
	"]
	3 --> 10
	28 --> 10
	28["
	abs__1182
	rtcast_u32
	"]
	8 --> 28
	8["
	arg__1179
	0
	"]
	38["
	eff_merge__1192
	merge
	"]
	37 --> 38
	24 --> 38
	37["
	eff_nop__1190
	nop
	"]
	33["
	mb__1187
	bool.&&
	"]
	31 --> 33
	32 --> 33
	32["
	mf__1186
	U32_maybeFalse
	"]
	10 --> 32
	26["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	33 --> 26
	35 --> 26
	34 --> 26
	34["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	31 --> 34
	25 --> 34
	23 --> 34
	23["
	r_state__1188
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	41 --> 23
	43 --> 23
	42 --> 23
	42["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	39 --> 42
	22 --> 42
	0 --> 42
	43["
	eff_merge__1197
	merge
	"]
	22 --> 43
	0 --> 43
	35["
	eff_merge__1189
	merge
	"]
	25 --> 35
	23 --> 35
</pre>`;
window.traces.I32_DIV_S.constUnLEM = `<pre class='graph'>---
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
	eff_merge__1192
	merge
	"]
	37 --> 27
	46 --> 27
	46["
	eff_merge__1199
	merge
	"]
	45 --> 46
	21 --> 46
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
	r_state__1196
	Start
	"]
	7["
	r
	U32_div_s
	"]
	4 --> 7
	3 --> 7
	45["
	eff_nop__1198
	nop
	"]
	37["
	eff_nop__1190
	nop
	"]
	26["
	eff_merge__1189
	merge
	"]
	25 --> 26
	43 --> 26
	43["
	eff_merge__1197
	merge
	"]
	22 --> 43
	0 --> 43
	22["
	eff__1167
	trapDivideUnrepresentable
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 22
	4 -. Stack .-> 22
	25["
	eff__1165
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 25
	4 -. Stack .-> 25
</pre>`;
window.traces.I32_DIV_S.chooseMerge = `<pre class='graph'>---
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
	eff_merge__1192
	merge
	"]
	37 --> 27
	46 --> 27
	46["
	eff_merge__1199
	merge
	"]
	45 --> 46
	21 --> 46
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
	r_state__1196
	Start
	"]
	7["
	r
	U32_div_s
	"]
	4 --> 7
	3 --> 7
	45["
	eff_nop__1198
	nop
	"]
	37["
	eff_nop__1190
	nop
	"]
	26["
	eff_merge__1189
	merge
	"]
	25 --> 26
	43 --> 26
	43["
	eff_merge__1197
	merge
	"]
	22 --> 43
	0 --> 43
	22["
	eff__1167
	trapDivideUnrepresentable
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 22
	4 -. Stack .-> 22
	25["
	eff__1165
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 25
	4 -. Stack .-> 25
</pre>`;
window.traces.I32_DIV_U = {}
window.traces.I32_DIV_U.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_DIV_U.overloadOps = `<pre class='graph'>---
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
	U32_div
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
	U32_equals
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
</pre>`;
window.traces.I32_DIV_U.addAbstractions = `<pre class='graph'>---
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
	U32_div
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
	U32_equals
	"]
	3 --> 10
	16 --> 10
	16["
	abs__1208
	rtcast_u32
	"]
	8 --> 16
	8["
	arg__1205
	0
	"]
	14["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	10 --> 14
	13 --> 14
	0 --> 14
</pre>`;
window.traces.I32_DIV_U.unLEM = `<pre class='graph'>---
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
	19 --> 15
	24 --> 15
	22 --> 15
	22["
	state phi Stack 	"]
	17 --> 22
	13 --> 22
	12 --> 22
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
	r_state__1212
	Start
	"]
	7["
	r
	U32_div
	"]
	4 --> 7
	3 --> 7
	13["
	eff__1201
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 13
	4 -. Stack .-> 13
	17["
	mt__1209
	U32_maybeTrue
	"]
	10 --> 17
	10["
	cond__1200
	U32_equals
	"]
	3 --> 10
	16 --> 10
	16["
	abs__1208
	rtcast_u32
	"]
	8 --> 16
	8["
	arg__1205
	0
	"]
	24["
	eff_merge__1215
	merge
	"]
	23 --> 24
	12 --> 24
	23["
	eff_nop__1214
	nop
	"]
	19["
	mb__1211
	bool.&&
	"]
	17 --> 19
	18 --> 19
	18["
	mf__1210
	U32_maybeFalse
	"]
	10 --> 18
	14["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	19 --> 14
	21 --> 14
	20 --> 14
	20["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	17 --> 20
	13 --> 20
	0 --> 20
	21["
	eff_merge__1213
	merge
	"]
	13 --> 21
	0 --> 21
</pre>`;
window.traces.I32_DIV_U.constUnLEM = `<pre class='graph'>---
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
	eff_merge__1215
	merge
	"]
	23 --> 15
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
	r_state__1212
	Start
	"]
	7["
	r
	U32_div
	"]
	4 --> 7
	3 --> 7
	23["
	eff_nop__1214
	nop
	"]
	14["
	eff_merge__1213
	merge
	"]
	13 --> 14
	0 --> 14
	13["
	eff__1201
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 13
	4 -. Stack .-> 13
</pre>`;
window.traces.I32_DIV_U.chooseMerge = `<pre class='graph'>---
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
	eff_merge__1215
	merge
	"]
	23 --> 15
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
	r_state__1212
	Start
	"]
	7["
	r
	U32_div
	"]
	4 --> 7
	3 --> 7
	23["
	eff_nop__1214
	nop
	"]
	14["
	eff_merge__1213
	merge
	"]
	13 --> 14
	0 --> 14
	13["
	eff__1201
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 13
	4 -. Stack .-> 13
</pre>`;
window.traces.I32_REM_S = {}
window.traces.I32_REM_S.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_REM_S.overloadOps = `<pre class='graph'>---
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
	U32_equals
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
</pre>`;
window.traces.I32_REM_S.addAbstractions = `<pre class='graph'>---
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
	U32_equals
	"]
	3 --> 10
	16 --> 10
	16["
	abs__1224
	rtcast_u32
	"]
	8 --> 16
	8["
	arg__1221
	0
	"]
	14["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	10 --> 14
	13 --> 14
	0 --> 14
</pre>`;
window.traces.I32_REM_S.unLEM = `<pre class='graph'>---
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
	19 --> 15
	24 --> 15
	22 --> 15
	22["
	state phi Stack 	"]
	17 --> 22
	13 --> 22
	12 --> 22
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
	r_state__1228
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
	17["
	mt__1225
	U32_maybeTrue
	"]
	10 --> 17
	10["
	cond__1216
	U32_equals
	"]
	3 --> 10
	16 --> 10
	16["
	abs__1224
	rtcast_u32
	"]
	8 --> 16
	8["
	arg__1221
	0
	"]
	24["
	eff_merge__1231
	merge
	"]
	23 --> 24
	12 --> 24
	23["
	eff_nop__1230
	nop
	"]
	19["
	mb__1227
	bool.&&
	"]
	17 --> 19
	18 --> 19
	18["
	mf__1226
	U32_maybeFalse
	"]
	10 --> 18
	14["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	19 --> 14
	21 --> 14
	20 --> 14
	20["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	17 --> 20
	13 --> 20
	0 --> 20
	21["
	eff_merge__1229
	merge
	"]
	13 --> 21
	0 --> 21
</pre>`;
window.traces.I32_REM_S.constUnLEM = `<pre class='graph'>---
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
	eff_merge__1231
	merge
	"]
	23 --> 15
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
	r_state__1228
	Start
	"]
	7["
	r
	U32_rem_s
	"]
	4 --> 7
	3 --> 7
	23["
	eff_nop__1230
	nop
	"]
	14["
	eff_merge__1229
	merge
	"]
	13 --> 14
	0 --> 14
	13["
	eff__1217
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 13
	4 -. Stack .-> 13
</pre>`;
window.traces.I32_REM_S.chooseMerge = `<pre class='graph'>---
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
	eff_merge__1231
	merge
	"]
	23 --> 15
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
	r_state__1228
	Start
	"]
	7["
	r
	U32_rem_s
	"]
	4 --> 7
	3 --> 7
	23["
	eff_nop__1230
	nop
	"]
	14["
	eff_merge__1229
	merge
	"]
	13 --> 14
	0 --> 14
	13["
	eff__1217
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 13
	4 -. Stack .-> 13
</pre>`;
window.traces.I32_REM_U = {}
window.traces.I32_REM_U.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_REM_U.overloadOps = `<pre class='graph'>---
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
	U32_equals
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
</pre>`;
window.traces.I32_REM_U.addAbstractions = `<pre class='graph'>---
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
	U32_equals
	"]
	3 --> 10
	16 --> 10
	16["
	abs__1240
	rtcast_u32
	"]
	8 --> 16
	8["
	arg__1237
	0
	"]
	14["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	10 --> 14
	13 --> 14
	0 --> 14
</pre>`;
window.traces.I32_REM_U.unLEM = `<pre class='graph'>---
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
	19 --> 15
	24 --> 15
	22 --> 15
	22["
	state phi Stack 	"]
	17 --> 22
	13 --> 22
	12 --> 22
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
	r_state__1244
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
	17["
	mt__1241
	U32_maybeTrue
	"]
	10 --> 17
	10["
	cond__1232
	U32_equals
	"]
	3 --> 10
	16 --> 10
	16["
	abs__1240
	rtcast_u32
	"]
	8 --> 16
	8["
	arg__1237
	0
	"]
	24["
	eff_merge__1247
	merge
	"]
	23 --> 24
	12 --> 24
	23["
	eff_nop__1246
	nop
	"]
	19["
	mb__1243
	bool.&&
	"]
	17 --> 19
	18 --> 19
	18["
	mf__1242
	U32_maybeFalse
	"]
	10 --> 18
	14["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	19 --> 14
	21 --> 14
	20 --> 14
	20["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	17 --> 20
	13 --> 20
	0 --> 20
	21["
	eff_merge__1245
	merge
	"]
	13 --> 21
	0 --> 21
</pre>`;
window.traces.I32_REM_U.constUnLEM = `<pre class='graph'>---
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
	eff_merge__1247
	merge
	"]
	23 --> 15
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
	r_state__1244
	Start
	"]
	7["
	r
	U32_rem_u
	"]
	4 --> 7
	3 --> 7
	23["
	eff_nop__1246
	nop
	"]
	14["
	eff_merge__1245
	merge
	"]
	13 --> 14
	0 --> 14
	13["
	eff__1233
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 13
	4 -. Stack .-> 13
</pre>`;
window.traces.I32_REM_U.chooseMerge = `<pre class='graph'>---
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
	eff_merge__1247
	merge
	"]
	23 --> 15
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
	r_state__1244
	Start
	"]
	7["
	r
	U32_rem_u
	"]
	4 --> 7
	3 --> 7
	23["
	eff_nop__1246
	nop
	"]
	14["
	eff_merge__1245
	merge
	"]
	13 --> 14
	0 --> 14
	13["
	eff__1233
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 13
	4 -. Stack .-> 13
</pre>`;
window.traces.I32_AND = {}
window.traces.I32_AND.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_AND.overloadOps = `<pre class='graph'>---
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
	U32_and
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_AND.addAbstractions = `<pre class='graph'>---
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
	U32_and
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_AND.unLEM = `<pre class='graph'>---
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
	U32_and
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_AND.constUnLEM = `<pre class='graph'>---
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
	U32_and
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_AND.chooseMerge = `<pre class='graph'>---
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
	U32_and
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_OR = {}
window.traces.I32_OR.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_OR.overloadOps = `<pre class='graph'>---
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
	U32_or
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_OR.addAbstractions = `<pre class='graph'>---
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
	U32_or
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_OR.unLEM = `<pre class='graph'>---
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
	U32_or
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_OR.constUnLEM = `<pre class='graph'>---
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
	U32_or
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_OR.chooseMerge = `<pre class='graph'>---
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
	U32_or
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_XOR = {}
window.traces.I32_XOR.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_XOR.overloadOps = `<pre class='graph'>---
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
	U32_or
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_XOR.addAbstractions = `<pre class='graph'>---
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
	U32_or
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_XOR.unLEM = `<pre class='graph'>---
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
	U32_or
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_XOR.constUnLEM = `<pre class='graph'>---
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
	U32_or
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_XOR.chooseMerge = `<pre class='graph'>---
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
	U32_or
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I32_SHL = {}
window.traces.I32_SHL.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_SHL.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_SHL.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_SHL.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_SHL.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_SHL.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_SHR_S = {}
window.traces.I32_SHR_S.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_SHR_S.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_SHR_S.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_SHR_S.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_SHR_S.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_SHR_S.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_SHR_U = {}
window.traces.I32_SHR_U.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_SHR_U.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_SHR_U.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_SHR_U.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_SHR_U.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_SHR_U.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_ROTL = {}
window.traces.I32_ROTL.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_ROTL.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_ROTL.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_ROTL.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_ROTL.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_ROTL.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_ROTR = {}
window.traces.I32_ROTR.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_ROTR.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_ROTR.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_ROTR.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_ROTR.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_ROTR.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_CLZ = {}
window.traces.I64_CLZ.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_CLZ.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_CLZ.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_CLZ.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_CLZ.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_CLZ.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_CTZ = {}
window.traces.I64_CTZ.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_CTZ.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_CTZ.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_CTZ.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_CTZ.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_CTZ.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_POPCNT = {}
window.traces.I64_POPCNT.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_POPCNT.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_POPCNT.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_POPCNT.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_POPCNT.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_POPCNT.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_ADD = {}
window.traces.I64_ADD.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_ADD.overloadOps = `<pre class='graph'>---
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
	U64_plus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_ADD.addAbstractions = `<pre class='graph'>---
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
	U64_plus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_ADD.unLEM = `<pre class='graph'>---
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
	U64_plus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_ADD.constUnLEM = `<pre class='graph'>---
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
	U64_plus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_ADD.chooseMerge = `<pre class='graph'>---
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
	U64_plus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_SUB = {}
window.traces.I64_SUB.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_SUB.overloadOps = `<pre class='graph'>---
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
	U64_minus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_SUB.addAbstractions = `<pre class='graph'>---
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
	U64_minus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_SUB.unLEM = `<pre class='graph'>---
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
	U64_minus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_SUB.constUnLEM = `<pre class='graph'>---
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
	U64_minus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_SUB.chooseMerge = `<pre class='graph'>---
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
	U64_minus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_MUL = {}
window.traces.I64_MUL.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_MUL.overloadOps = `<pre class='graph'>---
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
	U64_times
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_MUL.addAbstractions = `<pre class='graph'>---
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
	U64_times
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_MUL.unLEM = `<pre class='graph'>---
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
	U64_times
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_MUL.constUnLEM = `<pre class='graph'>---
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
	U64_times
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_MUL.chooseMerge = `<pre class='graph'>---
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
	U64_times
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_DIV_S = {}
window.traces.I64_DIV_S.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_DIV_S.overloadOps = `<pre class='graph'>---
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
	bot_and
	"]
	18 --> 19
	14 --> 19
	14["
	arg__1308
	U64_equals
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
	U64_equals
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
	U64_equals
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
</pre>`;
window.traces.I64_DIV_S.addAbstractions = `<pre class='graph'>---
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
	bot_and
	"]
	18 --> 19
	14 --> 19
	14["
	arg__1308
	U64_equals
	"]
	4 --> 14
	30 --> 14
	30["
	abs__1321
	rtcast_u64
	"]
	12 --> 30
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
	U64_equals
	"]
	3 --> 18
	29 --> 18
	29["
	abs__1320
	rtcast_u64
	"]
	16 --> 29
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
	U64_equals
	"]
	3 --> 10
	28 --> 10
	28["
	abs__1319
	rtcast_u64
	"]
	8 --> 28
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
</pre>`;
window.traces.I64_DIV_S.unLEM = `<pre class='graph'>---
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
	33 --> 27
	38 --> 27
	36 --> 27
	36["
	state phi Stack 	"]
	31 --> 36
	25 --> 36
	24 --> 36
	24["
	r_state__1328
	state phi Stack 	"]
	41 --> 24
	46 --> 24
	44 --> 24
	44["
	state phi Stack 	"]
	39 --> 44
	22 --> 44
	21 --> 44
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
	r_state__1333
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
	39["
	mt__1330
	bot_maybeTrue
	"]
	19 --> 39
	19["
	cond__1303
	bot_and
	"]
	18 --> 19
	14 --> 19
	14["
	arg__1308
	U64_equals
	"]
	4 --> 14
	30 --> 14
	30["
	abs__1321
	rtcast_u64
	"]
	12 --> 30
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
	U64_equals
	"]
	3 --> 18
	29 --> 18
	29["
	abs__1320
	rtcast_u64
	"]
	16 --> 29
	16["
	arg__1310
	u64.view
	"]
	15 --> 16
	15["
	arg__1311
	-1
	"]
	46["
	eff_merge__1336
	merge
	"]
	45 --> 46
	21 --> 46
	45["
	eff_nop__1335
	nop
	"]
	41["
	mb__1332
	bool.&&
	"]
	39 --> 41
	40 --> 41
	40["
	mf__1331
	bot_maybeFalse
	"]
	19 --> 40
	25["
	eff__1302
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 25
	4 -. Stack .-> 25
	31["
	mt__1322
	bot_maybeTrue
	"]
	10 --> 31
	10["
	cond__1301
	U64_equals
	"]
	3 --> 10
	28 --> 10
	28["
	abs__1319
	rtcast_u64
	"]
	8 --> 28
	8["
	arg__1316
	0
	"]
	38["
	eff_merge__1329
	merge
	"]
	37 --> 38
	24 --> 38
	37["
	eff_nop__1327
	nop
	"]
	33["
	mb__1324
	bool.&&
	"]
	31 --> 33
	32 --> 33
	32["
	mf__1323
	bot_maybeFalse
	"]
	10 --> 32
	26["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	33 --> 26
	35 --> 26
	34 --> 26
	34["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	31 --> 34
	25 --> 34
	23 --> 34
	23["
	r_state__1325
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	41 --> 23
	43 --> 23
	42 --> 23
	42["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	39 --> 42
	22 --> 42
	0 --> 42
	43["
	eff_merge__1334
	merge
	"]
	22 --> 43
	0 --> 43
	35["
	eff_merge__1326
	merge
	"]
	25 --> 35
	23 --> 35
</pre>`;
window.traces.I64_DIV_S.constUnLEM = `<pre class='graph'>---
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
	eff_merge__1329
	merge
	"]
	37 --> 27
	46 --> 27
	46["
	eff_merge__1336
	merge
	"]
	45 --> 46
	21 --> 46
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
	r_state__1333
	Start
	"]
	7["
	r
	U64_div_s
	"]
	4 --> 7
	3 --> 7
	45["
	eff_nop__1335
	nop
	"]
	37["
	eff_nop__1327
	nop
	"]
	26["
	eff_merge__1326
	merge
	"]
	25 --> 26
	43 --> 26
	43["
	eff_merge__1334
	merge
	"]
	22 --> 43
	0 --> 43
	22["
	eff__1304
	trapDivideUnrepresentable
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 22
	4 -. Stack .-> 22
	25["
	eff__1302
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 25
	4 -. Stack .-> 25
</pre>`;
window.traces.I64_DIV_S.chooseMerge = `<pre class='graph'>---
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
	eff_merge__1329
	merge
	"]
	37 --> 27
	46 --> 27
	46["
	eff_merge__1336
	merge
	"]
	45 --> 46
	21 --> 46
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
	r_state__1333
	Start
	"]
	7["
	r
	U64_div_s
	"]
	4 --> 7
	3 --> 7
	45["
	eff_nop__1335
	nop
	"]
	37["
	eff_nop__1327
	nop
	"]
	26["
	eff_merge__1326
	merge
	"]
	25 --> 26
	43 --> 26
	43["
	eff_merge__1334
	merge
	"]
	22 --> 43
	0 --> 43
	22["
	eff__1304
	trapDivideUnrepresentable
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 22
	4 -. Stack .-> 22
	25["
	eff__1302
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 25
	4 -. Stack .-> 25
</pre>`;
window.traces.I64_DIV_U = {}
window.traces.I64_DIV_U.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_DIV_U.overloadOps = `<pre class='graph'>---
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
	U64_div
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
	U64_equals
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
</pre>`;
window.traces.I64_DIV_U.addAbstractions = `<pre class='graph'>---
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
	U64_div
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
	U64_equals
	"]
	3 --> 10
	16 --> 10
	16["
	abs__1345
	rtcast_u64
	"]
	8 --> 16
	8["
	arg__1342
	0
	"]
	14["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	10 --> 14
	13 --> 14
	0 --> 14
</pre>`;
window.traces.I64_DIV_U.unLEM = `<pre class='graph'>---
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
	19 --> 15
	24 --> 15
	22 --> 15
	22["
	state phi Stack 	"]
	17 --> 22
	13 --> 22
	12 --> 22
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
	r_state__1349
	Start
	"]
	7["
	r
	U64_div
	"]
	4 --> 7
	3 --> 7
	13["
	eff__1338
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 13
	4 -. Stack .-> 13
	17["
	mt__1346
	bot_maybeTrue
	"]
	10 --> 17
	10["
	cond__1337
	U64_equals
	"]
	3 --> 10
	16 --> 10
	16["
	abs__1345
	rtcast_u64
	"]
	8 --> 16
	8["
	arg__1342
	0
	"]
	24["
	eff_merge__1352
	merge
	"]
	23 --> 24
	12 --> 24
	23["
	eff_nop__1351
	nop
	"]
	19["
	mb__1348
	bool.&&
	"]
	17 --> 19
	18 --> 19
	18["
	mf__1347
	bot_maybeFalse
	"]
	10 --> 18
	14["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	19 --> 14
	21 --> 14
	20 --> 14
	20["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	17 --> 20
	13 --> 20
	0 --> 20
	21["
	eff_merge__1350
	merge
	"]
	13 --> 21
	0 --> 21
</pre>`;
window.traces.I64_DIV_U.constUnLEM = `<pre class='graph'>---
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
	eff_merge__1352
	merge
	"]
	23 --> 15
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
	r_state__1349
	Start
	"]
	7["
	r
	U64_div
	"]
	4 --> 7
	3 --> 7
	23["
	eff_nop__1351
	nop
	"]
	14["
	eff_merge__1350
	merge
	"]
	13 --> 14
	0 --> 14
	13["
	eff__1338
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 13
	4 -. Stack .-> 13
</pre>`;
window.traces.I64_DIV_U.chooseMerge = `<pre class='graph'>---
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
	eff_merge__1352
	merge
	"]
	23 --> 15
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
	r_state__1349
	Start
	"]
	7["
	r
	U64_div
	"]
	4 --> 7
	3 --> 7
	23["
	eff_nop__1351
	nop
	"]
	14["
	eff_merge__1350
	merge
	"]
	13 --> 14
	0 --> 14
	13["
	eff__1338
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 13
	4 -. Stack .-> 13
</pre>`;
window.traces.I64_REM_S = {}
window.traces.I64_REM_S.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_REM_S.overloadOps = `<pre class='graph'>---
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
	U64_equals
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
</pre>`;
window.traces.I64_REM_S.addAbstractions = `<pre class='graph'>---
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
	U64_equals
	"]
	3 --> 10
	16 --> 10
	16["
	abs__1361
	rtcast_u64
	"]
	8 --> 16
	8["
	arg__1358
	0
	"]
	14["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	10 --> 14
	13 --> 14
	0 --> 14
</pre>`;
window.traces.I64_REM_S.unLEM = `<pre class='graph'>---
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
	19 --> 15
	24 --> 15
	22 --> 15
	22["
	state phi Stack 	"]
	17 --> 22
	13 --> 22
	12 --> 22
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
	r_state__1365
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
	17["
	mt__1362
	bot_maybeTrue
	"]
	10 --> 17
	10["
	cond__1353
	U64_equals
	"]
	3 --> 10
	16 --> 10
	16["
	abs__1361
	rtcast_u64
	"]
	8 --> 16
	8["
	arg__1358
	0
	"]
	24["
	eff_merge__1368
	merge
	"]
	23 --> 24
	12 --> 24
	23["
	eff_nop__1367
	nop
	"]
	19["
	mb__1364
	bool.&&
	"]
	17 --> 19
	18 --> 19
	18["
	mf__1363
	bot_maybeFalse
	"]
	10 --> 18
	14["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	19 --> 14
	21 --> 14
	20 --> 14
	20["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	17 --> 20
	13 --> 20
	0 --> 20
	21["
	eff_merge__1366
	merge
	"]
	13 --> 21
	0 --> 21
</pre>`;
window.traces.I64_REM_S.constUnLEM = `<pre class='graph'>---
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
	eff_merge__1368
	merge
	"]
	23 --> 15
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
	r_state__1365
	Start
	"]
	7["
	r
	U64_rem_s
	"]
	4 --> 7
	3 --> 7
	23["
	eff_nop__1367
	nop
	"]
	14["
	eff_merge__1366
	merge
	"]
	13 --> 14
	0 --> 14
	13["
	eff__1354
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 13
	4 -. Stack .-> 13
</pre>`;
window.traces.I64_REM_S.chooseMerge = `<pre class='graph'>---
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
	eff_merge__1368
	merge
	"]
	23 --> 15
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
	r_state__1365
	Start
	"]
	7["
	r
	U64_rem_s
	"]
	4 --> 7
	3 --> 7
	23["
	eff_nop__1367
	nop
	"]
	14["
	eff_merge__1366
	merge
	"]
	13 --> 14
	0 --> 14
	13["
	eff__1354
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 13
	4 -. Stack .-> 13
</pre>`;
window.traces.I64_REM_U = {}
window.traces.I64_REM_U.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_REM_U.overloadOps = `<pre class='graph'>---
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
	U64_equals
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
</pre>`;
window.traces.I64_REM_U.addAbstractions = `<pre class='graph'>---
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
	U64_equals
	"]
	3 --> 10
	16 --> 10
	16["
	abs__1377
	rtcast_u64
	"]
	8 --> 16
	8["
	arg__1374
	0
	"]
	14["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	10 --> 14
	13 --> 14
	0 --> 14
</pre>`;
window.traces.I64_REM_U.unLEM = `<pre class='graph'>---
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
	19 --> 15
	24 --> 15
	22 --> 15
	22["
	state phi Stack 	"]
	17 --> 22
	13 --> 22
	12 --> 22
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
	r_state__1381
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
	17["
	mt__1378
	bot_maybeTrue
	"]
	10 --> 17
	10["
	cond__1369
	U64_equals
	"]
	3 --> 10
	16 --> 10
	16["
	abs__1377
	rtcast_u64
	"]
	8 --> 16
	8["
	arg__1374
	0
	"]
	24["
	eff_merge__1384
	merge
	"]
	23 --> 24
	12 --> 24
	23["
	eff_nop__1383
	nop
	"]
	19["
	mb__1380
	bool.&&
	"]
	17 --> 19
	18 --> 19
	18["
	mf__1379
	bot_maybeFalse
	"]
	10 --> 18
	14["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	19 --> 14
	21 --> 14
	20 --> 14
	20["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	17 --> 20
	13 --> 20
	0 --> 20
	21["
	eff_merge__1382
	merge
	"]
	13 --> 21
	0 --> 21
</pre>`;
window.traces.I64_REM_U.constUnLEM = `<pre class='graph'>---
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
	eff_merge__1384
	merge
	"]
	23 --> 15
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
	r_state__1381
	Start
	"]
	7["
	r
	U64_rem_u
	"]
	4 --> 7
	3 --> 7
	23["
	eff_nop__1383
	nop
	"]
	14["
	eff_merge__1382
	merge
	"]
	13 --> 14
	0 --> 14
	13["
	eff__1370
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 13
	4 -. Stack .-> 13
</pre>`;
window.traces.I64_REM_U.chooseMerge = `<pre class='graph'>---
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
	eff_merge__1384
	merge
	"]
	23 --> 15
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
	r_state__1381
	Start
	"]
	7["
	r
	U64_rem_u
	"]
	4 --> 7
	3 --> 7
	23["
	eff_nop__1383
	nop
	"]
	14["
	eff_merge__1382
	merge
	"]
	13 --> 14
	0 --> 14
	13["
	eff__1370
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 13
	4 -. Stack .-> 13
</pre>`;
window.traces.I64_AND = {}
window.traces.I64_AND.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_AND.overloadOps = `<pre class='graph'>---
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
	U64_and
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_AND.addAbstractions = `<pre class='graph'>---
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
	U64_and
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_AND.unLEM = `<pre class='graph'>---
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
	U64_and
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_AND.constUnLEM = `<pre class='graph'>---
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
	U64_and
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_AND.chooseMerge = `<pre class='graph'>---
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
	U64_and
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_OR = {}
window.traces.I64_OR.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_OR.overloadOps = `<pre class='graph'>---
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
	U64_or
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_OR.addAbstractions = `<pre class='graph'>---
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
	U64_or
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_OR.unLEM = `<pre class='graph'>---
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
	U64_or
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_OR.constUnLEM = `<pre class='graph'>---
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
	U64_or
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_OR.chooseMerge = `<pre class='graph'>---
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
	U64_or
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_XOR = {}
window.traces.I64_XOR.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_XOR.overloadOps = `<pre class='graph'>---
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
	U64_or
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_XOR.addAbstractions = `<pre class='graph'>---
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
	U64_or
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_XOR.unLEM = `<pre class='graph'>---
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
	U64_or
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_XOR.constUnLEM = `<pre class='graph'>---
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
	U64_or
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_XOR.chooseMerge = `<pre class='graph'>---
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
	U64_or
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.I64_SHL = {}
window.traces.I64_SHL.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_SHL.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_SHL.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_SHL.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_SHL.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_SHL.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_SHR_S = {}
window.traces.I64_SHR_S.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_SHR_S.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_SHR_S.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_SHR_S.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_SHR_S.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_SHR_S.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_SHR_U = {}
window.traces.I64_SHR_U.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_SHR_U.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_SHR_U.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_SHR_U.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_SHR_U.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_SHR_U.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_ROTL = {}
window.traces.I64_ROTL.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_ROTL.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_ROTL.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_ROTL.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_ROTL.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_ROTL.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_ROTR = {}
window.traces.I64_ROTR.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_ROTR.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_ROTR.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_ROTR.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_ROTR.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_ROTR.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_ABS = {}
window.traces.F32_ABS.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_ABS.overloadOps = `<pre class='graph'>---
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
	F32_abs
	"]
	3 --> 5
</pre>`;
window.traces.F32_ABS.addAbstractions = `<pre class='graph'>---
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
	F32_abs
	"]
	3 --> 5
</pre>`;
window.traces.F32_ABS.unLEM = `<pre class='graph'>---
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
	F32_abs
	"]
	3 --> 5
</pre>`;
window.traces.F32_ABS.constUnLEM = `<pre class='graph'>---
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
	F32_abs
	"]
	3 --> 5
</pre>`;
window.traces.F32_ABS.chooseMerge = `<pre class='graph'>---
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
	F32_abs
	"]
	3 --> 5
</pre>`;
window.traces.F32_NEG = {}
window.traces.F32_NEG.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_NEG.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_NEG.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_NEG.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_NEG.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_NEG.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_CEIL = {}
window.traces.F32_CEIL.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_CEIL.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_CEIL.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_CEIL.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_CEIL.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_CEIL.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_FLOOR = {}
window.traces.F32_FLOOR.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_FLOOR.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_FLOOR.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_FLOOR.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_FLOOR.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_FLOOR.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_TRUNC = {}
window.traces.F32_TRUNC.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_TRUNC.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_TRUNC.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_TRUNC.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_TRUNC.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_TRUNC.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_NEAREST = {}
window.traces.F32_NEAREST.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_NEAREST.overloadOps = `<pre class='graph'>---
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
	F32_round
	"]
	3 --> 5
</pre>`;
window.traces.F32_NEAREST.addAbstractions = `<pre class='graph'>---
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
	F32_round
	"]
	3 --> 5
</pre>`;
window.traces.F32_NEAREST.unLEM = `<pre class='graph'>---
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
	F32_round
	"]
	3 --> 5
</pre>`;
window.traces.F32_NEAREST.constUnLEM = `<pre class='graph'>---
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
	F32_round
	"]
	3 --> 5
</pre>`;
window.traces.F32_NEAREST.chooseMerge = `<pre class='graph'>---
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
	F32_round
	"]
	3 --> 5
</pre>`;
window.traces.F32_SQRT = {}
window.traces.F32_SQRT.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_SQRT.overloadOps = `<pre class='graph'>---
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
	F32_sqrt
	"]
	3 --> 5
</pre>`;
window.traces.F32_SQRT.addAbstractions = `<pre class='graph'>---
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
	F32_sqrt
	"]
	3 --> 5
</pre>`;
window.traces.F32_SQRT.unLEM = `<pre class='graph'>---
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
	F32_sqrt
	"]
	3 --> 5
</pre>`;
window.traces.F32_SQRT.constUnLEM = `<pre class='graph'>---
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
	F32_sqrt
	"]
	3 --> 5
</pre>`;
window.traces.F32_SQRT.chooseMerge = `<pre class='graph'>---
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
	F32_sqrt
	"]
	3 --> 5
</pre>`;
window.traces.F32_ADD = {}
window.traces.F32_ADD.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_ADD.overloadOps = `<pre class='graph'>---
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
	F32_plus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F32_ADD.addAbstractions = `<pre class='graph'>---
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
	F32_plus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F32_ADD.unLEM = `<pre class='graph'>---
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
	F32_plus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F32_ADD.constUnLEM = `<pre class='graph'>---
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
	F32_plus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F32_ADD.chooseMerge = `<pre class='graph'>---
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
	F32_plus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F32_SUB = {}
window.traces.F32_SUB.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_SUB.overloadOps = `<pre class='graph'>---
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
	F32_minus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F32_SUB.addAbstractions = `<pre class='graph'>---
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
	F32_minus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F32_SUB.unLEM = `<pre class='graph'>---
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
	F32_minus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F32_SUB.constUnLEM = `<pre class='graph'>---
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
	F32_minus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F32_SUB.chooseMerge = `<pre class='graph'>---
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
	F32_minus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F32_MUL = {}
window.traces.F32_MUL.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_MUL.overloadOps = `<pre class='graph'>---
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
	F32_times
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F32_MUL.addAbstractions = `<pre class='graph'>---
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
	F32_times
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F32_MUL.unLEM = `<pre class='graph'>---
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
	F32_times
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F32_MUL.constUnLEM = `<pre class='graph'>---
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
	F32_times
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F32_MUL.chooseMerge = `<pre class='graph'>---
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
	F32_times
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F32_DIV = {}
window.traces.F32_DIV.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_DIV.overloadOps = `<pre class='graph'>---
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
	F32_div
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
	F32_equals
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
</pre>`;
window.traces.F32_DIV.addAbstractions = `<pre class='graph'>---
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
	F32_div
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
	F32_equals
	"]
	3 --> 10
	16 --> 10
	16["
	abs__1458
	rtcast_f32
	"]
	8 --> 16
	8["
	arg__1455
	0.0f
	"]
	14["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	10 --> 14
	13 --> 14
	0 --> 14
</pre>`;
window.traces.F32_DIV.unLEM = `<pre class='graph'>---
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
	19 --> 15
	24 --> 15
	22 --> 15
	22["
	state phi Stack 	"]
	17 --> 22
	13 --> 22
	12 --> 22
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
	r_state__1462
	Start
	"]
	7["
	r
	F32_div
	"]
	4 --> 7
	3 --> 7
	13["
	eff__1451
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 13
	4 -. Stack .-> 13
	17["
	mt__1459
	U32_maybeTrue
	"]
	10 --> 17
	10["
	cond__1450
	F32_equals
	"]
	3 --> 10
	16 --> 10
	16["
	abs__1458
	rtcast_f32
	"]
	8 --> 16
	8["
	arg__1455
	0.0f
	"]
	24["
	eff_merge__1465
	merge
	"]
	23 --> 24
	12 --> 24
	23["
	eff_nop__1464
	nop
	"]
	19["
	mb__1461
	bool.&&
	"]
	17 --> 19
	18 --> 19
	18["
	mf__1460
	U32_maybeFalse
	"]
	10 --> 18
	14["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	19 --> 14
	21 --> 14
	20 --> 14
	20["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	17 --> 20
	13 --> 20
	0 --> 20
	21["
	eff_merge__1463
	merge
	"]
	13 --> 21
	0 --> 21
</pre>`;
window.traces.F32_DIV.constUnLEM = `<pre class='graph'>---
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
	eff_merge__1465
	merge
	"]
	23 --> 15
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
	r_state__1462
	Start
	"]
	7["
	r
	F32_div
	"]
	4 --> 7
	3 --> 7
	23["
	eff_nop__1464
	nop
	"]
	14["
	eff_merge__1463
	merge
	"]
	13 --> 14
	0 --> 14
	13["
	eff__1451
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 13
	4 -. Stack .-> 13
</pre>`;
window.traces.F32_DIV.chooseMerge = `<pre class='graph'>---
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
	eff_merge__1465
	merge
	"]
	23 --> 15
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
	r_state__1462
	Start
	"]
	7["
	r
	F32_div
	"]
	4 --> 7
	3 --> 7
	23["
	eff_nop__1464
	nop
	"]
	14["
	eff_merge__1463
	merge
	"]
	13 --> 14
	0 --> 14
	13["
	eff__1451
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 13
	4 -. Stack .-> 13
</pre>`;
window.traces.F64_ABS = {}
window.traces.F64_ABS.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_ABS.overloadOps = `<pre class='graph'>---
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
	F64_abs
	"]
	3 --> 5
</pre>`;
window.traces.F64_ABS.addAbstractions = `<pre class='graph'>---
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
	F64_abs
	"]
	3 --> 5
</pre>`;
window.traces.F64_ABS.unLEM = `<pre class='graph'>---
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
	F64_abs
	"]
	3 --> 5
</pre>`;
window.traces.F64_ABS.constUnLEM = `<pre class='graph'>---
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
	F64_abs
	"]
	3 --> 5
</pre>`;
window.traces.F64_ABS.chooseMerge = `<pre class='graph'>---
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
	F64_abs
	"]
	3 --> 5
</pre>`;
window.traces.F64_NEG = {}
window.traces.F64_NEG.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_NEG.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_NEG.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_NEG.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_NEG.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_NEG.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_CEIL = {}
window.traces.F64_CEIL.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_CEIL.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_CEIL.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_CEIL.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_CEIL.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_CEIL.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_FLOOR = {}
window.traces.F64_FLOOR.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_FLOOR.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_FLOOR.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_FLOOR.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_FLOOR.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_FLOOR.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_TRUNC = {}
window.traces.F64_TRUNC.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_TRUNC.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_TRUNC.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_TRUNC.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_TRUNC.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_TRUNC.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_NEAREST = {}
window.traces.F64_NEAREST.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_NEAREST.overloadOps = `<pre class='graph'>---
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
	F64_round
	"]
	3 --> 5
</pre>`;
window.traces.F64_NEAREST.addAbstractions = `<pre class='graph'>---
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
	F64_round
	"]
	3 --> 5
</pre>`;
window.traces.F64_NEAREST.unLEM = `<pre class='graph'>---
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
	F64_round
	"]
	3 --> 5
</pre>`;
window.traces.F64_NEAREST.constUnLEM = `<pre class='graph'>---
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
	F64_round
	"]
	3 --> 5
</pre>`;
window.traces.F64_NEAREST.chooseMerge = `<pre class='graph'>---
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
	F64_round
	"]
	3 --> 5
</pre>`;
window.traces.F64_SQRT = {}
window.traces.F64_SQRT.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_SQRT.overloadOps = `<pre class='graph'>---
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
	F64_sqrt
	"]
	3 --> 5
</pre>`;
window.traces.F64_SQRT.addAbstractions = `<pre class='graph'>---
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
	F64_sqrt
	"]
	3 --> 5
</pre>`;
window.traces.F64_SQRT.unLEM = `<pre class='graph'>---
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
	F64_sqrt
	"]
	3 --> 5
</pre>`;
window.traces.F64_SQRT.constUnLEM = `<pre class='graph'>---
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
	F64_sqrt
	"]
	3 --> 5
</pre>`;
window.traces.F64_SQRT.chooseMerge = `<pre class='graph'>---
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
	F64_sqrt
	"]
	3 --> 5
</pre>`;
window.traces.F64_ADD = {}
window.traces.F64_ADD.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_ADD.overloadOps = `<pre class='graph'>---
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
	F64_plus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F64_ADD.addAbstractions = `<pre class='graph'>---
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
	F64_plus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F64_ADD.unLEM = `<pre class='graph'>---
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
	F64_plus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F64_ADD.constUnLEM = `<pre class='graph'>---
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
	F64_plus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F64_ADD.chooseMerge = `<pre class='graph'>---
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
	F64_plus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F64_SUB = {}
window.traces.F64_SUB.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_SUB.overloadOps = `<pre class='graph'>---
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
	F64_minus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F64_SUB.addAbstractions = `<pre class='graph'>---
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
	F64_minus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F64_SUB.unLEM = `<pre class='graph'>---
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
	F64_minus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F64_SUB.constUnLEM = `<pre class='graph'>---
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
	F64_minus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F64_SUB.chooseMerge = `<pre class='graph'>---
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
	F64_minus
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F64_MUL = {}
window.traces.F64_MUL.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_MUL.overloadOps = `<pre class='graph'>---
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
	F64_times
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F64_MUL.addAbstractions = `<pre class='graph'>---
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
	F64_times
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F64_MUL.unLEM = `<pre class='graph'>---
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
	F64_times
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F64_MUL.constUnLEM = `<pre class='graph'>---
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
	F64_times
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F64_MUL.chooseMerge = `<pre class='graph'>---
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
	F64_times
	"]
	4 --> 7
	3 --> 7
</pre>`;
window.traces.F64_DIV = {}
window.traces.F64_DIV.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_DIV.overloadOps = `<pre class='graph'>---
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
	F64_div
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
	F64_equals
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
</pre>`;
window.traces.F64_DIV.addAbstractions = `<pre class='graph'>---
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
	F64_div
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
	F64_equals
	"]
	3 --> 10
	16 --> 10
	16["
	abs__1507
	rtcast_f64
	"]
	8 --> 16
	8["
	arg__1504
	0.0f
	"]
	14["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	10 --> 14
	13 --> 14
	0 --> 14
</pre>`;
window.traces.F64_DIV.unLEM = `<pre class='graph'>---
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
	19 --> 15
	24 --> 15
	22 --> 15
	22["
	state phi Stack 	"]
	17 --> 22
	13 --> 22
	12 --> 22
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
	r_state__1511
	Start
	"]
	7["
	r
	F64_div
	"]
	4 --> 7
	3 --> 7
	13["
	eff__1500
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 13
	4 -. Stack .-> 13
	17["
	mt__1508
	bot_maybeTrue
	"]
	10 --> 17
	10["
	cond__1499
	F64_equals
	"]
	3 --> 10
	16 --> 10
	16["
	abs__1507
	rtcast_f64
	"]
	8 --> 16
	8["
	arg__1504
	0.0f
	"]
	24["
	eff_merge__1514
	merge
	"]
	23 --> 24
	12 --> 24
	23["
	eff_nop__1513
	nop
	"]
	19["
	mb__1510
	bool.&&
	"]
	17 --> 19
	18 --> 19
	18["
	mf__1509
	bot_maybeFalse
	"]
	10 --> 18
	14["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	19 --> 14
	21 --> 14
	20 --> 14
	20["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	17 --> 20
	13 --> 20
	0 --> 20
	21["
	eff_merge__1512
	merge
	"]
	13 --> 21
	0 --> 21
</pre>`;
window.traces.F64_DIV.constUnLEM = `<pre class='graph'>---
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
	eff_merge__1514
	merge
	"]
	23 --> 15
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
	r_state__1511
	Start
	"]
	7["
	r
	F64_div
	"]
	4 --> 7
	3 --> 7
	23["
	eff_nop__1513
	nop
	"]
	14["
	eff_merge__1512
	merge
	"]
	13 --> 14
	0 --> 14
	13["
	eff__1500
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 13
	4 -. Stack .-> 13
</pre>`;
window.traces.F64_DIV.chooseMerge = `<pre class='graph'>---
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
	eff_merge__1514
	merge
	"]
	23 --> 15
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
	r_state__1511
	Start
	"]
	7["
	r
	F64_div
	"]
	4 --> 7
	3 --> 7
	23["
	eff_nop__1513
	nop
	"]
	14["
	eff_merge__1512
	merge
	"]
	13 --> 14
	0 --> 14
	13["
	eff__1500
	trapDivideByZero
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 13
	4 -. Stack .-> 13
</pre>`;
window.traces.I32_WRAP_I64 = {}
window.traces.I32_WRAP_I64.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_WRAP_I64.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_WRAP_I64.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_WRAP_I64.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_WRAP_I64.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_WRAP_I64.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_TRUNC_F32_S = {}
window.traces.I32_TRUNC_F32_S.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_TRUNC_F32_S.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_TRUNC_F32_S.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_TRUNC_F32_S.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_TRUNC_F32_S.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_TRUNC_F32_S.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_TRUNC_F32_U = {}
window.traces.I32_TRUNC_F32_U.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_TRUNC_F32_U.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_TRUNC_F32_U.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_TRUNC_F32_U.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_TRUNC_F32_U.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_TRUNC_F32_U.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_TRUNC_F64_S = {}
window.traces.I32_TRUNC_F64_S.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_TRUNC_F64_S.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_TRUNC_F64_S.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_TRUNC_F64_S.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_TRUNC_F64_S.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_TRUNC_F64_S.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_TRUNC_F64_U = {}
window.traces.I32_TRUNC_F64_U.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_TRUNC_F64_U.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_TRUNC_F64_U.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_TRUNC_F64_U.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_TRUNC_F64_U.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_TRUNC_F64_U.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_EXTEND_I32_S = {}
window.traces.I64_EXTEND_I32_S.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_EXTEND_I32_S.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_EXTEND_I32_S.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_EXTEND_I32_S.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_EXTEND_I32_S.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_EXTEND_I32_S.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_EXTEND_I32_U = {}
window.traces.I64_EXTEND_I32_U.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_EXTEND_I32_U.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_EXTEND_I32_U.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_EXTEND_I32_U.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_EXTEND_I32_U.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_EXTEND_I32_U.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_TRUNC_F32_S = {}
window.traces.I64_TRUNC_F32_S.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_TRUNC_F32_S.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_TRUNC_F32_S.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_TRUNC_F32_S.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_TRUNC_F32_S.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_TRUNC_F32_S.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_TRUNC_F32_U = {}
window.traces.I64_TRUNC_F32_U.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_TRUNC_F32_U.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_TRUNC_F32_U.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_TRUNC_F32_U.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_TRUNC_F32_U.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_TRUNC_F32_U.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_TRUNC_F64_S = {}
window.traces.I64_TRUNC_F64_S.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_TRUNC_F64_S.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_TRUNC_F64_S.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_TRUNC_F64_S.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_TRUNC_F64_S.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_TRUNC_F64_S.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_TRUNC_F64_U = {}
window.traces.I64_TRUNC_F64_U.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_TRUNC_F64_U.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_TRUNC_F64_U.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_TRUNC_F64_U.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_TRUNC_F64_U.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_TRUNC_F64_U.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_CONVERT_I32_S = {}
window.traces.F32_CONVERT_I32_S.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_CONVERT_I32_S.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_CONVERT_I32_S.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_CONVERT_I32_S.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_CONVERT_I32_S.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_CONVERT_I32_S.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_CONVERT_I32_U = {}
window.traces.F32_CONVERT_I32_U.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_CONVERT_I32_U.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_CONVERT_I32_U.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_CONVERT_I32_U.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_CONVERT_I32_U.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_CONVERT_I32_U.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_CONVERT_I64_S = {}
window.traces.F32_CONVERT_I64_S.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_CONVERT_I64_S.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_CONVERT_I64_S.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_CONVERT_I64_S.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_CONVERT_I64_S.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_CONVERT_I64_S.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_CONVERT_I64_U = {}
window.traces.F32_CONVERT_I64_U.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_CONVERT_I64_U.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_CONVERT_I64_U.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_CONVERT_I64_U.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_CONVERT_I64_U.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_CONVERT_I64_U.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_CONVERT_I32_S = {}
window.traces.F64_CONVERT_I32_S.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_CONVERT_I32_S.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_CONVERT_I32_S.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_CONVERT_I32_S.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_CONVERT_I32_S.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_CONVERT_I32_S.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_CONVERT_I32_U = {}
window.traces.F64_CONVERT_I32_U.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_CONVERT_I32_U.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_CONVERT_I32_U.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_CONVERT_I32_U.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_CONVERT_I32_U.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_CONVERT_I32_U.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_CONVERT_I64_S = {}
window.traces.F64_CONVERT_I64_S.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_CONVERT_I64_S.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_CONVERT_I64_S.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_CONVERT_I64_S.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_CONVERT_I64_S.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_CONVERT_I64_S.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_CONVERT_I64_U = {}
window.traces.F64_CONVERT_I64_U.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_CONVERT_I64_U.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_CONVERT_I64_U.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_CONVERT_I64_U.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_CONVERT_I64_U.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_CONVERT_I64_U.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_REINTERPRET_F32 = {}
window.traces.I32_REINTERPRET_F32.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_REINTERPRET_F32.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_REINTERPRET_F32.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_REINTERPRET_F32.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_REINTERPRET_F32.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_REINTERPRET_F32.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_REINTERPRET_F64 = {}
window.traces.I64_REINTERPRET_F64.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_REINTERPRET_F64.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_REINTERPRET_F64.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_REINTERPRET_F64.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_REINTERPRET_F64.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_REINTERPRET_F64.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_REINTERPRET_I32 = {}
window.traces.F32_REINTERPRET_I32.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_REINTERPRET_I32.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_REINTERPRET_I32.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_REINTERPRET_I32.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_REINTERPRET_I32.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F32_REINTERPRET_I32.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_REINTERPRET_I64 = {}
window.traces.F64_REINTERPRET_I64.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_REINTERPRET_I64.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_REINTERPRET_I64.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_REINTERPRET_I64.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_REINTERPRET_I64.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.F64_REINTERPRET_I64.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_EXTEND8_S = {}
window.traces.I32_EXTEND8_S.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_EXTEND8_S.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_EXTEND8_S.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_EXTEND8_S.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_EXTEND8_S.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_EXTEND8_S.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_EXTEND16_S = {}
window.traces.I32_EXTEND16_S.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_EXTEND16_S.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_EXTEND16_S.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_EXTEND16_S.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_EXTEND16_S.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I32_EXTEND16_S.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_EXTEND8_S = {}
window.traces.I64_EXTEND8_S.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_EXTEND8_S.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_EXTEND8_S.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_EXTEND8_S.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_EXTEND8_S.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_EXTEND8_S.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_EXTEND16_S = {}
window.traces.I64_EXTEND16_S.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_EXTEND16_S.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_EXTEND16_S.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_EXTEND16_S.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_EXTEND16_S.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_EXTEND16_S.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_EXTEND32_S = {}
window.traces.I64_EXTEND32_S.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_EXTEND32_S.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_EXTEND32_S.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_EXTEND32_S.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_EXTEND32_S.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.I64_EXTEND32_S.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.REF_NULL = {}
window.traces.REF_NULL.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.REF_NULL.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.REF_NULL.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.REF_NULL.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.REF_NULL.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.REF_NULL.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.REF_IS_NULL = {}
window.traces.REF_IS_NULL.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.REF_IS_NULL.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.REF_IS_NULL.addAbstractions = `<pre class='graph'>---
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
	12 --> 7
	3 -. Stack .-> 7
	3["
	obj
	pop_Object
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	12["
	abs__1608
	rtcast_u32
	"]
	6 --> 12
	6["
	arg__1605
	0
	"]
	9["
	eff__1602
	push_u32
	"]
	11 --> 9
	3 -. Stack .-> 9
	11["
	abs__1607
	rtcast_u32
	"]
	8 --> 11
	8["
	arg__1603
	1
	"]
	5["
	cond__1601
	object_isNull
	"]
	3 --> 5
</pre>`;
window.traces.REF_IS_NULL.unLEM = `<pre class='graph'>---
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
	15 --> 10
	18 --> 10
	16 --> 10
	16["
	state phi Stack 	"]
	13 --> 16
	9 --> 16
	7 --> 16
	7["
	eff__1604
	push_u32
	"]
	12 --> 7
	3 -. Stack .-> 7
	3["
	obj
	pop_Object
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	12["
	abs__1608
	rtcast_u32
	"]
	6 --> 12
	6["
	arg__1605
	0
	"]
	9["
	eff__1602
	push_u32
	"]
	11 --> 9
	3 -. Stack .-> 9
	11["
	abs__1607
	rtcast_u32
	"]
	8 --> 11
	8["
	arg__1603
	1
	"]
	13["
	mt__1609
	U32_maybeTrue
	"]
	5 --> 13
	5["
	cond__1601
	object_isNull
	"]
	3 --> 5
	18["
	eff_push__1613
	push_u32
	"]
	17 --> 18
	3 -. Stack .-> 18
	17["
	merge__1612
	merge_u
	"]
	11 --> 17
	12 --> 17
	15["
	mb__1611
	bool.&&
	"]
	13 --> 15
	14 --> 15
	14["
	mf__1610
	U32_maybeFalse
	"]
	5 --> 14
</pre>`;
window.traces.REF_IS_NULL.constUnLEM = `<pre class='graph'>---
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
	eff_push__1613
	push_u32
	"]
	17 --> 10
	3 -. Stack .-> 10
	3["
	obj
	pop_Object
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	17["
	merge__1612
	merge_u
	"]
	11 --> 17
	12 --> 17
	12["
	abs__1608
	rtcast_u32
	"]
	6 --> 12
	6["
	arg__1605
	0
	"]
	11["
	abs__1607
	rtcast_u32
	"]
	8 --> 11
	8["
	arg__1603
	1
	"]
</pre>`;
window.traces.REF_IS_NULL.chooseMerge = `<pre class='graph'>---
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
	eff_push__1613
	push_u32
	"]
	11 --> 10
	3 -. Stack .-> 10
	3["
	obj
	pop_Object
	"]
	0 -. Stack .-> 3
	0["
	Start
	"]
	11["
	abs__1607
	rtcast_u32
	"]
	8 --> 11
	8["
	arg__1603
	1
	"]
</pre>`;
window.traces.REF_AS_NON_NULL = {}
window.traces.REF_AS_NON_NULL.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.REF_AS_NON_NULL.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.REF_AS_NON_NULL.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.REF_AS_NON_NULL.unLEM = `<pre class='graph'>---
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
	13 --> 8
	18 --> 8
	16 --> 8
	16["
	state phi Stack 	"]
	11 --> 16
	6 --> 16
	3 --> 16
	3["
	obj
	pop_Object
	"]
	0 -. Stack .-> 3
	0["
	r_state__1622
	Start
	"]
	6["
	eff__1617
	trapNull
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 6
	3 -. Stack .-> 6
	11["
	mt__1619
	U32_maybeTrue
	"]
	5 --> 11
	5["
	cond__1616
	object_isNull
	"]
	3 --> 5
	18["
	eff_merge__1625
	merge
	"]
	17 --> 18
	3 --> 18
	17["
	eff_nop__1624
	nop
	"]
	13["
	mb__1621
	bool.&&
	"]
	11 --> 13
	12 --> 13
	12["
	mf__1620
	U32_maybeFalse
	"]
	5 --> 12
	7["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	13 --> 7
	15 --> 7
	14 --> 7
	14["
	state phi Codeptr Trap Locals Globals Tables Memory Extra 	"]
	11 --> 14
	6 --> 14
	0 --> 14
	15["
	eff_merge__1623
	merge
	"]
	6 --> 15
	0 --> 15
</pre>`;
window.traces.REF_AS_NON_NULL.constUnLEM = `<pre class='graph'>---
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
	18 -. Stack .-> 10
	18["
	eff_merge__1625
	merge
	"]
	17 --> 18
	3 --> 18
	3["
	obj
	pop_Object
	"]
	0 -. Stack .-> 3
	0["
	r_state__1622
	Start
	"]
	17["
	eff_nop__1624
	nop
	"]
	7["
	eff_merge__1623
	merge
	"]
	6 --> 7
	0 --> 7
	6["
	eff__1617
	trapNull
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 6
	3 -. Stack .-> 6
</pre>`;
window.traces.REF_AS_NON_NULL.chooseMerge = `<pre class='graph'>---
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
	18 -. Stack .-> 10
	18["
	eff_merge__1625
	merge
	"]
	17 --> 18
	3 --> 18
	3["
	obj
	pop_Object
	"]
	0 -. Stack .-> 3
	0["
	r_state__1622
	Start
	"]
	17["
	eff_nop__1624
	nop
	"]
	7["
	eff_merge__1623
	merge
	"]
	6 --> 7
	0 --> 7
	6["
	eff__1617
	trapNull
	"]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 6
	3 -. Stack .-> 6
</pre>`;
window.traces.STRUCT_NEW = {}
window.traces.STRUCT_NEW.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.STRUCT_NEW.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.STRUCT_NEW.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.STRUCT_NEW.unLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.STRUCT_NEW.constUnLEM = `<pre class='graph'>---
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
</pre>`;
window.traces.STRUCT_NEW.chooseMerge = `<pre class='graph'>---
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
</pre>`;
window.traces.STRUCT_GET = {}
window.traces.STRUCT_GET.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.STRUCT_GET.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.STRUCT_GET.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.STRUCT_GET.unLEM = `<pre class='graph'>---
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
	21 --> 17
	29 --> 17
	27 --> 17
	27["
	state phi Trap Locals Globals Tables Memory Extra 	"]
	19 --> 27
	14 --> 27
	0 --> 27
	0["
	r_state__1670
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
	19["
	mt__1663
	U32_maybeTrue
	"]
	13 --> 19
	13["
	cond__1655
	object_isNull
	"]
	11 --> 13
	29["
	eff_merge__1671
	merge
	"]
	28 --> 29
	0 --> 29
	28["
	eff_nop__1669
	nop
	"]
	21["
	mb__1665
	bool.&&
	"]
	19 --> 21
	20 --> 21
	20["
	mf__1664
	U32_maybeFalse
	"]
	13 --> 20
	16["
	state phi Stack 	"]
	21 --> 16
	26 --> 16
	24 --> 16
	24["
	state phi Stack 	"]
	19 --> 24
	14 --> 24
	11 --> 24
	26["
	eff_merge__1668
	merge
	"]
	25 --> 26
	11 --> 26
	25["
	eff_nop__1667
	nop
	"]
	15["
	state phi Codeptr 	"]
	21 --> 15
	23 --> 15
	22 --> 15
	22["
	state phi Codeptr 	"]
	19 --> 22
	14 --> 22
	4 --> 22
	23["
	eff_merge__1666
	merge
	"]
	14 --> 23
	4 --> 23
</pre>`;
window.traces.STRUCT_GET.constUnLEM = `<pre class='graph'>---
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
	eff_merge__1671
	merge
	"]
	28 --> 17
	0 --> 17
	0["
	r_state__1670
	Start
	"]
	28["
	eff_nop__1669
	nop
	"]
	16["
	eff_merge__1668
	merge
	"]
	25 --> 16
	11 --> 16
	11["
	obj
	pop_Object
	"]
	0 -. Stack .-> 11
	25["
	eff_nop__1667
	nop
	"]
	15["
	eff_merge__1666
	merge
	"]
	14 --> 15
	4 --> 15
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
	14["
	ret__1656
	trapNull
	"]
	4 -. Codeptr .-> 14
	11 -. Stack .-> 14
	0 -. Trap Locals Globals Tables Memory Extra .-> 14
</pre>`;
window.traces.STRUCT_GET.chooseMerge = `<pre class='graph'>---
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
	eff_merge__1671
	merge
	"]
	28 --> 17
	0 --> 17
	0["
	r_state__1670
	Start
	"]
	28["
	eff_nop__1669
	nop
	"]
	16["
	eff_merge__1668
	merge
	"]
	25 --> 16
	11 --> 16
	11["
	obj
	pop_Object
	"]
	0 -. Stack .-> 11
	25["
	eff_nop__1667
	nop
	"]
	15["
	eff_merge__1666
	merge
	"]
	14 --> 15
	4 --> 15
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
	14["
	ret__1656
	trapNull
	"]
	4 -. Codeptr .-> 14
	11 -. Stack .-> 14
	0 -. Trap Locals Globals Tables Memory Extra .-> 14
</pre>`;
window.traces.STRUCT_GET_S = {}
window.traces.STRUCT_GET_S.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.STRUCT_GET_S.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.STRUCT_GET_S.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.STRUCT_GET_S.unLEM = `<pre class='graph'>---
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
	21 --> 17
	29 --> 17
	27 --> 17
	27["
	state phi Trap Locals Globals Tables Memory Extra 	"]
	19 --> 27
	14 --> 27
	0 --> 27
	0["
	r_state__1698
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
	19["
	mt__1691
	U32_maybeTrue
	"]
	13 --> 19
	13["
	cond__1683
	object_isNull
	"]
	11 --> 13
	29["
	eff_merge__1699
	merge
	"]
	28 --> 29
	0 --> 29
	28["
	eff_nop__1697
	nop
	"]
	21["
	mb__1693
	bool.&&
	"]
	19 --> 21
	20 --> 21
	20["
	mf__1692
	U32_maybeFalse
	"]
	13 --> 20
	16["
	state phi Stack 	"]
	21 --> 16
	26 --> 16
	24 --> 16
	24["
	state phi Stack 	"]
	19 --> 24
	14 --> 24
	11 --> 24
	26["
	eff_merge__1696
	merge
	"]
	25 --> 26
	11 --> 26
	25["
	eff_nop__1695
	nop
	"]
	15["
	state phi Codeptr 	"]
	21 --> 15
	23 --> 15
	22 --> 15
	22["
	state phi Codeptr 	"]
	19 --> 22
	14 --> 22
	4 --> 22
	23["
	eff_merge__1694
	merge
	"]
	14 --> 23
	4 --> 23
</pre>`;
window.traces.STRUCT_GET_S.constUnLEM = `<pre class='graph'>---
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
	eff_merge__1699
	merge
	"]
	28 --> 17
	0 --> 17
	0["
	r_state__1698
	Start
	"]
	28["
	eff_nop__1697
	nop
	"]
	16["
	eff_merge__1696
	merge
	"]
	25 --> 16
	11 --> 16
	11["
	obj
	pop_Object
	"]
	0 -. Stack .-> 11
	25["
	eff_nop__1695
	nop
	"]
	15["
	eff_merge__1694
	merge
	"]
	14 --> 15
	4 --> 15
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
	14["
	ret__1684
	trapNull
	"]
	4 -. Codeptr .-> 14
	11 -. Stack .-> 14
	0 -. Trap Locals Globals Tables Memory Extra .-> 14
</pre>`;
window.traces.STRUCT_GET_S.chooseMerge = `<pre class='graph'>---
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
	eff_merge__1699
	merge
	"]
	28 --> 17
	0 --> 17
	0["
	r_state__1698
	Start
	"]
	28["
	eff_nop__1697
	nop
	"]
	16["
	eff_merge__1696
	merge
	"]
	25 --> 16
	11 --> 16
	11["
	obj
	pop_Object
	"]
	0 -. Stack .-> 11
	25["
	eff_nop__1695
	nop
	"]
	15["
	eff_merge__1694
	merge
	"]
	14 --> 15
	4 --> 15
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
	14["
	ret__1684
	trapNull
	"]
	4 -. Codeptr .-> 14
	11 -. Stack .-> 14
	0 -. Trap Locals Globals Tables Memory Extra .-> 14
</pre>`;
window.traces.STRUCT_GET_U = {}
window.traces.STRUCT_GET_U.raw = `<pre class='graph'>---
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
</pre>`;
window.traces.STRUCT_GET_U.overloadOps = `<pre class='graph'>---
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
</pre>`;
window.traces.STRUCT_GET_U.addAbstractions = `<pre class='graph'>---
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
</pre>`;
window.traces.STRUCT_GET_U.unLEM = `<pre class='graph'>---
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
	21 --> 17
	29 --> 17
	27 --> 17
	27["
	state phi Trap Locals Globals Tables Memory Extra 	"]
	19 --> 27
	14 --> 27
	0 --> 27
	0["
	r_state__1726
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
	19["
	mt__1719
	U32_maybeTrue
	"]
	13 --> 19
	13["
	cond__1711
	object_isNull
	"]
	11 --> 13
	29["
	eff_merge__1727
	merge
	"]
	28 --> 29
	0 --> 29
	28["
	eff_nop__1725
	nop
	"]
	21["
	mb__1721
	bool.&&
	"]
	19 --> 21
	20 --> 21
	20["
	mf__1720
	U32_maybeFalse
	"]
	13 --> 20
	16["
	state phi Stack 	"]
	21 --> 16
	26 --> 16
	24 --> 16
	24["
	state phi Stack 	"]
	19 --> 24
	14 --> 24
	11 --> 24
	26["
	eff_merge__1724
	merge
	"]
	25 --> 26
	11 --> 26
	25["
	eff_nop__1723
	nop
	"]
	15["
	state phi Codeptr 	"]
	21 --> 15
	23 --> 15
	22 --> 15
	22["
	state phi Codeptr 	"]
	19 --> 22
	14 --> 22
	4 --> 22
	23["
	eff_merge__1722
	merge
	"]
	14 --> 23
	4 --> 23
</pre>`;
window.traces.STRUCT_GET_U.constUnLEM = `<pre class='graph'>---
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
	eff_merge__1727
	merge
	"]
	28 --> 17
	0 --> 17
	0["
	r_state__1726
	Start
	"]
	28["
	eff_nop__1725
	nop
	"]
	16["
	eff_merge__1724
	merge
	"]
	25 --> 16
	11 --> 16
	11["
	obj
	pop_Object
	"]
	0 -. Stack .-> 11
	25["
	eff_nop__1723
	nop
	"]
	15["
	eff_merge__1722
	merge
	"]
	14 --> 15
	4 --> 15
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
	14["
	ret__1712
	trapNull
	"]
	4 -. Codeptr .-> 14
	11 -. Stack .-> 14
	0 -. Trap Locals Globals Tables Memory Extra .-> 14
</pre>`;
window.traces.STRUCT_GET_U.chooseMerge = `<pre class='graph'>---
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
	eff_merge__1727
	merge
	"]
	28 --> 17
	0 --> 17
	0["
	r_state__1726
	Start
	"]
	28["
	eff_nop__1725
	nop
	"]
	16["
	eff_merge__1724
	merge
	"]
	25 --> 16
	11 --> 16
	11["
	obj
	pop_Object
	"]
	0 -. Stack .-> 11
	25["
	eff_nop__1723
	nop
	"]
	15["
	eff_merge__1722
	merge
	"]
	14 --> 15
	4 --> 15
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
	14["
	ret__1712
	trapNull
	"]
	4 -. Codeptr .-> 14
	11 -. Stack .-> 14
	0 -. Trap Locals Globals Tables Memory Extra .-> 14
</pre>`;
