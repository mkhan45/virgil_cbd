window.traces = {};
window.traces.UNREACHABLE = {}
window.traces.UNREACHABLE.parsed = `<pre class=''>def eff__0 = trapUnreachable();
</pre>`;
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
window.traces.UNREACHABLE.scheduled = `<pre class=''>def eff__0 = trapUnreachable();
</pre>`;
window.traces.UNREACHABLE.pretty = `<pre class=''>trapUnreachable();
</pre>`;
window.traces.NOP = {}
window.traces.NOP.parsed = `<pre class=''>def ret__1 = (void);
</pre>`;
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
window.traces.NOP.scheduled = `<pre class=''></pre>`;
window.traces.NOP.pretty = `<pre class=''></pre>`;
window.traces.BLOCK = {}
window.traces.BLOCK.parsed = `<pre class=''>def bt = imm_readBlockType();
def arg__3 = (bt);
def eff__2 = doBlock(arg__3);
</pre>`;
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
window.traces.BLOCK.scheduled = `<pre class=''>def bt = imm_readBlockType();
def eff__2 = doBlock(bt);
</pre>`;
window.traces.BLOCK.pretty = `<pre class=''>def bt = imm_readBlockType();
doBlock(bt);
</pre>`;
window.traces.LOOP = {}
window.traces.LOOP.parsed = `<pre class=''>def bt = imm_readBlockType();
def arg__5 = (bt);
def eff__4 = doLoop(arg__5);
</pre>`;
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
window.traces.LOOP.scheduled = `<pre class=''>def bt = imm_readBlockType();
def eff__4 = doLoop(bt);
</pre>`;
window.traces.LOOP.pretty = `<pre class=''>def bt = imm_readBlockType();
doLoop(bt);
</pre>`;
window.traces.IF = {}
window.traces.IF.parsed = `<pre class=''>def bt = imm_readBlockType();
def cond = pop_u32();
def arg__12 = (bt);
def label = doIf(arg__12);
def arg__11 : u32 = 0;
def arg__10 = (cond);
def cond__6 = u32.==(arg__10, arg__11);
if (cond__6) {
	def arg__8 = (label);
	def eff__7 = doBranch(arg__8);
} else {
	def eff__9 = doFallthru();
}
// phis: 
</pre>`;
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
window.traces.IF.scheduled = `<pre class=''>def bt = imm_readBlockType();
def cond = pop_u32();
def label = doIf(bt);
def eff__7 = doBranch(label);
def eff__9 = doFallthru();
def eff_merge__18 = merge(eff__7, eff__9);
def eff_merge__18 = merge(eff__7, eff__9);
def eff_st_put__13 = ctlxfer.put_IF(label);
</pre>`;
window.traces.IF.pretty = `<pre class=''>def bt = imm_readBlockType();
def cond = pop_u32();
def label = doIf(bt);
doBranch(label);
doFallthru();
ctlxfer.put_IF(label);
</pre>`;
window.traces.ELSE = {}
window.traces.ELSE.parsed = `<pre class=''>def label = doElse();
def arg__20 = (label);
def eff__19 = doBranch(arg__20);
</pre>`;
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
window.traces.ELSE.scheduled = `<pre class=''>def label = doElse();
def eff__19 = doBranch(label);
def eff_st_put__21 = ctlxfer.put_ELSE(label);
</pre>`;
window.traces.ELSE.pretty = `<pre class=''>def label = doElse();
doBranch(label);
ctlxfer.put_ELSE(label);
</pre>`;
window.traces.TRY = {}
window.traces.TRY.parsed = `<pre class=''>def bt = imm_readBlockType();
def arg__23 = (bt);
def eff__22 = doTry(arg__23);
</pre>`;
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
window.traces.TRY.scheduled = `<pre class=''>def bt = imm_readBlockType();
def eff__22 = doTry(bt);
</pre>`;
window.traces.TRY.pretty = `<pre class=''>def bt = imm_readBlockType();
doTry(bt);
</pre>`;
window.traces.END = {}
window.traces.END.parsed = `<pre class=''>def eff__26 = doEnd();
def cond__24 = f_isAtEnd();
if (cond__24) {
	def eff__25 = doReturn();
}
// phis: 
</pre>`;
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
window.traces.END.scheduled = `<pre class=''>def cond__24 = f_isAtEnd();
if (cond__24) {
	def eff__26 = doEnd();
	def eff__25 = doReturn();
} else {
	def eff__26 = doEnd();
}
// phis: 
</pre>`;
window.traces.END.pretty = `<pre class=''>if (f_isAtEnd()) {
	doEnd();
	doReturn();
} else {
	doEnd();
}
</pre>`;
window.traces.BR = {}
window.traces.BR.parsed = `<pre class=''>def depth = imm_readULEB32();
def arg__29 = (depth);
def label = f_getLabel(arg__29);
def arg__28 = (label);
def eff__27 = doBranch(arg__28);
</pre>`;
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
window.traces.BR.scheduled = `<pre class=''>def depth = imm_readULEB32();
def label = f_getLabel(depth);
def eff__27 = doBranch(label);
def eff_st_put__30 = ctlxfer.put_BR(label);
</pre>`;
window.traces.BR.pretty = `<pre class=''>def depth = imm_readULEB32();
def label = f_getLabel(depth);
doBranch(label);
ctlxfer.put_BR(label);
</pre>`;
window.traces.BR_IF = {}
window.traces.BR_IF.parsed = `<pre class=''>def depth = imm_readULEB32();
def arg__37 = (depth);
def label = f_getLabel(arg__37);
def cond = pop_u32();
def arg__36 : u32 = 0;
def arg__35 = (cond);
def cond__31 = u32.!=(arg__35, arg__36);
if (cond__31) {
	def arg__33 = (label);
	def eff__32 = doBranch(arg__33);
} else {
	def eff__34 = doFallthru();
}
// phis: 
</pre>`;
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
window.traces.BR_IF.scheduled = `<pre class=''>def depth = imm_readULEB32();
def label = f_getLabel(depth);
def cond = pop_u32();
def eff__32 = doBranch(label);
def eff__34 = doFallthru();
def eff_merge__43 = merge(eff__32, eff__34);
def eff_merge__43 = merge(eff__32, eff__34);
def eff_st_put__38 = ctlxfer.put_BR_IF(label);
</pre>`;
window.traces.BR_IF.pretty = `<pre class=''>def depth = imm_readULEB32();
def label = f_getLabel(depth);
def cond = pop_u32();
doBranch(label);
doFallthru();
ctlxfer.put_BR_IF(label);
</pre>`;
window.traces.BR_TABLE = {}
window.traces.BR_TABLE.parsed = `<pre class=''>def labels = imm_readLabels();
def key = pop_u32();
def arg__46 = (key);
def arg__45 = (labels);
def eff__44 = doSwitch(arg__45, arg__46);
</pre>`;
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
window.traces.BR_TABLE.scheduled = `<pre class=''>def labels = imm_readLabels();
def key = pop_u32();
def eff__44 = doSwitch(labels, key);
def eff_st_put__47 = ctlxfer.put_BR_TABLE(labels);
</pre>`;
window.traces.BR_TABLE.pretty = `<pre class=''>def labels = imm_readLabels();
def key = pop_u32();
doSwitch(labels, key);
ctlxfer.put_BR_TABLE(labels);
</pre>`;
window.traces.RETURN = {}
window.traces.RETURN.parsed = `<pre class=''>def eff__48 = doReturn();
</pre>`;
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
window.traces.RETURN.scheduled = `<pre class=''>def eff__48 = doReturn();
</pre>`;
window.traces.RETURN.pretty = `<pre class=''>doReturn();
</pre>`;
window.traces.CALL = {}
window.traces.CALL.parsed = `<pre class=''>def index = imm_readULEB32();
def arg__53 = (index);
def sig = m_getFuncSignature(arg__53);
def arg__52 = (index);
def target = i_getFunction(arg__52);
def arg__51 = (target);
def arg__50 = (sig);
def eff__49 = doCall(arg__50, arg__51);
</pre>`;
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
window.traces.CALL.scheduled = `<pre class=''>def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
def eff__49 = doCall(sig, target);
</pre>`;
window.traces.CALL.pretty = `<pre class=''>def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
doCall(sig, target);
</pre>`;
window.traces.CALL_INDIRECT = {}
window.traces.CALL_INDIRECT.parsed = `<pre class=''>def sig_index = imm_readULEB32();
def table_index = imm_readULEB32();
def arg__68 = (sig_index);
def sig = m_getSignature(arg__68);
def arg__67 = (table_index);
def is64 = m_isTable64(arg__67);
def cond__54 = (is64);
if (cond__54) {
	def func_index = pop_u64();
	def arg__60 = (func_index);
	def arg__59 = (sig);
	def arg__58 = (table_index);
	def target = i_getTableFunction64(arg__58, arg__59, arg__60);
	def arg__57 = (target);
	def arg__56 = (sig);
	def eff__55 = doCall(arg__56, arg__57);
} else {
	def func_index = pop_u32();
	def arg__66 = (func_index);
	def arg__65 = (sig);
	def arg__64 = (table_index);
	def target = i_getTableFunction32(arg__64, arg__65, arg__66);
	def arg__63 = (target);
	def arg__62 = (sig);
	def eff__61 = doCall(arg__62, arg__63);
}
// phis: 
</pre>`;
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
window.traces.CALL_INDIRECT.scheduled = `<pre class=''>def sig_index = imm_readULEB32();
def table_index = imm_readULEB32();
def is64 = m_isTable64(table_index);
def eff_st_put__69 = ctlxfer.put_CALL_INDIRECT(is64);
</pre>`;
window.traces.CALL_INDIRECT.pretty = `<pre class=''>def sig_index = imm_readULEB32();
def table_index = imm_readULEB32();
def is64 = m_isTable64(table_index);
ctlxfer.put_CALL_INDIRECT(is64);
</pre>`;
window.traces.RETURN_CALL = {}
window.traces.RETURN_CALL.parsed = `<pre class=''>def index = imm_readULEB32();
def arg__74 = (index);
def sig = m_getFuncSignature(arg__74);
def arg__73 = (index);
def target = i_getFunction(arg__73);
def arg__72 = (target);
def arg__71 = (sig);
def eff__70 = doReturnCall(arg__71, arg__72);
</pre>`;
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
window.traces.RETURN_CALL.scheduled = `<pre class=''>def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
def eff__70 = doReturnCall(sig, target);
</pre>`;
window.traces.RETURN_CALL.pretty = `<pre class=''>def index = imm_readULEB32();
def sig = m_getFuncSignature(index);
def target = i_getFunction(index);
doReturnCall(sig, target);
</pre>`;
window.traces.DROP = {}
window.traces.DROP.parsed = `<pre class=''>def tv = f_getTopOfStackType();
def arg__76 = (tv);
def eff__75 = pop_Value(arg__76);
</pre>`;
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
window.traces.DROP.scheduled = `<pre class=''>def tv = f_getTopOfStackType();
def eff__75 = pop_Value(tv);
</pre>`;
window.traces.DROP.pretty = `<pre class=''>def tv = f_getTopOfStackType();
pop_Value(tv);
</pre>`;
window.traces.SELECT = {}
window.traces.SELECT.parsed = `<pre class=''>def c = pop_u32();
def tv = f_getTopOfStackType();
def arg__87 = (tv);
def b = pop_Value(arg__87);
def arg__86 = (tv);
def a = pop_Value(arg__86);
def arg__85 : u32 = 0;
def arg__84 = (c);
def cond__77 = u32.!=(arg__84, arg__85);
if (cond__77) {
	def arg__80 = (a);
	def arg__79 = (tv);
	def eff__78 = push_Value(arg__79, arg__80);
} else {
	def arg__83 = (b);
	def arg__82 = (tv);
	def eff__81 = push_Value(arg__82, arg__83);
}
// phis: 
</pre>`;
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
window.traces.SELECT.scheduled = `<pre class=''>def c = pop_u32();
def tv = f_getTopOfStackType();
def b = pop_Value(tv);
def a = pop_Value(tv);
def push__93 = push_Value(tv, tv);
</pre>`;
window.traces.SELECT.pretty = `<pre class=''>def c = pop_u32();
def tv = f_getTopOfStackType();
def b = pop_Value(tv);
def a = pop_Value(tv);
def push = push_Value(tv, tv);
</pre>`;
window.traces.LOCAL_GET = {}
window.traces.LOCAL_GET.parsed = `<pre class=''>def index = imm_readULEB32();
def arg__99 = (index);
def tv = f_getLocalType(arg__99);
def arg__98 = (index);
def arg__97 = (tv);
def val = getLocal(arg__97, arg__98);
def arg__96 = (val);
def arg__95 = (tv);
def eff__94 = push_Value(arg__95, arg__96);
</pre>`;
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
window.traces.LOCAL_GET.scheduled = `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = getLocal(tv, index);
def eff__94 = push_Value(tv, val);
</pre>`;
window.traces.LOCAL_GET.pretty = `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = getLocal(tv, index);
push_Value(tv, val);
</pre>`;
window.traces.LOCAL_SET = {}
window.traces.LOCAL_SET.parsed = `<pre class=''>def index = imm_readULEB32();
def arg__105 = (index);
def tv = f_getLocalType(arg__105);
def arg__104 = (tv);
def val = pop_Value(arg__104);
def arg__103 = (val);
def arg__102 = (index);
def arg__101 = (tv);
def eff__100 = setLocal(arg__101, arg__102, arg__103);
</pre>`;
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
window.traces.LOCAL_SET.scheduled = `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
def eff__100 = setLocal(tv, index, val);
</pre>`;
window.traces.LOCAL_SET.pretty = `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
setLocal(tv, index, val);
</pre>`;
window.traces.LOCAL_TEE = {}
window.traces.LOCAL_TEE.parsed = `<pre class=''>def index = imm_readULEB32();
def arg__114 = (index);
def tv = f_getLocalType(arg__114);
def arg__113 = (tv);
def val = pop_Value(arg__113);
def arg__112 = (val);
def arg__111 = (index);
def arg__110 = (tv);
def eff__109 = setLocal(arg__110, arg__111, arg__112);
def arg__108 = (val);
def arg__107 = (tv);
def eff__106 = push_Value(arg__107, arg__108);
</pre>`;
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
window.traces.LOCAL_TEE.scheduled = `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
def eff__106 = push_Value(tv, val);
def eff__109 = setLocal(tv, index, val);
</pre>`;
window.traces.LOCAL_TEE.pretty = `<pre class=''>def index = imm_readULEB32();
def tv = f_getLocalType(index);
def val = pop_Value(tv);
push_Value(tv, val);
setLocal(tv, index, val);
</pre>`;
window.traces.GLOBAL_GET = {}
window.traces.GLOBAL_GET.parsed = `<pre class=''>def index = imm_readULEB32();
def arg__120 = (index);
def tv = m_getGlobalType(arg__120);
def arg__119 = (index);
def arg__118 = (tv);
def val = getGlobal(arg__118, arg__119);
def arg__117 = (val);
def arg__116 = (tv);
def eff__115 = push_Value(arg__116, arg__117);
</pre>`;
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
window.traces.GLOBAL_GET.scheduled = `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = getGlobal(tv, index);
def eff__115 = push_Value(tv, val);
</pre>`;
window.traces.GLOBAL_GET.pretty = `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = getGlobal(tv, index);
push_Value(tv, val);
</pre>`;
window.traces.GLOBAL_SET = {}
window.traces.GLOBAL_SET.parsed = `<pre class=''>def index = imm_readULEB32();
def arg__126 = (index);
def tv = m_getGlobalType(arg__126);
def arg__125 = (tv);
def val = pop_Value(arg__125);
def arg__124 = (val);
def arg__123 = (index);
def arg__122 = (tv);
def eff__121 = setGlobal(arg__122, arg__123, arg__124);
</pre>`;
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
window.traces.GLOBAL_SET.scheduled = `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = pop_Value(tv);
def eff__121 = setGlobal(tv, index, val);
</pre>`;
window.traces.GLOBAL_SET.pretty = `<pre class=''>def index = imm_readULEB32();
def tv = m_getGlobalType(index);
def val = pop_Value(tv);
setGlobal(tv, index, val);
</pre>`;
window.traces.TABLE_GET = {}
window.traces.TABLE_GET.parsed = `<pre class=''>def table_index = imm_readULEB32();
def arg__136 = (table_index);
def cond__127 = m_isTable64(arg__136);
if (cond__127) {
	def index = pop_u64();
	def arg__131 = (index);
	def arg__130 = (table_index);
	def val = mach_readTable64(arg__130, arg__131);
	def arg__129 = (val);
	def eff__128 = push_Object(arg__129);
} else {
	def index = pop_u32();
	def arg__135 = (index);
	def arg__134 = (table_index);
	def val = mach_readTable32(arg__134, arg__135);
	def arg__133 = (val);
	def eff__132 = push_Object(arg__133);
}
// phis: 
</pre>`;
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
window.traces.TABLE_GET.scheduled = `<pre class=''>def table_index = imm_readULEB32();
def cond__127 = m_isTable64(table_index);
if (cond__127) {
	def index = pop_u64();
	def val = mach_readTable64(table_index, index);
	def eff__128 = push_Object(val);
} else {
	def index = pop_u32();
	def val = mach_readTable32(table_index, index);
	def eff__132 = push_Object(val);
}
// phis: 
</pre>`;
window.traces.TABLE_GET.pretty = `<pre class=''>def table_index = imm_readULEB32();
def cond = m_isTable64(table_index);
if (cond) {
	def index = pop_u64();
	def val = mach_readTable64(table_index, index);
	push_Object(val);
} else {
	def index = pop_u32();
	def val = mach_readTable32(table_index, index);
	push_Object(val);
}
</pre>`;
window.traces.TABLE_SET = {}
window.traces.TABLE_SET.parsed = `<pre class=''>def table_index = imm_readULEB32();
def arg__146 = (table_index);
def cond__137 = m_isTable64(arg__146);
if (cond__137) {
	def val = pop_Object();
	def index = pop_u64();
	def arg__141 = (val);
	def arg__140 = (index);
	def arg__139 = (table_index);
	def eff__138 = mach_writeTable64(arg__139, arg__140, arg__141);
} else {
	def val = pop_Object();
	def index = pop_u32();
	def arg__145 = (val);
	def arg__144 = (index);
	def arg__143 = (table_index);
	def eff__142 = mach_writeTable32(arg__143, arg__144, arg__145);
}
// phis: 
</pre>`;
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
window.traces.TABLE_SET.scheduled = `<pre class=''>def table_index = imm_readULEB32();
def cond__137 = m_isTable64(table_index);
if (cond__137) {
	def val = pop_Object();
	def index = pop_u64();
} else {
	def val = pop_Object();
	def index = pop_u32();
}
// phis: 
</pre>`;
window.traces.TABLE_SET.pretty = `<pre class=''>def table_index = imm_readULEB32();
def cond = m_isTable64(table_index);
if (cond) {
	def val = pop_Object();
	def index = pop_u64();
} else {
	def val = pop_Object();
	def index = pop_u32();
}
</pre>`;
window.traces.I32_LOAD = {}
window.traces.I32_LOAD.parsed = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__162 : byte = 0;
def arg__164 : byte = 0x40u8;
def arg__163 = (flags);
def arg__161 = u8.&(arg__163, arg__164);
def cond__159 = u8.!=(arg__161, arg__162);
if (cond__159) {
	def memindex__160 = imm_readULEB32();
}
// phis: memindex <- memindex__160; 
def arg__158 = (memindex);
def cond__147 = m_isMemory64(arg__158);
if (cond__147) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__152 = (offset);
	def arg__151 = (index);
	def arg__150 = (memindex);
	def val = mach_readMemory64_u32(arg__150, arg__151, arg__152);
	def arg__149 = (val);
	def eff__148 = push_u32(arg__149);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__157 = (offset);
	def arg__156 = (index);
	def arg__155 = (memindex);
	def val = mach_readMemory32_u32(arg__155, arg__156, arg__157);
	def arg__154 = (val);
	def eff__153 = push_u32(arg__154);
}
// phis: 
</pre>`;
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
window.traces.I32_LOAD.scheduled = `<pre class=''>def flags = imm_readU8();
def arg__164 : byte = 0x40u8;
def arg__161 = u8.&(flags, arg__164);
def arg__162 : byte = 0;
def cond__159 = u8.!=(arg__161, arg__162);
var memindex: u32;
if (cond__159) {
	def memindex__160 = imm_readULEB32();
} else {
	def memindex__166 : u32 = 0u;
}
def cond__147 = m_isMemory64(memindex);
if (cond__147) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u32(memindex, index, offset);
	def eff__148 = push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32(memindex, index, offset);
	def eff__153 = push_u32(val);
}
// phis: 
// phis: memindex <- memindex__160; memindex <- memindex__166; 
def cond__147 = m_isMemory64(memindex);
if (cond__147) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u32(memindex, index, offset);
	def eff__148 = push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32(memindex, index, offset);
	def eff__153 = push_u32(val);
}
// phis: 
</pre>`;
window.traces.I32_LOAD.pretty = `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u32(memindex, index, offset);
	push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32(memindex, index, offset);
	push_u32(val);
}
</pre>`;
window.traces.I64_LOAD = {}
window.traces.I64_LOAD.parsed = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__182 : byte = 0;
def arg__184 : byte = 0x40u8;
def arg__183 = (flags);
def arg__181 = u8.&(arg__183, arg__184);
def cond__179 = u8.!=(arg__181, arg__182);
if (cond__179) {
	def memindex__180 = imm_readULEB32();
}
// phis: memindex <- memindex__180; 
def arg__178 = (memindex);
def cond__167 = m_isMemory64(arg__178);
if (cond__167) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__172 = (offset);
	def arg__171 = (index);
	def arg__170 = (memindex);
	def val = mach_readMemory64_u64(arg__170, arg__171, arg__172);
	def arg__169 = (val);
	def eff__168 = push_u64(arg__169);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__177 = (offset);
	def arg__176 = (index);
	def arg__175 = (memindex);
	def val = mach_readMemory32_u64(arg__175, arg__176, arg__177);
	def arg__174 = (val);
	def eff__173 = push_u64(arg__174);
}
// phis: 
</pre>`;
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
window.traces.I64_LOAD.scheduled = `<pre class=''>def flags = imm_readU8();
def arg__184 : byte = 0x40u8;
def arg__181 = u8.&(flags, arg__184);
def arg__182 : byte = 0;
def cond__179 = u8.!=(arg__181, arg__182);
var memindex: u32;
if (cond__179) {
	def memindex__180 = imm_readULEB32();
} else {
	def memindex__186 : u32 = 0u;
}
def cond__167 = m_isMemory64(memindex);
if (cond__167) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u64(memindex, index, offset);
	def eff__168 = push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u64(memindex, index, offset);
	def eff__173 = push_u64(val);
}
// phis: 
// phis: memindex <- memindex__180; memindex <- memindex__186; 
def cond__167 = m_isMemory64(memindex);
if (cond__167) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u64(memindex, index, offset);
	def eff__168 = push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u64(memindex, index, offset);
	def eff__173 = push_u64(val);
}
// phis: 
</pre>`;
window.traces.I64_LOAD.pretty = `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u64(memindex, index, offset);
	push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u64(memindex, index, offset);
	push_u64(val);
}
</pre>`;
window.traces.F32_LOAD = {}
window.traces.F32_LOAD.parsed = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__202 : byte = 0;
def arg__204 : byte = 0x40u8;
def arg__203 = (flags);
def arg__201 = u8.&(arg__203, arg__204);
def cond__199 = u8.!=(arg__201, arg__202);
if (cond__199) {
	def memindex__200 = imm_readULEB32();
}
// phis: memindex <- memindex__200; 
def arg__198 = (memindex);
def cond__187 = m_isMemory64(arg__198);
if (cond__187) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__192 = (offset);
	def arg__191 = (index);
	def arg__190 = (memindex);
	def val = mach_readMemory64_f32(arg__190, arg__191, arg__192);
	def arg__189 = (val);
	def eff__188 = push_f32(arg__189);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__197 = (offset);
	def arg__196 = (index);
	def arg__195 = (memindex);
	def val = mach_readMemory32_f32(arg__195, arg__196, arg__197);
	def arg__194 = (val);
	def eff__193 = push_f32(arg__194);
}
// phis: 
</pre>`;
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
window.traces.F32_LOAD.scheduled = `<pre class=''>def flags = imm_readU8();
def arg__204 : byte = 0x40u8;
def arg__201 = u8.&(flags, arg__204);
def arg__202 : byte = 0;
def cond__199 = u8.!=(arg__201, arg__202);
var memindex: u32;
if (cond__199) {
	def memindex__200 = imm_readULEB32();
} else {
	def memindex__206 : u32 = 0u;
}
def cond__187 = m_isMemory64(memindex);
if (cond__187) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_f32(memindex, index, offset);
	def eff__188 = push_f32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_f32(memindex, index, offset);
	def eff__193 = push_f32(val);
}
// phis: 
// phis: memindex <- memindex__200; memindex <- memindex__206; 
def cond__187 = m_isMemory64(memindex);
if (cond__187) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_f32(memindex, index, offset);
	def eff__188 = push_f32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_f32(memindex, index, offset);
	def eff__193 = push_f32(val);
}
// phis: 
</pre>`;
window.traces.F32_LOAD.pretty = `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_f32(memindex, index, offset);
	push_f32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_f32(memindex, index, offset);
	push_f32(val);
}
</pre>`;
window.traces.F64_LOAD = {}
window.traces.F64_LOAD.parsed = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__222 : byte = 0;
def arg__224 : byte = 0x40u8;
def arg__223 = (flags);
def arg__221 = u8.&(arg__223, arg__224);
def cond__219 = u8.!=(arg__221, arg__222);
if (cond__219) {
	def memindex__220 = imm_readULEB32();
}
// phis: memindex <- memindex__220; 
def arg__218 = (memindex);
def cond__207 = m_isMemory64(arg__218);
if (cond__207) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__212 = (offset);
	def arg__211 = (index);
	def arg__210 = (memindex);
	def val = mach_readMemory64_f64(arg__210, arg__211, arg__212);
	def arg__209 = (val);
	def eff__208 = push_f64(arg__209);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__217 = (offset);
	def arg__216 = (index);
	def arg__215 = (memindex);
	def val = mach_readMemory32_f64(arg__215, arg__216, arg__217);
	def arg__214 = (val);
	def eff__213 = push_f64(arg__214);
}
// phis: 
</pre>`;
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
window.traces.F64_LOAD.scheduled = `<pre class=''>def flags = imm_readU8();
def arg__224 : byte = 0x40u8;
def arg__221 = u8.&(flags, arg__224);
def arg__222 : byte = 0;
def cond__219 = u8.!=(arg__221, arg__222);
var memindex: u32;
if (cond__219) {
	def memindex__220 = imm_readULEB32();
} else {
	def memindex__226 : u32 = 0u;
}
def cond__207 = m_isMemory64(memindex);
if (cond__207) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_f64(memindex, index, offset);
	def eff__208 = push_f64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_f64(memindex, index, offset);
	def eff__213 = push_f64(val);
}
// phis: 
// phis: memindex <- memindex__220; memindex <- memindex__226; 
def cond__207 = m_isMemory64(memindex);
if (cond__207) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_f64(memindex, index, offset);
	def eff__208 = push_f64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_f64(memindex, index, offset);
	def eff__213 = push_f64(val);
}
// phis: 
</pre>`;
window.traces.F64_LOAD.pretty = `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_f64(memindex, index, offset);
	push_f64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_f64(memindex, index, offset);
	push_f64(val);
}
</pre>`;
window.traces.I32_LOAD8_S = {}
window.traces.I32_LOAD8_S.parsed = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__244 : byte = 0;
def arg__246 : byte = 0x40u8;
def arg__245 = (flags);
def arg__243 = u8.&(arg__245, arg__246);
def cond__241 = u8.!=(arg__243, arg__244);
if (cond__241) {
	def memindex__242 = imm_readULEB32();
}
// phis: memindex <- memindex__242; 
def arg__240 = (memindex);
def cond__227 = m_isMemory64(arg__240);
if (cond__227) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__233 = (offset);
	def arg__232 = (index);
	def arg__231 = (memindex);
	def val = mach_readMemory64_u8(arg__231, arg__232, arg__233);
	def arg__230 = (val);
	def extend = U32_extend8_s(arg__230);
	def arg__229 = (extend);
	def eff__228 = push_u32(arg__229);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__239 = (offset);
	def arg__238 = (index);
	def arg__237 = (memindex);
	def val = mach_readMemory32_u8(arg__237, arg__238, arg__239);
	def arg__236 = (val);
	def extend = U32_extend8_s(arg__236);
	def arg__235 = (extend);
	def eff__234 = push_u32(arg__235);
}
// phis: 
</pre>`;
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
window.traces.I32_LOAD8_S.scheduled = `<pre class=''>def flags = imm_readU8();
def arg__246 : byte = 0x40u8;
def arg__243 = u8.&(flags, arg__246);
def arg__244 : byte = 0;
def cond__241 = u8.!=(arg__243, arg__244);
var memindex: u32;
if (cond__241) {
	def memindex__242 = imm_readULEB32();
} else {
	def memindex__248 : u32 = 0u;
}
def cond__227 = m_isMemory64(memindex);
if (cond__227) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8(memindex, index, offset);
	def extend = U32_extend8_s(val);
	def eff__228 = push_u32(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8(memindex, index, offset);
	def extend = U32_extend8_s(val);
	def eff__234 = push_u32(extend);
}
// phis: 
// phis: memindex <- memindex__242; memindex <- memindex__248; 
def cond__227 = m_isMemory64(memindex);
if (cond__227) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8(memindex, index, offset);
	def extend = U32_extend8_s(val);
	def eff__228 = push_u32(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8(memindex, index, offset);
	def extend = U32_extend8_s(val);
	def eff__234 = push_u32(extend);
}
// phis: 
</pre>`;
window.traces.I32_LOAD8_S.pretty = `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8(memindex, index, offset);
	def extend = U32_extend8_s(val);
	push_u32(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8(memindex, index, offset);
	def extend = U32_extend8_s(val);
	push_u32(extend);
}
</pre>`;
window.traces.I32_LOAD8_U = {}
window.traces.I32_LOAD8_U.parsed = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__264 : byte = 0;
def arg__266 : byte = 0x40u8;
def arg__265 = (flags);
def arg__263 = u8.&(arg__265, arg__266);
def cond__261 = u8.!=(arg__263, arg__264);
if (cond__261) {
	def memindex__262 = imm_readULEB32();
}
// phis: memindex <- memindex__262; 
def arg__260 = (memindex);
def cond__249 = m_isMemory64(arg__260);
if (cond__249) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__254 = (offset);
	def arg__253 = (index);
	def arg__252 = (memindex);
	def val = mach_readMemory64_u8(arg__252, arg__253, arg__254);
	def arg__251 = (val);
	def eff__250 = push_u32(arg__251);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__259 = (offset);
	def arg__258 = (index);
	def arg__257 = (memindex);
	def val = mach_readMemory32_u8(arg__257, arg__258, arg__259);
	def arg__256 = (val);
	def eff__255 = push_u32(arg__256);
}
// phis: 
</pre>`;
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
window.traces.I32_LOAD8_U.scheduled = `<pre class=''>def flags = imm_readU8();
def arg__266 : byte = 0x40u8;
def arg__263 = u8.&(flags, arg__266);
def arg__264 : byte = 0;
def cond__261 = u8.!=(arg__263, arg__264);
var memindex: u32;
if (cond__261) {
	def memindex__262 = imm_readULEB32();
} else {
	def memindex__268 : u32 = 0u;
}
def cond__249 = m_isMemory64(memindex);
if (cond__249) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8(memindex, index, offset);
	def eff__250 = push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8(memindex, index, offset);
	def eff__255 = push_u32(val);
}
// phis: 
// phis: memindex <- memindex__262; memindex <- memindex__268; 
def cond__249 = m_isMemory64(memindex);
if (cond__249) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8(memindex, index, offset);
	def eff__250 = push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8(memindex, index, offset);
	def eff__255 = push_u32(val);
}
// phis: 
</pre>`;
window.traces.I32_LOAD8_U.pretty = `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8(memindex, index, offset);
	push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8(memindex, index, offset);
	push_u32(val);
}
</pre>`;
window.traces.I32_LOAD16_S = {}
window.traces.I32_LOAD16_S.parsed = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__286 : byte = 0;
def arg__288 : byte = 0x40u8;
def arg__287 = (flags);
def arg__285 = u8.&(arg__287, arg__288);
def cond__283 = u8.!=(arg__285, arg__286);
if (cond__283) {
	def memindex__284 = imm_readULEB32();
}
// phis: memindex <- memindex__284; 
def arg__282 = (memindex);
def cond__269 = m_isMemory64(arg__282);
if (cond__269) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__275 = (offset);
	def arg__274 = (index);
	def arg__273 = (memindex);
	def val = mach_readMemory64_u16(arg__273, arg__274, arg__275);
	def arg__272 = (val);
	def extend = U32_extend16_s(arg__272);
	def arg__271 = (extend);
	def eff__270 = push_u32(arg__271);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__281 = (offset);
	def arg__280 = (index);
	def arg__279 = (memindex);
	def val = mach_readMemory32_u16(arg__279, arg__280, arg__281);
	def arg__278 = (val);
	def extend = U32_extend16_s(arg__278);
	def arg__277 = (extend);
	def eff__276 = push_u32(arg__277);
}
// phis: 
</pre>`;
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
window.traces.I32_LOAD16_S.scheduled = `<pre class=''>def flags = imm_readU8();
def arg__288 : byte = 0x40u8;
def arg__285 = u8.&(flags, arg__288);
def arg__286 : byte = 0;
def cond__283 = u8.!=(arg__285, arg__286);
var memindex: u32;
if (cond__283) {
	def memindex__284 = imm_readULEB32();
} else {
	def memindex__290 : u32 = 0u;
}
def cond__269 = m_isMemory64(memindex);
if (cond__269) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16(memindex, index, offset);
	def extend = U32_extend16_s(val);
	def eff__270 = push_u32(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16(memindex, index, offset);
	def extend = U32_extend16_s(val);
	def eff__276 = push_u32(extend);
}
// phis: 
// phis: memindex <- memindex__284; memindex <- memindex__290; 
def cond__269 = m_isMemory64(memindex);
if (cond__269) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16(memindex, index, offset);
	def extend = U32_extend16_s(val);
	def eff__270 = push_u32(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16(memindex, index, offset);
	def extend = U32_extend16_s(val);
	def eff__276 = push_u32(extend);
}
// phis: 
</pre>`;
window.traces.I32_LOAD16_S.pretty = `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16(memindex, index, offset);
	def extend = U32_extend16_s(val);
	push_u32(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16(memindex, index, offset);
	def extend = U32_extend16_s(val);
	push_u32(extend);
}
</pre>`;
window.traces.I32_LOAD16_U = {}
window.traces.I32_LOAD16_U.parsed = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__306 : byte = 0;
def arg__308 : byte = 0x40u8;
def arg__307 = (flags);
def arg__305 = u8.&(arg__307, arg__308);
def cond__303 = u8.!=(arg__305, arg__306);
if (cond__303) {
	def memindex__304 = imm_readULEB32();
}
// phis: memindex <- memindex__304; 
def arg__302 = (memindex);
def cond__291 = m_isMemory64(arg__302);
if (cond__291) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__296 = (offset);
	def arg__295 = (index);
	def arg__294 = (memindex);
	def val = mach_readMemory64_u16(arg__294, arg__295, arg__296);
	def arg__293 = (val);
	def eff__292 = push_u32(arg__293);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__301 = (offset);
	def arg__300 = (index);
	def arg__299 = (memindex);
	def val = mach_readMemory32_u16(arg__299, arg__300, arg__301);
	def arg__298 = (val);
	def eff__297 = push_u32(arg__298);
}
// phis: 
</pre>`;
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
window.traces.I32_LOAD16_U.scheduled = `<pre class=''>def flags = imm_readU8();
def arg__308 : byte = 0x40u8;
def arg__305 = u8.&(flags, arg__308);
def arg__306 : byte = 0;
def cond__303 = u8.!=(arg__305, arg__306);
var memindex: u32;
if (cond__303) {
	def memindex__304 = imm_readULEB32();
} else {
	def memindex__310 : u32 = 0u;
}
def cond__291 = m_isMemory64(memindex);
if (cond__291) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16(memindex, index, offset);
	def eff__292 = push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16(memindex, index, offset);
	def eff__297 = push_u32(val);
}
// phis: 
// phis: memindex <- memindex__304; memindex <- memindex__310; 
def cond__291 = m_isMemory64(memindex);
if (cond__291) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16(memindex, index, offset);
	def eff__292 = push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16(memindex, index, offset);
	def eff__297 = push_u32(val);
}
// phis: 
</pre>`;
window.traces.I32_LOAD16_U.pretty = `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16(memindex, index, offset);
	push_u32(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16(memindex, index, offset);
	push_u32(val);
}
</pre>`;
window.traces.I64_LOAD8_S = {}
window.traces.I64_LOAD8_S.parsed = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__328 : byte = 0;
def arg__330 : byte = 0x40u8;
def arg__329 = (flags);
def arg__327 = u8.&(arg__329, arg__330);
def cond__325 = u8.!=(arg__327, arg__328);
if (cond__325) {
	def memindex__326 = imm_readULEB32();
}
// phis: memindex <- memindex__326; 
def arg__324 = (memindex);
def cond__311 = m_isMemory64(arg__324);
if (cond__311) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__317 = (offset);
	def arg__316 = (index);
	def arg__315 = (memindex);
	def val = mach_readMemory64_u8_64(arg__315, arg__316, arg__317);
	def arg__314 = (val);
	def extend = U64_extend8_s(arg__314);
	def arg__313 = (extend);
	def eff__312 = push_u64(arg__313);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__323 = (offset);
	def arg__322 = (index);
	def arg__321 = (memindex);
	def val = mach_readMemory32_u8_64(arg__321, arg__322, arg__323);
	def arg__320 = (val);
	def extend = U64_extend8_s(arg__320);
	def arg__319 = (extend);
	def eff__318 = push_u64(arg__319);
}
// phis: 
</pre>`;
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
window.traces.I64_LOAD8_S.scheduled = `<pre class=''>def flags = imm_readU8();
def arg__330 : byte = 0x40u8;
def arg__327 = u8.&(flags, arg__330);
def arg__328 : byte = 0;
def cond__325 = u8.!=(arg__327, arg__328);
var memindex: u32;
if (cond__325) {
	def memindex__326 = imm_readULEB32();
} else {
	def memindex__332 : u32 = 0u;
}
def cond__311 = m_isMemory64(memindex);
if (cond__311) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8_64(memindex, index, offset);
	def extend = U64_extend8_s(val);
	def eff__312 = push_u64(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8_64(memindex, index, offset);
	def extend = U64_extend8_s(val);
	def eff__318 = push_u64(extend);
}
// phis: 
// phis: memindex <- memindex__326; memindex <- memindex__332; 
def cond__311 = m_isMemory64(memindex);
if (cond__311) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8_64(memindex, index, offset);
	def extend = U64_extend8_s(val);
	def eff__312 = push_u64(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8_64(memindex, index, offset);
	def extend = U64_extend8_s(val);
	def eff__318 = push_u64(extend);
}
// phis: 
</pre>`;
window.traces.I64_LOAD8_S.pretty = `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8_64(memindex, index, offset);
	def extend = U64_extend8_s(val);
	push_u64(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8_64(memindex, index, offset);
	def extend = U64_extend8_s(val);
	push_u64(extend);
}
</pre>`;
window.traces.I64_LOAD8_U = {}
window.traces.I64_LOAD8_U.parsed = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__348 : byte = 0;
def arg__350 : byte = 0x40u8;
def arg__349 = (flags);
def arg__347 = u8.&(arg__349, arg__350);
def cond__345 = u8.!=(arg__347, arg__348);
if (cond__345) {
	def memindex__346 = imm_readULEB32();
}
// phis: memindex <- memindex__346; 
def arg__344 = (memindex);
def cond__333 = m_isMemory64(arg__344);
if (cond__333) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__338 = (offset);
	def arg__337 = (index);
	def arg__336 = (memindex);
	def val = mach_readMemory64_u8_64(arg__336, arg__337, arg__338);
	def arg__335 = (val);
	def eff__334 = push_u64(arg__335);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__343 = (offset);
	def arg__342 = (index);
	def arg__341 = (memindex);
	def val = mach_readMemory32_u8_64(arg__341, arg__342, arg__343);
	def arg__340 = (val);
	def eff__339 = push_u64(arg__340);
}
// phis: 
</pre>`;
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
window.traces.I64_LOAD8_U.scheduled = `<pre class=''>def flags = imm_readU8();
def arg__350 : byte = 0x40u8;
def arg__347 = u8.&(flags, arg__350);
def arg__348 : byte = 0;
def cond__345 = u8.!=(arg__347, arg__348);
var memindex: u32;
if (cond__345) {
	def memindex__346 = imm_readULEB32();
} else {
	def memindex__352 : u32 = 0u;
}
def cond__333 = m_isMemory64(memindex);
if (cond__333) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8_64(memindex, index, offset);
	def eff__334 = push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8_64(memindex, index, offset);
	def eff__339 = push_u64(val);
}
// phis: 
// phis: memindex <- memindex__346; memindex <- memindex__352; 
def cond__333 = m_isMemory64(memindex);
if (cond__333) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8_64(memindex, index, offset);
	def eff__334 = push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8_64(memindex, index, offset);
	def eff__339 = push_u64(val);
}
// phis: 
</pre>`;
window.traces.I64_LOAD8_U.pretty = `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u8_64(memindex, index, offset);
	push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u8_64(memindex, index, offset);
	push_u64(val);
}
</pre>`;
window.traces.I64_LOAD16_S = {}
window.traces.I64_LOAD16_S.parsed = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__370 : byte = 0;
def arg__372 : byte = 0x40u8;
def arg__371 = (flags);
def arg__369 = u8.&(arg__371, arg__372);
def cond__367 = u8.!=(arg__369, arg__370);
if (cond__367) {
	def memindex__368 = imm_readULEB32();
}
// phis: memindex <- memindex__368; 
def arg__366 = (memindex);
def cond__353 = m_isMemory64(arg__366);
if (cond__353) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__359 = (offset);
	def arg__358 = (index);
	def arg__357 = (memindex);
	def val = mach_readMemory64_u16_64(arg__357, arg__358, arg__359);
	def arg__356 = (val);
	def extend = U64_extend16_s(arg__356);
	def arg__355 = (extend);
	def eff__354 = push_u64(arg__355);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__365 = (offset);
	def arg__364 = (index);
	def arg__363 = (memindex);
	def val = mach_readMemory32_u16_64(arg__363, arg__364, arg__365);
	def arg__362 = (val);
	def extend = U64_extend16_s(arg__362);
	def arg__361 = (extend);
	def eff__360 = push_u64(arg__361);
}
// phis: 
</pre>`;
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
window.traces.I64_LOAD16_S.scheduled = `<pre class=''>def flags = imm_readU8();
def arg__372 : byte = 0x40u8;
def arg__369 = u8.&(flags, arg__372);
def arg__370 : byte = 0;
def cond__367 = u8.!=(arg__369, arg__370);
var memindex: u32;
if (cond__367) {
	def memindex__368 = imm_readULEB32();
} else {
	def memindex__374 : u32 = 0u;
}
def cond__353 = m_isMemory64(memindex);
if (cond__353) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16_64(memindex, index, offset);
	def extend = U64_extend16_s(val);
	def eff__354 = push_u64(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16_64(memindex, index, offset);
	def extend = U64_extend16_s(val);
	def eff__360 = push_u64(extend);
}
// phis: 
// phis: memindex <- memindex__368; memindex <- memindex__374; 
def cond__353 = m_isMemory64(memindex);
if (cond__353) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16_64(memindex, index, offset);
	def extend = U64_extend16_s(val);
	def eff__354 = push_u64(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16_64(memindex, index, offset);
	def extend = U64_extend16_s(val);
	def eff__360 = push_u64(extend);
}
// phis: 
</pre>`;
window.traces.I64_LOAD16_S.pretty = `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16_64(memindex, index, offset);
	def extend = U64_extend16_s(val);
	push_u64(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16_64(memindex, index, offset);
	def extend = U64_extend16_s(val);
	push_u64(extend);
}
</pre>`;
window.traces.I64_LOAD16_U = {}
window.traces.I64_LOAD16_U.parsed = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__390 : byte = 0;
def arg__392 : byte = 0x40u8;
def arg__391 = (flags);
def arg__389 = u8.&(arg__391, arg__392);
def cond__387 = u8.!=(arg__389, arg__390);
if (cond__387) {
	def memindex__388 = imm_readULEB32();
}
// phis: memindex <- memindex__388; 
def arg__386 = (memindex);
def cond__375 = m_isMemory64(arg__386);
if (cond__375) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__380 = (offset);
	def arg__379 = (index);
	def arg__378 = (memindex);
	def val = mach_readMemory64_u16_64(arg__378, arg__379, arg__380);
	def arg__377 = (val);
	def eff__376 = push_u64(arg__377);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__385 = (offset);
	def arg__384 = (index);
	def arg__383 = (memindex);
	def val = mach_readMemory32_u16_64(arg__383, arg__384, arg__385);
	def arg__382 = (val);
	def eff__381 = push_u64(arg__382);
}
// phis: 
</pre>`;
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
window.traces.I64_LOAD16_U.scheduled = `<pre class=''>def flags = imm_readU8();
def arg__392 : byte = 0x40u8;
def arg__389 = u8.&(flags, arg__392);
def arg__390 : byte = 0;
def cond__387 = u8.!=(arg__389, arg__390);
var memindex: u32;
if (cond__387) {
	def memindex__388 = imm_readULEB32();
} else {
	def memindex__394 : u32 = 0u;
}
def cond__375 = m_isMemory64(memindex);
if (cond__375) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16_64(memindex, index, offset);
	def eff__376 = push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16_64(memindex, index, offset);
	def eff__381 = push_u64(val);
}
// phis: 
// phis: memindex <- memindex__388; memindex <- memindex__394; 
def cond__375 = m_isMemory64(memindex);
if (cond__375) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16_64(memindex, index, offset);
	def eff__376 = push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16_64(memindex, index, offset);
	def eff__381 = push_u64(val);
}
// phis: 
</pre>`;
window.traces.I64_LOAD16_U.pretty = `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u16_64(memindex, index, offset);
	push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u16_64(memindex, index, offset);
	push_u64(val);
}
</pre>`;
window.traces.I64_LOAD32_S = {}
window.traces.I64_LOAD32_S.parsed = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__412 : byte = 0;
def arg__414 : byte = 0x40u8;
def arg__413 = (flags);
def arg__411 = u8.&(arg__413, arg__414);
def cond__409 = u8.!=(arg__411, arg__412);
if (cond__409) {
	def memindex__410 = imm_readULEB32();
}
// phis: memindex <- memindex__410; 
def arg__408 = (memindex);
def cond__395 = m_isMemory64(arg__408);
if (cond__395) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__401 = (offset);
	def arg__400 = (index);
	def arg__399 = (memindex);
	def val = mach_readMemory64_u32_64(arg__399, arg__400, arg__401);
	def arg__398 = (val);
	def extend = U64_extend32_s(arg__398);
	def arg__397 = (extend);
	def eff__396 = push_u64(arg__397);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__407 = (offset);
	def arg__406 = (index);
	def arg__405 = (memindex);
	def val = mach_readMemory32_u32_64(arg__405, arg__406, arg__407);
	def arg__404 = (val);
	def extend = U64_extend32_s(arg__404);
	def arg__403 = (extend);
	def eff__402 = push_u64(arg__403);
}
// phis: 
</pre>`;
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
window.traces.I64_LOAD32_S.scheduled = `<pre class=''>def flags = imm_readU8();
def arg__414 : byte = 0x40u8;
def arg__411 = u8.&(flags, arg__414);
def arg__412 : byte = 0;
def cond__409 = u8.!=(arg__411, arg__412);
var memindex: u32;
if (cond__409) {
	def memindex__410 = imm_readULEB32();
} else {
	def memindex__416 : u32 = 0u;
}
def cond__395 = m_isMemory64(memindex);
if (cond__395) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u32_64(memindex, index, offset);
	def extend = U64_extend32_s(val);
	def eff__396 = push_u64(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32_64(memindex, index, offset);
	def extend = U64_extend32_s(val);
	def eff__402 = push_u64(extend);
}
// phis: 
// phis: memindex <- memindex__410; memindex <- memindex__416; 
def cond__395 = m_isMemory64(memindex);
if (cond__395) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u32_64(memindex, index, offset);
	def extend = U64_extend32_s(val);
	def eff__396 = push_u64(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32_64(memindex, index, offset);
	def extend = U64_extend32_s(val);
	def eff__402 = push_u64(extend);
}
// phis: 
</pre>`;
window.traces.I64_LOAD32_S.pretty = `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u32_64(memindex, index, offset);
	def extend = U64_extend32_s(val);
	push_u64(extend);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32_64(memindex, index, offset);
	def extend = U64_extend32_s(val);
	push_u64(extend);
}
</pre>`;
window.traces.I64_LOAD32_U = {}
window.traces.I64_LOAD32_U.parsed = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__432 : byte = 0;
def arg__434 : byte = 0x40u8;
def arg__433 = (flags);
def arg__431 = u8.&(arg__433, arg__434);
def cond__429 = u8.!=(arg__431, arg__432);
if (cond__429) {
	def memindex__430 = imm_readULEB32();
}
// phis: memindex <- memindex__430; 
def arg__428 = (memindex);
def cond__417 = m_isMemory64(arg__428);
if (cond__417) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__422 = (offset);
	def arg__421 = (index);
	def arg__420 = (memindex);
	def val = mach_readMemory64_u32_64(arg__420, arg__421, arg__422);
	def arg__419 = (val);
	def eff__418 = push_u64(arg__419);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__427 = (offset);
	def arg__426 = (index);
	def arg__425 = (memindex);
	def val = mach_readMemory32_u32_64(arg__425, arg__426, arg__427);
	def arg__424 = (val);
	def eff__423 = push_u64(arg__424);
}
// phis: 
</pre>`;
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
window.traces.I64_LOAD32_U.scheduled = `<pre class=''>def flags = imm_readU8();
def arg__434 : byte = 0x40u8;
def arg__431 = u8.&(flags, arg__434);
def arg__432 : byte = 0;
def cond__429 = u8.!=(arg__431, arg__432);
var memindex: u32;
if (cond__429) {
	def memindex__430 = imm_readULEB32();
} else {
	def memindex__436 : u32 = 0u;
}
def cond__417 = m_isMemory64(memindex);
if (cond__417) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u32_64(memindex, index, offset);
	def eff__418 = push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32_64(memindex, index, offset);
	def eff__423 = push_u64(val);
}
// phis: 
// phis: memindex <- memindex__430; memindex <- memindex__436; 
def cond__417 = m_isMemory64(memindex);
if (cond__417) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u32_64(memindex, index, offset);
	def eff__418 = push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32_64(memindex, index, offset);
	def eff__423 = push_u64(val);
}
// phis: 
</pre>`;
window.traces.I64_LOAD32_U.pretty = `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def val = mach_readMemory64_u32_64(memindex, index, offset);
	push_u64(val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def val = mach_readMemory32_u32_64(memindex, index, offset);
	push_u64(val);
}
</pre>`;
window.traces.I32_STORE = {}
window.traces.I32_STORE.parsed = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__452 : byte = 0;
def arg__454 : byte = 0x40u8;
def arg__453 = (flags);
def arg__451 = u8.&(arg__453, arg__454);
def cond__449 = u8.!=(arg__451, arg__452);
if (cond__449) {
	def memindex__450 = imm_readULEB32();
}
// phis: memindex <- memindex__450; 
def val = pop_u32();
def arg__448 = (memindex);
def cond__437 = m_isMemory64(arg__448);
if (cond__437) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__442 = (val);
	def arg__441 = (offset);
	def arg__440 = (index);
	def arg__439 = (memindex);
	def eff__438 = mach_writeMemory64_u32(arg__439, arg__440, arg__441, arg__442);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__447 = (val);
	def arg__446 = (offset);
	def arg__445 = (index);
	def arg__444 = (memindex);
	def eff__443 = mach_writeMemory32_u32(arg__444, arg__445, arg__446, arg__447);
}
// phis: 
</pre>`;
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
window.traces.I32_STORE.scheduled = `<pre class=''>def val = pop_u32();
def flags = imm_readU8();
def arg__454 : byte = 0x40u8;
def arg__451 = u8.&(flags, arg__454);
def arg__452 : byte = 0;
def cond__449 = u8.!=(arg__451, arg__452);
var memindex: u32;
if (cond__449) {
	def memindex__450 = imm_readULEB32();
} else {
	def memindex__456 : u32 = 0u;
}
def cond__437 = m_isMemory64(memindex);
if (cond__437) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__438 = mach_writeMemory64_u32(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__443 = mach_writeMemory32_u32(memindex, index, offset, val);
}
// phis: 
// phis: memindex <- memindex__450; memindex <- memindex__456; 
def cond__437 = m_isMemory64(memindex);
if (cond__437) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__438 = mach_writeMemory64_u32(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__443 = mach_writeMemory32_u32(memindex, index, offset, val);
}
// phis: 
</pre>`;
window.traces.I32_STORE.pretty = `<pre class=''>def val = pop_u32();
def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	mach_writeMemory64_u32(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	mach_writeMemory32_u32(memindex, index, offset, val);
}
</pre>`;
window.traces.I64_STORE = {}
window.traces.I64_STORE.parsed = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__472 : byte = 0;
def arg__474 : byte = 0x40u8;
def arg__473 = (flags);
def arg__471 = u8.&(arg__473, arg__474);
def cond__469 = u8.!=(arg__471, arg__472);
if (cond__469) {
	def memindex__470 = imm_readULEB32();
}
// phis: memindex <- memindex__470; 
def val = pop_u64();
def arg__468 = (memindex);
def cond__457 = m_isMemory64(arg__468);
if (cond__457) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__462 = (val);
	def arg__461 = (offset);
	def arg__460 = (index);
	def arg__459 = (memindex);
	def eff__458 = mach_writeMemory64_u64(arg__459, arg__460, arg__461, arg__462);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__467 = (val);
	def arg__466 = (offset);
	def arg__465 = (index);
	def arg__464 = (memindex);
	def eff__463 = mach_writeMemory32_u64(arg__464, arg__465, arg__466, arg__467);
}
// phis: 
</pre>`;
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
window.traces.I64_STORE.scheduled = `<pre class=''>def val = pop_u64();
def flags = imm_readU8();
def arg__474 : byte = 0x40u8;
def arg__471 = u8.&(flags, arg__474);
def arg__472 : byte = 0;
def cond__469 = u8.!=(arg__471, arg__472);
var memindex: u32;
if (cond__469) {
	def memindex__470 = imm_readULEB32();
} else {
	def memindex__476 : u32 = 0u;
}
def cond__457 = m_isMemory64(memindex);
if (cond__457) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__458 = mach_writeMemory64_u64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__463 = mach_writeMemory32_u64(memindex, index, offset, val);
}
// phis: 
// phis: memindex <- memindex__470; memindex <- memindex__476; 
def cond__457 = m_isMemory64(memindex);
if (cond__457) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__458 = mach_writeMemory64_u64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__463 = mach_writeMemory32_u64(memindex, index, offset, val);
}
// phis: 
</pre>`;
window.traces.I64_STORE.pretty = `<pre class=''>def val = pop_u64();
def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	mach_writeMemory64_u64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	mach_writeMemory32_u64(memindex, index, offset, val);
}
</pre>`;
window.traces.F32_STORE = {}
window.traces.F32_STORE.parsed = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__492 : byte = 0;
def arg__494 : byte = 0x40u8;
def arg__493 = (flags);
def arg__491 = u8.&(arg__493, arg__494);
def cond__489 = u8.!=(arg__491, arg__492);
if (cond__489) {
	def memindex__490 = imm_readULEB32();
}
// phis: memindex <- memindex__490; 
def val = pop_f32();
def arg__488 = (memindex);
def cond__477 = m_isMemory64(arg__488);
if (cond__477) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__482 = (val);
	def arg__481 = (offset);
	def arg__480 = (index);
	def arg__479 = (memindex);
	def eff__478 = mach_writeMemory64_f32(arg__479, arg__480, arg__481, arg__482);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__487 = (val);
	def arg__486 = (offset);
	def arg__485 = (index);
	def arg__484 = (memindex);
	def eff__483 = mach_writeMemory32_f32(arg__484, arg__485, arg__486, arg__487);
}
// phis: 
</pre>`;
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
window.traces.F32_STORE.scheduled = `<pre class=''>def val = pop_f32();
def flags = imm_readU8();
def arg__494 : byte = 0x40u8;
def arg__491 = u8.&(flags, arg__494);
def arg__492 : byte = 0;
def cond__489 = u8.!=(arg__491, arg__492);
var memindex: u32;
if (cond__489) {
	def memindex__490 = imm_readULEB32();
} else {
	def memindex__496 : u32 = 0u;
}
def cond__477 = m_isMemory64(memindex);
if (cond__477) {
	def offset = imm_readULEB64();
	def index = pop_u64();
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
}
// phis: 
// phis: memindex <- memindex__490; memindex <- memindex__496; 
def cond__477 = m_isMemory64(memindex);
if (cond__477) {
	def offset = imm_readULEB64();
	def index = pop_u64();
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
}
// phis: 
</pre>`;
window.traces.F32_STORE.pretty = `<pre class=''>def val = pop_f32();
def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
}
</pre>`;
window.traces.F64_STORE = {}
window.traces.F64_STORE.parsed = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__512 : byte = 0;
def arg__514 : byte = 0x40u8;
def arg__513 = (flags);
def arg__511 = u8.&(arg__513, arg__514);
def cond__509 = u8.!=(arg__511, arg__512);
if (cond__509) {
	def memindex__510 = imm_readULEB32();
}
// phis: memindex <- memindex__510; 
def val = pop_f64();
def arg__508 = (memindex);
def cond__497 = m_isMemory64(arg__508);
if (cond__497) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__502 = (val);
	def arg__501 = (offset);
	def arg__500 = (index);
	def arg__499 = (memindex);
	def eff__498 = mach_writeMemory64_f64(arg__499, arg__500, arg__501, arg__502);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__507 = (val);
	def arg__506 = (offset);
	def arg__505 = (index);
	def arg__504 = (memindex);
	def eff__503 = mach_writeMemory32_f64(arg__504, arg__505, arg__506, arg__507);
}
// phis: 
</pre>`;
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
window.traces.F64_STORE.scheduled = `<pre class=''>def val = pop_f64();
def flags = imm_readU8();
def arg__514 : byte = 0x40u8;
def arg__511 = u8.&(flags, arg__514);
def arg__512 : byte = 0;
def cond__509 = u8.!=(arg__511, arg__512);
var memindex: u32;
if (cond__509) {
	def memindex__510 = imm_readULEB32();
} else {
	def memindex__516 : u32 = 0u;
}
def cond__497 = m_isMemory64(memindex);
if (cond__497) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__498 = mach_writeMemory64_f64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__503 = mach_writeMemory32_f64(memindex, index, offset, val);
}
// phis: 
// phis: memindex <- memindex__510; memindex <- memindex__516; 
def cond__497 = m_isMemory64(memindex);
if (cond__497) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__498 = mach_writeMemory64_f64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__503 = mach_writeMemory32_f64(memindex, index, offset, val);
}
// phis: 
</pre>`;
window.traces.F64_STORE.pretty = `<pre class=''>def val = pop_f64();
def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	mach_writeMemory64_f64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	mach_writeMemory32_f64(memindex, index, offset, val);
}
</pre>`;
window.traces.I32_STORE8 = {}
window.traces.I32_STORE8.parsed = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__532 : byte = 0;
def arg__534 : byte = 0x40u8;
def arg__533 = (flags);
def arg__531 = u8.&(arg__533, arg__534);
def cond__529 = u8.!=(arg__531, arg__532);
if (cond__529) {
	def memindex__530 = imm_readULEB32();
}
// phis: memindex <- memindex__530; 
def val = pop_u32();
def arg__528 = (memindex);
def cond__517 = m_isMemory64(arg__528);
if (cond__517) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__522 = (val);
	def arg__521 = (offset);
	def arg__520 = (index);
	def arg__519 = (memindex);
	def eff__518 = mach_writeMemory64_u8(arg__519, arg__520, arg__521, arg__522);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__527 = (val);
	def arg__526 = (offset);
	def arg__525 = (index);
	def arg__524 = (memindex);
	def eff__523 = mach_writeMemory32_u8(arg__524, arg__525, arg__526, arg__527);
}
// phis: 
</pre>`;
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
window.traces.I32_STORE8.scheduled = `<pre class=''>def val = pop_u32();
def flags = imm_readU8();
def arg__534 : byte = 0x40u8;
def arg__531 = u8.&(flags, arg__534);
def arg__532 : byte = 0;
def cond__529 = u8.!=(arg__531, arg__532);
var memindex: u32;
if (cond__529) {
	def memindex__530 = imm_readULEB32();
} else {
	def memindex__536 : u32 = 0u;
}
def cond__517 = m_isMemory64(memindex);
if (cond__517) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__518 = mach_writeMemory64_u8(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__523 = mach_writeMemory32_u8(memindex, index, offset, val);
}
// phis: 
// phis: memindex <- memindex__530; memindex <- memindex__536; 
def cond__517 = m_isMemory64(memindex);
if (cond__517) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__518 = mach_writeMemory64_u8(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__523 = mach_writeMemory32_u8(memindex, index, offset, val);
}
// phis: 
</pre>`;
window.traces.I32_STORE8.pretty = `<pre class=''>def val = pop_u32();
def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	mach_writeMemory64_u8(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	mach_writeMemory32_u8(memindex, index, offset, val);
}
</pre>`;
window.traces.I32_STORE16 = {}
window.traces.I32_STORE16.parsed = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__552 : byte = 0;
def arg__554 : byte = 0x40u8;
def arg__553 = (flags);
def arg__551 = u8.&(arg__553, arg__554);
def cond__549 = u8.!=(arg__551, arg__552);
if (cond__549) {
	def memindex__550 = imm_readULEB32();
}
// phis: memindex <- memindex__550; 
def val = pop_u32();
def arg__548 = (memindex);
def cond__537 = m_isMemory64(arg__548);
if (cond__537) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__542 = (val);
	def arg__541 = (offset);
	def arg__540 = (index);
	def arg__539 = (memindex);
	def eff__538 = mach_writeMemory64_u16(arg__539, arg__540, arg__541, arg__542);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__547 = (val);
	def arg__546 = (offset);
	def arg__545 = (index);
	def arg__544 = (memindex);
	def eff__543 = mach_writeMemory32_u16(arg__544, arg__545, arg__546, arg__547);
}
// phis: 
</pre>`;
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
window.traces.I32_STORE16.scheduled = `<pre class=''>def val = pop_u32();
def flags = imm_readU8();
def arg__554 : byte = 0x40u8;
def arg__551 = u8.&(flags, arg__554);
def arg__552 : byte = 0;
def cond__549 = u8.!=(arg__551, arg__552);
var memindex: u32;
if (cond__549) {
	def memindex__550 = imm_readULEB32();
} else {
	def memindex__556 : u32 = 0u;
}
def cond__537 = m_isMemory64(memindex);
if (cond__537) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__538 = mach_writeMemory64_u16(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__543 = mach_writeMemory32_u16(memindex, index, offset, val);
}
// phis: 
// phis: memindex <- memindex__550; memindex <- memindex__556; 
def cond__537 = m_isMemory64(memindex);
if (cond__537) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__538 = mach_writeMemory64_u16(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__543 = mach_writeMemory32_u16(memindex, index, offset, val);
}
// phis: 
</pre>`;
window.traces.I32_STORE16.pretty = `<pre class=''>def val = pop_u32();
def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	mach_writeMemory64_u16(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	mach_writeMemory32_u16(memindex, index, offset, val);
}
</pre>`;
window.traces.I64_STORE8 = {}
window.traces.I64_STORE8.parsed = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__572 : byte = 0;
def arg__574 : byte = 0x40u8;
def arg__573 = (flags);
def arg__571 = u8.&(arg__573, arg__574);
def cond__569 = u8.!=(arg__571, arg__572);
if (cond__569) {
	def memindex__570 = imm_readULEB32();
}
// phis: memindex <- memindex__570; 
def val = pop_u64();
def arg__568 = (memindex);
def cond__557 = m_isMemory64(arg__568);
if (cond__557) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__562 = (val);
	def arg__561 = (offset);
	def arg__560 = (index);
	def arg__559 = (memindex);
	def eff__558 = mach_writeMemory64_u8_64(arg__559, arg__560, arg__561, arg__562);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__567 = (val);
	def arg__566 = (offset);
	def arg__565 = (index);
	def arg__564 = (memindex);
	def eff__563 = mach_writeMemory32_u8_64(arg__564, arg__565, arg__566, arg__567);
}
// phis: 
</pre>`;
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
window.traces.I64_STORE8.scheduled = `<pre class=''>def val = pop_u64();
def flags = imm_readU8();
def arg__574 : byte = 0x40u8;
def arg__571 = u8.&(flags, arg__574);
def arg__572 : byte = 0;
def cond__569 = u8.!=(arg__571, arg__572);
var memindex: u32;
if (cond__569) {
	def memindex__570 = imm_readULEB32();
} else {
	def memindex__576 : u32 = 0u;
}
def cond__557 = m_isMemory64(memindex);
if (cond__557) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__558 = mach_writeMemory64_u8_64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__563 = mach_writeMemory32_u8_64(memindex, index, offset, val);
}
// phis: 
// phis: memindex <- memindex__570; memindex <- memindex__576; 
def cond__557 = m_isMemory64(memindex);
if (cond__557) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__558 = mach_writeMemory64_u8_64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__563 = mach_writeMemory32_u8_64(memindex, index, offset, val);
}
// phis: 
</pre>`;
window.traces.I64_STORE8.pretty = `<pre class=''>def val = pop_u64();
def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	mach_writeMemory64_u8_64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	mach_writeMemory32_u8_64(memindex, index, offset, val);
}
</pre>`;
window.traces.I64_STORE16 = {}
window.traces.I64_STORE16.parsed = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__592 : byte = 0;
def arg__594 : byte = 0x40u8;
def arg__593 = (flags);
def arg__591 = u8.&(arg__593, arg__594);
def cond__589 = u8.!=(arg__591, arg__592);
if (cond__589) {
	def memindex__590 = imm_readULEB32();
}
// phis: memindex <- memindex__590; 
def val = pop_u64();
def arg__588 = (memindex);
def cond__577 = m_isMemory64(arg__588);
if (cond__577) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__582 = (val);
	def arg__581 = (offset);
	def arg__580 = (index);
	def arg__579 = (memindex);
	def eff__578 = mach_writeMemory64_u16_64(arg__579, arg__580, arg__581, arg__582);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__587 = (val);
	def arg__586 = (offset);
	def arg__585 = (index);
	def arg__584 = (memindex);
	def eff__583 = mach_writeMemory32_u16_64(arg__584, arg__585, arg__586, arg__587);
}
// phis: 
</pre>`;
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
window.traces.I64_STORE16.scheduled = `<pre class=''>def val = pop_u64();
def flags = imm_readU8();
def arg__594 : byte = 0x40u8;
def arg__591 = u8.&(flags, arg__594);
def arg__592 : byte = 0;
def cond__589 = u8.!=(arg__591, arg__592);
var memindex: u32;
if (cond__589) {
	def memindex__590 = imm_readULEB32();
} else {
	def memindex__596 : u32 = 0u;
}
def cond__577 = m_isMemory64(memindex);
if (cond__577) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__578 = mach_writeMemory64_u16_64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__583 = mach_writeMemory32_u16_64(memindex, index, offset, val);
}
// phis: 
// phis: memindex <- memindex__590; memindex <- memindex__596; 
def cond__577 = m_isMemory64(memindex);
if (cond__577) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__578 = mach_writeMemory64_u16_64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__583 = mach_writeMemory32_u16_64(memindex, index, offset, val);
}
// phis: 
</pre>`;
window.traces.I64_STORE16.pretty = `<pre class=''>def val = pop_u64();
def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	mach_writeMemory64_u16_64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	mach_writeMemory32_u16_64(memindex, index, offset, val);
}
</pre>`;
window.traces.I64_STORE32 = {}
window.traces.I64_STORE32.parsed = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__612 : byte = 0;
def arg__614 : byte = 0x40u8;
def arg__613 = (flags);
def arg__611 = u8.&(arg__613, arg__614);
def cond__609 = u8.!=(arg__611, arg__612);
if (cond__609) {
	def memindex__610 = imm_readULEB32();
}
// phis: memindex <- memindex__610; 
def val = pop_u64();
def arg__608 = (memindex);
def cond__597 = m_isMemory64(arg__608);
if (cond__597) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def arg__602 = (val);
	def arg__601 = (offset);
	def arg__600 = (index);
	def arg__599 = (memindex);
	def eff__598 = mach_writeMemory64_u32_64(arg__599, arg__600, arg__601, arg__602);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def arg__607 = (val);
	def arg__606 = (offset);
	def arg__605 = (index);
	def arg__604 = (memindex);
	def eff__603 = mach_writeMemory32_u32_64(arg__604, arg__605, arg__606, arg__607);
}
// phis: 
</pre>`;
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
window.traces.I64_STORE32.scheduled = `<pre class=''>def val = pop_u64();
def flags = imm_readU8();
def arg__614 : byte = 0x40u8;
def arg__611 = u8.&(flags, arg__614);
def arg__612 : byte = 0;
def cond__609 = u8.!=(arg__611, arg__612);
var memindex: u32;
if (cond__609) {
	def memindex__610 = imm_readULEB32();
} else {
	def memindex__616 : u32 = 0u;
}
def cond__597 = m_isMemory64(memindex);
if (cond__597) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__598 = mach_writeMemory64_u32_64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__603 = mach_writeMemory32_u32_64(memindex, index, offset, val);
}
// phis: 
// phis: memindex <- memindex__610; memindex <- memindex__616; 
def cond__597 = m_isMemory64(memindex);
if (cond__597) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	def eff__598 = mach_writeMemory64_u32_64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	def eff__603 = mach_writeMemory32_u32_64(memindex, index, offset, val);
}
// phis: 
</pre>`;
window.traces.I64_STORE32.pretty = `<pre class=''>def val = pop_u64();
def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def offset = imm_readULEB64();
	def index = pop_u64();
	mach_writeMemory64_u32_64(memindex, index, offset, val);
} else {
	def offset = imm_readULEB32();
	def index = pop_u32();
	mach_writeMemory32_u32_64(memindex, index, offset, val);
}
</pre>`;
window.traces.MEMORY_SIZE = {}
window.traces.MEMORY_SIZE.parsed = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__628 : byte = 0;
def arg__630 : byte = 0x40u8;
def arg__629 = (flags);
def arg__627 = u8.&(arg__629, arg__630);
def cond__625 = u8.!=(arg__627, arg__628);
if (cond__625) {
	def memindex__626 = imm_readULEB32();
}
// phis: memindex <- memindex__626; 
def arg__624 = (memindex);
def cond__617 = m_isMemory64(arg__624);
if (cond__617) {
	def arg__620 = (memindex);
	def r = mach_memorySize64(arg__620);
	def arg__619 = (r);
	def eff__618 = push_u64(arg__619);
} else {
	def arg__623 = (memindex);
	def r = mach_memorySize32(arg__623);
	def arg__622 = (r);
	def eff__621 = push_u32(arg__622);
}
// phis: 
</pre>`;
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
window.traces.MEMORY_SIZE.scheduled = `<pre class=''>def flags = imm_readU8();
def arg__630 : byte = 0x40u8;
def arg__627 = u8.&(flags, arg__630);
def arg__628 : byte = 0;
def cond__625 = u8.!=(arg__627, arg__628);
var memindex: u32;
if (cond__625) {
	def memindex__626 = imm_readULEB32();
} else {
	def memindex__632 : u32 = 0u;
}
def cond__617 = m_isMemory64(memindex);
if (cond__617) {
	def r = mach_memorySize64(memindex);
	def eff__618 = push_u64(r);
} else {
	def r = mach_memorySize32(memindex);
	def eff__621 = push_u32(r);
}
// phis: 
// phis: memindex <- memindex__626; memindex <- memindex__632; 
def cond__617 = m_isMemory64(memindex);
if (cond__617) {
	def r = mach_memorySize64(memindex);
	def eff__618 = push_u64(r);
} else {
	def r = mach_memorySize32(memindex);
	def eff__621 = push_u32(r);
}
// phis: 
</pre>`;
window.traces.MEMORY_SIZE.pretty = `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def r = mach_memorySize64(memindex);
	push_u64(r);
} else {
	def r = mach_memorySize32(memindex);
	push_u32(r);
}
</pre>`;
window.traces.MEMORY_GROW = {}
window.traces.MEMORY_GROW.parsed = `<pre class=''>def flags = imm_readU8();
def memindex : u32 = 0u;
def arg__646 : byte = 0;
def arg__648 : byte = 0x40u8;
def arg__647 = (flags);
def arg__645 = u8.&(arg__647, arg__648);
def cond__643 = u8.!=(arg__645, arg__646);
if (cond__643) {
	def memindex__644 = imm_readULEB32();
}
// phis: memindex <- memindex__644; 
def arg__642 = (memindex);
def cond__633 = m_isMemory64(arg__642);
if (cond__633) {
	def val = pop_u64();
	def arg__637 = (val);
	def arg__636 = (memindex);
	def r = mach_memoryGrow64(arg__636, arg__637);
	def arg__635 = (r);
	def eff__634 = push_u64(arg__635);
} else {
	def val = pop_u32();
	def arg__641 = (val);
	def arg__640 = (memindex);
	def r = mach_memoryGrow32(arg__640, arg__641);
	def arg__639 = (r);
	def eff__638 = push_u32(arg__639);
}
// phis: 
</pre>`;
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
window.traces.MEMORY_GROW.scheduled = `<pre class=''>def flags = imm_readU8();
def arg__648 : byte = 0x40u8;
def arg__645 = u8.&(flags, arg__648);
def arg__646 : byte = 0;
def cond__643 = u8.!=(arg__645, arg__646);
var memindex: u32;
if (cond__643) {
	def memindex__644 = imm_readULEB32();
} else {
	def memindex__650 : u32 = 0u;
}
def cond__633 = m_isMemory64(memindex);
if (cond__633) {
	def val = pop_u64();
	def r = mach_memoryGrow64(memindex, val);
	def eff__634 = push_u64(r);
} else {
	def val = pop_u32();
	def r = mach_memoryGrow32(memindex, val);
	def eff__638 = push_u32(r);
}
// phis: 
// phis: memindex <- memindex__644; memindex <- memindex__650; 
def cond__633 = m_isMemory64(memindex);
if (cond__633) {
	def val = pop_u64();
	def r = mach_memoryGrow64(memindex, val);
	def eff__634 = push_u64(r);
} else {
	def val = pop_u32();
	def r = mach_memoryGrow32(memindex, val);
	def eff__638 = push_u32(r);
}
// phis: 
</pre>`;
window.traces.MEMORY_GROW.pretty = `<pre class=''>def flags = imm_readU8();
var memindex: u32;
if (u8.!=(u8.&(flags, 0x40u8), 0)) {
	memindex = imm_readULEB32();
} else {
	memindex = 0u;
}
def cond = m_isMemory64(memindex);
if (cond) {
	def val = pop_u64();
	def r = mach_memoryGrow64(memindex, val);
	push_u64(r);
} else {
	def val = pop_u32();
	def r = mach_memoryGrow32(memindex, val);
	push_u32(r);
}
</pre>`;
window.traces.I32_CONST = {}
window.traces.I32_CONST.parsed = `<pre class=''>def x = imm_readILEB32();
def arg__652 = (x);
def eff__651 = push_u32(arg__652);
</pre>`;
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
window.traces.I32_CONST.scheduled = `<pre class=''>def x = imm_readILEB32();
def abs__653 = rtcast_u32(x);
def eff__651 = push_u32(abs__653);
</pre>`;
window.traces.I32_CONST.pretty = `<pre class=''>def x = imm_readILEB32();
push_u32(rtcast_u32(x));
</pre>`;
window.traces.I64_CONST = {}
window.traces.I64_CONST.parsed = `<pre class=''>def x = imm_readILEB64();
def arg__655 = (x);
def eff__654 = push_u64(arg__655);
</pre>`;
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
window.traces.I64_CONST.scheduled = `<pre class=''>def x = imm_readILEB64();
def abs__656 = rtcast_u64(x);
def eff__654 = push_u64(abs__656);
</pre>`;
window.traces.I64_CONST.pretty = `<pre class=''>def x = imm_readILEB64();
push_u64(rtcast_u64(x));
</pre>`;
window.traces.F32_CONST = {}
window.traces.F32_CONST.parsed = `<pre class=''>def x = imm_readU32();
def arg__659 = (x);
def arg__658 = f32_reinterpret_u32(arg__659);
def eff__657 = push_f32(arg__658);
</pre>`;
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
window.traces.F32_CONST.scheduled = `<pre class=''>def x = imm_readU32();
def abs__660 = rtcast_u32(x);
def arg__658 = f32_reinterpret_u32(abs__660);
def eff__657 = push_f32(arg__658);
</pre>`;
window.traces.F32_CONST.pretty = `<pre class=''>def x = imm_readU32();
def arg = f32_reinterpret_u32(rtcast_u32(x));
push_f32(arg);
</pre>`;
window.traces.F64_CONST = {}
window.traces.F64_CONST.parsed = `<pre class=''>def x = imm_readU64();
def arg__663 = (x);
def arg__662 = f64_reinterpret_u64(arg__663);
def eff__661 = push_f64(arg__662);
</pre>`;
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
window.traces.F64_CONST.scheduled = `<pre class=''>def x = imm_readU64();
def abs__664 = rtcast_u64(x);
def arg__662 = f64_reinterpret_u64(abs__664);
def eff__661 = push_f64(arg__662);
</pre>`;
window.traces.F64_CONST.pretty = `<pre class=''>def x = imm_readU64();
def arg = f64_reinterpret_u64(rtcast_u64(x));
push_f64(arg);
</pre>`;
window.traces.I32_EQZ = {}
window.traces.I32_EQZ.parsed = `<pre class=''>def a = pop_u32();
def arg__671 : u32 = 0;
def arg__670 = (a);
def cond__665 = u32.==(arg__670, arg__671);
if (cond__665) {
	def arg__667 : u32 = 1;
	def eff__666 = push_u32(arg__667);
} else {
	def arg__669 : u32 = 0;
	def eff__668 = push_u32(arg__669);
}
// phis: 
</pre>`;
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
window.traces.I32_EQZ.scheduled = `<pre class=''>def arg__667 : u32 = 1;
def abs__673 = rtcast_u32(arg__667);
def a = pop_u32();
def eff_push__679 = push_u32(abs__673);
</pre>`;
window.traces.I32_EQZ.pretty = `<pre class=''>def a = pop_u32();
push_u32(rtcast_u32(1));
</pre>`;
window.traces.I32_EQ = {}
window.traces.I32_EQ.parsed = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__686 = (b);
def arg__685 = (a);
def cond__680 = u32.==(arg__685, arg__686);
if (cond__680) {
	def arg__682 : u32 = 1;
	def eff__681 = push_u32(arg__682);
} else {
	def arg__684 : u32 = 0;
	def eff__683 = push_u32(arg__684);
}
// phis: 
</pre>`;
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
window.traces.I32_EQ.scheduled = `<pre class=''>def arg__682 : u32 = 1;
def abs__687 = rtcast_u32(arg__682);
def b = pop_u32();
def a = pop_u32();
def eff_push__693 = push_u32(abs__687);
</pre>`;
window.traces.I32_EQ.pretty = `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(rtcast_u32(1));
</pre>`;
window.traces.I32_NE = {}
window.traces.I32_NE.parsed = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__700 = (b);
def arg__699 = (a);
def cond__694 = u32.!=(arg__699, arg__700);
if (cond__694) {
	def arg__696 : u32 = 1;
	def eff__695 = push_u32(arg__696);
} else {
	def arg__698 : u32 = 0;
	def eff__697 = push_u32(arg__698);
}
// phis: 
</pre>`;
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
window.traces.I32_NE.scheduled = `<pre class=''>def arg__696 : u32 = 1;
def abs__701 = rtcast_u32(arg__696);
def b = pop_u32();
def a = pop_u32();
def eff_push__707 = push_u32(abs__701);
</pre>`;
window.traces.I32_NE.pretty = `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(rtcast_u32(1));
</pre>`;
window.traces.I32_LT_S = {}
window.traces.I32_LT_S.parsed = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__714 = (b);
def arg__713 = (a);
def cond__708 = U32_lt_s(arg__713, arg__714);
if (cond__708) {
	def arg__710 : u32 = 1;
	def eff__709 = push_u32(arg__710);
} else {
	def arg__712 : u32 = 0;
	def eff__711 = push_u32(arg__712);
}
// phis: 
</pre>`;
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
window.traces.I32_LT_S.scheduled = `<pre class=''>def arg__710 : u32 = 1;
def abs__715 = rtcast_u32(arg__710);
def b = pop_u32();
def a = pop_u32();
def eff_push__721 = push_u32(abs__715);
</pre>`;
window.traces.I32_LT_S.pretty = `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(rtcast_u32(1));
</pre>`;
window.traces.I32_LT_U = {}
window.traces.I32_LT_U.parsed = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__728 = (b);
def arg__727 = (a);
def cond__722 = u32.<(arg__727, arg__728);
if (cond__722) {
	def arg__724 : u32 = 1;
	def eff__723 = push_u32(arg__724);
} else {
	def arg__726 : u32 = 0;
	def eff__725 = push_u32(arg__726);
}
// phis: 
</pre>`;
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
window.traces.I32_LT_U.scheduled = `<pre class=''>def arg__724 : u32 = 1;
def abs__729 = rtcast_u32(arg__724);
def b = pop_u32();
def a = pop_u32();
def eff_push__735 = push_u32(abs__729);
</pre>`;
window.traces.I32_LT_U.pretty = `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(rtcast_u32(1));
</pre>`;
window.traces.I32_GT_S = {}
window.traces.I32_GT_S.parsed = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__742 = (b);
def arg__741 = (a);
def cond__736 = U32_gt_s(arg__741, arg__742);
if (cond__736) {
	def arg__738 : u32 = 1;
	def eff__737 = push_u32(arg__738);
} else {
	def arg__740 : u32 = 0;
	def eff__739 = push_u32(arg__740);
}
// phis: 
</pre>`;
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
window.traces.I32_GT_S.scheduled = `<pre class=''>def arg__738 : u32 = 1;
def abs__743 = rtcast_u32(arg__738);
def b = pop_u32();
def a = pop_u32();
def eff_push__749 = push_u32(abs__743);
</pre>`;
window.traces.I32_GT_S.pretty = `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(rtcast_u32(1));
</pre>`;
window.traces.I32_GT_U = {}
window.traces.I32_GT_U.parsed = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__756 = (b);
def arg__755 = (a);
def cond__750 = u32.>(arg__755, arg__756);
if (cond__750) {
	def arg__752 : u32 = 1;
	def eff__751 = push_u32(arg__752);
} else {
	def arg__754 : u32 = 0;
	def eff__753 = push_u32(arg__754);
}
// phis: 
</pre>`;
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
window.traces.I32_GT_U.scheduled = `<pre class=''>def arg__752 : u32 = 1;
def abs__757 = rtcast_u32(arg__752);
def b = pop_u32();
def a = pop_u32();
def eff_push__763 = push_u32(abs__757);
</pre>`;
window.traces.I32_GT_U.pretty = `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(rtcast_u32(1));
</pre>`;
window.traces.I32_LE_S = {}
window.traces.I32_LE_S.parsed = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__770 = (b);
def arg__769 = (a);
def cond__764 = U32_le_s(arg__769, arg__770);
if (cond__764) {
	def arg__766 : u32 = 1;
	def eff__765 = push_u32(arg__766);
} else {
	def arg__768 : u32 = 0;
	def eff__767 = push_u32(arg__768);
}
// phis: 
</pre>`;
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
window.traces.I32_LE_S.scheduled = `<pre class=''>def arg__766 : u32 = 1;
def abs__771 = rtcast_u32(arg__766);
def b = pop_u32();
def a = pop_u32();
def eff_push__777 = push_u32(abs__771);
</pre>`;
window.traces.I32_LE_S.pretty = `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(rtcast_u32(1));
</pre>`;
window.traces.I32_LE_U = {}
window.traces.I32_LE_U.parsed = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__784 = (b);
def arg__783 = (a);
def cond__778 = u32.<=(arg__783, arg__784);
if (cond__778) {
	def arg__780 : u32 = 1;
	def eff__779 = push_u32(arg__780);
} else {
	def arg__782 : u32 = 0;
	def eff__781 = push_u32(arg__782);
}
// phis: 
</pre>`;
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
window.traces.I32_LE_U.scheduled = `<pre class=''>def arg__780 : u32 = 1;
def abs__785 = rtcast_u32(arg__780);
def b = pop_u32();
def a = pop_u32();
def eff_push__791 = push_u32(abs__785);
</pre>`;
window.traces.I32_LE_U.pretty = `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(rtcast_u32(1));
</pre>`;
window.traces.I32_GE_S = {}
window.traces.I32_GE_S.parsed = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__798 = (b);
def arg__797 = (a);
def cond__792 = U32_ge_s(arg__797, arg__798);
if (cond__792) {
	def arg__794 : u32 = 1;
	def eff__793 = push_u32(arg__794);
} else {
	def arg__796 : u32 = 0;
	def eff__795 = push_u32(arg__796);
}
// phis: 
</pre>`;
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
window.traces.I32_GE_S.scheduled = `<pre class=''>def arg__794 : u32 = 1;
def abs__799 = rtcast_u32(arg__794);
def b = pop_u32();
def a = pop_u32();
def eff_push__805 = push_u32(abs__799);
</pre>`;
window.traces.I32_GE_S.pretty = `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(rtcast_u32(1));
</pre>`;
window.traces.I32_GE_U = {}
window.traces.I32_GE_U.parsed = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__812 = (b);
def arg__811 = (a);
def cond__806 = u32.>=(arg__811, arg__812);
if (cond__806) {
	def arg__808 : u32 = 1;
	def eff__807 = push_u32(arg__808);
} else {
	def arg__810 : u32 = 0;
	def eff__809 = push_u32(arg__810);
}
// phis: 
</pre>`;
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
window.traces.I32_GE_U.scheduled = `<pre class=''>def arg__808 : u32 = 1;
def abs__813 = rtcast_u32(arg__808);
def b = pop_u32();
def a = pop_u32();
def eff_push__819 = push_u32(abs__813);
</pre>`;
window.traces.I32_GE_U.pretty = `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(rtcast_u32(1));
</pre>`;
window.traces.I64_EQZ = {}
window.traces.I64_EQZ.parsed = `<pre class=''>def a = pop_u64();
def arg__826 : u64 = 0;
def arg__825 = (a);
def cond__820 = u64.==(arg__825, arg__826);
if (cond__820) {
	def arg__822 : u32 = 1;
	def eff__821 = push_u32(arg__822);
} else {
	def arg__824 : u32 = 0;
	def eff__823 = push_u32(arg__824);
}
// phis: 
</pre>`;
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
window.traces.I64_EQZ.scheduled = `<pre class=''>def arg__822 : u32 = 1;
def abs__828 = rtcast_u32(arg__822);
def a = pop_u64();
def eff_push__834 = push_u32(abs__828);
</pre>`;
window.traces.I64_EQZ.pretty = `<pre class=''>def a = pop_u64();
push_u32(rtcast_u32(1));
</pre>`;
window.traces.I64_EQ = {}
window.traces.I64_EQ.parsed = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def arg__841 = (b);
def arg__840 = (a);
def cond__835 = u64.==(arg__840, arg__841);
if (cond__835) {
	def arg__837 : u32 = 1;
	def eff__836 = push_u32(arg__837);
} else {
	def arg__839 : u32 = 0;
	def eff__838 = push_u32(arg__839);
}
// phis: 
</pre>`;
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
window.traces.I64_EQ.scheduled = `<pre class=''>def arg__837 : u32 = 1;
def abs__842 = rtcast_u32(arg__837);
def b = pop_u64();
def a = pop_u64();
def eff_push__848 = push_u32(abs__842);
</pre>`;
window.traces.I64_EQ.pretty = `<pre class=''>def b = pop_u64();
def a = pop_u64();
push_u32(rtcast_u32(1));
</pre>`;
window.traces.I64_NE = {}
window.traces.I64_NE.parsed = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def arg__855 = (b);
def arg__854 = (a);
def cond__849 = u64.!=(arg__854, arg__855);
if (cond__849) {
	def arg__851 : u32 = 1;
	def eff__850 = push_u32(arg__851);
} else {
	def arg__853 : u32 = 0;
	def eff__852 = push_u32(arg__853);
}
// phis: 
</pre>`;
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
window.traces.I64_NE.scheduled = `<pre class=''>def arg__851 : u32 = 1;
def abs__856 = rtcast_u32(arg__851);
def b = pop_u64();
def a = pop_u64();
def eff_push__862 = push_u32(abs__856);
</pre>`;
window.traces.I64_NE.pretty = `<pre class=''>def b = pop_u64();
def a = pop_u64();
push_u32(rtcast_u32(1));
</pre>`;
window.traces.I64_LT_S = {}
window.traces.I64_LT_S.parsed = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def arg__869 = (b);
def arg__868 = (a);
def cond__863 = U64_lt_s(arg__868, arg__869);
if (cond__863) {
	def arg__865 : u32 = 1;
	def eff__864 = push_u32(arg__865);
} else {
	def arg__867 : u32 = 0;
	def eff__866 = push_u32(arg__867);
}
// phis: 
</pre>`;
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
window.traces.I64_LT_S.scheduled = `<pre class=''>def arg__865 : u32 = 1;
def abs__870 = rtcast_u32(arg__865);
def b = pop_u64();
def a = pop_u64();
def eff_push__876 = push_u32(abs__870);
</pre>`;
window.traces.I64_LT_S.pretty = `<pre class=''>def b = pop_u64();
def a = pop_u64();
push_u32(rtcast_u32(1));
</pre>`;
window.traces.I64_LT_U = {}
window.traces.I64_LT_U.parsed = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def arg__883 = (b);
def arg__882 = (a);
def cond__877 = u64.<(arg__882, arg__883);
if (cond__877) {
	def arg__879 : u32 = 1;
	def eff__878 = push_u32(arg__879);
} else {
	def arg__881 : u32 = 0;
	def eff__880 = push_u32(arg__881);
}
// phis: 
</pre>`;
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
window.traces.I64_LT_U.scheduled = `<pre class=''>def arg__879 : u32 = 1;
def abs__884 = rtcast_u32(arg__879);
def b = pop_u64();
def a = pop_u64();
def eff_push__890 = push_u32(abs__884);
</pre>`;
window.traces.I64_LT_U.pretty = `<pre class=''>def b = pop_u64();
def a = pop_u64();
push_u32(rtcast_u32(1));
</pre>`;
window.traces.I64_GT_S = {}
window.traces.I64_GT_S.parsed = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def arg__897 = (b);
def arg__896 = (a);
def cond__891 = U64_gt_s(arg__896, arg__897);
if (cond__891) {
	def arg__893 : u32 = 1;
	def eff__892 = push_u32(arg__893);
} else {
	def arg__895 : u32 = 0;
	def eff__894 = push_u32(arg__895);
}
// phis: 
</pre>`;
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
window.traces.I64_GT_S.scheduled = `<pre class=''>def arg__893 : u32 = 1;
def abs__898 = rtcast_u32(arg__893);
def b = pop_u64();
def a = pop_u64();
def eff_push__904 = push_u32(abs__898);
</pre>`;
window.traces.I64_GT_S.pretty = `<pre class=''>def b = pop_u64();
def a = pop_u64();
push_u32(rtcast_u32(1));
</pre>`;
window.traces.I64_GT_U = {}
window.traces.I64_GT_U.parsed = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def arg__911 = (b);
def arg__910 = (a);
def cond__905 = u64.>(arg__910, arg__911);
if (cond__905) {
	def arg__907 : u32 = 1;
	def eff__906 = push_u32(arg__907);
} else {
	def arg__909 : u32 = 0;
	def eff__908 = push_u32(arg__909);
}
// phis: 
</pre>`;
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
window.traces.I64_GT_U.scheduled = `<pre class=''>def arg__907 : u32 = 1;
def abs__912 = rtcast_u32(arg__907);
def b = pop_u64();
def a = pop_u64();
def eff_push__918 = push_u32(abs__912);
</pre>`;
window.traces.I64_GT_U.pretty = `<pre class=''>def b = pop_u64();
def a = pop_u64();
push_u32(rtcast_u32(1));
</pre>`;
window.traces.I64_LE_S = {}
window.traces.I64_LE_S.parsed = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def arg__925 = (b);
def arg__924 = (a);
def cond__919 = U64_le_s(arg__924, arg__925);
if (cond__919) {
	def arg__921 : u32 = 1;
	def eff__920 = push_u32(arg__921);
} else {
	def arg__923 : u32 = 0;
	def eff__922 = push_u32(arg__923);
}
// phis: 
</pre>`;
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
window.traces.I64_LE_S.scheduled = `<pre class=''>def arg__921 : u32 = 1;
def abs__926 = rtcast_u32(arg__921);
def b = pop_u64();
def a = pop_u64();
def eff_push__932 = push_u32(abs__926);
</pre>`;
window.traces.I64_LE_S.pretty = `<pre class=''>def b = pop_u64();
def a = pop_u64();
push_u32(rtcast_u32(1));
</pre>`;
window.traces.I64_LE_U = {}
window.traces.I64_LE_U.parsed = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def arg__939 = (b);
def arg__938 = (a);
def cond__933 = u64.<=(arg__938, arg__939);
if (cond__933) {
	def arg__935 : u32 = 1;
	def eff__934 = push_u32(arg__935);
} else {
	def arg__937 : u32 = 0;
	def eff__936 = push_u32(arg__937);
}
// phis: 
</pre>`;
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
window.traces.I64_LE_U.scheduled = `<pre class=''>def arg__935 : u32 = 1;
def abs__940 = rtcast_u32(arg__935);
def b = pop_u64();
def a = pop_u64();
def eff_push__946 = push_u32(abs__940);
</pre>`;
window.traces.I64_LE_U.pretty = `<pre class=''>def b = pop_u64();
def a = pop_u64();
push_u32(rtcast_u32(1));
</pre>`;
window.traces.I64_GE_S = {}
window.traces.I64_GE_S.parsed = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def arg__953 = (b);
def arg__952 = (a);
def cond__947 = U64_ge_s(arg__952, arg__953);
if (cond__947) {
	def arg__949 : u32 = 1;
	def eff__948 = push_u32(arg__949);
} else {
	def arg__951 : u32 = 0;
	def eff__950 = push_u32(arg__951);
}
// phis: 
</pre>`;
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
window.traces.I64_GE_S.scheduled = `<pre class=''>def arg__949 : u32 = 1;
def abs__954 = rtcast_u32(arg__949);
def b = pop_u64();
def a = pop_u64();
def eff_push__960 = push_u32(abs__954);
</pre>`;
window.traces.I64_GE_S.pretty = `<pre class=''>def b = pop_u64();
def a = pop_u64();
push_u32(rtcast_u32(1));
</pre>`;
window.traces.I64_GE_U = {}
window.traces.I64_GE_U.parsed = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def arg__967 = (b);
def arg__966 = (a);
def cond__961 = u64.>=(arg__966, arg__967);
if (cond__961) {
	def arg__963 : u32 = 1;
	def eff__962 = push_u32(arg__963);
} else {
	def arg__965 : u32 = 0;
	def eff__964 = push_u32(arg__965);
}
// phis: 
</pre>`;
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
window.traces.I64_GE_U.scheduled = `<pre class=''>def arg__963 : u32 = 1;
def abs__968 = rtcast_u32(arg__963);
def b = pop_u64();
def a = pop_u64();
def eff_push__974 = push_u32(abs__968);
</pre>`;
window.traces.I64_GE_U.pretty = `<pre class=''>def b = pop_u64();
def a = pop_u64();
push_u32(rtcast_u32(1));
</pre>`;
window.traces.F32_EQ = {}
window.traces.F32_EQ.parsed = `<pre class=''>def b = pop_f32();
def a = pop_f32();
def arg__981 = (b);
def arg__980 = (a);
def cond__975 = float.==(arg__980, arg__981);
if (cond__975) {
	def arg__977 : u32 = 1;
	def eff__976 = push_u32(arg__977);
} else {
	def arg__979 : u32 = 0;
	def eff__978 = push_u32(arg__979);
}
// phis: 
</pre>`;
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
window.traces.F32_EQ.scheduled = `<pre class=''>def arg__977 : u32 = 1;
def abs__982 = rtcast_u32(arg__977);
def b = pop_f32();
def a = pop_f32();
def eff_push__988 = push_u32(abs__982);
</pre>`;
window.traces.F32_EQ.pretty = `<pre class=''>def b = pop_f32();
def a = pop_f32();
push_u32(rtcast_u32(1));
</pre>`;
window.traces.F32_NE = {}
window.traces.F32_NE.parsed = `<pre class=''>def b = pop_f32();
def a = pop_f32();
def arg__995 = (b);
def arg__994 = (a);
def cond__989 = float.!=(arg__994, arg__995);
if (cond__989) {
	def arg__991 : u32 = 1;
	def eff__990 = push_u32(arg__991);
} else {
	def arg__993 : u32 = 0;
	def eff__992 = push_u32(arg__993);
}
// phis: 
</pre>`;
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
window.traces.F32_NE.scheduled = `<pre class=''>def arg__991 : u32 = 1;
def abs__996 = rtcast_u32(arg__991);
def b = pop_f32();
def a = pop_f32();
def eff_push__1002 = push_u32(abs__996);
</pre>`;
window.traces.F32_NE.pretty = `<pre class=''>def b = pop_f32();
def a = pop_f32();
push_u32(rtcast_u32(1));
</pre>`;
window.traces.F32_LT = {}
window.traces.F32_LT.parsed = `<pre class=''>def b = pop_f32();
def a = pop_f32();
def arg__1009 = (b);
def arg__1008 = (a);
def cond__1003 = float.<(arg__1008, arg__1009);
if (cond__1003) {
	def arg__1005 : u32 = 1;
	def eff__1004 = push_u32(arg__1005);
} else {
	def arg__1007 : u32 = 0;
	def eff__1006 = push_u32(arg__1007);
}
// phis: 
</pre>`;
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
window.traces.F32_LT.scheduled = `<pre class=''>def arg__1005 : u32 = 1;
def abs__1010 = rtcast_u32(arg__1005);
def b = pop_f32();
def a = pop_f32();
def eff_push__1016 = push_u32(abs__1010);
</pre>`;
window.traces.F32_LT.pretty = `<pre class=''>def b = pop_f32();
def a = pop_f32();
push_u32(rtcast_u32(1));
</pre>`;
window.traces.F32_GT = {}
window.traces.F32_GT.parsed = `<pre class=''>def b = pop_f32();
def a = pop_f32();
def arg__1023 = (b);
def arg__1022 = (a);
def cond__1017 = float.>(arg__1022, arg__1023);
if (cond__1017) {
	def arg__1019 : u32 = 1;
	def eff__1018 = push_u32(arg__1019);
} else {
	def arg__1021 : u32 = 0;
	def eff__1020 = push_u32(arg__1021);
}
// phis: 
</pre>`;
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
window.traces.F32_GT.scheduled = `<pre class=''>def arg__1019 : u32 = 1;
def abs__1024 = rtcast_u32(arg__1019);
def b = pop_f32();
def a = pop_f32();
def eff_push__1030 = push_u32(abs__1024);
</pre>`;
window.traces.F32_GT.pretty = `<pre class=''>def b = pop_f32();
def a = pop_f32();
push_u32(rtcast_u32(1));
</pre>`;
window.traces.F32_LE = {}
window.traces.F32_LE.parsed = `<pre class=''>def b = pop_f32();
def a = pop_f32();
def arg__1037 = (b);
def arg__1036 = (a);
def cond__1031 = float.<=(arg__1036, arg__1037);
if (cond__1031) {
	def arg__1033 : u32 = 1;
	def eff__1032 = push_u32(arg__1033);
} else {
	def arg__1035 : u32 = 0;
	def eff__1034 = push_u32(arg__1035);
}
// phis: 
</pre>`;
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
window.traces.F32_LE.scheduled = `<pre class=''>def arg__1033 : u32 = 1;
def abs__1038 = rtcast_u32(arg__1033);
def b = pop_f32();
def a = pop_f32();
def eff_push__1044 = push_u32(abs__1038);
</pre>`;
window.traces.F32_LE.pretty = `<pre class=''>def b = pop_f32();
def a = pop_f32();
push_u32(rtcast_u32(1));
</pre>`;
window.traces.F32_GE = {}
window.traces.F32_GE.parsed = `<pre class=''>def b = pop_f32();
def a = pop_f32();
def arg__1051 = (b);
def arg__1050 = (a);
def cond__1045 = float.>=(arg__1050, arg__1051);
if (cond__1045) {
	def arg__1047 : u32 = 1;
	def eff__1046 = push_u32(arg__1047);
} else {
	def arg__1049 : u32 = 0;
	def eff__1048 = push_u32(arg__1049);
}
// phis: 
</pre>`;
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
window.traces.F32_GE.scheduled = `<pre class=''>def arg__1047 : u32 = 1;
def abs__1052 = rtcast_u32(arg__1047);
def b = pop_f32();
def a = pop_f32();
def eff_push__1058 = push_u32(abs__1052);
</pre>`;
window.traces.F32_GE.pretty = `<pre class=''>def b = pop_f32();
def a = pop_f32();
push_u32(rtcast_u32(1));
</pre>`;
window.traces.F64_EQ = {}
window.traces.F64_EQ.parsed = `<pre class=''>def b = pop_f64();
def a = pop_f64();
def arg__1065 = (b);
def arg__1064 = (a);
def cond__1059 = double.==(arg__1064, arg__1065);
if (cond__1059) {
	def arg__1061 : u32 = 1;
	def eff__1060 = push_u32(arg__1061);
} else {
	def arg__1063 : u32 = 0;
	def eff__1062 = push_u32(arg__1063);
}
// phis: 
</pre>`;
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
window.traces.F64_EQ.scheduled = `<pre class=''>def arg__1061 : u32 = 1;
def abs__1066 = rtcast_u32(arg__1061);
def b = pop_f64();
def a = pop_f64();
def eff_push__1072 = push_u32(abs__1066);
</pre>`;
window.traces.F64_EQ.pretty = `<pre class=''>def b = pop_f64();
def a = pop_f64();
push_u32(rtcast_u32(1));
</pre>`;
window.traces.F64_NE = {}
window.traces.F64_NE.parsed = `<pre class=''>def b = pop_f64();
def a = pop_f64();
def arg__1079 = (b);
def arg__1078 = (a);
def cond__1073 = double.!=(arg__1078, arg__1079);
if (cond__1073) {
	def arg__1075 : u32 = 1;
	def eff__1074 = push_u32(arg__1075);
} else {
	def arg__1077 : u32 = 0;
	def eff__1076 = push_u32(arg__1077);
}
// phis: 
</pre>`;
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
window.traces.F64_NE.scheduled = `<pre class=''>def arg__1075 : u32 = 1;
def abs__1080 = rtcast_u32(arg__1075);
def b = pop_f64();
def a = pop_f64();
def eff_push__1086 = push_u32(abs__1080);
</pre>`;
window.traces.F64_NE.pretty = `<pre class=''>def b = pop_f64();
def a = pop_f64();
push_u32(rtcast_u32(1));
</pre>`;
window.traces.F64_LT = {}
window.traces.F64_LT.parsed = `<pre class=''>def b = pop_f64();
def a = pop_f64();
def arg__1093 = (b);
def arg__1092 = (a);
def cond__1087 = double.<(arg__1092, arg__1093);
if (cond__1087) {
	def arg__1089 : u32 = 1;
	def eff__1088 = push_u32(arg__1089);
} else {
	def arg__1091 : u32 = 0;
	def eff__1090 = push_u32(arg__1091);
}
// phis: 
</pre>`;
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
window.traces.F64_LT.scheduled = `<pre class=''>def arg__1089 : u32 = 1;
def abs__1094 = rtcast_u32(arg__1089);
def b = pop_f64();
def a = pop_f64();
def eff_push__1100 = push_u32(abs__1094);
</pre>`;
window.traces.F64_LT.pretty = `<pre class=''>def b = pop_f64();
def a = pop_f64();
push_u32(rtcast_u32(1));
</pre>`;
window.traces.F64_GT = {}
window.traces.F64_GT.parsed = `<pre class=''>def b = pop_f64();
def a = pop_f64();
def arg__1107 = (b);
def arg__1106 = (a);
def cond__1101 = double.>(arg__1106, arg__1107);
if (cond__1101) {
	def arg__1103 : u32 = 1;
	def eff__1102 = push_u32(arg__1103);
} else {
	def arg__1105 : u32 = 0;
	def eff__1104 = push_u32(arg__1105);
}
// phis: 
</pre>`;
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
window.traces.F64_GT.scheduled = `<pre class=''>def arg__1103 : u32 = 1;
def abs__1108 = rtcast_u32(arg__1103);
def b = pop_f64();
def a = pop_f64();
def eff_push__1114 = push_u32(abs__1108);
</pre>`;
window.traces.F64_GT.pretty = `<pre class=''>def b = pop_f64();
def a = pop_f64();
push_u32(rtcast_u32(1));
</pre>`;
window.traces.F64_LE = {}
window.traces.F64_LE.parsed = `<pre class=''>def b = pop_f64();
def a = pop_f64();
def arg__1121 = (b);
def arg__1120 = (a);
def cond__1115 = double.<=(arg__1120, arg__1121);
if (cond__1115) {
	def arg__1117 : u32 = 1;
	def eff__1116 = push_u32(arg__1117);
} else {
	def arg__1119 : u32 = 0;
	def eff__1118 = push_u32(arg__1119);
}
// phis: 
</pre>`;
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
window.traces.F64_LE.scheduled = `<pre class=''>def arg__1117 : u32 = 1;
def abs__1122 = rtcast_u32(arg__1117);
def b = pop_f64();
def a = pop_f64();
def eff_push__1128 = push_u32(abs__1122);
</pre>`;
window.traces.F64_LE.pretty = `<pre class=''>def b = pop_f64();
def a = pop_f64();
push_u32(rtcast_u32(1));
</pre>`;
window.traces.F64_GE = {}
window.traces.F64_GE.parsed = `<pre class=''>def b = pop_f64();
def a = pop_f64();
def arg__1135 = (b);
def arg__1134 = (a);
def cond__1129 = double.>=(arg__1134, arg__1135);
if (cond__1129) {
	def arg__1131 : u32 = 1;
	def eff__1130 = push_u32(arg__1131);
} else {
	def arg__1133 : u32 = 0;
	def eff__1132 = push_u32(arg__1133);
}
// phis: 
</pre>`;
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
window.traces.F64_GE.scheduled = `<pre class=''>def arg__1131 : u32 = 1;
def abs__1136 = rtcast_u32(arg__1131);
def b = pop_f64();
def a = pop_f64();
def eff_push__1142 = push_u32(abs__1136);
</pre>`;
window.traces.F64_GE.pretty = `<pre class=''>def b = pop_f64();
def a = pop_f64();
push_u32(rtcast_u32(1));
</pre>`;
window.traces.I32_CLZ = {}
window.traces.I32_CLZ.parsed = `<pre class=''>def a = pop_u32();
def arg__1145 = (a);
def r = U32_clz(arg__1145);
def arg__1144 = (r);
def eff__1143 = push_u32(arg__1144);
</pre>`;
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
window.traces.I32_CLZ.scheduled = `<pre class=''>def a = pop_u32();
def r = U32_clz(a);
def eff__1143 = push_u32(r);
</pre>`;
window.traces.I32_CLZ.pretty = `<pre class=''>def a = pop_u32();
push_u32(U32_clz(a));
</pre>`;
window.traces.I32_CTZ = {}
window.traces.I32_CTZ.parsed = `<pre class=''>def a = pop_u32();
def arg__1148 = (a);
def r = U32_ctz(arg__1148);
def arg__1147 = (r);
def eff__1146 = push_u32(arg__1147);
</pre>`;
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
window.traces.I32_CTZ.scheduled = `<pre class=''>def a = pop_u32();
def r = U32_ctz(a);
def eff__1146 = push_u32(r);
</pre>`;
window.traces.I32_CTZ.pretty = `<pre class=''>def a = pop_u32();
push_u32(U32_ctz(a));
</pre>`;
window.traces.I32_POPCNT = {}
window.traces.I32_POPCNT.parsed = `<pre class=''>def a = pop_u32();
def arg__1151 = (a);
def r = U32_popcnt(arg__1151);
def arg__1150 = (r);
def eff__1149 = push_u32(arg__1150);
</pre>`;
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
window.traces.I32_POPCNT.scheduled = `<pre class=''>def a = pop_u32();
def r = U32_popcnt(a);
def eff__1149 = push_u32(r);
</pre>`;
window.traces.I32_POPCNT.pretty = `<pre class=''>def a = pop_u32();
push_u32(U32_popcnt(a));
</pre>`;
window.traces.I32_ADD = {}
window.traces.I32_ADD.parsed = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__1155 = (b);
def arg__1154 = (a);
def r = u32.+(arg__1154, arg__1155);
def arg__1153 = (r);
def eff__1152 = push_u32(arg__1153);
</pre>`;
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
window.traces.I32_ADD.scheduled = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def r = U32_plus(a, b);
def eff__1152 = push_u32(r);
</pre>`;
window.traces.I32_ADD.pretty = `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(U32_plus(a, b));
</pre>`;
window.traces.I32_SUB = {}
window.traces.I32_SUB.parsed = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__1159 = (b);
def arg__1158 = (a);
def r = u32.-(arg__1158, arg__1159);
def arg__1157 = (r);
def eff__1156 = push_u32(arg__1157);
</pre>`;
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
window.traces.I32_SUB.scheduled = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def r = U32_minus(a, b);
def eff__1156 = push_u32(r);
</pre>`;
window.traces.I32_SUB.pretty = `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(U32_minus(a, b));
</pre>`;
window.traces.I32_MUL = {}
window.traces.I32_MUL.parsed = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__1163 = (b);
def arg__1162 = (a);
def r = u32.*(arg__1162, arg__1163);
def arg__1161 = (r);
def eff__1160 = push_u32(arg__1161);
</pre>`;
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
window.traces.I32_MUL.scheduled = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def r = U32_times(a, b);
def eff__1160 = push_u32(r);
</pre>`;
window.traces.I32_MUL.pretty = `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(U32_times(a, b));
</pre>`;
window.traces.I32_DIV_S = {}
window.traces.I32_DIV_S.parsed = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__1181 = (b);
def arg__1180 = (a);
def r = U32_div_s(arg__1180, arg__1181);
def arg__1179 : u32 = 0;
def arg__1178 = (b);
def cond__1164 = u32.==(arg__1178, arg__1179);
if (cond__1164) {
	def eff__1165 = trapDivideByZero();
} else {
	def arg__1177 : int = -2_147_483_648;
	def arg__1176 = u32.view(arg__1177);
	def arg__1175 = (a);
	def arg__1171 = u32.==(arg__1175, arg__1176);
	def arg__1174 : int = -1;
	def arg__1173 = u32.view(arg__1174);
	def arg__1172 = (b);
	def arg__1170 = u32.==(arg__1172, arg__1173);
	def cond__1166 = bool.&&(arg__1170, arg__1171);
	if (cond__1166) {
		def eff__1167 = trapDivideUnrepresentable();
	} else {
		def arg__1169 = (r);
		def eff__1168 = push_u32(arg__1169);
	}
// phis: 
}
// phis: 
</pre>`;
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
window.traces.I32_DIV_S.scheduled = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def eff__1165 = trapDivideByZero();
def eff__1167 = trapDivideUnrepresentable();
def eff_merge__1197 = merge(eff__1167, r_state__1196);
def eff_merge__1189 = merge(eff__1165, eff_merge__1197);
def eff_nop__1190 = nop();
def eff_nop__1198 = nop();
def r = U32_div_s(a, b);
def eff__1168 = push_u32(r);
def eff_merge__1199 = merge(eff_nop__1198, eff__1168);
def eff_merge__1192 = merge(eff_nop__1190, eff_merge__1199);
</pre>`;
window.traces.I32_DIV_S.pretty = `<pre class=''>def b = pop_u32();
def a = pop_u32();
trapDivideByZero();
trapDivideUnrepresentable();
push_u32(U32_div_s(a, b));
</pre>`;
window.traces.I32_DIV_U = {}
window.traces.I32_DIV_U.parsed = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__1207 = (b);
def arg__1206 = (a);
def r = u32./(arg__1206, arg__1207);
def arg__1205 : u32 = 0;
def arg__1204 = (b);
def cond__1200 = u32.==(arg__1204, arg__1205);
if (cond__1200) {
	def eff__1201 = trapDivideByZero();
} else {
	def arg__1203 = (r);
	def eff__1202 = push_u32(arg__1203);
}
// phis: 
</pre>`;
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
window.traces.I32_DIV_U.scheduled = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def eff__1201 = trapDivideByZero();
def eff_merge__1213 = merge(eff__1201, r_state__1212);
def eff_nop__1214 = nop();
def r = U32_div(a, b);
def eff__1202 = push_u32(r);
def eff_merge__1215 = merge(eff_nop__1214, eff__1202);
</pre>`;
window.traces.I32_DIV_U.pretty = `<pre class=''>def b = pop_u32();
def a = pop_u32();
trapDivideByZero();
push_u32(U32_div(a, b));
</pre>`;
window.traces.I32_REM_S = {}
window.traces.I32_REM_S.parsed = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__1223 = (b);
def arg__1222 = (a);
def r = U32_rem_s(arg__1222, arg__1223);
def arg__1221 : u32 = 0;
def arg__1220 = (b);
def cond__1216 = u32.==(arg__1220, arg__1221);
if (cond__1216) {
	def eff__1217 = trapDivideByZero();
} else {
	def arg__1219 = (r);
	def eff__1218 = push_u32(arg__1219);
}
// phis: 
</pre>`;
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
window.traces.I32_REM_S.scheduled = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def eff__1217 = trapDivideByZero();
def eff_merge__1229 = merge(eff__1217, r_state__1228);
def eff_nop__1230 = nop();
def r = U32_rem_s(a, b);
def eff__1218 = push_u32(r);
def eff_merge__1231 = merge(eff_nop__1230, eff__1218);
</pre>`;
window.traces.I32_REM_S.pretty = `<pre class=''>def b = pop_u32();
def a = pop_u32();
trapDivideByZero();
push_u32(U32_rem_s(a, b));
</pre>`;
window.traces.I32_REM_U = {}
window.traces.I32_REM_U.parsed = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__1239 = (b);
def arg__1238 = (a);
def r = U32_rem_u(arg__1238, arg__1239);
def arg__1237 : u32 = 0;
def arg__1236 = (b);
def cond__1232 = u32.==(arg__1236, arg__1237);
if (cond__1232) {
	def eff__1233 = trapDivideByZero();
} else {
	def arg__1235 = (r);
	def eff__1234 = push_u32(arg__1235);
}
// phis: 
</pre>`;
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
window.traces.I32_REM_U.scheduled = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def eff__1233 = trapDivideByZero();
def eff_merge__1245 = merge(eff__1233, r_state__1244);
def eff_nop__1246 = nop();
def r = U32_rem_u(a, b);
def eff__1234 = push_u32(r);
def eff_merge__1247 = merge(eff_nop__1246, eff__1234);
</pre>`;
window.traces.I32_REM_U.pretty = `<pre class=''>def b = pop_u32();
def a = pop_u32();
trapDivideByZero();
push_u32(U32_rem_u(a, b));
</pre>`;
window.traces.I32_AND = {}
window.traces.I32_AND.parsed = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__1251 = (b);
def arg__1250 = (a);
def r = u32.&(arg__1250, arg__1251);
def arg__1249 = (r);
def eff__1248 = push_u32(arg__1249);
</pre>`;
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
window.traces.I32_AND.scheduled = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def r = U32_and(a, b);
def eff__1248 = push_u32(r);
</pre>`;
window.traces.I32_AND.pretty = `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(U32_and(a, b));
</pre>`;
window.traces.I32_OR = {}
window.traces.I32_OR.parsed = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__1255 = (b);
def arg__1254 = (a);
def r = u32.|(arg__1254, arg__1255);
def arg__1253 = (r);
def eff__1252 = push_u32(arg__1253);
</pre>`;
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
window.traces.I32_OR.scheduled = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def r = U32_or(a, b);
def eff__1252 = push_u32(r);
</pre>`;
window.traces.I32_OR.pretty = `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(U32_or(a, b));
</pre>`;
window.traces.I32_XOR = {}
window.traces.I32_XOR.parsed = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__1259 = (b);
def arg__1258 = (a);
def r = u32.^(arg__1258, arg__1259);
def arg__1257 = (r);
def eff__1256 = push_u32(arg__1257);
</pre>`;
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
window.traces.I32_XOR.scheduled = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def r = U32_or(a, b);
def eff__1256 = push_u32(r);
</pre>`;
window.traces.I32_XOR.pretty = `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(U32_or(a, b));
</pre>`;
window.traces.I32_SHL = {}
window.traces.I32_SHL.parsed = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__1263 = (b);
def arg__1262 = (a);
def r = U32_shl(arg__1262, arg__1263);
def arg__1261 = (r);
def eff__1260 = push_u32(arg__1261);
</pre>`;
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
window.traces.I32_SHL.scheduled = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def r = U32_shl(a, b);
def eff__1260 = push_u32(r);
</pre>`;
window.traces.I32_SHL.pretty = `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(U32_shl(a, b));
</pre>`;
window.traces.I32_SHR_S = {}
window.traces.I32_SHR_S.parsed = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__1267 = (b);
def arg__1266 = (a);
def r = U32_shr_s(arg__1266, arg__1267);
def arg__1265 = (r);
def eff__1264 = push_u32(arg__1265);
</pre>`;
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
window.traces.I32_SHR_S.scheduled = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def r = U32_shr_s(a, b);
def eff__1264 = push_u32(r);
</pre>`;
window.traces.I32_SHR_S.pretty = `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(U32_shr_s(a, b));
</pre>`;
window.traces.I32_SHR_U = {}
window.traces.I32_SHR_U.parsed = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__1271 = (b);
def arg__1270 = (a);
def r = U32_shr_u(arg__1270, arg__1271);
def arg__1269 = (r);
def eff__1268 = push_u32(arg__1269);
</pre>`;
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
window.traces.I32_SHR_U.scheduled = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def r = U32_shr_u(a, b);
def eff__1268 = push_u32(r);
</pre>`;
window.traces.I32_SHR_U.pretty = `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(U32_shr_u(a, b));
</pre>`;
window.traces.I32_ROTL = {}
window.traces.I32_ROTL.parsed = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__1275 = (b);
def arg__1274 = (a);
def r = U32_rotl(arg__1274, arg__1275);
def arg__1273 = (r);
def eff__1272 = push_u32(arg__1273);
</pre>`;
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
window.traces.I32_ROTL.scheduled = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def r = U32_rotl(a, b);
def eff__1272 = push_u32(r);
</pre>`;
window.traces.I32_ROTL.pretty = `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(U32_rotl(a, b));
</pre>`;
window.traces.I32_ROTR = {}
window.traces.I32_ROTR.parsed = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def arg__1279 = (b);
def arg__1278 = (a);
def r = U32_rotr(arg__1278, arg__1279);
def arg__1277 = (r);
def eff__1276 = push_u32(arg__1277);
</pre>`;
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
window.traces.I32_ROTR.scheduled = `<pre class=''>def b = pop_u32();
def a = pop_u32();
def r = U32_rotr(a, b);
def eff__1276 = push_u32(r);
</pre>`;
window.traces.I32_ROTR.pretty = `<pre class=''>def b = pop_u32();
def a = pop_u32();
push_u32(U32_rotr(a, b));
</pre>`;
window.traces.I64_CLZ = {}
window.traces.I64_CLZ.parsed = `<pre class=''>def a = pop_u64();
def arg__1282 = (a);
def r = U64_clz(arg__1282);
def arg__1281 = (r);
def eff__1280 = push_u64(arg__1281);
</pre>`;
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
window.traces.I64_CLZ.scheduled = `<pre class=''>def a = pop_u64();
def r = U64_clz(a);
def eff__1280 = push_u64(r);
</pre>`;
window.traces.I64_CLZ.pretty = `<pre class=''>def a = pop_u64();
push_u64(U64_clz(a));
</pre>`;
window.traces.I64_CTZ = {}
window.traces.I64_CTZ.parsed = `<pre class=''>def a = pop_u64();
def arg__1285 = (a);
def r = U64_ctz(arg__1285);
def arg__1284 = (r);
def eff__1283 = push_u64(arg__1284);
</pre>`;
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
window.traces.I64_CTZ.scheduled = `<pre class=''>def a = pop_u64();
def r = U64_ctz(a);
def eff__1283 = push_u64(r);
</pre>`;
window.traces.I64_CTZ.pretty = `<pre class=''>def a = pop_u64();
push_u64(U64_ctz(a));
</pre>`;
window.traces.I64_POPCNT = {}
window.traces.I64_POPCNT.parsed = `<pre class=''>def a = pop_u64();
def arg__1288 = (a);
def r = U64_popcnt(arg__1288);
def arg__1287 = (r);
def eff__1286 = push_u64(arg__1287);
</pre>`;
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
window.traces.I64_POPCNT.scheduled = `<pre class=''>def a = pop_u64();
def r = U64_popcnt(a);
def eff__1286 = push_u64(r);
</pre>`;
window.traces.I64_POPCNT.pretty = `<pre class=''>def a = pop_u64();
push_u64(U64_popcnt(a));
</pre>`;
window.traces.I64_ADD = {}
window.traces.I64_ADD.parsed = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def arg__1292 = (b);
def arg__1291 = (a);
def r = u64.+(arg__1291, arg__1292);
def arg__1290 = (r);
def eff__1289 = push_u64(arg__1290);
</pre>`;
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
window.traces.I64_ADD.scheduled = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def r = U64_plus(a, b);
def eff__1289 = push_u64(r);
</pre>`;
window.traces.I64_ADD.pretty = `<pre class=''>def b = pop_u64();
def a = pop_u64();
push_u64(U64_plus(a, b));
</pre>`;
window.traces.I64_SUB = {}
window.traces.I64_SUB.parsed = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def arg__1296 = (b);
def arg__1295 = (a);
def r = u64.-(arg__1295, arg__1296);
def arg__1294 = (r);
def eff__1293 = push_u64(arg__1294);
</pre>`;
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
window.traces.I64_SUB.scheduled = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def r = U64_minus(a, b);
def eff__1293 = push_u64(r);
</pre>`;
window.traces.I64_SUB.pretty = `<pre class=''>def b = pop_u64();
def a = pop_u64();
push_u64(U64_minus(a, b));
</pre>`;
window.traces.I64_MUL = {}
window.traces.I64_MUL.parsed = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def arg__1300 = (b);
def arg__1299 = (a);
def r = u64.*(arg__1299, arg__1300);
def arg__1298 = (r);
def eff__1297 = push_u64(arg__1298);
</pre>`;
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
window.traces.I64_MUL.scheduled = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def r = U64_times(a, b);
def eff__1297 = push_u64(r);
</pre>`;
window.traces.I64_MUL.pretty = `<pre class=''>def b = pop_u64();
def a = pop_u64();
push_u64(U64_times(a, b));
</pre>`;
window.traces.I64_DIV_S = {}
window.traces.I64_DIV_S.parsed = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def arg__1318 = (b);
def arg__1317 = (a);
def r = U64_div_s(arg__1317, arg__1318);
def arg__1316 : u64 = 0;
def arg__1315 = (b);
def cond__1301 = u64.==(arg__1315, arg__1316);
if (cond__1301) {
	def eff__1302 = trapDivideByZero();
} else {
	def arg__1314 : long = -9223372036854775808L;
	def arg__1313 = u64.view(arg__1314);
	def arg__1312 = (a);
	def arg__1308 = u64.==(arg__1312, arg__1313);
	def arg__1311 : int = -1;
	def arg__1310 = u64.view(arg__1311);
	def arg__1309 = (b);
	def arg__1307 = u64.==(arg__1309, arg__1310);
	def cond__1303 = bool.&&(arg__1307, arg__1308);
	if (cond__1303) {
		def eff__1304 = trapDivideUnrepresentable();
	} else {
		def arg__1306 = (r);
		def eff__1305 = push_u64(arg__1306);
	}
// phis: 
}
// phis: 
</pre>`;
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
window.traces.I64_DIV_S.scheduled = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def eff__1302 = trapDivideByZero();
def eff__1304 = trapDivideUnrepresentable();
def eff_merge__1334 = merge(eff__1304, r_state__1333);
def eff_merge__1326 = merge(eff__1302, eff_merge__1334);
def eff_nop__1327 = nop();
def eff_nop__1335 = nop();
def r = U64_div_s(a, b);
def eff__1305 = push_u64(r);
def eff_merge__1336 = merge(eff_nop__1335, eff__1305);
def eff_merge__1329 = merge(eff_nop__1327, eff_merge__1336);
</pre>`;
window.traces.I64_DIV_S.pretty = `<pre class=''>def b = pop_u64();
def a = pop_u64();
trapDivideByZero();
trapDivideUnrepresentable();
push_u64(U64_div_s(a, b));
</pre>`;
window.traces.I64_DIV_U = {}
window.traces.I64_DIV_U.parsed = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def arg__1344 = (b);
def arg__1343 = (a);
def r = u64./(arg__1343, arg__1344);
def arg__1342 : u64 = 0;
def arg__1341 = (b);
def cond__1337 = u64.==(arg__1341, arg__1342);
if (cond__1337) {
	def eff__1338 = trapDivideByZero();
} else {
	def arg__1340 = (r);
	def eff__1339 = push_u64(arg__1340);
}
// phis: 
</pre>`;
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
window.traces.I64_DIV_U.scheduled = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def eff__1338 = trapDivideByZero();
def eff_merge__1350 = merge(eff__1338, r_state__1349);
def eff_nop__1351 = nop();
def r = U64_div(a, b);
def eff__1339 = push_u64(r);
def eff_merge__1352 = merge(eff_nop__1351, eff__1339);
</pre>`;
window.traces.I64_DIV_U.pretty = `<pre class=''>def b = pop_u64();
def a = pop_u64();
trapDivideByZero();
push_u64(U64_div(a, b));
</pre>`;
window.traces.I64_REM_S = {}
window.traces.I64_REM_S.parsed = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def arg__1360 = (b);
def arg__1359 = (a);
def r = U64_rem_s(arg__1359, arg__1360);
def arg__1358 : u64 = 0;
def arg__1357 = (b);
def cond__1353 = u64.==(arg__1357, arg__1358);
if (cond__1353) {
	def eff__1354 = trapDivideByZero();
} else {
	def arg__1356 = (r);
	def eff__1355 = push_u64(arg__1356);
}
// phis: 
</pre>`;
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
window.traces.I64_REM_S.scheduled = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def eff__1354 = trapDivideByZero();
def eff_merge__1366 = merge(eff__1354, r_state__1365);
def eff_nop__1367 = nop();
def r = U64_rem_s(a, b);
def eff__1355 = push_u64(r);
def eff_merge__1368 = merge(eff_nop__1367, eff__1355);
</pre>`;
window.traces.I64_REM_S.pretty = `<pre class=''>def b = pop_u64();
def a = pop_u64();
trapDivideByZero();
push_u64(U64_rem_s(a, b));
</pre>`;
window.traces.I64_REM_U = {}
window.traces.I64_REM_U.parsed = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def arg__1376 = (b);
def arg__1375 = (a);
def r = U64_rem_u(arg__1375, arg__1376);
def arg__1374 : u64 = 0;
def arg__1373 = (b);
def cond__1369 = u64.==(arg__1373, arg__1374);
if (cond__1369) {
	def eff__1370 = trapDivideByZero();
} else {
	def arg__1372 = (r);
	def eff__1371 = push_u64(arg__1372);
}
// phis: 
</pre>`;
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
window.traces.I64_REM_U.scheduled = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def eff__1370 = trapDivideByZero();
def eff_merge__1382 = merge(eff__1370, r_state__1381);
def eff_nop__1383 = nop();
def r = U64_rem_u(a, b);
def eff__1371 = push_u64(r);
def eff_merge__1384 = merge(eff_nop__1383, eff__1371);
</pre>`;
window.traces.I64_REM_U.pretty = `<pre class=''>def b = pop_u64();
def a = pop_u64();
trapDivideByZero();
push_u64(U64_rem_u(a, b));
</pre>`;
window.traces.I64_AND = {}
window.traces.I64_AND.parsed = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def arg__1388 = (b);
def arg__1387 = (a);
def r = u64.&(arg__1387, arg__1388);
def arg__1386 = (r);
def eff__1385 = push_u64(arg__1386);
</pre>`;
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
window.traces.I64_AND.scheduled = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def r = U64_and(a, b);
def eff__1385 = push_u64(r);
</pre>`;
window.traces.I64_AND.pretty = `<pre class=''>def b = pop_u64();
def a = pop_u64();
push_u64(U64_and(a, b));
</pre>`;
window.traces.I64_OR = {}
window.traces.I64_OR.parsed = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def arg__1392 = (b);
def arg__1391 = (a);
def r = u64.|(arg__1391, arg__1392);
def arg__1390 = (r);
def eff__1389 = push_u64(arg__1390);
</pre>`;
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
window.traces.I64_OR.scheduled = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def r = U64_or(a, b);
def eff__1389 = push_u64(r);
</pre>`;
window.traces.I64_OR.pretty = `<pre class=''>def b = pop_u64();
def a = pop_u64();
push_u64(U64_or(a, b));
</pre>`;
window.traces.I64_XOR = {}
window.traces.I64_XOR.parsed = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def arg__1396 = (b);
def arg__1395 = (a);
def r = u64.^(arg__1395, arg__1396);
def arg__1394 = (r);
def eff__1393 = push_u64(arg__1394);
</pre>`;
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
window.traces.I64_XOR.scheduled = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def r = U64_or(a, b);
def eff__1393 = push_u64(r);
</pre>`;
window.traces.I64_XOR.pretty = `<pre class=''>def b = pop_u64();
def a = pop_u64();
push_u64(U64_or(a, b));
</pre>`;
window.traces.I64_SHL = {}
window.traces.I64_SHL.parsed = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def arg__1400 = (b);
def arg__1399 = (a);
def r = U64_shl(arg__1399, arg__1400);
def arg__1398 = (r);
def eff__1397 = push_u64(arg__1398);
</pre>`;
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
window.traces.I64_SHL.scheduled = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def r = U64_shl(a, b);
def eff__1397 = push_u64(r);
</pre>`;
window.traces.I64_SHL.pretty = `<pre class=''>def b = pop_u64();
def a = pop_u64();
push_u64(U64_shl(a, b));
</pre>`;
window.traces.I64_SHR_S = {}
window.traces.I64_SHR_S.parsed = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def arg__1404 = (b);
def arg__1403 = (a);
def r = U64_shr_s(arg__1403, arg__1404);
def arg__1402 = (r);
def eff__1401 = push_u64(arg__1402);
</pre>`;
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
window.traces.I64_SHR_S.scheduled = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def r = U64_shr_s(a, b);
def eff__1401 = push_u64(r);
</pre>`;
window.traces.I64_SHR_S.pretty = `<pre class=''>def b = pop_u64();
def a = pop_u64();
push_u64(U64_shr_s(a, b));
</pre>`;
window.traces.I64_SHR_U = {}
window.traces.I64_SHR_U.parsed = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def arg__1408 = (b);
def arg__1407 = (a);
def r = U64_shr_u(arg__1407, arg__1408);
def arg__1406 = (r);
def eff__1405 = push_u64(arg__1406);
</pre>`;
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
window.traces.I64_SHR_U.scheduled = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def r = U64_shr_u(a, b);
def eff__1405 = push_u64(r);
</pre>`;
window.traces.I64_SHR_U.pretty = `<pre class=''>def b = pop_u64();
def a = pop_u64();
push_u64(U64_shr_u(a, b));
</pre>`;
window.traces.I64_ROTL = {}
window.traces.I64_ROTL.parsed = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def arg__1412 = (b);
def arg__1411 = (a);
def r = U64_rotl(arg__1411, arg__1412);
def arg__1410 = (r);
def eff__1409 = push_u64(arg__1410);
</pre>`;
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
window.traces.I64_ROTL.scheduled = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def r = U64_rotl(a, b);
def eff__1409 = push_u64(r);
</pre>`;
window.traces.I64_ROTL.pretty = `<pre class=''>def b = pop_u64();
def a = pop_u64();
push_u64(U64_rotl(a, b));
</pre>`;
window.traces.I64_ROTR = {}
window.traces.I64_ROTR.parsed = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def arg__1416 = (b);
def arg__1415 = (a);
def r = U64_rotr(arg__1415, arg__1416);
def arg__1414 = (r);
def eff__1413 = push_u64(arg__1414);
</pre>`;
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
window.traces.I64_ROTR.scheduled = `<pre class=''>def b = pop_u64();
def a = pop_u64();
def r = U64_rotr(a, b);
def eff__1413 = push_u64(r);
</pre>`;
window.traces.I64_ROTR.pretty = `<pre class=''>def b = pop_u64();
def a = pop_u64();
push_u64(U64_rotr(a, b));
</pre>`;
window.traces.F32_ABS = {}
window.traces.F32_ABS.parsed = `<pre class=''>def a = pop_f32();
def arg__1419 = (a);
def r = float.abs(arg__1419);
def arg__1418 = (r);
def eff__1417 = push_f32(arg__1418);
</pre>`;
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
window.traces.F32_ABS.scheduled = `<pre class=''>def a = pop_f32();
def r = F32_abs(a);
def eff__1417 = push_f32(r);
</pre>`;
window.traces.F32_ABS.pretty = `<pre class=''>def a = pop_f32();
push_f32(F32_abs(a));
</pre>`;
window.traces.F32_NEG = {}
window.traces.F32_NEG.parsed = `<pre class=''>def a = pop_f32();
def arg__1422 = (a);
def r = F32_neg(arg__1422);
def arg__1421 = (r);
def eff__1420 = push_f32(arg__1421);
</pre>`;
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
window.traces.F32_NEG.scheduled = `<pre class=''>def a = pop_f32();
def r = F32_neg(a);
def eff__1420 = push_f32(r);
</pre>`;
window.traces.F32_NEG.pretty = `<pre class=''>def a = pop_f32();
push_f32(F32_neg(a));
</pre>`;
window.traces.F32_CEIL = {}
window.traces.F32_CEIL.parsed = `<pre class=''>def a = pop_f32();
def arg__1425 = (a);
def r = F32_ceil(arg__1425);
def arg__1424 = (r);
def eff__1423 = push_f32(arg__1424);
</pre>`;
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
window.traces.F32_CEIL.scheduled = `<pre class=''>def a = pop_f32();
def r = F32_ceil(a);
def eff__1423 = push_f32(r);
</pre>`;
window.traces.F32_CEIL.pretty = `<pre class=''>def a = pop_f32();
push_f32(F32_ceil(a));
</pre>`;
window.traces.F32_FLOOR = {}
window.traces.F32_FLOOR.parsed = `<pre class=''>def a = pop_f32();
def arg__1428 = (a);
def r = F32_floor(arg__1428);
def arg__1427 = (r);
def eff__1426 = push_f32(arg__1427);
</pre>`;
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
window.traces.F32_FLOOR.scheduled = `<pre class=''>def a = pop_f32();
def r = F32_floor(a);
def eff__1426 = push_f32(r);
</pre>`;
window.traces.F32_FLOOR.pretty = `<pre class=''>def a = pop_f32();
push_f32(F32_floor(a));
</pre>`;
window.traces.F32_TRUNC = {}
window.traces.F32_TRUNC.parsed = `<pre class=''>def a = pop_f32();
def arg__1431 = (a);
def r = F32_trunc(arg__1431);
def arg__1430 = (r);
def eff__1429 = push_f32(arg__1430);
</pre>`;
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
window.traces.F32_TRUNC.scheduled = `<pre class=''>def a = pop_f32();
def r = F32_trunc(a);
def eff__1429 = push_f32(r);
</pre>`;
window.traces.F32_TRUNC.pretty = `<pre class=''>def a = pop_f32();
push_f32(F32_trunc(a));
</pre>`;
window.traces.F32_NEAREST = {}
window.traces.F32_NEAREST.parsed = `<pre class=''>def a = pop_f32();
def arg__1434 = (a);
def r = float.round(arg__1434);
def arg__1433 = (r);
def eff__1432 = push_f32(arg__1433);
</pre>`;
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
window.traces.F32_NEAREST.scheduled = `<pre class=''>def a = pop_f32();
def r = F32_round(a);
def eff__1432 = push_f32(r);
</pre>`;
window.traces.F32_NEAREST.pretty = `<pre class=''>def a = pop_f32();
push_f32(F32_round(a));
</pre>`;
window.traces.F32_SQRT = {}
window.traces.F32_SQRT.parsed = `<pre class=''>def a = pop_f32();
def arg__1437 = (a);
def r = float.sqrt(arg__1437);
def arg__1436 = (r);
def eff__1435 = push_f32(arg__1436);
</pre>`;
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
window.traces.F32_SQRT.scheduled = `<pre class=''>def a = pop_f32();
def r = F32_sqrt(a);
def eff__1435 = push_f32(r);
</pre>`;
window.traces.F32_SQRT.pretty = `<pre class=''>def a = pop_f32();
push_f32(F32_sqrt(a));
</pre>`;
window.traces.F32_ADD = {}
window.traces.F32_ADD.parsed = `<pre class=''>def b = pop_f32();
def a = pop_f32();
def arg__1441 = (b);
def arg__1440 = (a);
def r = float.+(arg__1440, arg__1441);
def arg__1439 = (r);
def eff__1438 = push_f32(arg__1439);
</pre>`;
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
window.traces.F32_ADD.scheduled = `<pre class=''>def b = pop_f32();
def a = pop_f32();
def r = F32_plus(a, b);
def eff__1438 = push_f32(r);
</pre>`;
window.traces.F32_ADD.pretty = `<pre class=''>def b = pop_f32();
def a = pop_f32();
push_f32(F32_plus(a, b));
</pre>`;
window.traces.F32_SUB = {}
window.traces.F32_SUB.parsed = `<pre class=''>def b = pop_f32();
def a = pop_f32();
def arg__1445 = (b);
def arg__1444 = (a);
def r = float.-(arg__1444, arg__1445);
def arg__1443 = (r);
def eff__1442 = push_f32(arg__1443);
</pre>`;
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
window.traces.F32_SUB.scheduled = `<pre class=''>def b = pop_f32();
def a = pop_f32();
def r = F32_minus(a, b);
def eff__1442 = push_f32(r);
</pre>`;
window.traces.F32_SUB.pretty = `<pre class=''>def b = pop_f32();
def a = pop_f32();
push_f32(F32_minus(a, b));
</pre>`;
window.traces.F32_MUL = {}
window.traces.F32_MUL.parsed = `<pre class=''>def b = pop_f32();
def a = pop_f32();
def arg__1449 = (b);
def arg__1448 = (a);
def r = float.*(arg__1448, arg__1449);
def arg__1447 = (r);
def eff__1446 = push_f32(arg__1447);
</pre>`;
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
window.traces.F32_MUL.scheduled = `<pre class=''>def b = pop_f32();
def a = pop_f32();
def r = F32_times(a, b);
def eff__1446 = push_f32(r);
</pre>`;
window.traces.F32_MUL.pretty = `<pre class=''>def b = pop_f32();
def a = pop_f32();
push_f32(F32_times(a, b));
</pre>`;
window.traces.F32_DIV = {}
window.traces.F32_DIV.parsed = `<pre class=''>def b = pop_f32();
def a = pop_f32();
def arg__1457 = (b);
def arg__1456 = (a);
def r = float./(arg__1456, arg__1457);
def arg__1455 : float = 0.0f;
def arg__1454 = (b);
def cond__1450 = float.==(arg__1454, arg__1455);
if (cond__1450) {
	def eff__1451 = trapDivideByZero();
} else {
	def arg__1453 = (r);
	def eff__1452 = push_f32(arg__1453);
}
// phis: 
</pre>`;
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
window.traces.F32_DIV.scheduled = `<pre class=''>def b = pop_f32();
def a = pop_f32();
def eff__1451 = trapDivideByZero();
def eff_merge__1463 = merge(eff__1451, r_state__1462);
def eff_nop__1464 = nop();
def r = F32_div(a, b);
def eff__1452 = push_f32(r);
def eff_merge__1465 = merge(eff_nop__1464, eff__1452);
</pre>`;
window.traces.F32_DIV.pretty = `<pre class=''>def b = pop_f32();
def a = pop_f32();
trapDivideByZero();
push_f32(F32_div(a, b));
</pre>`;
window.traces.F64_ABS = {}
window.traces.F64_ABS.parsed = `<pre class=''>def a = pop_f64();
def arg__1468 = (a);
def r = double.abs(arg__1468);
def arg__1467 = (r);
def eff__1466 = push_f64(arg__1467);
</pre>`;
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
window.traces.F64_ABS.scheduled = `<pre class=''>def a = pop_f64();
def r = F64_abs(a);
def eff__1466 = push_f64(r);
</pre>`;
window.traces.F64_ABS.pretty = `<pre class=''>def a = pop_f64();
push_f64(F64_abs(a));
</pre>`;
window.traces.F64_NEG = {}
window.traces.F64_NEG.parsed = `<pre class=''>def a = pop_f64();
def arg__1471 = (a);
def r = F64_neg(arg__1471);
def arg__1470 = (r);
def eff__1469 = push_f64(arg__1470);
</pre>`;
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
window.traces.F64_NEG.scheduled = `<pre class=''>def a = pop_f64();
def r = F64_neg(a);
def eff__1469 = push_f64(r);
</pre>`;
window.traces.F64_NEG.pretty = `<pre class=''>def a = pop_f64();
push_f64(F64_neg(a));
</pre>`;
window.traces.F64_CEIL = {}
window.traces.F64_CEIL.parsed = `<pre class=''>def a = pop_f64();
def arg__1474 = (a);
def r = F64_ceil(arg__1474);
def arg__1473 = (r);
def eff__1472 = push_f64(arg__1473);
</pre>`;
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
window.traces.F64_CEIL.scheduled = `<pre class=''>def a = pop_f64();
def r = F64_ceil(a);
def eff__1472 = push_f64(r);
</pre>`;
window.traces.F64_CEIL.pretty = `<pre class=''>def a = pop_f64();
push_f64(F64_ceil(a));
</pre>`;
window.traces.F64_FLOOR = {}
window.traces.F64_FLOOR.parsed = `<pre class=''>def a = pop_f64();
def arg__1477 = (a);
def r = F64_floor(arg__1477);
def arg__1476 = (r);
def eff__1475 = push_f64(arg__1476);
</pre>`;
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
window.traces.F64_FLOOR.scheduled = `<pre class=''>def a = pop_f64();
def r = F64_floor(a);
def eff__1475 = push_f64(r);
</pre>`;
window.traces.F64_FLOOR.pretty = `<pre class=''>def a = pop_f64();
push_f64(F64_floor(a));
</pre>`;
window.traces.F64_TRUNC = {}
window.traces.F64_TRUNC.parsed = `<pre class=''>def a = pop_f64();
def arg__1480 = (a);
def r = F64_trunc(arg__1480);
def arg__1479 = (r);
def eff__1478 = push_f64(arg__1479);
</pre>`;
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
window.traces.F64_TRUNC.scheduled = `<pre class=''>def a = pop_f64();
def r = F64_trunc(a);
def eff__1478 = push_f64(r);
</pre>`;
window.traces.F64_TRUNC.pretty = `<pre class=''>def a = pop_f64();
push_f64(F64_trunc(a));
</pre>`;
window.traces.F64_NEAREST = {}
window.traces.F64_NEAREST.parsed = `<pre class=''>def a = pop_f64();
def arg__1483 = (a);
def r = double.round(arg__1483);
def arg__1482 = (r);
def eff__1481 = push_f64(arg__1482);
</pre>`;
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
window.traces.F64_NEAREST.scheduled = `<pre class=''>def a = pop_f64();
def r = F64_round(a);
def eff__1481 = push_f64(r);
</pre>`;
window.traces.F64_NEAREST.pretty = `<pre class=''>def a = pop_f64();
push_f64(F64_round(a));
</pre>`;
window.traces.F64_SQRT = {}
window.traces.F64_SQRT.parsed = `<pre class=''>def a = pop_f64();
def arg__1486 = (a);
def r = double.sqrt(arg__1486);
def arg__1485 = (r);
def eff__1484 = push_f64(arg__1485);
</pre>`;
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
window.traces.F64_SQRT.scheduled = `<pre class=''>def a = pop_f64();
def r = F64_sqrt(a);
def eff__1484 = push_f64(r);
</pre>`;
window.traces.F64_SQRT.pretty = `<pre class=''>def a = pop_f64();
push_f64(F64_sqrt(a));
</pre>`;
window.traces.F64_ADD = {}
window.traces.F64_ADD.parsed = `<pre class=''>def b = pop_f64();
def a = pop_f64();
def arg__1490 = (b);
def arg__1489 = (a);
def r = double.+(arg__1489, arg__1490);
def arg__1488 = (r);
def eff__1487 = push_f64(arg__1488);
</pre>`;
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
window.traces.F64_ADD.scheduled = `<pre class=''>def b = pop_f64();
def a = pop_f64();
def r = F64_plus(a, b);
def eff__1487 = push_f64(r);
</pre>`;
window.traces.F64_ADD.pretty = `<pre class=''>def b = pop_f64();
def a = pop_f64();
push_f64(F64_plus(a, b));
</pre>`;
window.traces.F64_SUB = {}
window.traces.F64_SUB.parsed = `<pre class=''>def b = pop_f64();
def a = pop_f64();
def arg__1494 = (b);
def arg__1493 = (a);
def r = double.-(arg__1493, arg__1494);
def arg__1492 = (r);
def eff__1491 = push_f64(arg__1492);
</pre>`;
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
window.traces.F64_SUB.scheduled = `<pre class=''>def b = pop_f64();
def a = pop_f64();
def r = F64_minus(a, b);
def eff__1491 = push_f64(r);
</pre>`;
window.traces.F64_SUB.pretty = `<pre class=''>def b = pop_f64();
def a = pop_f64();
push_f64(F64_minus(a, b));
</pre>`;
window.traces.F64_MUL = {}
window.traces.F64_MUL.parsed = `<pre class=''>def b = pop_f64();
def a = pop_f64();
def arg__1498 = (b);
def arg__1497 = (a);
def r = double.*(arg__1497, arg__1498);
def arg__1496 = (r);
def eff__1495 = push_f64(arg__1496);
</pre>`;
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
window.traces.F64_MUL.scheduled = `<pre class=''>def b = pop_f64();
def a = pop_f64();
def r = F64_times(a, b);
def eff__1495 = push_f64(r);
</pre>`;
window.traces.F64_MUL.pretty = `<pre class=''>def b = pop_f64();
def a = pop_f64();
push_f64(F64_times(a, b));
</pre>`;
window.traces.F64_DIV = {}
window.traces.F64_DIV.parsed = `<pre class=''>def b = pop_f64();
def a = pop_f64();
def arg__1506 = (b);
def arg__1505 = (a);
def r = double./(arg__1505, arg__1506);
def arg__1504 : float = 0.0f;
def arg__1503 = (b);
def cond__1499 = double.==(arg__1503, arg__1504);
if (cond__1499) {
	def eff__1500 = trapDivideByZero();
} else {
	def arg__1502 = (r);
	def eff__1501 = push_f64(arg__1502);
}
// phis: 
</pre>`;
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
window.traces.F64_DIV.scheduled = `<pre class=''>def b = pop_f64();
def a = pop_f64();
def eff__1500 = trapDivideByZero();
def eff_merge__1512 = merge(eff__1500, r_state__1511);
def eff_nop__1513 = nop();
def r = F64_div(a, b);
def eff__1501 = push_f64(r);
def eff_merge__1514 = merge(eff_nop__1513, eff__1501);
</pre>`;
window.traces.F64_DIV.pretty = `<pre class=''>def b = pop_f64();
def a = pop_f64();
trapDivideByZero();
push_f64(F64_div(a, b));
</pre>`;
window.traces.I32_WRAP_I64 = {}
window.traces.I32_WRAP_I64.parsed = `<pre class=''>def a = pop_u64();
def arg__1517 = (a);
def r = U32_wrap_u64(arg__1517);
def arg__1516 = (r);
def eff__1515 = push_u32(arg__1516);
</pre>`;
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
window.traces.I32_WRAP_I64.scheduled = `<pre class=''>def a = pop_u64();
def r = U32_wrap_u64(a);
def eff__1515 = push_u32(r);
</pre>`;
window.traces.I32_WRAP_I64.pretty = `<pre class=''>def a = pop_u64();
def r = U32_wrap_u64(a);
push_u32(r);
</pre>`;
window.traces.I32_TRUNC_F32_S = {}
window.traces.I32_TRUNC_F32_S.parsed = `<pre class=''>def a = pop_f32();
def arg__1520 = (a);
def r = U32_trunc_f32_s(arg__1520);
def arg__1519 = (r);
def eff__1518 = push_u32(arg__1519);
</pre>`;
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
window.traces.I32_TRUNC_F32_S.scheduled = `<pre class=''>def a = pop_f32();
def r = U32_trunc_f32_s(a);
def eff__1518 = push_u32(r);
</pre>`;
window.traces.I32_TRUNC_F32_S.pretty = `<pre class=''>def a = pop_f32();
def r = U32_trunc_f32_s(a);
push_u32(r);
</pre>`;
window.traces.I32_TRUNC_F32_U = {}
window.traces.I32_TRUNC_F32_U.parsed = `<pre class=''>def a = pop_f32();
def arg__1523 = (a);
def r = U32_trunc_f32_u(arg__1523);
def arg__1522 = (r);
def eff__1521 = push_u32(arg__1522);
</pre>`;
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
window.traces.I32_TRUNC_F32_U.scheduled = `<pre class=''>def a = pop_f32();
def r = U32_trunc_f32_u(a);
def eff__1521 = push_u32(r);
</pre>`;
window.traces.I32_TRUNC_F32_U.pretty = `<pre class=''>def a = pop_f32();
def r = U32_trunc_f32_u(a);
push_u32(r);
</pre>`;
window.traces.I32_TRUNC_F64_S = {}
window.traces.I32_TRUNC_F64_S.parsed = `<pre class=''>def a = pop_f64();
def arg__1526 = (a);
def r = U32_trunc_f64_s(arg__1526);
def arg__1525 = (r);
def eff__1524 = push_u32(arg__1525);
</pre>`;
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
window.traces.I32_TRUNC_F64_S.scheduled = `<pre class=''>def a = pop_f64();
def r = U32_trunc_f64_s(a);
def eff__1524 = push_u32(r);
</pre>`;
window.traces.I32_TRUNC_F64_S.pretty = `<pre class=''>def a = pop_f64();
def r = U32_trunc_f64_s(a);
push_u32(r);
</pre>`;
window.traces.I32_TRUNC_F64_U = {}
window.traces.I32_TRUNC_F64_U.parsed = `<pre class=''>def a = pop_f64();
def arg__1529 = (a);
def r = U32_trunc_f64_u(arg__1529);
def arg__1528 = (r);
def eff__1527 = push_u32(arg__1528);
</pre>`;
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
window.traces.I32_TRUNC_F64_U.scheduled = `<pre class=''>def a = pop_f64();
def r = U32_trunc_f64_u(a);
def eff__1527 = push_u32(r);
</pre>`;
window.traces.I32_TRUNC_F64_U.pretty = `<pre class=''>def a = pop_f64();
def r = U32_trunc_f64_u(a);
push_u32(r);
</pre>`;
window.traces.I64_EXTEND_I32_S = {}
window.traces.I64_EXTEND_I32_S.parsed = `<pre class=''>def a = pop_u32();
def arg__1532 = (a);
def r = U64_extend_i32_s(arg__1532);
def arg__1531 = (r);
def eff__1530 = push_u64(arg__1531);
</pre>`;
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
window.traces.I64_EXTEND_I32_S.scheduled = `<pre class=''>def a = pop_u32();
def r = U64_extend_i32_s(a);
def eff__1530 = push_u64(r);
</pre>`;
window.traces.I64_EXTEND_I32_S.pretty = `<pre class=''>def a = pop_u32();
def r = U64_extend_i32_s(a);
push_u64(r);
</pre>`;
window.traces.I64_EXTEND_I32_U = {}
window.traces.I64_EXTEND_I32_U.parsed = `<pre class=''>def a = pop_u32();
def arg__1535 = (a);
def r = U64_extend_i32_u(arg__1535);
def arg__1534 = (r);
def eff__1533 = push_u64(arg__1534);
</pre>`;
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
window.traces.I64_EXTEND_I32_U.scheduled = `<pre class=''>def a = pop_u32();
def r = U64_extend_i32_u(a);
def eff__1533 = push_u64(r);
</pre>`;
window.traces.I64_EXTEND_I32_U.pretty = `<pre class=''>def a = pop_u32();
def r = U64_extend_i32_u(a);
push_u64(r);
</pre>`;
window.traces.I64_TRUNC_F32_S = {}
window.traces.I64_TRUNC_F32_S.parsed = `<pre class=''>def a = pop_f32();
def arg__1538 = (a);
def r = U64_trunc_f32_s(arg__1538);
def arg__1537 = (r);
def eff__1536 = push_u64(arg__1537);
</pre>`;
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
window.traces.I64_TRUNC_F32_S.scheduled = `<pre class=''>def a = pop_f32();
def r = U64_trunc_f32_s(a);
def eff__1536 = push_u64(r);
</pre>`;
window.traces.I64_TRUNC_F32_S.pretty = `<pre class=''>def a = pop_f32();
def r = U64_trunc_f32_s(a);
push_u64(r);
</pre>`;
window.traces.I64_TRUNC_F32_U = {}
window.traces.I64_TRUNC_F32_U.parsed = `<pre class=''>def a = pop_f32();
def arg__1541 = (a);
def r = U64_trunc_f32_u(arg__1541);
def arg__1540 = (r);
def eff__1539 = push_u64(arg__1540);
</pre>`;
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
window.traces.I64_TRUNC_F32_U.scheduled = `<pre class=''>def a = pop_f32();
def r = U64_trunc_f32_u(a);
def eff__1539 = push_u64(r);
</pre>`;
window.traces.I64_TRUNC_F32_U.pretty = `<pre class=''>def a = pop_f32();
def r = U64_trunc_f32_u(a);
push_u64(r);
</pre>`;
window.traces.I64_TRUNC_F64_S = {}
window.traces.I64_TRUNC_F64_S.parsed = `<pre class=''>def a = pop_f64();
def arg__1544 = (a);
def r = U64_trunc_f64_s(arg__1544);
def arg__1543 = (r);
def eff__1542 = push_u64(arg__1543);
</pre>`;
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
window.traces.I64_TRUNC_F64_S.scheduled = `<pre class=''>def a = pop_f64();
def r = U64_trunc_f64_s(a);
def eff__1542 = push_u64(r);
</pre>`;
window.traces.I64_TRUNC_F64_S.pretty = `<pre class=''>def a = pop_f64();
def r = U64_trunc_f64_s(a);
push_u64(r);
</pre>`;
window.traces.I64_TRUNC_F64_U = {}
window.traces.I64_TRUNC_F64_U.parsed = `<pre class=''>def a = pop_f64();
def arg__1547 = (a);
def r = U64_trunc_f64_u(arg__1547);
def arg__1546 = (r);
def eff__1545 = push_u64(arg__1546);
</pre>`;
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
window.traces.I64_TRUNC_F64_U.scheduled = `<pre class=''>def a = pop_f64();
def r = U64_trunc_f64_u(a);
def eff__1545 = push_u64(r);
</pre>`;
window.traces.I64_TRUNC_F64_U.pretty = `<pre class=''>def a = pop_f64();
def r = U64_trunc_f64_u(a);
push_u64(r);
</pre>`;
window.traces.F32_CONVERT_I32_S = {}
window.traces.F32_CONVERT_I32_S.parsed = `<pre class=''>def b = pop_u32();
def arg__1550 = (b);
def r = F32_convert_i32_s(arg__1550);
def arg__1549 = (r);
def eff__1548 = push_f32(arg__1549);
</pre>`;
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
window.traces.F32_CONVERT_I32_S.scheduled = `<pre class=''>def b = pop_u32();
def r = F32_convert_i32_s(b);
def eff__1548 = push_f32(r);
</pre>`;
window.traces.F32_CONVERT_I32_S.pretty = `<pre class=''>def b = pop_u32();
def r = F32_convert_i32_s(b);
push_f32(r);
</pre>`;
window.traces.F32_CONVERT_I32_U = {}
window.traces.F32_CONVERT_I32_U.parsed = `<pre class=''>def b = pop_u32();
def arg__1553 = (b);
def r = F32_convert_i32_u(arg__1553);
def arg__1552 = (r);
def eff__1551 = push_f32(arg__1552);
</pre>`;
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
window.traces.F32_CONVERT_I32_U.scheduled = `<pre class=''>def b = pop_u32();
def r = F32_convert_i32_u(b);
def eff__1551 = push_f32(r);
</pre>`;
window.traces.F32_CONVERT_I32_U.pretty = `<pre class=''>def b = pop_u32();
def r = F32_convert_i32_u(b);
push_f32(r);
</pre>`;
window.traces.F32_CONVERT_I64_S = {}
window.traces.F32_CONVERT_I64_S.parsed = `<pre class=''>def b = pop_u64();
def arg__1556 = (b);
def r = F32_convert_i64_s(arg__1556);
def arg__1555 = (r);
def eff__1554 = push_f32(arg__1555);
</pre>`;
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
window.traces.F32_CONVERT_I64_S.scheduled = `<pre class=''>def b = pop_u64();
def r = F32_convert_i64_s(b);
def eff__1554 = push_f32(r);
</pre>`;
window.traces.F32_CONVERT_I64_S.pretty = `<pre class=''>def b = pop_u64();
def r = F32_convert_i64_s(b);
push_f32(r);
</pre>`;
window.traces.F32_CONVERT_I64_U = {}
window.traces.F32_CONVERT_I64_U.parsed = `<pre class=''>def b = pop_u64();
def arg__1559 = (b);
def r = F32_convert_i64_u(arg__1559);
def arg__1558 = (r);
def eff__1557 = push_f32(arg__1558);
</pre>`;
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
window.traces.F32_CONVERT_I64_U.scheduled = `<pre class=''>def b = pop_u64();
def r = F32_convert_i64_u(b);
def eff__1557 = push_f32(r);
</pre>`;
window.traces.F32_CONVERT_I64_U.pretty = `<pre class=''>def b = pop_u64();
def r = F32_convert_i64_u(b);
push_f32(r);
</pre>`;
window.traces.F64_CONVERT_I32_S = {}
window.traces.F64_CONVERT_I32_S.parsed = `<pre class=''>def b = pop_u32();
def arg__1562 = (b);
def r = F64_convert_i32_s(arg__1562);
def arg__1561 = (r);
def eff__1560 = push_f64(arg__1561);
</pre>`;
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
window.traces.F64_CONVERT_I32_S.scheduled = `<pre class=''>def b = pop_u32();
def r = F64_convert_i32_s(b);
def eff__1560 = push_f64(r);
</pre>`;
window.traces.F64_CONVERT_I32_S.pretty = `<pre class=''>def b = pop_u32();
def r = F64_convert_i32_s(b);
push_f64(r);
</pre>`;
window.traces.F64_CONVERT_I32_U = {}
window.traces.F64_CONVERT_I32_U.parsed = `<pre class=''>def b = pop_u32();
def arg__1565 = (b);
def r = F64_convert_i32_u(arg__1565);
def arg__1564 = (r);
def eff__1563 = push_f64(arg__1564);
</pre>`;
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
window.traces.F64_CONVERT_I32_U.scheduled = `<pre class=''>def b = pop_u32();
def r = F64_convert_i32_u(b);
def eff__1563 = push_f64(r);
</pre>`;
window.traces.F64_CONVERT_I32_U.pretty = `<pre class=''>def b = pop_u32();
def r = F64_convert_i32_u(b);
push_f64(r);
</pre>`;
window.traces.F64_CONVERT_I64_S = {}
window.traces.F64_CONVERT_I64_S.parsed = `<pre class=''>def b = pop_u64();
def arg__1568 = (b);
def r = F64_convert_i64_s(arg__1568);
def arg__1567 = (r);
def eff__1566 = push_f64(arg__1567);
</pre>`;
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
window.traces.F64_CONVERT_I64_S.scheduled = `<pre class=''>def b = pop_u64();
def r = F64_convert_i64_s(b);
def eff__1566 = push_f64(r);
</pre>`;
window.traces.F64_CONVERT_I64_S.pretty = `<pre class=''>def b = pop_u64();
def r = F64_convert_i64_s(b);
push_f64(r);
</pre>`;
window.traces.F64_CONVERT_I64_U = {}
window.traces.F64_CONVERT_I64_U.parsed = `<pre class=''>def b = pop_u64();
def arg__1571 = (b);
def r = F64_convert_i64_u(arg__1571);
def arg__1570 = (r);
def eff__1569 = push_f64(arg__1570);
</pre>`;
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
window.traces.F64_CONVERT_I64_U.scheduled = `<pre class=''>def b = pop_u64();
def r = F64_convert_i64_u(b);
def eff__1569 = push_f64(r);
</pre>`;
window.traces.F64_CONVERT_I64_U.pretty = `<pre class=''>def b = pop_u64();
def r = F64_convert_i64_u(b);
push_f64(r);
</pre>`;
window.traces.I32_REINTERPRET_F32 = {}
window.traces.I32_REINTERPRET_F32.parsed = `<pre class=''>def a = pop_f32();
def arg__1574 = (a);
def r = u32_reinterpret_f32(arg__1574);
def arg__1573 = (r);
def eff__1572 = push_u32(arg__1573);
</pre>`;
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
window.traces.I32_REINTERPRET_F32.scheduled = `<pre class=''>def a = pop_f32();
def r = u32_reinterpret_f32(a);
def eff__1572 = push_u32(r);
</pre>`;
window.traces.I32_REINTERPRET_F32.pretty = `<pre class=''>def a = pop_f32();
def r = u32_reinterpret_f32(a);
push_u32(r);
</pre>`;
window.traces.I64_REINTERPRET_F64 = {}
window.traces.I64_REINTERPRET_F64.parsed = `<pre class=''>def a = pop_f64();
def arg__1577 = (a);
def r = u64_reinterpret_f64(arg__1577);
def arg__1576 = (r);
def eff__1575 = push_u64(arg__1576);
</pre>`;
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
window.traces.I64_REINTERPRET_F64.scheduled = `<pre class=''>def a = pop_f64();
def r = u64_reinterpret_f64(a);
def eff__1575 = push_u64(r);
</pre>`;
window.traces.I64_REINTERPRET_F64.pretty = `<pre class=''>def a = pop_f64();
def r = u64_reinterpret_f64(a);
push_u64(r);
</pre>`;
window.traces.F32_REINTERPRET_I32 = {}
window.traces.F32_REINTERPRET_I32.parsed = `<pre class=''>def a = pop_u32();
def arg__1580 = (a);
def r = f32_reinterpret_u32(arg__1580);
def arg__1579 = (r);
def eff__1578 = push_f32(arg__1579);
</pre>`;
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
window.traces.F32_REINTERPRET_I32.scheduled = `<pre class=''>def a = pop_u32();
def r = f32_reinterpret_u32(a);
def eff__1578 = push_f32(r);
</pre>`;
window.traces.F32_REINTERPRET_I32.pretty = `<pre class=''>def a = pop_u32();
def r = f32_reinterpret_u32(a);
push_f32(r);
</pre>`;
window.traces.F64_REINTERPRET_I64 = {}
window.traces.F64_REINTERPRET_I64.parsed = `<pre class=''>def a = pop_u64();
def arg__1583 = (a);
def r = f64_reinterpret_u64(arg__1583);
def arg__1582 = (r);
def eff__1581 = push_f64(arg__1582);
</pre>`;
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
window.traces.F64_REINTERPRET_I64.scheduled = `<pre class=''>def a = pop_u64();
def r = f64_reinterpret_u64(a);
def eff__1581 = push_f64(r);
</pre>`;
window.traces.F64_REINTERPRET_I64.pretty = `<pre class=''>def a = pop_u64();
def r = f64_reinterpret_u64(a);
push_f64(r);
</pre>`;
window.traces.I32_EXTEND8_S = {}
window.traces.I32_EXTEND8_S.parsed = `<pre class=''>def a = pop_u32();
def arg__1586 = (a);
def r = U32_extend8_s(arg__1586);
def arg__1585 = (r);
def eff__1584 = push_u32(arg__1585);
</pre>`;
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
window.traces.I32_EXTEND8_S.scheduled = `<pre class=''>def a = pop_u32();
def r = U32_extend8_s(a);
def eff__1584 = push_u32(r);
</pre>`;
window.traces.I32_EXTEND8_S.pretty = `<pre class=''>def a = pop_u32();
def r = U32_extend8_s(a);
push_u32(r);
</pre>`;
window.traces.I32_EXTEND16_S = {}
window.traces.I32_EXTEND16_S.parsed = `<pre class=''>def a = pop_u32();
def arg__1589 = (a);
def r = U32_extend16_s(arg__1589);
def arg__1588 = (r);
def eff__1587 = push_u32(arg__1588);
</pre>`;
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
window.traces.I32_EXTEND16_S.scheduled = `<pre class=''>def a = pop_u32();
def r = U32_extend16_s(a);
def eff__1587 = push_u32(r);
</pre>`;
window.traces.I32_EXTEND16_S.pretty = `<pre class=''>def a = pop_u32();
def r = U32_extend16_s(a);
push_u32(r);
</pre>`;
window.traces.I64_EXTEND8_S = {}
window.traces.I64_EXTEND8_S.parsed = `<pre class=''>def a = pop_u64();
def arg__1592 = (a);
def r = U64_extend8_s(arg__1592);
def arg__1591 = (r);
def eff__1590 = push_u64(arg__1591);
</pre>`;
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
window.traces.I64_EXTEND8_S.scheduled = `<pre class=''>def a = pop_u64();
def r = U64_extend8_s(a);
def eff__1590 = push_u64(r);
</pre>`;
window.traces.I64_EXTEND8_S.pretty = `<pre class=''>def a = pop_u64();
def r = U64_extend8_s(a);
push_u64(r);
</pre>`;
window.traces.I64_EXTEND16_S = {}
window.traces.I64_EXTEND16_S.parsed = `<pre class=''>def a = pop_u64();
def arg__1595 = (a);
def r = U64_extend16_s(arg__1595);
def arg__1594 = (r);
def eff__1593 = push_u64(arg__1594);
</pre>`;
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
window.traces.I64_EXTEND16_S.scheduled = `<pre class=''>def a = pop_u64();
def r = U64_extend16_s(a);
def eff__1593 = push_u64(r);
</pre>`;
window.traces.I64_EXTEND16_S.pretty = `<pre class=''>def a = pop_u64();
def r = U64_extend16_s(a);
push_u64(r);
</pre>`;
window.traces.I64_EXTEND32_S = {}
window.traces.I64_EXTEND32_S.parsed = `<pre class=''>def a = pop_u64();
def arg__1598 = (a);
def r = U64_extend32_s(arg__1598);
def arg__1597 = (r);
def eff__1596 = push_u64(arg__1597);
</pre>`;
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
window.traces.I64_EXTEND32_S.scheduled = `<pre class=''>def a = pop_u64();
def r = U64_extend32_s(a);
def eff__1596 = push_u64(r);
</pre>`;
window.traces.I64_EXTEND32_S.pretty = `<pre class=''>def a = pop_u64();
def r = U64_extend32_s(a);
push_u64(r);
</pre>`;
window.traces.REF_NULL = {}
window.traces.REF_NULL.parsed = `<pre class=''>def idx = imm_readULEB32();
def arg__1600 = object_Null();
def eff__1599 = push_Object(arg__1600);
</pre>`;
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
window.traces.REF_NULL.scheduled = `<pre class=''>def idx = imm_readULEB32();
def arg__1600 = object_Null();
def eff__1599 = push_Object(arg__1600);
</pre>`;
window.traces.REF_NULL.pretty = `<pre class=''>def idx = imm_readULEB32();
def arg = object_Null();
push_Object(arg);
</pre>`;
window.traces.REF_IS_NULL = {}
window.traces.REF_IS_NULL.parsed = `<pre class=''>def obj = pop_Object();
def arg__1606 = (obj);
def cond__1601 = object_isNull(arg__1606);
if (cond__1601) {
	def arg__1603 : u32 = 1;
	def eff__1602 = push_u32(arg__1603);
} else {
	def arg__1605 : u32 = 0;
	def eff__1604 = push_u32(arg__1605);
}
// phis: 
</pre>`;
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
window.traces.REF_IS_NULL.scheduled = `<pre class=''>def arg__1603 : u32 = 1;
def abs__1607 = rtcast_u32(arg__1603);
def obj = pop_Object();
def eff_push__1613 = push_u32(abs__1607);
</pre>`;
window.traces.REF_IS_NULL.pretty = `<pre class=''>def obj = pop_Object();
push_u32(rtcast_u32(1));
</pre>`;
window.traces.REF_AS_NON_NULL = {}
window.traces.REF_AS_NON_NULL.parsed = `<pre class=''>def obj = pop_Object();
def arg__1618 = (obj);
def cond__1616 = object_isNull(arg__1618);
if (cond__1616) {
	def eff__1617 = trapNull();
}
// phis: 
def arg__1615 = (obj);
def eff__1614 = push_Object(arg__1615);
</pre>`;
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
window.traces.REF_AS_NON_NULL.scheduled = `<pre class=''>def obj = pop_Object();
def eff__1617 = trapNull();
def eff_merge__1623 = merge(eff__1617, r_state__1622);
def eff_nop__1624 = nop();
def eff_merge__1625 = merge(eff_nop__1624, obj);
def eff__1614 = push_Object(obj);
</pre>`;
window.traces.REF_AS_NON_NULL.pretty = `<pre class=''>def obj = pop_Object();
trapNull();
push_Object(obj);
</pre>`;
window.traces.STRUCT_NEW = {}
window.traces.STRUCT_NEW.parsed = `<pre class=''>def struct_idx = imm_readULEB32();
def arg__1629 = (struct_idx);
def sig = m_getSignature(arg__1629);
def arg__1628 = (sig);
def obj = object_New(arg__1628);
def arg__1627 = (obj);
def eff__1626 = push_Object(arg__1627);
</pre>`;
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
window.traces.STRUCT_NEW.scheduled = `<pre class=''>def struct_idx = imm_readULEB32();
def sig = m_getSignature(struct_idx);
def obj = object_New(sig);
def eff__1626 = push_Object(obj);
</pre>`;
window.traces.STRUCT_NEW.pretty = `<pre class=''>def struct_idx = imm_readULEB32();
def sig = m_getSignature(struct_idx);
push_Object(object_New(sig));
</pre>`;
window.traces.STRUCT_GET = {}
window.traces.STRUCT_GET.parsed = `<pre class=''>def struct_index = imm_readULEB32();
def field_index = imm_readULEB32();
def arg__1661 = (field_index);
def arg__1660 = (struct_index);
def kind = m_getFieldKind(arg__1660, arg__1661);
def arg__1659 = (field_index);
def arg__1658 = (struct_index);
def offset = m_getFieldOffset(arg__1658, arg__1659);
def obj = pop_Object();
def arg__1657 = (obj);
def cond__1655 = object_isNull(arg__1657);
if (cond__1655) {
	def ret__1656 = trapNull();
}
// phis: 
def cond__1630 = (kind);
</pre>`;
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
window.traces.STRUCT_GET.scheduled = `<pre class=''>def struct_index = imm_readULEB32();
def field_index = imm_readULEB32();
def obj = pop_Object();
def ret__1656 = trapNull();
def eff_merge__1666 = merge(ret__1656, field_index);
def eff_nop__1667 = nop();
def eff_merge__1668 = merge(eff_nop__1667, obj);
def eff_nop__1669 = nop();
def eff_merge__1671 = merge(eff_nop__1669, r_state__1670);
</pre>`;
window.traces.STRUCT_GET.pretty = `<pre class=''>def struct_index = imm_readULEB32();
def field_index = imm_readULEB32();
def obj = pop_Object();
trapNull();
</pre>`;
window.traces.STRUCT_GET_S = {}
window.traces.STRUCT_GET_S.parsed = `<pre class=''>def struct_index = imm_readULEB32();
def field_index = imm_readULEB32();
def arg__1689 = (field_index);
def arg__1688 = (struct_index);
def kind = m_getFieldKind(arg__1688, arg__1689);
def arg__1687 = (field_index);
def arg__1686 = (struct_index);
def offset = m_getFieldOffset(arg__1686, arg__1687);
def obj = pop_Object();
def arg__1685 = (obj);
def cond__1683 = object_isNull(arg__1685);
if (cond__1683) {
	def ret__1684 = trapNull();
}
// phis: 
def cond__1672 = (kind);
</pre>`;
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
window.traces.STRUCT_GET_S.scheduled = `<pre class=''>def struct_index = imm_readULEB32();
def field_index = imm_readULEB32();
def obj = pop_Object();
def ret__1684 = trapNull();
def eff_merge__1694 = merge(ret__1684, field_index);
def eff_nop__1695 = nop();
def eff_merge__1696 = merge(eff_nop__1695, obj);
def eff_nop__1697 = nop();
def eff_merge__1699 = merge(eff_nop__1697, r_state__1698);
</pre>`;
window.traces.STRUCT_GET_S.pretty = `<pre class=''>def struct_index = imm_readULEB32();
def field_index = imm_readULEB32();
def obj = pop_Object();
trapNull();
</pre>`;
window.traces.STRUCT_GET_U = {}
window.traces.STRUCT_GET_U.parsed = `<pre class=''>def struct_index = imm_readULEB32();
def field_index = imm_readULEB32();
def arg__1717 = (field_index);
def arg__1716 = (struct_index);
def kind = m_getFieldKind(arg__1716, arg__1717);
def arg__1715 = (field_index);
def arg__1714 = (struct_index);
def offset = m_getFieldOffset(arg__1714, arg__1715);
def obj = pop_Object();
def arg__1713 = (obj);
def cond__1711 = object_isNull(arg__1713);
if (cond__1711) {
	def ret__1712 = trapNull();
}
// phis: 
def cond__1700 = (kind);
</pre>`;
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
window.traces.STRUCT_GET_U.scheduled = `<pre class=''>def struct_index = imm_readULEB32();
def field_index = imm_readULEB32();
def obj = pop_Object();
def ret__1712 = trapNull();
def eff_merge__1722 = merge(ret__1712, field_index);
def eff_nop__1723 = nop();
def eff_merge__1724 = merge(eff_nop__1723, obj);
def eff_nop__1725 = nop();
def eff_merge__1727 = merge(eff_nop__1725, r_state__1726);
</pre>`;
window.traces.STRUCT_GET_U.pretty = `<pre class=''>def struct_index = imm_readULEB32();
def field_index = imm_readULEB32();
def obj = pop_Object();
trapNull();
</pre>`;
