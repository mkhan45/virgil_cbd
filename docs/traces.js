window.traces = {};
window.info = {};
window.traces["SPLIT_BRANCHES"] = {}
window.traces["SPLIT_BRANCHES"]["parsed"] = ''
window.traces["SPLIT_BRANCHES"]["parsed"] += `<pre class=''>def c1 = pop_u32();
def arg__22 : u32 = 0;
def arg__21 = (c1);
def p = u32.!=(arg__21, arg__22);
def arg__20 : u32 = 2;
def arg__19 = (c1);
def q = u32.==(arg__19, arg__20);
def cond__0 = (p);
if (cond__0) {
	def cond__1 = (q);
	if (cond__1) {
		def arg__5 : u32 = 1;
		def eff__4 = push_u32(arg__5);
		def arg__3 : u32 = 2;
		def eff__2 = push_u32(arg__3);
	} else {
		def arg__9 : u32 = 3;
		def eff__8 = push_u32(arg__9);
		def arg__7 : u32 = 4;
		def eff__6 = push_u32(arg__7);
	}
// phis: 
} else {
	def cond__10 = (q);
	if (cond__10) {
		def arg__14 : u32 = 5;
		def eff__13 = push_u32(arg__14);
		def arg__12 : u32 = 6;
		def eff__11 = push_u32(arg__12);
	} else {
		def arg__18 : u32 = 7;
		def eff__17 = push_u32(arg__18);
		def arg__16 : u32 = 8;
		def eff__15 = push_u32(arg__16);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["SPLIT_BRANCHES"]["raw"] = ''
window.traces["SPLIT_BRANCHES"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	30 -. Stack .-> 1
	30{{"Sϕ Stack "}}
	6 --> 30
	29 --> 30
	20 --> 30
	20{{"Sϕ Stack "}}
	9 --> 20
	19 --> 20
	15 --> 20
	15["eff__15 push_u32"]
	14 --> 15
	13 -. Stack .-> 15
	13["eff__17 push_u32"]
	12 --> 13
	3 -. Stack .-> 13
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	12["arg__18 7"]
	14["arg__16 8"]
	19["eff__11 push_u32"]
	18 --> 19
	17 -. Stack .-> 19
	17["eff__13 push_u32"]
	16 --> 17
	3 -. Stack .-> 17
	16["arg__14 5"]
	18["arg__12 6"]
	9["q u32.=="]
	3 --> 9
	7 --> 9
	7["arg__20 2"]
	29{{"Sϕ Stack "}}
	9 --> 29
	28 --> 29
	25 --> 29
	25["eff__6 push_u32"]
	24 --> 25
	23 -. Stack .-> 25
	23["eff__8 push_u32"]
	22 --> 23
	3 -. Stack .-> 23
	22["arg__9 3"]
	24["arg__7 4"]
	28["eff__2 push_u32"]
	7 --> 28
	27 -. Stack .-> 28
	27["eff__4 push_u32"]
	26 --> 27
	3 -. Stack .-> 27
	26["arg__5 1"]
	6["p u32.!="]
	3 --> 6
	4 --> 6
	4["arg__22 0"]
</pre>`;
window.traces["SPLIT_BRANCHES"]["overloadOps"] = ''
window.traces["SPLIT_BRANCHES"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	30 -. Stack .-> 1
	30{{"Sϕ Stack "}}
	6 --> 30
	29 --> 30
	20 --> 30
	20{{"Sϕ Stack "}}
	9 --> 20
	19 --> 20
	15 --> 20
	15["eff__15 push_u32"]
	14 --> 15
	13 -. Stack .-> 15
	13["eff__17 push_u32"]
	12 --> 13
	3 -. Stack .-> 13
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	12["arg__18 7"]
	14["arg__16 8"]
	19["eff__11 push_u32"]
	18 --> 19
	17 -. Stack .-> 19
	17["eff__13 push_u32"]
	16 --> 17
	3 -. Stack .-> 17
	16["arg__14 5"]
	18["arg__12 6"]
	9["q U32_equals"]
	3 --> 9
	7 --> 9
	7["arg__20 2"]
	29{{"Sϕ Stack "}}
	9 --> 29
	28 --> 29
	25 --> 29
	25["eff__6 push_u32"]
	24 --> 25
	23 -. Stack .-> 25
	23["eff__8 push_u32"]
	22 --> 23
	3 -. Stack .-> 23
	22["arg__9 3"]
	24["arg__7 4"]
	28["eff__2 push_u32"]
	7 --> 28
	27 -. Stack .-> 28
	27["eff__4 push_u32"]
	26 --> 27
	3 -. Stack .-> 27
	26["arg__5 1"]
	6["p U32_not_equals"]
	3 --> 6
	4 --> 6
	4["arg__22 0"]
</pre>`;
window.traces["SPLIT_BRANCHES"]["addAbstractions"] = ''
window.traces["SPLIT_BRANCHES"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	30 -. Stack .-> 1
	30{{"Sϕ Stack "}}
	6 --> 30
	29 --> 30
	20 --> 30
	20{{"Sϕ Stack "}}
	9 --> 20
	19 --> 20
	15 --> 20
	15["eff__15 push_u32"]
	36 --> 15
	13 -. Stack .-> 15
	13["eff__17 push_u32"]
	12 --> 13
	3 -. Stack .-> 13
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	12["arg__18 7"]
	36["abs__28 lift_u32"]
	14 --> 36
	14["arg__16 8"]
	19["eff__11 push_u32"]
	35 --> 19
	17 -. Stack .-> 19
	17["eff__13 push_u32"]
	16 --> 17
	3 -. Stack .-> 17
	16["arg__14 5"]
	35["abs__27 lift_u32"]
	18 --> 35
	18["arg__12 6"]
	9["q U32_equals"]
	3 --> 9
	32 --> 9
	32["abs__24 lift_u32"]
	7 --> 32
	7["arg__20 2"]
	29{{"Sϕ Stack "}}
	9 --> 29
	28 --> 29
	25 --> 29
	25["eff__6 push_u32"]
	34 --> 25
	23 -. Stack .-> 25
	23["eff__8 push_u32"]
	22 --> 23
	3 -. Stack .-> 23
	22["arg__9 3"]
	34["abs__26 lift_u32"]
	24 --> 34
	24["arg__7 4"]
	28["eff__2 push_u32"]
	33 --> 28
	27 -. Stack .-> 28
	27["eff__4 push_u32"]
	26 --> 27
	3 -. Stack .-> 27
	26["arg__5 1"]
	33["abs__25 lift_u32"]
	7 --> 33
	6["p U32_not_equals"]
	3 --> 6
	31 --> 6
	31["abs__23 lift_u32"]
	4 --> 31
	4["arg__22 0"]
</pre>`;
window.traces["SPLIT_BRANCHES"]["scheduler_start"] = ''
window.traces["SPLIT_BRANCHES"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	30 -. Stack .-> 1
	30{{"Sϕ Stack "}}
	6 --> 30
	37 --> 30
	38 --> 30
	38["mv_f__30 |False|  [U32_not_equals [p]]"]
	6 --> 38
	20 -. Stack .-> 38
	20{{"Sϕ Stack "}}
	9 --> 20
	41 --> 20
	42 --> 20
	42["mv_f__34 |False|  [U32_equals [q]]"]
	9 --> 42
	15 -. Stack .-> 42
	15["eff__15 push_u32"]
	36 --> 15
	13 -. Stack .-> 15
	13["eff__17 push_u32"]
	12 --> 13
	3 -. Stack .-> 13
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	12["arg__18 7"]
	36["abs__28 lift_u32"]
	14 --> 36
	14["arg__16 8"]
	9["q U32_equals"]
	3 --> 9
	32 --> 9
	32["abs__24 lift_u32"]
	7 --> 32
	7["arg__20 2"]
	41["mv_t__33 |True|  [U32_equals [q]]"]
	9 --> 41
	19 -. Stack .-> 41
	19["eff__11 push_u32"]
	35 --> 19
	17 -. Stack .-> 19
	17["eff__13 push_u32"]
	16 --> 17
	3 -. Stack .-> 17
	16["arg__14 5"]
	35["abs__27 lift_u32"]
	18 --> 35
	18["arg__12 6"]
	6["p U32_not_equals"]
	3 --> 6
	31 --> 6
	31["abs__23 lift_u32"]
	4 --> 31
	4["arg__22 0"]
	37["mv_t__29 |True|  [U32_not_equals [p]]"]
	6 --> 37
	29 -. Stack .-> 37
	29{{"Sϕ Stack "}}
	9 --> 29
	39 --> 29
	40 --> 29
	40["mv_f__32 |False|  [U32_equals [q]]"]
	9 --> 40
	25 -. Stack .-> 40
	25["eff__6 push_u32"]
	34 --> 25
	23 -. Stack .-> 25
	23["eff__8 push_u32"]
	22 --> 23
	3 -. Stack .-> 23
	22["arg__9 3"]
	34["abs__26 lift_u32"]
	24 --> 34
	24["arg__7 4"]
	39["mv_t__31 |True|  [U32_equals [q]]"]
	9 --> 39
	28 -. Stack .-> 39
	28["eff__2 push_u32"]
	33 --> 28
	27 -. Stack .-> 28
	27["eff__4 push_u32"]
	26 --> 27
	3 -. Stack .-> 27
	26["arg__5 1"]
	33["abs__25 lift_u32"]
	7 --> 33
</pre>`;
window.info["SPLIT_BRANCHES"] = {}
window.info["SPLIT_BRANCHES"]["info_start"] = ''
window.info["SPLIT_BRANCHES"]["info_start"] += `<pre class=''>=== orig_sea ===
  #4 0
  #31 lift_u32 [abs__23](#4 0)
  #6 U32_not_equals [p](#3 pop_u32 [c1],#31 lift_u32 [abs__23])
  #33 lift_u32 [abs__25](#7 2)
  #26 1
  #27 push_u32 [eff__4](#26 1) {Stack:#3 pop_u32 [c1]}
  #28 push_u32 [eff__2](#33 lift_u32 [abs__25]) {Stack:#27 push_u32 [eff__4]}
  #24 4
  #34 lift_u32 [abs__26](#24 4)
  #22 3
  #23 push_u32 [eff__8](#22 3) {Stack:#3 pop_u32 [c1]}
  #25 push_u32 [eff__6](#34 lift_u32 [abs__26]) {Stack:#23 push_u32 [eff__8]}
  #29 StatePhi [U32_equals [q]](#9 U32_equals [q],#28 push_u32 [eff__2],#25 push_u32 [eff__6])
  #7 2
  #32 lift_u32 [abs__24](#7 2)
  #9 U32_equals [q](#3 pop_u32 [c1],#32 lift_u32 [abs__24])
  #18 6
  #35 lift_u32 [abs__27](#18 6)
  #16 5
  #17 push_u32 [eff__13](#16 5) {Stack:#3 pop_u32 [c1]}
  #19 push_u32 [eff__11](#35 lift_u32 [abs__27]) {Stack:#17 push_u32 [eff__13]}
  #14 8
  #36 lift_u32 [abs__28](#14 8)
  #12 7
  #0 Start
  #3 pop_u32 [c1] {Stack:#0 Start}
  #13 push_u32 [eff__17](#12 7) {Stack:#3 pop_u32 [c1]}
  #15 push_u32 [eff__15](#36 lift_u32 [abs__28]) {Stack:#13 push_u32 [eff__17]}
  #20 StatePhi [U32_equals [q]](#9 U32_equals [q],#19 push_u32 [eff__11],#15 push_u32 [eff__15])
  #30 StatePhi [U32_not_equals [p]](#6 U32_not_equals [p],#29 StatePhi [U32_equals [q]],#20 StatePhi [U32_equals [q]])
  #1 Finish {CodeptrTrapLocalsGlobalsTablesMemoryExtra:#0 Start,Stack:#30 StatePhi [U32_not_equals [p]]}
</pre>`;
window.traces["SPLIT_BRANCHES"]["untangled"] = ''
window.traces["SPLIT_BRANCHES"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	30 -. Stack .-> 1
	30{{"Sϕ Stack "}}
	6 --> 30
	37 --> 30
	38 --> 30
	38["mv_f__30 |False|  [U32_not_equals [p]]"]
	6 --> 38
	20 -. Stack .-> 38
	20{{"Sϕ Stack "}}
	9 --> 20
	41 --> 20
	42 --> 20
	42["mv_f__34 |False|  [U32_equals [q]]"]
	9 --> 42
	15 -. Stack .-> 42
	15["eff__15 push_u32"]
	36 --> 15
	13 -. Stack .-> 15
	13["eff__17 push_u32"]
	12 --> 13
	3 -. Stack .-> 13
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	12["arg__18 7"]
	36["abs__28 lift_u32"]
	14 --> 36
	14["arg__16 8"]
	9["q U32_equals"]
	3 --> 9
	32 --> 9
	32["abs__24 lift_u32"]
	7 --> 32
	7["arg__20 2"]
	41["mv_t__33 |True|  [U32_equals [q]]"]
	9 --> 41
	19 -. Stack .-> 41
	19["eff__11 push_u32"]
	35 --> 19
	17 -. Stack .-> 19
	17["eff__13 push_u32"]
	16 --> 17
	3 -. Stack .-> 17
	16["arg__14 5"]
	35["abs__27 lift_u32"]
	18 --> 35
	18["arg__12 6"]
	6["p U32_not_equals"]
	3 --> 6
	31 --> 6
	31["abs__23 lift_u32"]
	4 --> 31
	4["arg__22 0"]
	37["mv_t__29 |True|  [U32_not_equals [p]]"]
	6 --> 37
	29 -. Stack .-> 37
	29{{"Sϕ Stack "}}
	9 --> 29
	39 --> 29
	40 --> 29
	40["mv_f__32 |False|  [U32_equals [q]]"]
	9 --> 40
	25 -. Stack .-> 40
	25["eff__6 push_u32"]
	34 --> 25
	23 -. Stack .-> 25
	23["eff__8 push_u32"]
	22 --> 23
	3 -. Stack .-> 23
	22["arg__9 3"]
	34["abs__26 lift_u32"]
	24 --> 34
	24["arg__7 4"]
	39["mv_t__31 |True|  [U32_equals [q]]"]
	9 --> 39
	28 -. Stack .-> 39
	28["eff__2 push_u32"]
	33 --> 28
	27 -. Stack .-> 28
	27["eff__4 push_u32"]
	26 --> 27
	3 -. Stack .-> 27
	26["arg__5 1"]
	33["abs__25 lift_u32"]
	7 --> 33
</pre>`;
window.info["SPLIT_BRANCHES"]["info_untangled"] = ''
window.info["SPLIT_BRANCHES"]["info_untangled"] += `<pre class=''>=== sea ===
  #33 lift_u32 [abs__25](#7 2)
  #26 1
  #27 push_u32 [eff__4](#26 1) {Stack:#3 pop_u32 [c1]}
  #28 push_u32 [eff__2](#33 lift_u32 [abs__25]) {Stack:#27 push_u32 [eff__4]}
  #39 |True|(#9 U32_equals [q]) {Stack:#28 push_u32 [eff__2]}
  #24 4
  #34 lift_u32 [abs__26](#24 4)
  #22 3
  #23 push_u32 [eff__8](#22 3) {Stack:#3 pop_u32 [c1]}
  #25 push_u32 [eff__6](#34 lift_u32 [abs__26]) {Stack:#23 push_u32 [eff__8]}
  #40 |False|(#9 U32_equals [q]) {Stack:#25 push_u32 [eff__6]}
  #29 StatePhi [U32_equals [q]](#9 U32_equals [q],#39 |True|,#40 |False|)
  #37 |True|(#6 U32_not_equals [p]) {Stack:#29 StatePhi [U32_equals [q]]}
  #4 0
  #31 lift_u32 [abs__23](#4 0)
  #6 U32_not_equals [p](#3 pop_u32 [c1],#31 lift_u32 [abs__23])
  #18 6
  #35 lift_u32 [abs__27](#18 6)
  #16 5
  #17 push_u32 [eff__13](#16 5) {Stack:#3 pop_u32 [c1]}
  #19 push_u32 [eff__11](#35 lift_u32 [abs__27]) {Stack:#17 push_u32 [eff__13]}
  #41 |True|(#9 U32_equals [q]) {Stack:#19 push_u32 [eff__11]}
  #7 2
  #32 lift_u32 [abs__24](#7 2)
  #9 U32_equals [q](#3 pop_u32 [c1],#32 lift_u32 [abs__24])
  #14 8
  #36 lift_u32 [abs__28](#14 8)
  #12 7
  #0 Start
  #3 pop_u32 [c1] {Stack:#0 Start}
  #13 push_u32 [eff__17](#12 7) {Stack:#3 pop_u32 [c1]}
  #15 push_u32 [eff__15](#36 lift_u32 [abs__28]) {Stack:#13 push_u32 [eff__17]}
  #42 |False|(#9 U32_equals [q]) {Stack:#15 push_u32 [eff__15]}
  #20 StatePhi [U32_equals [q]](#9 U32_equals [q],#41 |True|,#42 |False|)
  #38 |False|(#6 U32_not_equals [p]) {Stack:#20 StatePhi [U32_equals [q]]}
  #30 StatePhi [U32_not_equals [p]](#6 U32_not_equals [p],#37 |True|,#38 |False|)
  #1 Finish {CodeptrTrapLocalsGlobalsTablesMemoryExtra:#0 Start,Stack:#30 StatePhi [U32_not_equals [p]]}

=== branch_lattices (3) ===
[0] cond: #6 U32_not_equals [p]
    phis: #30 StatePhi [U32_not_equals [p]]
    frontier: {0, 3, 4, 6, 7, 9, 31, 32}
    lsg: {22, 23, 24, 25, 26, 27, 28, 29, 33, 34, 37, 39, 40}
    rsg: {12, 13, 14, 15, 16, 17, 18, 19, 20, 35, 36, 38, 41, 42}
[1] cond: #9 U32_equals [q]
    phis: #20 StatePhi [U32_equals [q]]
    frontier: {0, 3, 7, 9, 32}
    lsg: {16, 17, 18, 19, 35, 41}
    rsg: {12, 13, 14, 15, 36, 42}
[2] cond: #9 U32_equals [q]
    phis: #29 StatePhi [U32_equals [q]]
    frontier: {0, 3, 7, 9, 32}
    lsg: {26, 27, 28, 33, 39}
    rsg: {22, 23, 24, 25, 34, 40}
</pre>`;
window.traces["SPLIT_BRANCHES"]["sched Finish"] = ''
window.traces["SPLIT_BRANCHES"]["sched Finish"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_1[\\"Finish"/]
end

</pre>`;
window.traces["SPLIT_BRANCHES"]["sched StatePhi [U32_not_equals [p]]"] = ''
window.traces["SPLIT_BRANCHES"]["sched StatePhi [U32_not_equals [p]]"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_1[\\"Finish"/]
end
phi_3 --> block_1
subgraph phi_3["Phi 3"]
	p3_30{{"Sϕ Stack "}}
end
block_4 --> phi_3
block_5 --> phi_3
subgraph block_4["Block 4"]
	direction TB
	b4_37["mv_t__29 |True|  [U32_not_equals [p]]"]
end
branch_2 --> block_4
subgraph branch_2["Branch 2"]
	br2_6["p U32_not_equals"]

end
subgraph block_5["Block 5"]
	direction TB
	b5_38["mv_f__30 |False|  [U32_not_equals [p]]"]
end
branch_2 --> block_5

</pre>`;
window.traces["SPLIT_BRANCHES"]["sched lift_u32 [abs__23]"] = ''
window.traces["SPLIT_BRANCHES"]["sched lift_u32 [abs__23]"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_1[\\"Finish"/]
end
phi_3 --> block_1
subgraph phi_3["Phi 3"]
	p3_30{{"Sϕ Stack "}}
end
block_4 --> phi_3
block_5 --> phi_3
subgraph block_4["Block 4"]
	direction TB
	b4_37["mv_t__29 |True|  [U32_not_equals [p]]"]
end
branch_2 --> block_4
subgraph branch_2["Branch 2"]
	br2_6["p U32_not_equals"]

end
block_6 --> branch_2
subgraph block_6["Block 6"]
	direction TB
	b6_6["p U32_not_equals"]
	b6_31["abs__23 lift_u32"]
	b6_31 --> b6_6
end
subgraph block_5["Block 5"]
	direction TB
	b5_38["mv_f__30 |False|  [U32_not_equals [p]]"]
end
branch_2 --> block_5

</pre>`;
window.traces["SPLIT_BRANCHES"]["sched StatePhi [U32_equals [q]]"] = ''
window.traces["SPLIT_BRANCHES"]["sched StatePhi [U32_equals [q]]"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_1[\\"Finish"/]
end
phi_3 --> block_1
subgraph phi_3["Phi 3"]
	p3_30{{"Sϕ Stack "}}
end
block_4 --> phi_3
block_5 --> phi_3
subgraph block_4["Block 4"]
	direction TB
	b4_37["mv_t__29 |True|  [U32_not_equals [p]]"]
end
phi_8 --> block_4
subgraph phi_8["Phi 8"]
	p8_29{{"Sϕ Stack "}}
end
block_9 --> phi_8
block_10 --> phi_8
subgraph block_9["Block 9"]
	direction TB
	b9_39["mv_t__31 |True|  [U32_equals [q]]"]
end
branch_7 --> block_9
subgraph branch_7["Branch 7"]
	br7_9["q U32_equals"]

end
branch_2 --> branch_7
subgraph branch_2["Branch 2"]
	br2_6["p U32_not_equals"]

end
block_6 --> branch_2
subgraph block_6["Block 6"]
	direction TB
	b6_6["p U32_not_equals"]
	b6_31["abs__23 lift_u32"]
	b6_31 --> b6_6
end
subgraph block_10["Block 10"]
	direction TB
	b10_40["mv_f__32 |False|  [U32_equals [q]]"]
end
branch_7 --> block_10
subgraph block_5["Block 5"]
	direction TB
	b5_38["mv_f__30 |False|  [U32_not_equals [p]]"]
end
branch_2 --> block_5

</pre>`;
window.traces["SPLIT_BRANCHES"]["sched StatePhi [U32_equals [q]]"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_1[\\"Finish"/]
end
phi_3 --> block_1
subgraph phi_3["Phi 3"]
	p3_30{{"Sϕ Stack "}}
end
block_4 --> phi_3
block_5 --> phi_3
subgraph block_4["Block 4"]
	direction TB
	b4_37["mv_t__29 |True|  [U32_not_equals [p]]"]
end
phi_8 --> block_4
subgraph phi_8["Phi 8"]
	p8_29{{"Sϕ Stack "}}
end
block_9 --> phi_8
block_10 --> phi_8
subgraph block_9["Block 9"]
	direction TB
	b9_39["mv_t__31 |True|  [U32_equals [q]]"]
end
branch_7 --> block_9
subgraph branch_7["Branch 7"]
	br7_9["q U32_equals"]

end
branch_2 --> branch_7
subgraph branch_2["Branch 2"]
	br2_6["p U32_not_equals"]

end
block_6 --> branch_2
subgraph block_6["Block 6"]
	direction TB
	b6_6["p U32_not_equals"]
	b6_31["abs__23 lift_u32"]
	b6_31 --> b6_6
end
subgraph block_10["Block 10"]
	direction TB
	b10_40["mv_f__32 |False|  [U32_equals [q]]"]
end
branch_7 --> block_10
subgraph block_5["Block 5"]
	direction TB
	b5_38["mv_f__30 |False|  [U32_not_equals [p]]"]
end
phi_12 --> block_5
subgraph phi_12["Phi 12"]
	p12_20{{"Sϕ Stack "}}
end
block_13 --> phi_12
block_14 --> phi_12
subgraph block_13["Block 13"]
	direction TB
	b13_41["mv_t__33 |True|  [U32_equals [q]]"]
end
branch_11 --> block_13
subgraph branch_11["Branch 11"]
	br11_9["q U32_equals"]

end
branch_2 --> branch_11
subgraph block_14["Block 14"]
	direction TB
	b14_42["mv_f__34 |False|  [U32_equals [q]]"]
end
branch_11 --> block_14

</pre>`;
window.traces["SPLIT_BRANCHES"]["sched 0"] = ''
window.traces["SPLIT_BRANCHES"]["sched 0"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_1[\\"Finish"/]
end
phi_3 --> block_1
subgraph phi_3["Phi 3"]
	p3_30{{"Sϕ Stack "}}
end
block_4 --> phi_3
block_5 --> phi_3
subgraph block_4["Block 4"]
	direction TB
	b4_37["mv_t__29 |True|  [U32_not_equals [p]]"]
end
phi_8 --> block_4
subgraph phi_8["Phi 8"]
	p8_29{{"Sϕ Stack "}}
end
block_9 --> phi_8
block_10 --> phi_8
subgraph block_9["Block 9"]
	direction TB
	b9_39["mv_t__31 |True|  [U32_equals [q]]"]
end
branch_7 --> block_9
subgraph branch_7["Branch 7"]
	br7_9["q U32_equals"]

end
branch_2 --> branch_7
subgraph branch_2["Branch 2"]
	br2_6["p U32_not_equals"]

end
block_6 --> branch_2
subgraph block_6["Block 6"]
	direction TB
	b6_6["p U32_not_equals"]
	b6_31["abs__23 lift_u32"]
	b6_4["arg__22 0"]
	b6_31 --> b6_6
	b6_4 --> b6_31
end
subgraph block_10["Block 10"]
	direction TB
	b10_40["mv_f__32 |False|  [U32_equals [q]]"]
end
branch_7 --> block_10
subgraph block_5["Block 5"]
	direction TB
	b5_38["mv_f__30 |False|  [U32_not_equals [p]]"]
end
phi_12 --> block_5
subgraph phi_12["Phi 12"]
	p12_20{{"Sϕ Stack "}}
end
block_13 --> phi_12
block_14 --> phi_12
subgraph block_13["Block 13"]
	direction TB
	b13_41["mv_t__33 |True|  [U32_equals [q]]"]
end
branch_11 --> block_13
subgraph branch_11["Branch 11"]
	br11_9["q U32_equals"]

end
branch_2 --> branch_11
subgraph block_14["Block 14"]
	direction TB
	b14_42["mv_f__34 |False|  [U32_equals [q]]"]
end
branch_11 --> block_14

</pre>`;
window.traces["SPLIT_BRANCHES"]["sched U32_equals [q]"] = ''
window.traces["SPLIT_BRANCHES"]["sched U32_equals [q]"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_1[\\"Finish"/]
end
phi_3 --> block_1
subgraph phi_3["Phi 3"]
	p3_30{{"Sϕ Stack "}}
end
block_4 --> phi_3
block_5 --> phi_3
subgraph block_4["Block 4"]
	direction TB
	b4_37["mv_t__29 |True|  [U32_not_equals [p]]"]
end
phi_8 --> block_4
subgraph phi_8["Phi 8"]
	p8_29{{"Sϕ Stack "}}
end
block_9 --> phi_8
block_10 --> phi_8
subgraph block_9["Block 9"]
	direction TB
	b9_39["mv_t__31 |True|  [U32_equals [q]]"]
end
branch_7 --> block_9
subgraph branch_7["Branch 7"]
	br7_9["q U32_equals"]

end
branch_2 --> branch_7
subgraph branch_2["Branch 2"]
	br2_6["p U32_not_equals"]

end
block_6 --> branch_2
subgraph block_6["Block 6"]
	direction TB
	b6_6["p U32_not_equals"]
	b6_31["abs__23 lift_u32"]
	b6_4["arg__22 0"]
	b6_9["q U32_equals"]
	b6_31 --> b6_6
	b6_4 --> b6_31
	b6_9 --> b6_4
end
subgraph block_10["Block 10"]
	direction TB
	b10_40["mv_f__32 |False|  [U32_equals [q]]"]
end
branch_7 --> block_10
subgraph block_5["Block 5"]
	direction TB
	b5_38["mv_f__30 |False|  [U32_not_equals [p]]"]
end
phi_12 --> block_5
subgraph phi_12["Phi 12"]
	p12_20{{"Sϕ Stack "}}
end
block_13 --> phi_12
block_14 --> phi_12
subgraph block_13["Block 13"]
	direction TB
	b13_41["mv_t__33 |True|  [U32_equals [q]]"]
end
branch_11 --> block_13
subgraph branch_11["Branch 11"]
	br11_9["q U32_equals"]

end
branch_2 --> branch_11
subgraph block_14["Block 14"]
	direction TB
	b14_42["mv_f__34 |False|  [U32_equals [q]]"]
end
branch_11 --> block_14

</pre>`;
window.traces["SPLIT_BRANCHES"]["sched push_u32 [eff__2]"] = ''
window.traces["SPLIT_BRANCHES"]["sched push_u32 [eff__2]"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_1[\\"Finish"/]
end
phi_3 --> block_1
subgraph phi_3["Phi 3"]
	p3_30{{"Sϕ Stack "}}
end
block_4 --> phi_3
block_5 --> phi_3
subgraph block_4["Block 4"]
	direction TB
	b4_37["mv_t__29 |True|  [U32_not_equals [p]]"]
end
phi_8 --> block_4
subgraph phi_8["Phi 8"]
	p8_29{{"Sϕ Stack "}}
end
block_9 --> phi_8
block_10 --> phi_8
subgraph block_9["Block 9"]
	direction TB
	b9_39["mv_t__31 |True|  [U32_equals [q]]"]
	b9_28["eff__2 push_u32"]
	b9_28 --> b9_39
end
branch_7 --> block_9
subgraph branch_7["Branch 7"]
	br7_9["q U32_equals"]

end
branch_2 --> branch_7
subgraph branch_2["Branch 2"]
	br2_6["p U32_not_equals"]

end
block_6 --> branch_2
subgraph block_6["Block 6"]
	direction TB
	b6_6["p U32_not_equals"]
	b6_31["abs__23 lift_u32"]
	b6_4["arg__22 0"]
	b6_9["q U32_equals"]
	b6_31 --> b6_6
	b6_4 --> b6_31
	b6_9 --> b6_4
end
subgraph block_10["Block 10"]
	direction TB
	b10_40["mv_f__32 |False|  [U32_equals [q]]"]
end
branch_7 --> block_10
subgraph block_5["Block 5"]
	direction TB
	b5_38["mv_f__30 |False|  [U32_not_equals [p]]"]
end
phi_12 --> block_5
subgraph phi_12["Phi 12"]
	p12_20{{"Sϕ Stack "}}
end
block_13 --> phi_12
block_14 --> phi_12
subgraph block_13["Block 13"]
	direction TB
	b13_41["mv_t__33 |True|  [U32_equals [q]]"]
end
branch_11 --> block_13
subgraph branch_11["Branch 11"]
	br11_9["q U32_equals"]

end
branch_2 --> branch_11
subgraph block_14["Block 14"]
	direction TB
	b14_42["mv_f__34 |False|  [U32_equals [q]]"]
end
branch_11 --> block_14

</pre>`;
window.traces["SPLIT_BRANCHES"]["sched push_u32 [eff__6]"] = ''
window.traces["SPLIT_BRANCHES"]["sched push_u32 [eff__6]"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_1[\\"Finish"/]
end
phi_3 --> block_1
subgraph phi_3["Phi 3"]
	p3_30{{"Sϕ Stack "}}
end
block_4 --> phi_3
block_5 --> phi_3
subgraph block_4["Block 4"]
	direction TB
	b4_37["mv_t__29 |True|  [U32_not_equals [p]]"]
end
phi_8 --> block_4
subgraph phi_8["Phi 8"]
	p8_29{{"Sϕ Stack "}}
end
block_9 --> phi_8
block_10 --> phi_8
subgraph block_9["Block 9"]
	direction TB
	b9_39["mv_t__31 |True|  [U32_equals [q]]"]
	b9_28["eff__2 push_u32"]
	b9_28 --> b9_39
end
branch_7 --> block_9
subgraph branch_7["Branch 7"]
	br7_9["q U32_equals"]

end
branch_2 --> branch_7
subgraph branch_2["Branch 2"]
	br2_6["p U32_not_equals"]

end
block_6 --> branch_2
subgraph block_6["Block 6"]
	direction TB
	b6_6["p U32_not_equals"]
	b6_31["abs__23 lift_u32"]
	b6_4["arg__22 0"]
	b6_9["q U32_equals"]
	b6_31 --> b6_6
	b6_4 --> b6_31
	b6_9 --> b6_4
end
subgraph block_10["Block 10"]
	direction TB
	b10_40["mv_f__32 |False|  [U32_equals [q]]"]
	b10_25["eff__6 push_u32"]
	b10_25 --> b10_40
end
branch_7 --> block_10
subgraph block_5["Block 5"]
	direction TB
	b5_38["mv_f__30 |False|  [U32_not_equals [p]]"]
end
phi_12 --> block_5
subgraph phi_12["Phi 12"]
	p12_20{{"Sϕ Stack "}}
end
block_13 --> phi_12
block_14 --> phi_12
subgraph block_13["Block 13"]
	direction TB
	b13_41["mv_t__33 |True|  [U32_equals [q]]"]
end
branch_11 --> block_13
subgraph branch_11["Branch 11"]
	br11_9["q U32_equals"]

end
branch_2 --> branch_11
subgraph block_14["Block 14"]
	direction TB
	b14_42["mv_f__34 |False|  [U32_equals [q]]"]
end
branch_11 --> block_14

</pre>`;
window.traces["SPLIT_BRANCHES"]["sched lift_u32 [abs__24]"] = ''
window.traces["SPLIT_BRANCHES"]["sched lift_u32 [abs__24]"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_1[\\"Finish"/]
end
phi_3 --> block_1
subgraph phi_3["Phi 3"]
	p3_30{{"Sϕ Stack "}}
end
block_4 --> phi_3
block_5 --> phi_3
subgraph block_4["Block 4"]
	direction TB
	b4_37["mv_t__29 |True|  [U32_not_equals [p]]"]
end
phi_8 --> block_4
subgraph phi_8["Phi 8"]
	p8_29{{"Sϕ Stack "}}
end
block_9 --> phi_8
block_10 --> phi_8
subgraph block_9["Block 9"]
	direction TB
	b9_39["mv_t__31 |True|  [U32_equals [q]]"]
	b9_28["eff__2 push_u32"]
	b9_28 --> b9_39
end
branch_7 --> block_9
subgraph branch_7["Branch 7"]
	br7_9["q U32_equals"]

end
branch_2 --> branch_7
subgraph branch_2["Branch 2"]
	br2_6["p U32_not_equals"]

end
block_6 --> branch_2
subgraph block_6["Block 6"]
	direction TB
	b6_6["p U32_not_equals"]
	b6_31["abs__23 lift_u32"]
	b6_4["arg__22 0"]
	b6_9["q U32_equals"]
	b6_32["abs__24 lift_u32"]
	b6_31 --> b6_6
	b6_4 --> b6_31
	b6_9 --> b6_4
	b6_32 --> b6_9
end
subgraph block_10["Block 10"]
	direction TB
	b10_40["mv_f__32 |False|  [U32_equals [q]]"]
	b10_25["eff__6 push_u32"]
	b10_25 --> b10_40
end
branch_7 --> block_10
subgraph block_5["Block 5"]
	direction TB
	b5_38["mv_f__30 |False|  [U32_not_equals [p]]"]
end
phi_12 --> block_5
subgraph phi_12["Phi 12"]
	p12_20{{"Sϕ Stack "}}
end
block_13 --> phi_12
block_14 --> phi_12
subgraph block_13["Block 13"]
	direction TB
	b13_41["mv_t__33 |True|  [U32_equals [q]]"]
end
branch_11 --> block_13
subgraph branch_11["Branch 11"]
	br11_9["q U32_equals"]

end
branch_2 --> branch_11
subgraph block_14["Block 14"]
	direction TB
	b14_42["mv_f__34 |False|  [U32_equals [q]]"]
end
branch_11 --> block_14

</pre>`;
window.traces["SPLIT_BRANCHES"]["sched push_u32 [eff__11]"] = ''
window.traces["SPLIT_BRANCHES"]["sched push_u32 [eff__11]"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_1[\\"Finish"/]
end
phi_3 --> block_1
subgraph phi_3["Phi 3"]
	p3_30{{"Sϕ Stack "}}
end
block_4 --> phi_3
block_5 --> phi_3
subgraph block_4["Block 4"]
	direction TB
	b4_37["mv_t__29 |True|  [U32_not_equals [p]]"]
end
phi_8 --> block_4
subgraph phi_8["Phi 8"]
	p8_29{{"Sϕ Stack "}}
end
block_9 --> phi_8
block_10 --> phi_8
subgraph block_9["Block 9"]
	direction TB
	b9_39["mv_t__31 |True|  [U32_equals [q]]"]
	b9_28["eff__2 push_u32"]
	b9_28 --> b9_39
end
branch_7 --> block_9
subgraph branch_7["Branch 7"]
	br7_9["q U32_equals"]

end
branch_2 --> branch_7
subgraph branch_2["Branch 2"]
	br2_6["p U32_not_equals"]

end
block_6 --> branch_2
subgraph block_6["Block 6"]
	direction TB
	b6_6["p U32_not_equals"]
	b6_31["abs__23 lift_u32"]
	b6_4["arg__22 0"]
	b6_9["q U32_equals"]
	b6_32["abs__24 lift_u32"]
	b6_31 --> b6_6
	b6_4 --> b6_31
	b6_9 --> b6_4
	b6_32 --> b6_9
end
subgraph block_10["Block 10"]
	direction TB
	b10_40["mv_f__32 |False|  [U32_equals [q]]"]
	b10_25["eff__6 push_u32"]
	b10_25 --> b10_40
end
branch_7 --> block_10
subgraph block_5["Block 5"]
	direction TB
	b5_38["mv_f__30 |False|  [U32_not_equals [p]]"]
end
phi_12 --> block_5
subgraph phi_12["Phi 12"]
	p12_20{{"Sϕ Stack "}}
end
block_13 --> phi_12
block_14 --> phi_12
subgraph block_13["Block 13"]
	direction TB
	b13_41["mv_t__33 |True|  [U32_equals [q]]"]
	b13_19["eff__11 push_u32"]
	b13_19 --> b13_41
end
branch_11 --> block_13
subgraph branch_11["Branch 11"]
	br11_9["q U32_equals"]

end
branch_2 --> branch_11
subgraph block_14["Block 14"]
	direction TB
	b14_42["mv_f__34 |False|  [U32_equals [q]]"]
end
branch_11 --> block_14

</pre>`;
window.traces["SPLIT_BRANCHES"]["sched push_u32 [eff__15]"] = ''
window.traces["SPLIT_BRANCHES"]["sched push_u32 [eff__15]"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_1[\\"Finish"/]
end
phi_3 --> block_1
subgraph phi_3["Phi 3"]
	p3_30{{"Sϕ Stack "}}
end
block_4 --> phi_3
block_5 --> phi_3
subgraph block_4["Block 4"]
	direction TB
	b4_37["mv_t__29 |True|  [U32_not_equals [p]]"]
end
phi_8 --> block_4
subgraph phi_8["Phi 8"]
	p8_29{{"Sϕ Stack "}}
end
block_9 --> phi_8
block_10 --> phi_8
subgraph block_9["Block 9"]
	direction TB
	b9_39["mv_t__31 |True|  [U32_equals [q]]"]
	b9_28["eff__2 push_u32"]
	b9_28 --> b9_39
end
branch_7 --> block_9
subgraph branch_7["Branch 7"]
	br7_9["q U32_equals"]

end
branch_2 --> branch_7
subgraph branch_2["Branch 2"]
	br2_6["p U32_not_equals"]

end
block_6 --> branch_2
subgraph block_6["Block 6"]
	direction TB
	b6_6["p U32_not_equals"]
	b6_31["abs__23 lift_u32"]
	b6_4["arg__22 0"]
	b6_9["q U32_equals"]
	b6_32["abs__24 lift_u32"]
	b6_31 --> b6_6
	b6_4 --> b6_31
	b6_9 --> b6_4
	b6_32 --> b6_9
end
subgraph block_10["Block 10"]
	direction TB
	b10_40["mv_f__32 |False|  [U32_equals [q]]"]
	b10_25["eff__6 push_u32"]
	b10_25 --> b10_40
end
branch_7 --> block_10
subgraph block_5["Block 5"]
	direction TB
	b5_38["mv_f__30 |False|  [U32_not_equals [p]]"]
end
phi_12 --> block_5
subgraph phi_12["Phi 12"]
	p12_20{{"Sϕ Stack "}}
end
block_13 --> phi_12
block_14 --> phi_12
subgraph block_13["Block 13"]
	direction TB
	b13_41["mv_t__33 |True|  [U32_equals [q]]"]
	b13_19["eff__11 push_u32"]
	b13_19 --> b13_41
end
branch_11 --> block_13
subgraph branch_11["Branch 11"]
	br11_9["q U32_equals"]

end
branch_2 --> branch_11
subgraph block_14["Block 14"]
	direction TB
	b14_42["mv_f__34 |False|  [U32_equals [q]]"]
	b14_15["eff__15 push_u32"]
	b14_15 --> b14_42
end
branch_11 --> block_14

</pre>`;
window.traces["SPLIT_BRANCHES"]["sched lift_u32 [abs__25]"] = ''
window.traces["SPLIT_BRANCHES"]["sched lift_u32 [abs__25]"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_1[\\"Finish"/]
end
phi_3 --> block_1
subgraph phi_3["Phi 3"]
	p3_30{{"Sϕ Stack "}}
end
block_4 --> phi_3
block_5 --> phi_3
subgraph block_4["Block 4"]
	direction TB
	b4_37["mv_t__29 |True|  [U32_not_equals [p]]"]
end
phi_8 --> block_4
subgraph phi_8["Phi 8"]
	p8_29{{"Sϕ Stack "}}
end
block_9 --> phi_8
block_10 --> phi_8
subgraph block_9["Block 9"]
	direction TB
	b9_39["mv_t__31 |True|  [U32_equals [q]]"]
	b9_28["eff__2 push_u32"]
	b9_33["abs__25 lift_u32"]
	b9_28 --> b9_39
	b9_33 --> b9_28
end
branch_7 --> block_9
subgraph branch_7["Branch 7"]
	br7_9["q U32_equals"]

end
branch_2 --> branch_7
subgraph branch_2["Branch 2"]
	br2_6["p U32_not_equals"]

end
block_6 --> branch_2
subgraph block_6["Block 6"]
	direction TB
	b6_6["p U32_not_equals"]
	b6_31["abs__23 lift_u32"]
	b6_4["arg__22 0"]
	b6_9["q U32_equals"]
	b6_32["abs__24 lift_u32"]
	b6_31 --> b6_6
	b6_4 --> b6_31
	b6_9 --> b6_4
	b6_32 --> b6_9
end
subgraph block_10["Block 10"]
	direction TB
	b10_40["mv_f__32 |False|  [U32_equals [q]]"]
	b10_25["eff__6 push_u32"]
	b10_25 --> b10_40
end
branch_7 --> block_10
subgraph block_5["Block 5"]
	direction TB
	b5_38["mv_f__30 |False|  [U32_not_equals [p]]"]
end
phi_12 --> block_5
subgraph phi_12["Phi 12"]
	p12_20{{"Sϕ Stack "}}
end
block_13 --> phi_12
block_14 --> phi_12
subgraph block_13["Block 13"]
	direction TB
	b13_41["mv_t__33 |True|  [U32_equals [q]]"]
	b13_19["eff__11 push_u32"]
	b13_19 --> b13_41
end
branch_11 --> block_13
subgraph branch_11["Branch 11"]
	br11_9["q U32_equals"]

end
branch_2 --> branch_11
subgraph block_14["Block 14"]
	direction TB
	b14_42["mv_f__34 |False|  [U32_equals [q]]"]
	b14_15["eff__15 push_u32"]
	b14_15 --> b14_42
end
branch_11 --> block_14

</pre>`;
window.traces["SPLIT_BRANCHES"]["sched push_u32 [eff__4]"] = ''
window.traces["SPLIT_BRANCHES"]["sched push_u32 [eff__4]"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_1[\\"Finish"/]
end
phi_3 --> block_1
subgraph phi_3["Phi 3"]
	p3_30{{"Sϕ Stack "}}
end
block_4 --> phi_3
block_5 --> phi_3
subgraph block_4["Block 4"]
	direction TB
	b4_37["mv_t__29 |True|  [U32_not_equals [p]]"]
end
phi_8 --> block_4
subgraph phi_8["Phi 8"]
	p8_29{{"Sϕ Stack "}}
end
block_9 --> phi_8
block_10 --> phi_8
subgraph block_9["Block 9"]
	direction TB
	b9_39["mv_t__31 |True|  [U32_equals [q]]"]
	b9_28["eff__2 push_u32"]
	b9_33["abs__25 lift_u32"]
	b9_27["eff__4 push_u32"]
	b9_28 --> b9_39
	b9_33 --> b9_28
	b9_27 --> b9_33
end
branch_7 --> block_9
subgraph branch_7["Branch 7"]
	br7_9["q U32_equals"]

end
branch_2 --> branch_7
subgraph branch_2["Branch 2"]
	br2_6["p U32_not_equals"]

end
block_6 --> branch_2
subgraph block_6["Block 6"]
	direction TB
	b6_6["p U32_not_equals"]
	b6_31["abs__23 lift_u32"]
	b6_4["arg__22 0"]
	b6_9["q U32_equals"]
	b6_32["abs__24 lift_u32"]
	b6_31 --> b6_6
	b6_4 --> b6_31
	b6_9 --> b6_4
	b6_32 --> b6_9
end
subgraph block_10["Block 10"]
	direction TB
	b10_40["mv_f__32 |False|  [U32_equals [q]]"]
	b10_25["eff__6 push_u32"]
	b10_25 --> b10_40
end
branch_7 --> block_10
subgraph block_5["Block 5"]
	direction TB
	b5_38["mv_f__30 |False|  [U32_not_equals [p]]"]
end
phi_12 --> block_5
subgraph phi_12["Phi 12"]
	p12_20{{"Sϕ Stack "}}
end
block_13 --> phi_12
block_14 --> phi_12
subgraph block_13["Block 13"]
	direction TB
	b13_41["mv_t__33 |True|  [U32_equals [q]]"]
	b13_19["eff__11 push_u32"]
	b13_19 --> b13_41
end
branch_11 --> block_13
subgraph branch_11["Branch 11"]
	br11_9["q U32_equals"]

end
branch_2 --> branch_11
subgraph block_14["Block 14"]
	direction TB
	b14_42["mv_f__34 |False|  [U32_equals [q]]"]
	b14_15["eff__15 push_u32"]
	b14_15 --> b14_42
end
branch_11 --> block_14

</pre>`;
window.traces["SPLIT_BRANCHES"]["sched lift_u32 [abs__26]"] = ''
window.traces["SPLIT_BRANCHES"]["sched lift_u32 [abs__26]"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_1[\\"Finish"/]
end
phi_3 --> block_1
subgraph phi_3["Phi 3"]
	p3_30{{"Sϕ Stack "}}
end
block_4 --> phi_3
block_5 --> phi_3
subgraph block_4["Block 4"]
	direction TB
	b4_37["mv_t__29 |True|  [U32_not_equals [p]]"]
end
phi_8 --> block_4
subgraph phi_8["Phi 8"]
	p8_29{{"Sϕ Stack "}}
end
block_9 --> phi_8
block_10 --> phi_8
subgraph block_9["Block 9"]
	direction TB
	b9_39["mv_t__31 |True|  [U32_equals [q]]"]
	b9_28["eff__2 push_u32"]
	b9_33["abs__25 lift_u32"]
	b9_27["eff__4 push_u32"]
	b9_28 --> b9_39
	b9_33 --> b9_28
	b9_27 --> b9_33
end
branch_7 --> block_9
subgraph branch_7["Branch 7"]
	br7_9["q U32_equals"]

end
branch_2 --> branch_7
subgraph branch_2["Branch 2"]
	br2_6["p U32_not_equals"]

end
block_6 --> branch_2
subgraph block_6["Block 6"]
	direction TB
	b6_6["p U32_not_equals"]
	b6_31["abs__23 lift_u32"]
	b6_4["arg__22 0"]
	b6_9["q U32_equals"]
	b6_32["abs__24 lift_u32"]
	b6_31 --> b6_6
	b6_4 --> b6_31
	b6_9 --> b6_4
	b6_32 --> b6_9
end
subgraph block_10["Block 10"]
	direction TB
	b10_40["mv_f__32 |False|  [U32_equals [q]]"]
	b10_25["eff__6 push_u32"]
	b10_34["abs__26 lift_u32"]
	b10_25 --> b10_40
	b10_34 --> b10_25
end
branch_7 --> block_10
subgraph block_5["Block 5"]
	direction TB
	b5_38["mv_f__30 |False|  [U32_not_equals [p]]"]
end
phi_12 --> block_5
subgraph phi_12["Phi 12"]
	p12_20{{"Sϕ Stack "}}
end
block_13 --> phi_12
block_14 --> phi_12
subgraph block_13["Block 13"]
	direction TB
	b13_41["mv_t__33 |True|  [U32_equals [q]]"]
	b13_19["eff__11 push_u32"]
	b13_19 --> b13_41
end
branch_11 --> block_13
subgraph branch_11["Branch 11"]
	br11_9["q U32_equals"]

end
branch_2 --> branch_11
subgraph block_14["Block 14"]
	direction TB
	b14_42["mv_f__34 |False|  [U32_equals [q]]"]
	b14_15["eff__15 push_u32"]
	b14_15 --> b14_42
end
branch_11 --> block_14

</pre>`;
window.traces["SPLIT_BRANCHES"]["sched push_u32 [eff__8]"] = ''
window.traces["SPLIT_BRANCHES"]["sched push_u32 [eff__8]"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_1[\\"Finish"/]
end
phi_3 --> block_1
subgraph phi_3["Phi 3"]
	p3_30{{"Sϕ Stack "}}
end
block_4 --> phi_3
block_5 --> phi_3
subgraph block_4["Block 4"]
	direction TB
	b4_37["mv_t__29 |True|  [U32_not_equals [p]]"]
end
phi_8 --> block_4
subgraph phi_8["Phi 8"]
	p8_29{{"Sϕ Stack "}}
end
block_9 --> phi_8
block_10 --> phi_8
subgraph block_9["Block 9"]
	direction TB
	b9_39["mv_t__31 |True|  [U32_equals [q]]"]
	b9_28["eff__2 push_u32"]
	b9_33["abs__25 lift_u32"]
	b9_27["eff__4 push_u32"]
	b9_28 --> b9_39
	b9_33 --> b9_28
	b9_27 --> b9_33
end
branch_7 --> block_9
subgraph branch_7["Branch 7"]
	br7_9["q U32_equals"]

end
branch_2 --> branch_7
subgraph branch_2["Branch 2"]
	br2_6["p U32_not_equals"]

end
block_6 --> branch_2
subgraph block_6["Block 6"]
	direction TB
	b6_6["p U32_not_equals"]
	b6_31["abs__23 lift_u32"]
	b6_4["arg__22 0"]
	b6_9["q U32_equals"]
	b6_32["abs__24 lift_u32"]
	b6_31 --> b6_6
	b6_4 --> b6_31
	b6_9 --> b6_4
	b6_32 --> b6_9
end
subgraph block_10["Block 10"]
	direction TB
	b10_40["mv_f__32 |False|  [U32_equals [q]]"]
	b10_25["eff__6 push_u32"]
	b10_34["abs__26 lift_u32"]
	b10_23["eff__8 push_u32"]
	b10_25 --> b10_40
	b10_34 --> b10_25
	b10_23 --> b10_34
end
branch_7 --> block_10
subgraph block_5["Block 5"]
	direction TB
	b5_38["mv_f__30 |False|  [U32_not_equals [p]]"]
end
phi_12 --> block_5
subgraph phi_12["Phi 12"]
	p12_20{{"Sϕ Stack "}}
end
block_13 --> phi_12
block_14 --> phi_12
subgraph block_13["Block 13"]
	direction TB
	b13_41["mv_t__33 |True|  [U32_equals [q]]"]
	b13_19["eff__11 push_u32"]
	b13_19 --> b13_41
end
branch_11 --> block_13
subgraph branch_11["Branch 11"]
	br11_9["q U32_equals"]

end
branch_2 --> branch_11
subgraph block_14["Block 14"]
	direction TB
	b14_42["mv_f__34 |False|  [U32_equals [q]]"]
	b14_15["eff__15 push_u32"]
	b14_15 --> b14_42
end
branch_11 --> block_14

</pre>`;
window.traces["SPLIT_BRANCHES"]["sched lift_u32 [abs__27]"] = ''
window.traces["SPLIT_BRANCHES"]["sched lift_u32 [abs__27]"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_1[\\"Finish"/]
end
phi_3 --> block_1
subgraph phi_3["Phi 3"]
	p3_30{{"Sϕ Stack "}}
end
block_4 --> phi_3
block_5 --> phi_3
subgraph block_4["Block 4"]
	direction TB
	b4_37["mv_t__29 |True|  [U32_not_equals [p]]"]
end
phi_8 --> block_4
subgraph phi_8["Phi 8"]
	p8_29{{"Sϕ Stack "}}
end
block_9 --> phi_8
block_10 --> phi_8
subgraph block_9["Block 9"]
	direction TB
	b9_39["mv_t__31 |True|  [U32_equals [q]]"]
	b9_28["eff__2 push_u32"]
	b9_33["abs__25 lift_u32"]
	b9_27["eff__4 push_u32"]
	b9_28 --> b9_39
	b9_33 --> b9_28
	b9_27 --> b9_33
end
branch_7 --> block_9
subgraph branch_7["Branch 7"]
	br7_9["q U32_equals"]

end
branch_2 --> branch_7
subgraph branch_2["Branch 2"]
	br2_6["p U32_not_equals"]

end
block_6 --> branch_2
subgraph block_6["Block 6"]
	direction TB
	b6_6["p U32_not_equals"]
	b6_31["abs__23 lift_u32"]
	b6_4["arg__22 0"]
	b6_9["q U32_equals"]
	b6_32["abs__24 lift_u32"]
	b6_31 --> b6_6
	b6_4 --> b6_31
	b6_9 --> b6_4
	b6_32 --> b6_9
end
subgraph block_10["Block 10"]
	direction TB
	b10_40["mv_f__32 |False|  [U32_equals [q]]"]
	b10_25["eff__6 push_u32"]
	b10_34["abs__26 lift_u32"]
	b10_23["eff__8 push_u32"]
	b10_25 --> b10_40
	b10_34 --> b10_25
	b10_23 --> b10_34
end
branch_7 --> block_10
subgraph block_5["Block 5"]
	direction TB
	b5_38["mv_f__30 |False|  [U32_not_equals [p]]"]
end
phi_12 --> block_5
subgraph phi_12["Phi 12"]
	p12_20{{"Sϕ Stack "}}
end
block_13 --> phi_12
block_14 --> phi_12
subgraph block_13["Block 13"]
	direction TB
	b13_41["mv_t__33 |True|  [U32_equals [q]]"]
	b13_19["eff__11 push_u32"]
	b13_35["abs__27 lift_u32"]
	b13_19 --> b13_41
	b13_35 --> b13_19
end
branch_11 --> block_13
subgraph branch_11["Branch 11"]
	br11_9["q U32_equals"]

end
branch_2 --> branch_11
subgraph block_14["Block 14"]
	direction TB
	b14_42["mv_f__34 |False|  [U32_equals [q]]"]
	b14_15["eff__15 push_u32"]
	b14_15 --> b14_42
end
branch_11 --> block_14

</pre>`;
window.traces["SPLIT_BRANCHES"]["sched push_u32 [eff__13]"] = ''
window.traces["SPLIT_BRANCHES"]["sched push_u32 [eff__13]"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_1[\\"Finish"/]
end
phi_3 --> block_1
subgraph phi_3["Phi 3"]
	p3_30{{"Sϕ Stack "}}
end
block_4 --> phi_3
block_5 --> phi_3
subgraph block_4["Block 4"]
	direction TB
	b4_37["mv_t__29 |True|  [U32_not_equals [p]]"]
end
phi_8 --> block_4
subgraph phi_8["Phi 8"]
	p8_29{{"Sϕ Stack "}}
end
block_9 --> phi_8
block_10 --> phi_8
subgraph block_9["Block 9"]
	direction TB
	b9_39["mv_t__31 |True|  [U32_equals [q]]"]
	b9_28["eff__2 push_u32"]
	b9_33["abs__25 lift_u32"]
	b9_27["eff__4 push_u32"]
	b9_28 --> b9_39
	b9_33 --> b9_28
	b9_27 --> b9_33
end
branch_7 --> block_9
subgraph branch_7["Branch 7"]
	br7_9["q U32_equals"]

end
branch_2 --> branch_7
subgraph branch_2["Branch 2"]
	br2_6["p U32_not_equals"]

end
block_6 --> branch_2
subgraph block_6["Block 6"]
	direction TB
	b6_6["p U32_not_equals"]
	b6_31["abs__23 lift_u32"]
	b6_4["arg__22 0"]
	b6_9["q U32_equals"]
	b6_32["abs__24 lift_u32"]
	b6_31 --> b6_6
	b6_4 --> b6_31
	b6_9 --> b6_4
	b6_32 --> b6_9
end
subgraph block_10["Block 10"]
	direction TB
	b10_40["mv_f__32 |False|  [U32_equals [q]]"]
	b10_25["eff__6 push_u32"]
	b10_34["abs__26 lift_u32"]
	b10_23["eff__8 push_u32"]
	b10_25 --> b10_40
	b10_34 --> b10_25
	b10_23 --> b10_34
end
branch_7 --> block_10
subgraph block_5["Block 5"]
	direction TB
	b5_38["mv_f__30 |False|  [U32_not_equals [p]]"]
end
phi_12 --> block_5
subgraph phi_12["Phi 12"]
	p12_20{{"Sϕ Stack "}}
end
block_13 --> phi_12
block_14 --> phi_12
subgraph block_13["Block 13"]
	direction TB
	b13_41["mv_t__33 |True|  [U32_equals [q]]"]
	b13_19["eff__11 push_u32"]
	b13_35["abs__27 lift_u32"]
	b13_17["eff__13 push_u32"]
	b13_19 --> b13_41
	b13_35 --> b13_19
	b13_17 --> b13_35
end
branch_11 --> block_13
subgraph branch_11["Branch 11"]
	br11_9["q U32_equals"]

end
branch_2 --> branch_11
subgraph block_14["Block 14"]
	direction TB
	b14_42["mv_f__34 |False|  [U32_equals [q]]"]
	b14_15["eff__15 push_u32"]
	b14_15 --> b14_42
end
branch_11 --> block_14

</pre>`;
window.traces["SPLIT_BRANCHES"]["sched lift_u32 [abs__28]"] = ''
window.traces["SPLIT_BRANCHES"]["sched lift_u32 [abs__28]"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_1[\\"Finish"/]
end
phi_3 --> block_1
subgraph phi_3["Phi 3"]
	p3_30{{"Sϕ Stack "}}
end
block_4 --> phi_3
block_5 --> phi_3
subgraph block_4["Block 4"]
	direction TB
	b4_37["mv_t__29 |True|  [U32_not_equals [p]]"]
end
phi_8 --> block_4
subgraph phi_8["Phi 8"]
	p8_29{{"Sϕ Stack "}}
end
block_9 --> phi_8
block_10 --> phi_8
subgraph block_9["Block 9"]
	direction TB
	b9_39["mv_t__31 |True|  [U32_equals [q]]"]
	b9_28["eff__2 push_u32"]
	b9_33["abs__25 lift_u32"]
	b9_27["eff__4 push_u32"]
	b9_28 --> b9_39
	b9_33 --> b9_28
	b9_27 --> b9_33
end
branch_7 --> block_9
subgraph branch_7["Branch 7"]
	br7_9["q U32_equals"]

end
branch_2 --> branch_7
subgraph branch_2["Branch 2"]
	br2_6["p U32_not_equals"]

end
block_6 --> branch_2
subgraph block_6["Block 6"]
	direction TB
	b6_6["p U32_not_equals"]
	b6_31["abs__23 lift_u32"]
	b6_4["arg__22 0"]
	b6_9["q U32_equals"]
	b6_32["abs__24 lift_u32"]
	b6_31 --> b6_6
	b6_4 --> b6_31
	b6_9 --> b6_4
	b6_32 --> b6_9
end
subgraph block_10["Block 10"]
	direction TB
	b10_40["mv_f__32 |False|  [U32_equals [q]]"]
	b10_25["eff__6 push_u32"]
	b10_34["abs__26 lift_u32"]
	b10_23["eff__8 push_u32"]
	b10_25 --> b10_40
	b10_34 --> b10_25
	b10_23 --> b10_34
end
branch_7 --> block_10
subgraph block_5["Block 5"]
	direction TB
	b5_38["mv_f__30 |False|  [U32_not_equals [p]]"]
end
phi_12 --> block_5
subgraph phi_12["Phi 12"]
	p12_20{{"Sϕ Stack "}}
end
block_13 --> phi_12
block_14 --> phi_12
subgraph block_13["Block 13"]
	direction TB
	b13_41["mv_t__33 |True|  [U32_equals [q]]"]
	b13_19["eff__11 push_u32"]
	b13_35["abs__27 lift_u32"]
	b13_17["eff__13 push_u32"]
	b13_19 --> b13_41
	b13_35 --> b13_19
	b13_17 --> b13_35
end
branch_11 --> block_13
subgraph branch_11["Branch 11"]
	br11_9["q U32_equals"]

end
branch_2 --> branch_11
subgraph block_14["Block 14"]
	direction TB
	b14_42["mv_f__34 |False|  [U32_equals [q]]"]
	b14_15["eff__15 push_u32"]
	b14_36["abs__28 lift_u32"]
	b14_15 --> b14_42
	b14_36 --> b14_15
end
branch_11 --> block_14

</pre>`;
window.traces["SPLIT_BRANCHES"]["sched push_u32 [eff__17]"] = ''
window.traces["SPLIT_BRANCHES"]["sched push_u32 [eff__17]"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_1[\\"Finish"/]
end
phi_3 --> block_1
subgraph phi_3["Phi 3"]
	p3_30{{"Sϕ Stack "}}
end
block_4 --> phi_3
block_5 --> phi_3
subgraph block_4["Block 4"]
	direction TB
	b4_37["mv_t__29 |True|  [U32_not_equals [p]]"]
end
phi_8 --> block_4
subgraph phi_8["Phi 8"]
	p8_29{{"Sϕ Stack "}}
end
block_9 --> phi_8
block_10 --> phi_8
subgraph block_9["Block 9"]
	direction TB
	b9_39["mv_t__31 |True|  [U32_equals [q]]"]
	b9_28["eff__2 push_u32"]
	b9_33["abs__25 lift_u32"]
	b9_27["eff__4 push_u32"]
	b9_28 --> b9_39
	b9_33 --> b9_28
	b9_27 --> b9_33
end
branch_7 --> block_9
subgraph branch_7["Branch 7"]
	br7_9["q U32_equals"]

end
branch_2 --> branch_7
subgraph branch_2["Branch 2"]
	br2_6["p U32_not_equals"]

end
block_6 --> branch_2
subgraph block_6["Block 6"]
	direction TB
	b6_6["p U32_not_equals"]
	b6_31["abs__23 lift_u32"]
	b6_4["arg__22 0"]
	b6_9["q U32_equals"]
	b6_32["abs__24 lift_u32"]
	b6_31 --> b6_6
	b6_4 --> b6_31
	b6_9 --> b6_4
	b6_32 --> b6_9
end
subgraph block_10["Block 10"]
	direction TB
	b10_40["mv_f__32 |False|  [U32_equals [q]]"]
	b10_25["eff__6 push_u32"]
	b10_34["abs__26 lift_u32"]
	b10_23["eff__8 push_u32"]
	b10_25 --> b10_40
	b10_34 --> b10_25
	b10_23 --> b10_34
end
branch_7 --> block_10
subgraph block_5["Block 5"]
	direction TB
	b5_38["mv_f__30 |False|  [U32_not_equals [p]]"]
end
phi_12 --> block_5
subgraph phi_12["Phi 12"]
	p12_20{{"Sϕ Stack "}}
end
block_13 --> phi_12
block_14 --> phi_12
subgraph block_13["Block 13"]
	direction TB
	b13_41["mv_t__33 |True|  [U32_equals [q]]"]
	b13_19["eff__11 push_u32"]
	b13_35["abs__27 lift_u32"]
	b13_17["eff__13 push_u32"]
	b13_19 --> b13_41
	b13_35 --> b13_19
	b13_17 --> b13_35
end
branch_11 --> block_13
subgraph branch_11["Branch 11"]
	br11_9["q U32_equals"]

end
branch_2 --> branch_11
subgraph block_14["Block 14"]
	direction TB
	b14_42["mv_f__34 |False|  [U32_equals [q]]"]
	b14_15["eff__15 push_u32"]
	b14_36["abs__28 lift_u32"]
	b14_13["eff__17 push_u32"]
	b14_15 --> b14_42
	b14_36 --> b14_15
	b14_13 --> b14_36
end
branch_11 --> block_14

</pre>`;
window.traces["SPLIT_BRANCHES"]["sched 2"] = ''
window.traces["SPLIT_BRANCHES"]["sched 2"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_1[\\"Finish"/]
end
phi_3 --> block_1
subgraph phi_3["Phi 3"]
	p3_30{{"Sϕ Stack "}}
end
block_4 --> phi_3
block_5 --> phi_3
subgraph block_4["Block 4"]
	direction TB
	b4_37["mv_t__29 |True|  [U32_not_equals [p]]"]
end
phi_8 --> block_4
subgraph phi_8["Phi 8"]
	p8_29{{"Sϕ Stack "}}
end
block_9 --> phi_8
block_10 --> phi_8
subgraph block_9["Block 9"]
	direction TB
	b9_39["mv_t__31 |True|  [U32_equals [q]]"]
	b9_28["eff__2 push_u32"]
	b9_33["abs__25 lift_u32"]
	b9_27["eff__4 push_u32"]
	b9_28 --> b9_39
	b9_33 --> b9_28
	b9_27 --> b9_33
end
branch_7 --> block_9
subgraph branch_7["Branch 7"]
	br7_9["q U32_equals"]

end
branch_2 --> branch_7
subgraph branch_2["Branch 2"]
	br2_6["p U32_not_equals"]

end
block_6 --> branch_2
subgraph block_6["Block 6"]
	direction TB
	b6_6["p U32_not_equals"]
	b6_31["abs__23 lift_u32"]
	b6_4["arg__22 0"]
	b6_9["q U32_equals"]
	b6_32["abs__24 lift_u32"]
	b6_7["arg__20 2"]
	b6_31 --> b6_6
	b6_4 --> b6_31
	b6_9 --> b6_4
	b6_32 --> b6_9
	b6_7 --> b6_32
end
subgraph block_10["Block 10"]
	direction TB
	b10_40["mv_f__32 |False|  [U32_equals [q]]"]
	b10_25["eff__6 push_u32"]
	b10_34["abs__26 lift_u32"]
	b10_23["eff__8 push_u32"]
	b10_25 --> b10_40
	b10_34 --> b10_25
	b10_23 --> b10_34
end
branch_7 --> block_10
subgraph block_5["Block 5"]
	direction TB
	b5_38["mv_f__30 |False|  [U32_not_equals [p]]"]
end
phi_12 --> block_5
subgraph phi_12["Phi 12"]
	p12_20{{"Sϕ Stack "}}
end
block_13 --> phi_12
block_14 --> phi_12
subgraph block_13["Block 13"]
	direction TB
	b13_41["mv_t__33 |True|  [U32_equals [q]]"]
	b13_19["eff__11 push_u32"]
	b13_35["abs__27 lift_u32"]
	b13_17["eff__13 push_u32"]
	b13_19 --> b13_41
	b13_35 --> b13_19
	b13_17 --> b13_35
end
branch_11 --> block_13
subgraph branch_11["Branch 11"]
	br11_9["q U32_equals"]

end
branch_2 --> branch_11
subgraph block_14["Block 14"]
	direction TB
	b14_42["mv_f__34 |False|  [U32_equals [q]]"]
	b14_15["eff__15 push_u32"]
	b14_36["abs__28 lift_u32"]
	b14_13["eff__17 push_u32"]
	b14_15 --> b14_42
	b14_36 --> b14_15
	b14_13 --> b14_36
end
branch_11 --> block_14

</pre>`;
window.traces["SPLIT_BRANCHES"]["sched 1"] = ''
window.traces["SPLIT_BRANCHES"]["sched 1"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_1[\\"Finish"/]
end
phi_3 --> block_1
subgraph phi_3["Phi 3"]
	p3_30{{"Sϕ Stack "}}
end
block_4 --> phi_3
block_5 --> phi_3
subgraph block_4["Block 4"]
	direction TB
	b4_37["mv_t__29 |True|  [U32_not_equals [p]]"]
end
phi_8 --> block_4
subgraph phi_8["Phi 8"]
	p8_29{{"Sϕ Stack "}}
end
block_9 --> phi_8
block_10 --> phi_8
subgraph block_9["Block 9"]
	direction TB
	b9_39["mv_t__31 |True|  [U32_equals [q]]"]
	b9_28["eff__2 push_u32"]
	b9_33["abs__25 lift_u32"]
	b9_27["eff__4 push_u32"]
	b9_26["arg__5 1"]
	b9_28 --> b9_39
	b9_33 --> b9_28
	b9_27 --> b9_33
	b9_26 --> b9_27
end
branch_7 --> block_9
subgraph branch_7["Branch 7"]
	br7_9["q U32_equals"]

end
branch_2 --> branch_7
subgraph branch_2["Branch 2"]
	br2_6["p U32_not_equals"]

end
block_6 --> branch_2
subgraph block_6["Block 6"]
	direction TB
	b6_6["p U32_not_equals"]
	b6_31["abs__23 lift_u32"]
	b6_4["arg__22 0"]
	b6_9["q U32_equals"]
	b6_32["abs__24 lift_u32"]
	b6_7["arg__20 2"]
	b6_31 --> b6_6
	b6_4 --> b6_31
	b6_9 --> b6_4
	b6_32 --> b6_9
	b6_7 --> b6_32
end
subgraph block_10["Block 10"]
	direction TB
	b10_40["mv_f__32 |False|  [U32_equals [q]]"]
	b10_25["eff__6 push_u32"]
	b10_34["abs__26 lift_u32"]
	b10_23["eff__8 push_u32"]
	b10_25 --> b10_40
	b10_34 --> b10_25
	b10_23 --> b10_34
end
branch_7 --> block_10
subgraph block_5["Block 5"]
	direction TB
	b5_38["mv_f__30 |False|  [U32_not_equals [p]]"]
end
phi_12 --> block_5
subgraph phi_12["Phi 12"]
	p12_20{{"Sϕ Stack "}}
end
block_13 --> phi_12
block_14 --> phi_12
subgraph block_13["Block 13"]
	direction TB
	b13_41["mv_t__33 |True|  [U32_equals [q]]"]
	b13_19["eff__11 push_u32"]
	b13_35["abs__27 lift_u32"]
	b13_17["eff__13 push_u32"]
	b13_19 --> b13_41
	b13_35 --> b13_19
	b13_17 --> b13_35
end
branch_11 --> block_13
subgraph branch_11["Branch 11"]
	br11_9["q U32_equals"]

end
branch_2 --> branch_11
subgraph block_14["Block 14"]
	direction TB
	b14_42["mv_f__34 |False|  [U32_equals [q]]"]
	b14_15["eff__15 push_u32"]
	b14_36["abs__28 lift_u32"]
	b14_13["eff__17 push_u32"]
	b14_15 --> b14_42
	b14_36 --> b14_15
	b14_13 --> b14_36
end
branch_11 --> block_14

</pre>`;
window.traces["SPLIT_BRANCHES"]["sched 4"] = ''
window.traces["SPLIT_BRANCHES"]["sched 4"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_1[\\"Finish"/]
end
phi_3 --> block_1
subgraph phi_3["Phi 3"]
	p3_30{{"Sϕ Stack "}}
end
block_4 --> phi_3
block_5 --> phi_3
subgraph block_4["Block 4"]
	direction TB
	b4_37["mv_t__29 |True|  [U32_not_equals [p]]"]
end
phi_8 --> block_4
subgraph phi_8["Phi 8"]
	p8_29{{"Sϕ Stack "}}
end
block_9 --> phi_8
block_10 --> phi_8
subgraph block_9["Block 9"]
	direction TB
	b9_39["mv_t__31 |True|  [U32_equals [q]]"]
	b9_28["eff__2 push_u32"]
	b9_33["abs__25 lift_u32"]
	b9_27["eff__4 push_u32"]
	b9_26["arg__5 1"]
	b9_28 --> b9_39
	b9_33 --> b9_28
	b9_27 --> b9_33
	b9_26 --> b9_27
end
branch_7 --> block_9
subgraph branch_7["Branch 7"]
	br7_9["q U32_equals"]

end
branch_2 --> branch_7
subgraph branch_2["Branch 2"]
	br2_6["p U32_not_equals"]

end
block_6 --> branch_2
subgraph block_6["Block 6"]
	direction TB
	b6_6["p U32_not_equals"]
	b6_31["abs__23 lift_u32"]
	b6_4["arg__22 0"]
	b6_9["q U32_equals"]
	b6_32["abs__24 lift_u32"]
	b6_7["arg__20 2"]
	b6_31 --> b6_6
	b6_4 --> b6_31
	b6_9 --> b6_4
	b6_32 --> b6_9
	b6_7 --> b6_32
end
subgraph block_10["Block 10"]
	direction TB
	b10_40["mv_f__32 |False|  [U32_equals [q]]"]
	b10_25["eff__6 push_u32"]
	b10_34["abs__26 lift_u32"]
	b10_23["eff__8 push_u32"]
	b10_24["arg__7 4"]
	b10_25 --> b10_40
	b10_34 --> b10_25
	b10_23 --> b10_34
	b10_24 --> b10_23
end
branch_7 --> block_10
subgraph block_5["Block 5"]
	direction TB
	b5_38["mv_f__30 |False|  [U32_not_equals [p]]"]
end
phi_12 --> block_5
subgraph phi_12["Phi 12"]
	p12_20{{"Sϕ Stack "}}
end
block_13 --> phi_12
block_14 --> phi_12
subgraph block_13["Block 13"]
	direction TB
	b13_41["mv_t__33 |True|  [U32_equals [q]]"]
	b13_19["eff__11 push_u32"]
	b13_35["abs__27 lift_u32"]
	b13_17["eff__13 push_u32"]
	b13_19 --> b13_41
	b13_35 --> b13_19
	b13_17 --> b13_35
end
branch_11 --> block_13
subgraph branch_11["Branch 11"]
	br11_9["q U32_equals"]

end
branch_2 --> branch_11
subgraph block_14["Block 14"]
	direction TB
	b14_42["mv_f__34 |False|  [U32_equals [q]]"]
	b14_15["eff__15 push_u32"]
	b14_36["abs__28 lift_u32"]
	b14_13["eff__17 push_u32"]
	b14_15 --> b14_42
	b14_36 --> b14_15
	b14_13 --> b14_36
end
branch_11 --> block_14

</pre>`;
window.traces["SPLIT_BRANCHES"]["sched 3"] = ''
window.traces["SPLIT_BRANCHES"]["sched 3"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_1[\\"Finish"/]
end
phi_3 --> block_1
subgraph phi_3["Phi 3"]
	p3_30{{"Sϕ Stack "}}
end
block_4 --> phi_3
block_5 --> phi_3
subgraph block_4["Block 4"]
	direction TB
	b4_37["mv_t__29 |True|  [U32_not_equals [p]]"]
end
phi_8 --> block_4
subgraph phi_8["Phi 8"]
	p8_29{{"Sϕ Stack "}}
end
block_9 --> phi_8
block_10 --> phi_8
subgraph block_9["Block 9"]
	direction TB
	b9_39["mv_t__31 |True|  [U32_equals [q]]"]
	b9_28["eff__2 push_u32"]
	b9_33["abs__25 lift_u32"]
	b9_27["eff__4 push_u32"]
	b9_26["arg__5 1"]
	b9_28 --> b9_39
	b9_33 --> b9_28
	b9_27 --> b9_33
	b9_26 --> b9_27
end
branch_7 --> block_9
subgraph branch_7["Branch 7"]
	br7_9["q U32_equals"]

end
branch_2 --> branch_7
subgraph branch_2["Branch 2"]
	br2_6["p U32_not_equals"]

end
block_6 --> branch_2
subgraph block_6["Block 6"]
	direction TB
	b6_6["p U32_not_equals"]
	b6_31["abs__23 lift_u32"]
	b6_4["arg__22 0"]
	b6_9["q U32_equals"]
	b6_32["abs__24 lift_u32"]
	b6_7["arg__20 2"]
	b6_31 --> b6_6
	b6_4 --> b6_31
	b6_9 --> b6_4
	b6_32 --> b6_9
	b6_7 --> b6_32
end
subgraph block_10["Block 10"]
	direction TB
	b10_40["mv_f__32 |False|  [U32_equals [q]]"]
	b10_25["eff__6 push_u32"]
	b10_34["abs__26 lift_u32"]
	b10_23["eff__8 push_u32"]
	b10_24["arg__7 4"]
	b10_22["arg__9 3"]
	b10_25 --> b10_40
	b10_34 --> b10_25
	b10_23 --> b10_34
	b10_24 --> b10_23
	b10_22 --> b10_24
end
branch_7 --> block_10
subgraph block_5["Block 5"]
	direction TB
	b5_38["mv_f__30 |False|  [U32_not_equals [p]]"]
end
phi_12 --> block_5
subgraph phi_12["Phi 12"]
	p12_20{{"Sϕ Stack "}}
end
block_13 --> phi_12
block_14 --> phi_12
subgraph block_13["Block 13"]
	direction TB
	b13_41["mv_t__33 |True|  [U32_equals [q]]"]
	b13_19["eff__11 push_u32"]
	b13_35["abs__27 lift_u32"]
	b13_17["eff__13 push_u32"]
	b13_19 --> b13_41
	b13_35 --> b13_19
	b13_17 --> b13_35
end
branch_11 --> block_13
subgraph branch_11["Branch 11"]
	br11_9["q U32_equals"]

end
branch_2 --> branch_11
subgraph block_14["Block 14"]
	direction TB
	b14_42["mv_f__34 |False|  [U32_equals [q]]"]
	b14_15["eff__15 push_u32"]
	b14_36["abs__28 lift_u32"]
	b14_13["eff__17 push_u32"]
	b14_15 --> b14_42
	b14_36 --> b14_15
	b14_13 --> b14_36
end
branch_11 --> block_14

</pre>`;
window.traces["SPLIT_BRANCHES"]["sched 6"] = ''
window.traces["SPLIT_BRANCHES"]["sched 6"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_1[\\"Finish"/]
end
phi_3 --> block_1
subgraph phi_3["Phi 3"]
	p3_30{{"Sϕ Stack "}}
end
block_4 --> phi_3
block_5 --> phi_3
subgraph block_4["Block 4"]
	direction TB
	b4_37["mv_t__29 |True|  [U32_not_equals [p]]"]
end
phi_8 --> block_4
subgraph phi_8["Phi 8"]
	p8_29{{"Sϕ Stack "}}
end
block_9 --> phi_8
block_10 --> phi_8
subgraph block_9["Block 9"]
	direction TB
	b9_39["mv_t__31 |True|  [U32_equals [q]]"]
	b9_28["eff__2 push_u32"]
	b9_33["abs__25 lift_u32"]
	b9_27["eff__4 push_u32"]
	b9_26["arg__5 1"]
	b9_28 --> b9_39
	b9_33 --> b9_28
	b9_27 --> b9_33
	b9_26 --> b9_27
end
branch_7 --> block_9
subgraph branch_7["Branch 7"]
	br7_9["q U32_equals"]

end
branch_2 --> branch_7
subgraph branch_2["Branch 2"]
	br2_6["p U32_not_equals"]

end
block_6 --> branch_2
subgraph block_6["Block 6"]
	direction TB
	b6_6["p U32_not_equals"]
	b6_31["abs__23 lift_u32"]
	b6_4["arg__22 0"]
	b6_9["q U32_equals"]
	b6_32["abs__24 lift_u32"]
	b6_7["arg__20 2"]
	b6_31 --> b6_6
	b6_4 --> b6_31
	b6_9 --> b6_4
	b6_32 --> b6_9
	b6_7 --> b6_32
end
subgraph block_10["Block 10"]
	direction TB
	b10_40["mv_f__32 |False|  [U32_equals [q]]"]
	b10_25["eff__6 push_u32"]
	b10_34["abs__26 lift_u32"]
	b10_23["eff__8 push_u32"]
	b10_24["arg__7 4"]
	b10_22["arg__9 3"]
	b10_25 --> b10_40
	b10_34 --> b10_25
	b10_23 --> b10_34
	b10_24 --> b10_23
	b10_22 --> b10_24
end
branch_7 --> block_10
subgraph block_5["Block 5"]
	direction TB
	b5_38["mv_f__30 |False|  [U32_not_equals [p]]"]
end
phi_12 --> block_5
subgraph phi_12["Phi 12"]
	p12_20{{"Sϕ Stack "}}
end
block_13 --> phi_12
block_14 --> phi_12
subgraph block_13["Block 13"]
	direction TB
	b13_41["mv_t__33 |True|  [U32_equals [q]]"]
	b13_19["eff__11 push_u32"]
	b13_35["abs__27 lift_u32"]
	b13_17["eff__13 push_u32"]
	b13_18["arg__12 6"]
	b13_19 --> b13_41
	b13_35 --> b13_19
	b13_17 --> b13_35
	b13_18 --> b13_17
end
branch_11 --> block_13
subgraph branch_11["Branch 11"]
	br11_9["q U32_equals"]

end
branch_2 --> branch_11
subgraph block_14["Block 14"]
	direction TB
	b14_42["mv_f__34 |False|  [U32_equals [q]]"]
	b14_15["eff__15 push_u32"]
	b14_36["abs__28 lift_u32"]
	b14_13["eff__17 push_u32"]
	b14_15 --> b14_42
	b14_36 --> b14_15
	b14_13 --> b14_36
end
branch_11 --> block_14

</pre>`;
window.traces["SPLIT_BRANCHES"]["sched 5"] = ''
window.traces["SPLIT_BRANCHES"]["sched 5"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_1[\\"Finish"/]
end
phi_3 --> block_1
subgraph phi_3["Phi 3"]
	p3_30{{"Sϕ Stack "}}
end
block_4 --> phi_3
block_5 --> phi_3
subgraph block_4["Block 4"]
	direction TB
	b4_37["mv_t__29 |True|  [U32_not_equals [p]]"]
end
phi_8 --> block_4
subgraph phi_8["Phi 8"]
	p8_29{{"Sϕ Stack "}}
end
block_9 --> phi_8
block_10 --> phi_8
subgraph block_9["Block 9"]
	direction TB
	b9_39["mv_t__31 |True|  [U32_equals [q]]"]
	b9_28["eff__2 push_u32"]
	b9_33["abs__25 lift_u32"]
	b9_27["eff__4 push_u32"]
	b9_26["arg__5 1"]
	b9_28 --> b9_39
	b9_33 --> b9_28
	b9_27 --> b9_33
	b9_26 --> b9_27
end
branch_7 --> block_9
subgraph branch_7["Branch 7"]
	br7_9["q U32_equals"]

end
branch_2 --> branch_7
subgraph branch_2["Branch 2"]
	br2_6["p U32_not_equals"]

end
block_6 --> branch_2
subgraph block_6["Block 6"]
	direction TB
	b6_6["p U32_not_equals"]
	b6_31["abs__23 lift_u32"]
	b6_4["arg__22 0"]
	b6_9["q U32_equals"]
	b6_32["abs__24 lift_u32"]
	b6_7["arg__20 2"]
	b6_31 --> b6_6
	b6_4 --> b6_31
	b6_9 --> b6_4
	b6_32 --> b6_9
	b6_7 --> b6_32
end
subgraph block_10["Block 10"]
	direction TB
	b10_40["mv_f__32 |False|  [U32_equals [q]]"]
	b10_25["eff__6 push_u32"]
	b10_34["abs__26 lift_u32"]
	b10_23["eff__8 push_u32"]
	b10_24["arg__7 4"]
	b10_22["arg__9 3"]
	b10_25 --> b10_40
	b10_34 --> b10_25
	b10_23 --> b10_34
	b10_24 --> b10_23
	b10_22 --> b10_24
end
branch_7 --> block_10
subgraph block_5["Block 5"]
	direction TB
	b5_38["mv_f__30 |False|  [U32_not_equals [p]]"]
end
phi_12 --> block_5
subgraph phi_12["Phi 12"]
	p12_20{{"Sϕ Stack "}}
end
block_13 --> phi_12
block_14 --> phi_12
subgraph block_13["Block 13"]
	direction TB
	b13_41["mv_t__33 |True|  [U32_equals [q]]"]
	b13_19["eff__11 push_u32"]
	b13_35["abs__27 lift_u32"]
	b13_17["eff__13 push_u32"]
	b13_18["arg__12 6"]
	b13_16["arg__14 5"]
	b13_19 --> b13_41
	b13_35 --> b13_19
	b13_17 --> b13_35
	b13_18 --> b13_17
	b13_16 --> b13_18
end
branch_11 --> block_13
subgraph branch_11["Branch 11"]
	br11_9["q U32_equals"]

end
branch_2 --> branch_11
subgraph block_14["Block 14"]
	direction TB
	b14_42["mv_f__34 |False|  [U32_equals [q]]"]
	b14_15["eff__15 push_u32"]
	b14_36["abs__28 lift_u32"]
	b14_13["eff__17 push_u32"]
	b14_15 --> b14_42
	b14_36 --> b14_15
	b14_13 --> b14_36
end
branch_11 --> block_14

</pre>`;
window.traces["SPLIT_BRANCHES"]["sched 8"] = ''
window.traces["SPLIT_BRANCHES"]["sched 8"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_1[\\"Finish"/]
end
phi_3 --> block_1
subgraph phi_3["Phi 3"]
	p3_30{{"Sϕ Stack "}}
end
block_4 --> phi_3
block_5 --> phi_3
subgraph block_4["Block 4"]
	direction TB
	b4_37["mv_t__29 |True|  [U32_not_equals [p]]"]
end
phi_8 --> block_4
subgraph phi_8["Phi 8"]
	p8_29{{"Sϕ Stack "}}
end
block_9 --> phi_8
block_10 --> phi_8
subgraph block_9["Block 9"]
	direction TB
	b9_39["mv_t__31 |True|  [U32_equals [q]]"]
	b9_28["eff__2 push_u32"]
	b9_33["abs__25 lift_u32"]
	b9_27["eff__4 push_u32"]
	b9_26["arg__5 1"]
	b9_28 --> b9_39
	b9_33 --> b9_28
	b9_27 --> b9_33
	b9_26 --> b9_27
end
branch_7 --> block_9
subgraph branch_7["Branch 7"]
	br7_9["q U32_equals"]

end
branch_2 --> branch_7
subgraph branch_2["Branch 2"]
	br2_6["p U32_not_equals"]

end
block_6 --> branch_2
subgraph block_6["Block 6"]
	direction TB
	b6_6["p U32_not_equals"]
	b6_31["abs__23 lift_u32"]
	b6_4["arg__22 0"]
	b6_9["q U32_equals"]
	b6_32["abs__24 lift_u32"]
	b6_7["arg__20 2"]
	b6_31 --> b6_6
	b6_4 --> b6_31
	b6_9 --> b6_4
	b6_32 --> b6_9
	b6_7 --> b6_32
end
subgraph block_10["Block 10"]
	direction TB
	b10_40["mv_f__32 |False|  [U32_equals [q]]"]
	b10_25["eff__6 push_u32"]
	b10_34["abs__26 lift_u32"]
	b10_23["eff__8 push_u32"]
	b10_24["arg__7 4"]
	b10_22["arg__9 3"]
	b10_25 --> b10_40
	b10_34 --> b10_25
	b10_23 --> b10_34
	b10_24 --> b10_23
	b10_22 --> b10_24
end
branch_7 --> block_10
subgraph block_5["Block 5"]
	direction TB
	b5_38["mv_f__30 |False|  [U32_not_equals [p]]"]
end
phi_12 --> block_5
subgraph phi_12["Phi 12"]
	p12_20{{"Sϕ Stack "}}
end
block_13 --> phi_12
block_14 --> phi_12
subgraph block_13["Block 13"]
	direction TB
	b13_41["mv_t__33 |True|  [U32_equals [q]]"]
	b13_19["eff__11 push_u32"]
	b13_35["abs__27 lift_u32"]
	b13_17["eff__13 push_u32"]
	b13_18["arg__12 6"]
	b13_16["arg__14 5"]
	b13_19 --> b13_41
	b13_35 --> b13_19
	b13_17 --> b13_35
	b13_18 --> b13_17
	b13_16 --> b13_18
end
branch_11 --> block_13
subgraph branch_11["Branch 11"]
	br11_9["q U32_equals"]

end
branch_2 --> branch_11
subgraph block_14["Block 14"]
	direction TB
	b14_42["mv_f__34 |False|  [U32_equals [q]]"]
	b14_15["eff__15 push_u32"]
	b14_36["abs__28 lift_u32"]
	b14_13["eff__17 push_u32"]
	b14_14["arg__16 8"]
	b14_15 --> b14_42
	b14_36 --> b14_15
	b14_13 --> b14_36
	b14_14 --> b14_13
end
branch_11 --> block_14

</pre>`;
window.traces["SPLIT_BRANCHES"]["sched 7"] = ''
window.traces["SPLIT_BRANCHES"]["sched 7"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_1[\\"Finish"/]
end
phi_3 --> block_1
subgraph phi_3["Phi 3"]
	p3_30{{"Sϕ Stack "}}
end
block_4 --> phi_3
block_5 --> phi_3
subgraph block_4["Block 4"]
	direction TB
	b4_37["mv_t__29 |True|  [U32_not_equals [p]]"]
end
phi_8 --> block_4
subgraph phi_8["Phi 8"]
	p8_29{{"Sϕ Stack "}}
end
block_9 --> phi_8
block_10 --> phi_8
subgraph block_9["Block 9"]
	direction TB
	b9_39["mv_t__31 |True|  [U32_equals [q]]"]
	b9_28["eff__2 push_u32"]
	b9_33["abs__25 lift_u32"]
	b9_27["eff__4 push_u32"]
	b9_26["arg__5 1"]
	b9_28 --> b9_39
	b9_33 --> b9_28
	b9_27 --> b9_33
	b9_26 --> b9_27
end
branch_7 --> block_9
subgraph branch_7["Branch 7"]
	br7_9["q U32_equals"]

end
branch_2 --> branch_7
subgraph branch_2["Branch 2"]
	br2_6["p U32_not_equals"]

end
block_6 --> branch_2
subgraph block_6["Block 6"]
	direction TB
	b6_6["p U32_not_equals"]
	b6_31["abs__23 lift_u32"]
	b6_4["arg__22 0"]
	b6_9["q U32_equals"]
	b6_32["abs__24 lift_u32"]
	b6_7["arg__20 2"]
	b6_31 --> b6_6
	b6_4 --> b6_31
	b6_9 --> b6_4
	b6_32 --> b6_9
	b6_7 --> b6_32
end
subgraph block_10["Block 10"]
	direction TB
	b10_40["mv_f__32 |False|  [U32_equals [q]]"]
	b10_25["eff__6 push_u32"]
	b10_34["abs__26 lift_u32"]
	b10_23["eff__8 push_u32"]
	b10_24["arg__7 4"]
	b10_22["arg__9 3"]
	b10_25 --> b10_40
	b10_34 --> b10_25
	b10_23 --> b10_34
	b10_24 --> b10_23
	b10_22 --> b10_24
end
branch_7 --> block_10
subgraph block_5["Block 5"]
	direction TB
	b5_38["mv_f__30 |False|  [U32_not_equals [p]]"]
end
phi_12 --> block_5
subgraph phi_12["Phi 12"]
	p12_20{{"Sϕ Stack "}}
end
block_13 --> phi_12
block_14 --> phi_12
subgraph block_13["Block 13"]
	direction TB
	b13_41["mv_t__33 |True|  [U32_equals [q]]"]
	b13_19["eff__11 push_u32"]
	b13_35["abs__27 lift_u32"]
	b13_17["eff__13 push_u32"]
	b13_18["arg__12 6"]
	b13_16["arg__14 5"]
	b13_19 --> b13_41
	b13_35 --> b13_19
	b13_17 --> b13_35
	b13_18 --> b13_17
	b13_16 --> b13_18
end
branch_11 --> block_13
subgraph branch_11["Branch 11"]
	br11_9["q U32_equals"]

end
branch_2 --> branch_11
subgraph block_14["Block 14"]
	direction TB
	b14_42["mv_f__34 |False|  [U32_equals [q]]"]
	b14_15["eff__15 push_u32"]
	b14_36["abs__28 lift_u32"]
	b14_13["eff__17 push_u32"]
	b14_14["arg__16 8"]
	b14_12["arg__18 7"]
	b14_15 --> b14_42
	b14_36 --> b14_15
	b14_13 --> b14_36
	b14_14 --> b14_13
	b14_12 --> b14_14
end
branch_11 --> block_14

</pre>`;
window.traces["SPLIT_BRANCHES"]["sched pop_u32 [c1]"] = ''
window.traces["SPLIT_BRANCHES"]["sched pop_u32 [c1]"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_1[\\"Finish"/]
end
phi_3 --> block_1
subgraph phi_3["Phi 3"]
	p3_30{{"Sϕ Stack "}}
end
block_4 --> phi_3
block_5 --> phi_3
subgraph block_4["Block 4"]
	direction TB
	b4_37["mv_t__29 |True|  [U32_not_equals [p]]"]
end
phi_8 --> block_4
subgraph phi_8["Phi 8"]
	p8_29{{"Sϕ Stack "}}
end
block_9 --> phi_8
block_10 --> phi_8
subgraph block_9["Block 9"]
	direction TB
	b9_39["mv_t__31 |True|  [U32_equals [q]]"]
	b9_28["eff__2 push_u32"]
	b9_33["abs__25 lift_u32"]
	b9_27["eff__4 push_u32"]
	b9_26["arg__5 1"]
	b9_28 --> b9_39
	b9_33 --> b9_28
	b9_27 --> b9_33
	b9_26 --> b9_27
end
branch_7 --> block_9
subgraph branch_7["Branch 7"]
	br7_9["q U32_equals"]

end
branch_2 --> branch_7
subgraph branch_2["Branch 2"]
	br2_6["p U32_not_equals"]

end
block_6 --> branch_2
subgraph block_6["Block 6"]
	direction TB
	b6_6["p U32_not_equals"]
	b6_31["abs__23 lift_u32"]
	b6_4["arg__22 0"]
	b6_9["q U32_equals"]
	b6_32["abs__24 lift_u32"]
	b6_7["arg__20 2"]
	b6_3["c1 pop_u32"]
	b6_31 --> b6_6
	b6_4 --> b6_31
	b6_9 --> b6_4
	b6_32 --> b6_9
	b6_7 --> b6_32
	b6_3 --> b6_7
end
subgraph block_10["Block 10"]
	direction TB
	b10_40["mv_f__32 |False|  [U32_equals [q]]"]
	b10_25["eff__6 push_u32"]
	b10_34["abs__26 lift_u32"]
	b10_23["eff__8 push_u32"]
	b10_24["arg__7 4"]
	b10_22["arg__9 3"]
	b10_25 --> b10_40
	b10_34 --> b10_25
	b10_23 --> b10_34
	b10_24 --> b10_23
	b10_22 --> b10_24
end
branch_7 --> block_10
subgraph block_5["Block 5"]
	direction TB
	b5_38["mv_f__30 |False|  [U32_not_equals [p]]"]
end
phi_12 --> block_5
subgraph phi_12["Phi 12"]
	p12_20{{"Sϕ Stack "}}
end
block_13 --> phi_12
block_14 --> phi_12
subgraph block_13["Block 13"]
	direction TB
	b13_41["mv_t__33 |True|  [U32_equals [q]]"]
	b13_19["eff__11 push_u32"]
	b13_35["abs__27 lift_u32"]
	b13_17["eff__13 push_u32"]
	b13_18["arg__12 6"]
	b13_16["arg__14 5"]
	b13_19 --> b13_41
	b13_35 --> b13_19
	b13_17 --> b13_35
	b13_18 --> b13_17
	b13_16 --> b13_18
end
branch_11 --> block_13
subgraph branch_11["Branch 11"]
	br11_9["q U32_equals"]

end
branch_2 --> branch_11
subgraph block_14["Block 14"]
	direction TB
	b14_42["mv_f__34 |False|  [U32_equals [q]]"]
	b14_15["eff__15 push_u32"]
	b14_36["abs__28 lift_u32"]
	b14_13["eff__17 push_u32"]
	b14_14["arg__16 8"]
	b14_12["arg__18 7"]
	b14_15 --> b14_42
	b14_36 --> b14_15
	b14_13 --> b14_36
	b14_14 --> b14_13
	b14_12 --> b14_14
end
branch_11 --> block_14

</pre>`;
window.traces["SPLIT_BRANCHES"]["sched Start"] = ''
window.traces["SPLIT_BRANCHES"]["sched Start"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_1[\\"Finish"/]
end
phi_3 --> block_1
subgraph phi_3["Phi 3"]
	p3_30{{"Sϕ Stack "}}
end
block_4 --> phi_3
block_5 --> phi_3
subgraph block_4["Block 4"]
	direction TB
	b4_37["mv_t__29 |True|  [U32_not_equals [p]]"]
end
phi_8 --> block_4
subgraph phi_8["Phi 8"]
	p8_29{{"Sϕ Stack "}}
end
block_9 --> phi_8
block_10 --> phi_8
subgraph block_9["Block 9"]
	direction TB
	b9_39["mv_t__31 |True|  [U32_equals [q]]"]
	b9_28["eff__2 push_u32"]
	b9_33["abs__25 lift_u32"]
	b9_27["eff__4 push_u32"]
	b9_26["arg__5 1"]
	b9_28 --> b9_39
	b9_33 --> b9_28
	b9_27 --> b9_33
	b9_26 --> b9_27
end
branch_7 --> block_9
subgraph branch_7["Branch 7"]
	br7_9["q U32_equals"]

end
branch_2 --> branch_7
subgraph branch_2["Branch 2"]
	br2_6["p U32_not_equals"]

end
block_6 --> branch_2
subgraph block_6["Block 6"]
	direction TB
	b6_6["p U32_not_equals"]
	b6_31["abs__23 lift_u32"]
	b6_4["arg__22 0"]
	b6_9["q U32_equals"]
	b6_32["abs__24 lift_u32"]
	b6_7["arg__20 2"]
	b6_3["c1 pop_u32"]
	b6_0[/"Start"\\]
	b6_31 --> b6_6
	b6_4 --> b6_31
	b6_9 --> b6_4
	b6_32 --> b6_9
	b6_7 --> b6_32
	b6_3 --> b6_7
	b6_0 --> b6_3
end
subgraph block_10["Block 10"]
	direction TB
	b10_40["mv_f__32 |False|  [U32_equals [q]]"]
	b10_25["eff__6 push_u32"]
	b10_34["abs__26 lift_u32"]
	b10_23["eff__8 push_u32"]
	b10_24["arg__7 4"]
	b10_22["arg__9 3"]
	b10_25 --> b10_40
	b10_34 --> b10_25
	b10_23 --> b10_34
	b10_24 --> b10_23
	b10_22 --> b10_24
end
branch_7 --> block_10
subgraph block_5["Block 5"]
	direction TB
	b5_38["mv_f__30 |False|  [U32_not_equals [p]]"]
end
phi_12 --> block_5
subgraph phi_12["Phi 12"]
	p12_20{{"Sϕ Stack "}}
end
block_13 --> phi_12
block_14 --> phi_12
subgraph block_13["Block 13"]
	direction TB
	b13_41["mv_t__33 |True|  [U32_equals [q]]"]
	b13_19["eff__11 push_u32"]
	b13_35["abs__27 lift_u32"]
	b13_17["eff__13 push_u32"]
	b13_18["arg__12 6"]
	b13_16["arg__14 5"]
	b13_19 --> b13_41
	b13_35 --> b13_19
	b13_17 --> b13_35
	b13_18 --> b13_17
	b13_16 --> b13_18
end
branch_11 --> block_13
subgraph branch_11["Branch 11"]
	br11_9["q U32_equals"]

end
branch_2 --> branch_11
subgraph block_14["Block 14"]
	direction TB
	b14_42["mv_f__34 |False|  [U32_equals [q]]"]
	b14_15["eff__15 push_u32"]
	b14_36["abs__28 lift_u32"]
	b14_13["eff__17 push_u32"]
	b14_14["arg__16 8"]
	b14_12["arg__18 7"]
	b14_15 --> b14_42
	b14_36 --> b14_15
	b14_13 --> b14_36
	b14_14 --> b14_13
	b14_12 --> b14_14
end
branch_11 --> block_14

</pre>`;
window.info["SPLIT_BRANCHES"]["info_final"] = ''
window.info["SPLIT_BRANCHES"]["info_final"] += `<pre class=''>=== CFG ===
Block #6:
  nodes: #0 Start #3 pop_u32 [c1] #7 2 #32 lift_u32 [abs__24] #9 U32_equals [q] #4 0 #31 lift_u32 [abs__23] #6 U32_not_equals [p]
  doms: #0 Start #3 pop_u32 [c1] #4 0 #6 U32_not_equals [p] #7 2 #9 U32_equals [q] #31 lift_u32 [abs__23] #32 lift_u32 [abs__24]
Branch #2 cond=#6 U32_not_equals [p]:
  if-true:
    Branch #7 cond=#9 U32_equals [q]:
      if-true:
        Block #9:
          nodes: #26 1 #27 push_u32 [eff__4] #33 lift_u32 [abs__25] #28 push_u32 [eff__2] #39 |True|
          doms: #26 1 #27 push_u32 [eff__4] #28 push_u32 [eff__2] #33 lift_u32 [abs__25] #39 |True|
      if-false:
        Block #10:
          nodes: #22 3 #24 4 #23 push_u32 [eff__8] #34 lift_u32 [abs__26] #25 push_u32 [eff__6] #40 |False|
          doms: #22 3 #23 push_u32 [eff__8] #24 4 #25 push_u32 [eff__6] #34 lift_u32 [abs__26] #40 |False|
    Phi #8(#29 StatePhi [U32_equals [q]]):
      doms: #29 StatePhi [U32_equals [q]]
    Block #4:
      nodes: #37 |True|
      doms: #37 |True|
  if-false:
    Branch #11 cond=#9 U32_equals [q]:
      if-true:
        Block #13:
          nodes: #16 5 #18 6 #17 push_u32 [eff__13] #35 lift_u32 [abs__27] #19 push_u32 [eff__11] #41 |True|
          doms: #16 5 #17 push_u32 [eff__13] #18 6 #19 push_u32 [eff__11] #35 lift_u32 [abs__27] #41 |True|
      if-false:
        Block #14:
          nodes: #12 7 #14 8 #13 push_u32 [eff__17] #36 lift_u32 [abs__28] #15 push_u32 [eff__15] #42 |False|
          doms: #12 7 #13 push_u32 [eff__17] #14 8 #15 push_u32 [eff__15] #36 lift_u32 [abs__28] #42 |False|
    Phi #12(#20 StatePhi [U32_equals [q]]):
      doms: #20 StatePhi [U32_equals [q]]
    Block #5:
      nodes: #38 |False|
      doms: #38 |False|
Phi #3(#30 StatePhi [U32_not_equals [p]]):
  doms: #30 StatePhi [U32_not_equals [p]]
Block #1:
  nodes: #1 Finish
  doms: #1 Finish
</pre>`;
window.traces["SPLIT_BRANCHES"]["schedulerMermaid"] = ''
window.traces["SPLIT_BRANCHES"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_1[\\"Finish"/]
end
phi_3 --> block_1
subgraph phi_3["Phi 3"]
	p3_30{{"Sϕ Stack "}}
end
block_4 --> phi_3
block_5 --> phi_3
subgraph block_4["Block 4"]
	direction TB
	b4_37["mv_t__29 |True|  [U32_not_equals [p]]"]
end
phi_8 --> block_4
subgraph phi_8["Phi 8"]
	p8_29{{"Sϕ Stack "}}
end
block_9 --> phi_8
block_10 --> phi_8
subgraph block_9["Block 9"]
	direction TB
	b9_26["arg__5 1"]
	b9_27["eff__4 push_u32"]
	b9_33["abs__25 lift_u32"]
	b9_28["eff__2 push_u32"]
	b9_39["mv_t__31 |True|  [U32_equals [q]]"]
	b9_26 --> b9_27
	b9_27 --> b9_33
	b9_33 --> b9_28
	b9_28 --> b9_39
end
branch_7 --> block_9
subgraph branch_7["Branch 7"]
	br7_9["q U32_equals"]

end
branch_2 --> branch_7
subgraph branch_2["Branch 2"]
	br2_6["p U32_not_equals"]

end
block_6 --> branch_2
subgraph block_6["Block 6"]
	direction TB
	b6_0[/"Start"\\]
	b6_3["c1 pop_u32"]
	b6_7["arg__20 2"]
	b6_32["abs__24 lift_u32"]
	b6_9["q U32_equals"]
	b6_4["arg__22 0"]
	b6_31["abs__23 lift_u32"]
	b6_6["p U32_not_equals"]
	b6_0 --> b6_3
	b6_3 --> b6_7
	b6_7 --> b6_32
	b6_32 --> b6_9
	b6_9 --> b6_4
	b6_4 --> b6_31
	b6_31 --> b6_6
end
subgraph block_10["Block 10"]
	direction TB
	b10_22["arg__9 3"]
	b10_24["arg__7 4"]
	b10_23["eff__8 push_u32"]
	b10_34["abs__26 lift_u32"]
	b10_25["eff__6 push_u32"]
	b10_40["mv_f__32 |False|  [U32_equals [q]]"]
	b10_22 --> b10_24
	b10_24 --> b10_23
	b10_23 --> b10_34
	b10_34 --> b10_25
	b10_25 --> b10_40
end
branch_7 --> block_10
subgraph block_5["Block 5"]
	direction TB
	b5_38["mv_f__30 |False|  [U32_not_equals [p]]"]
end
phi_12 --> block_5
subgraph phi_12["Phi 12"]
	p12_20{{"Sϕ Stack "}}
end
block_13 --> phi_12
block_14 --> phi_12
subgraph block_13["Block 13"]
	direction TB
	b13_16["arg__14 5"]
	b13_18["arg__12 6"]
	b13_17["eff__13 push_u32"]
	b13_35["abs__27 lift_u32"]
	b13_19["eff__11 push_u32"]
	b13_41["mv_t__33 |True|  [U32_equals [q]]"]
	b13_16 --> b13_18
	b13_18 --> b13_17
	b13_17 --> b13_35
	b13_35 --> b13_19
	b13_19 --> b13_41
end
branch_11 --> block_13
subgraph branch_11["Branch 11"]
	br11_9["q U32_equals"]

end
branch_2 --> branch_11
subgraph block_14["Block 14"]
	direction TB
	b14_12["arg__18 7"]
	b14_14["arg__16 8"]
	b14_13["eff__17 push_u32"]
	b14_36["abs__28 lift_u32"]
	b14_15["eff__15 push_u32"]
	b14_42["mv_f__34 |False|  [U32_equals [q]]"]
	b14_12 --> b14_14
	b14_14 --> b14_13
	b14_13 --> b14_36
	b14_36 --> b14_15
	b14_15 --> b14_42
end
branch_11 --> block_14

</pre>`;
window.traces["SPLIT_BRANCHES"]["scheduler_ssad"] = ''
window.traces["SPLIT_BRANCHES"]["scheduler_ssad"] += `<pre class=''>def c1 = pop_u32();
def arg__20 : u32 = 2;
def abs__24 = lift_u32(arg__20);
def q = U32_equals(c1, abs__24);
def arg__22 : u32 = 0;
def abs__23 = lift_u32(arg__22);
def p = U32_not_equals(c1, abs__23);
if (p) {
	if (q) {
		def arg__5 : u32 = 1;
		def eff__4 = push_u32(arg__5);
		def abs__25 = lift_u32(arg__20);
		def eff__2 = push_u32(abs__25);
	} else {
		def arg__9 : u32 = 3;
		def arg__7 : u32 = 4;
		def eff__8 = push_u32(arg__9);
		def abs__26 = lift_u32(arg__7);
		def eff__6 = push_u32(abs__26);
	}
// phis: 
} else {
	if (q) {
		def arg__14 : u32 = 5;
		def arg__12 : u32 = 6;
		def eff__13 = push_u32(arg__14);
		def abs__27 = lift_u32(arg__12);
		def eff__11 = push_u32(abs__27);
	} else {
		def arg__18 : u32 = 7;
		def arg__16 : u32 = 8;
		def eff__17 = push_u32(arg__18);
		def abs__28 = lift_u32(arg__16);
		def eff__15 = push_u32(abs__28);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["SPLIT_BRANCHES"]["scheduler_ssad_pretty"] = ''
window.traces["SPLIT_BRANCHES"]["scheduler_ssad_pretty"] += `<pre class=''>def c1 = pop_u32();
def p = U32_not_equals(c1, lift_u32(0));
if (p) {
	if (U32_equals(c1, lift_u32(2))) {
		push_u32(1);
		push_u32(lift_u32(2));
	} else {
		push_u32(3);
		push_u32(lift_u32(4));
	}
} else {
	if (U32_equals(c1, lift_u32(2))) {
		push_u32(5);
		push_u32(lift_u32(6));
	} else {
		push_u32(7);
		push_u32(lift_u32(8));
	}
}
</pre>`;
window.traces["SPLIT_BRANCHES"]["unLEM"] = ''
window.traces["SPLIT_BRANCHES"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	30 -. Stack .-> 1
	30{{"Sϕ Stack "}}
	39 --> 30
	49 --> 30
	40 --> 30
	40{{"innerPhi__38 Sϕ Stack "}}
	37 --> 40
	29 --> 40
	20 --> 40
	20{{"Sϕ Stack "}}
	52 --> 20
	62 --> 20
	58 --> 20
	58{{"innerPhi__56 Sϕ Stack "}}
	50 --> 58
	19 --> 58
	15 --> 58
	15["eff__15 push_u32"]
	36 --> 15
	13 -. Stack .-> 15
	13["eff__17 push_u32"]
	12 --> 13
	3 -. Stack .-> 13
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	12["arg__18 7"]
	36["abs__28 lift_u32"]
	14 --> 36
	14["arg__16 8"]
	19["eff__11 push_u32"]
	35 --> 19
	17 -. Stack .-> 19
	17["eff__13 push_u32"]
	16 --> 17
	3 -. Stack .-> 17
	16["arg__14 5"]
	35["abs__27 lift_u32"]
	18 --> 35
	18["arg__12 6"]
	50["mt__48 U32_maybeTrue"]
	9 --> 50
	9["q U32_equals"]
	3 --> 9
	32 --> 9
	32["abs__24 lift_u32"]
	7 --> 32
	7["arg__20 2"]
	62["eff_push__60 push_u32"]
	61 --> 62
	60 -. Stack .-> 62
	60["eff_push__58 push_u32"]
	59 --> 60
	3 -. Stack .-> 60
	59["merge__57 merge_u"]
	16 --> 59
	12 --> 59
	61["merge__59 merge_u"]
	35 --> 61
	36 --> 61
	52["mb__50 bool.&&"]
	50 --> 52
	51 --> 52
	51["mf__49 U32_maybeFalse"]
	9 --> 51
	29{{"Sϕ Stack "}}
	52 --> 29
	57 --> 29
	53 --> 29
	53{{"innerPhi__51 Sϕ Stack "}}
	50 --> 53
	28 --> 53
	25 --> 53
	25["eff__6 push_u32"]
	34 --> 25
	23 -. Stack .-> 25
	23["eff__8 push_u32"]
	22 --> 23
	3 -. Stack .-> 23
	22["arg__9 3"]
	34["abs__26 lift_u32"]
	24 --> 34
	24["arg__7 4"]
	28["eff__2 push_u32"]
	33 --> 28
	27 -. Stack .-> 28
	27["eff__4 push_u32"]
	26 --> 27
	3 -. Stack .-> 27
	26["arg__5 1"]
	33["abs__25 lift_u32"]
	7 --> 33
	57["eff_push__55 push_u32"]
	56 --> 57
	55 -. Stack .-> 57
	55["eff_push__53 push_u32"]
	54 --> 55
	3 -. Stack .-> 55
	54["merge__52 merge_u"]
	26 --> 54
	22 --> 54
	56["merge__54 merge_u"]
	33 --> 56
	34 --> 56
	37["mt__35 U32_maybeTrue"]
	6 --> 37
	6["p U32_not_equals"]
	3 --> 6
	31 --> 6
	31["abs__23 lift_u32"]
	4 --> 31
	4["arg__22 0"]
	49{{"merged_phi__47 Sϕ Stack "}}
	9 --> 49
	44 --> 49
	48 --> 49
	48["eff_push__46 push_u32"]
	47 --> 48
	46 -. Stack .-> 48
	46["eff_push__44 push_u32"]
	45 --> 46
	3 -. Stack .-> 46
	45["merge__43 merge_u"]
	22 --> 45
	12 --> 45
	47["merge__45 merge_u"]
	34 --> 47
	36 --> 47
	44["eff_push__42 push_u32"]
	43 --> 44
	42 -. Stack .-> 44
	42["eff_push__40 push_u32"]
	41 --> 42
	3 -. Stack .-> 42
	41["merge__39 merge_u"]
	26 --> 41
	16 --> 41
	43["merge__41 merge_u"]
	33 --> 43
	35 --> 43
	39["mb__37 bool.&&"]
	37 --> 39
	38 --> 39
	38["mf__36 U32_maybeFalse"]
	6 --> 38
</pre>`;
window.traces["SPLIT_BRANCHES_ul"] = {}
window.traces["SPLIT_BRANCHES_ul"]["scheduler_start"] = ''
window.traces["SPLIT_BRANCHES_ul"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	30 -. Stack .-> 1
	30{{"Sϕ Stack "}}
	39 --> 30
	63 --> 30
	64 --> 30
	64["mv_f__62 |False|  [bool.&& [mb__37]]"]
	39 --> 64
	40 -. Stack .-> 64
	40{{"innerPhi__38 Sϕ Stack "}}
	37 --> 40
	67 --> 40
	68 --> 40
	68["mv_f__66 |False|  [U32_maybeTrue [mt__35]]"]
	37 --> 68
	20 -. Stack .-> 68
	20{{"Sϕ Stack "}}
	52 --> 20
	71 --> 20
	72 --> 20
	72["mv_f__70 |False|  [bool.&& [mb__50]]"]
	52 --> 72
	58 -. Stack .-> 72
	58{{"innerPhi__56 Sϕ Stack "}}
	50 --> 58
	75 --> 58
	76 --> 58
	76["mv_f__74 |False|  [U32_maybeTrue [mt__48]]"]
	50 --> 76
	15 -. Stack .-> 76
	15["eff__15 push_u32"]
	36 --> 15
	13 -. Stack .-> 15
	13["eff__17 push_u32"]
	12 --> 13
	3 -. Stack .-> 13
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	12["arg__18 7"]
	36["abs__28 lift_u32"]
	14 --> 36
	14["arg__16 8"]
	50["mt__48 U32_maybeTrue"]
	9 --> 50
	9["q U32_equals"]
	3 --> 9
	32 --> 9
	32["abs__24 lift_u32"]
	7 --> 32
	7["arg__20 2"]
	75["mv_t__73 |True|  [U32_maybeTrue [mt__48]]"]
	50 --> 75
	19 -. Stack .-> 75
	19["eff__11 push_u32"]
	35 --> 19
	17 -. Stack .-> 19
	17["eff__13 push_u32"]
	16 --> 17
	3 -. Stack .-> 17
	16["arg__14 5"]
	35["abs__27 lift_u32"]
	18 --> 35
	18["arg__12 6"]
	52["mb__50 bool.&&"]
	50 --> 52
	51 --> 52
	51["mf__49 U32_maybeFalse"]
	9 --> 51
	71["mv_t__69 |True|  [bool.&& [mb__50]]"]
	52 --> 71
	62 -. Stack .-> 71
	62["eff_push__60 push_u32"]
	61 --> 62
	60 -. Stack .-> 62
	60["eff_push__58 push_u32"]
	59 --> 60
	3 -. Stack .-> 60
	59["merge__57 merge_u"]
	16 --> 59
	12 --> 59
	61["merge__59 merge_u"]
	35 --> 61
	36 --> 61
	37["mt__35 U32_maybeTrue"]
	6 --> 37
	6["p U32_not_equals"]
	3 --> 6
	31 --> 6
	31["abs__23 lift_u32"]
	4 --> 31
	4["arg__22 0"]
	67["mv_t__65 |True|  [U32_maybeTrue [mt__35]]"]
	37 --> 67
	29 -. Stack .-> 67
	29{{"Sϕ Stack "}}
	52 --> 29
	69 --> 29
	70 --> 29
	70["mv_f__68 |False|  [bool.&& [mb__50]]"]
	52 --> 70
	53 -. Stack .-> 70
	53{{"innerPhi__51 Sϕ Stack "}}
	50 --> 53
	73 --> 53
	74 --> 53
	74["mv_f__72 |False|  [U32_maybeTrue [mt__48]]"]
	50 --> 74
	25 -. Stack .-> 74
	25["eff__6 push_u32"]
	34 --> 25
	23 -. Stack .-> 25
	23["eff__8 push_u32"]
	22 --> 23
	3 -. Stack .-> 23
	22["arg__9 3"]
	34["abs__26 lift_u32"]
	24 --> 34
	24["arg__7 4"]
	73["mv_t__71 |True|  [U32_maybeTrue [mt__48]]"]
	50 --> 73
	28 -. Stack .-> 73
	28["eff__2 push_u32"]
	33 --> 28
	27 -. Stack .-> 28
	27["eff__4 push_u32"]
	26 --> 27
	3 -. Stack .-> 27
	26["arg__5 1"]
	33["abs__25 lift_u32"]
	7 --> 33
	69["mv_t__67 |True|  [bool.&& [mb__50]]"]
	52 --> 69
	57 -. Stack .-> 69
	57["eff_push__55 push_u32"]
	56 --> 57
	55 -. Stack .-> 57
	55["eff_push__53 push_u32"]
	54 --> 55
	3 -. Stack .-> 55
	54["merge__52 merge_u"]
	26 --> 54
	22 --> 54
	56["merge__54 merge_u"]
	33 --> 56
	34 --> 56
	39["mb__37 bool.&&"]
	37 --> 39
	38 --> 39
	38["mf__36 U32_maybeFalse"]
	6 --> 38
	63["mv_t__61 |True|  [bool.&& [mb__37]]"]
	39 --> 63
	49 -. Stack .-> 63
	49{{"merged_phi__47 Sϕ Stack "}}
	9 --> 49
	65 --> 49
	66 --> 49
	66["mv_f__64 |False|  [U32_equals [q]]"]
	9 --> 66
	48 -. Stack .-> 66
	48["eff_push__46 push_u32"]
	47 --> 48
	46 -. Stack .-> 48
	46["eff_push__44 push_u32"]
	45 --> 46
	3 -. Stack .-> 46
	45["merge__43 merge_u"]
	22 --> 45
	12 --> 45
	47["merge__45 merge_u"]
	34 --> 47
	36 --> 47
	65["mv_t__63 |True|  [U32_equals [q]]"]
	9 --> 65
	44 -. Stack .-> 65
	44["eff_push__42 push_u32"]
	43 --> 44
	42 -. Stack .-> 44
	42["eff_push__40 push_u32"]
	41 --> 42
	3 -. Stack .-> 42
	41["merge__39 merge_u"]
	26 --> 41
	16 --> 41
	43["merge__41 merge_u"]
	33 --> 43
	35 --> 43
</pre>`;
window.traces["SPLIT_BRANCHES_ul"]["untangled"] = ''
window.traces["SPLIT_BRANCHES_ul"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	30 -. Stack .-> 1
	30{{"Sϕ Stack "}}
	39 --> 30
	63 --> 30
	64 --> 30
	64["mv_f__62 |False|  [bool.&& [mb__37]]"]
	39 --> 64
	40 -. Stack .-> 64
	40{{"innerPhi__38 Sϕ Stack "}}
	37 --> 40
	67 --> 40
	68 --> 40
	68["mv_f__66 |False|  [U32_maybeTrue [mt__35]]"]
	37 --> 68
	20 -. Stack .-> 68
	20{{"Sϕ Stack "}}
	52 --> 20
	97 --> 20
	109 --> 20
	109["mv_f__70__97 |False|  [bool.&& [mb__50]]"]
	52 --> 109
	108 -. Stack .-> 109
	108{{"innerPhi__56__96 Sϕ Stack "}}
	50 --> 108
	110 --> 108
	111 --> 108
	111["mv_f__74__99 |False|  [U32_maybeTrue [mt__48]]"]
	50 --> 111
	101 -. Stack .-> 111
	101["eff__15__89 push_u32"]
	107 --> 101
	99 -. Stack .-> 101
	99["eff__17__87 push_u32"]
	98 --> 99
	3 -. Stack .-> 99
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	98["arg__18__86 7"]
	107["abs__28__95 lift_u32"]
	100 --> 107
	100["arg__16__88 8"]
	50["mt__48 U32_maybeTrue"]
	9 --> 50
	9["q U32_equals"]
	3 --> 9
	32 --> 9
	32["abs__24 lift_u32"]
	7 --> 32
	7["arg__20 2"]
	110["mv_t__73__98 |True|  [U32_maybeTrue [mt__48]]"]
	50 --> 110
	105 -. Stack .-> 110
	105["eff__11__93 push_u32"]
	106 --> 105
	103 -. Stack .-> 105
	103["eff__13__91 push_u32"]
	102 --> 103
	3 -. Stack .-> 103
	102["arg__14__90 5"]
	106["abs__27__94 lift_u32"]
	104 --> 106
	104["arg__12__92 6"]
	52["mb__50 bool.&&"]
	50 --> 52
	51 --> 52
	51["mf__49 U32_maybeFalse"]
	9 --> 51
	97["mv_t__69__85 |True|  [bool.&& [mb__50]]"]
	52 --> 97
	96 -. Stack .-> 97
	96["eff_push__60__84 push_u32"]
	95 --> 96
	94 -. Stack .-> 96
	94["eff_push__58__82 push_u32"]
	93 --> 94
	3 -. Stack .-> 94
	93["merge__57__81 merge_u"]
	89 --> 93
	87 --> 93
	87["arg__18__75 7"]
	89["arg__14__77 5"]
	95["merge__59__83 merge_u"]
	91 --> 95
	92 --> 95
	92["abs__28__80 lift_u32"]
	88 --> 92
	88["arg__16__76 8"]
	91["abs__27__79 lift_u32"]
	90 --> 91
	90["arg__12__78 6"]
	37["mt__35 U32_maybeTrue"]
	6 --> 37
	6["p U32_not_equals"]
	3 --> 6
	31 --> 6
	31["abs__23 lift_u32"]
	4 --> 31
	4["arg__22 0"]
	67["mv_t__65 |True|  [U32_maybeTrue [mt__35]]"]
	37 --> 67
	29 -. Stack .-> 67
	29{{"Sϕ Stack "}}
	52 --> 29
	121 --> 29
	132 --> 29
	132["mv_f__68__120 |False|  [bool.&& [mb__50]]"]
	52 --> 132
	131 -. Stack .-> 132
	131{{"innerPhi__51__119 Sϕ Stack "}}
	50 --> 131
	133 --> 131
	134 --> 131
	134["mv_f__72__122 |False|  [U32_maybeTrue [mt__48]]"]
	50 --> 134
	125 -. Stack .-> 134
	125["eff__6__113 push_u32"]
	130 --> 125
	123 -. Stack .-> 125
	123["eff__8__111 push_u32"]
	122 --> 123
	3 -. Stack .-> 123
	122["arg__9__110 3"]
	130["abs__26__118 lift_u32"]
	124 --> 130
	124["arg__7__112 4"]
	133["mv_t__71__121 |True|  [U32_maybeTrue [mt__48]]"]
	50 --> 133
	128 -. Stack .-> 133
	128["eff__2__116 push_u32"]
	129 --> 128
	127 -. Stack .-> 128
	127["eff__4__115 push_u32"]
	126 --> 127
	3 -. Stack .-> 127
	126["arg__5__114 1"]
	129["abs__25__117 lift_u32"]
	7 --> 129
	121["mv_t__67__109 |True|  [bool.&& [mb__50]]"]
	52 --> 121
	120 -. Stack .-> 121
	120["eff_push__55__108 push_u32"]
	119 --> 120
	118 -. Stack .-> 120
	118["eff_push__53__106 push_u32"]
	117 --> 118
	3 -. Stack .-> 118
	117["merge__52__105 merge_u"]
	114 --> 117
	112 --> 117
	112["arg__9__100 3"]
	114["arg__5__102 1"]
	119["merge__54__107 merge_u"]
	115 --> 119
	116 --> 119
	116["abs__26__104 lift_u32"]
	113 --> 116
	113["arg__7__101 4"]
	115["abs__25__103 lift_u32"]
	7 --> 115
	39["mb__37 bool.&&"]
	37 --> 39
	38 --> 39
	38["mf__36 U32_maybeFalse"]
	6 --> 38
	63["mv_t__61 |True|  [bool.&& [mb__37]]"]
	39 --> 63
	49 -. Stack .-> 63
	49{{"merged_phi__47 Sϕ Stack "}}
	9 --> 49
	65 --> 49
	66 --> 49
	66["mv_f__64 |False|  [U32_equals [q]]"]
	9 --> 66
	48 -. Stack .-> 66
	48["eff_push__46 push_u32"]
	47 --> 48
	46 -. Stack .-> 48
	46["eff_push__44 push_u32"]
	45 --> 46
	3 -. Stack .-> 46
	45["merge__43 merge_u"]
	22 --> 45
	12 --> 45
	12["arg__18 7"]
	22["arg__9 3"]
	47["merge__45 merge_u"]
	34 --> 47
	36 --> 47
	36["abs__28 lift_u32"]
	14 --> 36
	14["arg__16 8"]
	34["abs__26 lift_u32"]
	24 --> 34
	24["arg__7 4"]
	65["mv_t__63 |True|  [U32_equals [q]]"]
	9 --> 65
	44 -. Stack .-> 65
	44["eff_push__42 push_u32"]
	43 --> 44
	42 -. Stack .-> 44
	42["eff_push__40 push_u32"]
	41 --> 42
	3 -. Stack .-> 42
	41["merge__39 merge_u"]
	26 --> 41
	16 --> 41
	16["arg__14 5"]
	26["arg__5 1"]
	43["merge__41 merge_u"]
	33 --> 43
	35 --> 43
	35["abs__27 lift_u32"]
	18 --> 35
	18["arg__12 6"]
	33["abs__25 lift_u32"]
	7 --> 33
</pre>`;
window.traces["SPLIT_BRANCHES"]["unlem_schedule"] = ''
window.traces["SPLIT_BRANCHES"]["unlem_schedule"] += `<pre class=''>def c1 = pop_u32();
def arg__20 : u32 = 2;
def abs__24 = lift_u32(arg__20);
def q = U32_equals(c1, abs__24);
def mt__48 = U32_maybeTrue(q);
def mf__49 = U32_maybeFalse(q);
def arg__22 : u32 = 0;
def mb__50 = bool.&&(mt__48, mf__49);
def abs__23 = lift_u32(arg__22);
def p = U32_not_equals(c1, abs__23);
def mt__35 = U32_maybeTrue(p);
def mf__36 = U32_maybeFalse(p);
def mb__37 = bool.&&(mt__35, mf__36);
if (mb__37) {
	if (q) {
		def arg__14 : u32 = 5;
		def arg__5 : u32 = 1;
		def arg__12 : u32 = 6;
		def merge__39 = merge_u(arg__5, arg__14);
		def abs__27 = lift_u32(arg__12);
		def abs__25 = lift_u32(arg__20);
		def eff_push__40 = push_u32(merge__39);
		def merge__41 = merge_u(abs__25, abs__27);
		def eff_push__42 = push_u32(merge__41);
	} else {
		def arg__18 : u32 = 7;
		def arg__9 : u32 = 3;
		def arg__16 : u32 = 8;
		def arg__7 : u32 = 4;
		def merge__43 = merge_u(arg__9, arg__18);
		def abs__28 = lift_u32(arg__16);
		def abs__26 = lift_u32(arg__7);
		def eff_push__44 = push_u32(merge__43);
		def merge__45 = merge_u(abs__26, abs__28);
		def eff_push__46 = push_u32(merge__45);
	}
// phis: 
} else {
	if (mt__35) {
		if (mb__50) {
			def arg__9__100 : u32 = 3;
			def arg__5__102 : u32 = 1;
			def arg__7__101 : u32 = 4;
			def merge__52__105 = merge_u(arg__5__102, arg__9__100);
			def abs__26__104 = lift_u32(arg__7__101);
			def abs__25__103 = lift_u32(arg__20);
			def eff_push__53__106 = push_u32(merge__52__105);
			def merge__54__107 = merge_u(abs__25__103, abs__26__104);
			def eff_push__55__108 = push_u32(merge__54__107);
		} else {
			if (mt__48) {
				def arg__5__114 : u32 = 1;
				def eff__4__115 = push_u32(arg__5__114);
				def abs__25__117 = lift_u32(arg__20);
				def eff__2__116 = push_u32(abs__25__117);
			} else {
				def arg__9__110 : u32 = 3;
				def arg__7__112 : u32 = 4;
				def eff__8__111 = push_u32(arg__9__110);
				def abs__26__118 = lift_u32(arg__7__112);
				def eff__6__113 = push_u32(abs__26__118);
			}
// phis: 
		}
// phis: 
	} else {
		if (mb__50) {
			def arg__18__75 : u32 = 7;
			def arg__14__77 : u32 = 5;
			def arg__16__76 : u32 = 8;
			def arg__12__78 : u32 = 6;
			def merge__57__81 = merge_u(arg__14__77, arg__18__75);
			def abs__28__80 = lift_u32(arg__16__76);
			def abs__27__79 = lift_u32(arg__12__78);
			def eff_push__58__82 = push_u32(merge__57__81);
			def merge__59__83 = merge_u(abs__27__79, abs__28__80);
			def eff_push__60__84 = push_u32(merge__59__83);
		} else {
			if (mt__48) {
				def arg__14__90 : u32 = 5;
				def arg__12__92 : u32 = 6;
				def eff__13__91 = push_u32(arg__14__90);
				def abs__27__94 = lift_u32(arg__12__92);
				def eff__11__93 = push_u32(abs__27__94);
			} else {
				def arg__18__86 : u32 = 7;
				def arg__16__88 : u32 = 8;
				def eff__17__87 = push_u32(arg__18__86);
				def abs__28__95 = lift_u32(arg__16__88);
				def eff__15__89 = push_u32(abs__28__95);
			}
// phis: 
		}
// phis: 
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["SPLIT_BRANCHES"]["unlem_scheduler"] = ''
window.traces["SPLIT_BRANCHES"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_15["Block 15"]
	direction TB
	b15_1[\\"Finish"/]
end
phi_17 --> block_15
subgraph phi_17["Phi 17"]
	p17_30{{"Sϕ Stack "}}
end
block_18 --> phi_17
block_19 --> phi_17
subgraph block_18["Block 18"]
	direction TB
	b18_63["mv_t__61 |True|  [bool.&& [mb__37]]"]
end
phi_22 --> block_18
subgraph phi_22["Phi 22"]
	p22_49{{"merged_phi__47 Sϕ Stack "}}
end
block_23 --> phi_22
block_24 --> phi_22
subgraph block_23["Block 23"]
	direction TB
	b23_16["arg__14 5"]
	b23_26["arg__5 1"]
	b23_18["arg__12 6"]
	b23_41["merge__39 merge_u"]
	b23_35["abs__27 lift_u32"]
	b23_33["abs__25 lift_u32"]
	b23_42["eff_push__40 push_u32"]
	b23_43["merge__41 merge_u"]
	b23_44["eff_push__42 push_u32"]
	b23_65["mv_t__63 |True|  [U32_equals [q]]"]
	b23_16 --> b23_26
	b23_26 --> b23_18
	b23_18 --> b23_41
	b23_41 --> b23_35
	b23_35 --> b23_33
	b23_33 --> b23_42
	b23_42 --> b23_43
	b23_43 --> b23_44
	b23_44 --> b23_65
end
branch_21 --> block_23
subgraph branch_21["Branch 21"]
	br21_9["q U32_equals"]

end
branch_16 --> branch_21
subgraph branch_16["Branch 16"]
	br16_39["mb__37 bool.&&"]

end
block_20 --> branch_16
subgraph block_20["Block 20"]
	direction TB
	b20_0[/"Start"\\]
	b20_3["c1 pop_u32"]
	b20_7["arg__20 2"]
	b20_32["abs__24 lift_u32"]
	b20_9["q U32_equals"]
	b20_50["mt__48 U32_maybeTrue"]
	b20_51["mf__49 U32_maybeFalse"]
	b20_4["arg__22 0"]
	b20_52["mb__50 bool.&&"]
	b20_31["abs__23 lift_u32"]
	b20_6["p U32_not_equals"]
	b20_37["mt__35 U32_maybeTrue"]
	b20_38["mf__36 U32_maybeFalse"]
	b20_39["mb__37 bool.&&"]
	b20_0 --> b20_3
	b20_3 --> b20_7
	b20_7 --> b20_32
	b20_32 --> b20_9
	b20_9 --> b20_50
	b20_50 --> b20_51
	b20_51 --> b20_4
	b20_4 --> b20_52
	b20_52 --> b20_31
	b20_31 --> b20_6
	b20_6 --> b20_37
	b20_37 --> b20_38
	b20_38 --> b20_39
end
subgraph block_24["Block 24"]
	direction TB
	b24_12["arg__18 7"]
	b24_22["arg__9 3"]
	b24_14["arg__16 8"]
	b24_24["arg__7 4"]
	b24_45["merge__43 merge_u"]
	b24_36["abs__28 lift_u32"]
	b24_34["abs__26 lift_u32"]
	b24_46["eff_push__44 push_u32"]
	b24_47["merge__45 merge_u"]
	b24_48["eff_push__46 push_u32"]
	b24_66["mv_f__64 |False|  [U32_equals [q]]"]
	b24_12 --> b24_22
	b24_22 --> b24_14
	b24_14 --> b24_24
	b24_24 --> b24_45
	b24_45 --> b24_36
	b24_36 --> b24_34
	b24_34 --> b24_46
	b24_46 --> b24_47
	b24_47 --> b24_48
	b24_48 --> b24_66
end
branch_21 --> block_24
subgraph block_19["Block 19"]
	direction TB
	b19_64["mv_f__62 |False|  [bool.&& [mb__37]]"]
end
phi_26 --> block_19
subgraph phi_26["Phi 26"]
	p26_40{{"innerPhi__38 Sϕ Stack "}}
end
block_27 --> phi_26
block_28 --> phi_26
subgraph block_27["Block 27"]
	direction TB
	b27_67["mv_t__65 |True|  [U32_maybeTrue [mt__35]]"]
end
phi_30 --> block_27
subgraph phi_30["Phi 30"]
	p30_29{{"Sϕ Stack "}}
end
block_31 --> phi_30
block_32 --> phi_30
subgraph block_31["Block 31"]
	direction TB
	b31_112["arg__9__100 3"]
	b31_114["arg__5__102 1"]
	b31_113["arg__7__101 4"]
	b31_117["merge__52__105 merge_u"]
	b31_116["abs__26__104 lift_u32"]
	b31_115["abs__25__103 lift_u32"]
	b31_118["eff_push__53__106 push_u32"]
	b31_119["merge__54__107 merge_u"]
	b31_120["eff_push__55__108 push_u32"]
	b31_121["mv_t__67__109 |True|  [bool.&& [mb__50]]"]
	b31_112 --> b31_114
	b31_114 --> b31_113
	b31_113 --> b31_117
	b31_117 --> b31_116
	b31_116 --> b31_115
	b31_115 --> b31_118
	b31_118 --> b31_119
	b31_119 --> b31_120
	b31_120 --> b31_121
end
branch_29 --> block_31
subgraph branch_29["Branch 29"]
	br29_52["mb__50 bool.&&"]

end
branch_25 --> branch_29
subgraph branch_25["Branch 25"]
	br25_37["mt__35 U32_maybeTrue"]

end
branch_16 --> branch_25
subgraph block_32["Block 32"]
	direction TB
	b32_132["mv_f__68__120 |False|  [bool.&& [mb__50]]"]
end
phi_38 --> block_32
subgraph phi_38["Phi 38"]
	p38_131{{"innerPhi__51__119 Sϕ Stack "}}
end
block_39 --> phi_38
block_40 --> phi_38
subgraph block_39["Block 39"]
	direction TB
	b39_126["arg__5__114 1"]
	b39_127["eff__4__115 push_u32"]
	b39_129["abs__25__117 lift_u32"]
	b39_128["eff__2__116 push_u32"]
	b39_133["mv_t__71__121 |True|  [U32_maybeTrue [mt__48]]"]
	b39_126 --> b39_127
	b39_127 --> b39_129
	b39_129 --> b39_128
	b39_128 --> b39_133
end
branch_37 --> block_39
subgraph branch_37["Branch 37"]
	br37_50["mt__48 U32_maybeTrue"]

end
branch_29 --> branch_37
subgraph block_40["Block 40"]
	direction TB
	b40_122["arg__9__110 3"]
	b40_124["arg__7__112 4"]
	b40_123["eff__8__111 push_u32"]
	b40_130["abs__26__118 lift_u32"]
	b40_125["eff__6__113 push_u32"]
	b40_134["mv_f__72__122 |False|  [U32_maybeTrue [mt__48]]"]
	b40_122 --> b40_124
	b40_124 --> b40_123
	b40_123 --> b40_130
	b40_130 --> b40_125
	b40_125 --> b40_134
end
branch_37 --> block_40
subgraph block_28["Block 28"]
	direction TB
	b28_68["mv_f__66 |False|  [U32_maybeTrue [mt__35]]"]
end
phi_34 --> block_28
subgraph phi_34["Phi 34"]
	p34_20{{"Sϕ Stack "}}
end
block_35 --> phi_34
block_36 --> phi_34
subgraph block_35["Block 35"]
	direction TB
	b35_87["arg__18__75 7"]
	b35_89["arg__14__77 5"]
	b35_88["arg__16__76 8"]
	b35_90["arg__12__78 6"]
	b35_93["merge__57__81 merge_u"]
	b35_92["abs__28__80 lift_u32"]
	b35_91["abs__27__79 lift_u32"]
	b35_94["eff_push__58__82 push_u32"]
	b35_95["merge__59__83 merge_u"]
	b35_96["eff_push__60__84 push_u32"]
	b35_97["mv_t__69__85 |True|  [bool.&& [mb__50]]"]
	b35_87 --> b35_89
	b35_89 --> b35_88
	b35_88 --> b35_90
	b35_90 --> b35_93
	b35_93 --> b35_92
	b35_92 --> b35_91
	b35_91 --> b35_94
	b35_94 --> b35_95
	b35_95 --> b35_96
	b35_96 --> b35_97
end
branch_33 --> block_35
subgraph branch_33["Branch 33"]
	br33_52["mb__50 bool.&&"]

end
branch_25 --> branch_33
subgraph block_36["Block 36"]
	direction TB
	b36_109["mv_f__70__97 |False|  [bool.&& [mb__50]]"]
end
phi_42 --> block_36
subgraph phi_42["Phi 42"]
	p42_108{{"innerPhi__56__96 Sϕ Stack "}}
end
block_43 --> phi_42
block_44 --> phi_42
subgraph block_43["Block 43"]
	direction TB
	b43_102["arg__14__90 5"]
	b43_104["arg__12__92 6"]
	b43_103["eff__13__91 push_u32"]
	b43_106["abs__27__94 lift_u32"]
	b43_105["eff__11__93 push_u32"]
	b43_110["mv_t__73__98 |True|  [U32_maybeTrue [mt__48]]"]
	b43_102 --> b43_104
	b43_104 --> b43_103
	b43_103 --> b43_106
	b43_106 --> b43_105
	b43_105 --> b43_110
end
branch_41 --> block_43
subgraph branch_41["Branch 41"]
	br41_50["mt__48 U32_maybeTrue"]

end
branch_33 --> branch_41
subgraph block_44["Block 44"]
	direction TB
	b44_98["arg__18__86 7"]
	b44_100["arg__16__88 8"]
	b44_99["eff__17__87 push_u32"]
	b44_107["abs__28__95 lift_u32"]
	b44_101["eff__15__89 push_u32"]
	b44_111["mv_f__74__99 |False|  [U32_maybeTrue [mt__48]]"]
	b44_98 --> b44_100
	b44_100 --> b44_99
	b44_99 --> b44_107
	b44_107 --> b44_101
	b44_101 --> b44_111
end
branch_41 --> block_44

</pre>`;
window.traces["SPLIT_BRANCHES"]["unlem_scheduler_ssa"] = ''
window.traces["SPLIT_BRANCHES"]["unlem_scheduler_ssa"] += `<pre class=''>def c1 = pop_u32();
def arg__20 : u32 = 2;
def abs__24 = lift_u32(arg__20);
def q = U32_equals(c1, abs__24);
def mt__48 = U32_maybeTrue(q);
def mf__49 = U32_maybeFalse(q);
def arg__22 : u32 = 0;
def mb__50 = bool.&&(mt__48, mf__49);
def abs__23 = lift_u32(arg__22);
def p = U32_not_equals(c1, abs__23);
def mt__35 = U32_maybeTrue(p);
def mf__36 = U32_maybeFalse(p);
def mb__37 = bool.&&(mt__35, mf__36);
if (mb__37) {
	if (q) {
		def arg__14 : u32 = 5;
		def arg__5 : u32 = 1;
		def arg__12 : u32 = 6;
		def merge__39 = merge_u(arg__5, arg__14);
		def abs__27 = lift_u32(arg__12);
		def abs__25 = lift_u32(arg__20);
		def eff_push__40 = push_u32(merge__39);
		def merge__41 = merge_u(abs__25, abs__27);
		def eff_push__42 = push_u32(merge__41);
	} else {
		def arg__18 : u32 = 7;
		def arg__9 : u32 = 3;
		def arg__16 : u32 = 8;
		def arg__7 : u32 = 4;
		def merge__43 = merge_u(arg__9, arg__18);
		def abs__28 = lift_u32(arg__16);
		def abs__26 = lift_u32(arg__7);
		def eff_push__44 = push_u32(merge__43);
		def merge__45 = merge_u(abs__26, abs__28);
		def eff_push__46 = push_u32(merge__45);
	}
// phis: 
} else {
	if (mt__35) {
		if (mb__50) {
			def arg__9__100 : u32 = 3;
			def arg__5__102 : u32 = 1;
			def arg__7__101 : u32 = 4;
			def merge__52__105 = merge_u(arg__5__102, arg__9__100);
			def abs__26__104 = lift_u32(arg__7__101);
			def abs__25__103 = lift_u32(arg__20);
			def eff_push__53__106 = push_u32(merge__52__105);
			def merge__54__107 = merge_u(abs__25__103, abs__26__104);
			def eff_push__55__108 = push_u32(merge__54__107);
		} else {
			if (mt__48) {
				def arg__5__114 : u32 = 1;
				def eff__4__115 = push_u32(arg__5__114);
				def abs__25__117 = lift_u32(arg__20);
				def eff__2__116 = push_u32(abs__25__117);
			} else {
				def arg__9__110 : u32 = 3;
				def arg__7__112 : u32 = 4;
				def eff__8__111 = push_u32(arg__9__110);
				def abs__26__118 = lift_u32(arg__7__112);
				def eff__6__113 = push_u32(abs__26__118);
			}
// phis: 
		}
// phis: 
	} else {
		if (mb__50) {
			def arg__18__75 : u32 = 7;
			def arg__14__77 : u32 = 5;
			def arg__16__76 : u32 = 8;
			def arg__12__78 : u32 = 6;
			def merge__57__81 = merge_u(arg__14__77, arg__18__75);
			def abs__28__80 = lift_u32(arg__16__76);
			def abs__27__79 = lift_u32(arg__12__78);
			def eff_push__58__82 = push_u32(merge__57__81);
			def merge__59__83 = merge_u(abs__27__79, abs__28__80);
			def eff_push__60__84 = push_u32(merge__59__83);
		} else {
			if (mt__48) {
				def arg__14__90 : u32 = 5;
				def arg__12__92 : u32 = 6;
				def eff__13__91 = push_u32(arg__14__90);
				def abs__27__94 = lift_u32(arg__12__92);
				def eff__11__93 = push_u32(abs__27__94);
			} else {
				def arg__18__86 : u32 = 7;
				def arg__16__88 : u32 = 8;
				def eff__17__87 = push_u32(arg__18__86);
				def abs__28__95 = lift_u32(arg__16__88);
				def eff__15__89 = push_u32(abs__28__95);
			}
// phis: 
		}
// phis: 
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["SPLIT_BRANCHES"]["unlem_scheduler_ssa_pretty"] = ''
window.traces["SPLIT_BRANCHES"]["unlem_scheduler_ssa_pretty"] += `<pre class=''>def c1 = pop_u32();
def mt = U32_maybeTrue(U32_equals(c1, lift_u32(2)));
def mf = U32_maybeFalse(U32_equals(c1, lift_u32(2)));
def p = U32_not_equals(c1, lift_u32(0));
def mt1 = U32_maybeTrue(p);
def mf1 = U32_maybeFalse(p);
if (bool.&&(mt1, mf1)) {
	if (U32_equals(c1, lift_u32(2))) {
		push_u32(merge_u(1, 5));
		push_u32(merge_u(lift_u32(2), lift_u32(6)));
	} else {
		push_u32(merge_u(3, 7));
		push_u32(merge_u(lift_u32(4), lift_u32(8)));
	}
} else {
	if (mt1) {
		if (bool.&&(mt, mf)) {
			push_u32(merge_u(1, 3));
			push_u32(merge_u(lift_u32(2), lift_u32(4)));
		} else {
			if (mt) {
				push_u32(1);
				push_u32(lift_u32(2));
			} else {
				push_u32(3);
				push_u32(lift_u32(4));
			}
		}
	} else {
		if (bool.&&(mt, mf)) {
			push_u32(merge_u(5, 7));
			push_u32(merge_u(lift_u32(6), lift_u32(8)));
		} else {
			if (mt) {
				push_u32(5);
				push_u32(lift_u32(6));
			} else {
				push_u32(7);
				push_u32(lift_u32(8));
			}
		}
	}
}
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"] = {}
window.traces["SPLIT_BRANCHES_PHI"]["parsed"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["parsed"] += `<pre class=''>def c1 = pop_u32();
def r3 : u32 = 0;
def r4 : u32 = 1;
def arg__141 : u32 = 0;
def arg__140 = (c1);
def p = u32.!=(arg__140, arg__141);
def arg__139 : u32 = 2;
def arg__138 = (c1);
def q = u32.==(arg__138, arg__139);
def cond__127 = (p);
if (cond__127) {
	def cond__128 = (q);
	if (cond__128) {
		def r3__130 : u32 = 1;
		def r4__129 : u32 = 2;
	} else {
		def r3__132 : u32 = 3;
		def r4__131 : u32 = 4;
	}
// phis: r4 <- r4__129; r4 <- r4__131; r3 <- r3__130; r3 <- r3__132; 
} else {
	def cond__133 = (q);
	if (cond__133) {
		def r3__135 : u32 = 5;
		def r4__134 : u32 = 6;
	} else {
		def r3__137 : u32 = 6;
		def r4__136 : u32 = 7;
	}
// phis: r4 <- r4__134; r4 <- r4__136; r3 <- r3__135; r3 <- r3__137; 
}
// phis: r4 <- r4__134; r4 <- r4__136; r3 <- r3__135; r3 <- r3__137; 
def arg__126 = (r3);
def eff__125 = push_u32(arg__126);
def arg__124 = (r4);
def eff__123 = push_u32(arg__124);
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["raw"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	28 -. Stack .-> 1
	28["eff__123 push_u32"]
	23 --> 28
	26 -. Stack .-> 28
	26["eff__125 push_u32"]
	24 --> 26
	3 -. Stack .-> 26
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	24{"r3 ϕ"}
	7 --> 24
	13 --> 24
	13 --> 24
	13["r3__147 6"]
	7["p u32.!="]
	3 --> 7
	4 --> 7
	4["r3 0"]
	23{"r4 ϕ"}
	7 --> 23
	14 --> 23
	14 --> 23
	14["r4__146 7"]
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["overloadOps"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	28 -. Stack .-> 1
	28["eff__123 push_u32"]
	23 --> 28
	26 -. Stack .-> 28
	26["eff__125 push_u32"]
	24 --> 26
	3 -. Stack .-> 26
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	24{"r3 ϕ"}
	7 --> 24
	13 --> 24
	13 --> 24
	13["r3__147 6"]
	7["p U32_not_equals"]
	3 --> 7
	4 --> 7
	4["r3 0"]
	23{"r4 ϕ"}
	7 --> 23
	14 --> 23
	14 --> 23
	14["r4__146 7"]
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["addAbstractions"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	28 -. Stack .-> 1
	28["eff__123 push_u32"]
	23 --> 28
	26 -. Stack .-> 28
	26["eff__125 push_u32"]
	24 --> 26
	3 -. Stack .-> 26
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	24{"r3 ϕ"}
	7 --> 24
	13 --> 24
	13 --> 24
	13["r3__147 6"]
	7["p U32_not_equals"]
	3 --> 7
	29 --> 7
	29["abs__148 lift_u32"]
	4 --> 29
	4["r3 0"]
	23{"r4 ϕ"}
	7 --> 23
	14 --> 23
	14 --> 23
	14["r4__146 7"]
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["scheduler_start"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	28 -. Stack .-> 1
	28["eff__123 push_u32"]
	23 --> 28
	26 -. Stack .-> 28
	26["eff__125 push_u32"]
	24 --> 26
	3 -. Stack .-> 26
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	24{"r3 ϕ"}
	7 --> 24
	32 --> 24
	33 --> 24
	33["mv_f__152 |False|  [U32_not_equals [p]]"]
	7 --> 33
	13 --> 33
	13["r3__147 6"]
	7["p U32_not_equals"]
	3 --> 7
	29 --> 7
	29["abs__148 lift_u32"]
	4 --> 29
	4["r3 0"]
	32["mv_t__151 |True|  [U32_not_equals [p]]"]
	7 --> 32
	13 --> 32
	23{"r4 ϕ"}
	7 --> 23
	30 --> 23
	31 --> 23
	31["mv_f__150 |False|  [U32_not_equals [p]]"]
	7 --> 31
	14 --> 31
	14["r4__146 7"]
	30["mv_t__149 |True|  [U32_not_equals [p]]"]
	7 --> 30
	14 --> 30
</pre>`;
window.info["SPLIT_BRANCHES_PHI"] = {}
window.info["SPLIT_BRANCHES_PHI"]["info_start"] = ''
window.info["SPLIT_BRANCHES_PHI"]["info_start"] += `<pre class=''>=== orig_sea ===
  #14 7
  #23 Phi(#7 U32_not_equals [p],#14 7,#14 7)
  #4 0
  #29 lift_u32 [abs__148](#4 0)
  #7 U32_not_equals [p](#3 pop_u32 [c1],#29 lift_u32 [abs__148])
  #13 6
  #24 Phi(#7 U32_not_equals [p],#13 6,#13 6)
  #0 Start
  #3 pop_u32 [c1] {Stack:#0 Start}
  #26 push_u32 [eff__125](#24 Phi) {Stack:#3 pop_u32 [c1]}
  #28 push_u32 [eff__123](#23 Phi) {Stack:#26 push_u32 [eff__125]}
  #1 Finish {CodeptrTrapLocalsGlobalsTablesMemoryExtra:#0 Start,Stack:#28 push_u32 [eff__123]}
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["untangled"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	28 -. Stack .-> 1
	28["eff__123 push_u32"]
	23 --> 28
	26 -. Stack .-> 28
	26["eff__125 push_u32"]
	24 --> 26
	3 -. Stack .-> 26
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	24{"r3 ϕ"}
	7 --> 24
	32 --> 24
	33 --> 24
	33["mv_f__152 |False|  [U32_not_equals [p]]"]
	7 --> 33
	13 --> 33
	13["r3__147 6"]
	7["p U32_not_equals"]
	3 --> 7
	29 --> 7
	29["abs__148 lift_u32"]
	4 --> 29
	4["r3 0"]
	32["mv_t__151 |True|  [U32_not_equals [p]]"]
	7 --> 32
	13 --> 32
	23{"r4 ϕ"}
	7 --> 23
	30 --> 23
	31 --> 23
	31["mv_f__150 |False|  [U32_not_equals [p]]"]
	7 --> 31
	14 --> 31
	14["r4__146 7"]
	30["mv_t__149 |True|  [U32_not_equals [p]]"]
	7 --> 30
	14 --> 30
</pre>`;
window.info["SPLIT_BRANCHES_PHI"]["info_untangled"] = ''
window.info["SPLIT_BRANCHES_PHI"]["info_untangled"] += `<pre class=''>=== sea ===
  #30 |True|(#7 U32_not_equals [p],#14 7)
  #14 7
  #31 |False|(#7 U32_not_equals [p],#14 7)
  #23 Phi(#7 U32_not_equals [p],#30 |True|,#31 |False|)
  #32 |True|(#7 U32_not_equals [p],#13 6)
  #4 0
  #29 lift_u32 [abs__148](#4 0)
  #7 U32_not_equals [p](#3 pop_u32 [c1],#29 lift_u32 [abs__148])
  #13 6
  #33 |False|(#7 U32_not_equals [p],#13 6)
  #24 Phi(#7 U32_not_equals [p],#32 |True|,#33 |False|)
  #0 Start
  #3 pop_u32 [c1] {Stack:#0 Start}
  #26 push_u32 [eff__125](#24 Phi) {Stack:#3 pop_u32 [c1]}
  #28 push_u32 [eff__123](#23 Phi) {Stack:#26 push_u32 [eff__125]}
  #1 Finish {CodeptrTrapLocalsGlobalsTablesMemoryExtra:#0 Start,Stack:#28 push_u32 [eff__123]}

=== branch_lattices (1) ===
[0] cond: #7 U32_not_equals [p]
    phis: #23 Phi, #24 Phi
    frontier: {0, 3, 4, 7, 13, 14, 29}
    lsg: {30, 32}
    rsg: {31, 33}
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["sched Finish"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["sched Finish"] += `<pre class='graph'>graph TD
subgraph block_45["Block 45"]
	direction TB
	b45_1[\\"Finish"/]
end

</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["sched push_u32 [eff__123]"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["sched push_u32 [eff__123]"] += `<pre class='graph'>graph TD
subgraph block_45["Block 45"]
	direction TB
	b45_1[\\"Finish"/]
	b45_28["eff__123 push_u32"]
	b45_28 --> b45_1
end

</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["sched push_u32 [eff__125]"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["sched push_u32 [eff__125]"] += `<pre class='graph'>graph TD
subgraph block_45["Block 45"]
	direction TB
	b45_1[\\"Finish"/]
	b45_28["eff__123 push_u32"]
	b45_26["eff__125 push_u32"]
	b45_28 --> b45_1
	b45_26 --> b45_28
end

</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["sched Phi"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["sched Phi"] += `<pre class='graph'>graph TD
subgraph block_45["Block 45"]
	direction TB
	b45_1[\\"Finish"/]
	b45_28["eff__123 push_u32"]
	b45_26["eff__125 push_u32"]
	b45_28 --> b45_1
	b45_26 --> b45_28
end
phi_47 --> block_45
subgraph phi_47["Phi 47"]
	p47_24{"r3 ϕ"}
	p47_23{"r4 ϕ"}
end
block_48 --> phi_47
block_49 --> phi_47
subgraph block_48["Block 48"]
	direction TB
	b48_30["mv_t__149 |True|  [U32_not_equals [p]]"]
	b48_32["mv_t__151 |True|  [U32_not_equals [p]]"]
	b48_32 --> b48_30
end
branch_46 --> block_48
subgraph branch_46["Branch 46"]
	br46_7["p U32_not_equals"]

end
subgraph block_49["Block 49"]
	direction TB
	b49_31["mv_f__150 |False|  [U32_not_equals [p]]"]
	b49_33["mv_f__152 |False|  [U32_not_equals [p]]"]
	b49_33 --> b49_31
end
branch_46 --> block_49

</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["sched 7"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["sched 7"] += `<pre class='graph'>graph TD
subgraph block_45["Block 45"]
	direction TB
	b45_1[\\"Finish"/]
	b45_28["eff__123 push_u32"]
	b45_26["eff__125 push_u32"]
	b45_28 --> b45_1
	b45_26 --> b45_28
end
phi_47 --> block_45
subgraph phi_47["Phi 47"]
	p47_24{"r3 ϕ"}
	p47_23{"r4 ϕ"}
end
block_48 --> phi_47
block_49 --> phi_47
subgraph block_48["Block 48"]
	direction TB
	b48_30["mv_t__149 |True|  [U32_not_equals [p]]"]
	b48_32["mv_t__151 |True|  [U32_not_equals [p]]"]
	b48_32 --> b48_30
end
branch_46 --> block_48
subgraph branch_46["Branch 46"]
	br46_7["p U32_not_equals"]

end
block_50 --> branch_46
subgraph block_50["Block 50"]
	direction TB
	b50_7["p U32_not_equals"]
	b50_14["r4__146 7"]
	b50_14 --> b50_7
end
subgraph block_49["Block 49"]
	direction TB
	b49_31["mv_f__150 |False|  [U32_not_equals [p]]"]
	b49_33["mv_f__152 |False|  [U32_not_equals [p]]"]
	b49_33 --> b49_31
end
branch_46 --> block_49

</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["sched pop_u32 [c1]"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["sched pop_u32 [c1]"] += `<pre class='graph'>graph TD
subgraph block_45["Block 45"]
	direction TB
	b45_1[\\"Finish"/]
	b45_28["eff__123 push_u32"]
	b45_26["eff__125 push_u32"]
	b45_28 --> b45_1
	b45_26 --> b45_28
end
phi_47 --> block_45
subgraph phi_47["Phi 47"]
	p47_24{"r3 ϕ"}
	p47_23{"r4 ϕ"}
end
block_48 --> phi_47
block_49 --> phi_47
subgraph block_48["Block 48"]
	direction TB
	b48_30["mv_t__149 |True|  [U32_not_equals [p]]"]
	b48_32["mv_t__151 |True|  [U32_not_equals [p]]"]
	b48_32 --> b48_30
end
branch_46 --> block_48
subgraph branch_46["Branch 46"]
	br46_7["p U32_not_equals"]

end
block_50 --> branch_46
subgraph block_50["Block 50"]
	direction TB
	b50_7["p U32_not_equals"]
	b50_14["r4__146 7"]
	b50_3["c1 pop_u32"]
	b50_14 --> b50_7
	b50_3 --> b50_14
end
subgraph block_49["Block 49"]
	direction TB
	b49_31["mv_f__150 |False|  [U32_not_equals [p]]"]
	b49_33["mv_f__152 |False|  [U32_not_equals [p]]"]
	b49_33 --> b49_31
end
branch_46 --> block_49

</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["sched lift_u32 [abs__148]"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["sched lift_u32 [abs__148]"] += `<pre class='graph'>graph TD
subgraph block_45["Block 45"]
	direction TB
	b45_1[\\"Finish"/]
	b45_28["eff__123 push_u32"]
	b45_26["eff__125 push_u32"]
	b45_28 --> b45_1
	b45_26 --> b45_28
end
phi_47 --> block_45
subgraph phi_47["Phi 47"]
	p47_24{"r3 ϕ"}
	p47_23{"r4 ϕ"}
end
block_48 --> phi_47
block_49 --> phi_47
subgraph block_48["Block 48"]
	direction TB
	b48_30["mv_t__149 |True|  [U32_not_equals [p]]"]
	b48_32["mv_t__151 |True|  [U32_not_equals [p]]"]
	b48_32 --> b48_30
end
branch_46 --> block_48
subgraph branch_46["Branch 46"]
	br46_7["p U32_not_equals"]

end
block_50 --> branch_46
subgraph block_50["Block 50"]
	direction TB
	b50_7["p U32_not_equals"]
	b50_14["r4__146 7"]
	b50_3["c1 pop_u32"]
	b50_29["abs__148 lift_u32"]
	b50_14 --> b50_7
	b50_3 --> b50_14
	b50_29 --> b50_3
end
subgraph block_49["Block 49"]
	direction TB
	b49_31["mv_f__150 |False|  [U32_not_equals [p]]"]
	b49_33["mv_f__152 |False|  [U32_not_equals [p]]"]
	b49_33 --> b49_31
end
branch_46 --> block_49

</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["sched 6"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["sched 6"] += `<pre class='graph'>graph TD
subgraph block_45["Block 45"]
	direction TB
	b45_1[\\"Finish"/]
	b45_28["eff__123 push_u32"]
	b45_26["eff__125 push_u32"]
	b45_28 --> b45_1
	b45_26 --> b45_28
end
phi_47 --> block_45
subgraph phi_47["Phi 47"]
	p47_24{"r3 ϕ"}
	p47_23{"r4 ϕ"}
end
block_48 --> phi_47
block_49 --> phi_47
subgraph block_48["Block 48"]
	direction TB
	b48_30["mv_t__149 |True|  [U32_not_equals [p]]"]
	b48_32["mv_t__151 |True|  [U32_not_equals [p]]"]
	b48_32 --> b48_30
end
branch_46 --> block_48
subgraph branch_46["Branch 46"]
	br46_7["p U32_not_equals"]

end
block_50 --> branch_46
subgraph block_50["Block 50"]
	direction TB
	b50_7["p U32_not_equals"]
	b50_14["r4__146 7"]
	b50_3["c1 pop_u32"]
	b50_29["abs__148 lift_u32"]
	b50_13["r3__147 6"]
	b50_14 --> b50_7
	b50_3 --> b50_14
	b50_29 --> b50_3
	b50_13 --> b50_29
end
subgraph block_49["Block 49"]
	direction TB
	b49_31["mv_f__150 |False|  [U32_not_equals [p]]"]
	b49_33["mv_f__152 |False|  [U32_not_equals [p]]"]
	b49_33 --> b49_31
end
branch_46 --> block_49

</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["sched Start"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["sched Start"] += `<pre class='graph'>graph TD
subgraph block_45["Block 45"]
	direction TB
	b45_1[\\"Finish"/]
	b45_28["eff__123 push_u32"]
	b45_26["eff__125 push_u32"]
	b45_28 --> b45_1
	b45_26 --> b45_28
end
phi_47 --> block_45
subgraph phi_47["Phi 47"]
	p47_24{"r3 ϕ"}
	p47_23{"r4 ϕ"}
end
block_48 --> phi_47
block_49 --> phi_47
subgraph block_48["Block 48"]
	direction TB
	b48_30["mv_t__149 |True|  [U32_not_equals [p]]"]
	b48_32["mv_t__151 |True|  [U32_not_equals [p]]"]
	b48_32 --> b48_30
end
branch_46 --> block_48
subgraph branch_46["Branch 46"]
	br46_7["p U32_not_equals"]

end
block_50 --> branch_46
subgraph block_50["Block 50"]
	direction TB
	b50_7["p U32_not_equals"]
	b50_14["r4__146 7"]
	b50_3["c1 pop_u32"]
	b50_29["abs__148 lift_u32"]
	b50_13["r3__147 6"]
	b50_0[/"Start"\\]
	b50_14 --> b50_7
	b50_3 --> b50_14
	b50_29 --> b50_3
	b50_13 --> b50_29
	b50_0 --> b50_13
end
subgraph block_49["Block 49"]
	direction TB
	b49_31["mv_f__150 |False|  [U32_not_equals [p]]"]
	b49_33["mv_f__152 |False|  [U32_not_equals [p]]"]
	b49_33 --> b49_31
end
branch_46 --> block_49

</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["sched 0"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["sched 0"] += `<pre class='graph'>graph TD
subgraph block_45["Block 45"]
	direction TB
	b45_1[\\"Finish"/]
	b45_28["eff__123 push_u32"]
	b45_26["eff__125 push_u32"]
	b45_28 --> b45_1
	b45_26 --> b45_28
end
phi_47 --> block_45
subgraph phi_47["Phi 47"]
	p47_24{"r3 ϕ"}
	p47_23{"r4 ϕ"}
end
block_48 --> phi_47
block_49 --> phi_47
subgraph block_48["Block 48"]
	direction TB
	b48_30["mv_t__149 |True|  [U32_not_equals [p]]"]
	b48_32["mv_t__151 |True|  [U32_not_equals [p]]"]
	b48_32 --> b48_30
end
branch_46 --> block_48
subgraph branch_46["Branch 46"]
	br46_7["p U32_not_equals"]

end
block_50 --> branch_46
subgraph block_50["Block 50"]
	direction TB
	b50_7["p U32_not_equals"]
	b50_14["r4__146 7"]
	b50_3["c1 pop_u32"]
	b50_29["abs__148 lift_u32"]
	b50_13["r3__147 6"]
	b50_0[/"Start"\\]
	b50_4["r3 0"]
	b50_14 --> b50_7
	b50_3 --> b50_14
	b50_29 --> b50_3
	b50_13 --> b50_29
	b50_0 --> b50_13
	b50_4 --> b50_0
end
subgraph block_49["Block 49"]
	direction TB
	b49_31["mv_f__150 |False|  [U32_not_equals [p]]"]
	b49_33["mv_f__152 |False|  [U32_not_equals [p]]"]
	b49_33 --> b49_31
end
branch_46 --> block_49

</pre>`;
window.info["SPLIT_BRANCHES_PHI"]["info_final"] = ''
window.info["SPLIT_BRANCHES_PHI"]["info_final"] += `<pre class=''>=== CFG ===
Block #50:
  nodes: #4 0 #0 Start #13 6 #29 lift_u32 [abs__148] #3 pop_u32 [c1] #14 7 #7 U32_not_equals [p]
  doms: #0 Start #3 pop_u32 [c1] #4 0 #7 U32_not_equals [p] #13 6 #14 7 #29 lift_u32 [abs__148]
Branch #46 cond=#7 U32_not_equals [p]:
  if-true:
    Block #48:
      nodes: #32 |True| #30 |True|
      doms: #30 |True| #32 |True|
  if-false:
    Block #49:
      nodes: #33 |False| #31 |False|
      doms: #31 |False| #33 |False|
Phi #47(#24 Phi, #23 Phi):
  doms: #23 Phi #24 Phi
Block #45:
  nodes: #26 push_u32 [eff__125] #28 push_u32 [eff__123] #1 Finish
  doms: #1 Finish #26 push_u32 [eff__125] #28 push_u32 [eff__123]
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["schedulerMermaid"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_45["Block 45"]
	direction TB
	b45_26["eff__125 push_u32"]
	b45_28["eff__123 push_u32"]
	b45_1[\\"Finish"/]
	b45_26 --> b45_28
	b45_28 --> b45_1
end
phi_47 --> block_45
subgraph phi_47["Phi 47"]
	p47_24{"r3 ϕ"}
	p47_23{"r4 ϕ"}
end
block_48 --> phi_47
block_49 --> phi_47
subgraph block_48["Block 48"]
	direction TB
	b48_32["mv_t__151 |True|  [U32_not_equals [p]]"]
	b48_30["mv_t__149 |True|  [U32_not_equals [p]]"]
	b48_32 --> b48_30
end
branch_46 --> block_48
subgraph branch_46["Branch 46"]
	br46_7["p U32_not_equals"]

end
block_50 --> branch_46
subgraph block_50["Block 50"]
	direction TB
	b50_4["r3 0"]
	b50_0[/"Start"\\]
	b50_13["r3__147 6"]
	b50_29["abs__148 lift_u32"]
	b50_3["c1 pop_u32"]
	b50_14["r4__146 7"]
	b50_7["p U32_not_equals"]
	b50_4 --> b50_0
	b50_0 --> b50_13
	b50_13 --> b50_29
	b50_29 --> b50_3
	b50_3 --> b50_14
	b50_14 --> b50_7
end
subgraph block_49["Block 49"]
	direction TB
	b49_33["mv_f__152 |False|  [U32_not_equals [p]]"]
	b49_31["mv_f__150 |False|  [U32_not_equals [p]]"]
	b49_33 --> b49_31
end
branch_46 --> block_49

</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["scheduler_ssad"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["scheduler_ssad"] += `<pre class=''>def r3 : u32 = 0;
def r3__147 : u32 = 6;
def abs__148 = lift_u32(r3);
def c1 = pop_u32();
def r4__146 : u32 = 7;
def p = U32_not_equals(c1, abs__148);
var r3: u32;
var r4: u32;
if (p) {
}
// phis: r3 <- r3__147; r3 <- r3__147; r4 <- r4__146; r4 <- r4__146; 
def eff__125 = push_u32(r3);
def eff__123 = push_u32(r4);
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["scheduler_ssad_pretty"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["scheduler_ssad_pretty"] += `<pre class=''>var r3 = 0;
def r31 = 6;
def c1 = pop_u32();
var r4 = 7;
def p = U32_not_equals(c1, lift_u32(r3));
var r3: u32;
var r4: u32;
if (p) {
}
push_u32(r3);
push_u32(r4);
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["unLEM"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	28 -. Stack .-> 1
	28["eff__123 push_u32"]
	23 --> 28
	26 -. Stack .-> 28
	26["eff__125 push_u32"]
	24 --> 26
	3 -. Stack .-> 26
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	24{"r3 ϕ"}
	32 --> 24
	36 --> 24
	35 --> 24
	35{"innerPhi__158 ϕ"}
	30 --> 35
	13 --> 35
	13 --> 35
	13["r3__147 6"]
	30["mt__153 U32_maybeTrue"]
	7 --> 30
	7["p U32_not_equals"]
	3 --> 7
	29 --> 7
	29["abs__148 lift_u32"]
	4 --> 29
	4["r3 0"]
	36["merge__159 merge"]
	13 --> 36
	13 --> 36
	32["mb__155 bool.&&"]
	30 --> 32
	31 --> 32
	31["mf__154 U32_maybeFalse"]
	7 --> 31
	23{"r4 ϕ"}
	32 --> 23
	34 --> 23
	33 --> 23
	33{"innerPhi__156 ϕ"}
	30 --> 33
	14 --> 33
	14 --> 33
	14["r4__146 7"]
	34["merge__157 merge"]
	14 --> 34
	14 --> 34
</pre>`;
window.traces["SPLIT_BRANCHES_PHI_ul"] = {}
window.traces["SPLIT_BRANCHES_PHI_ul"]["scheduler_start"] = ''
window.traces["SPLIT_BRANCHES_PHI_ul"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	28 -. Stack .-> 1
	28["eff__123 push_u32"]
	23 --> 28
	26 -. Stack .-> 28
	26["eff__125 push_u32"]
	24 --> 26
	3 -. Stack .-> 26
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	24{"r3 ϕ"}
	32 --> 24
	41 --> 24
	42 --> 24
	42["mv_f__165 |False|  [bool.&& [mb__155]]"]
	32 --> 42
	35 --> 42
	35{"innerPhi__158 ϕ"}
	30 --> 35
	43 --> 35
	44 --> 35
	44["mv_f__167 |False|  [U32_maybeTrue [mt__153]]"]
	30 --> 44
	13 --> 44
	13["r3__147 6"]
	30["mt__153 U32_maybeTrue"]
	7 --> 30
	7["p U32_not_equals"]
	3 --> 7
	29 --> 7
	29["abs__148 lift_u32"]
	4 --> 29
	4["r3 0"]
	43["mv_t__166 |True|  [U32_maybeTrue [mt__153]]"]
	30 --> 43
	13 --> 43
	32["mb__155 bool.&&"]
	30 --> 32
	31 --> 32
	31["mf__154 U32_maybeFalse"]
	7 --> 31
	41["mv_t__164 |True|  [bool.&& [mb__155]]"]
	32 --> 41
	36 --> 41
	36["merge__159 merge"]
	13 --> 36
	13 --> 36
	23{"r4 ϕ"}
	32 --> 23
	37 --> 23
	38 --> 23
	38["mv_f__161 |False|  [bool.&& [mb__155]]"]
	32 --> 38
	33 --> 38
	33{"innerPhi__156 ϕ"}
	30 --> 33
	39 --> 33
	40 --> 33
	40["mv_f__163 |False|  [U32_maybeTrue [mt__153]]"]
	30 --> 40
	14 --> 40
	14["r4__146 7"]
	39["mv_t__162 |True|  [U32_maybeTrue [mt__153]]"]
	30 --> 39
	14 --> 39
	37["mv_t__160 |True|  [bool.&& [mb__155]]"]
	32 --> 37
	34 --> 37
	34["merge__157 merge"]
	14 --> 34
	14 --> 34
</pre>`;
window.traces["SPLIT_BRANCHES_PHI_ul"]["untangled"] = ''
window.traces["SPLIT_BRANCHES_PHI_ul"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	28 -. Stack .-> 1
	28["eff__123 push_u32"]
	23 --> 28
	26 -. Stack .-> 28
	26["eff__125 push_u32"]
	24 --> 26
	3 -. Stack .-> 26
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	24{"r3 ϕ"}
	32 --> 24
	41 --> 24
	42 --> 24
	42["mv_f__165 |False|  [bool.&& [mb__155]]"]
	32 --> 42
	35 --> 42
	35{"innerPhi__158 ϕ"}
	30 --> 35
	43 --> 35
	44 --> 35
	44["mv_f__167 |False|  [U32_maybeTrue [mt__153]]"]
	30 --> 44
	13 --> 44
	13["r3__147 6"]
	30["mt__153 U32_maybeTrue"]
	7 --> 30
	7["p U32_not_equals"]
	3 --> 7
	29 --> 7
	29["abs__148 lift_u32"]
	4 --> 29
	4["r3 0"]
	43["mv_t__166 |True|  [U32_maybeTrue [mt__153]]"]
	30 --> 43
	13 --> 43
	32["mb__155 bool.&&"]
	30 --> 32
	31 --> 32
	31["mf__154 U32_maybeFalse"]
	7 --> 31
	41["mv_t__164 |True|  [bool.&& [mb__155]]"]
	32 --> 41
	36 --> 41
	36["merge__159 merge"]
	13 --> 36
	13 --> 36
	23{"r4 ϕ"}
	32 --> 23
	37 --> 23
	38 --> 23
	38["mv_f__161 |False|  [bool.&& [mb__155]]"]
	32 --> 38
	33 --> 38
	33{"innerPhi__156 ϕ"}
	30 --> 33
	39 --> 33
	40 --> 33
	40["mv_f__163 |False|  [U32_maybeTrue [mt__153]]"]
	30 --> 40
	14 --> 40
	14["r4__146 7"]
	39["mv_t__162 |True|  [U32_maybeTrue [mt__153]]"]
	30 --> 39
	14 --> 39
	37["mv_t__160 |True|  [bool.&& [mb__155]]"]
	32 --> 37
	34 --> 37
	34["merge__157 merge"]
	14 --> 34
	14 --> 34
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["unlem_schedule"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["unlem_schedule"] += `<pre class=''>def r3 : u32 = 0;
def abs__148 = lift_u32(r3);
def c1 = pop_u32();
def r3__147 : u32 = 6;
def p = U32_not_equals(c1, abs__148);
def r4__146 : u32 = 7;
def mt__153 = U32_maybeTrue(p);
def mf__154 = U32_maybeFalse(p);
def mb__155 = bool.&&(mt__153, mf__154);
var r3: u32;
var r4: u32;
if (mb__155) {
	def merge__159 = merge(r3__147, r3__147);
	def merge__157 = merge(r4__146, r4__146);
} else {
	var innerPhi__158: u32;
	var innerPhi__156: u32;
	if (mt__153) {
	}
// phis: innerPhi__158 <- r3__147; innerPhi__158 <- r3__147; innerPhi__156 <- r4__146; innerPhi__156 <- r4__146; 
}
// phis: r3 <- merge__159; r3 <- innerPhi__158; r4 <- merge__157; r4 <- innerPhi__156; 
def eff__125 = push_u32(r3);
def eff__123 = push_u32(r4);
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["unlem_scheduler"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_51["Block 51"]
	direction TB
	b51_26["eff__125 push_u32"]
	b51_28["eff__123 push_u32"]
	b51_1[\\"Finish"/]
	b51_26 --> b51_28
	b51_28 --> b51_1
end
phi_53 --> block_51
subgraph phi_53["Phi 53"]
	p53_24{"r3 ϕ"}
	p53_23{"r4 ϕ"}
end
block_54 --> phi_53
block_55 --> phi_53
subgraph block_54["Block 54"]
	direction TB
	b54_36["merge__159 merge"]
	b54_34["merge__157 merge"]
	b54_41["mv_t__164 |True|  [bool.&& [mb__155]]"]
	b54_37["mv_t__160 |True|  [bool.&& [mb__155]]"]
	b54_36 --> b54_34
	b54_34 --> b54_41
	b54_41 --> b54_37
end
branch_52 --> block_54
subgraph branch_52["Branch 52"]
	br52_32["mb__155 bool.&&"]

end
block_56 --> branch_52
subgraph block_56["Block 56"]
	direction TB
	b56_4["r3 0"]
	b56_0[/"Start"\\]
	b56_29["abs__148 lift_u32"]
	b56_3["c1 pop_u32"]
	b56_13["r3__147 6"]
	b56_7["p U32_not_equals"]
	b56_14["r4__146 7"]
	b56_30["mt__153 U32_maybeTrue"]
	b56_31["mf__154 U32_maybeFalse"]
	b56_32["mb__155 bool.&&"]
	b56_4 --> b56_0
	b56_0 --> b56_29
	b56_29 --> b56_3
	b56_3 --> b56_13
	b56_13 --> b56_7
	b56_7 --> b56_14
	b56_14 --> b56_30
	b56_30 --> b56_31
	b56_31 --> b56_32
end
subgraph block_55["Block 55"]
	direction TB
	b55_42["mv_f__165 |False|  [bool.&& [mb__155]]"]
	b55_38["mv_f__161 |False|  [bool.&& [mb__155]]"]
	b55_42 --> b55_38
end
phi_58 --> block_55
subgraph phi_58["Phi 58"]
	p58_35{"innerPhi__158 ϕ"}
	p58_33{"innerPhi__156 ϕ"}
end
block_59 --> phi_58
block_60 --> phi_58
subgraph block_59["Block 59"]
	direction TB
	b59_43["mv_t__166 |True|  [U32_maybeTrue [mt__153]]"]
	b59_39["mv_t__162 |True|  [U32_maybeTrue [mt__153]]"]
	b59_43 --> b59_39
end
branch_57 --> block_59
subgraph branch_57["Branch 57"]
	br57_30["mt__153 U32_maybeTrue"]

end
branch_52 --> branch_57
subgraph block_60["Block 60"]
	direction TB
	b60_44["mv_f__167 |False|  [U32_maybeTrue [mt__153]]"]
	b60_40["mv_f__163 |False|  [U32_maybeTrue [mt__153]]"]
	b60_44 --> b60_40
end
branch_57 --> block_60

</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["unlem_scheduler_ssa"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["unlem_scheduler_ssa"] += `<pre class=''>def r3 : u32 = 0;
def abs__148 = lift_u32(r3);
def c1 = pop_u32();
def r3__147 : u32 = 6;
def p = U32_not_equals(c1, abs__148);
def r4__146 : u32 = 7;
def mt__153 = U32_maybeTrue(p);
def mf__154 = U32_maybeFalse(p);
def mb__155 = bool.&&(mt__153, mf__154);
var r3: u32;
var r4: u32;
if (mb__155) {
	def merge__159 = merge(r3__147, r3__147);
	def merge__157 = merge(r4__146, r4__146);
} else {
	var innerPhi__158: u32;
	var innerPhi__156: u32;
	if (mt__153) {
	}
// phis: innerPhi__158 <- r3__147; innerPhi__158 <- r3__147; innerPhi__156 <- r4__146; innerPhi__156 <- r4__146; 
}
// phis: r3 <- merge__159; r3 <- innerPhi__158; r4 <- merge__157; r4 <- innerPhi__156; 
def eff__125 = push_u32(r3);
def eff__123 = push_u32(r4);
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["unlem_scheduler_ssa_pretty"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["unlem_scheduler_ssa_pretty"] += `<pre class=''>var r3 = 0;
def c1 = pop_u32();
def r31 = 6;
def p = U32_not_equals(c1, lift_u32(r3));
var r4 = 7;
def mt = U32_maybeTrue(p);
def mf = U32_maybeFalse(p);
var r3: u32;
var r4: u32;
if (bool.&&(mt, mf)) {
	r3 = merge(r31, r31);
	r4 = merge(r4, r4);
} else {
	var innerPhi__158: u32;
	var innerPhi__156: u32;
	if (mt) {
	}
}
push_u32(r3);
push_u32(r4);
</pre>`;
window.traces["P3_FRONTIER"] = {}
window.traces["P3_FRONTIER"]["parsed"] = ''
window.traces["P3_FRONTIER"]["parsed"] += `<pre class=''>def c1 = pop_u32();
def c3 = pop_u32();
def c2 = pop_u32();
def A = pop_u32();
def B = pop_u32();
def arg__188 : u32 = 0;
def arg__187 = (c1);
def p = u32.!=(arg__187, arg__188);
def arg__186 : u32 = 0;
def arg__185 = (c3);
def q = u32.!=(arg__185, arg__186);
def arg__184 : u32 = 0;
def arg__183 = (c2);
def r = u32.!=(arg__183, arg__184);
def deep : u32 = 0;
def cond__180 = (q);
if (cond__180) {
	def deep__181 = (A);
} else {
	def deep__182 = (B);
}
// phis: deep <- deep__181; deep <- deep__182; 
def arg__179 : u32 = 0;
def arg__178 = (deep);
def N = u32.+(arg__178, arg__179);
def triv : u32 = 0;
def cond__175 = (r);
if (cond__175) {
	def triv__176 = (N);
} else {
	def triv__177 = (N);
}
// phis: triv <- triv__176; triv <- triv__177; 
def result : u32 = 0;
def cond__170 = (p);
if (cond__170) {
	def result__171 = (triv);
} else {
	def arg__174 : u32 = 1;
	def arg__173 = (A);
	def result__172 = u32.+(arg__173, arg__174);
}
// phis: result <- result__171; result <- result__172; 
def arg__169 = (result);
def eff__168 = push_u32(arg__169);
</pre>`;
window.traces["P3_FRONTIER"]["raw"] = ''
window.traces["P3_FRONTIER"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	32 -. Stack .-> 1
	32["eff__168 push_u32"]
	30 --> 32
	7 -. Stack .-> 32
	7["B pop_u32"]
	6 -. Stack .-> 7
	6["A pop_u32"]
	5 -. Stack .-> 6
	5["c2 pop_u32"]
	4 -. Stack .-> 5
	4["c3 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	30{"result ϕ"}
	10 --> 30
	28 --> 30
	28 --> 30
	28["result__191 u32.+"]
	6 --> 28
	26 --> 28
	26["arg__174 1"]
	10["p u32.!="]
	3 --> 10
	8 --> 10
	8["arg__188 0"]
</pre>`;
window.traces["P3_FRONTIER"]["overloadOps"] = ''
window.traces["P3_FRONTIER"]["overloadOps"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	32 -. Stack .-> 1
	32["eff__168 push_u32"]
	30 --> 32
	7 -. Stack .-> 32
	7["B pop_u32"]
	6 -. Stack .-> 7
	6["A pop_u32"]
	5 -. Stack .-> 6
	5["c2 pop_u32"]
	4 -. Stack .-> 5
	4["c3 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	30{"result ϕ"}
	10 --> 30
	28 --> 30
	28 --> 30
	28["result__191 U32_plus"]
	6 --> 28
	26 --> 28
	26["arg__174 1"]
	10["p U32_not_equals"]
	3 --> 10
	8 --> 10
	8["arg__188 0"]
</pre>`;
window.traces["P3_FRONTIER"]["addAbstractions"] = ''
window.traces["P3_FRONTIER"]["addAbstractions"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	32 -. Stack .-> 1
	32["eff__168 push_u32"]
	30 --> 32
	7 -. Stack .-> 32
	7["B pop_u32"]
	6 -. Stack .-> 7
	6["A pop_u32"]
	5 -. Stack .-> 6
	5["c2 pop_u32"]
	4 -. Stack .-> 5
	4["c3 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	30{"result ϕ"}
	10 --> 30
	28 --> 30
	28 --> 30
	28["result__191 U32_plus"]
	6 --> 28
	34 --> 28
	34["abs__193 lift_u32"]
	26 --> 34
	26["arg__174 1"]
	10["p U32_not_equals"]
	3 --> 10
	33 --> 10
	33["abs__192 lift_u32"]
	8 --> 33
	8["arg__188 0"]
</pre>`;
window.traces["P3_FRONTIER"]["scheduler_start"] = ''
window.traces["P3_FRONTIER"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	32 -. Stack .-> 1
	32["eff__168 push_u32"]
	30 --> 32
	7 -. Stack .-> 32
	7["B pop_u32"]
	6 -. Stack .-> 7
	6["A pop_u32"]
	5 -. Stack .-> 6
	5["c2 pop_u32"]
	4 -. Stack .-> 5
	4["c3 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	30{"result ϕ"}
	10 --> 30
	35 --> 30
	36 --> 30
	36["mv_f__195 |False|  [U32_not_equals [p]]"]
	10 --> 36
	28 --> 36
	28["result__191 U32_plus"]
	6 --> 28
	34 --> 28
	34["abs__193 lift_u32"]
	26 --> 34
	26["arg__174 1"]
	10["p U32_not_equals"]
	3 --> 10
	33 --> 10
	33["abs__192 lift_u32"]
	8 --> 33
	8["arg__188 0"]
	35["mv_t__194 |True|  [U32_not_equals [p]]"]
	10 --> 35
	28 --> 35
</pre>`;
window.info["P3_FRONTIER"] = {}
window.info["P3_FRONTIER"]["info_start"] = ''
window.info["P3_FRONTIER"]["info_start"] += `<pre class=''>=== orig_sea ===
  #8 0
  #33 lift_u32 [abs__192](#8 0)
  #10 U32_not_equals [p](#3 pop_u32 [c1],#33 lift_u32 [abs__192])
  #26 1
  #34 lift_u32 [abs__193](#26 1)
  #28 U32_plus [result__191](#6 pop_u32 [A],#34 lift_u32 [abs__193])
  #30 Phi(#10 U32_not_equals [p],#28 U32_plus [result__191],#28 U32_plus [result__191])
  #0 Start
  #3 pop_u32 [c1] {Stack:#0 Start}
  #4 pop_u32 [c3] {Stack:#3 pop_u32 [c1]}
  #5 pop_u32 [c2] {Stack:#4 pop_u32 [c3]}
  #6 pop_u32 [A] {Stack:#5 pop_u32 [c2]}
  #7 pop_u32 [B] {Stack:#6 pop_u32 [A]}
  #32 push_u32 [eff__168](#30 Phi) {Stack:#7 pop_u32 [B]}
  #1 Finish {CodeptrTrapLocalsGlobalsTablesMemoryExtra:#0 Start,Stack:#32 push_u32 [eff__168]}
</pre>`;
window.traces["P3_FRONTIER"]["untangled"] = ''
window.traces["P3_FRONTIER"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	32 -. Stack .-> 1
	32["eff__168 push_u32"]
	30 --> 32
	7 -. Stack .-> 32
	7["B pop_u32"]
	6 -. Stack .-> 7
	6["A pop_u32"]
	5 -. Stack .-> 6
	5["c2 pop_u32"]
	4 -. Stack .-> 5
	4["c3 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	30{"result ϕ"}
	10 --> 30
	35 --> 30
	36 --> 30
	36["mv_f__195 |False|  [U32_not_equals [p]]"]
	10 --> 36
	28 --> 36
	28["result__191 U32_plus"]
	6 --> 28
	34 --> 28
	34["abs__193 lift_u32"]
	26 --> 34
	26["arg__174 1"]
	10["p U32_not_equals"]
	3 --> 10
	33 --> 10
	33["abs__192 lift_u32"]
	8 --> 33
	8["arg__188 0"]
	35["mv_t__194 |True|  [U32_not_equals [p]]"]
	10 --> 35
	28 --> 35
</pre>`;
window.info["P3_FRONTIER"]["info_untangled"] = ''
window.info["P3_FRONTIER"]["info_untangled"] += `<pre class=''>=== sea ===
  #35 |True|(#10 U32_not_equals [p],#28 U32_plus [result__191])
  #8 0
  #33 lift_u32 [abs__192](#8 0)
  #10 U32_not_equals [p](#3 pop_u32 [c1],#33 lift_u32 [abs__192])
  #26 1
  #34 lift_u32 [abs__193](#26 1)
  #28 U32_plus [result__191](#6 pop_u32 [A],#34 lift_u32 [abs__193])
  #36 |False|(#10 U32_not_equals [p],#28 U32_plus [result__191])
  #30 Phi(#10 U32_not_equals [p],#35 |True|,#36 |False|)
  #0 Start
  #3 pop_u32 [c1] {Stack:#0 Start}
  #4 pop_u32 [c3] {Stack:#3 pop_u32 [c1]}
  #5 pop_u32 [c2] {Stack:#4 pop_u32 [c3]}
  #6 pop_u32 [A] {Stack:#5 pop_u32 [c2]}
  #7 pop_u32 [B] {Stack:#6 pop_u32 [A]}
  #32 push_u32 [eff__168](#30 Phi) {Stack:#7 pop_u32 [B]}
  #1 Finish {CodeptrTrapLocalsGlobalsTablesMemoryExtra:#0 Start,Stack:#32 push_u32 [eff__168]}

=== branch_lattices (1) ===
[0] cond: #10 U32_not_equals [p]
    phis: #30 Phi
    frontier: {0, 3, 4, 5, 6, 8, 10, 26, 28, 33, 34}
    lsg: {35}
    rsg: {36}
</pre>`;
window.traces["P3_FRONTIER"]["sched Finish"] = ''
window.traces["P3_FRONTIER"]["sched Finish"] += `<pre class='graph'>graph TD
subgraph block_61["Block 61"]
	direction TB
	b61_1[\\"Finish"/]
end

</pre>`;
window.traces["P3_FRONTIER"]["sched push_u32 [eff__168]"] = ''
window.traces["P3_FRONTIER"]["sched push_u32 [eff__168]"] += `<pre class='graph'>graph TD
subgraph block_61["Block 61"]
	direction TB
	b61_1[\\"Finish"/]
	b61_32["eff__168 push_u32"]
	b61_32 --> b61_1
end

</pre>`;
window.traces["P3_FRONTIER"]["sched Phi"] = ''
window.traces["P3_FRONTIER"]["sched Phi"] += `<pre class='graph'>graph TD
subgraph block_61["Block 61"]
	direction TB
	b61_1[\\"Finish"/]
	b61_32["eff__168 push_u32"]
	b61_32 --> b61_1
end
phi_63 --> block_61
subgraph phi_63["Phi 63"]
	p63_30{"result ϕ"}
end
block_64 --> phi_63
block_65 --> phi_63
subgraph block_64["Block 64"]
	direction TB
	b64_35["mv_t__194 |True|  [U32_not_equals [p]]"]
end
branch_62 --> block_64
subgraph branch_62["Branch 62"]
	br62_10["p U32_not_equals"]

end
subgraph block_65["Block 65"]
	direction TB
	b65_36["mv_f__195 |False|  [U32_not_equals [p]]"]
end
branch_62 --> block_65

</pre>`;
window.traces["P3_FRONTIER"]["sched pop_u32 [B]"] = ''
window.traces["P3_FRONTIER"]["sched pop_u32 [B]"] += `<pre class='graph'>graph TD
subgraph block_61["Block 61"]
	direction TB
	b61_1[\\"Finish"/]
	b61_32["eff__168 push_u32"]
	b61_7["B pop_u32"]
	b61_32 --> b61_1
	b61_7 --> b61_32
end
phi_63 --> block_61
subgraph phi_63["Phi 63"]
	p63_30{"result ϕ"}
end
block_64 --> phi_63
block_65 --> phi_63
subgraph block_64["Block 64"]
	direction TB
	b64_35["mv_t__194 |True|  [U32_not_equals [p]]"]
end
branch_62 --> block_64
subgraph branch_62["Branch 62"]
	br62_10["p U32_not_equals"]

end
subgraph block_65["Block 65"]
	direction TB
	b65_36["mv_f__195 |False|  [U32_not_equals [p]]"]
end
branch_62 --> block_65

</pre>`;
window.traces["P3_FRONTIER"]["sched lift_u32 [abs__192]"] = ''
window.traces["P3_FRONTIER"]["sched lift_u32 [abs__192]"] += `<pre class='graph'>graph TD
subgraph block_61["Block 61"]
	direction TB
	b61_1[\\"Finish"/]
	b61_32["eff__168 push_u32"]
	b61_7["B pop_u32"]
	b61_32 --> b61_1
	b61_7 --> b61_32
end
phi_63 --> block_61
subgraph phi_63["Phi 63"]
	p63_30{"result ϕ"}
end
block_64 --> phi_63
block_65 --> phi_63
subgraph block_64["Block 64"]
	direction TB
	b64_35["mv_t__194 |True|  [U32_not_equals [p]]"]
end
branch_62 --> block_64
subgraph branch_62["Branch 62"]
	br62_10["p U32_not_equals"]

end
block_66 --> branch_62
subgraph block_66["Block 66"]
	direction TB
	b66_10["p U32_not_equals"]
	b66_33["abs__192 lift_u32"]
	b66_33 --> b66_10
end
subgraph block_65["Block 65"]
	direction TB
	b65_36["mv_f__195 |False|  [U32_not_equals [p]]"]
end
branch_62 --> block_65

</pre>`;
window.traces["P3_FRONTIER"]["sched U32_plus [result__191]"] = ''
window.traces["P3_FRONTIER"]["sched U32_plus [result__191]"] += `<pre class='graph'>graph TD
subgraph block_61["Block 61"]
	direction TB
	b61_1[\\"Finish"/]
	b61_32["eff__168 push_u32"]
	b61_7["B pop_u32"]
	b61_32 --> b61_1
	b61_7 --> b61_32
end
phi_63 --> block_61
subgraph phi_63["Phi 63"]
	p63_30{"result ϕ"}
end
block_64 --> phi_63
block_65 --> phi_63
subgraph block_64["Block 64"]
	direction TB
	b64_35["mv_t__194 |True|  [U32_not_equals [p]]"]
end
branch_62 --> block_64
subgraph branch_62["Branch 62"]
	br62_10["p U32_not_equals"]

end
block_66 --> branch_62
subgraph block_66["Block 66"]
	direction TB
	b66_10["p U32_not_equals"]
	b66_33["abs__192 lift_u32"]
	b66_28["result__191 U32_plus"]
	b66_33 --> b66_10
	b66_28 --> b66_33
end
subgraph block_65["Block 65"]
	direction TB
	b65_36["mv_f__195 |False|  [U32_not_equals [p]]"]
end
branch_62 --> block_65

</pre>`;
window.traces["P3_FRONTIER"]["sched 0"] = ''
window.traces["P3_FRONTIER"]["sched 0"] += `<pre class='graph'>graph TD
subgraph block_61["Block 61"]
	direction TB
	b61_1[\\"Finish"/]
	b61_32["eff__168 push_u32"]
	b61_7["B pop_u32"]
	b61_32 --> b61_1
	b61_7 --> b61_32
end
phi_63 --> block_61
subgraph phi_63["Phi 63"]
	p63_30{"result ϕ"}
end
block_64 --> phi_63
block_65 --> phi_63
subgraph block_64["Block 64"]
	direction TB
	b64_35["mv_t__194 |True|  [U32_not_equals [p]]"]
end
branch_62 --> block_64
subgraph branch_62["Branch 62"]
	br62_10["p U32_not_equals"]

end
block_66 --> branch_62
subgraph block_66["Block 66"]
	direction TB
	b66_10["p U32_not_equals"]
	b66_33["abs__192 lift_u32"]
	b66_28["result__191 U32_plus"]
	b66_8["arg__188 0"]
	b66_33 --> b66_10
	b66_28 --> b66_33
	b66_8 --> b66_28
end
subgraph block_65["Block 65"]
	direction TB
	b65_36["mv_f__195 |False|  [U32_not_equals [p]]"]
end
branch_62 --> block_65

</pre>`;
window.traces["P3_FRONTIER"]["sched pop_u32 [A]"] = ''
window.traces["P3_FRONTIER"]["sched pop_u32 [A]"] += `<pre class='graph'>graph TD
subgraph block_61["Block 61"]
	direction TB
	b61_1[\\"Finish"/]
	b61_32["eff__168 push_u32"]
	b61_7["B pop_u32"]
	b61_32 --> b61_1
	b61_7 --> b61_32
end
phi_63 --> block_61
subgraph phi_63["Phi 63"]
	p63_30{"result ϕ"}
end
block_64 --> phi_63
block_65 --> phi_63
subgraph block_64["Block 64"]
	direction TB
	b64_35["mv_t__194 |True|  [U32_not_equals [p]]"]
end
branch_62 --> block_64
subgraph branch_62["Branch 62"]
	br62_10["p U32_not_equals"]

end
block_66 --> branch_62
subgraph block_66["Block 66"]
	direction TB
	b66_10["p U32_not_equals"]
	b66_33["abs__192 lift_u32"]
	b66_28["result__191 U32_plus"]
	b66_8["arg__188 0"]
	b66_6["A pop_u32"]
	b66_33 --> b66_10
	b66_28 --> b66_33
	b66_8 --> b66_28
	b66_6 --> b66_8
end
subgraph block_65["Block 65"]
	direction TB
	b65_36["mv_f__195 |False|  [U32_not_equals [p]]"]
end
branch_62 --> block_65

</pre>`;
window.traces["P3_FRONTIER"]["sched lift_u32 [abs__193]"] = ''
window.traces["P3_FRONTIER"]["sched lift_u32 [abs__193]"] += `<pre class='graph'>graph TD
subgraph block_61["Block 61"]
	direction TB
	b61_1[\\"Finish"/]
	b61_32["eff__168 push_u32"]
	b61_7["B pop_u32"]
	b61_32 --> b61_1
	b61_7 --> b61_32
end
phi_63 --> block_61
subgraph phi_63["Phi 63"]
	p63_30{"result ϕ"}
end
block_64 --> phi_63
block_65 --> phi_63
subgraph block_64["Block 64"]
	direction TB
	b64_35["mv_t__194 |True|  [U32_not_equals [p]]"]
end
branch_62 --> block_64
subgraph branch_62["Branch 62"]
	br62_10["p U32_not_equals"]

end
block_66 --> branch_62
subgraph block_66["Block 66"]
	direction TB
	b66_10["p U32_not_equals"]
	b66_33["abs__192 lift_u32"]
	b66_28["result__191 U32_plus"]
	b66_8["arg__188 0"]
	b66_6["A pop_u32"]
	b66_34["abs__193 lift_u32"]
	b66_33 --> b66_10
	b66_28 --> b66_33
	b66_8 --> b66_28
	b66_6 --> b66_8
	b66_34 --> b66_6
end
subgraph block_65["Block 65"]
	direction TB
	b65_36["mv_f__195 |False|  [U32_not_equals [p]]"]
end
branch_62 --> block_65

</pre>`;
window.traces["P3_FRONTIER"]["sched pop_u32 [c2]"] = ''
window.traces["P3_FRONTIER"]["sched pop_u32 [c2]"] += `<pre class='graph'>graph TD
subgraph block_61["Block 61"]
	direction TB
	b61_1[\\"Finish"/]
	b61_32["eff__168 push_u32"]
	b61_7["B pop_u32"]
	b61_32 --> b61_1
	b61_7 --> b61_32
end
phi_63 --> block_61
subgraph phi_63["Phi 63"]
	p63_30{"result ϕ"}
end
block_64 --> phi_63
block_65 --> phi_63
subgraph block_64["Block 64"]
	direction TB
	b64_35["mv_t__194 |True|  [U32_not_equals [p]]"]
end
branch_62 --> block_64
subgraph branch_62["Branch 62"]
	br62_10["p U32_not_equals"]

end
block_66 --> branch_62
subgraph block_66["Block 66"]
	direction TB
	b66_10["p U32_not_equals"]
	b66_33["abs__192 lift_u32"]
	b66_28["result__191 U32_plus"]
	b66_8["arg__188 0"]
	b66_6["A pop_u32"]
	b66_34["abs__193 lift_u32"]
	b66_5["c2 pop_u32"]
	b66_33 --> b66_10
	b66_28 --> b66_33
	b66_8 --> b66_28
	b66_6 --> b66_8
	b66_34 --> b66_6
	b66_5 --> b66_34
end
subgraph block_65["Block 65"]
	direction TB
	b65_36["mv_f__195 |False|  [U32_not_equals [p]]"]
end
branch_62 --> block_65

</pre>`;
window.traces["P3_FRONTIER"]["sched 1"] = ''
window.traces["P3_FRONTIER"]["sched 1"] += `<pre class='graph'>graph TD
subgraph block_61["Block 61"]
	direction TB
	b61_1[\\"Finish"/]
	b61_32["eff__168 push_u32"]
	b61_7["B pop_u32"]
	b61_32 --> b61_1
	b61_7 --> b61_32
end
phi_63 --> block_61
subgraph phi_63["Phi 63"]
	p63_30{"result ϕ"}
end
block_64 --> phi_63
block_65 --> phi_63
subgraph block_64["Block 64"]
	direction TB
	b64_35["mv_t__194 |True|  [U32_not_equals [p]]"]
end
branch_62 --> block_64
subgraph branch_62["Branch 62"]
	br62_10["p U32_not_equals"]

end
block_66 --> branch_62
subgraph block_66["Block 66"]
	direction TB
	b66_10["p U32_not_equals"]
	b66_33["abs__192 lift_u32"]
	b66_28["result__191 U32_plus"]
	b66_8["arg__188 0"]
	b66_6["A pop_u32"]
	b66_34["abs__193 lift_u32"]
	b66_5["c2 pop_u32"]
	b66_26["arg__174 1"]
	b66_33 --> b66_10
	b66_28 --> b66_33
	b66_8 --> b66_28
	b66_6 --> b66_8
	b66_34 --> b66_6
	b66_5 --> b66_34
	b66_26 --> b66_5
end
subgraph block_65["Block 65"]
	direction TB
	b65_36["mv_f__195 |False|  [U32_not_equals [p]]"]
end
branch_62 --> block_65

</pre>`;
window.traces["P3_FRONTIER"]["sched pop_u32 [c3]"] = ''
window.traces["P3_FRONTIER"]["sched pop_u32 [c3]"] += `<pre class='graph'>graph TD
subgraph block_61["Block 61"]
	direction TB
	b61_1[\\"Finish"/]
	b61_32["eff__168 push_u32"]
	b61_7["B pop_u32"]
	b61_32 --> b61_1
	b61_7 --> b61_32
end
phi_63 --> block_61
subgraph phi_63["Phi 63"]
	p63_30{"result ϕ"}
end
block_64 --> phi_63
block_65 --> phi_63
subgraph block_64["Block 64"]
	direction TB
	b64_35["mv_t__194 |True|  [U32_not_equals [p]]"]
end
branch_62 --> block_64
subgraph branch_62["Branch 62"]
	br62_10["p U32_not_equals"]

end
block_66 --> branch_62
subgraph block_66["Block 66"]
	direction TB
	b66_10["p U32_not_equals"]
	b66_33["abs__192 lift_u32"]
	b66_28["result__191 U32_plus"]
	b66_8["arg__188 0"]
	b66_6["A pop_u32"]
	b66_34["abs__193 lift_u32"]
	b66_5["c2 pop_u32"]
	b66_26["arg__174 1"]
	b66_4["c3 pop_u32"]
	b66_33 --> b66_10
	b66_28 --> b66_33
	b66_8 --> b66_28
	b66_6 --> b66_8
	b66_34 --> b66_6
	b66_5 --> b66_34
	b66_26 --> b66_5
	b66_4 --> b66_26
end
subgraph block_65["Block 65"]
	direction TB
	b65_36["mv_f__195 |False|  [U32_not_equals [p]]"]
end
branch_62 --> block_65

</pre>`;
window.traces["P3_FRONTIER"]["sched pop_u32 [c1]"] = ''
window.traces["P3_FRONTIER"]["sched pop_u32 [c1]"] += `<pre class='graph'>graph TD
subgraph block_61["Block 61"]
	direction TB
	b61_1[\\"Finish"/]
	b61_32["eff__168 push_u32"]
	b61_7["B pop_u32"]
	b61_32 --> b61_1
	b61_7 --> b61_32
end
phi_63 --> block_61
subgraph phi_63["Phi 63"]
	p63_30{"result ϕ"}
end
block_64 --> phi_63
block_65 --> phi_63
subgraph block_64["Block 64"]
	direction TB
	b64_35["mv_t__194 |True|  [U32_not_equals [p]]"]
end
branch_62 --> block_64
subgraph branch_62["Branch 62"]
	br62_10["p U32_not_equals"]

end
block_66 --> branch_62
subgraph block_66["Block 66"]
	direction TB
	b66_10["p U32_not_equals"]
	b66_33["abs__192 lift_u32"]
	b66_28["result__191 U32_plus"]
	b66_8["arg__188 0"]
	b66_6["A pop_u32"]
	b66_34["abs__193 lift_u32"]
	b66_5["c2 pop_u32"]
	b66_26["arg__174 1"]
	b66_4["c3 pop_u32"]
	b66_3["c1 pop_u32"]
	b66_33 --> b66_10
	b66_28 --> b66_33
	b66_8 --> b66_28
	b66_6 --> b66_8
	b66_34 --> b66_6
	b66_5 --> b66_34
	b66_26 --> b66_5
	b66_4 --> b66_26
	b66_3 --> b66_4
end
subgraph block_65["Block 65"]
	direction TB
	b65_36["mv_f__195 |False|  [U32_not_equals [p]]"]
end
branch_62 --> block_65

</pre>`;
window.traces["P3_FRONTIER"]["sched Start"] = ''
window.traces["P3_FRONTIER"]["sched Start"] += `<pre class='graph'>graph TD
subgraph block_61["Block 61"]
	direction TB
	b61_1[\\"Finish"/]
	b61_32["eff__168 push_u32"]
	b61_7["B pop_u32"]
	b61_32 --> b61_1
	b61_7 --> b61_32
end
phi_63 --> block_61
subgraph phi_63["Phi 63"]
	p63_30{"result ϕ"}
end
block_64 --> phi_63
block_65 --> phi_63
subgraph block_64["Block 64"]
	direction TB
	b64_35["mv_t__194 |True|  [U32_not_equals [p]]"]
end
branch_62 --> block_64
subgraph branch_62["Branch 62"]
	br62_10["p U32_not_equals"]

end
block_66 --> branch_62
subgraph block_66["Block 66"]
	direction TB
	b66_10["p U32_not_equals"]
	b66_33["abs__192 lift_u32"]
	b66_28["result__191 U32_plus"]
	b66_8["arg__188 0"]
	b66_6["A pop_u32"]
	b66_34["abs__193 lift_u32"]
	b66_5["c2 pop_u32"]
	b66_26["arg__174 1"]
	b66_4["c3 pop_u32"]
	b66_3["c1 pop_u32"]
	b66_0[/"Start"\\]
	b66_33 --> b66_10
	b66_28 --> b66_33
	b66_8 --> b66_28
	b66_6 --> b66_8
	b66_34 --> b66_6
	b66_5 --> b66_34
	b66_26 --> b66_5
	b66_4 --> b66_26
	b66_3 --> b66_4
	b66_0 --> b66_3
end
subgraph block_65["Block 65"]
	direction TB
	b65_36["mv_f__195 |False|  [U32_not_equals [p]]"]
end
branch_62 --> block_65

</pre>`;
window.info["P3_FRONTIER"]["info_final"] = ''
window.info["P3_FRONTIER"]["info_final"] += `<pre class=''>=== CFG ===
Block #66:
  nodes: #0 Start #3 pop_u32 [c1] #4 pop_u32 [c3] #26 1 #5 pop_u32 [c2] #34 lift_u32 [abs__193] #6 pop_u32 [A] #8 0 #28 U32_plus [result__191] #33 lift_u32 [abs__192] #10 U32_not_equals [p]
  doms: #0 Start #3 pop_u32 [c1] #4 pop_u32 [c3] #5 pop_u32 [c2] #6 pop_u32 [A] #8 0 #10 U32_not_equals [p] #26 1 #28 U32_plus [result__191] #33 lift_u32 [abs__192] #34 lift_u32 [abs__193]
Branch #62 cond=#10 U32_not_equals [p]:
  if-true:
    Block #64:
      nodes: #35 |True|
      doms: #35 |True|
  if-false:
    Block #65:
      nodes: #36 |False|
      doms: #36 |False|
Phi #63(#30 Phi):
  doms: #30 Phi
Block #61:
  nodes: #7 pop_u32 [B] #32 push_u32 [eff__168] #1 Finish
  doms: #1 Finish #7 pop_u32 [B] #32 push_u32 [eff__168]
</pre>`;
window.traces["P3_FRONTIER"]["schedulerMermaid"] = ''
window.traces["P3_FRONTIER"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_61["Block 61"]
	direction TB
	b61_7["B pop_u32"]
	b61_32["eff__168 push_u32"]
	b61_1[\\"Finish"/]
	b61_7 --> b61_32
	b61_32 --> b61_1
end
phi_63 --> block_61
subgraph phi_63["Phi 63"]
	p63_30{"result ϕ"}
end
block_64 --> phi_63
block_65 --> phi_63
subgraph block_64["Block 64"]
	direction TB
	b64_35["mv_t__194 |True|  [U32_not_equals [p]]"]
end
branch_62 --> block_64
subgraph branch_62["Branch 62"]
	br62_10["p U32_not_equals"]

end
block_66 --> branch_62
subgraph block_66["Block 66"]
	direction TB
	b66_0[/"Start"\\]
	b66_3["c1 pop_u32"]
	b66_4["c3 pop_u32"]
	b66_26["arg__174 1"]
	b66_5["c2 pop_u32"]
	b66_34["abs__193 lift_u32"]
	b66_6["A pop_u32"]
	b66_8["arg__188 0"]
	b66_28["result__191 U32_plus"]
	b66_33["abs__192 lift_u32"]
	b66_10["p U32_not_equals"]
	b66_0 --> b66_3
	b66_3 --> b66_4
	b66_4 --> b66_26
	b66_26 --> b66_5
	b66_5 --> b66_34
	b66_34 --> b66_6
	b66_6 --> b66_8
	b66_8 --> b66_28
	b66_28 --> b66_33
	b66_33 --> b66_10
end
subgraph block_65["Block 65"]
	direction TB
	b65_36["mv_f__195 |False|  [U32_not_equals [p]]"]
end
branch_62 --> block_65

</pre>`;
window.traces["P3_FRONTIER"]["scheduler_ssad"] = ''
window.traces["P3_FRONTIER"]["scheduler_ssad"] += `<pre class=''>def c1 = pop_u32();
def c3 = pop_u32();
def arg__174 : u32 = 1;
def c2 = pop_u32();
def abs__193 = lift_u32(arg__174);
def A = pop_u32();
def arg__188 : u32 = 0;
def result__191 = U32_plus(A, abs__193);
def abs__192 = lift_u32(arg__188);
def p = U32_not_equals(c1, abs__192);
var result: u32;
if (p) {
}
// phis: result <- result__191; result <- result__191; 
def B = pop_u32();
def eff__168 = push_u32(result);
</pre>`;
window.traces["P3_FRONTIER"]["scheduler_ssad_pretty"] = ''
window.traces["P3_FRONTIER"]["scheduler_ssad_pretty"] += `<pre class=''>def c1 = pop_u32();
def c3 = pop_u32();
def c2 = pop_u32();
def A = pop_u32();
var result = U32_plus(A, lift_u32(1));
def p = U32_not_equals(c1, lift_u32(0));
var result: u32;
if (p) {
}
def B = pop_u32();
push_u32(result);
</pre>`;
window.traces["P3_FRONTIER"]["unLEM"] = ''
window.traces["P3_FRONTIER"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	32 -. Stack .-> 1
	32["eff__168 push_u32"]
	30 --> 32
	7 -. Stack .-> 32
	7["B pop_u32"]
	6 -. Stack .-> 7
	6["A pop_u32"]
	5 -. Stack .-> 6
	5["c2 pop_u32"]
	4 -. Stack .-> 5
	4["c3 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	30{"result ϕ"}
	37 --> 30
	39 --> 30
	38 --> 30
	38{"innerPhi__199 ϕ"}
	35 --> 38
	28 --> 38
	28 --> 38
	28["result__191 U32_plus"]
	6 --> 28
	34 --> 28
	34["abs__193 lift_u32"]
	26 --> 34
	26["arg__174 1"]
	35["mt__196 U32_maybeTrue"]
	10 --> 35
	10["p U32_not_equals"]
	3 --> 10
	33 --> 10
	33["abs__192 lift_u32"]
	8 --> 33
	8["arg__188 0"]
	39["merge__200 merge"]
	28 --> 39
	28 --> 39
	37["mb__198 bool.&&"]
	35 --> 37
	36 --> 37
	36["mf__197 U32_maybeFalse"]
	10 --> 36
</pre>`;
window.traces["P3_FRONTIER_ul"] = {}
window.traces["P3_FRONTIER_ul"]["scheduler_start"] = ''
window.traces["P3_FRONTIER_ul"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	32 -. Stack .-> 1
	32["eff__168 push_u32"]
	30 --> 32
	7 -. Stack .-> 32
	7["B pop_u32"]
	6 -. Stack .-> 7
	6["A pop_u32"]
	5 -. Stack .-> 6
	5["c2 pop_u32"]
	4 -. Stack .-> 5
	4["c3 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	30{"result ϕ"}
	37 --> 30
	40 --> 30
	41 --> 30
	41["mv_f__202 |False|  [bool.&& [mb__198]]"]
	37 --> 41
	38 --> 41
	38{"innerPhi__199 ϕ"}
	35 --> 38
	42 --> 38
	43 --> 38
	43["mv_f__204 |False|  [U32_maybeTrue [mt__196]]"]
	35 --> 43
	28 --> 43
	28["result__191 U32_plus"]
	6 --> 28
	34 --> 28
	34["abs__193 lift_u32"]
	26 --> 34
	26["arg__174 1"]
	35["mt__196 U32_maybeTrue"]
	10 --> 35
	10["p U32_not_equals"]
	3 --> 10
	33 --> 10
	33["abs__192 lift_u32"]
	8 --> 33
	8["arg__188 0"]
	42["mv_t__203 |True|  [U32_maybeTrue [mt__196]]"]
	35 --> 42
	28 --> 42
	37["mb__198 bool.&&"]
	35 --> 37
	36 --> 37
	36["mf__197 U32_maybeFalse"]
	10 --> 36
	40["mv_t__201 |True|  [bool.&& [mb__198]]"]
	37 --> 40
	39 --> 40
	39["merge__200 merge"]
	28 --> 39
	28 --> 39
</pre>`;
window.traces["P3_FRONTIER_ul"]["untangled"] = ''
window.traces["P3_FRONTIER_ul"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	32 -. Stack .-> 1
	32["eff__168 push_u32"]
	30 --> 32
	7 -. Stack .-> 32
	7["B pop_u32"]
	6 -. Stack .-> 7
	6["A pop_u32"]
	5 -. Stack .-> 6
	5["c2 pop_u32"]
	4 -. Stack .-> 5
	4["c3 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	30{"result ϕ"}
	37 --> 30
	40 --> 30
	41 --> 30
	41["mv_f__202 |False|  [bool.&& [mb__198]]"]
	37 --> 41
	38 --> 41
	38{"innerPhi__199 ϕ"}
	35 --> 38
	42 --> 38
	43 --> 38
	43["mv_f__204 |False|  [U32_maybeTrue [mt__196]]"]
	35 --> 43
	28 --> 43
	28["result__191 U32_plus"]
	6 --> 28
	34 --> 28
	34["abs__193 lift_u32"]
	26 --> 34
	26["arg__174 1"]
	35["mt__196 U32_maybeTrue"]
	10 --> 35
	10["p U32_not_equals"]
	3 --> 10
	33 --> 10
	33["abs__192 lift_u32"]
	8 --> 33
	8["arg__188 0"]
	42["mv_t__203 |True|  [U32_maybeTrue [mt__196]]"]
	35 --> 42
	28 --> 42
	37["mb__198 bool.&&"]
	35 --> 37
	36 --> 37
	36["mf__197 U32_maybeFalse"]
	10 --> 36
	40["mv_t__201 |True|  [bool.&& [mb__198]]"]
	37 --> 40
	39 --> 40
	39["merge__200 merge"]
	28 --> 39
	28 --> 39
</pre>`;
window.traces["P3_FRONTIER"]["unlem_schedule"] = ''
window.traces["P3_FRONTIER"]["unlem_schedule"] += `<pre class=''>def c1 = pop_u32();
def c3 = pop_u32();
def arg__174 : u32 = 1;
def c2 = pop_u32();
def arg__188 : u32 = 0;
def abs__193 = lift_u32(arg__174);
def A = pop_u32();
def abs__192 = lift_u32(arg__188);
def result__191 = U32_plus(A, abs__193);
def p = U32_not_equals(c1, abs__192);
def mt__196 = U32_maybeTrue(p);
def mf__197 = U32_maybeFalse(p);
def mb__198 = bool.&&(mt__196, mf__197);
var result: u32;
if (mb__198) {
	def merge__200 = merge(result__191, result__191);
} else {
	var innerPhi__199: u32;
	if (mt__196) {
	}
// phis: innerPhi__199 <- result__191; innerPhi__199 <- result__191; 
}
// phis: result <- merge__200; result <- innerPhi__199; 
def B = pop_u32();
def eff__168 = push_u32(result);
</pre>`;
window.traces["P3_FRONTIER"]["unlem_scheduler"] = ''
window.traces["P3_FRONTIER"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_67["Block 67"]
	direction TB
	b67_7["B pop_u32"]
	b67_32["eff__168 push_u32"]
	b67_1[\\"Finish"/]
	b67_7 --> b67_32
	b67_32 --> b67_1
end
phi_69 --> block_67
subgraph phi_69["Phi 69"]
	p69_30{"result ϕ"}
end
block_70 --> phi_69
block_71 --> phi_69
subgraph block_70["Block 70"]
	direction TB
	b70_39["merge__200 merge"]
	b70_40["mv_t__201 |True|  [bool.&& [mb__198]]"]
	b70_39 --> b70_40
end
branch_68 --> block_70
subgraph branch_68["Branch 68"]
	br68_37["mb__198 bool.&&"]

end
block_72 --> branch_68
subgraph block_72["Block 72"]
	direction TB
	b72_0[/"Start"\\]
	b72_3["c1 pop_u32"]
	b72_4["c3 pop_u32"]
	b72_26["arg__174 1"]
	b72_5["c2 pop_u32"]
	b72_8["arg__188 0"]
	b72_34["abs__193 lift_u32"]
	b72_6["A pop_u32"]
	b72_33["abs__192 lift_u32"]
	b72_28["result__191 U32_plus"]
	b72_10["p U32_not_equals"]
	b72_35["mt__196 U32_maybeTrue"]
	b72_36["mf__197 U32_maybeFalse"]
	b72_37["mb__198 bool.&&"]
	b72_0 --> b72_3
	b72_3 --> b72_4
	b72_4 --> b72_26
	b72_26 --> b72_5
	b72_5 --> b72_8
	b72_8 --> b72_34
	b72_34 --> b72_6
	b72_6 --> b72_33
	b72_33 --> b72_28
	b72_28 --> b72_10
	b72_10 --> b72_35
	b72_35 --> b72_36
	b72_36 --> b72_37
end
subgraph block_71["Block 71"]
	direction TB
	b71_41["mv_f__202 |False|  [bool.&& [mb__198]]"]
end
phi_74 --> block_71
subgraph phi_74["Phi 74"]
	p74_38{"innerPhi__199 ϕ"}
end
block_75 --> phi_74
block_76 --> phi_74
subgraph block_75["Block 75"]
	direction TB
	b75_42["mv_t__203 |True|  [U32_maybeTrue [mt__196]]"]
end
branch_73 --> block_75
subgraph branch_73["Branch 73"]
	br73_35["mt__196 U32_maybeTrue"]

end
branch_68 --> branch_73
subgraph block_76["Block 76"]
	direction TB
	b76_43["mv_f__204 |False|  [U32_maybeTrue [mt__196]]"]
end
branch_73 --> block_76

</pre>`;
window.traces["P3_FRONTIER"]["unlem_scheduler_ssa"] = ''
window.traces["P3_FRONTIER"]["unlem_scheduler_ssa"] += `<pre class=''>def c1 = pop_u32();
def c3 = pop_u32();
def arg__174 : u32 = 1;
def c2 = pop_u32();
def arg__188 : u32 = 0;
def abs__193 = lift_u32(arg__174);
def A = pop_u32();
def abs__192 = lift_u32(arg__188);
def result__191 = U32_plus(A, abs__193);
def p = U32_not_equals(c1, abs__192);
def mt__196 = U32_maybeTrue(p);
def mf__197 = U32_maybeFalse(p);
def mb__198 = bool.&&(mt__196, mf__197);
var result: u32;
if (mb__198) {
	def merge__200 = merge(result__191, result__191);
} else {
	var innerPhi__199: u32;
	if (mt__196) {
	}
// phis: innerPhi__199 <- result__191; innerPhi__199 <- result__191; 
}
// phis: result <- merge__200; result <- innerPhi__199; 
def B = pop_u32();
def eff__168 = push_u32(result);
</pre>`;
window.traces["P3_FRONTIER"]["unlem_scheduler_ssa_pretty"] = ''
window.traces["P3_FRONTIER"]["unlem_scheduler_ssa_pretty"] += `<pre class=''>def c1 = pop_u32();
def c3 = pop_u32();
def c2 = pop_u32();
def A = pop_u32();
var result = U32_plus(A, lift_u32(1));
def p = U32_not_equals(c1, lift_u32(0));
def mt = U32_maybeTrue(p);
def mf = U32_maybeFalse(p);
var result: u32;
if (bool.&&(mt, mf)) {
	result = merge(result, result);
} else {
	var innerPhi__199: u32;
	if (mt) {
	}
}
def B = pop_u32();
push_u32(result);
</pre>`;
