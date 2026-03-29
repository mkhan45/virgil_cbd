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
window.traces["SPLIT_BRANCHES"]["initial_pretty"] = ''
window.traces["SPLIT_BRANCHES"]["initial_pretty"] += `<pre class=''>def c1 = pop_u32();
if ((u32.!=((c1), 0))) {
	if ((u32.==((c1), 2))) {
		push_u32(1);
		push_u32(2);
	} else {
		push_u32(3);
		push_u32(4);
	}
} else {
	if ((u32.==((c1), 2))) {
		push_u32(5);
		push_u32(6);
	} else {
		push_u32(7);
		push_u32(8);
	}
}
</pre>`;
window.traces["SPLIT_BRANCHES"]["raw"] = ''
window.traces["SPLIT_BRANCHES"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	31 -. Stack .-> 1
	31{{"sea__25 Sϕ Stack "}}
	6 --> 31
	30 --> 31
	20 --> 31
	20{{"sea__23 Sϕ Stack "}}
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
	30{{"sea__24 Sϕ Stack "}}
	9 --> 30
	29 --> 30
	25 --> 30
	25["eff__6 push_u32"]
	24 --> 25
	23 -. Stack .-> 25
	23["eff__8 push_u32"]
	22 --> 23
	3 -. Stack .-> 23
	22["arg__9 3"]
	24["arg__7 4"]
	29["eff__2 push_u32"]
	28 --> 29
	27 -. Stack .-> 29
	27["eff__4 push_u32"]
	26 --> 27
	3 -. Stack .-> 27
	26["arg__5 1"]
	28["arg__3 2"]
	6["p u32.!="]
	3 --> 6
	4 --> 6
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
	31 -. Stack .-> 1
	31{{"sea__25 Sϕ Stack "}}
	6 --> 31
	32 --> 31
	33 --> 31
	33["mv_f__27 |False|  [u32.!= [p]]"]
	6 --> 33
	20 -. Stack .-> 33
	20{{"sea__23 Sϕ Stack "}}
	9 --> 20
	36 --> 20
	37 --> 20
	37["mv_f__31 |False|  [u32.== [q]]"]
	9 --> 37
	15 -. Stack .-> 37
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
	9["q u32.=="]
	3 --> 9
	7 --> 9
	7["arg__20 2"]
	36["mv_t__30 |True|  [u32.== [q]]"]
	9 --> 36
	19 -. Stack .-> 36
	19["eff__11 push_u32"]
	18 --> 19
	17 -. Stack .-> 19
	17["eff__13 push_u32"]
	16 --> 17
	3 -. Stack .-> 17
	16["arg__14 5"]
	18["arg__12 6"]
	6["p u32.!="]
	3 --> 6
	4 --> 6
	4["arg__22 0"]
	32["mv_t__26 |True|  [u32.!= [p]]"]
	6 --> 32
	30 -. Stack .-> 32
	30{{"sea__24 Sϕ Stack "}}
	9 --> 30
	34 --> 30
	35 --> 30
	35["mv_f__29 |False|  [u32.== [q]]"]
	9 --> 35
	25 -. Stack .-> 35
	25["eff__6 push_u32"]
	24 --> 25
	23 -. Stack .-> 25
	23["eff__8 push_u32"]
	22 --> 23
	3 -. Stack .-> 23
	22["arg__9 3"]
	24["arg__7 4"]
	34["mv_t__28 |True|  [u32.== [q]]"]
	9 --> 34
	29 -. Stack .-> 34
	29["eff__2 push_u32"]
	28 --> 29
	27 -. Stack .-> 29
	27["eff__4 push_u32"]
	26 --> 27
	3 -. Stack .-> 27
	26["arg__5 1"]
	28["arg__3 2"]
</pre>`;
window.traces["SPLIT_BRANCHES"]["untangled"] = ''
window.traces["SPLIT_BRANCHES"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	31 -. Stack .-> 1
	31{{"sea__25 Sϕ Stack "}}
	6 --> 31
	32 --> 31
	33 --> 31
	33["mv_f__27 |False|  [u32.!= [p]]"]
	6 --> 33
	20 -. Stack .-> 33
	20{{"sea__23 Sϕ Stack "}}
	9 --> 20
	36 --> 20
	37 --> 20
	37["mv_f__31 |False|  [u32.== [q]]"]
	9 --> 37
	15 -. Stack .-> 37
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
	9["q u32.=="]
	3 --> 9
	7 --> 9
	7["arg__20 2"]
	36["mv_t__30 |True|  [u32.== [q]]"]
	9 --> 36
	19 -. Stack .-> 36
	19["eff__11 push_u32"]
	18 --> 19
	17 -. Stack .-> 19
	17["eff__13 push_u32"]
	16 --> 17
	3 -. Stack .-> 17
	16["arg__14 5"]
	18["arg__12 6"]
	6["p u32.!="]
	3 --> 6
	4 --> 6
	4["arg__22 0"]
	32["mv_t__26 |True|  [u32.!= [p]]"]
	6 --> 32
	30 -. Stack .-> 32
	30{{"sea__24 Sϕ Stack "}}
	9 --> 30
	34 --> 30
	35 --> 30
	35["mv_f__29 |False|  [u32.== [q]]"]
	9 --> 35
	25 -. Stack .-> 35
	25["eff__6 push_u32"]
	24 --> 25
	23 -. Stack .-> 25
	23["eff__8 push_u32"]
	22 --> 23
	3 -. Stack .-> 23
	22["arg__9 3"]
	24["arg__7 4"]
	34["mv_t__28 |True|  [u32.== [q]]"]
	9 --> 34
	29 -. Stack .-> 34
	29["eff__2 push_u32"]
	28 --> 29
	27 -. Stack .-> 29
	27["eff__4 push_u32"]
	26 --> 27
	3 -. Stack .-> 27
	26["arg__5 1"]
	28["arg__3 2"]
</pre>`;
window.traces["SPLIT_BRANCHES"]["schedulerMermaid"] = ''
window.traces["SPLIT_BRANCHES"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_1[\\"Finish"/]
end
phi_6 --> block_1
subgraph phi_6["Phi 6"]
	p6_31{{"sea__25 Sϕ Stack "}}
end
block_7 --> phi_6
block_8 --> phi_6
subgraph block_7["Block 7"]
	direction TB
	b7_32["mv_t__26 |True|  [u32.!= [p]]"]
end
phi_11 --> block_7
subgraph phi_11["Phi 11"]
	p11_30{{"sea__24 Sϕ Stack "}}
end
block_12 --> phi_11
block_13 --> phi_11
subgraph block_12["Block 12"]
	direction TB
	b12_26["arg__5 1"]
	b12_27["eff__4 push_u32"]
	b12_28["arg__3 2"]
	b12_29["eff__2 push_u32"]
	b12_34["mv_t__28 |True|  [u32.== [q]]"]
	b12_26 --> b12_27
	b12_27 --> b12_28
	b12_28 --> b12_29
	b12_29 --> b12_34
end
branch_10 --> block_12
subgraph branch_10["Branch 10"]
	br10_9["q u32.=="]

end
branch_5 --> branch_10
subgraph branch_5["Branch 5"]
	br5_6["p u32.!="]

end
block_9 --> branch_5
subgraph block_9["Block 9"]
	direction TB
	b9_0[/"Start"\\]
	b9_3["c1 pop_u32"]
	b9_7["arg__20 2"]
	b9_9["q u32.=="]
	b9_4["arg__22 0"]
	b9_6["p u32.!="]
	b9_0 --> b9_3
	b9_3 --> b9_7
	b9_7 --> b9_9
	b9_9 --> b9_4
	b9_4 --> b9_6
end
subgraph block_13["Block 13"]
	direction TB
	b13_22["arg__9 3"]
	b13_23["eff__8 push_u32"]
	b13_24["arg__7 4"]
	b13_25["eff__6 push_u32"]
	b13_35["mv_f__29 |False|  [u32.== [q]]"]
	b13_22 --> b13_23
	b13_23 --> b13_24
	b13_24 --> b13_25
	b13_25 --> b13_35
end
branch_10 --> block_13
subgraph block_8["Block 8"]
	direction TB
	b8_33["mv_f__27 |False|  [u32.!= [p]]"]
end
phi_15 --> block_8
subgraph phi_15["Phi 15"]
	p15_20{{"sea__23 Sϕ Stack "}}
end
block_16 --> phi_15
block_17 --> phi_15
subgraph block_16["Block 16"]
	direction TB
	b16_16["arg__14 5"]
	b16_17["eff__13 push_u32"]
	b16_18["arg__12 6"]
	b16_19["eff__11 push_u32"]
	b16_36["mv_t__30 |True|  [u32.== [q]]"]
	b16_16 --> b16_17
	b16_17 --> b16_18
	b16_18 --> b16_19
	b16_19 --> b16_36
end
branch_14 --> block_16
subgraph branch_14["Branch 14"]
	br14_9["q u32.=="]

end
branch_5 --> branch_14
subgraph block_17["Block 17"]
	direction TB
	b17_12["arg__18 7"]
	b17_13["eff__17 push_u32"]
	b17_14["arg__16 8"]
	b17_15["eff__15 push_u32"]
	b17_37["mv_f__31 |False|  [u32.== [q]]"]
	b17_12 --> b17_13
	b17_13 --> b17_14
	b17_14 --> b17_15
	b17_15 --> b17_37
end
branch_14 --> block_17

</pre>`;
window.traces["SPLIT_BRANCHES"]["scheduler_ssad"] = ''
window.traces["SPLIT_BRANCHES"]["scheduler_ssad"] += `<pre class=''>def c1 = pop_u32();
def arg__20 : u32 = 2;
def q = u32.==(c1, arg__20);
def arg__22 : u32 = 0;
def p = u32.!=(c1, arg__22);
if (p) {
	if (q) {
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
	if (q) {
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
window.traces["SPLIT_BRANCHES"]["scheduler_ssad_pretty"] = ''
window.traces["SPLIT_BRANCHES"]["scheduler_ssad_pretty"] += `<pre class=''>def c1 = pop_u32();
if (u32.!=(c1, 0)) {
	if (u32.==(c1, 2)) {
		push_u32(1);
		push_u32(2);
	} else {
		push_u32(3);
		push_u32(4);
	}
} else {
	if (u32.==(c1, 2)) {
		push_u32(5);
		push_u32(6);
	} else {
		push_u32(7);
		push_u32(8);
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
	31 -. Stack .-> 1
	31{{"sea__25 Sϕ Stack "}}
	34 --> 31
	44 --> 31
	35 --> 31
	35{{"innerPhi__35 Sϕ Stack "}}
	32 --> 35
	30 --> 35
	20 --> 35
	20{{"sea__23 Sϕ Stack "}}
	47 --> 20
	57 --> 20
	53 --> 20
	53{{"innerPhi__53 Sϕ Stack "}}
	45 --> 53
	19 --> 53
	15 --> 53
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
	45["mt__45 U32_maybeTrue"]
	9 --> 45
	9["q u32.=="]
	3 --> 9
	7 --> 9
	7["arg__20 2"]
	57["eff_push__57 push_u32"]
	56 --> 57
	55 -. Stack .-> 57
	55["eff_push__55 push_u32"]
	54 --> 55
	3 -. Stack .-> 55
	54["merge__54 merge_u"]
	16 --> 54
	12 --> 54
	56["merge__56 merge_u"]
	18 --> 56
	14 --> 56
	47["mb__47 bool.&&"]
	45 --> 47
	46 --> 47
	46["mf__46 U32_maybeFalse"]
	9 --> 46
	30{{"sea__24 Sϕ Stack "}}
	47 --> 30
	52 --> 30
	48 --> 30
	48{{"innerPhi__48 Sϕ Stack "}}
	45 --> 48
	29 --> 48
	25 --> 48
	25["eff__6 push_u32"]
	24 --> 25
	23 -. Stack .-> 25
	23["eff__8 push_u32"]
	22 --> 23
	3 -. Stack .-> 23
	22["arg__9 3"]
	24["arg__7 4"]
	29["eff__2 push_u32"]
	28 --> 29
	27 -. Stack .-> 29
	27["eff__4 push_u32"]
	26 --> 27
	3 -. Stack .-> 27
	26["arg__5 1"]
	28["arg__3 2"]
	52["eff_push__52 push_u32"]
	51 --> 52
	50 -. Stack .-> 52
	50["eff_push__50 push_u32"]
	49 --> 50
	3 -. Stack .-> 50
	49["merge__49 merge_u"]
	26 --> 49
	22 --> 49
	51["merge__51 merge_u"]
	28 --> 51
	24 --> 51
	32["mt__32 U32_maybeTrue"]
	6 --> 32
	6["p u32.!="]
	3 --> 6
	4 --> 6
	4["arg__22 0"]
	44{{"merged_phi__44 Sϕ Stack "}}
	9 --> 44
	39 --> 44
	43 --> 44
	43["eff_push__43 push_u32"]
	42 --> 43
	41 -. Stack .-> 43
	41["eff_push__41 push_u32"]
	40 --> 41
	3 -. Stack .-> 41
	40["merge__40 merge_u"]
	22 --> 40
	12 --> 40
	42["merge__42 merge_u"]
	24 --> 42
	14 --> 42
	39["eff_push__39 push_u32"]
	38 --> 39
	37 -. Stack .-> 39
	37["eff_push__37 push_u32"]
	36 --> 37
	3 -. Stack .-> 37
	36["merge__36 merge_u"]
	26 --> 36
	16 --> 36
	38["merge__38 merge_u"]
	28 --> 38
	18 --> 38
	34["mb__34 bool.&&"]
	32 --> 34
	33 --> 34
	33["mf__33 U32_maybeFalse"]
	6 --> 33
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
	31 -. Stack .-> 1
	31{{"sea__25 Sϕ Stack "}}
	34 --> 31
	58 --> 31
	59 --> 31
	59["mv_f__59 |False|  [bool.&& [mb__34]]"]
	34 --> 59
	35 -. Stack .-> 59
	35{{"innerPhi__35 Sϕ Stack "}}
	32 --> 35
	62 --> 35
	63 --> 35
	63["mv_f__63 |False|  [U32_maybeTrue [mt__32]]"]
	32 --> 63
	20 -. Stack .-> 63
	20{{"sea__23 Sϕ Stack "}}
	47 --> 20
	66 --> 20
	67 --> 20
	67["mv_f__67 |False|  [bool.&& [mb__47]]"]
	47 --> 67
	53 -. Stack .-> 67
	53{{"innerPhi__53 Sϕ Stack "}}
	45 --> 53
	70 --> 53
	71 --> 53
	71["mv_f__71 |False|  [U32_maybeTrue [mt__45]]"]
	45 --> 71
	15 -. Stack .-> 71
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
	45["mt__45 U32_maybeTrue"]
	9 --> 45
	9["q u32.=="]
	3 --> 9
	7 --> 9
	7["arg__20 2"]
	70["mv_t__70 |True|  [U32_maybeTrue [mt__45]]"]
	45 --> 70
	19 -. Stack .-> 70
	19["eff__11 push_u32"]
	18 --> 19
	17 -. Stack .-> 19
	17["eff__13 push_u32"]
	16 --> 17
	3 -. Stack .-> 17
	16["arg__14 5"]
	18["arg__12 6"]
	47["mb__47 bool.&&"]
	45 --> 47
	46 --> 47
	46["mf__46 U32_maybeFalse"]
	9 --> 46
	66["mv_t__66 |True|  [bool.&& [mb__47]]"]
	47 --> 66
	57 -. Stack .-> 66
	57["eff_push__57 push_u32"]
	56 --> 57
	55 -. Stack .-> 57
	55["eff_push__55 push_u32"]
	54 --> 55
	3 -. Stack .-> 55
	54["merge__54 merge_u"]
	16 --> 54
	12 --> 54
	56["merge__56 merge_u"]
	18 --> 56
	14 --> 56
	32["mt__32 U32_maybeTrue"]
	6 --> 32
	6["p u32.!="]
	3 --> 6
	4 --> 6
	4["arg__22 0"]
	62["mv_t__62 |True|  [U32_maybeTrue [mt__32]]"]
	32 --> 62
	30 -. Stack .-> 62
	30{{"sea__24 Sϕ Stack "}}
	47 --> 30
	64 --> 30
	65 --> 30
	65["mv_f__65 |False|  [bool.&& [mb__47]]"]
	47 --> 65
	48 -. Stack .-> 65
	48{{"innerPhi__48 Sϕ Stack "}}
	45 --> 48
	68 --> 48
	69 --> 48
	69["mv_f__69 |False|  [U32_maybeTrue [mt__45]]"]
	45 --> 69
	25 -. Stack .-> 69
	25["eff__6 push_u32"]
	24 --> 25
	23 -. Stack .-> 25
	23["eff__8 push_u32"]
	22 --> 23
	3 -. Stack .-> 23
	22["arg__9 3"]
	24["arg__7 4"]
	68["mv_t__68 |True|  [U32_maybeTrue [mt__45]]"]
	45 --> 68
	29 -. Stack .-> 68
	29["eff__2 push_u32"]
	28 --> 29
	27 -. Stack .-> 29
	27["eff__4 push_u32"]
	26 --> 27
	3 -. Stack .-> 27
	26["arg__5 1"]
	28["arg__3 2"]
	64["mv_t__64 |True|  [bool.&& [mb__47]]"]
	47 --> 64
	52 -. Stack .-> 64
	52["eff_push__52 push_u32"]
	51 --> 52
	50 -. Stack .-> 52
	50["eff_push__50 push_u32"]
	49 --> 50
	3 -. Stack .-> 50
	49["merge__49 merge_u"]
	26 --> 49
	22 --> 49
	51["merge__51 merge_u"]
	28 --> 51
	24 --> 51
	34["mb__34 bool.&&"]
	32 --> 34
	33 --> 34
	33["mf__33 U32_maybeFalse"]
	6 --> 33
	58["mv_t__58 |True|  [bool.&& [mb__34]]"]
	34 --> 58
	44 -. Stack .-> 58
	44{{"merged_phi__44 Sϕ Stack "}}
	9 --> 44
	60 --> 44
	61 --> 44
	61["mv_f__61 |False|  [u32.== [q]]"]
	9 --> 61
	43 -. Stack .-> 61
	43["eff_push__43 push_u32"]
	42 --> 43
	41 -. Stack .-> 43
	41["eff_push__41 push_u32"]
	40 --> 41
	3 -. Stack .-> 41
	40["merge__40 merge_u"]
	22 --> 40
	12 --> 40
	42["merge__42 merge_u"]
	24 --> 42
	14 --> 42
	60["mv_t__60 |True|  [u32.== [q]]"]
	9 --> 60
	39 -. Stack .-> 60
	39["eff_push__39 push_u32"]
	38 --> 39
	37 -. Stack .-> 39
	37["eff_push__37 push_u32"]
	36 --> 37
	3 -. Stack .-> 37
	36["merge__36 merge_u"]
	26 --> 36
	16 --> 36
	38["merge__38 merge_u"]
	28 --> 38
	18 --> 38
</pre>`;
window.traces["SPLIT_BRANCHES_ul"]["untangled"] = ''
window.traces["SPLIT_BRANCHES_ul"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	31 -. Stack .-> 1
	31{{"sea__25 Sϕ Stack "}}
	34 --> 31
	58 --> 31
	59 --> 31
	59["mv_f__59 |False|  [bool.&& [mb__34]]"]
	34 --> 59
	35 -. Stack .-> 59
	35{{"innerPhi__35 Sϕ Stack "}}
	32 --> 35
	62 --> 35
	63 --> 35
	63["mv_f__63 |False|  [U32_maybeTrue [mt__32]]"]
	32 --> 63
	20 -. Stack .-> 63
	20{{"sea__23 Sϕ Stack "}}
	47 --> 20
	66 --> 20
	67 --> 20
	67["mv_f__67 |False|  [bool.&& [mb__47]]"]
	47 --> 67
	53 -. Stack .-> 67
	53{{"innerPhi__53 Sϕ Stack "}}
	45 --> 53
	70 --> 53
	71 --> 53
	71["mv_f__71 |False|  [U32_maybeTrue [mt__45]]"]
	45 --> 71
	15 -. Stack .-> 71
	15["eff__15 push_u32"]
	83 --> 15
	13 -. Stack .-> 15
	13["eff__17 push_u32"]
	82 --> 13
	3 -. Stack .-> 13
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	82["arg__18__72 7"]
	83["arg__16__73 8"]
	45["mt__45 U32_maybeTrue"]
	9 --> 45
	9["q u32.=="]
	3 --> 9
	7 --> 9
	7["arg__20 2"]
	70["mv_t__70 |True|  [U32_maybeTrue [mt__45]]"]
	45 --> 70
	19 -. Stack .-> 70
	19["eff__11 push_u32"]
	85 --> 19
	17 -. Stack .-> 19
	17["eff__13 push_u32"]
	84 --> 17
	3 -. Stack .-> 17
	84["arg__14__74 5"]
	85["arg__12__75 6"]
	47["mb__47 bool.&&"]
	45 --> 47
	46 --> 47
	46["mf__46 U32_maybeFalse"]
	9 --> 46
	66["mv_t__66 |True|  [bool.&& [mb__47]]"]
	47 --> 66
	57 -. Stack .-> 66
	57["eff_push__57 push_u32"]
	56 --> 57
	55 -. Stack .-> 57
	55["eff_push__55 push_u32"]
	54 --> 55
	3 -. Stack .-> 55
	54["merge__54 merge_u"]
	92 --> 54
	90 --> 54
	90["arg__18__80 7"]
	92["arg__14__82 5"]
	56["merge__56 merge_u"]
	93 --> 56
	91 --> 56
	91["arg__16__81 8"]
	93["arg__12__83 6"]
	32["mt__32 U32_maybeTrue"]
	6 --> 32
	6["p u32.!="]
	3 --> 6
	4 --> 6
	4["arg__22 0"]
	62["mv_t__62 |True|  [U32_maybeTrue [mt__32]]"]
	32 --> 62
	30 -. Stack .-> 62
	30{{"sea__24 Sϕ Stack "}}
	47 --> 30
	64 --> 30
	65 --> 30
	65["mv_f__65 |False|  [bool.&& [mb__47]]"]
	47 --> 65
	48 -. Stack .-> 65
	48{{"innerPhi__48 Sϕ Stack "}}
	45 --> 48
	68 --> 48
	69 --> 48
	69["mv_f__69 |False|  [U32_maybeTrue [mt__45]]"]
	45 --> 69
	25 -. Stack .-> 69
	25["eff__6 push_u32"]
	87 --> 25
	23 -. Stack .-> 25
	23["eff__8 push_u32"]
	86 --> 23
	3 -. Stack .-> 23
	86["arg__9__76 3"]
	87["arg__7__77 4"]
	68["mv_t__68 |True|  [U32_maybeTrue [mt__45]]"]
	45 --> 68
	29 -. Stack .-> 68
	29["eff__2 push_u32"]
	89 --> 29
	27 -. Stack .-> 29
	27["eff__4 push_u32"]
	88 --> 27
	3 -. Stack .-> 27
	88["arg__5__78 1"]
	89["arg__3__79 2"]
	64["mv_t__64 |True|  [bool.&& [mb__47]]"]
	47 --> 64
	52 -. Stack .-> 64
	52["eff_push__52 push_u32"]
	51 --> 52
	50 -. Stack .-> 52
	50["eff_push__50 push_u32"]
	49 --> 50
	3 -. Stack .-> 50
	49["merge__49 merge_u"]
	96 --> 49
	94 --> 49
	94["arg__9__84 3"]
	96["arg__5__86 1"]
	51["merge__51 merge_u"]
	97 --> 51
	95 --> 51
	95["arg__7__85 4"]
	97["arg__3__87 2"]
	34["mb__34 bool.&&"]
	32 --> 34
	33 --> 34
	33["mf__33 U32_maybeFalse"]
	6 --> 33
	58["mv_t__58 |True|  [bool.&& [mb__34]]"]
	34 --> 58
	44 -. Stack .-> 58
	44{{"merged_phi__44 Sϕ Stack "}}
	9 --> 44
	60 --> 44
	61 --> 44
	61["mv_f__61 |False|  [u32.== [q]]"]
	9 --> 61
	43 -. Stack .-> 61
	43["eff_push__43 push_u32"]
	42 --> 43
	41 -. Stack .-> 43
	41["eff_push__41 push_u32"]
	40 --> 41
	3 -. Stack .-> 41
	40["merge__40 merge_u"]
	22 --> 40
	12 --> 40
	12["arg__18 7"]
	22["arg__9 3"]
	42["merge__42 merge_u"]
	24 --> 42
	14 --> 42
	14["arg__16 8"]
	24["arg__7 4"]
	60["mv_t__60 |True|  [u32.== [q]]"]
	9 --> 60
	39 -. Stack .-> 60
	39["eff_push__39 push_u32"]
	38 --> 39
	37 -. Stack .-> 39
	37["eff_push__37 push_u32"]
	36 --> 37
	3 -. Stack .-> 37
	36["merge__36 merge_u"]
	26 --> 36
	16 --> 36
	16["arg__14 5"]
	26["arg__5 1"]
	38["merge__38 merge_u"]
	28 --> 38
	18 --> 38
	18["arg__12 6"]
	28["arg__3 2"]
</pre>`;
window.traces["SPLIT_BRANCHES"]["unlem_schedule"] = ''
window.traces["SPLIT_BRANCHES"]["unlem_schedule"] += `<pre class=''>def c1 = pop_u32();
def arg__20 : u32 = 2;
def q = u32.==(c1, arg__20);
def arg__22 : u32 = 0;
def p = u32.!=(c1, arg__22);
def mt__32 = U32_maybeTrue(p);
def mf__33 = U32_maybeFalse(p);
def mb__34 = bool.&&(mt__32, mf__33);
if (mb__34) {
	if (q) {
		def arg__14 : u32 = 5;
		def arg__5 : u32 = 1;
		def merge__36 = merge_u(arg__5, arg__14);
		def arg__12 : u32 = 6;
		def arg__3 : u32 = 2;
		def eff_push__37 = push_u32(merge__36);
		def merge__38 = merge_u(arg__3, arg__12);
		def eff_push__39 = push_u32(merge__38);
	} else {
		def arg__18 : u32 = 7;
		def arg__9 : u32 = 3;
		def merge__40 = merge_u(arg__9, arg__18);
		def arg__16 : u32 = 8;
		def arg__7 : u32 = 4;
		def eff_push__41 = push_u32(merge__40);
		def merge__42 = merge_u(arg__7, arg__16);
		def eff_push__43 = push_u32(merge__42);
	}
// phis: 
} else {
	def mt__45 = U32_maybeTrue(q);
	def mf__46 = U32_maybeFalse(q);
	def mb__47 = bool.&&(mt__45, mf__46);
	if (mt__32) {
		if (mb__47) {
			def arg__9__84 : u32 = 3;
			def arg__9 = (arg__9__84);
			def arg__5__86 : u32 = 1;
			def arg__5 = (arg__5__86);
			def merge__49 = merge_u(arg__5__86, arg__9__84);
			def arg__7__85 : u32 = 4;
			def arg__7 = (arg__7__85);
			def arg__3__87 : u32 = 2;
			def arg__3 = (arg__3__87);
			def eff_push__50 = push_u32(merge__49);
			def merge__51 = merge_u(arg__3__87, arg__7__85);
			def eff_push__52 = push_u32(merge__51);
		} else {
			if (mt__45) {
				def arg__5__78 : u32 = 1;
				def eff__4 = push_u32(arg__5__78);
				def arg__3__79 : u32 = 2;
				def eff__2 = push_u32(arg__3__79);
			} else {
				def arg__9__76 : u32 = 3;
				def eff__8 = push_u32(arg__9__76);
				def arg__7__77 : u32 = 4;
				def eff__6 = push_u32(arg__7__77);
			}
// phis: 
		}
// phis: 
	} else {
		if (mb__47) {
			def arg__18__80 : u32 = 7;
			def arg__18 = (arg__18__80);
			def arg__14__82 : u32 = 5;
			def arg__14 = (arg__14__82);
			def merge__54 = merge_u(arg__14__82, arg__18__80);
			def arg__16__81 : u32 = 8;
			def arg__16 = (arg__16__81);
			def arg__12__83 : u32 = 6;
			def arg__12 = (arg__12__83);
			def eff_push__55 = push_u32(merge__54);
			def merge__56 = merge_u(arg__12__83, arg__16__81);
			def eff_push__57 = push_u32(merge__56);
		} else {
			if (mt__45) {
				def arg__14__74 : u32 = 5;
				def eff__13 = push_u32(arg__14__74);
				def arg__12__75 : u32 = 6;
				def eff__11 = push_u32(arg__12__75);
			} else {
				def arg__18__72 : u32 = 7;
				def eff__17 = push_u32(arg__18__72);
				def arg__16__73 : u32 = 8;
				def eff__15 = push_u32(arg__16__73);
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
subgraph block_18["Block 18"]
	direction TB
	b18_1[\\"Finish"/]
end
phi_48 --> block_18
subgraph phi_48["Phi 48"]
	p48_31{{"sea__25 Sϕ Stack "}}
end
block_49 --> phi_48
block_50 --> phi_48
subgraph block_49["Block 49"]
	direction TB
	b49_58["mv_t__58 |True|  [bool.&& [mb__34]]"]
end
phi_53 --> block_49
subgraph phi_53["Phi 53"]
	p53_44{{"merged_phi__44 Sϕ Stack "}}
end
block_54 --> phi_53
block_55 --> phi_53
subgraph block_54["Block 54"]
	direction TB
	b54_16["arg__14 5"]
	b54_26["arg__5 1"]
	b54_36["merge__36 merge_u"]
	b54_18["arg__12 6"]
	b54_28["arg__3 2"]
	b54_37["eff_push__37 push_u32"]
	b54_38["merge__38 merge_u"]
	b54_39["eff_push__39 push_u32"]
	b54_60["mv_t__60 |True|  [u32.== [q]]"]
	b54_16 --> b54_26
	b54_26 --> b54_36
	b54_36 --> b54_18
	b54_18 --> b54_28
	b54_28 --> b54_37
	b54_37 --> b54_38
	b54_38 --> b54_39
	b54_39 --> b54_60
end
branch_52 --> block_54
subgraph branch_52["Branch 52"]
	br52_9["q u32.=="]

end
branch_47 --> branch_52
subgraph branch_47["Branch 47"]
	br47_34["mb__34 bool.&&"]

end
block_51 --> branch_47
subgraph block_51["Block 51"]
	direction TB
	b51_0[/"Start"\\]
	b51_3["c1 pop_u32"]
	b51_7["arg__20 2"]
	b51_9["q u32.=="]
	b51_4["arg__22 0"]
	b51_6["p u32.!="]
	b51_32["mt__32 U32_maybeTrue"]
	b51_33["mf__33 U32_maybeFalse"]
	b51_34["mb__34 bool.&&"]
	b51_0 --> b51_3
	b51_3 --> b51_7
	b51_7 --> b51_9
	b51_9 --> b51_4
	b51_4 --> b51_6
	b51_6 --> b51_32
	b51_32 --> b51_33
	b51_33 --> b51_34
end
subgraph block_55["Block 55"]
	direction TB
	b55_12["arg__18 7"]
	b55_22["arg__9 3"]
	b55_40["merge__40 merge_u"]
	b55_14["arg__16 8"]
	b55_24["arg__7 4"]
	b55_41["eff_push__41 push_u32"]
	b55_42["merge__42 merge_u"]
	b55_43["eff_push__43 push_u32"]
	b55_61["mv_f__61 |False|  [u32.== [q]]"]
	b55_12 --> b55_22
	b55_22 --> b55_40
	b55_40 --> b55_14
	b55_14 --> b55_24
	b55_24 --> b55_41
	b55_41 --> b55_42
	b55_42 --> b55_43
	b55_43 --> b55_61
end
branch_52 --> block_55
subgraph block_50["Block 50"]
	direction TB
	b50_59["mv_f__59 |False|  [bool.&& [mb__34]]"]
end
phi_57 --> block_50
subgraph phi_57["Phi 57"]
	p57_35{{"innerPhi__35 Sϕ Stack "}}
end
block_58 --> phi_57
block_59 --> phi_57
subgraph block_58["Block 58"]
	direction TB
	b58_62["mv_t__62 |True|  [U32_maybeTrue [mt__32]]"]
end
phi_61 --> block_58
subgraph phi_61["Phi 61"]
	p61_30{{"sea__24 Sϕ Stack "}}
end
block_62 --> phi_61
block_63 --> phi_61
subgraph block_62["Block 62"]
	direction TB
	b62_94["arg__9__84 3"]
	b62_96["arg__5__86 1"]
	b62_49["merge__49 merge_u"]
	b62_95["arg__7__85 4"]
	b62_97["arg__3__87 2"]
	b62_50["eff_push__50 push_u32"]
	b62_51["merge__51 merge_u"]
	b62_52["eff_push__52 push_u32"]
	b62_64["mv_t__64 |True|  [bool.&& [mb__47]]"]
	b62_94 --> b62_96
	b62_96 --> b62_49
	b62_49 --> b62_95
	b62_95 --> b62_97
	b62_97 --> b62_50
	b62_50 --> b62_51
	b62_51 --> b62_52
	b62_52 --> b62_64
end
branch_60 --> block_62
subgraph branch_60["Branch 60"]
	br60_47["mb__47 bool.&&"]

end
branch_56 --> branch_60
subgraph branch_56["Branch 56"]
	br56_32["mt__32 U32_maybeTrue"]

end
block_68 --> branch_56
subgraph block_68["Block 68"]
	direction TB
	b68_45["mt__45 U32_maybeTrue"]
	b68_46["mf__46 U32_maybeFalse"]
	b68_47["mb__47 bool.&&"]
	b68_45 --> b68_46
	b68_46 --> b68_47
end
branch_47 --> block_68
subgraph block_63["Block 63"]
	direction TB
	b63_65["mv_f__65 |False|  [bool.&& [mb__47]]"]
end
phi_70 --> block_63
subgraph phi_70["Phi 70"]
	p70_48{{"innerPhi__48 Sϕ Stack "}}
end
block_71 --> phi_70
block_72 --> phi_70
subgraph block_71["Block 71"]
	direction TB
	b71_88["arg__5__78 1"]
	b71_27["eff__4 push_u32"]
	b71_89["arg__3__79 2"]
	b71_29["eff__2 push_u32"]
	b71_68["mv_t__68 |True|  [U32_maybeTrue [mt__45]]"]
	b71_88 --> b71_27
	b71_27 --> b71_89
	b71_89 --> b71_29
	b71_29 --> b71_68
end
branch_69 --> block_71
subgraph branch_69["Branch 69"]
	br69_45["mt__45 U32_maybeTrue"]

end
branch_60 --> branch_69
subgraph block_72["Block 72"]
	direction TB
	b72_86["arg__9__76 3"]
	b72_23["eff__8 push_u32"]
	b72_87["arg__7__77 4"]
	b72_25["eff__6 push_u32"]
	b72_69["mv_f__69 |False|  [U32_maybeTrue [mt__45]]"]
	b72_86 --> b72_23
	b72_23 --> b72_87
	b72_87 --> b72_25
	b72_25 --> b72_69
end
branch_69 --> block_72
subgraph block_59["Block 59"]
	direction TB
	b59_63["mv_f__63 |False|  [U32_maybeTrue [mt__32]]"]
end
phi_65 --> block_59
subgraph phi_65["Phi 65"]
	p65_20{{"sea__23 Sϕ Stack "}}
end
block_66 --> phi_65
block_67 --> phi_65
subgraph block_66["Block 66"]
	direction TB
	b66_90["arg__18__80 7"]
	b66_92["arg__14__82 5"]
	b66_54["merge__54 merge_u"]
	b66_91["arg__16__81 8"]
	b66_93["arg__12__83 6"]
	b66_55["eff_push__55 push_u32"]
	b66_56["merge__56 merge_u"]
	b66_57["eff_push__57 push_u32"]
	b66_66["mv_t__66 |True|  [bool.&& [mb__47]]"]
	b66_90 --> b66_92
	b66_92 --> b66_54
	b66_54 --> b66_91
	b66_91 --> b66_93
	b66_93 --> b66_55
	b66_55 --> b66_56
	b66_56 --> b66_57
	b66_57 --> b66_66
end
branch_64 --> block_66
subgraph branch_64["Branch 64"]
	br64_47["mb__47 bool.&&"]

end
branch_56 --> branch_64
subgraph block_67["Block 67"]
	direction TB
	b67_67["mv_f__67 |False|  [bool.&& [mb__47]]"]
end
phi_74 --> block_67
subgraph phi_74["Phi 74"]
	p74_53{{"innerPhi__53 Sϕ Stack "}}
end
block_75 --> phi_74
block_76 --> phi_74
subgraph block_75["Block 75"]
	direction TB
	b75_84["arg__14__74 5"]
	b75_17["eff__13 push_u32"]
	b75_85["arg__12__75 6"]
	b75_19["eff__11 push_u32"]
	b75_70["mv_t__70 |True|  [U32_maybeTrue [mt__45]]"]
	b75_84 --> b75_17
	b75_17 --> b75_85
	b75_85 --> b75_19
	b75_19 --> b75_70
end
branch_73 --> block_75
subgraph branch_73["Branch 73"]
	br73_45["mt__45 U32_maybeTrue"]

end
branch_64 --> branch_73
subgraph block_76["Block 76"]
	direction TB
	b76_82["arg__18__72 7"]
	b76_13["eff__17 push_u32"]
	b76_83["arg__16__73 8"]
	b76_15["eff__15 push_u32"]
	b76_71["mv_f__71 |False|  [U32_maybeTrue [mt__45]]"]
	b76_82 --> b76_13
	b76_13 --> b76_83
	b76_83 --> b76_15
	b76_15 --> b76_71
end
branch_73 --> block_76

</pre>`;
window.traces["SPLIT_BRANCHES"]["unlem_scheduler_ssa"] = ''
window.traces["SPLIT_BRANCHES"]["unlem_scheduler_ssa"] += `<pre class=''>def c1 = pop_u32();
def arg__20 : u32 = 2;
def q = u32.==(c1, arg__20);
def arg__22 : u32 = 0;
def p = u32.!=(c1, arg__22);
def mt__32 = U32_maybeTrue(p);
def mf__33 = U32_maybeFalse(p);
def mb__34 = bool.&&(mt__32, mf__33);
if (mb__34) {
	if (q) {
		def arg__14 : u32 = 5;
		def arg__5 : u32 = 1;
		def merge__36 = merge_u(arg__5, arg__14);
		def arg__12 : u32 = 6;
		def arg__3 : u32 = 2;
		def eff_push__37 = push_u32(merge__36);
		def merge__38 = merge_u(arg__3, arg__12);
		def eff_push__39 = push_u32(merge__38);
	} else {
		def arg__18 : u32 = 7;
		def arg__9 : u32 = 3;
		def merge__40 = merge_u(arg__9, arg__18);
		def arg__16 : u32 = 8;
		def arg__7 : u32 = 4;
		def eff_push__41 = push_u32(merge__40);
		def merge__42 = merge_u(arg__7, arg__16);
		def eff_push__43 = push_u32(merge__42);
	}
// phis: 
} else {
	def mt__45 = U32_maybeTrue(q);
	def mf__46 = U32_maybeFalse(q);
	def mb__47 = bool.&&(mt__45, mf__46);
	if (mt__32) {
		if (mb__47) {
			def arg__9__84 : u32 = 3;
			def arg__9 = (arg__9__84);
			def arg__5__86 : u32 = 1;
			def arg__5 = (arg__5__86);
			def merge__49 = merge_u(arg__5__86, arg__9__84);
			def arg__7__85 : u32 = 4;
			def arg__7 = (arg__7__85);
			def arg__3__87 : u32 = 2;
			def arg__3 = (arg__3__87);
			def eff_push__50 = push_u32(merge__49);
			def merge__51 = merge_u(arg__3__87, arg__7__85);
			def eff_push__52 = push_u32(merge__51);
		} else {
			if (mt__45) {
				def arg__5__78 : u32 = 1;
				def eff__4 = push_u32(arg__5__78);
				def arg__3__79 : u32 = 2;
				def eff__2 = push_u32(arg__3__79);
			} else {
				def arg__9__76 : u32 = 3;
				def eff__8 = push_u32(arg__9__76);
				def arg__7__77 : u32 = 4;
				def eff__6 = push_u32(arg__7__77);
			}
// phis: 
		}
// phis: 
	} else {
		if (mb__47) {
			def arg__18__80 : u32 = 7;
			def arg__18 = (arg__18__80);
			def arg__14__82 : u32 = 5;
			def arg__14 = (arg__14__82);
			def merge__54 = merge_u(arg__14__82, arg__18__80);
			def arg__16__81 : u32 = 8;
			def arg__16 = (arg__16__81);
			def arg__12__83 : u32 = 6;
			def arg__12 = (arg__12__83);
			def eff_push__55 = push_u32(merge__54);
			def merge__56 = merge_u(arg__12__83, arg__16__81);
			def eff_push__57 = push_u32(merge__56);
		} else {
			if (mt__45) {
				def arg__14__74 : u32 = 5;
				def eff__13 = push_u32(arg__14__74);
				def arg__12__75 : u32 = 6;
				def eff__11 = push_u32(arg__12__75);
			} else {
				def arg__18__72 : u32 = 7;
				def eff__17 = push_u32(arg__18__72);
				def arg__16__73 : u32 = 8;
				def eff__15 = push_u32(arg__16__73);
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
def mt = U32_maybeTrue(u32.!=(c1, 0));
def mf = U32_maybeFalse(u32.!=(c1, 0));
if (bool.&&(mt, mf)) {
	if (u32.==(c1, 2)) {
		push_u32(merge_u(1, 5));
		push_u32(merge_u(2, 6));
	} else {
		push_u32(merge_u(3, 7));
		push_u32(merge_u(4, 8));
	}
} else {
	def mt1 = U32_maybeTrue(u32.==(c1, 2));
	def mf1 = U32_maybeFalse(u32.==(c1, 2));
	if (mt) {
		if (bool.&&(mt1, mf1)) {
			push_u32(merge_u(1, 3));
			push_u32(merge_u(2, 4));
		} else {
			if (mt1) {
				push_u32(1);
				push_u32(2);
			} else {
				push_u32(3);
				push_u32(4);
			}
		}
	} else {
		if (bool.&&(mt1, mf1)) {
			push_u32(merge_u(5, 7));
			push_u32(merge_u(6, 8));
		} else {
			if (mt1) {
				push_u32(5);
				push_u32(6);
			} else {
				push_u32(7);
				push_u32(8);
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
def arg__106 : u32 = 0;
def arg__105 = (c1);
def p = u32.!=(arg__105, arg__106);
def arg__104 : u32 = 2;
def arg__103 = (c1);
def q = u32.==(arg__103, arg__104);
def cond__92 = (p);
if (cond__92) {
	def cond__93 = (q);
	if (cond__93) {
		def r3__95 : u32 = 1;
		def r4__94 : u32 = 2;
	} else {
		def r3__97 : u32 = 3;
		def r4__96 : u32 = 4;
	}
// phis: r4 <- r4__94; r4 <- r4__96; r3 <- r3__95; r3 <- r3__97; 
} else {
	def cond__98 = (q);
	if (cond__98) {
		def r3__100 : u32 = 5;
		def r4__99 : u32 = 6;
	} else {
		def r3__102 : u32 = 6;
		def r4__101 : u32 = 7;
	}
// phis: r4 <- r4__99; r4 <- r4__101; r3 <- r3__100; r3 <- r3__102; 
}
// phis: r4 <- r4; r4 <- r4; r3 <- r3; r3 <- r3; 
def arg__91 = (r3);
def eff__90 = push_u32(arg__91);
def arg__89 = (r4);
def eff__88 = push_u32(arg__89);
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["initial_pretty"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["initial_pretty"] += `<pre class=''>def c1 = pop_u32();
var r3 = 0;
var r4 = 1;
if ((u32.!=((c1), 0))) {
	if ((u32.==((c1), 2))) {
		r3 = 1;
		r4 = 2;
	} else {
		r3 = 3;
		r4 = 4;
	}
} else {
	if ((u32.==((c1), 2))) {
		r3 = 5;
		r4 = 6;
	} else {
		r3 = 6;
		r4 = 7;
	}
}
push_u32((r3));
push_u32((r4));
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["raw"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	32 -. Stack .-> 1
	32["eff__88 push_u32"]
	27 --> 32
	30 -. Stack .-> 32
	30["eff__90 push_u32"]
	28 --> 30
	3 -. Stack .-> 30
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	28{"r3 ϕ"}
	8 --> 28
	26 --> 28
	19 --> 28
	19{"r3 ϕ"}
	11 --> 19
	16 --> 19
	14 --> 19
	14["r3__102 6"]
	16["r3__100 5"]
	11["q u32.=="]
	3 --> 11
	9 --> 11
	9["arg__104 2"]
	26{"r3 ϕ"}
	11 --> 26
	23 --> 26
	21 --> 26
	21["r3__97 3"]
	23["r3__95 1"]
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__106 0"]
	27{"r4 ϕ"}
	8 --> 27
	25 --> 27
	18 --> 27
	18{"r4 ϕ"}
	11 --> 18
	17 --> 18
	15 --> 18
	15["r4__101 7"]
	17["r4__99 6"]
	25{"r4 ϕ"}
	11 --> 25
	24 --> 25
	22 --> 25
	22["r4__96 4"]
	24["r4__94 2"]
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["scheduler_start"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	32 -. Stack .-> 1
	32["eff__88 push_u32"]
	27 --> 32
	30 -. Stack .-> 32
	30["eff__90 push_u32"]
	28 --> 30
	3 -. Stack .-> 30
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	28{"r3 ϕ"}
	8 --> 28
	39 --> 28
	40 --> 28
	40["mv_f__114 |False|  [u32.!= [p]]"]
	8 --> 40
	19 --> 40
	19{"r3 ϕ"}
	11 --> 19
	43 --> 19
	44 --> 19
	44["mv_f__118 |False|  [u32.== [q]]"]
	11 --> 44
	14 --> 44
	14["r3__102 6"]
	11["q u32.=="]
	3 --> 11
	9 --> 11
	9["arg__104 2"]
	43["mv_t__117 |True|  [u32.== [q]]"]
	11 --> 43
	16 --> 43
	16["r3__100 5"]
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__106 0"]
	39["mv_t__113 |True|  [u32.!= [p]]"]
	8 --> 39
	26 --> 39
	26{"r3 ϕ"}
	11 --> 26
	41 --> 26
	42 --> 26
	42["mv_f__116 |False|  [u32.== [q]]"]
	11 --> 42
	21 --> 42
	21["r3__97 3"]
	41["mv_t__115 |True|  [u32.== [q]]"]
	11 --> 41
	23 --> 41
	23["r3__95 1"]
	27{"r4 ϕ"}
	8 --> 27
	33 --> 27
	34 --> 27
	34["mv_f__108 |False|  [u32.!= [p]]"]
	8 --> 34
	18 --> 34
	18{"r4 ϕ"}
	11 --> 18
	37 --> 18
	38 --> 18
	38["mv_f__112 |False|  [u32.== [q]]"]
	11 --> 38
	15 --> 38
	15["r4__101 7"]
	37["mv_t__111 |True|  [u32.== [q]]"]
	11 --> 37
	17 --> 37
	17["r4__99 6"]
	33["mv_t__107 |True|  [u32.!= [p]]"]
	8 --> 33
	25 --> 33
	25{"r4 ϕ"}
	11 --> 25
	35 --> 25
	36 --> 25
	36["mv_f__110 |False|  [u32.== [q]]"]
	11 --> 36
	22 --> 36
	22["r4__96 4"]
	35["mv_t__109 |True|  [u32.== [q]]"]
	11 --> 35
	24 --> 35
	24["r4__94 2"]
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["untangled"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	32 -. Stack .-> 1
	32["eff__88 push_u32"]
	27 --> 32
	30 -. Stack .-> 32
	30["eff__90 push_u32"]
	28 --> 30
	3 -. Stack .-> 30
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	28{"r3 ϕ"}
	8 --> 28
	39 --> 28
	40 --> 28
	40["mv_f__114 |False|  [u32.!= [p]]"]
	8 --> 40
	19 --> 40
	19{"r3 ϕ"}
	11 --> 19
	43 --> 19
	44 --> 19
	44["mv_f__118 |False|  [u32.== [q]]"]
	11 --> 44
	14 --> 44
	14["r3__102 6"]
	11["q u32.=="]
	3 --> 11
	9 --> 11
	9["arg__104 2"]
	43["mv_t__117 |True|  [u32.== [q]]"]
	11 --> 43
	16 --> 43
	16["r3__100 5"]
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__106 0"]
	39["mv_t__113 |True|  [u32.!= [p]]"]
	8 --> 39
	26 --> 39
	26{"r3 ϕ"}
	11 --> 26
	41 --> 26
	42 --> 26
	42["mv_f__116 |False|  [u32.== [q]]"]
	11 --> 42
	21 --> 42
	21["r3__97 3"]
	41["mv_t__115 |True|  [u32.== [q]]"]
	11 --> 41
	23 --> 41
	23["r3__95 1"]
	27{"r4 ϕ"}
	8 --> 27
	33 --> 27
	34 --> 27
	34["mv_f__108 |False|  [u32.!= [p]]"]
	8 --> 34
	18 --> 34
	18{"r4 ϕ"}
	11 --> 18
	37 --> 18
	38 --> 18
	38["mv_f__112 |False|  [u32.== [q]]"]
	11 --> 38
	15 --> 38
	15["r4__101 7"]
	37["mv_t__111 |True|  [u32.== [q]]"]
	11 --> 37
	17 --> 37
	17["r4__99 6"]
	33["mv_t__107 |True|  [u32.!= [p]]"]
	8 --> 33
	25 --> 33
	25{"r4 ϕ"}
	11 --> 25
	35 --> 25
	36 --> 25
	36["mv_f__110 |False|  [u32.== [q]]"]
	11 --> 36
	22 --> 36
	22["r4__96 4"]
	35["mv_t__109 |True|  [u32.== [q]]"]
	11 --> 35
	24 --> 35
	24["r4__94 2"]
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["schedulerMermaid"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_77["Block 77"]
	direction TB
	b77_30["eff__90 push_u32"]
	b77_32["eff__88 push_u32"]
	b77_1[\\"Finish"/]
	b77_30 --> b77_32
	b77_32 --> b77_1
end
phi_82 --> block_77
subgraph phi_82["Phi 82"]
	p82_28{"r3 ϕ"}
	p82_27{"r4 ϕ"}
end
block_83 --> phi_82
block_84 --> phi_82
subgraph block_83["Block 83"]
	direction TB
	b83_39["mv_t__113 |True|  [u32.!= [p]]"]
	b83_33["mv_t__107 |True|  [u32.!= [p]]"]
	b83_39 --> b83_33
end
phi_87 --> block_83
subgraph phi_87["Phi 87"]
	p87_26{"r3 ϕ"}
	p87_25{"r4 ϕ"}
end
block_88 --> phi_87
block_89 --> phi_87
subgraph block_88["Block 88"]
	direction TB
	b88_23["r3__95 1"]
	b88_24["r4__94 2"]
	b88_41["mv_t__115 |True|  [u32.== [q]]"]
	b88_35["mv_t__109 |True|  [u32.== [q]]"]
	b88_23 --> b88_24
	b88_24 --> b88_41
	b88_41 --> b88_35
end
branch_86 --> block_88
subgraph branch_86["Branch 86"]
	br86_11["q u32.=="]

end
branch_81 --> branch_86
subgraph branch_81["Branch 81"]
	br81_8["p u32.!="]

end
block_85 --> branch_81
subgraph block_85["Block 85"]
	direction TB
	b85_0[/"Start"\\]
	b85_9["arg__104 2"]
	b85_3["c1 pop_u32"]
	b85_11["q u32.=="]
	b85_6["arg__106 0"]
	b85_8["p u32.!="]
	b85_0 --> b85_9
	b85_9 --> b85_3
	b85_3 --> b85_11
	b85_11 --> b85_6
	b85_6 --> b85_8
end
subgraph block_89["Block 89"]
	direction TB
	b89_21["r3__97 3"]
	b89_22["r4__96 4"]
	b89_42["mv_f__116 |False|  [u32.== [q]]"]
	b89_36["mv_f__110 |False|  [u32.== [q]]"]
	b89_21 --> b89_22
	b89_22 --> b89_42
	b89_42 --> b89_36
end
branch_86 --> block_89
subgraph block_84["Block 84"]
	direction TB
	b84_40["mv_f__114 |False|  [u32.!= [p]]"]
	b84_34["mv_f__108 |False|  [u32.!= [p]]"]
	b84_40 --> b84_34
end
phi_91 --> block_84
subgraph phi_91["Phi 91"]
	p91_19{"r3 ϕ"}
	p91_18{"r4 ϕ"}
end
block_92 --> phi_91
block_93 --> phi_91
subgraph block_92["Block 92"]
	direction TB
	b92_16["r3__100 5"]
	b92_17["r4__99 6"]
	b92_43["mv_t__117 |True|  [u32.== [q]]"]
	b92_37["mv_t__111 |True|  [u32.== [q]]"]
	b92_16 --> b92_17
	b92_17 --> b92_43
	b92_43 --> b92_37
end
branch_90 --> block_92
subgraph branch_90["Branch 90"]
	br90_11["q u32.=="]

end
branch_81 --> branch_90
subgraph block_93["Block 93"]
	direction TB
	b93_14["r3__102 6"]
	b93_15["r4__101 7"]
	b93_44["mv_f__118 |False|  [u32.== [q]]"]
	b93_38["mv_f__112 |False|  [u32.== [q]]"]
	b93_14 --> b93_15
	b93_15 --> b93_44
	b93_44 --> b93_38
end
branch_90 --> block_93

</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["scheduler_ssad"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["scheduler_ssad"] += `<pre class=''>def arg__104 : u32 = 2;
def c1 = pop_u32();
def q = u32.==(c1, arg__104);
def arg__106 : u32 = 0;
def p = u32.!=(c1, arg__106);
if (p) {
	if (q) {
		def r3__95 : u32 = 1;
		def r4__94 : u32 = 2;
	} else {
		def r3__97 : u32 = 3;
		def r4__96 : u32 = 4;
	}
// phis: r3 <- r3__95; r3 <- r3__97; r4 <- r4__94; r4 <- r4__96; 
} else {
	if (q) {
		def r3__100 : u32 = 5;
		def r4__99 : u32 = 6;
	} else {
		def r3__102 : u32 = 6;
		def r4__101 : u32 = 7;
	}
// phis: r3 <- r3__100; r3 <- r3__102; r4 <- r4__99; r4 <- r4__101; 
}
// phis: r3 <- r3; r3 <- r3; r4 <- r4; r4 <- r4; 
def eff__90 = push_u32(r3);
def eff__88 = push_u32(r4);
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["scheduler_ssad_pretty"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["scheduler_ssad_pretty"] += `<pre class=''>def c1 = pop_u32();
var r3: u32;
var r4: u32;
if (u32.!=(c1, 0)) {
	if (u32.==(c1, 2)) {
		r3 = 1;
		r4 = 2;
	} else {
		r3 = 3;
		r4 = 4;
	}
} else {
	if (u32.==(c1, 2)) {
		r3 = 5;
		r4 = 6;
	} else {
		r3 = 6;
		r4 = 7;
	}
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
	32 -. Stack .-> 1
	32["eff__88 push_u32"]
	27 --> 32
	30 -. Stack .-> 32
	30["eff__90 push_u32"]
	28 --> 30
	3 -. Stack .-> 30
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	28{"r3 ϕ"}
	35 --> 28
	46 --> 28
	45 --> 28
	45{"innerPhi__131 ϕ"}
	33 --> 45
	26 --> 45
	19 --> 45
	19{"r3 ϕ"}
	40 --> 19
	50 --> 19
	49 --> 19
	49{"innerPhi__135 ϕ"}
	38 --> 49
	16 --> 49
	14 --> 49
	14["r3__102 6"]
	16["r3__100 5"]
	38["mt__124 U32_maybeTrue"]
	11 --> 38
	11["q u32.=="]
	3 --> 11
	9 --> 11
	9["arg__104 2"]
	50["merge__136 merge"]
	16 --> 50
	14 --> 50
	40["mb__126 bool.&&"]
	38 --> 40
	39 --> 40
	39["mf__125 U32_maybeFalse"]
	11 --> 39
	26{"r3 ϕ"}
	40 --> 26
	48 --> 26
	47 --> 26
	47{"innerPhi__133 ϕ"}
	38 --> 47
	23 --> 47
	21 --> 47
	21["r3__97 3"]
	23["r3__95 1"]
	48["merge__134 merge"]
	23 --> 48
	21 --> 48
	33["mt__119 U32_maybeTrue"]
	8 --> 33
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__106 0"]
	46["merge__132 merge"]
	26 --> 46
	19 --> 46
	35["mb__121 bool.&&"]
	33 --> 35
	34 --> 35
	34["mf__120 U32_maybeFalse"]
	8 --> 34
	27{"r4 ϕ"}
	35 --> 27
	37 --> 27
	36 --> 27
	36{"innerPhi__122 ϕ"}
	33 --> 36
	25 --> 36
	18 --> 36
	18{"r4 ϕ"}
	40 --> 18
	44 --> 18
	43 --> 18
	43{"innerPhi__129 ϕ"}
	38 --> 43
	17 --> 43
	15 --> 43
	15["r4__101 7"]
	17["r4__99 6"]
	44["merge__130 merge"]
	17 --> 44
	15 --> 44
	25{"r4 ϕ"}
	40 --> 25
	42 --> 25
	41 --> 25
	41{"innerPhi__127 ϕ"}
	38 --> 41
	24 --> 41
	22 --> 41
	22["r4__96 4"]
	24["r4__94 2"]
	42["merge__128 merge"]
	24 --> 42
	22 --> 42
	37["merge__123 merge"]
	25 --> 37
	18 --> 37
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
	32 -. Stack .-> 1
	32["eff__88 push_u32"]
	27 --> 32
	30 -. Stack .-> 32
	30["eff__90 push_u32"]
	28 --> 30
	3 -. Stack .-> 30
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	28{"r3 ϕ"}
	35 --> 28
	55 --> 28
	56 --> 28
	56["mv_f__142 |False|  [bool.&& [mb__121]]"]
	35 --> 56
	45 --> 56
	45{"innerPhi__131 ϕ"}
	33 --> 45
	61 --> 45
	62 --> 45
	62["mv_f__148 |False|  [U32_maybeTrue [mt__119]]"]
	33 --> 62
	19 --> 62
	19{"r3 ϕ"}
	40 --> 19
	69 --> 19
	70 --> 19
	70["mv_f__156 |False|  [bool.&& [mb__126]]"]
	40 --> 70
	49 --> 70
	49{"innerPhi__135 ϕ"}
	38 --> 49
	73 --> 49
	74 --> 49
	74["mv_f__160 |False|  [U32_maybeTrue [mt__124]]"]
	38 --> 74
	14 --> 74
	14["r3__102 6"]
	38["mt__124 U32_maybeTrue"]
	11 --> 38
	11["q u32.=="]
	3 --> 11
	9 --> 11
	9["arg__104 2"]
	73["mv_t__159 |True|  [U32_maybeTrue [mt__124]]"]
	38 --> 73
	16 --> 73
	16["r3__100 5"]
	40["mb__126 bool.&&"]
	38 --> 40
	39 --> 40
	39["mf__125 U32_maybeFalse"]
	11 --> 39
	69["mv_t__155 |True|  [bool.&& [mb__126]]"]
	40 --> 69
	50 --> 69
	50["merge__136 merge"]
	16 --> 50
	14 --> 50
	33["mt__119 U32_maybeTrue"]
	8 --> 33
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__106 0"]
	61["mv_t__147 |True|  [U32_maybeTrue [mt__119]]"]
	33 --> 61
	26 --> 61
	26{"r3 ϕ"}
	40 --> 26
	67 --> 26
	68 --> 26
	68["mv_f__154 |False|  [bool.&& [mb__126]]"]
	40 --> 68
	47 --> 68
	47{"innerPhi__133 ϕ"}
	38 --> 47
	71 --> 47
	72 --> 47
	72["mv_f__158 |False|  [U32_maybeTrue [mt__124]]"]
	38 --> 72
	21 --> 72
	21["r3__97 3"]
	71["mv_t__157 |True|  [U32_maybeTrue [mt__124]]"]
	38 --> 71
	23 --> 71
	23["r3__95 1"]
	67["mv_t__153 |True|  [bool.&& [mb__126]]"]
	40 --> 67
	48 --> 67
	48["merge__134 merge"]
	23 --> 48
	21 --> 48
	35["mb__121 bool.&&"]
	33 --> 35
	34 --> 35
	34["mf__120 U32_maybeFalse"]
	8 --> 34
	55["mv_t__141 |True|  [bool.&& [mb__121]]"]
	35 --> 55
	46 --> 55
	46["merge__132 merge"]
	26 --> 46
	19 --> 46
	27{"r4 ϕ"}
	35 --> 27
	51 --> 27
	52 --> 27
	52["mv_f__138 |False|  [bool.&& [mb__121]]"]
	35 --> 52
	36 --> 52
	36{"innerPhi__122 ϕ"}
	33 --> 36
	53 --> 36
	54 --> 36
	54["mv_f__140 |False|  [U32_maybeTrue [mt__119]]"]
	33 --> 54
	18 --> 54
	18{"r4 ϕ"}
	40 --> 18
	59 --> 18
	60 --> 18
	60["mv_f__146 |False|  [bool.&& [mb__126]]"]
	40 --> 60
	43 --> 60
	43{"innerPhi__129 ϕ"}
	38 --> 43
	65 --> 43
	66 --> 43
	66["mv_f__152 |False|  [U32_maybeTrue [mt__124]]"]
	38 --> 66
	15 --> 66
	15["r4__101 7"]
	65["mv_t__151 |True|  [U32_maybeTrue [mt__124]]"]
	38 --> 65
	17 --> 65
	17["r4__99 6"]
	59["mv_t__145 |True|  [bool.&& [mb__126]]"]
	40 --> 59
	44 --> 59
	44["merge__130 merge"]
	17 --> 44
	15 --> 44
	53["mv_t__139 |True|  [U32_maybeTrue [mt__119]]"]
	33 --> 53
	25 --> 53
	25{"r4 ϕ"}
	40 --> 25
	57 --> 25
	58 --> 25
	58["mv_f__144 |False|  [bool.&& [mb__126]]"]
	40 --> 58
	41 --> 58
	41{"innerPhi__127 ϕ"}
	38 --> 41
	63 --> 41
	64 --> 41
	64["mv_f__150 |False|  [U32_maybeTrue [mt__124]]"]
	38 --> 64
	22 --> 64
	22["r4__96 4"]
	63["mv_t__149 |True|  [U32_maybeTrue [mt__124]]"]
	38 --> 63
	24 --> 63
	24["r4__94 2"]
	57["mv_t__143 |True|  [bool.&& [mb__126]]"]
	40 --> 57
	42 --> 57
	42["merge__128 merge"]
	24 --> 42
	22 --> 42
	51["mv_t__137 |True|  [bool.&& [mb__121]]"]
	35 --> 51
	37 --> 51
	37["merge__123 merge"]
	25 --> 37
	18 --> 37
</pre>`;
window.traces["SPLIT_BRANCHES_PHI_ul"]["untangled"] = ''
window.traces["SPLIT_BRANCHES_PHI_ul"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	32 -. Stack .-> 1
	32["eff__88 push_u32"]
	27 --> 32
	30 -. Stack .-> 32
	30["eff__90 push_u32"]
	28 --> 30
	3 -. Stack .-> 30
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	28{"r3 ϕ"}
	35 --> 28
	55 --> 28
	56 --> 28
	56["mv_f__142 |False|  [bool.&& [mb__121]]"]
	35 --> 56
	45 --> 56
	45{"innerPhi__131 ϕ"}
	33 --> 45
	61 --> 45
	62 --> 45
	62["mv_f__148 |False|  [U32_maybeTrue [mt__119]]"]
	33 --> 62
	96 --> 62
	96{"r3__174 ϕ"}
	40 --> 96
	121 --> 96
	122 --> 96
	122["mv_f__156__200 |False|  [bool.&& [mb__126]]"]
	40 --> 122
	109 --> 122
	109{"innerPhi__135__187 ϕ"}
	38 --> 109
	125 --> 109
	126 --> 109
	126["mv_f__160__204 |False|  [U32_maybeTrue [mt__124]]"]
	38 --> 126
	127 --> 126
	127["r3__102__161__205 6"]
	38["mt__124 U32_maybeTrue"]
	11 --> 38
	11["q u32.=="]
	3 --> 11
	9 --> 11
	9["arg__104 2"]
	125["mv_t__159__203 |True|  [U32_maybeTrue [mt__124]]"]
	38 --> 125
	129 --> 125
	129["r3__100__163__207 5"]
	40["mb__126 bool.&&"]
	38 --> 40
	39 --> 40
	39["mf__125 U32_maybeFalse"]
	11 --> 39
	121["mv_t__155__199 |True|  [bool.&& [mb__126]]"]
	40 --> 121
	110 --> 121
	110["merge__136__188 merge"]
	93 --> 110
	91 --> 110
	91["r3__102__169 6"]
	93["r3__100__171 5"]
	33["mt__119 U32_maybeTrue"]
	8 --> 33
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__106 0"]
	61["mv_t__147 |True|  [U32_maybeTrue [mt__119]]"]
	33 --> 61
	102 --> 61
	102{"r3__180 ϕ"}
	40 --> 102
	119 --> 102
	120 --> 102
	120["mv_f__154__198 |False|  [bool.&& [mb__126]]"]
	40 --> 120
	107 --> 120
	107{"innerPhi__133__185 ϕ"}
	38 --> 107
	123 --> 107
	124 --> 107
	124["mv_f__158__202 |False|  [U32_maybeTrue [mt__124]]"]
	38 --> 124
	131 --> 124
	131["r3__97__165__209 3"]
	123["mv_t__157__201 |True|  [U32_maybeTrue [mt__124]]"]
	38 --> 123
	133 --> 123
	133["r3__95__167__211 1"]
	119["mv_t__153__197 |True|  [bool.&& [mb__126]]"]
	40 --> 119
	108 --> 119
	108["merge__134__186 merge"]
	99 --> 108
	97 --> 108
	97["r3__97__175 3"]
	99["r3__95__177 1"]
	35["mb__121 bool.&&"]
	33 --> 35
	34 --> 35
	34["mf__120 U32_maybeFalse"]
	8 --> 34
	55["mv_t__141 |True|  [bool.&& [mb__121]]"]
	35 --> 55
	46 --> 55
	46["merge__132 merge"]
	26 --> 46
	19 --> 46
	19{"r3 ϕ"}
	40 --> 19
	69 --> 19
	70 --> 19
	70["mv_f__156 |False|  [bool.&& [mb__126]]"]
	40 --> 70
	49 --> 70
	49{"innerPhi__135 ϕ"}
	38 --> 49
	73 --> 49
	74 --> 49
	74["mv_f__160 |False|  [U32_maybeTrue [mt__124]]"]
	38 --> 74
	83 --> 74
	83["r3__102__161 6"]
	73["mv_t__159 |True|  [U32_maybeTrue [mt__124]]"]
	38 --> 73
	85 --> 73
	85["r3__100__163 5"]
	69["mv_t__155 |True|  [bool.&& [mb__126]]"]
	40 --> 69
	50 --> 69
	50["merge__136 merge"]
	16 --> 50
	14 --> 50
	14["r3__102 6"]
	16["r3__100 5"]
	26{"r3 ϕ"}
	40 --> 26
	67 --> 26
	68 --> 26
	68["mv_f__154 |False|  [bool.&& [mb__126]]"]
	40 --> 68
	47 --> 68
	47{"innerPhi__133 ϕ"}
	38 --> 47
	71 --> 47
	72 --> 47
	72["mv_f__158 |False|  [U32_maybeTrue [mt__124]]"]
	38 --> 72
	87 --> 72
	87["r3__97__165 3"]
	71["mv_t__157 |True|  [U32_maybeTrue [mt__124]]"]
	38 --> 71
	89 --> 71
	89["r3__95__167 1"]
	67["mv_t__153 |True|  [bool.&& [mb__126]]"]
	40 --> 67
	48 --> 67
	48["merge__134 merge"]
	23 --> 48
	21 --> 48
	21["r3__97 3"]
	23["r3__95 1"]
	27{"r4 ϕ"}
	35 --> 27
	51 --> 27
	52 --> 27
	52["mv_f__138 |False|  [bool.&& [mb__121]]"]
	35 --> 52
	36 --> 52
	36{"innerPhi__122 ϕ"}
	33 --> 36
	53 --> 36
	54 --> 36
	54["mv_f__140 |False|  [U32_maybeTrue [mt__119]]"]
	33 --> 54
	95 --> 54
	95{"r4__173 ϕ"}
	40 --> 95
	113 --> 95
	114 --> 95
	114["mv_f__146__192 |False|  [bool.&& [mb__126]]"]
	40 --> 114
	105 --> 114
	105{"innerPhi__129__183 ϕ"}
	38 --> 105
	117 --> 105
	118 --> 105
	118["mv_f__152__196 |False|  [U32_maybeTrue [mt__124]]"]
	38 --> 118
	128 --> 118
	128["r4__101__162__206 7"]
	117["mv_t__151__195 |True|  [U32_maybeTrue [mt__124]]"]
	38 --> 117
	130 --> 117
	130["r4__99__164__208 6"]
	113["mv_t__145__191 |True|  [bool.&& [mb__126]]"]
	40 --> 113
	106 --> 113
	106["merge__130__184 merge"]
	94 --> 106
	92 --> 106
	92["r4__101__170 7"]
	94["r4__99__172 6"]
	53["mv_t__139 |True|  [U32_maybeTrue [mt__119]]"]
	33 --> 53
	101 --> 53
	101{"r4__179 ϕ"}
	40 --> 101
	111 --> 101
	112 --> 101
	112["mv_f__144__190 |False|  [bool.&& [mb__126]]"]
	40 --> 112
	103 --> 112
	103{"innerPhi__127__181 ϕ"}
	38 --> 103
	115 --> 103
	116 --> 103
	116["mv_f__150__194 |False|  [U32_maybeTrue [mt__124]]"]
	38 --> 116
	132 --> 116
	132["r4__96__166__210 4"]
	115["mv_t__149__193 |True|  [U32_maybeTrue [mt__124]]"]
	38 --> 115
	134 --> 115
	134["r4__94__168__212 2"]
	111["mv_t__143__189 |True|  [bool.&& [mb__126]]"]
	40 --> 111
	104 --> 111
	104["merge__128__182 merge"]
	100 --> 104
	98 --> 104
	98["r4__96__176 4"]
	100["r4__94__178 2"]
	51["mv_t__137 |True|  [bool.&& [mb__121]]"]
	35 --> 51
	37 --> 51
	37["merge__123 merge"]
	25 --> 37
	18 --> 37
	18{"r4 ϕ"}
	40 --> 18
	59 --> 18
	60 --> 18
	60["mv_f__146 |False|  [bool.&& [mb__126]]"]
	40 --> 60
	43 --> 60
	43{"innerPhi__129 ϕ"}
	38 --> 43
	65 --> 43
	66 --> 43
	66["mv_f__152 |False|  [U32_maybeTrue [mt__124]]"]
	38 --> 66
	84 --> 66
	84["r4__101__162 7"]
	65["mv_t__151 |True|  [U32_maybeTrue [mt__124]]"]
	38 --> 65
	86 --> 65
	86["r4__99__164 6"]
	59["mv_t__145 |True|  [bool.&& [mb__126]]"]
	40 --> 59
	44 --> 59
	44["merge__130 merge"]
	17 --> 44
	15 --> 44
	15["r4__101 7"]
	17["r4__99 6"]
	25{"r4 ϕ"}
	40 --> 25
	57 --> 25
	58 --> 25
	58["mv_f__144 |False|  [bool.&& [mb__126]]"]
	40 --> 58
	41 --> 58
	41{"innerPhi__127 ϕ"}
	38 --> 41
	63 --> 41
	64 --> 41
	64["mv_f__150 |False|  [U32_maybeTrue [mt__124]]"]
	38 --> 64
	88 --> 64
	88["r4__96__166 4"]
	63["mv_t__149 |True|  [U32_maybeTrue [mt__124]]"]
	38 --> 63
	90 --> 63
	90["r4__94__168 2"]
	57["mv_t__143 |True|  [bool.&& [mb__126]]"]
	40 --> 57
	42 --> 57
	42["merge__128 merge"]
	24 --> 42
	22 --> 42
	22["r4__96 4"]
	24["r4__94 2"]
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["unlem_schedule"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["unlem_schedule"] += `<pre class=''>def arg__104 : u32 = 2;
def c1 = pop_u32();
def q = u32.==(c1, arg__104);
def mt__124 = U32_maybeTrue(q);
def mf__125 = U32_maybeFalse(q);
def mb__126 = bool.&&(mt__124, mf__125);
def arg__106 : u32 = 0;
def p = u32.!=(c1, arg__106);
def mt__119 = U32_maybeTrue(p);
def mf__120 = U32_maybeFalse(p);
def mb__121 = bool.&&(mt__119, mf__120);
if (mb__121) {
	if (mb__126) {
		def r3__97 : u32 = 3;
		def r3__95 : u32 = 1;
		def r3__102 : u32 = 6;
		def r3__100 : u32 = 5;
		def r4__96 : u32 = 4;
		def r4__94 : u32 = 2;
		def r4__101 : u32 = 7;
		def r4__99 : u32 = 6;
		def merge__134 = merge(r3__95, r3__97);
		def merge__136 = merge(r3__100, r3__102);
		def merge__128 = merge(r4__94, r4__96);
		def merge__130 = merge(r4__99, r4__101);
	} else {
		if (mt__124) {
			def r3__95__167 : u32 = 1;
			def r3__100__163 : u32 = 5;
			def r4__94__168 : u32 = 2;
			def r4__99__164 : u32 = 6;
		} else {
			def r3__97__165 : u32 = 3;
			def r3__102__161 : u32 = 6;
			def r4__96__166 : u32 = 4;
			def r4__101__162 : u32 = 7;
		}
// phis: innerPhi__133 <- r3__95__167; innerPhi__133 <- r3__97__165; innerPhi__135 <- r3__100__163; innerPhi__135 <- r3__102__161; innerPhi__127 <- r4__94__168; innerPhi__127 <- r4__96__166; innerPhi__129 <- r4__99__164; innerPhi__129 <- r4__101__162; 
	}
// phis: r3 <- merge__134; r3 <- innerPhi__133; r3 <- merge__136; r3 <- innerPhi__135; r4 <- merge__128; r4 <- innerPhi__127; r4 <- merge__130; r4 <- innerPhi__129; 
	def merge__132 = merge(r3, r3);
	def merge__123 = merge(r4, r4);
} else {
	if (mt__119) {
		if (mb__126) {
			def r3__97__175 : u32 = 3;
			def r3__97 = (r3__97__175);
			def r3__95__177 : u32 = 1;
			def r3__95 = (r3__95__177);
			def r4__96__176 : u32 = 4;
			def r4__96 = (r4__96__176);
			def r4__94__178 : u32 = 2;
			def r4__94 = (r4__94__178);
			def merge__134__186 = merge(r3__95__177, r3__97__175);
			def merge__134 = (merge__134__186);
			def merge__128__182 = merge(r4__94__178, r4__96__176);
			def merge__128 = (merge__128__182);
		} else {
			if (mt__124) {
				def r3__95__167__211 : u32 = 1;
				def r4__94__168__212 : u32 = 2;
			} else {
				def r3__97__165__209 : u32 = 3;
				def r4__96__166__210 : u32 = 4;
			}
// phis: innerPhi__133__185 <- r3__95__167__211; innerPhi__133__185 <- r3__97__165__209; innerPhi__127__181 <- r4__94__168__212; innerPhi__127__181 <- r4__96__166__210; 
		}
// phis: r3__180 <- merge__134__186; r3__180 <- innerPhi__133__185; r4__179 <- merge__128__182; r4__179 <- innerPhi__127__181; 
	} else {
		if (mb__126) {
			def r3__102__169 : u32 = 6;
			def r3__102 = (r3__102__169);
			def r3__100__171 : u32 = 5;
			def r3__100 = (r3__100__171);
			def r4__101__170 : u32 = 7;
			def r4__101 = (r4__101__170);
			def r4__99__172 : u32 = 6;
			def r4__99 = (r4__99__172);
			def merge__136__188 = merge(r3__100__171, r3__102__169);
			def merge__136 = (merge__136__188);
			def merge__130__184 = merge(r4__99__172, r4__101__170);
			def merge__130 = (merge__130__184);
		} else {
			if (mt__124) {
				def r3__100__163__207 : u32 = 5;
				def r4__99__164__208 : u32 = 6;
			} else {
				def r3__102__161__205 : u32 = 6;
				def r4__101__162__206 : u32 = 7;
			}
// phis: innerPhi__135__187 <- r3__100__163__207; innerPhi__135__187 <- r3__102__161__205; innerPhi__129__183 <- r4__99__164__208; innerPhi__129__183 <- r4__101__162__206; 
		}
// phis: r3__174 <- merge__136__188; r3__174 <- innerPhi__135__187; r4__173 <- merge__130__184; r4__173 <- innerPhi__129__183; 
	}
// phis: innerPhi__131 <- r3__180; innerPhi__131 <- r3__174; innerPhi__122 <- r4__179; innerPhi__122 <- r4__173; 
}
// phis: r3 <- merge__132; r3 <- innerPhi__131; r4 <- merge__123; r4 <- innerPhi__122; 
def eff__90 = push_u32(r3);
def eff__88 = push_u32(r4);
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["unlem_scheduler"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_94["Block 94"]
	direction TB
	b94_30["eff__90 push_u32"]
	b94_32["eff__88 push_u32"]
	b94_1[\\"Finish"/]
	b94_30 --> b94_32
	b94_32 --> b94_1
end
phi_122 --> block_94
subgraph phi_122["Phi 122"]
	p122_28{"r3 ϕ"}
	p122_27{"r4 ϕ"}
end
block_123 --> phi_122
block_124 --> phi_122
subgraph block_123["Block 123"]
	direction TB
	b123_46["merge__132 merge"]
	b123_37["merge__123 merge"]
	b123_55["mv_t__141 |True|  [bool.&& [mb__121]]"]
	b123_51["mv_t__137 |True|  [bool.&& [mb__121]]"]
	b123_46 --> b123_37
	b123_37 --> b123_55
	b123_55 --> b123_51
end
phi_131 --> block_123
subgraph phi_131["Phi 131"]
	p131_26{"r3 ϕ"}
	p131_19{"r3 ϕ"}
	p131_25{"r4 ϕ"}
	p131_18{"r4 ϕ"}
end
block_132 --> phi_131
block_133 --> phi_131
subgraph block_132["Block 132"]
	direction TB
	b132_21["r3__97 3"]
	b132_23["r3__95 1"]
	b132_14["r3__102 6"]
	b132_16["r3__100 5"]
	b132_22["r4__96 4"]
	b132_24["r4__94 2"]
	b132_15["r4__101 7"]
	b132_17["r4__99 6"]
	b132_48["merge__134 merge"]
	b132_50["merge__136 merge"]
	b132_42["merge__128 merge"]
	b132_44["merge__130 merge"]
	b132_67["mv_t__153 |True|  [bool.&& [mb__126]]"]
	b132_69["mv_t__155 |True|  [bool.&& [mb__126]]"]
	b132_57["mv_t__143 |True|  [bool.&& [mb__126]]"]
	b132_59["mv_t__145 |True|  [bool.&& [mb__126]]"]
	b132_21 --> b132_23
	b132_23 --> b132_14
	b132_14 --> b132_16
	b132_16 --> b132_22
	b132_22 --> b132_24
	b132_24 --> b132_15
	b132_15 --> b132_17
	b132_17 --> b132_48
	b132_48 --> b132_50
	b132_50 --> b132_42
	b132_42 --> b132_44
	b132_44 --> b132_67
	b132_67 --> b132_69
	b132_69 --> b132_57
	b132_57 --> b132_59
end
branch_130 --> block_132
subgraph branch_130["Branch 130"]
	br130_40["mb__126 bool.&&"]

end
branch_121 --> branch_130
subgraph branch_121["Branch 121"]
	br121_35["mb__121 bool.&&"]

end
block_125 --> branch_121
subgraph block_125["Block 125"]
	direction TB
	b125_0[/"Start"\\]
	b125_9["arg__104 2"]
	b125_3["c1 pop_u32"]
	b125_11["q u32.=="]
	b125_38["mt__124 U32_maybeTrue"]
	b125_39["mf__125 U32_maybeFalse"]
	b125_40["mb__126 bool.&&"]
	b125_6["arg__106 0"]
	b125_8["p u32.!="]
	b125_33["mt__119 U32_maybeTrue"]
	b125_34["mf__120 U32_maybeFalse"]
	b125_35["mb__121 bool.&&"]
	b125_0 --> b125_9
	b125_9 --> b125_3
	b125_3 --> b125_11
	b125_11 --> b125_38
	b125_38 --> b125_39
	b125_39 --> b125_40
	b125_40 --> b125_6
	b125_6 --> b125_8
	b125_8 --> b125_33
	b125_33 --> b125_34
	b125_34 --> b125_35
end
subgraph block_133["Block 133"]
	direction TB
	b133_68["mv_f__154 |False|  [bool.&& [mb__126]]"]
	b133_70["mv_f__156 |False|  [bool.&& [mb__126]]"]
	b133_58["mv_f__144 |False|  [bool.&& [mb__126]]"]
	b133_60["mv_f__146 |False|  [bool.&& [mb__126]]"]
	b133_68 --> b133_70
	b133_70 --> b133_58
	b133_58 --> b133_60
end
phi_143 --> block_133
subgraph phi_143["Phi 143"]
	p143_47{"innerPhi__133 ϕ"}
	p143_49{"innerPhi__135 ϕ"}
	p143_41{"innerPhi__127 ϕ"}
	p143_43{"innerPhi__129 ϕ"}
end
block_144 --> phi_143
block_145 --> phi_143
subgraph block_144["Block 144"]
	direction TB
	b144_89["r3__95__167 1"]
	b144_85["r3__100__163 5"]
	b144_90["r4__94__168 2"]
	b144_86["r4__99__164 6"]
	b144_71["mv_t__157 |True|  [U32_maybeTrue [mt__124]]"]
	b144_73["mv_t__159 |True|  [U32_maybeTrue [mt__124]]"]
	b144_63["mv_t__149 |True|  [U32_maybeTrue [mt__124]]"]
	b144_65["mv_t__151 |True|  [U32_maybeTrue [mt__124]]"]
	b144_89 --> b144_85
	b144_85 --> b144_90
	b144_90 --> b144_86
	b144_86 --> b144_71
	b144_71 --> b144_73
	b144_73 --> b144_63
	b144_63 --> b144_65
end
branch_142 --> block_144
subgraph branch_142["Branch 142"]
	br142_38["mt__124 U32_maybeTrue"]

end
branch_130 --> branch_142
subgraph block_145["Block 145"]
	direction TB
	b145_87["r3__97__165 3"]
	b145_83["r3__102__161 6"]
	b145_88["r4__96__166 4"]
	b145_84["r4__101__162 7"]
	b145_72["mv_f__158 |False|  [U32_maybeTrue [mt__124]]"]
	b145_74["mv_f__160 |False|  [U32_maybeTrue [mt__124]]"]
	b145_64["mv_f__150 |False|  [U32_maybeTrue [mt__124]]"]
	b145_66["mv_f__152 |False|  [U32_maybeTrue [mt__124]]"]
	b145_87 --> b145_83
	b145_83 --> b145_88
	b145_88 --> b145_84
	b145_84 --> b145_72
	b145_72 --> b145_74
	b145_74 --> b145_64
	b145_64 --> b145_66
end
branch_142 --> block_145
subgraph block_124["Block 124"]
	direction TB
	b124_56["mv_f__142 |False|  [bool.&& [mb__121]]"]
	b124_52["mv_f__138 |False|  [bool.&& [mb__121]]"]
	b124_56 --> b124_52
end
phi_127 --> block_124
subgraph phi_127["Phi 127"]
	p127_45{"innerPhi__131 ϕ"}
	p127_36{"innerPhi__122 ϕ"}
end
block_128 --> phi_127
block_129 --> phi_127
subgraph block_128["Block 128"]
	direction TB
	b128_61["mv_t__147 |True|  [U32_maybeTrue [mt__119]]"]
	b128_53["mv_t__139 |True|  [U32_maybeTrue [mt__119]]"]
	b128_61 --> b128_53
end
phi_135 --> block_128
subgraph phi_135["Phi 135"]
	p135_102{"r3__180 ϕ"}
	p135_101{"r4__179 ϕ"}
end
block_136 --> phi_135
block_137 --> phi_135
subgraph block_136["Block 136"]
	direction TB
	b136_97["r3__97__175 3"]
	b136_99["r3__95__177 1"]
	b136_98["r4__96__176 4"]
	b136_100["r4__94__178 2"]
	b136_108["merge__134__186 merge"]
	b136_104["merge__128__182 merge"]
	b136_119["mv_t__153__197 |True|  [bool.&& [mb__126]]"]
	b136_111["mv_t__143__189 |True|  [bool.&& [mb__126]]"]
	b136_97 --> b136_99
	b136_99 --> b136_98
	b136_98 --> b136_100
	b136_100 --> b136_108
	b136_108 --> b136_104
	b136_104 --> b136_119
	b136_119 --> b136_111
end
branch_134 --> block_136
subgraph branch_134["Branch 134"]
	br134_40["mb__126 bool.&&"]

end
branch_126 --> branch_134
subgraph branch_126["Branch 126"]
	br126_33["mt__119 U32_maybeTrue"]

end
branch_121 --> branch_126
subgraph block_137["Block 137"]
	direction TB
	b137_120["mv_f__154__198 |False|  [bool.&& [mb__126]]"]
	b137_112["mv_f__144__190 |False|  [bool.&& [mb__126]]"]
	b137_120 --> b137_112
end
phi_147 --> block_137
subgraph phi_147["Phi 147"]
	p147_107{"innerPhi__133__185 ϕ"}
	p147_103{"innerPhi__127__181 ϕ"}
end
block_148 --> phi_147
block_149 --> phi_147
subgraph block_148["Block 148"]
	direction TB
	b148_133["r3__95__167__211 1"]
	b148_134["r4__94__168__212 2"]
	b148_123["mv_t__157__201 |True|  [U32_maybeTrue [mt__124]]"]
	b148_115["mv_t__149__193 |True|  [U32_maybeTrue [mt__124]]"]
	b148_133 --> b148_134
	b148_134 --> b148_123
	b148_123 --> b148_115
end
branch_146 --> block_148
subgraph branch_146["Branch 146"]
	br146_38["mt__124 U32_maybeTrue"]

end
branch_134 --> branch_146
subgraph block_149["Block 149"]
	direction TB
	b149_131["r3__97__165__209 3"]
	b149_132["r4__96__166__210 4"]
	b149_124["mv_f__158__202 |False|  [U32_maybeTrue [mt__124]]"]
	b149_116["mv_f__150__194 |False|  [U32_maybeTrue [mt__124]]"]
	b149_131 --> b149_132
	b149_132 --> b149_124
	b149_124 --> b149_116
end
branch_146 --> block_149
subgraph block_129["Block 129"]
	direction TB
	b129_62["mv_f__148 |False|  [U32_maybeTrue [mt__119]]"]
	b129_54["mv_f__140 |False|  [U32_maybeTrue [mt__119]]"]
	b129_62 --> b129_54
end
phi_139 --> block_129
subgraph phi_139["Phi 139"]
	p139_96{"r3__174 ϕ"}
	p139_95{"r4__173 ϕ"}
end
block_140 --> phi_139
block_141 --> phi_139
subgraph block_140["Block 140"]
	direction TB
	b140_91["r3__102__169 6"]
	b140_93["r3__100__171 5"]
	b140_92["r4__101__170 7"]
	b140_94["r4__99__172 6"]
	b140_110["merge__136__188 merge"]
	b140_106["merge__130__184 merge"]
	b140_121["mv_t__155__199 |True|  [bool.&& [mb__126]]"]
	b140_113["mv_t__145__191 |True|  [bool.&& [mb__126]]"]
	b140_91 --> b140_93
	b140_93 --> b140_92
	b140_92 --> b140_94
	b140_94 --> b140_110
	b140_110 --> b140_106
	b140_106 --> b140_121
	b140_121 --> b140_113
end
branch_138 --> block_140
subgraph branch_138["Branch 138"]
	br138_40["mb__126 bool.&&"]

end
branch_126 --> branch_138
subgraph block_141["Block 141"]
	direction TB
	b141_122["mv_f__156__200 |False|  [bool.&& [mb__126]]"]
	b141_114["mv_f__146__192 |False|  [bool.&& [mb__126]]"]
	b141_122 --> b141_114
end
phi_151 --> block_141
subgraph phi_151["Phi 151"]
	p151_109{"innerPhi__135__187 ϕ"}
	p151_105{"innerPhi__129__183 ϕ"}
end
block_152 --> phi_151
block_153 --> phi_151
subgraph block_152["Block 152"]
	direction TB
	b152_129["r3__100__163__207 5"]
	b152_130["r4__99__164__208 6"]
	b152_125["mv_t__159__203 |True|  [U32_maybeTrue [mt__124]]"]
	b152_117["mv_t__151__195 |True|  [U32_maybeTrue [mt__124]]"]
	b152_129 --> b152_130
	b152_130 --> b152_125
	b152_125 --> b152_117
end
branch_150 --> block_152
subgraph branch_150["Branch 150"]
	br150_38["mt__124 U32_maybeTrue"]

end
branch_138 --> branch_150
subgraph block_153["Block 153"]
	direction TB
	b153_127["r3__102__161__205 6"]
	b153_128["r4__101__162__206 7"]
	b153_126["mv_f__160__204 |False|  [U32_maybeTrue [mt__124]]"]
	b153_118["mv_f__152__196 |False|  [U32_maybeTrue [mt__124]]"]
	b153_127 --> b153_128
	b153_128 --> b153_126
	b153_126 --> b153_118
end
branch_150 --> block_153

</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["unlem_scheduler_ssa"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["unlem_scheduler_ssa"] += `<pre class=''>def arg__104 : u32 = 2;
def c1 = pop_u32();
def q = u32.==(c1, arg__104);
def mt__124 = U32_maybeTrue(q);
def mf__125 = U32_maybeFalse(q);
def mb__126 = bool.&&(mt__124, mf__125);
def arg__106 : u32 = 0;
def p = u32.!=(c1, arg__106);
def mt__119 = U32_maybeTrue(p);
def mf__120 = U32_maybeFalse(p);
def mb__121 = bool.&&(mt__119, mf__120);
if (mb__121) {
	if (mb__126) {
		def r3__97 : u32 = 3;
		def r3__95 : u32 = 1;
		def r3__102 : u32 = 6;
		def r3__100 : u32 = 5;
		def r4__96 : u32 = 4;
		def r4__94 : u32 = 2;
		def r4__101 : u32 = 7;
		def r4__99 : u32 = 6;
		def merge__134 = merge(r3__95, r3__97);
		def merge__136 = merge(r3__100, r3__102);
		def merge__128 = merge(r4__94, r4__96);
		def merge__130 = merge(r4__99, r4__101);
	} else {
		if (mt__124) {
			def r3__95__167 : u32 = 1;
			def r3__100__163 : u32 = 5;
			def r4__94__168 : u32 = 2;
			def r4__99__164 : u32 = 6;
		} else {
			def r3__97__165 : u32 = 3;
			def r3__102__161 : u32 = 6;
			def r4__96__166 : u32 = 4;
			def r4__101__162 : u32 = 7;
		}
// phis: innerPhi__133 <- r3__95__167; innerPhi__133 <- r3__97__165; innerPhi__135 <- r3__100__163; innerPhi__135 <- r3__102__161; innerPhi__127 <- r4__94__168; innerPhi__127 <- r4__96__166; innerPhi__129 <- r4__99__164; innerPhi__129 <- r4__101__162; 
	}
// phis: r3 <- merge__134; r3 <- innerPhi__133; r3 <- merge__136; r3 <- innerPhi__135; r4 <- merge__128; r4 <- innerPhi__127; r4 <- merge__130; r4 <- innerPhi__129; 
	def merge__132 = merge(r3, r3);
	def merge__123 = merge(r4, r4);
} else {
	if (mt__119) {
		if (mb__126) {
			def r3__97__175 : u32 = 3;
			def r3__97 = (r3__97__175);
			def r3__95__177 : u32 = 1;
			def r3__95 = (r3__95__177);
			def r4__96__176 : u32 = 4;
			def r4__96 = (r4__96__176);
			def r4__94__178 : u32 = 2;
			def r4__94 = (r4__94__178);
			def merge__134__186 = merge(r3__95__177, r3__97__175);
			def merge__134 = (merge__134__186);
			def merge__128__182 = merge(r4__94__178, r4__96__176);
			def merge__128 = (merge__128__182);
		} else {
			if (mt__124) {
				def r3__95__167__211 : u32 = 1;
				def r4__94__168__212 : u32 = 2;
			} else {
				def r3__97__165__209 : u32 = 3;
				def r4__96__166__210 : u32 = 4;
			}
// phis: innerPhi__133__185 <- r3__95__167__211; innerPhi__133__185 <- r3__97__165__209; innerPhi__127__181 <- r4__94__168__212; innerPhi__127__181 <- r4__96__166__210; 
		}
// phis: r3__180 <- merge__134__186; r3__180 <- innerPhi__133__185; r4__179 <- merge__128__182; r4__179 <- innerPhi__127__181; 
	} else {
		if (mb__126) {
			def r3__102__169 : u32 = 6;
			def r3__102 = (r3__102__169);
			def r3__100__171 : u32 = 5;
			def r3__100 = (r3__100__171);
			def r4__101__170 : u32 = 7;
			def r4__101 = (r4__101__170);
			def r4__99__172 : u32 = 6;
			def r4__99 = (r4__99__172);
			def merge__136__188 = merge(r3__100__171, r3__102__169);
			def merge__136 = (merge__136__188);
			def merge__130__184 = merge(r4__99__172, r4__101__170);
			def merge__130 = (merge__130__184);
		} else {
			if (mt__124) {
				def r3__100__163__207 : u32 = 5;
				def r4__99__164__208 : u32 = 6;
			} else {
				def r3__102__161__205 : u32 = 6;
				def r4__101__162__206 : u32 = 7;
			}
// phis: innerPhi__135__187 <- r3__100__163__207; innerPhi__135__187 <- r3__102__161__205; innerPhi__129__183 <- r4__99__164__208; innerPhi__129__183 <- r4__101__162__206; 
		}
// phis: r3__174 <- merge__136__188; r3__174 <- innerPhi__135__187; r4__173 <- merge__130__184; r4__173 <- innerPhi__129__183; 
	}
// phis: innerPhi__131 <- r3__180; innerPhi__131 <- r3__174; innerPhi__122 <- r4__179; innerPhi__122 <- r4__173; 
}
// phis: r3 <- merge__132; r3 <- innerPhi__131; r4 <- merge__123; r4 <- innerPhi__122; 
def eff__90 = push_u32(r3);
def eff__88 = push_u32(r4);
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["unlem_scheduler_ssa_pretty"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["unlem_scheduler_ssa_pretty"] += `<pre class=''>def c1 = pop_u32();
def mt = U32_maybeTrue(u32.==(c1, 2));
def mf = U32_maybeFalse(u32.==(c1, 2));
def mt1 = U32_maybeTrue(u32.!=(c1, 0));
def mf1 = U32_maybeFalse(u32.!=(c1, 0));
var r3: u32;
var r4: u32;
if (bool.&&(mt1, mf1)) {
	if (bool.&&(mt, mf)) {
		r3 = merge(1, 3);
		r3 = merge(5, 6);
		r4 = merge(2, 4);
		r4 = merge(6, 7);
	} else {
		if (mt) {
			r3 = 1;
			r3 = 5;
			r4 = 2;
			r4 = 6;
		} else {
			r3 = 3;
			r3 = 6;
			r4 = 4;
			r4 = 7;
		}
	}
	r3 = merge(r3, r3);
	r4 = merge(r4, r4);
} else {
	if (mt1) {
		if (bool.&&(mt, mf)) {
			r3 = merge(1, 3);
			def merge = (merge__134__186);
			r4 = merge(2, 4);
			def merge1 = (merge__128__182);
		} else {
			if (mt) {
				r3 = 1;
				r4 = 2;
			} else {
				r3 = 3;
				r4 = 4;
			}
		}
	} else {
		if (bool.&&(mt, mf)) {
			r3 = merge(5, 6);
			def merge2 = (merge__136__188);
			r4 = merge(6, 7);
			def merge3 = (merge__130__184);
		} else {
			if (mt) {
				r3 = 5;
				r4 = 6;
			} else {
				r3 = 6;
				r4 = 7;
			}
		}
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
def arg__233 : u32 = 0;
def arg__232 = (c1);
def p = u32.!=(arg__232, arg__233);
def arg__231 : u32 = 0;
def arg__230 = (c3);
def q = u32.!=(arg__230, arg__231);
def arg__229 : u32 = 0;
def arg__228 = (c2);
def r = u32.!=(arg__228, arg__229);
def deep : u32 = 0;
def cond__225 = (q);
if (cond__225) {
	def deep__226 = (A);
} else {
	def deep__227 = (B);
}
// phis: deep <- deep__226; deep <- deep__227; 
def arg__224 : u32 = 0;
def arg__223 = (deep);
def N = u32.+(arg__223, arg__224);
def triv : u32 = 0;
def cond__220 = (r);
if (cond__220) {
	def triv__221 = (N);
} else {
	def triv__222 = (N);
}
// phis: triv <- triv__221; triv <- triv__222; 
def result : u32 = 0;
def cond__215 = (p);
if (cond__215) {
	def result__216 = (triv);
} else {
	def arg__219 : u32 = 1;
	def arg__218 = (A);
	def result__217 = u32.+(arg__218, arg__219);
}
// phis: result <- result__216; result <- result__217; 
def arg__214 = (result);
def eff__213 = push_u32(arg__214);
</pre>`;
window.traces["P3_FRONTIER"]["initial_pretty"] = ''
window.traces["P3_FRONTIER"]["initial_pretty"] += `<pre class=''>def c1 = pop_u32();
def c3 = pop_u32();
def c2 = pop_u32();
def A = pop_u32();
def B = pop_u32();
var deep = 0;
if ((u32.!=((c3), 0))) {
	deep = (A);
} else {
	deep = (B);
}
var triv = 0;
if ((u32.!=((c2), 0))) {
	triv = (u32.+((deep), 0));
} else {
	triv = (u32.+((deep), 0));
}
var result = 0;
if ((u32.!=((c1), 0))) {
	result = (triv);
} else {
	result = u32.+((A), 1);
}
push_u32((result));
</pre>`;
window.traces["P3_FRONTIER"]["raw"] = ''
window.traces["P3_FRONTIER"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	38 -. Stack .-> 1
	38["eff__213 push_u32"]
	36 --> 38
	7 -. Stack .-> 38
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
	36{"result ϕ"}
	10 --> 36
	29 --> 36
	34 --> 36
	34["result__217 u32.+"]
	6 --> 34
	32 --> 34
	32["arg__219 1"]
	29{"triv ϕ"}
	16 --> 29
	24 --> 29
	24 --> 29
	24["N u32.+"]
	21 --> 24
	22 --> 24
	22["arg__224 0"]
	21{"deep ϕ"}
	13 --> 21
	6 --> 21
	7 --> 21
	13["q u32.!="]
	4 --> 13
	11 --> 13
	11["arg__231 0"]
	16["r u32.!="]
	5 --> 16
	14 --> 16
	14["arg__229 0"]
	10["p u32.!="]
	3 --> 10
	8 --> 10
	8["arg__233 0"]
</pre>`;
window.traces["P3_FRONTIER"]["scheduler_start"] = ''
window.traces["P3_FRONTIER"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	38 -. Stack .-> 1
	38["eff__213 push_u32"]
	36 --> 38
	7 -. Stack .-> 38
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
	36{"result ϕ"}
	10 --> 36
	39 --> 36
	40 --> 36
	40["mv_f__235 |False|  [u32.!= [p]]"]
	10 --> 40
	34 --> 40
	34["result__217 u32.+"]
	6 --> 34
	32 --> 34
	32["arg__219 1"]
	10["p u32.!="]
	3 --> 10
	8 --> 10
	8["arg__233 0"]
	39["mv_t__234 |True|  [u32.!= [p]]"]
	10 --> 39
	29 --> 39
	29{"triv ϕ"}
	16 --> 29
	41 --> 29
	42 --> 29
	42["mv_f__237 |False|  [u32.!= [r]]"]
	16 --> 42
	24 --> 42
	24["N u32.+"]
	21 --> 24
	22 --> 24
	22["arg__224 0"]
	21{"deep ϕ"}
	13 --> 21
	43 --> 21
	44 --> 21
	44["mv_f__239 |False|  [u32.!= [q]]"]
	13 --> 44
	7 --> 44
	13["q u32.!="]
	4 --> 13
	11 --> 13
	11["arg__231 0"]
	43["mv_t__238 |True|  [u32.!= [q]]"]
	13 --> 43
	6 --> 43
	16["r u32.!="]
	5 --> 16
	14 --> 16
	14["arg__229 0"]
	41["mv_t__236 |True|  [u32.!= [r]]"]
	16 --> 41
	24 --> 41
</pre>`;
window.traces["P3_FRONTIER"]["untangled"] = ''
window.traces["P3_FRONTIER"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	38 -. Stack .-> 1
	38["eff__213 push_u32"]
	36 --> 38
	7 -. Stack .-> 38
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
	36{"result ϕ"}
	10 --> 36
	39 --> 36
	40 --> 36
	40["mv_f__235 |False|  [u32.!= [p]]"]
	10 --> 40
	34 --> 40
	34["result__217 u32.+"]
	6 --> 34
	32 --> 34
	32["arg__219 1"]
	10["p u32.!="]
	3 --> 10
	8 --> 10
	8["arg__233 0"]
	39["mv_t__234 |True|  [u32.!= [p]]"]
	10 --> 39
	29 --> 39
	29{"triv ϕ"}
	16 --> 29
	41 --> 29
	42 --> 29
	42["mv_f__237 |False|  [u32.!= [r]]"]
	16 --> 42
	24 --> 42
	24["N u32.+"]
	21 --> 24
	22 --> 24
	22["arg__224 0"]
	21{"deep ϕ"}
	13 --> 21
	43 --> 21
	44 --> 21
	44["mv_f__239 |False|  [u32.!= [q]]"]
	13 --> 44
	7 --> 44
	13["q u32.!="]
	4 --> 13
	11 --> 13
	11["arg__231 0"]
	43["mv_t__238 |True|  [u32.!= [q]]"]
	13 --> 43
	6 --> 43
	16["r u32.!="]
	5 --> 16
	14 --> 16
	14["arg__229 0"]
	41["mv_t__236 |True|  [u32.!= [r]]"]
	16 --> 41
	24 --> 41
</pre>`;
window.traces["P3_FRONTIER"]["schedulerMermaid"] = ''
window.traces["P3_FRONTIER"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_154["Block 154"]
	direction TB
	b154_38["eff__213 push_u32"]
	b154_1[\\"Finish"/]
	b154_38 --> b154_1
end
phi_171 --> block_154
subgraph phi_171["Phi 171"]
	p171_36{"result ϕ"}
end
block_172 --> phi_171
block_173 --> phi_171
subgraph block_172["Block 172"]
	direction TB
	b172_39["mv_t__234 |True|  [u32.!= [p]]"]
end
phi_176 --> block_172
subgraph phi_176["Phi 176"]
	p176_29{"triv ϕ"}
end
block_177 --> phi_176
block_178 --> phi_176
subgraph block_177["Block 177"]
	direction TB
	b177_41["mv_t__236 |True|  [u32.!= [r]]"]
end
branch_175 --> block_177
subgraph branch_175["Branch 175"]
	br175_16["r u32.!="]

end
block_179 --> branch_175
subgraph block_179["Block 179"]
	direction TB
	b179_22["arg__224 0"]
	b179_24["N u32.+"]
	b179_14["arg__229 0"]
	b179_16["r u32.!="]
	b179_22 --> b179_24
	b179_24 --> b179_14
	b179_14 --> b179_16
end
phi_181 --> block_179
subgraph phi_181["Phi 181"]
	p181_21{"deep ϕ"}
end
block_182 --> phi_181
block_183 --> phi_181
subgraph block_182["Block 182"]
	direction TB
	b182_43["mv_t__238 |True|  [u32.!= [q]]"]
end
branch_180 --> block_182
subgraph branch_180["Branch 180"]
	br180_13["q u32.!="]

end
block_184 --> branch_180
subgraph block_184["Block 184"]
	direction TB
	b184_11["arg__231 0"]
	b184_13["q u32.!="]
	b184_11 --> b184_13
end
branch_170 --> block_184
subgraph branch_170["Branch 170"]
	br170_10["p u32.!="]

end
block_174 --> branch_170
subgraph block_174["Block 174"]
	direction TB
	b174_0[/"Start"\\]
	b174_3["c1 pop_u32"]
	b174_4["c3 pop_u32"]
	b174_5["c2 pop_u32"]
	b174_6["A pop_u32"]
	b174_7["B pop_u32"]
	b174_8["arg__233 0"]
	b174_10["p u32.!="]
	b174_0 --> b174_3
	b174_3 --> b174_4
	b174_4 --> b174_5
	b174_5 --> b174_6
	b174_6 --> b174_7
	b174_7 --> b174_8
	b174_8 --> b174_10
end
subgraph block_183["Block 183"]
	direction TB
	b183_44["mv_f__239 |False|  [u32.!= [q]]"]
end
branch_180 --> block_183
subgraph block_178["Block 178"]
	direction TB
	b178_42["mv_f__237 |False|  [u32.!= [r]]"]
end
branch_175 --> block_178
subgraph block_173["Block 173"]
	direction TB
	b173_32["arg__219 1"]
	b173_34["result__217 u32.+"]
	b173_40["mv_f__235 |False|  [u32.!= [p]]"]
	b173_32 --> b173_34
	b173_34 --> b173_40
end
branch_170 --> block_173

</pre>`;
window.traces["P3_FRONTIER"]["scheduler_ssad"] = ''
window.traces["P3_FRONTIER"]["scheduler_ssad"] += `<pre class=''>def c1 = pop_u32();
def c3 = pop_u32();
def c2 = pop_u32();
def A = pop_u32();
def B = pop_u32();
def arg__233 : u32 = 0;
def p = u32.!=(c1, arg__233);
if (p) {
	def arg__231 : u32 = 0;
	def q = u32.!=(c3, arg__231);
	if (q) {
	}
// phis: deep <- A; deep <- B; 
	def arg__224 : u32 = 0;
	def N = u32.+(deep, arg__224);
	def arg__229 : u32 = 0;
	def r = u32.!=(c2, arg__229);
	if (r) {
	}
// phis: triv <- N; triv <- N; 
} else {
	def arg__219 : u32 = 1;
	def result__217 = u32.+(A, arg__219);
}
// phis: result <- triv; result <- result__217; 
def eff__213 = push_u32(result);
</pre>`;
window.traces["P3_FRONTIER"]["scheduler_ssad_pretty"] = ''
window.traces["P3_FRONTIER"]["scheduler_ssad_pretty"] += `<pre class=''>def c1 = pop_u32();
def c3 = pop_u32();
def c2 = pop_u32();
def A = pop_u32();
def B = pop_u32();
var result: u32;
if (u32.!=(c1, 0)) {
	var deep: u32;
	if (u32.!=(c3, 0)) {
		deep = A;
	} else {
		deep = B;
	}
	def N = u32.+(deep, 0);
	if (u32.!=(c2, 0)) {
		result = N;
	} else {
		result = N;
	}
} else {
	result = u32.+(A, 1);
}
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
	38 -. Stack .-> 1
	38["eff__213 push_u32"]
	36 --> 38
	7 -. Stack .-> 38
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
	36{"result ϕ"}
	41 --> 36
	43 --> 36
	42 --> 36
	42{"innerPhi__251 ϕ"}
	39 --> 42
	29 --> 42
	34 --> 42
	34["result__217 u32.+"]
	6 --> 34
	32 --> 34
	32["arg__219 1"]
	29{"triv ϕ"}
	46 --> 29
	48 --> 29
	47 --> 29
	47{"innerPhi__256 ϕ"}
	44 --> 47
	24 --> 47
	24 --> 47
	24["N u32.+"]
	21 --> 24
	22 --> 24
	22["arg__224 0"]
	21{"deep ϕ"}
	51 --> 21
	53 --> 21
	52 --> 21
	52{"innerPhi__261 ϕ"}
	49 --> 52
	6 --> 52
	7 --> 52
	49["mt__258 U32_maybeTrue"]
	13 --> 49
	13["q u32.!="]
	4 --> 13
	11 --> 13
	11["arg__231 0"]
	53["merge__262 merge"]
	6 --> 53
	7 --> 53
	51["mb__260 bool.&&"]
	49 --> 51
	50 --> 51
	50["mf__259 U32_maybeFalse"]
	13 --> 50
	44["mt__253 U32_maybeTrue"]
	16 --> 44
	16["r u32.!="]
	5 --> 16
	14 --> 16
	14["arg__229 0"]
	48["merge__257 merge"]
	24 --> 48
	24 --> 48
	46["mb__255 bool.&&"]
	44 --> 46
	45 --> 46
	45["mf__254 U32_maybeFalse"]
	16 --> 45
	39["mt__248 U32_maybeTrue"]
	10 --> 39
	10["p u32.!="]
	3 --> 10
	8 --> 10
	8["arg__233 0"]
	43["merge__252 merge"]
	29 --> 43
	34 --> 43
	41["mb__250 bool.&&"]
	39 --> 41
	40 --> 41
	40["mf__249 U32_maybeFalse"]
	10 --> 40
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
	38 -. Stack .-> 1
	38["eff__213 push_u32"]
	36 --> 38
	7 -. Stack .-> 38
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
	36{"result ϕ"}
	41 --> 36
	54 --> 36
	55 --> 36
	55["mv_f__264 |False|  [bool.&& [mb__250]]"]
	41 --> 55
	42 --> 55
	42{"innerPhi__251 ϕ"}
	39 --> 42
	56 --> 42
	57 --> 42
	57["mv_f__266 |False|  [U32_maybeTrue [mt__248]]"]
	39 --> 57
	34 --> 57
	34["result__217 u32.+"]
	6 --> 34
	32 --> 34
	32["arg__219 1"]
	39["mt__248 U32_maybeTrue"]
	10 --> 39
	10["p u32.!="]
	3 --> 10
	8 --> 10
	8["arg__233 0"]
	56["mv_t__265 |True|  [U32_maybeTrue [mt__248]]"]
	39 --> 56
	29 --> 56
	29{"triv ϕ"}
	46 --> 29
	58 --> 29
	59 --> 29
	59["mv_f__268 |False|  [bool.&& [mb__255]]"]
	46 --> 59
	47 --> 59
	47{"innerPhi__256 ϕ"}
	44 --> 47
	60 --> 47
	61 --> 47
	61["mv_f__270 |False|  [U32_maybeTrue [mt__253]]"]
	44 --> 61
	24 --> 61
	24["N u32.+"]
	21 --> 24
	22 --> 24
	22["arg__224 0"]
	21{"deep ϕ"}
	51 --> 21
	62 --> 21
	63 --> 21
	63["mv_f__272 |False|  [bool.&& [mb__260]]"]
	51 --> 63
	52 --> 63
	52{"innerPhi__261 ϕ"}
	49 --> 52
	64 --> 52
	65 --> 52
	65["mv_f__274 |False|  [U32_maybeTrue [mt__258]]"]
	49 --> 65
	7 --> 65
	49["mt__258 U32_maybeTrue"]
	13 --> 49
	13["q u32.!="]
	4 --> 13
	11 --> 13
	11["arg__231 0"]
	64["mv_t__273 |True|  [U32_maybeTrue [mt__258]]"]
	49 --> 64
	6 --> 64
	51["mb__260 bool.&&"]
	49 --> 51
	50 --> 51
	50["mf__259 U32_maybeFalse"]
	13 --> 50
	62["mv_t__271 |True|  [bool.&& [mb__260]]"]
	51 --> 62
	53 --> 62
	53["merge__262 merge"]
	6 --> 53
	7 --> 53
	44["mt__253 U32_maybeTrue"]
	16 --> 44
	16["r u32.!="]
	5 --> 16
	14 --> 16
	14["arg__229 0"]
	60["mv_t__269 |True|  [U32_maybeTrue [mt__253]]"]
	44 --> 60
	24 --> 60
	46["mb__255 bool.&&"]
	44 --> 46
	45 --> 46
	45["mf__254 U32_maybeFalse"]
	16 --> 45
	58["mv_t__267 |True|  [bool.&& [mb__255]]"]
	46 --> 58
	48 --> 58
	48["merge__257 merge"]
	24 --> 48
	24 --> 48
	41["mb__250 bool.&&"]
	39 --> 41
	40 --> 41
	40["mf__249 U32_maybeFalse"]
	10 --> 40
	54["mv_t__263 |True|  [bool.&& [mb__250]]"]
	41 --> 54
	43 --> 54
	43["merge__252 merge"]
	29 --> 43
	34 --> 43
</pre>`;
window.traces["P3_FRONTIER_ul"]["untangled"] = ''
window.traces["P3_FRONTIER_ul"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	38 -. Stack .-> 1
	38["eff__213 push_u32"]
	36 --> 38
	7 -. Stack .-> 38
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
	36{"result ϕ"}
	41 --> 36
	54 --> 36
	55 --> 36
	55["mv_f__264 |False|  [bool.&& [mb__250]]"]
	41 --> 55
	42 --> 55
	42{"innerPhi__251 ϕ"}
	39 --> 42
	56 --> 42
	57 --> 42
	57["mv_f__266 |False|  [U32_maybeTrue [mt__248]]"]
	39 --> 57
	34 --> 57
	34["result__217 u32.+"]
	6 --> 34
	32 --> 34
	32["arg__219 1"]
	39["mt__248 U32_maybeTrue"]
	10 --> 39
	10["p u32.!="]
	3 --> 10
	8 --> 10
	8["arg__233 0"]
	56["mv_t__265 |True|  [U32_maybeTrue [mt__248]]"]
	39 --> 56
	29 --> 56
	29{"triv ϕ"}
	46 --> 29
	58 --> 29
	59 --> 29
	59["mv_f__268 |False|  [bool.&& [mb__255]]"]
	46 --> 59
	47 --> 59
	47{"innerPhi__256 ϕ"}
	44 --> 47
	60 --> 47
	61 --> 47
	61["mv_f__270 |False|  [U32_maybeTrue [mt__253]]"]
	44 --> 61
	24 --> 61
	24["N u32.+"]
	21 --> 24
	22 --> 24
	22["arg__224 0"]
	21{"deep ϕ"}
	51 --> 21
	62 --> 21
	63 --> 21
	63["mv_f__272 |False|  [bool.&& [mb__260]]"]
	51 --> 63
	52 --> 63
	52{"innerPhi__261 ϕ"}
	49 --> 52
	64 --> 52
	65 --> 52
	65["mv_f__274 |False|  [U32_maybeTrue [mt__258]]"]
	49 --> 65
	7 --> 65
	49["mt__258 U32_maybeTrue"]
	13 --> 49
	13["q u32.!="]
	4 --> 13
	11 --> 13
	11["arg__231 0"]
	64["mv_t__273 |True|  [U32_maybeTrue [mt__258]]"]
	49 --> 64
	6 --> 64
	51["mb__260 bool.&&"]
	49 --> 51
	50 --> 51
	50["mf__259 U32_maybeFalse"]
	13 --> 50
	62["mv_t__271 |True|  [bool.&& [mb__260]]"]
	51 --> 62
	53 --> 62
	53["merge__262 merge"]
	6 --> 53
	7 --> 53
	44["mt__253 U32_maybeTrue"]
	16 --> 44
	16["r u32.!="]
	5 --> 16
	14 --> 16
	14["arg__229 0"]
	60["mv_t__269 |True|  [U32_maybeTrue [mt__253]]"]
	44 --> 60
	24 --> 60
	46["mb__255 bool.&&"]
	44 --> 46
	45 --> 46
	45["mf__254 U32_maybeFalse"]
	16 --> 45
	58["mv_t__267 |True|  [bool.&& [mb__255]]"]
	46 --> 58
	48 --> 58
	48["merge__257 merge"]
	24 --> 48
	24 --> 48
	41["mb__250 bool.&&"]
	39 --> 41
	40 --> 41
	40["mf__249 U32_maybeFalse"]
	10 --> 40
	54["mv_t__263 |True|  [bool.&& [mb__250]]"]
	41 --> 54
	43 --> 54
	43["merge__252 merge"]
	29 --> 43
	34 --> 43
</pre>`;
window.traces["P3_FRONTIER"]["unlem_schedule"] = ''
window.traces["P3_FRONTIER"]["unlem_schedule"] += `<pre class=''>def c1 = pop_u32();
def c3 = pop_u32();
def c2 = pop_u32();
def A = pop_u32();
def arg__231 : u32 = 0;
def B = pop_u32();
def q = u32.!=(c3, arg__231);
def mt__258 = U32_maybeTrue(q);
def mf__259 = U32_maybeFalse(q);
def mb__260 = bool.&&(mt__258, mf__259);
if (mb__260) {
	def merge__262 = merge(A, B);
} else {
	if (mt__258) {
	}
// phis: innerPhi__261 <- A; innerPhi__261 <- B; 
}
// phis: deep <- merge__262; deep <- innerPhi__261; 
def arg__224 : u32 = 0;
def arg__229 : u32 = 0;
def N = u32.+(deep, arg__224);
def r = u32.!=(c2, arg__229);
def mt__253 = U32_maybeTrue(r);
def mf__254 = U32_maybeFalse(r);
def mb__255 = bool.&&(mt__253, mf__254);
if (mb__255) {
	def merge__257 = merge(N, N);
} else {
	if (mt__253) {
	}
// phis: innerPhi__256 <- N; innerPhi__256 <- N; 
}
// phis: triv <- merge__257; triv <- innerPhi__256; 
def arg__219 : u32 = 1;
def arg__233 : u32 = 0;
def result__217 = u32.+(A, arg__219);
def p = u32.!=(c1, arg__233);
def mt__248 = U32_maybeTrue(p);
def mf__249 = U32_maybeFalse(p);
def mb__250 = bool.&&(mt__248, mf__249);
if (mb__250) {
	def merge__252 = merge(triv, result__217);
} else {
	if (mt__248) {
	}
// phis: innerPhi__251 <- triv; innerPhi__251 <- result__217; 
}
// phis: result <- merge__252; result <- innerPhi__251; 
def eff__213 = push_u32(result);
</pre>`;
window.traces["P3_FRONTIER"]["unlem_scheduler"] = ''
window.traces["P3_FRONTIER"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_185["Block 185"]
	direction TB
	b185_38["eff__213 push_u32"]
	b185_1[\\"Finish"/]
	b185_38 --> b185_1
end
phi_217 --> block_185
subgraph phi_217["Phi 217"]
	p217_36{"result ϕ"}
end
block_218 --> phi_217
block_219 --> phi_217
subgraph block_218["Block 218"]
	direction TB
	b218_43["merge__252 merge"]
	b218_54["mv_t__263 |True|  [bool.&& [mb__250]]"]
	b218_43 --> b218_54
end
branch_216 --> block_218
subgraph branch_216["Branch 216"]
	br216_41["mb__250 bool.&&"]

end
block_220 --> branch_216
subgraph block_220["Block 220"]
	direction TB
	b220_32["arg__219 1"]
	b220_8["arg__233 0"]
	b220_34["result__217 u32.+"]
	b220_10["p u32.!="]
	b220_39["mt__248 U32_maybeTrue"]
	b220_40["mf__249 U32_maybeFalse"]
	b220_41["mb__250 bool.&&"]
	b220_32 --> b220_8
	b220_8 --> b220_34
	b220_34 --> b220_10
	b220_10 --> b220_39
	b220_39 --> b220_40
	b220_40 --> b220_41
end
phi_226 --> block_220
subgraph phi_226["Phi 226"]
	p226_29{"triv ϕ"}
end
block_227 --> phi_226
block_228 --> phi_226
subgraph block_227["Block 227"]
	direction TB
	b227_48["merge__257 merge"]
	b227_58["mv_t__267 |True|  [bool.&& [mb__255]]"]
	b227_48 --> b227_58
end
branch_225 --> block_227
subgraph branch_225["Branch 225"]
	br225_46["mb__255 bool.&&"]

end
block_229 --> branch_225
subgraph block_229["Block 229"]
	direction TB
	b229_22["arg__224 0"]
	b229_14["arg__229 0"]
	b229_24["N u32.+"]
	b229_16["r u32.!="]
	b229_44["mt__253 U32_maybeTrue"]
	b229_45["mf__254 U32_maybeFalse"]
	b229_46["mb__255 bool.&&"]
	b229_22 --> b229_14
	b229_14 --> b229_24
	b229_24 --> b229_16
	b229_16 --> b229_44
	b229_44 --> b229_45
	b229_45 --> b229_46
end
phi_235 --> block_229
subgraph phi_235["Phi 235"]
	p235_21{"deep ϕ"}
end
block_236 --> phi_235
block_237 --> phi_235
subgraph block_236["Block 236"]
	direction TB
	b236_53["merge__262 merge"]
	b236_62["mv_t__271 |True|  [bool.&& [mb__260]]"]
	b236_53 --> b236_62
end
branch_234 --> block_236
subgraph branch_234["Branch 234"]
	br234_51["mb__260 bool.&&"]

end
block_238 --> branch_234
subgraph block_238["Block 238"]
	direction TB
	b238_0[/"Start"\\]
	b238_3["c1 pop_u32"]
	b238_4["c3 pop_u32"]
	b238_5["c2 pop_u32"]
	b238_6["A pop_u32"]
	b238_11["arg__231 0"]
	b238_7["B pop_u32"]
	b238_13["q u32.!="]
	b238_49["mt__258 U32_maybeTrue"]
	b238_50["mf__259 U32_maybeFalse"]
	b238_51["mb__260 bool.&&"]
	b238_0 --> b238_3
	b238_3 --> b238_4
	b238_4 --> b238_5
	b238_5 --> b238_6
	b238_6 --> b238_11
	b238_11 --> b238_7
	b238_7 --> b238_13
	b238_13 --> b238_49
	b238_49 --> b238_50
	b238_50 --> b238_51
end
subgraph block_237["Block 237"]
	direction TB
	b237_63["mv_f__272 |False|  [bool.&& [mb__260]]"]
end
phi_240 --> block_237
subgraph phi_240["Phi 240"]
	p240_52{"innerPhi__261 ϕ"}
end
block_241 --> phi_240
block_242 --> phi_240
subgraph block_241["Block 241"]
	direction TB
	b241_64["mv_t__273 |True|  [U32_maybeTrue [mt__258]]"]
end
branch_239 --> block_241
subgraph branch_239["Branch 239"]
	br239_49["mt__258 U32_maybeTrue"]

end
branch_234 --> branch_239
subgraph block_242["Block 242"]
	direction TB
	b242_65["mv_f__274 |False|  [U32_maybeTrue [mt__258]]"]
end
branch_239 --> block_242
subgraph block_228["Block 228"]
	direction TB
	b228_59["mv_f__268 |False|  [bool.&& [mb__255]]"]
end
phi_231 --> block_228
subgraph phi_231["Phi 231"]
	p231_47{"innerPhi__256 ϕ"}
end
block_232 --> phi_231
block_233 --> phi_231
subgraph block_232["Block 232"]
	direction TB
	b232_60["mv_t__269 |True|  [U32_maybeTrue [mt__253]]"]
end
branch_230 --> block_232
subgraph branch_230["Branch 230"]
	br230_44["mt__253 U32_maybeTrue"]

end
branch_225 --> branch_230
subgraph block_233["Block 233"]
	direction TB
	b233_61["mv_f__270 |False|  [U32_maybeTrue [mt__253]]"]
end
branch_230 --> block_233
subgraph block_219["Block 219"]
	direction TB
	b219_55["mv_f__264 |False|  [bool.&& [mb__250]]"]
end
phi_222 --> block_219
subgraph phi_222["Phi 222"]
	p222_42{"innerPhi__251 ϕ"}
end
block_223 --> phi_222
block_224 --> phi_222
subgraph block_223["Block 223"]
	direction TB
	b223_56["mv_t__265 |True|  [U32_maybeTrue [mt__248]]"]
end
branch_221 --> block_223
subgraph branch_221["Branch 221"]
	br221_39["mt__248 U32_maybeTrue"]

end
branch_216 --> branch_221
subgraph block_224["Block 224"]
	direction TB
	b224_57["mv_f__266 |False|  [U32_maybeTrue [mt__248]]"]
end
branch_221 --> block_224

</pre>`;
window.traces["P3_FRONTIER"]["unlem_scheduler_ssa"] = ''
window.traces["P3_FRONTIER"]["unlem_scheduler_ssa"] += `<pre class=''>def c1 = pop_u32();
def c3 = pop_u32();
def c2 = pop_u32();
def A = pop_u32();
def arg__231 : u32 = 0;
def B = pop_u32();
def q = u32.!=(c3, arg__231);
def mt__258 = U32_maybeTrue(q);
def mf__259 = U32_maybeFalse(q);
def mb__260 = bool.&&(mt__258, mf__259);
if (mb__260) {
	def merge__262 = merge(A, B);
} else {
	if (mt__258) {
	}
// phis: innerPhi__261 <- A; innerPhi__261 <- B; 
}
// phis: deep <- merge__262; deep <- innerPhi__261; 
def arg__224 : u32 = 0;
def arg__229 : u32 = 0;
def N = u32.+(deep, arg__224);
def r = u32.!=(c2, arg__229);
def mt__253 = U32_maybeTrue(r);
def mf__254 = U32_maybeFalse(r);
def mb__255 = bool.&&(mt__253, mf__254);
if (mb__255) {
	def merge__257 = merge(N, N);
} else {
	if (mt__253) {
	}
// phis: innerPhi__256 <- N; innerPhi__256 <- N; 
}
// phis: triv <- merge__257; triv <- innerPhi__256; 
def arg__219 : u32 = 1;
def arg__233 : u32 = 0;
def result__217 = u32.+(A, arg__219);
def p = u32.!=(c1, arg__233);
def mt__248 = U32_maybeTrue(p);
def mf__249 = U32_maybeFalse(p);
def mb__250 = bool.&&(mt__248, mf__249);
if (mb__250) {
	def merge__252 = merge(triv, result__217);
} else {
	if (mt__248) {
	}
// phis: innerPhi__251 <- triv; innerPhi__251 <- result__217; 
}
// phis: result <- merge__252; result <- innerPhi__251; 
def eff__213 = push_u32(result);
</pre>`;
window.traces["P3_FRONTIER"]["unlem_scheduler_ssa_pretty"] = ''
window.traces["P3_FRONTIER"]["unlem_scheduler_ssa_pretty"] += `<pre class=''>def c1 = pop_u32();
def c3 = pop_u32();
def c2 = pop_u32();
def A = pop_u32();
def B = pop_u32();
def mt = U32_maybeTrue(u32.!=(c3, 0));
def mf = U32_maybeFalse(u32.!=(c3, 0));
var deep: u32;
if (bool.&&(mt, mf)) {
	deep = merge(A, B);
} else {
	if (mt) {
		deep = A;
	} else {
		deep = B;
	}
}
def N = u32.+(deep, 0);
def mt1 = U32_maybeTrue(u32.!=(c2, 0));
def mf1 = U32_maybeFalse(u32.!=(c2, 0));
var triv: u32;
if (bool.&&(mt1, mf1)) {
	triv = merge(N, N);
} else {
	if (mt1) {
		triv = N;
	} else {
		triv = N;
	}
}
var result = u32.+(A, 1);
def mt2 = U32_maybeTrue(u32.!=(c1, 0));
def mf2 = U32_maybeFalse(u32.!=(c1, 0));
if (bool.&&(mt2, mf2)) {
	result = merge(triv, result);
} else {
	if (mt2) {
	}
}
push_u32(result);
</pre>`;
window.traces["EFFECT_LIFT_OVER_PARENT_COND"] = {}
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["parsed"] = ''
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["parsed"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def arg__315 : u32 = 0;
def arg__314 = (c1);
def p = u32.!=(arg__314, arg__315);
def arg__313 : u32 = 0;
def arg__312 = (c2);
def q = u32.!=(arg__312, arg__313);
def x : u32 = 0;
def cond__309 = (p);
if (cond__309) {
	def x__310 = pop_u32();
} else {
	def x__311 : u32 = 7;
}
// phis: x <- x__310; x <- x__311; 
def y : u32 = 0;
def cond__304 = (q);
if (cond__304) {
	def arg__307 : u32 = 1;
	def arg__306 = (x);
	def y__305 = u32.+(arg__306, arg__307);
} else {
	def y__308 : u32 = 9;
}
// phis: y <- y__305; y <- y__308; 
def z : u32 = 0;
def cond__301 = (p);
if (cond__301) {
	def z__302 = (y);
} else {
	def z__303 : u32 = 3;
}
// phis: z <- z__302; z <- z__303; 
def arg__300 = (z);
def eff__299 = push_u32(arg__300);
</pre>`;
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["initial_pretty"] = ''
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["initial_pretty"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
var x = 0;
if ((u32.!=((c1), 0))) {
	x = pop_u32();
} else {
	x = 7;
}
var y = 0;
if ((u32.!=((c2), 0))) {
	y = u32.+((x), 1);
} else {
	y = 9;
}
var z = 0;
if ((u32.!=((c1), 0))) {
	z = (y);
} else {
	z = 3;
}
push_u32((z));
</pre>`;
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["raw"] = ''
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	30 -. Stack .-> 1
	30["eff__299 push_u32"]
	28 --> 30
	16 -. Stack .-> 30
	16{{"sea__316 Sϕ Stack "}}
	7 --> 16
	14 --> 16
	4 --> 16
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["x__310 pop_u32"]
	4 -. Stack .-> 14
	7["p u32.!="]
	3 --> 7
	5 --> 7
	5["arg__315 0"]
	28{"z ϕ"}
	7 --> 28
	23 --> 28
	26 --> 28
	26["z__303 3"]
	23{"y ϕ"}
	10 --> 23
	22 --> 23
	19 --> 23
	19["y__308 9"]
	22["y__305 u32.+"]
	15 --> 22
	20 --> 22
	20["arg__307 1"]
	15{"x ϕ"}
	7 --> 15
	14 --> 15
	13 --> 15
	13["x__311 7"]
	10["q u32.!="]
	4 --> 10
	8 --> 10
	8["arg__313 0"]
</pre>`;
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["scheduler_start"] = ''
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	30 -. Stack .-> 1
	30["eff__299 push_u32"]
	28 --> 30
	16 -. Stack .-> 30
	16{{"sea__316 Sϕ Stack "}}
	7 --> 16
	33 --> 16
	34 --> 16
	34["mv_f__320 |False|  [u32.!= [p]]"]
	7 --> 34
	4 -. Stack .-> 34
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	7["p u32.!="]
	3 --> 7
	5 --> 7
	5["arg__315 0"]
	33["mv_t__319 |True|  [u32.!= [p]]"]
	7 --> 33
	14 -. Stack .-> 33
	14["x__310 pop_u32"]
	4 -. Stack .-> 14
	28{"z ϕ"}
	7 --> 28
	31 --> 28
	32 --> 28
	32["mv_f__318 |False|  [u32.!= [p]]"]
	7 --> 32
	26 --> 32
	26["z__303 3"]
	31["mv_t__317 |True|  [u32.!= [p]]"]
	7 --> 31
	23 --> 31
	23{"y ϕ"}
	10 --> 23
	35 --> 23
	36 --> 23
	36["mv_f__322 |False|  [u32.!= [q]]"]
	10 --> 36
	19 --> 36
	19["y__308 9"]
	10["q u32.!="]
	4 --> 10
	8 --> 10
	8["arg__313 0"]
	35["mv_t__321 |True|  [u32.!= [q]]"]
	10 --> 35
	22 --> 35
	22["y__305 u32.+"]
	15 --> 22
	20 --> 22
	20["arg__307 1"]
	15{"x ϕ"}
	7 --> 15
	37 --> 15
	38 --> 15
	38["mv_f__324 |False|  [u32.!= [p]]"]
	7 --> 38
	13 --> 38
	13["x__311 7"]
	37["mv_t__323 |True|  [u32.!= [p]]"]
	7 --> 37
	14 --> 37
</pre>`;
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["untangled"] = ''
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	30 -. Stack .-> 1
	30["eff__299 push_u32"]
	28 --> 30
	16 -. Stack .-> 30
	16{{"sea__316 Sϕ Stack "}}
	7 --> 16
	33 --> 16
	34 --> 16
	34["mv_f__320 |False|  [u32.!= [p]]"]
	7 --> 34
	4 -. Stack .-> 34
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	7["p u32.!="]
	3 --> 7
	5 --> 7
	5["arg__315 0"]
	33["mv_t__319 |True|  [u32.!= [p]]"]
	7 --> 33
	14 -. Stack .-> 33
	14["x__310 pop_u32"]
	4 -. Stack .-> 14
	28{"z ϕ"}
	7 --> 28
	31 --> 28
	32 --> 28
	32["mv_f__318 |False|  [u32.!= [p]]"]
	7 --> 32
	26 --> 32
	26["z__303 3"]
	31["mv_t__317 |True|  [u32.!= [p]]"]
	7 --> 31
	23 --> 31
	23{"y ϕ"}
	10 --> 23
	35 --> 23
	36 --> 23
	36["mv_f__322 |False|  [u32.!= [q]]"]
	10 --> 36
	19 --> 36
	19["y__308 9"]
	10["q u32.!="]
	4 --> 10
	8 --> 10
	8["arg__313 0"]
	35["mv_t__321 |True|  [u32.!= [q]]"]
	10 --> 35
	22 --> 35
	22["y__305 u32.+"]
	15 --> 22
	20 --> 22
	20["arg__307 1"]
	15{"x ϕ"}
	7 --> 15
	37 --> 15
	38 --> 15
	38["mv_f__324 |False|  [u32.!= [p]]"]
	7 --> 38
	13 --> 38
	13["x__311 7"]
	37["mv_t__323 |True|  [u32.!= [p]]"]
	7 --> 37
	14 --> 37
</pre>`;
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["schedulerMermaid"] = ''
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_243["Block 243"]
	direction TB
	b243_30["eff__299 push_u32"]
	b243_1[\\"Finish"/]
	b243_30 --> b243_1
end
phi_248 --> block_243
subgraph phi_248["Phi 248"]
	p248_28{"z ϕ"}
	p248_16{{"sea__316 Sϕ Stack "}}
end
block_249 --> phi_248
block_250 --> phi_248
subgraph block_249["Block 249"]
	direction TB
	b249_31["mv_t__317 |True|  [u32.!= [p]]"]
	b249_33["mv_t__319 |True|  [u32.!= [p]]"]
	b249_31 --> b249_33
end
phi_252 --> block_249
subgraph phi_252["Phi 252"]
	p252_23{"y ϕ"}
end
block_253 --> phi_252
block_254 --> phi_252
subgraph block_253["Block 253"]
	direction TB
	b253_20["arg__307 1"]
	b253_22["y__305 u32.+"]
	b253_35["mv_t__321 |True|  [u32.!= [q]]"]
	b253_20 --> b253_22
	b253_22 --> b253_35
end
phi_257 --> block_253
subgraph phi_257["Phi 257"]
	p257_15{"x ϕ"}
end
block_258 --> phi_257
block_259 --> phi_257
subgraph block_258["Block 258"]
	direction TB
	b258_37["mv_t__323 |True|  [u32.!= [p]]"]
end
branch_256 --> block_258
subgraph branch_256["Branch 256"]
	br256_7["p u32.!="]

end
branch_251 --> branch_256
subgraph branch_251["Branch 251"]
	br251_10["q u32.!="]

end
block_255 --> branch_251
subgraph block_255["Block 255"]
	direction TB
	b255_14["x__310 pop_u32"]
	b255_8["arg__313 0"]
	b255_10["q u32.!="]
	b255_14 --> b255_8
	b255_8 --> b255_10
end
branch_247 --> block_255
subgraph branch_247["Branch 247"]
	br247_7["p u32.!="]

end
block_260 --> branch_247
subgraph block_260["Block 260"]
	direction TB
	b260_0[/"Start"\\]
	b260_3["c1 pop_u32"]
	b260_4["c2 pop_u32"]
	b260_5["arg__315 0"]
	b260_7["p u32.!="]
	b260_0 --> b260_3
	b260_3 --> b260_4
	b260_4 --> b260_5
	b260_5 --> b260_7
end
subgraph block_259["Block 259"]
	direction TB
	b259_13["x__311 7"]
	b259_38["mv_f__324 |False|  [u32.!= [p]]"]
	b259_13 --> b259_38
end
branch_256 --> block_259
subgraph block_254["Block 254"]
	direction TB
	b254_19["y__308 9"]
	b254_36["mv_f__322 |False|  [u32.!= [q]]"]
	b254_19 --> b254_36
end
branch_251 --> block_254
subgraph block_250["Block 250"]
	direction TB
	b250_26["z__303 3"]
	b250_32["mv_f__318 |False|  [u32.!= [p]]"]
	b250_34["mv_f__320 |False|  [u32.!= [p]]"]
	b250_26 --> b250_32
	b250_32 --> b250_34
end
branch_247 --> block_250

</pre>`;
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["scheduler_ssad"] = ''
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["scheduler_ssad"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def arg__315 : u32 = 0;
def p = u32.!=(c1, arg__315);
if (p) {
	def x__310 = pop_u32();
	def arg__313 : u32 = 0;
	def q = u32.!=(c2, arg__313);
	if (q) {
		if (p) {
		} else {
			def x__311 : u32 = 7;
		}
// phis: x <- x__310; x <- x__311; 
		def arg__307 : u32 = 1;
		def y__305 = u32.+(x, arg__307);
	} else {
		def y__308 : u32 = 9;
	}
// phis: y <- y__305; y <- y__308; 
} else {
	def z__303 : u32 = 3;
}
// phis: z <- y; z <- z__303; 
def eff__299 = push_u32(z);
</pre>`;
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["scheduler_ssad_pretty"] = ''
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["scheduler_ssad_pretty"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
var z: u32;
if (u32.!=(c1, 0)) {
	var x = pop_u32();
	if (u32.!=(c2, 0)) {
		if (u32.!=(c1, 0)) {
		} else {
			x = 7;
		}
		z = u32.+(x, 1);
	} else {
		z = 9;
	}
} else {
	z = 3;
}
push_u32(z);
</pre>`;
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["unLEM"] = ''
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	30 -. Stack .-> 1
	30["eff__299 push_u32"]
	28 --> 30
	16 -. Stack .-> 30
	16{{"sea__316 Sϕ Stack "}}
	33 --> 16
	37 --> 16
	36 --> 16
	36{{"innerPhi__330 Sϕ Stack "}}
	31 --> 36
	14 --> 36
	4 --> 36
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["x__310 pop_u32"]
	4 -. Stack .-> 14
	31["mt__325 U32_maybeTrue"]
	7 --> 31
	7["p u32.!="]
	3 --> 7
	5 --> 7
	5["arg__315 0"]
	37["eff_merge__331 merge"]
	14 --> 37
	4 --> 37
	33["mb__327 bool.&&"]
	31 --> 33
	32 --> 33
	32["mf__326 U32_maybeFalse"]
	7 --> 32
	28{"z ϕ"}
	33 --> 28
	35 --> 28
	34 --> 28
	34{"innerPhi__328 ϕ"}
	31 --> 34
	23 --> 34
	26 --> 34
	26["z__303 3"]
	23{"y ϕ"}
	40 --> 23
	42 --> 23
	41 --> 23
	41{"innerPhi__335 ϕ"}
	38 --> 41
	22 --> 41
	19 --> 41
	19["y__308 9"]
	22["y__305 u32.+"]
	15 --> 22
	20 --> 22
	20["arg__307 1"]
	15{"x ϕ"}
	33 --> 15
	44 --> 15
	43 --> 15
	43{"innerPhi__337 ϕ"}
	31 --> 43
	14 --> 43
	13 --> 43
	13["x__311 7"]
	44["merge__338 merge"]
	14 --> 44
	13 --> 44
	38["mt__332 U32_maybeTrue"]
	10 --> 38
	10["q u32.!="]
	4 --> 10
	8 --> 10
	8["arg__313 0"]
	42["merge__336 merge"]
	22 --> 42
	19 --> 42
	40["mb__334 bool.&&"]
	38 --> 40
	39 --> 40
	39["mf__333 U32_maybeFalse"]
	10 --> 39
	35["merge__329 merge"]
	23 --> 35
	26 --> 35
</pre>`;
window.traces["EFFECT_LIFT_OVER_PARENT_COND_ul"] = {}
window.traces["EFFECT_LIFT_OVER_PARENT_COND_ul"]["scheduler_start"] = ''
window.traces["EFFECT_LIFT_OVER_PARENT_COND_ul"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	30 -. Stack .-> 1
	30["eff__299 push_u32"]
	28 --> 30
	16 -. Stack .-> 30
	16{{"sea__316 Sϕ Stack "}}
	33 --> 16
	47 --> 16
	48 --> 16
	48["mv_f__342 |False|  [bool.&& [mb__327]]"]
	33 --> 48
	36 -. Stack .-> 48
	36{{"innerPhi__330 Sϕ Stack "}}
	31 --> 36
	51 --> 36
	52 --> 36
	52["mv_f__346 |False|  [U32_maybeTrue [mt__325]]"]
	31 --> 52
	4 -. Stack .-> 52
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	31["mt__325 U32_maybeTrue"]
	7 --> 31
	7["p u32.!="]
	3 --> 7
	5 --> 7
	5["arg__315 0"]
	51["mv_t__345 |True|  [U32_maybeTrue [mt__325]]"]
	31 --> 51
	14 -. Stack .-> 51
	14["x__310 pop_u32"]
	4 -. Stack .-> 14
	33["mb__327 bool.&&"]
	31 --> 33
	32 --> 33
	32["mf__326 U32_maybeFalse"]
	7 --> 32
	47["mv_t__341 |True|  [bool.&& [mb__327]]"]
	33 --> 47
	37 -. Stack .-> 47
	37["eff_merge__331 merge"]
	14 --> 37
	4 --> 37
	28{"z ϕ"}
	33 --> 28
	45 --> 28
	46 --> 28
	46["mv_f__340 |False|  [bool.&& [mb__327]]"]
	33 --> 46
	34 --> 46
	34{"innerPhi__328 ϕ"}
	31 --> 34
	49 --> 34
	50 --> 34
	50["mv_f__344 |False|  [U32_maybeTrue [mt__325]]"]
	31 --> 50
	26 --> 50
	26["z__303 3"]
	49["mv_t__343 |True|  [U32_maybeTrue [mt__325]]"]
	31 --> 49
	23 --> 49
	23{"y ϕ"}
	40 --> 23
	53 --> 23
	54 --> 23
	54["mv_f__348 |False|  [bool.&& [mb__334]]"]
	40 --> 54
	41 --> 54
	41{"innerPhi__335 ϕ"}
	38 --> 41
	55 --> 41
	56 --> 41
	56["mv_f__350 |False|  [U32_maybeTrue [mt__332]]"]
	38 --> 56
	19 --> 56
	19["y__308 9"]
	38["mt__332 U32_maybeTrue"]
	10 --> 38
	10["q u32.!="]
	4 --> 10
	8 --> 10
	8["arg__313 0"]
	55["mv_t__349 |True|  [U32_maybeTrue [mt__332]]"]
	38 --> 55
	22 --> 55
	22["y__305 u32.+"]
	15 --> 22
	20 --> 22
	20["arg__307 1"]
	15{"x ϕ"}
	33 --> 15
	57 --> 15
	58 --> 15
	58["mv_f__352 |False|  [bool.&& [mb__327]]"]
	33 --> 58
	43 --> 58
	43{"innerPhi__337 ϕ"}
	31 --> 43
	59 --> 43
	60 --> 43
	60["mv_f__354 |False|  [U32_maybeTrue [mt__325]]"]
	31 --> 60
	13 --> 60
	13["x__311 7"]
	59["mv_t__353 |True|  [U32_maybeTrue [mt__325]]"]
	31 --> 59
	14 --> 59
	57["mv_t__351 |True|  [bool.&& [mb__327]]"]
	33 --> 57
	44 --> 57
	44["merge__338 merge"]
	14 --> 44
	13 --> 44
	40["mb__334 bool.&&"]
	38 --> 40
	39 --> 40
	39["mf__333 U32_maybeFalse"]
	10 --> 39
	53["mv_t__347 |True|  [bool.&& [mb__334]]"]
	40 --> 53
	42 --> 53
	42["merge__336 merge"]
	22 --> 42
	19 --> 42
	45["mv_t__339 |True|  [bool.&& [mb__327]]"]
	33 --> 45
	35 --> 45
	35["merge__329 merge"]
	23 --> 35
	26 --> 35
</pre>`;
window.traces["EFFECT_LIFT_OVER_PARENT_COND_ul"]["untangled"] = ''
window.traces["EFFECT_LIFT_OVER_PARENT_COND_ul"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	30 -. Stack .-> 1
	30["eff__299 push_u32"]
	28 --> 30
	16 -. Stack .-> 30
	16{{"sea__316 Sϕ Stack "}}
	33 --> 16
	47 --> 16
	48 --> 16
	48["mv_f__342 |False|  [bool.&& [mb__327]]"]
	33 --> 48
	36 -. Stack .-> 48
	36{{"innerPhi__330 Sϕ Stack "}}
	31 --> 36
	51 --> 36
	52 --> 36
	52["mv_f__346 |False|  [U32_maybeTrue [mt__325]]"]
	31 --> 52
	4 -. Stack .-> 52
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	31["mt__325 U32_maybeTrue"]
	7 --> 31
	7["p u32.!="]
	3 --> 7
	5 --> 7
	5["arg__315 0"]
	51["mv_t__345 |True|  [U32_maybeTrue [mt__325]]"]
	31 --> 51
	94 -. Stack .-> 51
	94["x__310__376 pop_u32"]
	4 -. Stack .-> 94
	33["mb__327 bool.&&"]
	31 --> 33
	32 --> 33
	32["mf__326 U32_maybeFalse"]
	7 --> 32
	47["mv_t__341 |True|  [bool.&& [mb__327]]"]
	33 --> 47
	37 -. Stack .-> 47
	37["eff_merge__331 merge"]
	14 --> 37
	4 --> 37
	14["x__310 pop_u32"]
	4 -. Stack .-> 14
	28{"z ϕ"}
	33 --> 28
	45 --> 28
	46 --> 28
	46["mv_f__340 |False|  [bool.&& [mb__327]]"]
	33 --> 46
	34 --> 46
	34{"innerPhi__328 ϕ"}
	31 --> 34
	49 --> 34
	50 --> 34
	50["mv_f__344 |False|  [U32_maybeTrue [mt__325]]"]
	31 --> 50
	100 --> 50
	100["z__303__382 3"]
	49["mv_t__343 |True|  [U32_maybeTrue [mt__325]]"]
	31 --> 49
	99 --> 49
	99{"y__381 ϕ"}
	103 --> 99
	108 --> 99
	109 --> 99
	109["mv_f__348__391 |False|  [bool.&& [mb__334__385]]"]
	103 --> 109
	104 --> 109
	104{"innerPhi__335__386 ϕ"}
	101 --> 104
	110 --> 104
	111 --> 104
	111["mv_f__350__393 |False|  [U32_maybeTrue [mt__332__383]]"]
	101 --> 111
	121 --> 111
	121["y__308__360__403 9"]
	101["mt__332__383 U32_maybeTrue"]
	92 --> 101
	92["q__374 u32.!="]
	4 --> 92
	91 --> 92
	91["arg__313__373 0"]
	110["mv_t__349__392 |True|  [U32_maybeTrue [mt__332__383]]"]
	101 --> 110
	123 --> 110
	123["y__305__362__405 u32.+"]
	120 --> 123
	122 --> 123
	122["arg__307__361__404 1"]
	120{"x__359__402 ϕ"}
	126 --> 120
	129 --> 120
	130 --> 120
	130["mv_f__352__369__412 |False|  [bool.&& [mb__327__365__408]]"]
	126 --> 130
	127 --> 130
	127{"innerPhi__337__366__409 ϕ"}
	124 --> 127
	131 --> 127
	132 --> 127
	132["mv_f__354__371__414 |False|  [U32_maybeTrue [mt__325__363__406]]"]
	124 --> 132
	133 --> 132
	133["x__311__355__372__415 7"]
	124["mt__325__363__406 U32_maybeTrue"]
	118 --> 124
	118["p__357__400 u32.!="]
	3 --> 118
	117 --> 118
	117["arg__315__356__399 0"]
	131["mv_t__353__370__413 |True|  [U32_maybeTrue [mt__325__363__406]]"]
	124 --> 131
	94 --> 131
	126["mb__327__365__408 bool.&&"]
	124 --> 126
	125 --> 126
	125["mf__326__364__407 U32_maybeFalse"]
	118 --> 125
	129["mv_t__351__368__411 |True|  [bool.&& [mb__327__365__408]]"]
	126 --> 129
	128 --> 129
	128["merge__338__367__410 merge"]
	94 --> 128
	119 --> 128
	119["x__311__358__401 7"]
	103["mb__334__385 bool.&&"]
	101 --> 103
	102 --> 103
	102["mf__333__384 U32_maybeFalse"]
	92 --> 102
	108["mv_t__347__390 |True|  [bool.&& [mb__334__385]]"]
	103 --> 108
	105 --> 108
	105["merge__336__387 merge"]
	98 --> 105
	96 --> 105
	96["y__308__378 9"]
	98["y__305__380 u32.+"]
	95 --> 98
	97 --> 98
	97["arg__307__379 1"]
	95{"x__377 ϕ"}
	33 --> 95
	112 --> 95
	113 --> 95
	113["mv_f__352__395 |False|  [bool.&& [mb__327]]"]
	33 --> 113
	106 --> 113
	106{"innerPhi__337__388 ϕ"}
	31 --> 106
	114 --> 106
	115 --> 106
	115["mv_f__354__397 |False|  [U32_maybeTrue [mt__325]]"]
	31 --> 115
	116 --> 115
	116["x__311__355__398 7"]
	114["mv_t__353__396 |True|  [U32_maybeTrue [mt__325]]"]
	31 --> 114
	94 --> 114
	112["mv_t__351__394 |True|  [bool.&& [mb__327]]"]
	33 --> 112
	107 --> 112
	107["merge__338__389 merge"]
	94 --> 107
	93 --> 107
	93["x__311__375 7"]
	45["mv_t__339 |True|  [bool.&& [mb__327]]"]
	33 --> 45
	35 --> 45
	35["merge__329 merge"]
	23 --> 35
	26 --> 35
	26["z__303 3"]
	23{"y ϕ"}
	40 --> 23
	53 --> 23
	54 --> 23
	54["mv_f__348 |False|  [bool.&& [mb__334]]"]
	40 --> 54
	41 --> 54
	41{"innerPhi__335 ϕ"}
	38 --> 41
	55 --> 41
	56 --> 41
	56["mv_f__350 |False|  [U32_maybeTrue [mt__332]]"]
	38 --> 56
	74 --> 56
	74["y__308__360 9"]
	38["mt__332 U32_maybeTrue"]
	10 --> 38
	10["q u32.!="]
	4 --> 10
	8 --> 10
	8["arg__313 0"]
	55["mv_t__349 |True|  [U32_maybeTrue [mt__332]]"]
	38 --> 55
	76 --> 55
	76["y__305__362 u32.+"]
	73 --> 76
	75 --> 76
	75["arg__307__361 1"]
	73{"x__359 ϕ"}
	79 --> 73
	82 --> 73
	83 --> 73
	83["mv_f__352__369 |False|  [bool.&& [mb__327__365]]"]
	79 --> 83
	80 --> 83
	80{"innerPhi__337__366 ϕ"}
	77 --> 80
	84 --> 80
	85 --> 80
	85["mv_f__354__371 |False|  [U32_maybeTrue [mt__325__363]]"]
	77 --> 85
	86 --> 85
	86["x__311__355__372 7"]
	77["mt__325__363 U32_maybeTrue"]
	71 --> 77
	71["p__357 u32.!="]
	3 --> 71
	70 --> 71
	70["arg__315__356 0"]
	84["mv_t__353__370 |True|  [U32_maybeTrue [mt__325__363]]"]
	77 --> 84
	14 --> 84
	79["mb__327__365 bool.&&"]
	77 --> 79
	78 --> 79
	78["mf__326__364 U32_maybeFalse"]
	71 --> 78
	82["mv_t__351__368 |True|  [bool.&& [mb__327__365]]"]
	79 --> 82
	81 --> 82
	81["merge__338__367 merge"]
	14 --> 81
	72 --> 81
	72["x__311__358 7"]
	40["mb__334 bool.&&"]
	38 --> 40
	39 --> 40
	39["mf__333 U32_maybeFalse"]
	10 --> 39
	53["mv_t__347 |True|  [bool.&& [mb__334]]"]
	40 --> 53
	42 --> 53
	42["merge__336 merge"]
	22 --> 42
	19 --> 42
	19["y__308 9"]
	22["y__305 u32.+"]
	15 --> 22
	20 --> 22
	20["arg__307 1"]
	15{"x ϕ"}
	33 --> 15
	57 --> 15
	58 --> 15
	58["mv_f__352 |False|  [bool.&& [mb__327]]"]
	33 --> 58
	43 --> 58
	43{"innerPhi__337 ϕ"}
	31 --> 43
	59 --> 43
	60 --> 43
	60["mv_f__354 |False|  [U32_maybeTrue [mt__325]]"]
	31 --> 60
	69 --> 60
	69["x__311__355 7"]
	59["mv_t__353 |True|  [U32_maybeTrue [mt__325]]"]
	31 --> 59
	14 --> 59
	57["mv_t__351 |True|  [bool.&& [mb__327]]"]
	33 --> 57
	44 --> 57
	44["merge__338 merge"]
	14 --> 44
	13 --> 44
	13["x__311 7"]
</pre>`;
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["unlem_schedule"] = ''
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["unlem_schedule"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def arg__315 : u32 = 0;
def p = u32.!=(c1, arg__315);
def mt__325 = U32_maybeTrue(p);
def mf__326 = U32_maybeFalse(p);
def mb__327 = bool.&&(mt__325, mf__326);
if (mb__327) {
	def x__310 = pop_u32();
	def arg__313 : u32 = 0;
	def q = u32.!=(c2, arg__313);
	def mt__332 = U32_maybeTrue(q);
	def mf__333 = U32_maybeFalse(q);
	def mb__334 = bool.&&(mt__332, mf__333);
	if (mb__334) {
		if (mb__327) {
			def x__311 : u32 = 7;
			def merge__338 = merge(x__310, x__311);
		} else {
			if (mt__325) {
			} else {
				def x__311__355 : u32 = 7;
			}
// phis: innerPhi__337 <- x__310; innerPhi__337 <- x__311__355; 
		}
// phis: x <- merge__338; x <- innerPhi__337; 
		def arg__307 : u32 = 1;
		def y__308 : u32 = 9;
		def y__305 = u32.+(x, arg__307);
		def merge__336 = merge(y__305, y__308);
	} else {
		if (mt__332) {
			def arg__315__356 : u32 = 0;
			def arg__315 = (arg__315__356);
			def p__357 = u32.!=(c1, arg__315__356);
			def p = (p__357);
			def mt__325__363 = U32_maybeTrue(p__357);
			def mf__326__364 = U32_maybeFalse(p__357);
			def mb__327__365 = bool.&&(mt__325__363, mf__326__364);
			if (mb__327__365) {
				def x__311__358 : u32 = 7;
				def merge__338__367 = merge(x__310, x__311__358);
			} else {
				if (mt__325__363) {
				} else {
					def x__311__355__372 : u32 = 7;
				}
// phis: innerPhi__337__366 <- x__310; innerPhi__337__366 <- x__311__355__372; 
			}
// phis: x__359 <- merge__338__367; x__359 <- innerPhi__337__366; 
			def arg__307__361 : u32 = 1;
			def y__305__362 = u32.+(x__359, arg__307__361);
		} else {
			def y__308__360 : u32 = 9;
		}
// phis: innerPhi__335 <- y__305__362; innerPhi__335 <- y__308__360; 
	}
// phis: y <- merge__336; y <- innerPhi__335; 
	def z__303 : u32 = 3;
	def merge__329 = merge(y, z__303);
	def eff_merge__331 = merge(x__310, c2);
} else {
	if (mt__325) {
		def x__310__376 = pop_u32();
		def x__310 = (x__310__376);
		def arg__313__373 : u32 = 0;
		def arg__313 = (arg__313__373);
		def q__374 = u32.!=(c2, arg__313__373);
		def q = (q__374);
		def mt__332__383 = U32_maybeTrue(q__374);
		def mt__332 = (mt__332__383);
		def mf__333__384 = U32_maybeFalse(q__374);
		def mf__333 = (mf__333__384);
		def mb__334__385 = bool.&&(mt__332__383, mf__333__384);
		def mb__334 = (mb__334__385);
		if (mb__334__385) {
			if (mb__327) {
				def x__311__375 : u32 = 7;
				def x__311 = (x__311__375);
				def merge__338__389 = merge(x__310__376, x__311__375);
				def merge__338 = (merge__338__389);
			} else {
				if (mt__325) {
				} else {
					def x__311__355__398 : u32 = 7;
				}
// phis: innerPhi__337__388 <- x__310__376; innerPhi__337__388 <- x__311__355__398; 
			}
// phis: x__377 <- merge__338__389; x__377 <- innerPhi__337__388; 
			def arg__307__379 : u32 = 1;
			def arg__307 = (arg__307__379);
			def y__308__378 : u32 = 9;
			def y__308 = (y__308__378);
			def y__305__380 = u32.+(x__377, arg__307__379);
			def y__305 = (y__305__380);
			def merge__336__387 = merge(y__305__380, y__308__378);
			def merge__336 = (merge__336__387);
		} else {
			if (mt__332__383) {
				def arg__315__356__399 : u32 = 0;
				def p__357__400 = u32.!=(c1, arg__315__356__399);
				def mt__325__363__406 = U32_maybeTrue(p__357__400);
				def mf__326__364__407 = U32_maybeFalse(p__357__400);
				def mb__327__365__408 = bool.&&(mt__325__363__406, mf__326__364__407);
				if (mb__327__365__408) {
					def x__311__358__401 : u32 = 7;
					def merge__338__367__410 = merge(x__310__376, x__311__358__401);
				} else {
					if (mt__325__363__406) {
					} else {
						def x__311__355__372__415 : u32 = 7;
					}
// phis: innerPhi__337__366__409 <- x__310__376; innerPhi__337__366__409 <- x__311__355__372__415; 
				}
// phis: x__359__402 <- merge__338__367__410; x__359__402 <- innerPhi__337__366__409; 
				def arg__307__361__404 : u32 = 1;
				def y__305__362__405 = u32.+(x__359__402, arg__307__361__404);
			} else {
				def y__308__360__403 : u32 = 9;
			}
// phis: innerPhi__335__386 <- y__305__362__405; innerPhi__335__386 <- y__308__360__403; 
		}
// phis: y__381 <- merge__336__387; y__381 <- innerPhi__335__386; 
	} else {
		def z__303__382 : u32 = 3;
		def z__303 = (z__303__382);
	}
// phis: innerPhi__328 <- y__381; innerPhi__328 <- z__303__382; 
}
// phis: z <- merge__329; z <- innerPhi__328; 
def eff__299 = push_u32(z);
</pre>`;
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["unlem_scheduler"] = ''
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_261["Block 261"]
	direction TB
	b261_30["eff__299 push_u32"]
	b261_1[\\"Finish"/]
	b261_30 --> b261_1
end
phi_297 --> block_261
subgraph phi_297["Phi 297"]
	p297_28{"z ϕ"}
	p297_16{{"sea__316 Sϕ Stack "}}
end
block_298 --> phi_297
block_299 --> phi_297
subgraph block_298["Block 298"]
	direction TB
	b298_26["z__303 3"]
	b298_35["merge__329 merge"]
	b298_37["eff_merge__331 merge"]
	b298_45["mv_t__339 |True|  [bool.&& [mb__327]]"]
	b298_47["mv_t__341 |True|  [bool.&& [mb__327]]"]
	b298_26 --> b298_35
	b298_35 --> b298_37
	b298_37 --> b298_45
	b298_45 --> b298_47
end
phi_305 --> block_298
subgraph phi_305["Phi 305"]
	p305_23{"y ϕ"}
end
block_306 --> phi_305
block_307 --> phi_305
subgraph block_306["Block 306"]
	direction TB
	b306_20["arg__307 1"]
	b306_19["y__308 9"]
	b306_22["y__305 u32.+"]
	b306_42["merge__336 merge"]
	b306_53["mv_t__347 |True|  [bool.&& [mb__334]]"]
	b306_20 --> b306_19
	b306_19 --> b306_22
	b306_22 --> b306_42
	b306_42 --> b306_53
end
phi_323 --> block_306
subgraph phi_323["Phi 323"]
	p323_15{"x ϕ"}
end
block_324 --> phi_323
block_325 --> phi_323
subgraph block_324["Block 324"]
	direction TB
	b324_13["x__311 7"]
	b324_44["merge__338 merge"]
	b324_57["mv_t__351 |True|  [bool.&& [mb__327]]"]
	b324_13 --> b324_44
	b324_44 --> b324_57
end
branch_322 --> block_324
subgraph branch_322["Branch 322"]
	br322_33["mb__327 bool.&&"]

end
branch_304 --> branch_322
subgraph branch_304["Branch 304"]
	br304_40["mb__334 bool.&&"]

end
block_308 --> branch_304
subgraph block_308["Block 308"]
	direction TB
	b308_14["x__310 pop_u32"]
	b308_8["arg__313 0"]
	b308_10["q u32.!="]
	b308_38["mt__332 U32_maybeTrue"]
	b308_39["mf__333 U32_maybeFalse"]
	b308_40["mb__334 bool.&&"]
	b308_14 --> b308_8
	b308_8 --> b308_10
	b308_10 --> b308_38
	b308_38 --> b308_39
	b308_39 --> b308_40
end
branch_296 --> block_308
subgraph branch_296["Branch 296"]
	br296_33["mb__327 bool.&&"]

end
block_339 --> branch_296
subgraph block_339["Block 339"]
	direction TB
	b339_0[/"Start"\\]
	b339_3["c1 pop_u32"]
	b339_4["c2 pop_u32"]
	b339_5["arg__315 0"]
	b339_7["p u32.!="]
	b339_31["mt__325 U32_maybeTrue"]
	b339_32["mf__326 U32_maybeFalse"]
	b339_33["mb__327 bool.&&"]
	b339_0 --> b339_3
	b339_3 --> b339_4
	b339_4 --> b339_5
	b339_5 --> b339_7
	b339_7 --> b339_31
	b339_31 --> b339_32
	b339_32 --> b339_33
end
subgraph block_325["Block 325"]
	direction TB
	b325_58["mv_f__352 |False|  [bool.&& [mb__327]]"]
end
phi_335 --> block_325
subgraph phi_335["Phi 335"]
	p335_43{"innerPhi__337 ϕ"}
end
block_336 --> phi_335
block_337 --> phi_335
subgraph block_336["Block 336"]
	direction TB
	b336_59["mv_t__353 |True|  [U32_maybeTrue [mt__325]]"]
end
branch_334 --> block_336
subgraph branch_334["Branch 334"]
	br334_31["mt__325 U32_maybeTrue"]

end
branch_322 --> branch_334
subgraph block_337["Block 337"]
	direction TB
	b337_69["x__311__355 7"]
	b337_60["mv_f__354 |False|  [U32_maybeTrue [mt__325]]"]
	b337_69 --> b337_60
end
branch_334 --> block_337
subgraph block_307["Block 307"]
	direction TB
	b307_54["mv_f__348 |False|  [bool.&& [mb__334]]"]
end
phi_314 --> block_307
subgraph phi_314["Phi 314"]
	p314_41{"innerPhi__335 ϕ"}
end
block_315 --> phi_314
block_316 --> phi_314
subgraph block_315["Block 315"]
	direction TB
	b315_75["arg__307__361 1"]
	b315_76["y__305__362 u32.+"]
	b315_55["mv_t__349 |True|  [U32_maybeTrue [mt__332]]"]
	b315_75 --> b315_76
	b315_76 --> b315_55
end
phi_327 --> block_315
subgraph phi_327["Phi 327"]
	p327_73{"x__359 ϕ"}
end
block_328 --> phi_327
block_329 --> phi_327
subgraph block_328["Block 328"]
	direction TB
	b328_72["x__311__358 7"]
	b328_81["merge__338__367 merge"]
	b328_82["mv_t__351__368 |True|  [bool.&& [mb__327__365]]"]
	b328_72 --> b328_81
	b328_81 --> b328_82
end
branch_326 --> block_328
subgraph branch_326["Branch 326"]
	br326_79["mb__327__365 bool.&&"]

end
block_338 --> branch_326
subgraph block_338["Block 338"]
	direction TB
	b338_70["arg__315__356 0"]
	b338_71["p__357 u32.!="]
	b338_77["mt__325__363 U32_maybeTrue"]
	b338_78["mf__326__364 U32_maybeFalse"]
	b338_79["mb__327__365 bool.&&"]
	b338_70 --> b338_71
	b338_71 --> b338_77
	b338_77 --> b338_78
	b338_78 --> b338_79
end
branch_313 --> block_338
subgraph branch_313["Branch 313"]
	br313_38["mt__332 U32_maybeTrue"]

end
branch_304 --> branch_313
subgraph block_329["Block 329"]
	direction TB
	b329_83["mv_f__352__369 |False|  [bool.&& [mb__327__365]]"]
end
phi_345 --> block_329
subgraph phi_345["Phi 345"]
	p345_80{"innerPhi__337__366 ϕ"}
end
block_346 --> phi_345
block_347 --> phi_345
subgraph block_346["Block 346"]
	direction TB
	b346_84["mv_t__353__370 |True|  [U32_maybeTrue [mt__325__363]]"]
end
branch_344 --> block_346
subgraph branch_344["Branch 344"]
	br344_77["mt__325__363 U32_maybeTrue"]

end
branch_326 --> branch_344
subgraph block_347["Block 347"]
	direction TB
	b347_86["x__311__355__372 7"]
	b347_85["mv_f__354__371 |False|  [U32_maybeTrue [mt__325__363]]"]
	b347_86 --> b347_85
end
branch_344 --> block_347
subgraph block_316["Block 316"]
	direction TB
	b316_74["y__308__360 9"]
	b316_56["mv_f__350 |False|  [U32_maybeTrue [mt__332]]"]
	b316_74 --> b316_56
end
branch_313 --> block_316
subgraph block_299["Block 299"]
	direction TB
	b299_46["mv_f__340 |False|  [bool.&& [mb__327]]"]
	b299_48["mv_f__342 |False|  [bool.&& [mb__327]]"]
	b299_46 --> b299_48
end
phi_301 --> block_299
subgraph phi_301["Phi 301"]
	p301_34{"innerPhi__328 ϕ"}
	p301_36{{"innerPhi__330 Sϕ Stack "}}
end
block_302 --> phi_301
block_303 --> phi_301
subgraph block_302["Block 302"]
	direction TB
	b302_49["mv_t__343 |True|  [U32_maybeTrue [mt__325]]"]
	b302_51["mv_t__345 |True|  [U32_maybeTrue [mt__325]]"]
	b302_49 --> b302_51
end
phi_310 --> block_302
subgraph phi_310["Phi 310"]
	p310_99{"y__381 ϕ"}
end
block_311 --> phi_310
block_312 --> phi_310
subgraph block_311["Block 311"]
	direction TB
	b311_97["arg__307__379 1"]
	b311_96["y__308__378 9"]
	b311_98["y__305__380 u32.+"]
	b311_105["merge__336__387 merge"]
	b311_108["mv_t__347__390 |True|  [bool.&& [mb__334__385]]"]
	b311_97 --> b311_96
	b311_96 --> b311_98
	b311_98 --> b311_105
	b311_105 --> b311_108
end
phi_331 --> block_311
subgraph phi_331["Phi 331"]
	p331_95{"x__377 ϕ"}
end
block_332 --> phi_331
block_333 --> phi_331
subgraph block_332["Block 332"]
	direction TB
	b332_93["x__311__375 7"]
	b332_107["merge__338__389 merge"]
	b332_112["mv_t__351__394 |True|  [bool.&& [mb__327]]"]
	b332_93 --> b332_107
	b332_107 --> b332_112
end
branch_330 --> block_332
subgraph branch_330["Branch 330"]
	br330_33["mb__327 bool.&&"]

end
branch_309 --> branch_330
subgraph branch_309["Branch 309"]
	br309_103["mb__334__385 bool.&&"]

end
block_317 --> branch_309
subgraph block_317["Block 317"]
	direction TB
	b317_94["x__310__376 pop_u32"]
	b317_91["arg__313__373 0"]
	b317_92["q__374 u32.!="]
	b317_101["mt__332__383 U32_maybeTrue"]
	b317_102["mf__333__384 U32_maybeFalse"]
	b317_103["mb__334__385 bool.&&"]
	b317_94 --> b317_91
	b317_91 --> b317_92
	b317_92 --> b317_101
	b317_101 --> b317_102
	b317_102 --> b317_103
end
branch_300 --> block_317
subgraph branch_300["Branch 300"]
	br300_31["mt__325 U32_maybeTrue"]

end
branch_296 --> branch_300
subgraph block_333["Block 333"]
	direction TB
	b333_113["mv_f__352__395 |False|  [bool.&& [mb__327]]"]
end
phi_349 --> block_333
subgraph phi_349["Phi 349"]
	p349_106{"innerPhi__337__388 ϕ"}
end
block_350 --> phi_349
block_351 --> phi_349
subgraph block_350["Block 350"]
	direction TB
	b350_114["mv_t__353__396 |True|  [U32_maybeTrue [mt__325]]"]
end
branch_348 --> block_350
subgraph branch_348["Branch 348"]
	br348_31["mt__325 U32_maybeTrue"]

end
branch_330 --> branch_348
subgraph block_351["Block 351"]
	direction TB
	b351_116["x__311__355__398 7"]
	b351_115["mv_f__354__397 |False|  [U32_maybeTrue [mt__325]]"]
	b351_116 --> b351_115
end
branch_348 --> block_351
subgraph block_312["Block 312"]
	direction TB
	b312_109["mv_f__348__391 |False|  [bool.&& [mb__334__385]]"]
end
phi_319 --> block_312
subgraph phi_319["Phi 319"]
	p319_104{"innerPhi__335__386 ϕ"}
end
block_320 --> phi_319
block_321 --> phi_319
subgraph block_320["Block 320"]
	direction TB
	b320_122["arg__307__361__404 1"]
	b320_123["y__305__362__405 u32.+"]
	b320_110["mv_t__349__392 |True|  [U32_maybeTrue [mt__332__383]]"]
	b320_122 --> b320_123
	b320_123 --> b320_110
end
phi_341 --> block_320
subgraph phi_341["Phi 341"]
	p341_120{"x__359__402 ϕ"}
end
block_342 --> phi_341
block_343 --> phi_341
subgraph block_342["Block 342"]
	direction TB
	b342_119["x__311__358__401 7"]
	b342_128["merge__338__367__410 merge"]
	b342_129["mv_t__351__368__411 |True|  [bool.&& [mb__327__365__408]]"]
	b342_119 --> b342_128
	b342_128 --> b342_129
end
branch_340 --> block_342
subgraph branch_340["Branch 340"]
	br340_126["mb__327__365__408 bool.&&"]

end
block_352 --> branch_340
subgraph block_352["Block 352"]
	direction TB
	b352_117["arg__315__356__399 0"]
	b352_118["p__357__400 u32.!="]
	b352_124["mt__325__363__406 U32_maybeTrue"]
	b352_125["mf__326__364__407 U32_maybeFalse"]
	b352_126["mb__327__365__408 bool.&&"]
	b352_117 --> b352_118
	b352_118 --> b352_124
	b352_124 --> b352_125
	b352_125 --> b352_126
end
branch_318 --> block_352
subgraph branch_318["Branch 318"]
	br318_101["mt__332__383 U32_maybeTrue"]

end
branch_309 --> branch_318
subgraph block_343["Block 343"]
	direction TB
	b343_130["mv_f__352__369__412 |False|  [bool.&& [mb__327__365__408]]"]
end
phi_354 --> block_343
subgraph phi_354["Phi 354"]
	p354_127{"innerPhi__337__366__409 ϕ"}
end
block_355 --> phi_354
block_356 --> phi_354
subgraph block_355["Block 355"]
	direction TB
	b355_131["mv_t__353__370__413 |True|  [U32_maybeTrue [mt__325__363__406]]"]
end
branch_353 --> block_355
subgraph branch_353["Branch 353"]
	br353_124["mt__325__363__406 U32_maybeTrue"]

end
branch_340 --> branch_353
subgraph block_356["Block 356"]
	direction TB
	b356_133["x__311__355__372__415 7"]
	b356_132["mv_f__354__371__414 |False|  [U32_maybeTrue [mt__325__363__406]]"]
	b356_133 --> b356_132
end
branch_353 --> block_356
subgraph block_321["Block 321"]
	direction TB
	b321_121["y__308__360__403 9"]
	b321_111["mv_f__350__393 |False|  [U32_maybeTrue [mt__332__383]]"]
	b321_121 --> b321_111
end
branch_318 --> block_321
subgraph block_303["Block 303"]
	direction TB
	b303_100["z__303__382 3"]
	b303_50["mv_f__344 |False|  [U32_maybeTrue [mt__325]]"]
	b303_52["mv_f__346 |False|  [U32_maybeTrue [mt__325]]"]
	b303_100 --> b303_50
	b303_50 --> b303_52
end
branch_300 --> block_303

</pre>`;
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["unlem_scheduler_ssa"] = ''
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["unlem_scheduler_ssa"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def arg__315 : u32 = 0;
def p = u32.!=(c1, arg__315);
def mt__325 = U32_maybeTrue(p);
def mf__326 = U32_maybeFalse(p);
def mb__327 = bool.&&(mt__325, mf__326);
if (mb__327) {
	def x__310 = pop_u32();
	def arg__313 : u32 = 0;
	def q = u32.!=(c2, arg__313);
	def mt__332 = U32_maybeTrue(q);
	def mf__333 = U32_maybeFalse(q);
	def mb__334 = bool.&&(mt__332, mf__333);
	if (mb__334) {
		if (mb__327) {
			def x__311 : u32 = 7;
			def merge__338 = merge(x__310, x__311);
		} else {
			if (mt__325) {
			} else {
				def x__311__355 : u32 = 7;
			}
// phis: innerPhi__337 <- x__310; innerPhi__337 <- x__311__355; 
		}
// phis: x <- merge__338; x <- innerPhi__337; 
		def arg__307 : u32 = 1;
		def y__308 : u32 = 9;
		def y__305 = u32.+(x, arg__307);
		def merge__336 = merge(y__305, y__308);
	} else {
		if (mt__332) {
			def arg__315__356 : u32 = 0;
			def arg__315 = (arg__315__356);
			def p__357 = u32.!=(c1, arg__315__356);
			def p = (p__357);
			def mt__325__363 = U32_maybeTrue(p__357);
			def mf__326__364 = U32_maybeFalse(p__357);
			def mb__327__365 = bool.&&(mt__325__363, mf__326__364);
			if (mb__327__365) {
				def x__311__358 : u32 = 7;
				def merge__338__367 = merge(x__310, x__311__358);
			} else {
				if (mt__325__363) {
				} else {
					def x__311__355__372 : u32 = 7;
				}
// phis: innerPhi__337__366 <- x__310; innerPhi__337__366 <- x__311__355__372; 
			}
// phis: x__359 <- merge__338__367; x__359 <- innerPhi__337__366; 
			def arg__307__361 : u32 = 1;
			def y__305__362 = u32.+(x__359, arg__307__361);
		} else {
			def y__308__360 : u32 = 9;
		}
// phis: innerPhi__335 <- y__305__362; innerPhi__335 <- y__308__360; 
	}
// phis: y <- merge__336; y <- innerPhi__335; 
	def z__303 : u32 = 3;
	def merge__329 = merge(y, z__303);
	def eff_merge__331 = merge(x__310, c2);
} else {
	if (mt__325) {
		def x__310__376 = pop_u32();
		def x__310 = (x__310__376);
		def arg__313__373 : u32 = 0;
		def arg__313 = (arg__313__373);
		def q__374 = u32.!=(c2, arg__313__373);
		def q = (q__374);
		def mt__332__383 = U32_maybeTrue(q__374);
		def mt__332 = (mt__332__383);
		def mf__333__384 = U32_maybeFalse(q__374);
		def mf__333 = (mf__333__384);
		def mb__334__385 = bool.&&(mt__332__383, mf__333__384);
		def mb__334 = (mb__334__385);
		if (mb__334__385) {
			if (mb__327) {
				def x__311__375 : u32 = 7;
				def x__311 = (x__311__375);
				def merge__338__389 = merge(x__310__376, x__311__375);
				def merge__338 = (merge__338__389);
			} else {
				if (mt__325) {
				} else {
					def x__311__355__398 : u32 = 7;
				}
// phis: innerPhi__337__388 <- x__310__376; innerPhi__337__388 <- x__311__355__398; 
			}
// phis: x__377 <- merge__338__389; x__377 <- innerPhi__337__388; 
			def arg__307__379 : u32 = 1;
			def arg__307 = (arg__307__379);
			def y__308__378 : u32 = 9;
			def y__308 = (y__308__378);
			def y__305__380 = u32.+(x__377, arg__307__379);
			def y__305 = (y__305__380);
			def merge__336__387 = merge(y__305__380, y__308__378);
			def merge__336 = (merge__336__387);
		} else {
			if (mt__332__383) {
				def arg__315__356__399 : u32 = 0;
				def p__357__400 = u32.!=(c1, arg__315__356__399);
				def mt__325__363__406 = U32_maybeTrue(p__357__400);
				def mf__326__364__407 = U32_maybeFalse(p__357__400);
				def mb__327__365__408 = bool.&&(mt__325__363__406, mf__326__364__407);
				if (mb__327__365__408) {
					def x__311__358__401 : u32 = 7;
					def merge__338__367__410 = merge(x__310__376, x__311__358__401);
				} else {
					if (mt__325__363__406) {
					} else {
						def x__311__355__372__415 : u32 = 7;
					}
// phis: innerPhi__337__366__409 <- x__310__376; innerPhi__337__366__409 <- x__311__355__372__415; 
				}
// phis: x__359__402 <- merge__338__367__410; x__359__402 <- innerPhi__337__366__409; 
				def arg__307__361__404 : u32 = 1;
				def y__305__362__405 = u32.+(x__359__402, arg__307__361__404);
			} else {
				def y__308__360__403 : u32 = 9;
			}
// phis: innerPhi__335__386 <- y__305__362__405; innerPhi__335__386 <- y__308__360__403; 
		}
// phis: y__381 <- merge__336__387; y__381 <- innerPhi__335__386; 
	} else {
		def z__303__382 : u32 = 3;
		def z__303 = (z__303__382);
	}
// phis: innerPhi__328 <- y__381; innerPhi__328 <- z__303__382; 
}
// phis: z <- merge__329; z <- innerPhi__328; 
def eff__299 = push_u32(z);
</pre>`;
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["unlem_scheduler_ssa_pretty"] = ''
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["unlem_scheduler_ssa_pretty"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def mt = U32_maybeTrue(u32.!=(c1, 0));
def mf = U32_maybeFalse(u32.!=(c1, 0));
var z: u32;
if (bool.&&(mt, mf)) {
	var x = pop_u32();
	def mt1 = U32_maybeTrue(u32.!=(c2, 0));
	def mf1 = U32_maybeFalse(u32.!=(c2, 0));
	var y: u32;
	if (bool.&&(mt1, mf1)) {
		if (bool.&&(mt, mf)) {
			x = merge(x, 7);
		} else {
			if (mt) {
			} else {
				x = 7;
			}
		}
		y = merge(u32.+(x, 1), 9);
	} else {
		if (mt1) {
			def mt2 = U32_maybeTrue(u32.!=(c1, 0));
			def mf2 = U32_maybeFalse(u32.!=(c1, 0));
			var x__359: u32;
			if (bool.&&(mt2, mf2)) {
				x__359 = merge(x, 7);
			} else {
				if (mt2) {
				} else {
					x__359 = 7;
				}
			}
			y = u32.+(x__359, 1);
		} else {
			y = 9;
		}
	}
	z = merge(y, 3);
} else {
	if (mt) {
		def x1 = pop_u32();
		def x2 = (x1);
		def mt3 = U32_maybeTrue(u32.!=(c2, 0));
		def mf3 = U32_maybeFalse(u32.!=(c2, 0));
		if (bool.&&(mt3, mf3)) {
			var x__377: u32;
			if (bool.&&(mt, mf)) {
				x__377 = merge(x1, 7);
				def merge = (merge__338__389);
			} else {
				if (mt) {
					x__377 = x1;
				} else {
					x__377 = 7;
				}
			}
			z = merge(u32.+(x__377, 1), 9);
			def merge1 = (merge__336__387);
		} else {
			if (mt3) {
				def mt4 = U32_maybeTrue(u32.!=(c1, 0));
				def mf4 = U32_maybeFalse(u32.!=(c1, 0));
				var x__359__402: u32;
				if (bool.&&(mt4, mf4)) {
					x__359__402 = merge(x1, 7);
				} else {
					if (mt4) {
						x__359__402 = x1;
					} else {
						x__359__402 = 7;
					}
				}
				z = u32.+(x__359__402, 1);
			} else {
				z = 9;
			}
		}
	} else {
		z = 3;
	}
}
push_u32(z);
</pre>`;
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"] = {}
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["parsed"] = ''
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["parsed"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def arg__434 : u32 = 0;
def arg__433 = (c1);
def p = u32.!=(arg__433, arg__434);
def arg__432 : u32 = 0;
def arg__431 = (c2);
def q = u32.!=(arg__431, arg__432);
def left : u32 = 0;
def cond__418 = (p);
if (cond__418) {
	def inner : u32 = 0;
	def cond__422 = (q);
	if (cond__422) {
		def inner__423 = pop_u32();
	} else {
		def inner__424 : u32 = 11;
	}
// phis: inner <- inner__423; inner <- inner__424; 
	def arg__421 : u32 = 1;
	def arg__420 = (inner);
	def left__419 = u32.+(arg__420, arg__421);
} else {
	def inner : u32 = 0;
	def cond__428 = (q);
	if (cond__428) {
		def inner__429 = pop_u32();
	} else {
		def inner__430 : u32 = 21;
	}
// phis: inner <- inner__429; inner <- inner__430; 
	def arg__427 : u32 = 2;
	def arg__426 = (inner);
	def left__425 = u32.+(arg__426, arg__427);
}
// phis: left <- left__419; left <- left__425; inner <- inner; inner <- inner; 
def arg__417 = (left);
def eff__416 = push_u32(arg__417);
</pre>`;
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["initial_pretty"] = ''
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["initial_pretty"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
var left = 0;
var inner;
if ((u32.!=((c1), 0))) {
	inner = 0;
	if ((u32.!=((c2), 0))) {
		inner = pop_u32();
	} else {
		inner = 11;
	}
	left = u32.+((inner), 1);
} else {
	inner = 0;
	if ((u32.!=((c2), 0))) {
		inner = pop_u32();
	} else {
		inner = 21;
	}
	left = u32.+((inner), 2);
}
push_u32((left));
</pre>`;
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["raw"] = ''
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	35 -. Stack .-> 1
	35["eff__416 push_u32"]
	31 --> 35
	33 -. Stack .-> 35
	33{{"sea__437 Sϕ Stack "}}
	7 --> 33
	27 --> 33
	18 --> 33
	18{{"sea__435 Sϕ Stack "}}
	10 --> 18
	16 --> 18
	4 --> 18
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	16["inner__429 pop_u32"]
	4 -. Stack .-> 16
	10["q u32.!="]
	4 --> 10
	8 --> 10
	8["arg__432 0"]
	27{{"sea__436 Sϕ Stack "}}
	10 --> 27
	25 --> 27
	4 --> 27
	25["inner__423 pop_u32"]
	4 -. Stack .-> 25
	7["p u32.!="]
	3 --> 7
	5 --> 7
	5["arg__434 0"]
	31{"left ϕ"}
	7 --> 31
	30 --> 31
	21 --> 31
	21["left__425 u32.+"]
	17 --> 21
	19 --> 21
	19["arg__427 2"]
	17{"inner ϕ"}
	10 --> 17
	16 --> 17
	15 --> 17
	15["inner__430 21"]
	30["left__419 u32.+"]
	26 --> 30
	28 --> 30
	28["arg__421 1"]
	26{"inner ϕ"}
	10 --> 26
	25 --> 26
	24 --> 26
	24["inner__424 11"]
</pre>`;
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["scheduler_start"] = ''
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	35 -. Stack .-> 1
	35["eff__416 push_u32"]
	31 --> 35
	33 -. Stack .-> 35
	33{{"sea__437 Sϕ Stack "}}
	7 --> 33
	38 --> 33
	39 --> 33
	39["mv_f__441 |False|  [u32.!= [p]]"]
	7 --> 39
	18 -. Stack .-> 39
	18{{"sea__435 Sϕ Stack "}}
	10 --> 18
	42 --> 18
	43 --> 18
	43["mv_f__445 |False|  [u32.!= [q]]"]
	10 --> 43
	4 -. Stack .-> 43
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	10["q u32.!="]
	4 --> 10
	8 --> 10
	8["arg__432 0"]
	42["mv_t__444 |True|  [u32.!= [q]]"]
	10 --> 42
	16 -. Stack .-> 42
	16["inner__429 pop_u32"]
	4 -. Stack .-> 16
	7["p u32.!="]
	3 --> 7
	5 --> 7
	5["arg__434 0"]
	38["mv_t__440 |True|  [u32.!= [p]]"]
	7 --> 38
	27 -. Stack .-> 38
	27{{"sea__436 Sϕ Stack "}}
	10 --> 27
	40 --> 27
	41 --> 27
	41["mv_f__443 |False|  [u32.!= [q]]"]
	10 --> 41
	4 -. Stack .-> 41
	40["mv_t__442 |True|  [u32.!= [q]]"]
	10 --> 40
	25 -. Stack .-> 40
	25["inner__423 pop_u32"]
	4 -. Stack .-> 25
	31{"left ϕ"}
	7 --> 31
	36 --> 31
	37 --> 31
	37["mv_f__439 |False|  [u32.!= [p]]"]
	7 --> 37
	21 --> 37
	21["left__425 u32.+"]
	17 --> 21
	19 --> 21
	19["arg__427 2"]
	17{"inner ϕ"}
	10 --> 17
	46 --> 17
	47 --> 17
	47["mv_f__449 |False|  [u32.!= [q]]"]
	10 --> 47
	15 --> 47
	15["inner__430 21"]
	46["mv_t__448 |True|  [u32.!= [q]]"]
	10 --> 46
	16 --> 46
	36["mv_t__438 |True|  [u32.!= [p]]"]
	7 --> 36
	30 --> 36
	30["left__419 u32.+"]
	26 --> 30
	28 --> 30
	28["arg__421 1"]
	26{"inner ϕ"}
	10 --> 26
	44 --> 26
	45 --> 26
	45["mv_f__447 |False|  [u32.!= [q]]"]
	10 --> 45
	24 --> 45
	24["inner__424 11"]
	44["mv_t__446 |True|  [u32.!= [q]]"]
	10 --> 44
	25 --> 44
</pre>`;
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["untangled"] = ''
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	35 -. Stack .-> 1
	35["eff__416 push_u32"]
	31 --> 35
	33 -. Stack .-> 35
	33{{"sea__437 Sϕ Stack "}}
	7 --> 33
	38 --> 33
	39 --> 33
	39["mv_f__441 |False|  [u32.!= [p]]"]
	7 --> 39
	18 -. Stack .-> 39
	18{{"sea__435 Sϕ Stack "}}
	10 --> 18
	42 --> 18
	43 --> 18
	43["mv_f__445 |False|  [u32.!= [q]]"]
	10 --> 43
	4 -. Stack .-> 43
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	10["q u32.!="]
	4 --> 10
	8 --> 10
	8["arg__432 0"]
	42["mv_t__444 |True|  [u32.!= [q]]"]
	10 --> 42
	16 -. Stack .-> 42
	16["inner__429 pop_u32"]
	4 -. Stack .-> 16
	7["p u32.!="]
	3 --> 7
	5 --> 7
	5["arg__434 0"]
	38["mv_t__440 |True|  [u32.!= [p]]"]
	7 --> 38
	27 -. Stack .-> 38
	27{{"sea__436 Sϕ Stack "}}
	10 --> 27
	40 --> 27
	41 --> 27
	41["mv_f__443 |False|  [u32.!= [q]]"]
	10 --> 41
	4 -. Stack .-> 41
	40["mv_t__442 |True|  [u32.!= [q]]"]
	10 --> 40
	25 -. Stack .-> 40
	25["inner__423 pop_u32"]
	4 -. Stack .-> 25
	31{"left ϕ"}
	7 --> 31
	36 --> 31
	37 --> 31
	37["mv_f__439 |False|  [u32.!= [p]]"]
	7 --> 37
	21 --> 37
	21["left__425 u32.+"]
	17 --> 21
	19 --> 21
	19["arg__427 2"]
	17{"inner ϕ"}
	10 --> 17
	46 --> 17
	47 --> 17
	47["mv_f__449 |False|  [u32.!= [q]]"]
	10 --> 47
	15 --> 47
	15["inner__430 21"]
	46["mv_t__448 |True|  [u32.!= [q]]"]
	10 --> 46
	16 --> 46
	36["mv_t__438 |True|  [u32.!= [p]]"]
	7 --> 36
	30 --> 36
	30["left__419 u32.+"]
	26 --> 30
	28 --> 30
	28["arg__421 1"]
	26{"inner ϕ"}
	10 --> 26
	44 --> 26
	45 --> 26
	45["mv_f__447 |False|  [u32.!= [q]]"]
	10 --> 45
	24 --> 45
	24["inner__424 11"]
	44["mv_t__446 |True|  [u32.!= [q]]"]
	10 --> 44
	25 --> 44
</pre>`;
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["schedulerMermaid"] = ''
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_357["Block 357"]
	direction TB
	b357_35["eff__416 push_u32"]
	b357_1[\\"Finish"/]
	b357_35 --> b357_1
end
phi_362 --> block_357
subgraph phi_362["Phi 362"]
	p362_33{{"sea__437 Sϕ Stack "}}
	p362_31{"left ϕ"}
end
block_363 --> phi_362
block_364 --> phi_362
subgraph block_363["Block 363"]
	direction TB
	b363_28["arg__421 1"]
	b363_30["left__419 u32.+"]
	b363_38["mv_t__440 |True|  [u32.!= [p]]"]
	b363_36["mv_t__438 |True|  [u32.!= [p]]"]
	b363_28 --> b363_30
	b363_30 --> b363_38
	b363_38 --> b363_36
end
phi_367 --> block_363
subgraph phi_367["Phi 367"]
	p367_27{{"sea__436 Sϕ Stack "}}
	p367_26{"inner ϕ"}
end
block_368 --> phi_367
block_369 --> phi_367
subgraph block_368["Block 368"]
	direction TB
	b368_25["inner__423 pop_u32"]
	b368_40["mv_t__442 |True|  [u32.!= [q]]"]
	b368_44["mv_t__446 |True|  [u32.!= [q]]"]
	b368_25 --> b368_40
	b368_40 --> b368_44
end
branch_366 --> block_368
subgraph branch_366["Branch 366"]
	br366_10["q u32.!="]

end
branch_361 --> branch_366
subgraph branch_361["Branch 361"]
	br361_7["p u32.!="]

end
block_365 --> branch_361
subgraph block_365["Block 365"]
	direction TB
	b365_0[/"Start"\\]
	b365_3["c1 pop_u32"]
	b365_4["c2 pop_u32"]
	b365_8["arg__432 0"]
	b365_10["q u32.!="]
	b365_5["arg__434 0"]
	b365_7["p u32.!="]
	b365_0 --> b365_3
	b365_3 --> b365_4
	b365_4 --> b365_8
	b365_8 --> b365_10
	b365_10 --> b365_5
	b365_5 --> b365_7
end
subgraph block_369["Block 369"]
	direction TB
	b369_24["inner__424 11"]
	b369_41["mv_f__443 |False|  [u32.!= [q]]"]
	b369_45["mv_f__447 |False|  [u32.!= [q]]"]
	b369_24 --> b369_41
	b369_41 --> b369_45
end
branch_366 --> block_369
subgraph block_364["Block 364"]
	direction TB
	b364_19["arg__427 2"]
	b364_21["left__425 u32.+"]
	b364_39["mv_f__441 |False|  [u32.!= [p]]"]
	b364_37["mv_f__439 |False|  [u32.!= [p]]"]
	b364_19 --> b364_21
	b364_21 --> b364_39
	b364_39 --> b364_37
end
phi_371 --> block_364
subgraph phi_371["Phi 371"]
	p371_18{{"sea__435 Sϕ Stack "}}
	p371_17{"inner ϕ"}
end
block_372 --> phi_371
block_373 --> phi_371
subgraph block_372["Block 372"]
	direction TB
	b372_16["inner__429 pop_u32"]
	b372_42["mv_t__444 |True|  [u32.!= [q]]"]
	b372_46["mv_t__448 |True|  [u32.!= [q]]"]
	b372_16 --> b372_42
	b372_42 --> b372_46
end
branch_370 --> block_372
subgraph branch_370["Branch 370"]
	br370_10["q u32.!="]

end
branch_361 --> branch_370
subgraph block_373["Block 373"]
	direction TB
	b373_15["inner__430 21"]
	b373_43["mv_f__445 |False|  [u32.!= [q]]"]
	b373_47["mv_f__449 |False|  [u32.!= [q]]"]
	b373_15 --> b373_43
	b373_43 --> b373_47
end
branch_370 --> block_373

</pre>`;
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["scheduler_ssad"] = ''
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["scheduler_ssad"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def arg__432 : u32 = 0;
def q = u32.!=(c2, arg__432);
def arg__434 : u32 = 0;
def p = u32.!=(c1, arg__434);
if (p) {
	if (q) {
		def inner__423 = pop_u32();
	} else {
		def inner__424 : u32 = 11;
	}
// phis: inner <- inner__423; inner <- inner__424; 
	def arg__421 : u32 = 1;
	def left__419 = u32.+(inner, arg__421);
} else {
	if (q) {
		def inner__429 = pop_u32();
	} else {
		def inner__430 : u32 = 21;
	}
// phis: inner <- inner__429; inner <- inner__430; 
	def arg__427 : u32 = 2;
	def left__425 = u32.+(inner, arg__427);
}
// phis: left <- left__419; left <- left__425; 
def eff__416 = push_u32(left);
</pre>`;
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["scheduler_ssad_pretty"] = ''
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["scheduler_ssad_pretty"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
var left: u32;
if (u32.!=(c1, 0)) {
	var inner: u32;
	if (u32.!=(c2, 0)) {
		inner = pop_u32();
	} else {
		inner = 11;
	}
	left = u32.+(inner, 1);
} else {
	var inner: u32;
	if (u32.!=(c2, 0)) {
		inner = pop_u32();
	} else {
		inner = 21;
	}
	left = u32.+(inner, 2);
}
push_u32(left);
</pre>`;
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["unLEM"] = ''
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	35 -. Stack .-> 1
	35["eff__416 push_u32"]
	31 --> 35
	33 -. Stack .-> 35
	33{{"sea__437 Sϕ Stack "}}
	38 --> 33
	44 --> 33
	41 --> 33
	41{{"innerPhi__455 Sϕ Stack "}}
	36 --> 41
	27 --> 41
	18 --> 41
	18{{"sea__435 Sϕ Stack "}}
	47 --> 18
	52 --> 18
	50 --> 18
	50{{"innerPhi__464 Sϕ Stack "}}
	45 --> 50
	16 --> 50
	4 --> 50
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	16["inner__429 pop_u32"]
	4 -. Stack .-> 16
	45["mt__459 U32_maybeTrue"]
	10 --> 45
	10["q u32.!="]
	4 --> 10
	8 --> 10
	8["arg__432 0"]
	52["eff_merge__466 merge"]
	16 --> 52
	51 --> 52
	51["eff_nop__465 nop"]
	47["mb__461 bool.&&"]
	45 --> 47
	46 --> 47
	46["mf__460 U32_maybeFalse"]
	10 --> 46
	27{{"sea__436 Sϕ Stack "}}
	47 --> 27
	49 --> 27
	48 --> 27
	48{{"innerPhi__462 Sϕ Stack "}}
	45 --> 48
	25 --> 48
	4 --> 48
	25["inner__423 pop_u32"]
	4 -. Stack .-> 25
	49["eff_merge__463 merge"]
	25 --> 49
	4 --> 49
	36["mt__450 U32_maybeTrue"]
	7 --> 36
	7["p u32.!="]
	3 --> 7
	5 --> 7
	5["arg__434 0"]
	44{{"merged_phi__458 Sϕ Stack "}}
	10 --> 44
	42 --> 44
	43 --> 44
	43["eff_merge__457 merge"]
	4 --> 43
	4 --> 43
	42["eff_merge__456 merge"]
	25 --> 42
	16 --> 42
	38["mb__452 bool.&&"]
	36 --> 38
	37 --> 38
	37["mf__451 U32_maybeFalse"]
	7 --> 37
	31{"left ϕ"}
	38 --> 31
	40 --> 31
	39 --> 31
	39{"innerPhi__453 ϕ"}
	36 --> 39
	30 --> 39
	21 --> 39
	21["left__425 u32.+"]
	17 --> 21
	19 --> 21
	19["arg__427 2"]
	17{"inner ϕ"}
	47 --> 17
	56 --> 17
	55 --> 17
	55{"innerPhi__469 ϕ"}
	45 --> 55
	16 --> 55
	15 --> 55
	15["inner__430 21"]
	56["merge__470 merge"]
	16 --> 56
	15 --> 56
	30["left__419 u32.+"]
	26 --> 30
	28 --> 30
	28["arg__421 1"]
	26{"inner ϕ"}
	47 --> 26
	54 --> 26
	53 --> 26
	53{"innerPhi__467 ϕ"}
	45 --> 53
	25 --> 53
	24 --> 53
	24["inner__424 11"]
	54["merge__468 merge"]
	25 --> 54
	24 --> 54
	40["merge__454 merge"]
	30 --> 40
	21 --> 40
</pre>`;
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES_ul"] = {}
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES_ul"]["scheduler_start"] = ''
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES_ul"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	35 -. Stack .-> 1
	35["eff__416 push_u32"]
	31 --> 35
	33 -. Stack .-> 35
	33{{"sea__437 Sϕ Stack "}}
	38 --> 33
	59 --> 33
	60 --> 33
	60["mv_f__474 |False|  [bool.&& [mb__452]]"]
	38 --> 60
	41 -. Stack .-> 60
	41{{"innerPhi__455 Sϕ Stack "}}
	36 --> 41
	65 --> 41
	66 --> 41
	66["mv_f__480 |False|  [U32_maybeTrue [mt__450]]"]
	36 --> 66
	18 -. Stack .-> 66
	18{{"sea__435 Sϕ Stack "}}
	47 --> 18
	69 --> 18
	70 --> 18
	70["mv_f__484 |False|  [bool.&& [mb__461]]"]
	47 --> 70
	50 -. Stack .-> 70
	50{{"innerPhi__464 Sϕ Stack "}}
	45 --> 50
	77 --> 50
	78 --> 50
	78["mv_f__492 |False|  [U32_maybeTrue [mt__459]]"]
	45 --> 78
	4 -. Stack .-> 78
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	45["mt__459 U32_maybeTrue"]
	10 --> 45
	10["q u32.!="]
	4 --> 10
	8 --> 10
	8["arg__432 0"]
	77["mv_t__491 |True|  [U32_maybeTrue [mt__459]]"]
	45 --> 77
	16 -. Stack .-> 77
	16["inner__429 pop_u32"]
	4 -. Stack .-> 16
	47["mb__461 bool.&&"]
	45 --> 47
	46 --> 47
	46["mf__460 U32_maybeFalse"]
	10 --> 46
	69["mv_t__483 |True|  [bool.&& [mb__461]]"]
	47 --> 69
	52 -. Stack .-> 69
	52["eff_merge__466 merge"]
	16 --> 52
	51 --> 52
	51["eff_nop__465 nop"]
	36["mt__450 U32_maybeTrue"]
	7 --> 36
	7["p u32.!="]
	3 --> 7
	5 --> 7
	5["arg__434 0"]
	65["mv_t__479 |True|  [U32_maybeTrue [mt__450]]"]
	36 --> 65
	27 -. Stack .-> 65
	27{{"sea__436 Sϕ Stack "}}
	47 --> 27
	67 --> 27
	68 --> 27
	68["mv_f__482 |False|  [bool.&& [mb__461]]"]
	47 --> 68
	48 -. Stack .-> 68
	48{{"innerPhi__462 Sϕ Stack "}}
	45 --> 48
	75 --> 48
	76 --> 48
	76["mv_f__490 |False|  [U32_maybeTrue [mt__459]]"]
	45 --> 76
	4 -. Stack .-> 76
	75["mv_t__489 |True|  [U32_maybeTrue [mt__459]]"]
	45 --> 75
	25 -. Stack .-> 75
	25["inner__423 pop_u32"]
	4 -. Stack .-> 25
	67["mv_t__481 |True|  [bool.&& [mb__461]]"]
	47 --> 67
	49 -. Stack .-> 67
	49["eff_merge__463 merge"]
	25 --> 49
	4 --> 49
	38["mb__452 bool.&&"]
	36 --> 38
	37 --> 38
	37["mf__451 U32_maybeFalse"]
	7 --> 37
	59["mv_t__473 |True|  [bool.&& [mb__452]]"]
	38 --> 59
	44 -. Stack .-> 59
	44{{"merged_phi__458 Sϕ Stack "}}
	10 --> 44
	63 --> 44
	64 --> 44
	64["mv_f__478 |False|  [u32.!= [q]]"]
	10 --> 64
	43 -. Stack .-> 64
	43["eff_merge__457 merge"]
	4 --> 43
	4 --> 43
	63["mv_t__477 |True|  [u32.!= [q]]"]
	10 --> 63
	42 -. Stack .-> 63
	42["eff_merge__456 merge"]
	25 --> 42
	16 --> 42
	31{"left ϕ"}
	38 --> 31
	57 --> 31
	58 --> 31
	58["mv_f__472 |False|  [bool.&& [mb__452]]"]
	38 --> 58
	39 --> 58
	39{"innerPhi__453 ϕ"}
	36 --> 39
	61 --> 39
	62 --> 39
	62["mv_f__476 |False|  [U32_maybeTrue [mt__450]]"]
	36 --> 62
	21 --> 62
	21["left__425 u32.+"]
	17 --> 21
	19 --> 21
	19["arg__427 2"]
	17{"inner ϕ"}
	47 --> 17
	73 --> 17
	74 --> 17
	74["mv_f__488 |False|  [bool.&& [mb__461]]"]
	47 --> 74
	55 --> 74
	55{"innerPhi__469 ϕ"}
	45 --> 55
	81 --> 55
	82 --> 55
	82["mv_f__496 |False|  [U32_maybeTrue [mt__459]]"]
	45 --> 82
	15 --> 82
	15["inner__430 21"]
	81["mv_t__495 |True|  [U32_maybeTrue [mt__459]]"]
	45 --> 81
	16 --> 81
	73["mv_t__487 |True|  [bool.&& [mb__461]]"]
	47 --> 73
	56 --> 73
	56["merge__470 merge"]
	16 --> 56
	15 --> 56
	61["mv_t__475 |True|  [U32_maybeTrue [mt__450]]"]
	36 --> 61
	30 --> 61
	30["left__419 u32.+"]
	26 --> 30
	28 --> 30
	28["arg__421 1"]
	26{"inner ϕ"}
	47 --> 26
	71 --> 26
	72 --> 26
	72["mv_f__486 |False|  [bool.&& [mb__461]]"]
	47 --> 72
	53 --> 72
	53{"innerPhi__467 ϕ"}
	45 --> 53
	79 --> 53
	80 --> 53
	80["mv_f__494 |False|  [U32_maybeTrue [mt__459]]"]
	45 --> 80
	24 --> 80
	24["inner__424 11"]
	79["mv_t__493 |True|  [U32_maybeTrue [mt__459]]"]
	45 --> 79
	25 --> 79
	71["mv_t__485 |True|  [bool.&& [mb__461]]"]
	47 --> 71
	54 --> 71
	54["merge__468 merge"]
	25 --> 54
	24 --> 54
	57["mv_t__471 |True|  [bool.&& [mb__452]]"]
	38 --> 57
	40 --> 57
	40["merge__454 merge"]
	30 --> 40
	21 --> 40
</pre>`;
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES_ul"]["untangled"] = ''
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES_ul"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	35 -. Stack .-> 1
	35["eff__416 push_u32"]
	31 --> 35
	33 -. Stack .-> 35
	33{{"sea__437 Sϕ Stack "}}
	38 --> 33
	59 --> 33
	60 --> 33
	60["mv_f__474 |False|  [bool.&& [mb__452]]"]
	38 --> 60
	41 -. Stack .-> 60
	41{{"innerPhi__455 Sϕ Stack "}}
	36 --> 41
	65 --> 41
	66 --> 41
	66["mv_f__480 |False|  [U32_maybeTrue [mt__450]]"]
	36 --> 66
	18 -. Stack .-> 66
	18{{"sea__435 Sϕ Stack "}}
	47 --> 18
	69 --> 18
	70 --> 18
	70["mv_f__484 |False|  [bool.&& [mb__461]]"]
	47 --> 70
	50 -. Stack .-> 70
	50{{"innerPhi__464 Sϕ Stack "}}
	45 --> 50
	77 --> 50
	78 --> 50
	78["mv_f__492 |False|  [U32_maybeTrue [mt__459]]"]
	45 --> 78
	4 -. Stack .-> 78
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	45["mt__459 U32_maybeTrue"]
	10 --> 45
	10["q u32.!="]
	4 --> 10
	8 --> 10
	8["arg__432 0"]
	77["mv_t__491 |True|  [U32_maybeTrue [mt__459]]"]
	45 --> 77
	119 -. Stack .-> 77
	119["inner__429__500__523 pop_u32"]
	4 -. Stack .-> 119
	47["mb__461 bool.&&"]
	45 --> 47
	46 --> 47
	46["mf__460 U32_maybeFalse"]
	10 --> 46
	69["mv_t__483 |True|  [bool.&& [mb__461]]"]
	47 --> 69
	52 -. Stack .-> 69
	52["eff_merge__466 merge"]
	96 --> 52
	51 --> 52
	51["eff_nop__465 nop"]
	96["inner__429__500 pop_u32"]
	4 -. Stack .-> 96
	36["mt__450 U32_maybeTrue"]
	7 --> 36
	7["p u32.!="]
	3 --> 7
	5 --> 7
	5["arg__434 0"]
	65["mv_t__479 |True|  [U32_maybeTrue [mt__450]]"]
	36 --> 65
	27 -. Stack .-> 65
	27{{"sea__436 Sϕ Stack "}}
	47 --> 27
	67 --> 27
	68 --> 27
	68["mv_f__482 |False|  [bool.&& [mb__461]]"]
	47 --> 68
	48 -. Stack .-> 68
	48{{"innerPhi__462 Sϕ Stack "}}
	45 --> 48
	75 --> 48
	76 --> 48
	76["mv_f__490 |False|  [U32_maybeTrue [mt__459]]"]
	45 --> 76
	4 -. Stack .-> 76
	75["mv_t__489 |True|  [U32_maybeTrue [mt__459]]"]
	45 --> 75
	101 -. Stack .-> 75
	101["inner__423__505 pop_u32"]
	4 -. Stack .-> 101
	67["mv_t__481 |True|  [bool.&& [mb__461]]"]
	47 --> 67
	49 -. Stack .-> 67
	49["eff_merge__463 merge"]
	101 --> 49
	4 --> 49
	38["mb__452 bool.&&"]
	36 --> 38
	37 --> 38
	37["mf__451 U32_maybeFalse"]
	7 --> 37
	59["mv_t__473 |True|  [bool.&& [mb__452]]"]
	38 --> 59
	44 -. Stack .-> 59
	44{{"merged_phi__458 Sϕ Stack "}}
	10 --> 44
	63 --> 44
	64 --> 44
	64["mv_f__478 |False|  [u32.!= [q]]"]
	10 --> 64
	43 -. Stack .-> 64
	43["eff_merge__457 merge"]
	4 --> 43
	4 --> 43
	63["mv_t__477 |True|  [u32.!= [q]]"]
	10 --> 63
	42 -. Stack .-> 63
	42["eff_merge__456 merge"]
	25 --> 42
	16 --> 42
	16["inner__429 pop_u32"]
	4 -. Stack .-> 16
	25["inner__423 pop_u32"]
	4 -. Stack .-> 25
	31{"left ϕ"}
	38 --> 31
	57 --> 31
	58 --> 31
	58["mv_f__472 |False|  [bool.&& [mb__452]]"]
	38 --> 58
	39 --> 58
	39{"innerPhi__453 ϕ"}
	36 --> 39
	61 --> 39
	62 --> 39
	62["mv_f__476 |False|  [U32_maybeTrue [mt__450]]"]
	36 --> 62
	99 --> 62
	99["left__425__503 u32.+"]
	97 --> 99
	98 --> 99
	98["arg__427__502 2"]
	97{"inner__501 ϕ"}
	47 --> 97
	111 --> 97
	112 --> 97
	112["mv_f__488__516 |False|  [bool.&& [mb__461]]"]
	47 --> 112
	107 --> 112
	107{"innerPhi__469__511 ϕ"}
	45 --> 107
	115 --> 107
	116 --> 107
	116["mv_f__496__520 |False|  [U32_maybeTrue [mt__459]]"]
	45 --> 116
	117 --> 116
	117["inner__430__497__521 21"]
	115["mv_t__495__519 |True|  [U32_maybeTrue [mt__459]]"]
	45 --> 115
	119 --> 115
	111["mv_t__487__515 |True|  [bool.&& [mb__461]]"]
	47 --> 111
	108 --> 111
	108["merge__470__512 merge"]
	96 --> 108
	95 --> 108
	95["inner__430__499 21"]
	61["mv_t__475 |True|  [U32_maybeTrue [mt__450]]"]
	36 --> 61
	104 --> 61
	104["left__419__508 u32.+"]
	102 --> 104
	103 --> 104
	103["arg__421__507 1"]
	102{"inner__506 ϕ"}
	47 --> 102
	109 --> 102
	110 --> 102
	110["mv_f__486__514 |False|  [bool.&& [mb__461]]"]
	47 --> 110
	105 --> 110
	105{"innerPhi__467__509 ϕ"}
	45 --> 105
	113 --> 105
	114 --> 105
	114["mv_f__494__518 |False|  [U32_maybeTrue [mt__459]]"]
	45 --> 114
	118 --> 114
	118["inner__424__498__522 11"]
	113["mv_t__493__517 |True|  [U32_maybeTrue [mt__459]]"]
	45 --> 113
	101 --> 113
	109["mv_t__485__513 |True|  [bool.&& [mb__461]]"]
	47 --> 109
	106 --> 109
	106["merge__468__510 merge"]
	101 --> 106
	100 --> 106
	100["inner__424__504 11"]
	57["mv_t__471 |True|  [bool.&& [mb__452]]"]
	38 --> 57
	40 --> 57
	40["merge__454 merge"]
	30 --> 40
	21 --> 40
	21["left__425 u32.+"]
	17 --> 21
	19 --> 21
	19["arg__427 2"]
	17{"inner ϕ"}
	47 --> 17
	73 --> 17
	74 --> 17
	74["mv_f__488 |False|  [bool.&& [mb__461]]"]
	47 --> 74
	55 --> 74
	55{"innerPhi__469 ϕ"}
	45 --> 55
	81 --> 55
	82 --> 55
	82["mv_f__496 |False|  [U32_maybeTrue [mt__459]]"]
	45 --> 82
	93 --> 82
	93["inner__430__497 21"]
	81["mv_t__495 |True|  [U32_maybeTrue [mt__459]]"]
	45 --> 81
	16 --> 81
	73["mv_t__487 |True|  [bool.&& [mb__461]]"]
	47 --> 73
	56 --> 73
	56["merge__470 merge"]
	16 --> 56
	15 --> 56
	15["inner__430 21"]
	30["left__419 u32.+"]
	26 --> 30
	28 --> 30
	28["arg__421 1"]
	26{"inner ϕ"}
	47 --> 26
	71 --> 26
	72 --> 26
	72["mv_f__486 |False|  [bool.&& [mb__461]]"]
	47 --> 72
	53 --> 72
	53{"innerPhi__467 ϕ"}
	45 --> 53
	79 --> 53
	80 --> 53
	80["mv_f__494 |False|  [U32_maybeTrue [mt__459]]"]
	45 --> 80
	94 --> 80
	94["inner__424__498 11"]
	79["mv_t__493 |True|  [U32_maybeTrue [mt__459]]"]
	45 --> 79
	25 --> 79
	71["mv_t__485 |True|  [bool.&& [mb__461]]"]
	47 --> 71
	54 --> 71
	54["merge__468 merge"]
	25 --> 54
	24 --> 54
	24["inner__424 11"]
</pre>`;
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["unlem_schedule"] = ''
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["unlem_schedule"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def arg__432 : u32 = 0;
def q = u32.!=(c2, arg__432);
def mt__459 = U32_maybeTrue(q);
def inner__423 = pop_u32();
def inner__429 = pop_u32();
def mf__460 = U32_maybeFalse(q);
def mb__461 = bool.&&(mt__459, mf__460);
if (mb__461) {
	def inner__424 : u32 = 11;
	def inner__430 : u32 = 21;
	def merge__468 = merge(inner__423, inner__424);
	def merge__470 = merge(inner__429, inner__430);
} else {
	if (mt__459) {
	} else {
		def inner__424__498 : u32 = 11;
		def inner__430__497 : u32 = 21;
	}
// phis: innerPhi__467 <- inner__423; innerPhi__467 <- inner__424__498; innerPhi__469 <- inner__429; innerPhi__469 <- inner__430__497; 
}
// phis: inner <- merge__468; inner <- innerPhi__467; inner <- merge__470; inner <- innerPhi__469; 
def arg__434 : u32 = 0;
def p = u32.!=(c1, arg__434);
def mt__450 = U32_maybeTrue(p);
def mf__451 = U32_maybeFalse(p);
def mb__452 = bool.&&(mt__450, mf__451);
if (mb__452) {
	if (q) {
		def eff_merge__456 = merge(inner__423, inner__429);
	} else {
		def eff_merge__457 = merge(c2, c2);
	}
// phis: 
	def arg__427 : u32 = 2;
	def arg__421 : u32 = 1;
	def left__425 = u32.+(inner, arg__427);
	def left__419 = u32.+(inner, arg__421);
	def merge__454 = merge(left__419, left__425);
} else {
	if (mt__450) {
		def inner__423__505 = pop_u32();
		def inner__423 = (inner__423__505);
		if (mb__461) {
			def inner__424__504 : u32 = 11;
			def inner__424 = (inner__424__504);
			def eff_merge__463 = merge(inner__423__505, c2);
			def merge__468__510 = merge(inner__423__505, inner__424__504);
		} else {
			if (mt__459) {
			} else {
				def inner__424__498__522 : u32 = 11;
			}
// phis: innerPhi__467__509 <- inner__423__505; innerPhi__467__509 <- inner__424__498__522; 
		}
// phis: inner__506 <- merge__468__510; inner__506 <- innerPhi__467__509; 
		def arg__421__507 : u32 = 1;
		def arg__421 = (arg__421__507);
		def left__419__508 = u32.+(inner__506, arg__421__507);
		def left__419 = (left__419__508);
	} else {
		if (mb__461) {
			def eff_nop__465 = nop();
			def inner__429__500 = pop_u32();
			def inner__429 = (inner__429__500);
			def inner__430__499 : u32 = 21;
			def inner__430 = (inner__430__499);
			def eff_merge__466 = merge(inner__429__500, eff_nop__465);
			def merge__470__512 = merge(inner__429__500, inner__430__499);
		} else {
			if (mt__459) {
				def inner__429__500__523 = pop_u32();
			} else {
				def inner__430__497__521 : u32 = 21;
			}
// phis: innerPhi__469__511 <- inner__429__500__523; innerPhi__469__511 <- inner__430__497__521; 
		}
// phis: inner__501 <- merge__470__512; inner__501 <- innerPhi__469__511; 
		def arg__427__502 : u32 = 2;
		def arg__427 = (arg__427__502);
		def left__425__503 = u32.+(inner__501, arg__427__502);
		def left__425 = (left__425__503);
	}
// phis: innerPhi__453 <- left__419__508; innerPhi__453 <- left__425__503; 
}
// phis: left <- merge__454; left <- innerPhi__453; 
def eff__416 = push_u32(left);
</pre>`;
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["unlem_scheduler"] = ''
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_374["Block 374"]
	direction TB
	b374_35["eff__416 push_u32"]
	b374_1[\\"Finish"/]
	b374_35 --> b374_1
end
phi_415 --> block_374
subgraph phi_415["Phi 415"]
	p415_33{{"sea__437 Sϕ Stack "}}
	p415_31{"left ϕ"}
end
block_416 --> phi_415
block_417 --> phi_415
subgraph block_416["Block 416"]
	direction TB
	b416_19["arg__427 2"]
	b416_28["arg__421 1"]
	b416_21["left__425 u32.+"]
	b416_30["left__419 u32.+"]
	b416_40["merge__454 merge"]
	b416_59["mv_t__473 |True|  [bool.&& [mb__452]]"]
	b416_57["mv_t__471 |True|  [bool.&& [mb__452]]"]
	b416_19 --> b416_28
	b416_28 --> b416_21
	b416_21 --> b416_30
	b416_30 --> b416_40
	b416_40 --> b416_59
	b416_59 --> b416_57
end
phi_420 --> block_416
subgraph phi_420["Phi 420"]
	p420_44{{"merged_phi__458 Sϕ Stack "}}
end
block_421 --> phi_420
block_422 --> phi_420
subgraph block_421["Block 421"]
	direction TB
	b421_42["eff_merge__456 merge"]
	b421_63["mv_t__477 |True|  [u32.!= [q]]"]
	b421_42 --> b421_63
end
branch_419 --> block_421
subgraph branch_419["Branch 419"]
	br419_10["q u32.!="]

end
branch_414 --> branch_419
subgraph branch_414["Branch 414"]
	br414_38["mb__452 bool.&&"]

end
block_418 --> branch_414
subgraph block_418["Block 418"]
	direction TB
	b418_5["arg__434 0"]
	b418_7["p u32.!="]
	b418_36["mt__450 U32_maybeTrue"]
	b418_37["mf__451 U32_maybeFalse"]
	b418_38["mb__452 bool.&&"]
	b418_5 --> b418_7
	b418_7 --> b418_36
	b418_36 --> b418_37
	b418_37 --> b418_38
end
phi_428 --> block_418
subgraph phi_428["Phi 428"]
	p428_26{"inner ϕ"}
	p428_17{"inner ϕ"}
end
block_429 --> phi_428
block_430 --> phi_428
subgraph block_429["Block 429"]
	direction TB
	b429_24["inner__424 11"]
	b429_15["inner__430 21"]
	b429_54["merge__468 merge"]
	b429_56["merge__470 merge"]
	b429_71["mv_t__485 |True|  [bool.&& [mb__461]]"]
	b429_73["mv_t__487 |True|  [bool.&& [mb__461]]"]
	b429_24 --> b429_15
	b429_15 --> b429_54
	b429_54 --> b429_56
	b429_56 --> b429_71
	b429_71 --> b429_73
end
branch_427 --> block_429
subgraph branch_427["Branch 427"]
	br427_47["mb__461 bool.&&"]

end
block_443 --> branch_427
subgraph block_443["Block 443"]
	direction TB
	b443_0[/"Start"\\]
	b443_3["c1 pop_u32"]
	b443_4["c2 pop_u32"]
	b443_8["arg__432 0"]
	b443_10["q u32.!="]
	b443_45["mt__459 U32_maybeTrue"]
	b443_25["inner__423 pop_u32"]
	b443_16["inner__429 pop_u32"]
	b443_46["mf__460 U32_maybeFalse"]
	b443_47["mb__461 bool.&&"]
	b443_0 --> b443_3
	b443_3 --> b443_4
	b443_4 --> b443_8
	b443_8 --> b443_10
	b443_10 --> b443_45
	b443_45 --> b443_25
	b443_25 --> b443_16
	b443_16 --> b443_46
	b443_46 --> b443_47
end
subgraph block_430["Block 430"]
	direction TB
	b430_72["mv_f__486 |False|  [bool.&& [mb__461]]"]
	b430_74["mv_f__488 |False|  [bool.&& [mb__461]]"]
	b430_72 --> b430_74
end
phi_440 --> block_430
subgraph phi_440["Phi 440"]
	p440_53{"innerPhi__467 ϕ"}
	p440_55{"innerPhi__469 ϕ"}
end
block_441 --> phi_440
block_442 --> phi_440
subgraph block_441["Block 441"]
	direction TB
	b441_79["mv_t__493 |True|  [U32_maybeTrue [mt__459]]"]
	b441_81["mv_t__495 |True|  [U32_maybeTrue [mt__459]]"]
	b441_79 --> b441_81
end
branch_439 --> block_441
subgraph branch_439["Branch 439"]
	br439_45["mt__459 U32_maybeTrue"]

end
branch_427 --> branch_439
subgraph block_442["Block 442"]
	direction TB
	b442_94["inner__424__498 11"]
	b442_93["inner__430__497 21"]
	b442_80["mv_f__494 |False|  [U32_maybeTrue [mt__459]]"]
	b442_82["mv_f__496 |False|  [U32_maybeTrue [mt__459]]"]
	b442_94 --> b442_93
	b442_93 --> b442_80
	b442_80 --> b442_82
end
branch_439 --> block_442
subgraph block_422["Block 422"]
	direction TB
	b422_43["eff_merge__457 merge"]
	b422_64["mv_f__478 |False|  [u32.!= [q]]"]
	b422_43 --> b422_64
end
branch_419 --> block_422
subgraph block_417["Block 417"]
	direction TB
	b417_60["mv_f__474 |False|  [bool.&& [mb__452]]"]
	b417_58["mv_f__472 |False|  [bool.&& [mb__452]]"]
	b417_60 --> b417_58
end
phi_424 --> block_417
subgraph phi_424["Phi 424"]
	p424_41{{"innerPhi__455 Sϕ Stack "}}
	p424_39{"innerPhi__453 ϕ"}
end
block_425 --> phi_424
block_426 --> phi_424
subgraph block_425["Block 425"]
	direction TB
	b425_103["arg__421__507 1"]
	b425_104["left__419__508 u32.+"]
	b425_65["mv_t__479 |True|  [U32_maybeTrue [mt__450]]"]
	b425_61["mv_t__475 |True|  [U32_maybeTrue [mt__450]]"]
	b425_103 --> b425_104
	b425_104 --> b425_65
	b425_65 --> b425_61
end
phi_432 --> block_425
subgraph phi_432["Phi 432"]
	p432_27{{"sea__436 Sϕ Stack "}}
	p432_102{"inner__506 ϕ"}
end
block_433 --> phi_432
block_434 --> phi_432
subgraph block_433["Block 433"]
	direction TB
	b433_100["inner__424__504 11"]
	b433_49["eff_merge__463 merge"]
	b433_106["merge__468__510 merge"]
	b433_67["mv_t__481 |True|  [bool.&& [mb__461]]"]
	b433_109["mv_t__485__513 |True|  [bool.&& [mb__461]]"]
	b433_100 --> b433_49
	b433_49 --> b433_106
	b433_106 --> b433_67
	b433_67 --> b433_109
end
branch_431 --> block_433
subgraph branch_431["Branch 431"]
	br431_47["mb__461 bool.&&"]

end
block_452 --> branch_431
subgraph block_452["Block 452"]
	direction TB
	b452_101["inner__423__505 pop_u32"]
end
branch_423 --> block_452
subgraph branch_423["Branch 423"]
	br423_36["mt__450 U32_maybeTrue"]

end
branch_414 --> branch_423
subgraph block_434["Block 434"]
	direction TB
	b434_68["mv_f__482 |False|  [bool.&& [mb__461]]"]
	b434_110["mv_f__486__514 |False|  [bool.&& [mb__461]]"]
	b434_68 --> b434_110
end
phi_445 --> block_434
subgraph phi_445["Phi 445"]
	p445_48{{"innerPhi__462 Sϕ Stack "}}
	p445_105{"innerPhi__467__509 ϕ"}
end
block_446 --> phi_445
block_447 --> phi_445
subgraph block_446["Block 446"]
	direction TB
	b446_75["mv_t__489 |True|  [U32_maybeTrue [mt__459]]"]
	b446_113["mv_t__493__517 |True|  [U32_maybeTrue [mt__459]]"]
	b446_75 --> b446_113
end
branch_444 --> block_446
subgraph branch_444["Branch 444"]
	br444_45["mt__459 U32_maybeTrue"]

end
branch_431 --> branch_444
subgraph block_447["Block 447"]
	direction TB
	b447_118["inner__424__498__522 11"]
	b447_76["mv_f__490 |False|  [U32_maybeTrue [mt__459]]"]
	b447_114["mv_f__494__518 |False|  [U32_maybeTrue [mt__459]]"]
	b447_118 --> b447_76
	b447_76 --> b447_114
end
branch_444 --> block_447
subgraph block_426["Block 426"]
	direction TB
	b426_98["arg__427__502 2"]
	b426_99["left__425__503 u32.+"]
	b426_66["mv_f__480 |False|  [U32_maybeTrue [mt__450]]"]
	b426_62["mv_f__476 |False|  [U32_maybeTrue [mt__450]]"]
	b426_98 --> b426_99
	b426_99 --> b426_66
	b426_66 --> b426_62
end
phi_436 --> block_426
subgraph phi_436["Phi 436"]
	p436_18{{"sea__435 Sϕ Stack "}}
	p436_97{"inner__501 ϕ"}
end
block_437 --> phi_436
block_438 --> phi_436
subgraph block_437["Block 437"]
	direction TB
	b437_51["eff_nop__465 nop"]
	b437_96["inner__429__500 pop_u32"]
	b437_95["inner__430__499 21"]
	b437_52["eff_merge__466 merge"]
	b437_108["merge__470__512 merge"]
	b437_69["mv_t__483 |True|  [bool.&& [mb__461]]"]
	b437_111["mv_t__487__515 |True|  [bool.&& [mb__461]]"]
	b437_51 --> b437_96
	b437_96 --> b437_95
	b437_95 --> b437_52
	b437_52 --> b437_108
	b437_108 --> b437_69
	b437_69 --> b437_111
end
branch_435 --> block_437
subgraph branch_435["Branch 435"]
	br435_47["mb__461 bool.&&"]

end
branch_423 --> branch_435
subgraph block_438["Block 438"]
	direction TB
	b438_70["mv_f__484 |False|  [bool.&& [mb__461]]"]
	b438_112["mv_f__488__516 |False|  [bool.&& [mb__461]]"]
	b438_70 --> b438_112
end
phi_449 --> block_438
subgraph phi_449["Phi 449"]
	p449_50{{"innerPhi__464 Sϕ Stack "}}
	p449_107{"innerPhi__469__511 ϕ"}
end
block_450 --> phi_449
block_451 --> phi_449
subgraph block_450["Block 450"]
	direction TB
	b450_119["inner__429__500__523 pop_u32"]
	b450_77["mv_t__491 |True|  [U32_maybeTrue [mt__459]]"]
	b450_115["mv_t__495__519 |True|  [U32_maybeTrue [mt__459]]"]
	b450_119 --> b450_77
	b450_77 --> b450_115
end
branch_448 --> block_450
subgraph branch_448["Branch 448"]
	br448_45["mt__459 U32_maybeTrue"]

end
branch_435 --> branch_448
subgraph block_451["Block 451"]
	direction TB
	b451_117["inner__430__497__521 21"]
	b451_78["mv_f__492 |False|  [U32_maybeTrue [mt__459]]"]
	b451_116["mv_f__496__520 |False|  [U32_maybeTrue [mt__459]]"]
	b451_117 --> b451_78
	b451_78 --> b451_116
end
branch_448 --> block_451

</pre>`;
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["unlem_scheduler_ssa"] = ''
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["unlem_scheduler_ssa"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def arg__432 : u32 = 0;
def q = u32.!=(c2, arg__432);
def mt__459 = U32_maybeTrue(q);
def inner__423 = pop_u32();
def inner__429 = pop_u32();
def mf__460 = U32_maybeFalse(q);
def mb__461 = bool.&&(mt__459, mf__460);
if (mb__461) {
	def inner__424 : u32 = 11;
	def inner__430 : u32 = 21;
	def merge__468 = merge(inner__423, inner__424);
	def merge__470 = merge(inner__429, inner__430);
} else {
	if (mt__459) {
	} else {
		def inner__424__498 : u32 = 11;
		def inner__430__497 : u32 = 21;
	}
// phis: innerPhi__467 <- inner__423; innerPhi__467 <- inner__424__498; innerPhi__469 <- inner__429; innerPhi__469 <- inner__430__497; 
}
// phis: inner <- merge__468; inner <- innerPhi__467; inner <- merge__470; inner <- innerPhi__469; 
def arg__434 : u32 = 0;
def p = u32.!=(c1, arg__434);
def mt__450 = U32_maybeTrue(p);
def mf__451 = U32_maybeFalse(p);
def mb__452 = bool.&&(mt__450, mf__451);
if (mb__452) {
	if (q) {
		def eff_merge__456 = merge(inner__423, inner__429);
	} else {
		def eff_merge__457 = merge(c2, c2);
	}
// phis: 
	def arg__427 : u32 = 2;
	def arg__421 : u32 = 1;
	def left__425 = u32.+(inner, arg__427);
	def left__419 = u32.+(inner, arg__421);
	def merge__454 = merge(left__419, left__425);
} else {
	if (mt__450) {
		def inner__423__505 = pop_u32();
		def inner__423 = (inner__423__505);
		if (mb__461) {
			def inner__424__504 : u32 = 11;
			def inner__424 = (inner__424__504);
			def eff_merge__463 = merge(inner__423__505, c2);
			def merge__468__510 = merge(inner__423__505, inner__424__504);
		} else {
			if (mt__459) {
			} else {
				def inner__424__498__522 : u32 = 11;
			}
// phis: innerPhi__467__509 <- inner__423__505; innerPhi__467__509 <- inner__424__498__522; 
		}
// phis: inner__506 <- merge__468__510; inner__506 <- innerPhi__467__509; 
		def arg__421__507 : u32 = 1;
		def arg__421 = (arg__421__507);
		def left__419__508 = u32.+(inner__506, arg__421__507);
		def left__419 = (left__419__508);
	} else {
		if (mb__461) {
			def eff_nop__465 = nop();
			def inner__429__500 = pop_u32();
			def inner__429 = (inner__429__500);
			def inner__430__499 : u32 = 21;
			def inner__430 = (inner__430__499);
			def eff_merge__466 = merge(inner__429__500, eff_nop__465);
			def merge__470__512 = merge(inner__429__500, inner__430__499);
		} else {
			if (mt__459) {
				def inner__429__500__523 = pop_u32();
			} else {
				def inner__430__497__521 : u32 = 21;
			}
// phis: innerPhi__469__511 <- inner__429__500__523; innerPhi__469__511 <- inner__430__497__521; 
		}
// phis: inner__501 <- merge__470__512; inner__501 <- innerPhi__469__511; 
		def arg__427__502 : u32 = 2;
		def arg__427 = (arg__427__502);
		def left__425__503 = u32.+(inner__501, arg__427__502);
		def left__425 = (left__425__503);
	}
// phis: innerPhi__453 <- left__419__508; innerPhi__453 <- left__425__503; 
}
// phis: left <- merge__454; left <- innerPhi__453; 
def eff__416 = push_u32(left);
</pre>`;
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["unlem_scheduler_ssa_pretty"] = ''
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["unlem_scheduler_ssa_pretty"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def mt = U32_maybeTrue(u32.!=(c2, 0));
var inner = pop_u32();
def inner1 = pop_u32();
def mf = U32_maybeFalse(u32.!=(c2, 0));
if (bool.&&(mt, mf)) {
	inner = merge(inner, 11);
	inner = merge(inner1, 21);
} else {
	if (mt) {
		inner = inner1;
	} else {
		inner = 11;
		inner = 21;
	}
}
def mt1 = U32_maybeTrue(u32.!=(c1, 0));
def mf1 = U32_maybeFalse(u32.!=(c1, 0));
var left: u32;
if (bool.&&(mt1, mf1)) {
	if (u32.!=(c2, 0)) {
	}
	left = merge(u32.+(inner, 1), u32.+(inner, 2));
} else {
	if (mt1) {
		def inner2 = pop_u32();
		var inner = (inner2);
		var inner__506: u32;
		if (bool.&&(mt, mf)) {
			inner__506 = merge(inner2, 11);
		} else {
			if (mt) {
				inner__506 = inner2;
			} else {
				inner__506 = 11;
			}
		}
		left = u32.+(inner__506, 1);
	} else {
		var inner__501: u32;
		if (bool.&&(mt, mf)) {
			def inner3 = pop_u32();
			def inner1 = (inner3);
			inner__501 = merge(inner3, 21);
		} else {
			if (mt) {
				inner__501 = pop_u32();
			} else {
				inner__501 = 21;
			}
		}
		left = u32.+(inner__501, 2);
	}
}
push_u32(left);
</pre>`;
window.traces["P3_EFFECTFUL_VARIANT"] = {}
window.traces["P3_EFFECTFUL_VARIANT"]["parsed"] = ''
window.traces["P3_EFFECTFUL_VARIANT"]["parsed"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def c3 = pop_u32();
def arg__544 : u32 = 0;
def arg__543 = (c1);
def p = u32.!=(arg__543, arg__544);
def arg__542 : u32 = 0;
def arg__541 = (c2);
def q = u32.!=(arg__541, arg__542);
def arg__540 : u32 = 0;
def arg__539 = (c3);
def r = u32.!=(arg__539, arg__540);
def A : u32 = 0;
def cond__536 = (q);
if (cond__536) {
	def A__537 = pop_u32();
} else {
	def A__538 : u32 = 5;
}
// phis: A <- A__537; A <- A__538; 
def arg__535 : u32 = 0;
def arg__534 = (A);
def B = u32.+(arg__534, arg__535);
def triv : u32 = 0;
def cond__531 = (r);
if (cond__531) {
	def triv__532 = (B);
} else {
	def triv__533 = (B);
}
// phis: triv <- triv__532; triv <- triv__533; 
def out : u32 = 0;
def cond__526 = (p);
if (cond__526) {
	def out__527 = (triv);
} else {
	def arg__530 : u32 = 1;
	def arg__529 = (A);
	def out__528 = u32.+(arg__529, arg__530);
}
// phis: out <- out__527; out <- out__528; 
def arg__525 = (out);
def eff__524 = push_u32(arg__525);
</pre>`;
window.traces["P3_EFFECTFUL_VARIANT"]["initial_pretty"] = ''
window.traces["P3_EFFECTFUL_VARIANT"]["initial_pretty"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def c3 = pop_u32();
var A = 0;
if ((u32.!=((c2), 0))) {
	A = pop_u32();
} else {
	A = 5;
}
var triv = 0;
if ((u32.!=((c3), 0))) {
	triv = (u32.+((A), 0));
} else {
	triv = (u32.+((A), 0));
}
var out = 0;
if ((u32.!=((c1), 0))) {
	out = (triv);
} else {
	out = u32.+((A), 1);
}
push_u32((out));
</pre>`;
window.traces["P3_EFFECTFUL_VARIANT"]["raw"] = ''
window.traces["P3_EFFECTFUL_VARIANT"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	37 -. Stack .-> 1
	37["eff__524 push_u32"]
	35 --> 37
	20 -. Stack .-> 37
	20{{"sea__545 Sϕ Stack "}}
	11 --> 20
	18 --> 20
	5 --> 20
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	18["A__537 pop_u32"]
	5 -. Stack .-> 18
	11["q u32.!="]
	4 --> 11
	9 --> 11
	9["arg__542 0"]
	35{"out ϕ"}
	8 --> 35
	28 --> 35
	33 --> 35
	33["out__528 u32.+"]
	19 --> 33
	31 --> 33
	31["arg__530 1"]
	19{"A ϕ"}
	11 --> 19
	18 --> 19
	17 --> 19
	17["A__538 5"]
	28{"triv ϕ"}
	14 --> 28
	23 --> 28
	23 --> 28
	23["B u32.+"]
	19 --> 23
	21 --> 23
	21["arg__535 0"]
	14["r u32.!="]
	5 --> 14
	12 --> 14
	12["arg__540 0"]
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__544 0"]
</pre>`;
window.traces["P3_EFFECTFUL_VARIANT"]["scheduler_start"] = ''
window.traces["P3_EFFECTFUL_VARIANT"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	37 -. Stack .-> 1
	37["eff__524 push_u32"]
	35 --> 37
	20 -. Stack .-> 37
	20{{"sea__545 Sϕ Stack "}}
	11 --> 20
	40 --> 20
	41 --> 20
	41["mv_f__549 |False|  [u32.!= [q]]"]
	11 --> 41
	5 -. Stack .-> 41
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	11["q u32.!="]
	4 --> 11
	9 --> 11
	9["arg__542 0"]
	40["mv_t__548 |True|  [u32.!= [q]]"]
	11 --> 40
	18 -. Stack .-> 40
	18["A__537 pop_u32"]
	5 -. Stack .-> 18
	35{"out ϕ"}
	8 --> 35
	38 --> 35
	39 --> 35
	39["mv_f__547 |False|  [u32.!= [p]]"]
	8 --> 39
	33 --> 39
	33["out__528 u32.+"]
	19 --> 33
	31 --> 33
	31["arg__530 1"]
	19{"A ϕ"}
	11 --> 19
	44 --> 19
	45 --> 19
	45["mv_f__553 |False|  [u32.!= [q]]"]
	11 --> 45
	17 --> 45
	17["A__538 5"]
	44["mv_t__552 |True|  [u32.!= [q]]"]
	11 --> 44
	18 --> 44
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__544 0"]
	38["mv_t__546 |True|  [u32.!= [p]]"]
	8 --> 38
	28 --> 38
	28{"triv ϕ"}
	14 --> 28
	42 --> 28
	43 --> 28
	43["mv_f__551 |False|  [u32.!= [r]]"]
	14 --> 43
	23 --> 43
	23["B u32.+"]
	19 --> 23
	21 --> 23
	21["arg__535 0"]
	14["r u32.!="]
	5 --> 14
	12 --> 14
	12["arg__540 0"]
	42["mv_t__550 |True|  [u32.!= [r]]"]
	14 --> 42
	23 --> 42
</pre>`;
window.traces["P3_EFFECTFUL_VARIANT"]["untangled"] = ''
window.traces["P3_EFFECTFUL_VARIANT"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	37 -. Stack .-> 1
	37["eff__524 push_u32"]
	35 --> 37
	20 -. Stack .-> 37
	20{{"sea__545 Sϕ Stack "}}
	11 --> 20
	40 --> 20
	41 --> 20
	41["mv_f__549 |False|  [u32.!= [q]]"]
	11 --> 41
	5 -. Stack .-> 41
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	11["q u32.!="]
	4 --> 11
	9 --> 11
	9["arg__542 0"]
	40["mv_t__548 |True|  [u32.!= [q]]"]
	11 --> 40
	18 -. Stack .-> 40
	18["A__537 pop_u32"]
	5 -. Stack .-> 18
	35{"out ϕ"}
	8 --> 35
	38 --> 35
	39 --> 35
	39["mv_f__547 |False|  [u32.!= [p]]"]
	8 --> 39
	33 --> 39
	33["out__528 u32.+"]
	19 --> 33
	31 --> 33
	31["arg__530 1"]
	19{"A ϕ"}
	11 --> 19
	44 --> 19
	45 --> 19
	45["mv_f__553 |False|  [u32.!= [q]]"]
	11 --> 45
	17 --> 45
	17["A__538 5"]
	44["mv_t__552 |True|  [u32.!= [q]]"]
	11 --> 44
	18 --> 44
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__544 0"]
	38["mv_t__546 |True|  [u32.!= [p]]"]
	8 --> 38
	28 --> 38
	28{"triv ϕ"}
	14 --> 28
	42 --> 28
	43 --> 28
	43["mv_f__551 |False|  [u32.!= [r]]"]
	14 --> 43
	23 --> 43
	23["B u32.+"]
	19 --> 23
	21 --> 23
	21["arg__535 0"]
	14["r u32.!="]
	5 --> 14
	12 --> 14
	12["arg__540 0"]
	42["mv_t__550 |True|  [u32.!= [r]]"]
	14 --> 42
	23 --> 42
</pre>`;
window.traces["P3_EFFECTFUL_VARIANT"]["schedulerMermaid"] = ''
window.traces["P3_EFFECTFUL_VARIANT"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_453["Block 453"]
	direction TB
	b453_37["eff__524 push_u32"]
	b453_1[\\"Finish"/]
	b453_37 --> b453_1
end
phi_470 --> block_453
subgraph phi_470["Phi 470"]
	p470_35{"out ϕ"}
end
block_471 --> phi_470
block_472 --> phi_470
subgraph block_471["Block 471"]
	direction TB
	b471_38["mv_t__546 |True|  [u32.!= [p]]"]
end
phi_475 --> block_471
subgraph phi_475["Phi 475"]
	p475_28{"triv ϕ"}
end
block_476 --> phi_475
block_477 --> phi_475
subgraph block_476["Block 476"]
	direction TB
	b476_42["mv_t__550 |True|  [u32.!= [r]]"]
end
branch_474 --> block_476
subgraph branch_474["Branch 474"]
	br474_14["r u32.!="]

end
block_478 --> branch_474
subgraph block_478["Block 478"]
	direction TB
	b478_21["arg__535 0"]
	b478_23["B u32.+"]
	b478_12["arg__540 0"]
	b478_14["r u32.!="]
	b478_21 --> b478_23
	b478_23 --> b478_12
	b478_12 --> b478_14
end
branch_469 --> block_478
subgraph branch_469["Branch 469"]
	br469_8["p u32.!="]

end
block_473 --> branch_469
subgraph block_473["Block 473"]
	direction TB
	b473_6["arg__544 0"]
	b473_8["p u32.!="]
	b473_6 --> b473_8
end
phi_480 --> block_473
subgraph phi_480["Phi 480"]
	p480_20{{"sea__545 Sϕ Stack "}}
	p480_19{"A ϕ"}
end
block_481 --> phi_480
block_482 --> phi_480
subgraph block_481["Block 481"]
	direction TB
	b481_18["A__537 pop_u32"]
	b481_40["mv_t__548 |True|  [u32.!= [q]]"]
	b481_44["mv_t__552 |True|  [u32.!= [q]]"]
	b481_18 --> b481_40
	b481_40 --> b481_44
end
branch_479 --> block_481
subgraph branch_479["Branch 479"]
	br479_11["q u32.!="]

end
block_483 --> branch_479
subgraph block_483["Block 483"]
	direction TB
	b483_0[/"Start"\\]
	b483_3["c1 pop_u32"]
	b483_4["c2 pop_u32"]
	b483_5["c3 pop_u32"]
	b483_9["arg__542 0"]
	b483_11["q u32.!="]
	b483_0 --> b483_3
	b483_3 --> b483_4
	b483_4 --> b483_5
	b483_5 --> b483_9
	b483_9 --> b483_11
end
subgraph block_482["Block 482"]
	direction TB
	b482_17["A__538 5"]
	b482_41["mv_f__549 |False|  [u32.!= [q]]"]
	b482_45["mv_f__553 |False|  [u32.!= [q]]"]
	b482_17 --> b482_41
	b482_41 --> b482_45
end
branch_479 --> block_482
subgraph block_477["Block 477"]
	direction TB
	b477_43["mv_f__551 |False|  [u32.!= [r]]"]
end
branch_474 --> block_477
subgraph block_472["Block 472"]
	direction TB
	b472_31["arg__530 1"]
	b472_33["out__528 u32.+"]
	b472_39["mv_f__547 |False|  [u32.!= [p]]"]
	b472_31 --> b472_33
	b472_33 --> b472_39
end
branch_469 --> block_472

</pre>`;
window.traces["P3_EFFECTFUL_VARIANT"]["scheduler_ssad"] = ''
window.traces["P3_EFFECTFUL_VARIANT"]["scheduler_ssad"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def c3 = pop_u32();
def arg__542 : u32 = 0;
def q = u32.!=(c2, arg__542);
if (q) {
	def A__537 = pop_u32();
} else {
	def A__538 : u32 = 5;
}
// phis: A <- A__537; A <- A__538; 
def arg__544 : u32 = 0;
def p = u32.!=(c1, arg__544);
if (p) {
	def arg__535 : u32 = 0;
	def B = u32.+(A, arg__535);
	def arg__540 : u32 = 0;
	def r = u32.!=(c3, arg__540);
	if (r) {
	}
// phis: triv <- B; triv <- B; 
} else {
	def arg__530 : u32 = 1;
	def out__528 = u32.+(A, arg__530);
}
// phis: out <- triv; out <- out__528; 
def eff__524 = push_u32(out);
</pre>`;
window.traces["P3_EFFECTFUL_VARIANT"]["scheduler_ssad_pretty"] = ''
window.traces["P3_EFFECTFUL_VARIANT"]["scheduler_ssad_pretty"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def c3 = pop_u32();
var A: u32;
if (u32.!=(c2, 0)) {
	A = pop_u32();
} else {
	A = 5;
}
var out: u32;
if (u32.!=(c1, 0)) {
	def B = u32.+(A, 0);
	if (u32.!=(c3, 0)) {
		out = B;
	} else {
		out = B;
	}
} else {
	out = u32.+(A, 1);
}
push_u32(out);
</pre>`;
window.traces["P3_EFFECTFUL_VARIANT"]["unLEM"] = ''
window.traces["P3_EFFECTFUL_VARIANT"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	37 -. Stack .-> 1
	37["eff__524 push_u32"]
	35 --> 37
	20 -. Stack .-> 37
	20{{"sea__545 Sϕ Stack "}}
	45 --> 20
	47 --> 20
	46 --> 20
	46{{"innerPhi__574 Sϕ Stack "}}
	43 --> 46
	18 --> 46
	5 --> 46
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	18["A__537 pop_u32"]
	5 -. Stack .-> 18
	43["mt__571 U32_maybeTrue"]
	11 --> 43
	11["q u32.!="]
	4 --> 11
	9 --> 11
	9["arg__542 0"]
	47["eff_merge__575 merge"]
	18 --> 47
	5 --> 47
	45["mb__573 bool.&&"]
	43 --> 45
	44 --> 45
	44["mf__572 U32_maybeFalse"]
	11 --> 44
	35{"out ϕ"}
	40 --> 35
	42 --> 35
	41 --> 35
	41{"innerPhi__569 ϕ"}
	38 --> 41
	28 --> 41
	33 --> 41
	33["out__528 u32.+"]
	19 --> 33
	31 --> 33
	31["arg__530 1"]
	19{"A ϕ"}
	45 --> 19
	54 --> 19
	53 --> 19
	53{"innerPhi__581 ϕ"}
	43 --> 53
	18 --> 53
	17 --> 53
	17["A__538 5"]
	54["merge__582 merge"]
	18 --> 54
	17 --> 54
	28{"triv ϕ"}
	50 --> 28
	52 --> 28
	51 --> 28
	51{"innerPhi__579 ϕ"}
	48 --> 51
	23 --> 51
	23 --> 51
	23["B u32.+"]
	19 --> 23
	21 --> 23
	21["arg__535 0"]
	48["mt__576 U32_maybeTrue"]
	14 --> 48
	14["r u32.!="]
	5 --> 14
	12 --> 14
	12["arg__540 0"]
	52["merge__580 merge"]
	23 --> 52
	23 --> 52
	50["mb__578 bool.&&"]
	48 --> 50
	49 --> 50
	49["mf__577 U32_maybeFalse"]
	14 --> 49
	38["mt__566 U32_maybeTrue"]
	8 --> 38
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__544 0"]
	42["merge__570 merge"]
	28 --> 42
	33 --> 42
	40["mb__568 bool.&&"]
	38 --> 40
	39 --> 40
	39["mf__567 U32_maybeFalse"]
	8 --> 39
</pre>`;
window.traces["P3_EFFECTFUL_VARIANT_ul"] = {}
window.traces["P3_EFFECTFUL_VARIANT_ul"]["scheduler_start"] = ''
window.traces["P3_EFFECTFUL_VARIANT_ul"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	37 -. Stack .-> 1
	37["eff__524 push_u32"]
	35 --> 37
	20 -. Stack .-> 37
	20{{"sea__545 Sϕ Stack "}}
	45 --> 20
	57 --> 20
	58 --> 20
	58["mv_f__586 |False|  [bool.&& [mb__573]]"]
	45 --> 58
	46 -. Stack .-> 58
	46{{"innerPhi__574 Sϕ Stack "}}
	43 --> 46
	61 --> 46
	62 --> 46
	62["mv_f__590 |False|  [U32_maybeTrue [mt__571]]"]
	43 --> 62
	5 -. Stack .-> 62
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	43["mt__571 U32_maybeTrue"]
	11 --> 43
	11["q u32.!="]
	4 --> 11
	9 --> 11
	9["arg__542 0"]
	61["mv_t__589 |True|  [U32_maybeTrue [mt__571]]"]
	43 --> 61
	18 -. Stack .-> 61
	18["A__537 pop_u32"]
	5 -. Stack .-> 18
	45["mb__573 bool.&&"]
	43 --> 45
	44 --> 45
	44["mf__572 U32_maybeFalse"]
	11 --> 44
	57["mv_t__585 |True|  [bool.&& [mb__573]]"]
	45 --> 57
	47 -. Stack .-> 57
	47["eff_merge__575 merge"]
	18 --> 47
	5 --> 47
	35{"out ϕ"}
	40 --> 35
	55 --> 35
	56 --> 35
	56["mv_f__584 |False|  [bool.&& [mb__568]]"]
	40 --> 56
	41 --> 56
	41{"innerPhi__569 ϕ"}
	38 --> 41
	59 --> 41
	60 --> 41
	60["mv_f__588 |False|  [U32_maybeTrue [mt__566]]"]
	38 --> 60
	33 --> 60
	33["out__528 u32.+"]
	19 --> 33
	31 --> 33
	31["arg__530 1"]
	19{"A ϕ"}
	45 --> 19
	67 --> 19
	68 --> 19
	68["mv_f__596 |False|  [bool.&& [mb__573]]"]
	45 --> 68
	53 --> 68
	53{"innerPhi__581 ϕ"}
	43 --> 53
	69 --> 53
	70 --> 53
	70["mv_f__598 |False|  [U32_maybeTrue [mt__571]]"]
	43 --> 70
	17 --> 70
	17["A__538 5"]
	69["mv_t__597 |True|  [U32_maybeTrue [mt__571]]"]
	43 --> 69
	18 --> 69
	67["mv_t__595 |True|  [bool.&& [mb__573]]"]
	45 --> 67
	54 --> 67
	54["merge__582 merge"]
	18 --> 54
	17 --> 54
	38["mt__566 U32_maybeTrue"]
	8 --> 38
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__544 0"]
	59["mv_t__587 |True|  [U32_maybeTrue [mt__566]]"]
	38 --> 59
	28 --> 59
	28{"triv ϕ"}
	50 --> 28
	63 --> 28
	64 --> 28
	64["mv_f__592 |False|  [bool.&& [mb__578]]"]
	50 --> 64
	51 --> 64
	51{"innerPhi__579 ϕ"}
	48 --> 51
	65 --> 51
	66 --> 51
	66["mv_f__594 |False|  [U32_maybeTrue [mt__576]]"]
	48 --> 66
	23 --> 66
	23["B u32.+"]
	19 --> 23
	21 --> 23
	21["arg__535 0"]
	48["mt__576 U32_maybeTrue"]
	14 --> 48
	14["r u32.!="]
	5 --> 14
	12 --> 14
	12["arg__540 0"]
	65["mv_t__593 |True|  [U32_maybeTrue [mt__576]]"]
	48 --> 65
	23 --> 65
	50["mb__578 bool.&&"]
	48 --> 50
	49 --> 50
	49["mf__577 U32_maybeFalse"]
	14 --> 49
	63["mv_t__591 |True|  [bool.&& [mb__578]]"]
	50 --> 63
	52 --> 63
	52["merge__580 merge"]
	23 --> 52
	23 --> 52
	40["mb__568 bool.&&"]
	38 --> 40
	39 --> 40
	39["mf__567 U32_maybeFalse"]
	8 --> 39
	55["mv_t__583 |True|  [bool.&& [mb__568]]"]
	40 --> 55
	42 --> 55
	42["merge__570 merge"]
	28 --> 42
	33 --> 42
</pre>`;
window.traces["P3_EFFECTFUL_VARIANT_ul"]["untangled"] = ''
window.traces["P3_EFFECTFUL_VARIANT_ul"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	37 -. Stack .-> 1
	37["eff__524 push_u32"]
	35 --> 37
	20 -. Stack .-> 37
	20{{"sea__545 Sϕ Stack "}}
	45 --> 20
	57 --> 20
	58 --> 20
	58["mv_f__586 |False|  [bool.&& [mb__573]]"]
	45 --> 58
	46 -. Stack .-> 58
	46{{"innerPhi__574 Sϕ Stack "}}
	43 --> 46
	61 --> 46
	62 --> 46
	62["mv_f__590 |False|  [U32_maybeTrue [mt__571]]"]
	43 --> 62
	5 -. Stack .-> 62
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	43["mt__571 U32_maybeTrue"]
	11 --> 43
	11["q u32.!="]
	4 --> 11
	9 --> 11
	9["arg__542 0"]
	61["mv_t__589 |True|  [U32_maybeTrue [mt__571]]"]
	43 --> 61
	84 -. Stack .-> 61
	84["A__537__600 pop_u32"]
	5 -. Stack .-> 84
	45["mb__573 bool.&&"]
	43 --> 45
	44 --> 45
	44["mf__572 U32_maybeFalse"]
	11 --> 44
	57["mv_t__585 |True|  [bool.&& [mb__573]]"]
	45 --> 57
	47 -. Stack .-> 57
	47["eff_merge__575 merge"]
	18 --> 47
	5 --> 47
	18["A__537 pop_u32"]
	5 -. Stack .-> 18
	35{"out ϕ"}
	40 --> 35
	55 --> 35
	56 --> 35
	56["mv_f__584 |False|  [bool.&& [mb__568]]"]
	40 --> 56
	41 --> 56
	41{"innerPhi__569 ϕ"}
	38 --> 41
	59 --> 41
	60 --> 41
	60["mv_f__588 |False|  [U32_maybeTrue [mt__566]]"]
	38 --> 60
	33 --> 60
	33["out__528 u32.+"]
	19 --> 33
	31 --> 33
	31["arg__530 1"]
	19{"A ϕ"}
	45 --> 19
	67 --> 19
	68 --> 19
	68["mv_f__596 |False|  [bool.&& [mb__573]]"]
	45 --> 68
	53 --> 68
	53{"innerPhi__581 ϕ"}
	43 --> 53
	69 --> 53
	70 --> 53
	70["mv_f__598 |False|  [U32_maybeTrue [mt__571]]"]
	43 --> 70
	83 --> 70
	83["A__538__599 5"]
	69["mv_t__597 |True|  [U32_maybeTrue [mt__571]]"]
	43 --> 69
	84 --> 69
	67["mv_t__595 |True|  [bool.&& [mb__573]]"]
	45 --> 67
	54 --> 67
	54["merge__582 merge"]
	18 --> 54
	17 --> 54
	17["A__538 5"]
	38["mt__566 U32_maybeTrue"]
	8 --> 38
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__544 0"]
	59["mv_t__587 |True|  [U32_maybeTrue [mt__566]]"]
	38 --> 59
	28 --> 59
	28{"triv ϕ"}
	50 --> 28
	63 --> 28
	64 --> 28
	64["mv_f__592 |False|  [bool.&& [mb__578]]"]
	50 --> 64
	51 --> 64
	51{"innerPhi__579 ϕ"}
	48 --> 51
	65 --> 51
	66 --> 51
	66["mv_f__594 |False|  [U32_maybeTrue [mt__576]]"]
	48 --> 66
	23 --> 66
	23["B u32.+"]
	19 --> 23
	21 --> 23
	21["arg__535 0"]
	48["mt__576 U32_maybeTrue"]
	14 --> 48
	14["r u32.!="]
	5 --> 14
	12 --> 14
	12["arg__540 0"]
	65["mv_t__593 |True|  [U32_maybeTrue [mt__576]]"]
	48 --> 65
	23 --> 65
	50["mb__578 bool.&&"]
	48 --> 50
	49 --> 50
	49["mf__577 U32_maybeFalse"]
	14 --> 49
	63["mv_t__591 |True|  [bool.&& [mb__578]]"]
	50 --> 63
	52 --> 63
	52["merge__580 merge"]
	23 --> 52
	23 --> 52
	40["mb__568 bool.&&"]
	38 --> 40
	39 --> 40
	39["mf__567 U32_maybeFalse"]
	8 --> 39
	55["mv_t__583 |True|  [bool.&& [mb__568]]"]
	40 --> 55
	42 --> 55
	42["merge__570 merge"]
	28 --> 42
	33 --> 42
</pre>`;
window.traces["P3_EFFECTFUL_VARIANT"]["unlem_schedule"] = ''
window.traces["P3_EFFECTFUL_VARIANT"]["unlem_schedule"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def c3 = pop_u32();
def arg__542 : u32 = 0;
def q = u32.!=(c2, arg__542);
def mt__571 = U32_maybeTrue(q);
def mf__572 = U32_maybeFalse(q);
def mb__573 = bool.&&(mt__571, mf__572);
if (mb__573) {
	def A__537 = pop_u32();
	def A__538 : u32 = 5;
	def eff_merge__575 = merge(A__537, c3);
	def merge__582 = merge(A__537, A__538);
} else {
	if (mt__571) {
		def A__537__600 = pop_u32();
		def A__537 = (A__537__600);
	} else {
		def A__538__599 : u32 = 5;
	}
// phis: innerPhi__581 <- A__537__600; innerPhi__581 <- A__538__599; 
}
// phis: A <- merge__582; A <- innerPhi__581; 
def arg__535 : u32 = 0;
def arg__540 : u32 = 0;
def B = u32.+(A, arg__535);
def r = u32.!=(c3, arg__540);
def mt__576 = U32_maybeTrue(r);
def mf__577 = U32_maybeFalse(r);
def mb__578 = bool.&&(mt__576, mf__577);
if (mb__578) {
	def merge__580 = merge(B, B);
} else {
	if (mt__576) {
	}
// phis: innerPhi__579 <- B; innerPhi__579 <- B; 
}
// phis: triv <- merge__580; triv <- innerPhi__579; 
def arg__530 : u32 = 1;
def arg__544 : u32 = 0;
def out__528 = u32.+(A, arg__530);
def p = u32.!=(c1, arg__544);
def mt__566 = U32_maybeTrue(p);
def mf__567 = U32_maybeFalse(p);
def mb__568 = bool.&&(mt__566, mf__567);
if (mb__568) {
	def merge__570 = merge(triv, out__528);
} else {
	if (mt__566) {
	}
// phis: innerPhi__569 <- triv; innerPhi__569 <- out__528; 
}
// phis: out <- merge__570; out <- innerPhi__569; 
def eff__524 = push_u32(out);
</pre>`;
window.traces["P3_EFFECTFUL_VARIANT"]["unlem_scheduler"] = ''
window.traces["P3_EFFECTFUL_VARIANT"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_484["Block 484"]
	direction TB
	b484_37["eff__524 push_u32"]
	b484_1[\\"Finish"/]
	b484_37 --> b484_1
end
phi_516 --> block_484
subgraph phi_516["Phi 516"]
	p516_35{"out ϕ"}
end
block_517 --> phi_516
block_518 --> phi_516
subgraph block_517["Block 517"]
	direction TB
	b517_42["merge__570 merge"]
	b517_55["mv_t__583 |True|  [bool.&& [mb__568]]"]
	b517_42 --> b517_55
end
branch_515 --> block_517
subgraph branch_515["Branch 515"]
	br515_40["mb__568 bool.&&"]

end
block_519 --> branch_515
subgraph block_519["Block 519"]
	direction TB
	b519_31["arg__530 1"]
	b519_6["arg__544 0"]
	b519_33["out__528 u32.+"]
	b519_8["p u32.!="]
	b519_38["mt__566 U32_maybeTrue"]
	b519_39["mf__567 U32_maybeFalse"]
	b519_40["mb__568 bool.&&"]
	b519_31 --> b519_6
	b519_6 --> b519_33
	b519_33 --> b519_8
	b519_8 --> b519_38
	b519_38 --> b519_39
	b519_39 --> b519_40
end
phi_525 --> block_519
subgraph phi_525["Phi 525"]
	p525_28{"triv ϕ"}
end
block_526 --> phi_525
block_527 --> phi_525
subgraph block_526["Block 526"]
	direction TB
	b526_52["merge__580 merge"]
	b526_63["mv_t__591 |True|  [bool.&& [mb__578]]"]
	b526_52 --> b526_63
end
branch_524 --> block_526
subgraph branch_524["Branch 524"]
	br524_50["mb__578 bool.&&"]

end
block_528 --> branch_524
subgraph block_528["Block 528"]
	direction TB
	b528_21["arg__535 0"]
	b528_12["arg__540 0"]
	b528_23["B u32.+"]
	b528_14["r u32.!="]
	b528_48["mt__576 U32_maybeTrue"]
	b528_49["mf__577 U32_maybeFalse"]
	b528_50["mb__578 bool.&&"]
	b528_21 --> b528_12
	b528_12 --> b528_23
	b528_23 --> b528_14
	b528_14 --> b528_48
	b528_48 --> b528_49
	b528_49 --> b528_50
end
phi_534 --> block_528
subgraph phi_534["Phi 534"]
	p534_20{{"sea__545 Sϕ Stack "}}
	p534_19{"A ϕ"}
end
block_535 --> phi_534
block_536 --> phi_534
subgraph block_535["Block 535"]
	direction TB
	b535_18["A__537 pop_u32"]
	b535_17["A__538 5"]
	b535_47["eff_merge__575 merge"]
	b535_54["merge__582 merge"]
	b535_57["mv_t__585 |True|  [bool.&& [mb__573]]"]
	b535_67["mv_t__595 |True|  [bool.&& [mb__573]]"]
	b535_18 --> b535_17
	b535_17 --> b535_47
	b535_47 --> b535_54
	b535_54 --> b535_57
	b535_57 --> b535_67
end
branch_533 --> block_535
subgraph branch_533["Branch 533"]
	br533_45["mb__573 bool.&&"]

end
block_537 --> branch_533
subgraph block_537["Block 537"]
	direction TB
	b537_0[/"Start"\\]
	b537_3["c1 pop_u32"]
	b537_4["c2 pop_u32"]
	b537_5["c3 pop_u32"]
	b537_9["arg__542 0"]
	b537_11["q u32.!="]
	b537_43["mt__571 U32_maybeTrue"]
	b537_44["mf__572 U32_maybeFalse"]
	b537_45["mb__573 bool.&&"]
	b537_0 --> b537_3
	b537_3 --> b537_4
	b537_4 --> b537_5
	b537_5 --> b537_9
	b537_9 --> b537_11
	b537_11 --> b537_43
	b537_43 --> b537_44
	b537_44 --> b537_45
end
subgraph block_536["Block 536"]
	direction TB
	b536_58["mv_f__586 |False|  [bool.&& [mb__573]]"]
	b536_68["mv_f__596 |False|  [bool.&& [mb__573]]"]
	b536_58 --> b536_68
end
phi_539 --> block_536
subgraph phi_539["Phi 539"]
	p539_53{"innerPhi__581 ϕ"}
	p539_46{{"innerPhi__574 Sϕ Stack "}}
end
block_540 --> phi_539
block_541 --> phi_539
subgraph block_540["Block 540"]
	direction TB
	b540_84["A__537__600 pop_u32"]
	b540_69["mv_t__597 |True|  [U32_maybeTrue [mt__571]]"]
	b540_61["mv_t__589 |True|  [U32_maybeTrue [mt__571]]"]
	b540_84 --> b540_69
	b540_69 --> b540_61
end
branch_538 --> block_540
subgraph branch_538["Branch 538"]
	br538_43["mt__571 U32_maybeTrue"]

end
branch_533 --> branch_538
subgraph block_541["Block 541"]
	direction TB
	b541_83["A__538__599 5"]
	b541_70["mv_f__598 |False|  [U32_maybeTrue [mt__571]]"]
	b541_62["mv_f__590 |False|  [U32_maybeTrue [mt__571]]"]
	b541_83 --> b541_70
	b541_70 --> b541_62
end
branch_538 --> block_541
subgraph block_527["Block 527"]
	direction TB
	b527_64["mv_f__592 |False|  [bool.&& [mb__578]]"]
end
phi_530 --> block_527
subgraph phi_530["Phi 530"]
	p530_51{"innerPhi__579 ϕ"}
end
block_531 --> phi_530
block_532 --> phi_530
subgraph block_531["Block 531"]
	direction TB
	b531_65["mv_t__593 |True|  [U32_maybeTrue [mt__576]]"]
end
branch_529 --> block_531
subgraph branch_529["Branch 529"]
	br529_48["mt__576 U32_maybeTrue"]

end
branch_524 --> branch_529
subgraph block_532["Block 532"]
	direction TB
	b532_66["mv_f__594 |False|  [U32_maybeTrue [mt__576]]"]
end
branch_529 --> block_532
subgraph block_518["Block 518"]
	direction TB
	b518_56["mv_f__584 |False|  [bool.&& [mb__568]]"]
end
phi_521 --> block_518
subgraph phi_521["Phi 521"]
	p521_41{"innerPhi__569 ϕ"}
end
block_522 --> phi_521
block_523 --> phi_521
subgraph block_522["Block 522"]
	direction TB
	b522_59["mv_t__587 |True|  [U32_maybeTrue [mt__566]]"]
end
branch_520 --> block_522
subgraph branch_520["Branch 520"]
	br520_38["mt__566 U32_maybeTrue"]

end
branch_515 --> branch_520
subgraph block_523["Block 523"]
	direction TB
	b523_60["mv_f__588 |False|  [U32_maybeTrue [mt__566]]"]
end
branch_520 --> block_523

</pre>`;
window.traces["P3_EFFECTFUL_VARIANT"]["unlem_scheduler_ssa"] = ''
window.traces["P3_EFFECTFUL_VARIANT"]["unlem_scheduler_ssa"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def c3 = pop_u32();
def arg__542 : u32 = 0;
def q = u32.!=(c2, arg__542);
def mt__571 = U32_maybeTrue(q);
def mf__572 = U32_maybeFalse(q);
def mb__573 = bool.&&(mt__571, mf__572);
if (mb__573) {
	def A__537 = pop_u32();
	def A__538 : u32 = 5;
	def eff_merge__575 = merge(A__537, c3);
	def merge__582 = merge(A__537, A__538);
} else {
	if (mt__571) {
		def A__537__600 = pop_u32();
		def A__537 = (A__537__600);
	} else {
		def A__538__599 : u32 = 5;
	}
// phis: innerPhi__581 <- A__537__600; innerPhi__581 <- A__538__599; 
}
// phis: A <- merge__582; A <- innerPhi__581; 
def arg__535 : u32 = 0;
def arg__540 : u32 = 0;
def B = u32.+(A, arg__535);
def r = u32.!=(c3, arg__540);
def mt__576 = U32_maybeTrue(r);
def mf__577 = U32_maybeFalse(r);
def mb__578 = bool.&&(mt__576, mf__577);
if (mb__578) {
	def merge__580 = merge(B, B);
} else {
	if (mt__576) {
	}
// phis: innerPhi__579 <- B; innerPhi__579 <- B; 
}
// phis: triv <- merge__580; triv <- innerPhi__579; 
def arg__530 : u32 = 1;
def arg__544 : u32 = 0;
def out__528 = u32.+(A, arg__530);
def p = u32.!=(c1, arg__544);
def mt__566 = U32_maybeTrue(p);
def mf__567 = U32_maybeFalse(p);
def mb__568 = bool.&&(mt__566, mf__567);
if (mb__568) {
	def merge__570 = merge(triv, out__528);
} else {
	if (mt__566) {
	}
// phis: innerPhi__569 <- triv; innerPhi__569 <- out__528; 
}
// phis: out <- merge__570; out <- innerPhi__569; 
def eff__524 = push_u32(out);
</pre>`;
window.traces["P3_EFFECTFUL_VARIANT"]["unlem_scheduler_ssa_pretty"] = ''
window.traces["P3_EFFECTFUL_VARIANT"]["unlem_scheduler_ssa_pretty"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def c3 = pop_u32();
def mt = U32_maybeTrue(u32.!=(c2, 0));
def mf = U32_maybeFalse(u32.!=(c2, 0));
var A: u32;
if (bool.&&(mt, mf)) {
	A = pop_u32();
	A = merge(A, 5);
} else {
	if (mt) {
		A = pop_u32();
	} else {
		A = 5;
	}
}
def B = u32.+(A, 0);
def mt1 = U32_maybeTrue(u32.!=(c3, 0));
def mf1 = U32_maybeFalse(u32.!=(c3, 0));
var triv: u32;
if (bool.&&(mt1, mf1)) {
	triv = merge(B, B);
} else {
	if (mt1) {
		triv = B;
	} else {
		triv = B;
	}
}
var out = u32.+(A, 1);
def mt2 = U32_maybeTrue(u32.!=(c1, 0));
def mf2 = U32_maybeFalse(u32.!=(c1, 0));
if (bool.&&(mt2, mf2)) {
	out = merge(triv, out);
} else {
	if (mt2) {
	}
}
push_u32(out);
</pre>`;
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"] = {}
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["parsed"] = ''
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["parsed"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def c3 = pop_u32();
def arg__651 : u32 = 0;
def arg__650 = (c1);
def p = u32.!=(arg__650, arg__651);
def arg__649 : u32 = 0;
def arg__648 = (c2);
def q = u32.!=(arg__648, arg__649);
def arg__647 : u32 = 0;
def arg__646 = (c3);
def r = u32.!=(arg__646, arg__647);
def x : u32 = 0;
def cond__639 = (p);
if (cond__639) {
	def cond__640 = (q);
	if (cond__640) {
		def x__641 = pop_u32();
	} else {
		def x__642 : u32 = 10;
	}
// phis: x <- x__641; x <- x__642; 
} else {
	def cond__643 = (q);
	if (cond__643) {
		def x__644 = pop_u32();
	} else {
		def x__645 : u32 = 20;
	}
// phis: x <- x__644; x <- x__645; 
}
// phis: x <- x; x <- x; 
def y : u32 = 0;
def cond__632 = (r);
if (cond__632) {
	def arg__635 : u32 = 1;
	def arg__634 = (x);
	def y__633 = u32.+(arg__634, arg__635);
} else {
	def arg__638 : u32 = 2;
	def arg__637 = (x);
	def y__636 = u32.+(arg__637, arg__638);
}
// phis: y <- y__633; y <- y__636; 
def z : u32 = 0;
def cond__627 = (p);
if (cond__627) {
	def z__628 = (y);
} else {
	def arg__631 : u32 = 3;
	def arg__630 = (x);
	def z__629 = u32.+(arg__630, arg__631);
}
// phis: z <- z__628; z <- z__629; 
def arg__626 = (z);
def eff__625 = push_u32(arg__626);
</pre>`;
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["initial_pretty"] = ''
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["initial_pretty"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def c3 = pop_u32();
var x = 0;
if ((u32.!=((c1), 0))) {
	if ((u32.!=((c2), 0))) {
		x = pop_u32();
	} else {
		x = 10;
	}
} else {
	if ((u32.!=((c2), 0))) {
		x = pop_u32();
	} else {
		x = 20;
	}
}
var y = 0;
if ((u32.!=((c3), 0))) {
	y = u32.+((x), 1);
} else {
	y = u32.+((x), 2);
}
var z = 0;
if ((u32.!=((c1), 0))) {
	z = (y);
} else {
	z = u32.+((x), 3);
}
push_u32((z));
</pre>`;
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["raw"] = ''
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	46 -. Stack .-> 1
	46["eff__625 push_u32"]
	44 --> 46
	28 -. Stack .-> 46
	28{{"sea__654 Sϕ Stack "}}
	8 --> 28
	26 --> 28
	21 --> 28
	21{{"sea__652 Sϕ Stack "}}
	11 --> 21
	19 --> 21
	5 --> 21
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	19["x__644 pop_u32"]
	5 -. Stack .-> 19
	11["q u32.!="]
	4 --> 11
	9 --> 11
	9["arg__649 0"]
	26{{"sea__653 Sϕ Stack "}}
	11 --> 26
	24 --> 26
	5 --> 26
	24["x__641 pop_u32"]
	5 -. Stack .-> 24
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__651 0"]
	44{"z ϕ"}
	8 --> 44
	37 --> 44
	42 --> 44
	42["z__629 u32.+"]
	27 --> 42
	40 --> 42
	40["arg__631 3"]
	27{"x ϕ"}
	8 --> 27
	25 --> 27
	20 --> 27
	20{"x ϕ"}
	11 --> 20
	19 --> 20
	18 --> 20
	18["x__645 20"]
	25{"x ϕ"}
	11 --> 25
	24 --> 25
	23 --> 25
	23["x__642 10"]
	37{"y ϕ"}
	14 --> 37
	36 --> 37
	33 --> 37
	33["y__636 u32.+"]
	27 --> 33
	31 --> 33
	31["arg__638 2"]
	36["y__633 u32.+"]
	27 --> 36
	34 --> 36
	34["arg__635 1"]
	14["r u32.!="]
	5 --> 14
	12 --> 14
	12["arg__647 0"]
</pre>`;
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["scheduler_start"] = ''
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	46 -. Stack .-> 1
	46["eff__625 push_u32"]
	44 --> 46
	28 -. Stack .-> 46
	28{{"sea__654 Sϕ Stack "}}
	8 --> 28
	49 --> 28
	50 --> 28
	50["mv_f__658 |False|  [u32.!= [p]]"]
	8 --> 50
	21 -. Stack .-> 50
	21{{"sea__652 Sϕ Stack "}}
	11 --> 21
	55 --> 21
	56 --> 21
	56["mv_f__664 |False|  [u32.!= [q]]"]
	11 --> 56
	5 -. Stack .-> 56
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	11["q u32.!="]
	4 --> 11
	9 --> 11
	9["arg__649 0"]
	55["mv_t__663 |True|  [u32.!= [q]]"]
	11 --> 55
	19 -. Stack .-> 55
	19["x__644 pop_u32"]
	5 -. Stack .-> 19
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__651 0"]
	49["mv_t__657 |True|  [u32.!= [p]]"]
	8 --> 49
	26 -. Stack .-> 49
	26{{"sea__653 Sϕ Stack "}}
	11 --> 26
	53 --> 26
	54 --> 26
	54["mv_f__662 |False|  [u32.!= [q]]"]
	11 --> 54
	5 -. Stack .-> 54
	53["mv_t__661 |True|  [u32.!= [q]]"]
	11 --> 53
	24 -. Stack .-> 53
	24["x__641 pop_u32"]
	5 -. Stack .-> 24
	44{"z ϕ"}
	8 --> 44
	47 --> 44
	48 --> 44
	48["mv_f__656 |False|  [u32.!= [p]]"]
	8 --> 48
	42 --> 48
	42["z__629 u32.+"]
	27 --> 42
	40 --> 42
	40["arg__631 3"]
	27{"x ϕ"}
	8 --> 27
	57 --> 27
	58 --> 27
	58["mv_f__666 |False|  [u32.!= [p]]"]
	8 --> 58
	20 --> 58
	20{"x ϕ"}
	11 --> 20
	61 --> 20
	62 --> 20
	62["mv_f__670 |False|  [u32.!= [q]]"]
	11 --> 62
	18 --> 62
	18["x__645 20"]
	61["mv_t__669 |True|  [u32.!= [q]]"]
	11 --> 61
	19 --> 61
	57["mv_t__665 |True|  [u32.!= [p]]"]
	8 --> 57
	25 --> 57
	25{"x ϕ"}
	11 --> 25
	59 --> 25
	60 --> 25
	60["mv_f__668 |False|  [u32.!= [q]]"]
	11 --> 60
	23 --> 60
	23["x__642 10"]
	59["mv_t__667 |True|  [u32.!= [q]]"]
	11 --> 59
	24 --> 59
	47["mv_t__655 |True|  [u32.!= [p]]"]
	8 --> 47
	37 --> 47
	37{"y ϕ"}
	14 --> 37
	51 --> 37
	52 --> 37
	52["mv_f__660 |False|  [u32.!= [r]]"]
	14 --> 52
	33 --> 52
	33["y__636 u32.+"]
	27 --> 33
	31 --> 33
	31["arg__638 2"]
	14["r u32.!="]
	5 --> 14
	12 --> 14
	12["arg__647 0"]
	51["mv_t__659 |True|  [u32.!= [r]]"]
	14 --> 51
	36 --> 51
	36["y__633 u32.+"]
	27 --> 36
	34 --> 36
	34["arg__635 1"]
</pre>`;
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["untangled"] = ''
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	46 -. Stack .-> 1
	46["eff__625 push_u32"]
	44 --> 46
	28 -. Stack .-> 46
	28{{"sea__654 Sϕ Stack "}}
	8 --> 28
	49 --> 28
	50 --> 28
	50["mv_f__658 |False|  [u32.!= [p]]"]
	8 --> 50
	21 -. Stack .-> 50
	21{{"sea__652 Sϕ Stack "}}
	11 --> 21
	55 --> 21
	56 --> 21
	56["mv_f__664 |False|  [u32.!= [q]]"]
	11 --> 56
	5 -. Stack .-> 56
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	11["q u32.!="]
	4 --> 11
	9 --> 11
	9["arg__649 0"]
	55["mv_t__663 |True|  [u32.!= [q]]"]
	11 --> 55
	19 -. Stack .-> 55
	19["x__644 pop_u32"]
	5 -. Stack .-> 19
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__651 0"]
	49["mv_t__657 |True|  [u32.!= [p]]"]
	8 --> 49
	26 -. Stack .-> 49
	26{{"sea__653 Sϕ Stack "}}
	11 --> 26
	53 --> 26
	54 --> 26
	54["mv_f__662 |False|  [u32.!= [q]]"]
	11 --> 54
	5 -. Stack .-> 54
	53["mv_t__661 |True|  [u32.!= [q]]"]
	11 --> 53
	24 -. Stack .-> 53
	24["x__641 pop_u32"]
	5 -. Stack .-> 24
	44{"z ϕ"}
	8 --> 44
	47 --> 44
	48 --> 44
	48["mv_f__656 |False|  [u32.!= [p]]"]
	8 --> 48
	42 --> 48
	42["z__629 u32.+"]
	27 --> 42
	40 --> 42
	40["arg__631 3"]
	27{"x ϕ"}
	8 --> 27
	57 --> 27
	58 --> 27
	58["mv_f__666 |False|  [u32.!= [p]]"]
	8 --> 58
	20 --> 58
	20{"x ϕ"}
	11 --> 20
	61 --> 20
	62 --> 20
	62["mv_f__670 |False|  [u32.!= [q]]"]
	11 --> 62
	18 --> 62
	18["x__645 20"]
	61["mv_t__669 |True|  [u32.!= [q]]"]
	11 --> 61
	19 --> 61
	57["mv_t__665 |True|  [u32.!= [p]]"]
	8 --> 57
	25 --> 57
	25{"x ϕ"}
	11 --> 25
	59 --> 25
	60 --> 25
	60["mv_f__668 |False|  [u32.!= [q]]"]
	11 --> 60
	23 --> 60
	23["x__642 10"]
	59["mv_t__667 |True|  [u32.!= [q]]"]
	11 --> 59
	24 --> 59
	47["mv_t__655 |True|  [u32.!= [p]]"]
	8 --> 47
	37 --> 47
	37{"y ϕ"}
	14 --> 37
	51 --> 37
	52 --> 37
	52["mv_f__660 |False|  [u32.!= [r]]"]
	14 --> 52
	33 --> 52
	33["y__636 u32.+"]
	27 --> 33
	31 --> 33
	31["arg__638 2"]
	14["r u32.!="]
	5 --> 14
	12 --> 14
	12["arg__647 0"]
	51["mv_t__659 |True|  [u32.!= [r]]"]
	14 --> 51
	36 --> 51
	36["y__633 u32.+"]
	27 --> 36
	34 --> 36
	34["arg__635 1"]
</pre>`;
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["schedulerMermaid"] = ''
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_542["Block 542"]
	direction TB
	b542_46["eff__625 push_u32"]
	b542_1[\\"Finish"/]
	b542_46 --> b542_1
end
phi_569 --> block_542
subgraph phi_569["Phi 569"]
	p569_44{"z ϕ"}
end
block_570 --> phi_569
block_571 --> phi_569
subgraph block_570["Block 570"]
	direction TB
	b570_47["mv_t__655 |True|  [u32.!= [p]]"]
end
phi_573 --> block_570
subgraph phi_573["Phi 573"]
	p573_37{"y ϕ"}
end
block_574 --> phi_573
block_575 --> phi_573
subgraph block_574["Block 574"]
	direction TB
	b574_34["arg__635 1"]
	b574_36["y__633 u32.+"]
	b574_51["mv_t__659 |True|  [u32.!= [r]]"]
	b574_34 --> b574_36
	b574_36 --> b574_51
end
branch_572 --> block_574
subgraph branch_572["Branch 572"]
	br572_14["r u32.!="]

end
block_576 --> branch_572
subgraph block_576["Block 576"]
	direction TB
	b576_12["arg__647 0"]
	b576_14["r u32.!="]
	b576_12 --> b576_14
end
branch_568 --> block_576
subgraph branch_568["Branch 568"]
	br568_8["p u32.!="]

end
phi_578 --> branch_568
subgraph phi_578["Phi 578"]
	p578_28{{"sea__654 Sϕ Stack "}}
	p578_27{"x ϕ"}
end
block_579 --> phi_578
block_580 --> phi_578
subgraph block_579["Block 579"]
	direction TB
	b579_49["mv_t__657 |True|  [u32.!= [p]]"]
	b579_57["mv_t__665 |True|  [u32.!= [p]]"]
	b579_49 --> b579_57
end
phi_583 --> block_579
subgraph phi_583["Phi 583"]
	p583_25{"x ϕ"}
	p583_26{{"sea__653 Sϕ Stack "}}
end
block_584 --> phi_583
block_585 --> phi_583
subgraph block_584["Block 584"]
	direction TB
	b584_24["x__641 pop_u32"]
	b584_59["mv_t__667 |True|  [u32.!= [q]]"]
	b584_53["mv_t__661 |True|  [u32.!= [q]]"]
	b584_24 --> b584_59
	b584_59 --> b584_53
end
branch_582 --> block_584
subgraph branch_582["Branch 582"]
	br582_11["q u32.!="]

end
branch_577 --> branch_582
subgraph branch_577["Branch 577"]
	br577_8["p u32.!="]

end
block_581 --> branch_577
subgraph block_581["Block 581"]
	direction TB
	b581_0[/"Start"\\]
	b581_3["c1 pop_u32"]
	b581_4["c2 pop_u32"]
	b581_5["c3 pop_u32"]
	b581_9["arg__649 0"]
	b581_11["q u32.!="]
	b581_6["arg__651 0"]
	b581_8["p u32.!="]
	b581_0 --> b581_3
	b581_3 --> b581_4
	b581_4 --> b581_5
	b581_5 --> b581_9
	b581_9 --> b581_11
	b581_11 --> b581_6
	b581_6 --> b581_8
end
subgraph block_585["Block 585"]
	direction TB
	b585_23["x__642 10"]
	b585_60["mv_f__668 |False|  [u32.!= [q]]"]
	b585_54["mv_f__662 |False|  [u32.!= [q]]"]
	b585_23 --> b585_60
	b585_60 --> b585_54
end
branch_582 --> block_585
subgraph block_580["Block 580"]
	direction TB
	b580_50["mv_f__658 |False|  [u32.!= [p]]"]
	b580_58["mv_f__666 |False|  [u32.!= [p]]"]
	b580_50 --> b580_58
end
phi_587 --> block_580
subgraph phi_587["Phi 587"]
	p587_20{"x ϕ"}
	p587_21{{"sea__652 Sϕ Stack "}}
end
block_588 --> phi_587
block_589 --> phi_587
subgraph block_588["Block 588"]
	direction TB
	b588_19["x__644 pop_u32"]
	b588_61["mv_t__669 |True|  [u32.!= [q]]"]
	b588_55["mv_t__663 |True|  [u32.!= [q]]"]
	b588_19 --> b588_61
	b588_61 --> b588_55
end
branch_586 --> block_588
subgraph branch_586["Branch 586"]
	br586_11["q u32.!="]

end
branch_577 --> branch_586
subgraph block_589["Block 589"]
	direction TB
	b589_18["x__645 20"]
	b589_62["mv_f__670 |False|  [u32.!= [q]]"]
	b589_56["mv_f__664 |False|  [u32.!= [q]]"]
	b589_18 --> b589_62
	b589_62 --> b589_56
end
branch_586 --> block_589
subgraph block_575["Block 575"]
	direction TB
	b575_31["arg__638 2"]
	b575_33["y__636 u32.+"]
	b575_52["mv_f__660 |False|  [u32.!= [r]]"]
	b575_31 --> b575_33
	b575_33 --> b575_52
end
branch_572 --> block_575
subgraph block_571["Block 571"]
	direction TB
	b571_40["arg__631 3"]
	b571_42["z__629 u32.+"]
	b571_48["mv_f__656 |False|  [u32.!= [p]]"]
	b571_40 --> b571_42
	b571_42 --> b571_48
end
branch_568 --> block_571

</pre>`;
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["scheduler_ssad"] = ''
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["scheduler_ssad"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def c3 = pop_u32();
def arg__649 : u32 = 0;
def q = u32.!=(c2, arg__649);
def arg__651 : u32 = 0;
def p = u32.!=(c1, arg__651);
if (p) {
	if (q) {
		def x__641 = pop_u32();
	} else {
		def x__642 : u32 = 10;
	}
// phis: x <- x__641; x <- x__642; 
} else {
	if (q) {
		def x__644 = pop_u32();
	} else {
		def x__645 : u32 = 20;
	}
// phis: x <- x__644; x <- x__645; 
}
// phis: x <- x; x <- x; 
if (p) {
	def arg__647 : u32 = 0;
	def r = u32.!=(c3, arg__647);
	if (r) {
		def arg__635 : u32 = 1;
		def y__633 = u32.+(x, arg__635);
	} else {
		def arg__638 : u32 = 2;
		def y__636 = u32.+(x, arg__638);
	}
// phis: y <- y__633; y <- y__636; 
} else {
	def arg__631 : u32 = 3;
	def z__629 = u32.+(x, arg__631);
}
// phis: z <- y; z <- z__629; 
def eff__625 = push_u32(z);
</pre>`;
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["scheduler_ssad_pretty"] = ''
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["scheduler_ssad_pretty"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def c3 = pop_u32();
var x: u32;
if (u32.!=(c1, 0)) {
	if (u32.!=(c2, 0)) {
		x = pop_u32();
	} else {
		x = 10;
	}
} else {
	if (u32.!=(c2, 0)) {
		x = pop_u32();
	} else {
		x = 20;
	}
}
var z: u32;
if (u32.!=(c1, 0)) {
	if (u32.!=(c3, 0)) {
		z = u32.+(x, 1);
	} else {
		z = u32.+(x, 2);
	}
} else {
	z = u32.+(x, 3);
}
push_u32(z);
</pre>`;
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["unLEM"] = ''
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	46 -. Stack .-> 1
	46["eff__625 push_u32"]
	44 --> 46
	28 -. Stack .-> 46
	28{{"sea__654 Sϕ Stack "}}
	49 --> 28
	55 --> 28
	52 --> 28
	52{{"innerPhi__716 Sϕ Stack "}}
	47 --> 52
	26 --> 52
	21 --> 52
	21{{"sea__652 Sϕ Stack "}}
	63 --> 21
	68 --> 21
	66 --> 21
	66{{"innerPhi__730 Sϕ Stack "}}
	61 --> 66
	19 --> 66
	5 --> 66
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	19["x__644 pop_u32"]
	5 -. Stack .-> 19
	61["mt__725 U32_maybeTrue"]
	11 --> 61
	11["q u32.!="]
	4 --> 11
	9 --> 11
	9["arg__649 0"]
	68["eff_merge__732 merge"]
	19 --> 68
	67 --> 68
	67["eff_nop__731 nop"]
	63["mb__727 bool.&&"]
	61 --> 63
	62 --> 63
	62["mf__726 U32_maybeFalse"]
	11 --> 62
	26{{"sea__653 Sϕ Stack "}}
	63 --> 26
	65 --> 26
	64 --> 26
	64{{"innerPhi__728 Sϕ Stack "}}
	61 --> 64
	24 --> 64
	5 --> 64
	24["x__641 pop_u32"]
	5 -. Stack .-> 24
	65["eff_merge__729 merge"]
	24 --> 65
	5 --> 65
	47["mt__711 U32_maybeTrue"]
	8 --> 47
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__651 0"]
	55{{"merged_phi__719 Sϕ Stack "}}
	11 --> 55
	53 --> 55
	54 --> 55
	54["eff_merge__718 merge"]
	5 --> 54
	5 --> 54
	53["eff_merge__717 merge"]
	24 --> 53
	19 --> 53
	49["mb__713 bool.&&"]
	47 --> 49
	48 --> 49
	48["mf__712 U32_maybeFalse"]
	8 --> 48
	44{"z ϕ"}
	49 --> 44
	51 --> 44
	50 --> 44
	50{"innerPhi__714 ϕ"}
	47 --> 50
	37 --> 50
	42 --> 50
	42["z__629 u32.+"]
	27 --> 42
	40 --> 42
	40["arg__631 3"]
	27{"x ϕ"}
	49 --> 27
	70 --> 27
	69 --> 27
	69{"innerPhi__733 ϕ"}
	47 --> 69
	25 --> 69
	20 --> 69
	20{"x ϕ"}
	63 --> 20
	74 --> 20
	73 --> 20
	73{"innerPhi__737 ϕ"}
	61 --> 73
	19 --> 73
	18 --> 73
	18["x__645 20"]
	74["merge__738 merge"]
	19 --> 74
	18 --> 74
	25{"x ϕ"}
	63 --> 25
	72 --> 25
	71 --> 25
	71{"innerPhi__735 ϕ"}
	61 --> 71
	24 --> 71
	23 --> 71
	23["x__642 10"]
	72["merge__736 merge"]
	24 --> 72
	23 --> 72
	70["merge__734 merge"]
	25 --> 70
	20 --> 70
	37{"y ϕ"}
	58 --> 37
	60 --> 37
	59 --> 37
	59{"innerPhi__723 ϕ"}
	56 --> 59
	36 --> 59
	33 --> 59
	33["y__636 u32.+"]
	27 --> 33
	31 --> 33
	31["arg__638 2"]
	36["y__633 u32.+"]
	27 --> 36
	34 --> 36
	34["arg__635 1"]
	56["mt__720 U32_maybeTrue"]
	14 --> 56
	14["r u32.!="]
	5 --> 14
	12 --> 14
	12["arg__647 0"]
	60["merge__724 merge"]
	36 --> 60
	33 --> 60
	58["mb__722 bool.&&"]
	56 --> 58
	57 --> 58
	57["mf__721 U32_maybeFalse"]
	14 --> 57
	51["merge__715 merge"]
	37 --> 51
	42 --> 51
</pre>`;
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE_ul"] = {}
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE_ul"]["scheduler_start"] = ''
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE_ul"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	46 -. Stack .-> 1
	46["eff__625 push_u32"]
	44 --> 46
	28 -. Stack .-> 46
	28{{"sea__654 Sϕ Stack "}}
	49 --> 28
	77 --> 28
	78 --> 28
	78["mv_f__742 |False|  [bool.&& [mb__713]]"]
	49 --> 78
	52 -. Stack .-> 78
	52{{"innerPhi__716 Sϕ Stack "}}
	47 --> 52
	83 --> 52
	84 --> 52
	84["mv_f__748 |False|  [U32_maybeTrue [mt__711]]"]
	47 --> 84
	21 -. Stack .-> 84
	21{{"sea__652 Sϕ Stack "}}
	63 --> 21
	89 --> 21
	90 --> 21
	90["mv_f__754 |False|  [bool.&& [mb__727]]"]
	63 --> 90
	66 -. Stack .-> 90
	66{{"innerPhi__730 Sϕ Stack "}}
	61 --> 66
	97 --> 66
	98 --> 66
	98["mv_f__762 |False|  [U32_maybeTrue [mt__725]]"]
	61 --> 98
	5 -. Stack .-> 98
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	61["mt__725 U32_maybeTrue"]
	11 --> 61
	11["q u32.!="]
	4 --> 11
	9 --> 11
	9["arg__649 0"]
	97["mv_t__761 |True|  [U32_maybeTrue [mt__725]]"]
	61 --> 97
	19 -. Stack .-> 97
	19["x__644 pop_u32"]
	5 -. Stack .-> 19
	63["mb__727 bool.&&"]
	61 --> 63
	62 --> 63
	62["mf__726 U32_maybeFalse"]
	11 --> 62
	89["mv_t__753 |True|  [bool.&& [mb__727]]"]
	63 --> 89
	68 -. Stack .-> 89
	68["eff_merge__732 merge"]
	19 --> 68
	67 --> 68
	67["eff_nop__731 nop"]
	47["mt__711 U32_maybeTrue"]
	8 --> 47
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__651 0"]
	83["mv_t__747 |True|  [U32_maybeTrue [mt__711]]"]
	47 --> 83
	26 -. Stack .-> 83
	26{{"sea__653 Sϕ Stack "}}
	63 --> 26
	87 --> 26
	88 --> 26
	88["mv_f__752 |False|  [bool.&& [mb__727]]"]
	63 --> 88
	64 -. Stack .-> 88
	64{{"innerPhi__728 Sϕ Stack "}}
	61 --> 64
	95 --> 64
	96 --> 64
	96["mv_f__760 |False|  [U32_maybeTrue [mt__725]]"]
	61 --> 96
	5 -. Stack .-> 96
	95["mv_t__759 |True|  [U32_maybeTrue [mt__725]]"]
	61 --> 95
	24 -. Stack .-> 95
	24["x__641 pop_u32"]
	5 -. Stack .-> 24
	87["mv_t__751 |True|  [bool.&& [mb__727]]"]
	63 --> 87
	65 -. Stack .-> 87
	65["eff_merge__729 merge"]
	24 --> 65
	5 --> 65
	49["mb__713 bool.&&"]
	47 --> 49
	48 --> 49
	48["mf__712 U32_maybeFalse"]
	8 --> 48
	77["mv_t__741 |True|  [bool.&& [mb__713]]"]
	49 --> 77
	55 -. Stack .-> 77
	55{{"merged_phi__719 Sϕ Stack "}}
	11 --> 55
	81 --> 55
	82 --> 55
	82["mv_f__746 |False|  [u32.!= [q]]"]
	11 --> 82
	54 -. Stack .-> 82
	54["eff_merge__718 merge"]
	5 --> 54
	5 --> 54
	81["mv_t__745 |True|  [u32.!= [q]]"]
	11 --> 81
	53 -. Stack .-> 81
	53["eff_merge__717 merge"]
	24 --> 53
	19 --> 53
	44{"z ϕ"}
	49 --> 44
	75 --> 44
	76 --> 44
	76["mv_f__740 |False|  [bool.&& [mb__713]]"]
	49 --> 76
	50 --> 76
	50{"innerPhi__714 ϕ"}
	47 --> 50
	79 --> 50
	80 --> 50
	80["mv_f__744 |False|  [U32_maybeTrue [mt__711]]"]
	47 --> 80
	42 --> 80
	42["z__629 u32.+"]
	27 --> 42
	40 --> 42
	40["arg__631 3"]
	27{"x ϕ"}
	49 --> 27
	93 --> 27
	94 --> 27
	94["mv_f__758 |False|  [bool.&& [mb__713]]"]
	49 --> 94
	69 --> 94
	69{"innerPhi__733 ϕ"}
	47 --> 69
	99 --> 69
	100 --> 69
	100["mv_f__764 |False|  [U32_maybeTrue [mt__711]]"]
	47 --> 100
	20 --> 100
	20{"x ϕ"}
	63 --> 20
	103 --> 20
	104 --> 20
	104["mv_f__768 |False|  [bool.&& [mb__727]]"]
	63 --> 104
	73 --> 104
	73{"innerPhi__737 ϕ"}
	61 --> 73
	107 --> 73
	108 --> 73
	108["mv_f__772 |False|  [U32_maybeTrue [mt__725]]"]
	61 --> 108
	18 --> 108
	18["x__645 20"]
	107["mv_t__771 |True|  [U32_maybeTrue [mt__725]]"]
	61 --> 107
	19 --> 107
	103["mv_t__767 |True|  [bool.&& [mb__727]]"]
	63 --> 103
	74 --> 103
	74["merge__738 merge"]
	19 --> 74
	18 --> 74
	99["mv_t__763 |True|  [U32_maybeTrue [mt__711]]"]
	47 --> 99
	25 --> 99
	25{"x ϕ"}
	63 --> 25
	101 --> 25
	102 --> 25
	102["mv_f__766 |False|  [bool.&& [mb__727]]"]
	63 --> 102
	71 --> 102
	71{"innerPhi__735 ϕ"}
	61 --> 71
	105 --> 71
	106 --> 71
	106["mv_f__770 |False|  [U32_maybeTrue [mt__725]]"]
	61 --> 106
	23 --> 106
	23["x__642 10"]
	105["mv_t__769 |True|  [U32_maybeTrue [mt__725]]"]
	61 --> 105
	24 --> 105
	101["mv_t__765 |True|  [bool.&& [mb__727]]"]
	63 --> 101
	72 --> 101
	72["merge__736 merge"]
	24 --> 72
	23 --> 72
	93["mv_t__757 |True|  [bool.&& [mb__713]]"]
	49 --> 93
	70 --> 93
	70["merge__734 merge"]
	25 --> 70
	20 --> 70
	79["mv_t__743 |True|  [U32_maybeTrue [mt__711]]"]
	47 --> 79
	37 --> 79
	37{"y ϕ"}
	58 --> 37
	85 --> 37
	86 --> 37
	86["mv_f__750 |False|  [bool.&& [mb__722]]"]
	58 --> 86
	59 --> 86
	59{"innerPhi__723 ϕ"}
	56 --> 59
	91 --> 59
	92 --> 59
	92["mv_f__756 |False|  [U32_maybeTrue [mt__720]]"]
	56 --> 92
	33 --> 92
	33["y__636 u32.+"]
	27 --> 33
	31 --> 33
	31["arg__638 2"]
	56["mt__720 U32_maybeTrue"]
	14 --> 56
	14["r u32.!="]
	5 --> 14
	12 --> 14
	12["arg__647 0"]
	91["mv_t__755 |True|  [U32_maybeTrue [mt__720]]"]
	56 --> 91
	36 --> 91
	36["y__633 u32.+"]
	27 --> 36
	34 --> 36
	34["arg__635 1"]
	58["mb__722 bool.&&"]
	56 --> 58
	57 --> 58
	57["mf__721 U32_maybeFalse"]
	14 --> 57
	85["mv_t__749 |True|  [bool.&& [mb__722]]"]
	58 --> 85
	60 --> 85
	60["merge__724 merge"]
	36 --> 60
	33 --> 60
	75["mv_t__739 |True|  [bool.&& [mb__713]]"]
	49 --> 75
	51 --> 75
	51["merge__715 merge"]
	37 --> 51
	42 --> 51
</pre>`;
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE_ul"]["untangled"] = ''
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE_ul"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	46 -. Stack .-> 1
	46["eff__625 push_u32"]
	44 --> 46
	28 -. Stack .-> 46
	28{{"sea__654 Sϕ Stack "}}
	49 --> 28
	77 --> 28
	78 --> 28
	78["mv_f__742 |False|  [bool.&& [mb__713]]"]
	49 --> 78
	52 -. Stack .-> 78
	52{{"innerPhi__716 Sϕ Stack "}}
	47 --> 52
	83 --> 52
	84 --> 52
	84["mv_f__748 |False|  [U32_maybeTrue [mt__711]]"]
	47 --> 84
	21 -. Stack .-> 84
	21{{"sea__652 Sϕ Stack "}}
	63 --> 21
	89 --> 21
	90 --> 21
	90["mv_f__754 |False|  [bool.&& [mb__727]]"]
	63 --> 90
	66 -. Stack .-> 90
	66{{"innerPhi__730 Sϕ Stack "}}
	61 --> 66
	97 --> 66
	98 --> 66
	98["mv_f__762 |False|  [U32_maybeTrue [mt__725]]"]
	61 --> 98
	5 -. Stack .-> 98
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	61["mt__725 U32_maybeTrue"]
	11 --> 61
	11["q u32.!="]
	4 --> 11
	9 --> 11
	9["arg__649 0"]
	97["mv_t__761 |True|  [U32_maybeTrue [mt__725]]"]
	61 --> 97
	145 -. Stack .-> 97
	145["x__644__776__795 pop_u32"]
	5 -. Stack .-> 145
	63["mb__727 bool.&&"]
	61 --> 63
	62 --> 63
	62["mf__726 U32_maybeFalse"]
	11 --> 62
	89["mv_t__753 |True|  [bool.&& [mb__727]]"]
	63 --> 89
	68 -. Stack .-> 89
	68["eff_merge__732 merge"]
	126 --> 68
	67 --> 68
	67["eff_nop__731 nop"]
	126["x__644__776 pop_u32"]
	5 -. Stack .-> 126
	47["mt__711 U32_maybeTrue"]
	8 --> 47
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__651 0"]
	83["mv_t__747 |True|  [U32_maybeTrue [mt__711]]"]
	47 --> 83
	26 -. Stack .-> 83
	26{{"sea__653 Sϕ Stack "}}
	63 --> 26
	87 --> 26
	88 --> 26
	88["mv_f__752 |False|  [bool.&& [mb__727]]"]
	63 --> 88
	64 -. Stack .-> 88
	64{{"innerPhi__728 Sϕ Stack "}}
	61 --> 64
	95 --> 64
	96 --> 64
	96["mv_f__760 |False|  [U32_maybeTrue [mt__725]]"]
	61 --> 96
	5 -. Stack .-> 96
	95["mv_t__759 |True|  [U32_maybeTrue [mt__725]]"]
	61 --> 95
	129 -. Stack .-> 95
	129["x__641__779 pop_u32"]
	5 -. Stack .-> 129
	87["mv_t__751 |True|  [bool.&& [mb__727]]"]
	63 --> 87
	65 -. Stack .-> 87
	65["eff_merge__729 merge"]
	129 --> 65
	5 --> 65
	49["mb__713 bool.&&"]
	47 --> 49
	48 --> 49
	48["mf__712 U32_maybeFalse"]
	8 --> 48
	77["mv_t__741 |True|  [bool.&& [mb__713]]"]
	49 --> 77
	55 -. Stack .-> 77
	55{{"merged_phi__719 Sϕ Stack "}}
	11 --> 55
	81 --> 55
	82 --> 55
	82["mv_f__746 |False|  [u32.!= [q]]"]
	11 --> 82
	54 -. Stack .-> 82
	54["eff_merge__718 merge"]
	5 --> 54
	5 --> 54
	81["mv_t__745 |True|  [u32.!= [q]]"]
	11 --> 81
	53 -. Stack .-> 81
	53["eff_merge__717 merge"]
	24 --> 53
	19 --> 53
	19["x__644 pop_u32"]
	5 -. Stack .-> 19
	24["x__641 pop_u32"]
	5 -. Stack .-> 24
	44{"z ϕ"}
	49 --> 44
	75 --> 44
	76 --> 44
	76["mv_f__740 |False|  [bool.&& [mb__713]]"]
	49 --> 76
	50 --> 76
	50{"innerPhi__714 ϕ"}
	47 --> 50
	79 --> 50
	80 --> 50
	80["mv_f__744 |False|  [U32_maybeTrue [mt__711]]"]
	47 --> 80
	42 --> 80
	42["z__629 u32.+"]
	27 --> 42
	40 --> 42
	40["arg__631 3"]
	27{"x ϕ"}
	49 --> 27
	93 --> 27
	94 --> 27
	94["mv_f__758 |False|  [bool.&& [mb__713]]"]
	49 --> 94
	69 --> 94
	69{"innerPhi__733 ϕ"}
	47 --> 69
	99 --> 69
	100 --> 69
	100["mv_f__764 |False|  [U32_maybeTrue [mt__711]]"]
	47 --> 100
	127 --> 100
	127{"x__777 ϕ"}
	63 --> 127
	137 --> 127
	138 --> 127
	138["mv_f__768__788 |False|  [bool.&& [mb__727]]"]
	63 --> 138
	133 --> 138
	133{"innerPhi__737__783 ϕ"}
	61 --> 133
	141 --> 133
	142 --> 133
	142["mv_f__772__792 |False|  [U32_maybeTrue [mt__725]]"]
	61 --> 142
	143 --> 142
	143["x__645__773__793 20"]
	141["mv_t__771__791 |True|  [U32_maybeTrue [mt__725]]"]
	61 --> 141
	145 --> 141
	137["mv_t__767__787 |True|  [bool.&& [mb__727]]"]
	63 --> 137
	134 --> 137
	134["merge__738__784 merge"]
	126 --> 134
	125 --> 134
	125["x__645__775 20"]
	99["mv_t__763 |True|  [U32_maybeTrue [mt__711]]"]
	47 --> 99
	130 --> 99
	130{"x__780 ϕ"}
	63 --> 130
	135 --> 130
	136 --> 130
	136["mv_f__766__786 |False|  [bool.&& [mb__727]]"]
	63 --> 136
	131 --> 136
	131{"innerPhi__735__781 ϕ"}
	61 --> 131
	139 --> 131
	140 --> 131
	140["mv_f__770__790 |False|  [U32_maybeTrue [mt__725]]"]
	61 --> 140
	144 --> 140
	144["x__642__774__794 10"]
	139["mv_t__769__789 |True|  [U32_maybeTrue [mt__725]]"]
	61 --> 139
	129 --> 139
	135["mv_t__765__785 |True|  [bool.&& [mb__727]]"]
	63 --> 135
	132 --> 135
	132["merge__736__782 merge"]
	129 --> 132
	128 --> 132
	128["x__642__778 10"]
	93["mv_t__757 |True|  [bool.&& [mb__713]]"]
	49 --> 93
	70 --> 93
	70["merge__734 merge"]
	25 --> 70
	20 --> 70
	20{"x ϕ"}
	63 --> 20
	103 --> 20
	104 --> 20
	104["mv_f__768 |False|  [bool.&& [mb__727]]"]
	63 --> 104
	73 --> 104
	73{"innerPhi__737 ϕ"}
	61 --> 73
	107 --> 73
	108 --> 73
	108["mv_f__772 |False|  [U32_maybeTrue [mt__725]]"]
	61 --> 108
	123 --> 108
	123["x__645__773 20"]
	107["mv_t__771 |True|  [U32_maybeTrue [mt__725]]"]
	61 --> 107
	19 --> 107
	103["mv_t__767 |True|  [bool.&& [mb__727]]"]
	63 --> 103
	74 --> 103
	74["merge__738 merge"]
	19 --> 74
	18 --> 74
	18["x__645 20"]
	25{"x ϕ"}
	63 --> 25
	101 --> 25
	102 --> 25
	102["mv_f__766 |False|  [bool.&& [mb__727]]"]
	63 --> 102
	71 --> 102
	71{"innerPhi__735 ϕ"}
	61 --> 71
	105 --> 71
	106 --> 71
	106["mv_f__770 |False|  [U32_maybeTrue [mt__725]]"]
	61 --> 106
	124 --> 106
	124["x__642__774 10"]
	105["mv_t__769 |True|  [U32_maybeTrue [mt__725]]"]
	61 --> 105
	24 --> 105
	101["mv_t__765 |True|  [bool.&& [mb__727]]"]
	63 --> 101
	72 --> 101
	72["merge__736 merge"]
	24 --> 72
	23 --> 72
	23["x__642 10"]
	79["mv_t__743 |True|  [U32_maybeTrue [mt__711]]"]
	47 --> 79
	37 --> 79
	37{"y ϕ"}
	58 --> 37
	85 --> 37
	86 --> 37
	86["mv_f__750 |False|  [bool.&& [mb__722]]"]
	58 --> 86
	59 --> 86
	59{"innerPhi__723 ϕ"}
	56 --> 59
	91 --> 59
	92 --> 59
	92["mv_f__756 |False|  [U32_maybeTrue [mt__720]]"]
	56 --> 92
	33 --> 92
	33["y__636 u32.+"]
	27 --> 33
	31 --> 33
	31["arg__638 2"]
	56["mt__720 U32_maybeTrue"]
	14 --> 56
	14["r u32.!="]
	5 --> 14
	12 --> 14
	12["arg__647 0"]
	91["mv_t__755 |True|  [U32_maybeTrue [mt__720]]"]
	56 --> 91
	36 --> 91
	36["y__633 u32.+"]
	27 --> 36
	34 --> 36
	34["arg__635 1"]
	58["mb__722 bool.&&"]
	56 --> 58
	57 --> 58
	57["mf__721 U32_maybeFalse"]
	14 --> 57
	85["mv_t__749 |True|  [bool.&& [mb__722]]"]
	58 --> 85
	60 --> 85
	60["merge__724 merge"]
	36 --> 60
	33 --> 60
	75["mv_t__739 |True|  [bool.&& [mb__713]]"]
	49 --> 75
	51 --> 75
	51["merge__715 merge"]
	37 --> 51
	42 --> 51
</pre>`;
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["unlem_schedule"] = ''
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["unlem_schedule"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def c3 = pop_u32();
def arg__649 : u32 = 0;
def q = u32.!=(c2, arg__649);
def mt__725 = U32_maybeTrue(q);
def x__641 = pop_u32();
def x__644 = pop_u32();
def mf__726 = U32_maybeFalse(q);
def mb__727 = bool.&&(mt__725, mf__726);
if (mb__727) {
	def x__642 : u32 = 10;
	def x__645 : u32 = 20;
	def merge__736 = merge(x__641, x__642);
	def merge__738 = merge(x__644, x__645);
} else {
	if (mt__725) {
	} else {
		def x__642__774 : u32 = 10;
		def x__645__773 : u32 = 20;
	}
// phis: innerPhi__735 <- x__641; innerPhi__735 <- x__642__774; innerPhi__737 <- x__644; innerPhi__737 <- x__645__773; 
}
// phis: x <- merge__736; x <- innerPhi__735; x <- merge__738; x <- innerPhi__737; 
def arg__651 : u32 = 0;
def p = u32.!=(c1, arg__651);
def mt__711 = U32_maybeTrue(p);
def mf__712 = U32_maybeFalse(p);
def mb__713 = bool.&&(mt__711, mf__712);
if (mb__713) {
	if (q) {
		def eff_merge__717 = merge(x__641, x__644);
	} else {
		def eff_merge__718 = merge(c3, c3);
	}
// phis: 
	def merge__734 = merge(x, x);
} else {
	if (mt__711) {
		def x__641__779 = pop_u32();
		def x__641 = (x__641__779);
		if (mb__727) {
			def x__642__778 : u32 = 10;
			def x__642 = (x__642__778);
			def merge__736__782 = merge(x__641__779, x__642__778);
			def eff_merge__729 = merge(x__641__779, c3);
		} else {
			if (mt__725) {
			} else {
				def x__642__774__794 : u32 = 10;
			}
// phis: innerPhi__735__781 <- x__641__779; innerPhi__735__781 <- x__642__774__794; 
		}
// phis: x__780 <- merge__736__782; x__780 <- innerPhi__735__781; 
	} else {
		if (mb__727) {
			def x__645__775 : u32 = 20;
			def x__645 = (x__645__775);
			def x__644__776 = pop_u32();
			def x__644 = (x__644__776);
			def eff_nop__731 = nop();
			def merge__738__784 = merge(x__644__776, x__645__775);
			def eff_merge__732 = merge(x__644__776, eff_nop__731);
		} else {
			if (mt__725) {
				def x__644__776__795 = pop_u32();
			} else {
				def x__645__773__793 : u32 = 20;
			}
// phis: innerPhi__737__783 <- x__644__776__795; innerPhi__737__783 <- x__645__773__793; 
		}
// phis: x__777 <- merge__738__784; x__777 <- innerPhi__737__783; 
	}
// phis: innerPhi__733 <- x__780; innerPhi__733 <- x__777; 
}
// phis: x <- merge__734; x <- innerPhi__733; 
def arg__638 : u32 = 2;
def arg__635 : u32 = 1;
def arg__647 : u32 = 0;
def y__636 = u32.+(x, arg__638);
def y__633 = u32.+(x, arg__635);
def r = u32.!=(c3, arg__647);
def mt__720 = U32_maybeTrue(r);
def mf__721 = U32_maybeFalse(r);
def arg__631 : u32 = 3;
def mb__722 = bool.&&(mt__720, mf__721);
def z__629 = u32.+(x, arg__631);
if (mb__722) {
	def merge__724 = merge(y__633, y__636);
} else {
	if (mt__720) {
	}
// phis: innerPhi__723 <- y__633; innerPhi__723 <- y__636; 
}
// phis: y <- merge__724; y <- innerPhi__723; 
if (mb__713) {
	def merge__715 = merge(y, z__629);
} else {
	if (mt__711) {
	}
// phis: innerPhi__714 <- y; innerPhi__714 <- z__629; 
}
// phis: z <- merge__715; z <- innerPhi__714; 
def eff__625 = push_u32(z);
</pre>`;
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["unlem_scheduler"] = ''
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_590["Block 590"]
	direction TB
	b590_46["eff__625 push_u32"]
	b590_1[\\"Finish"/]
	b590_46 --> b590_1
end
phi_651 --> block_590
subgraph phi_651["Phi 651"]
	p651_44{"z ϕ"}
end
block_652 --> phi_651
block_653 --> phi_651
subgraph block_652["Block 652"]
	direction TB
	b652_51["merge__715 merge"]
	b652_75["mv_t__739 |True|  [bool.&& [mb__713]]"]
	b652_51 --> b652_75
end
branch_650 --> block_652
subgraph branch_650["Branch 650"]
	br650_49["mb__713 bool.&&"]

end
phi_659 --> branch_650
subgraph phi_659["Phi 659"]
	p659_37{"y ϕ"}
end
block_660 --> phi_659
block_661 --> phi_659
subgraph block_660["Block 660"]
	direction TB
	b660_60["merge__724 merge"]
	b660_85["mv_t__749 |True|  [bool.&& [mb__722]]"]
	b660_60 --> b660_85
end
branch_658 --> block_660
subgraph branch_658["Branch 658"]
	br658_58["mb__722 bool.&&"]

end
block_662 --> branch_658
subgraph block_662["Block 662"]
	direction TB
	b662_31["arg__638 2"]
	b662_34["arg__635 1"]
	b662_12["arg__647 0"]
	b662_33["y__636 u32.+"]
	b662_36["y__633 u32.+"]
	b662_14["r u32.!="]
	b662_56["mt__720 U32_maybeTrue"]
	b662_57["mf__721 U32_maybeFalse"]
	b662_40["arg__631 3"]
	b662_58["mb__722 bool.&&"]
	b662_42["z__629 u32.+"]
	b662_31 --> b662_34
	b662_34 --> b662_12
	b662_12 --> b662_33
	b662_33 --> b662_36
	b662_36 --> b662_14
	b662_14 --> b662_56
	b662_56 --> b662_57
	b662_57 --> b662_40
	b662_40 --> b662_58
	b662_58 --> b662_42
end
phi_668 --> block_662
subgraph phi_668["Phi 668"]
	p668_28{{"sea__654 Sϕ Stack "}}
	p668_27{"x ϕ"}
end
block_669 --> phi_668
block_670 --> phi_668
subgraph block_669["Block 669"]
	direction TB
	b669_70["merge__734 merge"]
	b669_77["mv_t__741 |True|  [bool.&& [mb__713]]"]
	b669_93["mv_t__757 |True|  [bool.&& [mb__713]]"]
	b669_70 --> b669_77
	b669_77 --> b669_93
end
phi_673 --> block_669
subgraph phi_673["Phi 673"]
	p673_55{{"merged_phi__719 Sϕ Stack "}}
end
block_674 --> phi_673
block_675 --> phi_673
subgraph block_674["Block 674"]
	direction TB
	b674_53["eff_merge__717 merge"]
	b674_81["mv_t__745 |True|  [u32.!= [q]]"]
	b674_53 --> b674_81
end
branch_672 --> block_674
subgraph branch_672["Branch 672"]
	br672_11["q u32.!="]

end
branch_667 --> branch_672
subgraph branch_667["Branch 667"]
	br667_49["mb__713 bool.&&"]

end
block_671 --> branch_667
subgraph block_671["Block 671"]
	direction TB
	b671_6["arg__651 0"]
	b671_8["p u32.!="]
	b671_47["mt__711 U32_maybeTrue"]
	b671_48["mf__712 U32_maybeFalse"]
	b671_49["mb__713 bool.&&"]
	b671_6 --> b671_8
	b671_8 --> b671_47
	b671_47 --> b671_48
	b671_48 --> b671_49
end
phi_681 --> block_671
subgraph phi_681["Phi 681"]
	p681_25{"x ϕ"}
	p681_20{"x ϕ"}
end
block_682 --> phi_681
block_683 --> phi_681
subgraph block_682["Block 682"]
	direction TB
	b682_23["x__642 10"]
	b682_18["x__645 20"]
	b682_72["merge__736 merge"]
	b682_74["merge__738 merge"]
	b682_101["mv_t__765 |True|  [bool.&& [mb__727]]"]
	b682_103["mv_t__767 |True|  [bool.&& [mb__727]]"]
	b682_23 --> b682_18
	b682_18 --> b682_72
	b682_72 --> b682_74
	b682_74 --> b682_101
	b682_101 --> b682_103
end
branch_680 --> block_682
subgraph branch_680["Branch 680"]
	br680_63["mb__727 bool.&&"]

end
block_696 --> branch_680
subgraph block_696["Block 696"]
	direction TB
	b696_0[/"Start"\\]
	b696_3["c1 pop_u32"]
	b696_4["c2 pop_u32"]
	b696_5["c3 pop_u32"]
	b696_9["arg__649 0"]
	b696_11["q u32.!="]
	b696_61["mt__725 U32_maybeTrue"]
	b696_24["x__641 pop_u32"]
	b696_19["x__644 pop_u32"]
	b696_62["mf__726 U32_maybeFalse"]
	b696_63["mb__727 bool.&&"]
	b696_0 --> b696_3
	b696_3 --> b696_4
	b696_4 --> b696_5
	b696_5 --> b696_9
	b696_9 --> b696_11
	b696_11 --> b696_61
	b696_61 --> b696_24
	b696_24 --> b696_19
	b696_19 --> b696_62
	b696_62 --> b696_63
end
subgraph block_683["Block 683"]
	direction TB
	b683_102["mv_f__766 |False|  [bool.&& [mb__727]]"]
	b683_104["mv_f__768 |False|  [bool.&& [mb__727]]"]
	b683_102 --> b683_104
end
phi_693 --> block_683
subgraph phi_693["Phi 693"]
	p693_71{"innerPhi__735 ϕ"}
	p693_73{"innerPhi__737 ϕ"}
end
block_694 --> phi_693
block_695 --> phi_693
subgraph block_694["Block 694"]
	direction TB
	b694_105["mv_t__769 |True|  [U32_maybeTrue [mt__725]]"]
	b694_107["mv_t__771 |True|  [U32_maybeTrue [mt__725]]"]
	b694_105 --> b694_107
end
branch_692 --> block_694
subgraph branch_692["Branch 692"]
	br692_61["mt__725 U32_maybeTrue"]

end
branch_680 --> branch_692
subgraph block_695["Block 695"]
	direction TB
	b695_124["x__642__774 10"]
	b695_123["x__645__773 20"]
	b695_106["mv_f__770 |False|  [U32_maybeTrue [mt__725]]"]
	b695_108["mv_f__772 |False|  [U32_maybeTrue [mt__725]]"]
	b695_124 --> b695_123
	b695_123 --> b695_106
	b695_106 --> b695_108
end
branch_692 --> block_695
subgraph block_675["Block 675"]
	direction TB
	b675_54["eff_merge__718 merge"]
	b675_82["mv_f__746 |False|  [u32.!= [q]]"]
	b675_54 --> b675_82
end
branch_672 --> block_675
subgraph block_670["Block 670"]
	direction TB
	b670_78["mv_f__742 |False|  [bool.&& [mb__713]]"]
	b670_94["mv_f__758 |False|  [bool.&& [mb__713]]"]
	b670_78 --> b670_94
end
phi_677 --> block_670
subgraph phi_677["Phi 677"]
	p677_69{"innerPhi__733 ϕ"}
	p677_52{{"innerPhi__716 Sϕ Stack "}}
end
block_678 --> phi_677
block_679 --> phi_677
subgraph block_678["Block 678"]
	direction TB
	b678_99["mv_t__763 |True|  [U32_maybeTrue [mt__711]]"]
	b678_83["mv_t__747 |True|  [U32_maybeTrue [mt__711]]"]
	b678_99 --> b678_83
end
phi_685 --> block_678
subgraph phi_685["Phi 685"]
	p685_130{"x__780 ϕ"}
	p685_26{{"sea__653 Sϕ Stack "}}
end
block_686 --> phi_685
block_687 --> phi_685
subgraph block_686["Block 686"]
	direction TB
	b686_128["x__642__778 10"]
	b686_132["merge__736__782 merge"]
	b686_65["eff_merge__729 merge"]
	b686_135["mv_t__765__785 |True|  [bool.&& [mb__727]]"]
	b686_87["mv_t__751 |True|  [bool.&& [mb__727]]"]
	b686_128 --> b686_132
	b686_132 --> b686_65
	b686_65 --> b686_135
	b686_135 --> b686_87
end
branch_684 --> block_686
subgraph branch_684["Branch 684"]
	br684_63["mb__727 bool.&&"]

end
block_705 --> branch_684
subgraph block_705["Block 705"]
	direction TB
	b705_129["x__641__779 pop_u32"]
end
branch_676 --> block_705
subgraph branch_676["Branch 676"]
	br676_47["mt__711 U32_maybeTrue"]

end
branch_667 --> branch_676
subgraph block_687["Block 687"]
	direction TB
	b687_136["mv_f__766__786 |False|  [bool.&& [mb__727]]"]
	b687_88["mv_f__752 |False|  [bool.&& [mb__727]]"]
	b687_136 --> b687_88
end
phi_698 --> block_687
subgraph phi_698["Phi 698"]
	p698_131{"innerPhi__735__781 ϕ"}
	p698_64{{"innerPhi__728 Sϕ Stack "}}
end
block_699 --> phi_698
block_700 --> phi_698
subgraph block_699["Block 699"]
	direction TB
	b699_139["mv_t__769__789 |True|  [U32_maybeTrue [mt__725]]"]
	b699_95["mv_t__759 |True|  [U32_maybeTrue [mt__725]]"]
	b699_139 --> b699_95
end
branch_697 --> block_699
subgraph branch_697["Branch 697"]
	br697_61["mt__725 U32_maybeTrue"]

end
branch_684 --> branch_697
subgraph block_700["Block 700"]
	direction TB
	b700_144["x__642__774__794 10"]
	b700_140["mv_f__770__790 |False|  [U32_maybeTrue [mt__725]]"]
	b700_96["mv_f__760 |False|  [U32_maybeTrue [mt__725]]"]
	b700_144 --> b700_140
	b700_140 --> b700_96
end
branch_697 --> block_700
subgraph block_679["Block 679"]
	direction TB
	b679_100["mv_f__764 |False|  [U32_maybeTrue [mt__711]]"]
	b679_84["mv_f__748 |False|  [U32_maybeTrue [mt__711]]"]
	b679_100 --> b679_84
end
phi_689 --> block_679
subgraph phi_689["Phi 689"]
	p689_127{"x__777 ϕ"}
	p689_21{{"sea__652 Sϕ Stack "}}
end
block_690 --> phi_689
block_691 --> phi_689
subgraph block_690["Block 690"]
	direction TB
	b690_125["x__645__775 20"]
	b690_126["x__644__776 pop_u32"]
	b690_67["eff_nop__731 nop"]
	b690_134["merge__738__784 merge"]
	b690_68["eff_merge__732 merge"]
	b690_137["mv_t__767__787 |True|  [bool.&& [mb__727]]"]
	b690_89["mv_t__753 |True|  [bool.&& [mb__727]]"]
	b690_125 --> b690_126
	b690_126 --> b690_67
	b690_67 --> b690_134
	b690_134 --> b690_68
	b690_68 --> b690_137
	b690_137 --> b690_89
end
branch_688 --> block_690
subgraph branch_688["Branch 688"]
	br688_63["mb__727 bool.&&"]

end
branch_676 --> branch_688
subgraph block_691["Block 691"]
	direction TB
	b691_138["mv_f__768__788 |False|  [bool.&& [mb__727]]"]
	b691_90["mv_f__754 |False|  [bool.&& [mb__727]]"]
	b691_138 --> b691_90
end
phi_702 --> block_691
subgraph phi_702["Phi 702"]
	p702_133{"innerPhi__737__783 ϕ"}
	p702_66{{"innerPhi__730 Sϕ Stack "}}
end
block_703 --> phi_702
block_704 --> phi_702
subgraph block_703["Block 703"]
	direction TB
	b703_145["x__644__776__795 pop_u32"]
	b703_141["mv_t__771__791 |True|  [U32_maybeTrue [mt__725]]"]
	b703_97["mv_t__761 |True|  [U32_maybeTrue [mt__725]]"]
	b703_145 --> b703_141
	b703_141 --> b703_97
end
branch_701 --> block_703
subgraph branch_701["Branch 701"]
	br701_61["mt__725 U32_maybeTrue"]

end
branch_688 --> branch_701
subgraph block_704["Block 704"]
	direction TB
	b704_143["x__645__773__793 20"]
	b704_142["mv_f__772__792 |False|  [U32_maybeTrue [mt__725]]"]
	b704_98["mv_f__762 |False|  [U32_maybeTrue [mt__725]]"]
	b704_143 --> b704_142
	b704_142 --> b704_98
end
branch_701 --> block_704
subgraph block_661["Block 661"]
	direction TB
	b661_86["mv_f__750 |False|  [bool.&& [mb__722]]"]
end
phi_664 --> block_661
subgraph phi_664["Phi 664"]
	p664_59{"innerPhi__723 ϕ"}
end
block_665 --> phi_664
block_666 --> phi_664
subgraph block_665["Block 665"]
	direction TB
	b665_91["mv_t__755 |True|  [U32_maybeTrue [mt__720]]"]
end
branch_663 --> block_665
subgraph branch_663["Branch 663"]
	br663_56["mt__720 U32_maybeTrue"]

end
branch_658 --> branch_663
subgraph block_666["Block 666"]
	direction TB
	b666_92["mv_f__756 |False|  [U32_maybeTrue [mt__720]]"]
end
branch_663 --> block_666
subgraph block_653["Block 653"]
	direction TB
	b653_76["mv_f__740 |False|  [bool.&& [mb__713]]"]
end
phi_655 --> block_653
subgraph phi_655["Phi 655"]
	p655_50{"innerPhi__714 ϕ"}
end
block_656 --> phi_655
block_657 --> phi_655
subgraph block_656["Block 656"]
	direction TB
	b656_79["mv_t__743 |True|  [U32_maybeTrue [mt__711]]"]
end
branch_654 --> block_656
subgraph branch_654["Branch 654"]
	br654_47["mt__711 U32_maybeTrue"]

end
branch_650 --> branch_654
subgraph block_657["Block 657"]
	direction TB
	b657_80["mv_f__744 |False|  [U32_maybeTrue [mt__711]]"]
end
branch_654 --> block_657

</pre>`;
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["unlem_scheduler_ssa"] = ''
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["unlem_scheduler_ssa"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def c3 = pop_u32();
def arg__649 : u32 = 0;
def q = u32.!=(c2, arg__649);
def mt__725 = U32_maybeTrue(q);
def x__641 = pop_u32();
def x__644 = pop_u32();
def mf__726 = U32_maybeFalse(q);
def mb__727 = bool.&&(mt__725, mf__726);
if (mb__727) {
	def x__642 : u32 = 10;
	def x__645 : u32 = 20;
	def merge__736 = merge(x__641, x__642);
	def merge__738 = merge(x__644, x__645);
} else {
	if (mt__725) {
	} else {
		def x__642__774 : u32 = 10;
		def x__645__773 : u32 = 20;
	}
// phis: innerPhi__735 <- x__641; innerPhi__735 <- x__642__774; innerPhi__737 <- x__644; innerPhi__737 <- x__645__773; 
}
// phis: x <- merge__736; x <- innerPhi__735; x <- merge__738; x <- innerPhi__737; 
def arg__651 : u32 = 0;
def p = u32.!=(c1, arg__651);
def mt__711 = U32_maybeTrue(p);
def mf__712 = U32_maybeFalse(p);
def mb__713 = bool.&&(mt__711, mf__712);
if (mb__713) {
	if (q) {
		def eff_merge__717 = merge(x__641, x__644);
	} else {
		def eff_merge__718 = merge(c3, c3);
	}
// phis: 
	def merge__734 = merge(x, x);
} else {
	if (mt__711) {
		def x__641__779 = pop_u32();
		def x__641 = (x__641__779);
		if (mb__727) {
			def x__642__778 : u32 = 10;
			def x__642 = (x__642__778);
			def merge__736__782 = merge(x__641__779, x__642__778);
			def eff_merge__729 = merge(x__641__779, c3);
		} else {
			if (mt__725) {
			} else {
				def x__642__774__794 : u32 = 10;
			}
// phis: innerPhi__735__781 <- x__641__779; innerPhi__735__781 <- x__642__774__794; 
		}
// phis: x__780 <- merge__736__782; x__780 <- innerPhi__735__781; 
	} else {
		if (mb__727) {
			def x__645__775 : u32 = 20;
			def x__645 = (x__645__775);
			def x__644__776 = pop_u32();
			def x__644 = (x__644__776);
			def eff_nop__731 = nop();
			def merge__738__784 = merge(x__644__776, x__645__775);
			def eff_merge__732 = merge(x__644__776, eff_nop__731);
		} else {
			if (mt__725) {
				def x__644__776__795 = pop_u32();
			} else {
				def x__645__773__793 : u32 = 20;
			}
// phis: innerPhi__737__783 <- x__644__776__795; innerPhi__737__783 <- x__645__773__793; 
		}
// phis: x__777 <- merge__738__784; x__777 <- innerPhi__737__783; 
	}
// phis: innerPhi__733 <- x__780; innerPhi__733 <- x__777; 
}
// phis: x <- merge__734; x <- innerPhi__733; 
def arg__638 : u32 = 2;
def arg__635 : u32 = 1;
def arg__647 : u32 = 0;
def y__636 = u32.+(x, arg__638);
def y__633 = u32.+(x, arg__635);
def r = u32.!=(c3, arg__647);
def mt__720 = U32_maybeTrue(r);
def mf__721 = U32_maybeFalse(r);
def arg__631 : u32 = 3;
def mb__722 = bool.&&(mt__720, mf__721);
def z__629 = u32.+(x, arg__631);
if (mb__722) {
	def merge__724 = merge(y__633, y__636);
} else {
	if (mt__720) {
	}
// phis: innerPhi__723 <- y__633; innerPhi__723 <- y__636; 
}
// phis: y <- merge__724; y <- innerPhi__723; 
if (mb__713) {
	def merge__715 = merge(y, z__629);
} else {
	if (mt__711) {
	}
// phis: innerPhi__714 <- y; innerPhi__714 <- z__629; 
}
// phis: z <- merge__715; z <- innerPhi__714; 
def eff__625 = push_u32(z);
</pre>`;
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["unlem_scheduler_ssa_pretty"] = ''
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["unlem_scheduler_ssa_pretty"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def c3 = pop_u32();
def mt = U32_maybeTrue(u32.!=(c2, 0));
var x = pop_u32();
def x1 = pop_u32();
def mf = U32_maybeFalse(u32.!=(c2, 0));
if (bool.&&(mt, mf)) {
	x = merge(x, 10);
	x = merge(x1, 20);
} else {
	if (mt) {
		x = x1;
	} else {
		x = 10;
		x = 20;
	}
}
def mt1 = U32_maybeTrue(u32.!=(c1, 0));
def mf1 = U32_maybeFalse(u32.!=(c1, 0));
if (bool.&&(mt1, mf1)) {
	if (u32.!=(c2, 0)) {
	}
	x = merge(x, x);
} else {
	if (mt1) {
		def x2 = pop_u32();
		x = (x2);
		if (bool.&&(mt, mf)) {
			x = merge(x2, 10);
		} else {
			if (mt) {
				x = x2;
			} else {
				x = 10;
			}
		}
	} else {
		if (bool.&&(mt, mf)) {
			def x3 = pop_u32();
			def x1 = (x3);
			x = merge(x3, 20);
		} else {
			if (mt) {
				x = pop_u32();
			} else {
				x = 20;
			}
		}
	}
}
var y = u32.+(x, 2);
def y1 = u32.+(x, 1);
def mt2 = U32_maybeTrue(u32.!=(c3, 0));
def mf2 = U32_maybeFalse(u32.!=(c3, 0));
var z = u32.+(x, 3);
if (bool.&&(mt2, mf2)) {
	y = merge(y1, y);
} else {
	if (mt2) {
		y = y1;
	}
}
if (bool.&&(mt1, mf1)) {
	z = merge(y, z);
} else {
	if (mt1) {
	}
}
push_u32(z);
</pre>`;
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"] = {}
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["parsed"] = ''
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["parsed"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def c3 = pop_u32();
def c4 = pop_u32();
def arg__844 : u32 = 0;
def arg__843 = (c1);
def p = u32.!=(arg__843, arg__844);
def arg__842 : u32 = 0;
def arg__841 = (c2);
def q = u32.!=(arg__841, arg__842);
def arg__840 : u32 = 0;
def arg__839 = (c3);
def r = u32.!=(arg__839, arg__840);
def arg__838 : u32 = 0;
def arg__837 = (c4);
def s = u32.!=(arg__837, arg__838);
def seed = pop_u32();
def a : u32 = 0;
def cond__826 = (p);
if (cond__826) {
	def cond__827 = (q);
	if (cond__827) {
		def arg__830 : u32 = 1;
		def arg__829 = (seed);
		def a__828 = u32.+(arg__829, arg__830);
	} else {
		def a__831 : u32 = 10;
	}
// phis: a <- a__828; a <- a__831; 
} else {
	def cond__832 = (r);
	if (cond__832) {
		def arg__835 : u32 = 2;
		def arg__834 = (seed);
		def a__833 = u32.+(arg__834, arg__835);
	} else {
		def a__836 : u32 = 20;
	}
// phis: a <- a__833; a <- a__836; 
}
// phis: a <- a; a <- a; 
def b : u32 = 0;
def cond__813 = (q);
if (cond__813) {
	def cond__814 = (r);
	if (cond__814) {
		def arg__817 : u32 = 1;
		def arg__816 = (a);
		def b__815 = u32.+(arg__816, arg__817);
	} else {
		def arg__820 : u32 = 3;
		def arg__819 = (seed);
		def b__818 = u32.+(arg__819, arg__820);
	}
// phis: b <- b__815; b <- b__818; 
} else {
	def cond__821 = (s);
	if (cond__821) {
		def arg__824 : u32 = 2;
		def arg__823 = (a);
		def b__822 = u32.+(arg__823, arg__824);
	} else {
		def b__825 : u32 = 30;
	}
// phis: b <- b__822; b <- b__825; 
}
// phis: b <- b; b <- b; 
def c : u32 = 0;
def cond__798 = (r);
if (cond__798) {
	def cond__799 = (s);
	if (cond__799) {
		def arg__802 : u32 = 1;
		def arg__801 = (b);
		def c__800 = u32.+(arg__801, arg__802);
	} else {
		def arg__805 : u32 = 3;
		def arg__804 = (a);
		def c__803 = u32.+(arg__804, arg__805);
	}
// phis: c <- c__800; c <- c__803; 
} else {
	def cond__806 = (p);
	if (cond__806) {
		def arg__809 : u32 = 2;
		def arg__808 = (b);
		def c__807 = u32.+(arg__808, arg__809);
	} else {
		def arg__812 : u32 = 4;
		def arg__811 = (seed);
		def c__810 = u32.+(arg__811, arg__812);
	}
// phis: c <- c__807; c <- c__810; 
}
// phis: c <- c; c <- c; 
def arg__797 = (c);
def eff__796 = push_u32(arg__797);
</pre>`;
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["initial_pretty"] = ''
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["initial_pretty"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def c3 = pop_u32();
def c4 = pop_u32();
def seed = pop_u32();
var a = 0;
if ((u32.!=((c1), 0))) {
	if ((u32.!=((c2), 0))) {
		a = u32.+((seed), 1);
	} else {
		a = 10;
	}
} else {
	if ((u32.!=((c3), 0))) {
		a = u32.+((seed), 2);
	} else {
		a = 20;
	}
}
var b = 0;
if ((u32.!=((c2), 0))) {
	if ((u32.!=((c3), 0))) {
		b = u32.+((a), 1);
	} else {
		b = u32.+((seed), 3);
	}
} else {
	if ((u32.!=((c4), 0))) {
		b = u32.+((a), 2);
	} else {
		b = 30;
	}
}
var c = 0;
if ((u32.!=((c3), 0))) {
	if ((u32.!=((c4), 0))) {
		c = u32.+((b), 1);
	} else {
		c = u32.+((a), 3);
	}
} else {
	if ((u32.!=((c1), 0))) {
		c = u32.+((b), 2);
	} else {
		c = u32.+((seed), 4);
	}
}
push_u32((c));
</pre>`;
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["raw"] = ''
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	72 -. Stack .-> 1
	72["eff__796 push_u32"]
	70 --> 72
	19 -. Stack .-> 72
	19["seed pop_u32"]
	6 -. Stack .-> 19
	6["c4 pop_u32"]
	5 -. Stack .-> 6
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	70{"c ϕ"}
	15 --> 70
	69 --> 70
	61 --> 70
	61{"c ϕ"}
	9 --> 61
	60 --> 61
	57 --> 61
	57["c__810 u32.+"]
	19 --> 57
	55 --> 57
	55["arg__812 4"]
	60["c__807 u32.+"]
	51 --> 60
	58 --> 60
	58["arg__809 2"]
	51{"b ϕ"}
	12 --> 51
	50 --> 51
	42 --> 51
	42{"b ϕ"}
	18 --> 42
	41 --> 42
	38 --> 42
	38["b__825 30"]
	41["b__822 u32.+"]
	34 --> 41
	39 --> 41
	39["arg__824 2"]
	34{"a ϕ"}
	9 --> 34
	33 --> 34
	27 --> 34
	27{"a ϕ"}
	15 --> 27
	26 --> 27
	23 --> 27
	23["a__836 20"]
	26["a__833 u32.+"]
	19 --> 26
	24 --> 26
	24["arg__835 2"]
	15["r u32.!="]
	5 --> 15
	13 --> 15
	13["arg__840 0"]
	33{"a ϕ"}
	12 --> 33
	32 --> 33
	29 --> 33
	29["a__831 10"]
	32["a__828 u32.+"]
	19 --> 32
	30 --> 32
	30["arg__830 1"]
	12["q u32.!="]
	4 --> 12
	10 --> 12
	10["arg__842 0"]
	9["p u32.!="]
	3 --> 9
	7 --> 9
	7["arg__844 0"]
	18["s u32.!="]
	6 --> 18
	16 --> 18
	16["arg__838 0"]
	50{"b ϕ"}
	15 --> 50
	49 --> 50
	46 --> 50
	46["b__818 u32.+"]
	19 --> 46
	44 --> 46
	44["arg__820 3"]
	49["b__815 u32.+"]
	34 --> 49
	47 --> 49
	47["arg__817 1"]
	69{"c ϕ"}
	18 --> 69
	68 --> 69
	65 --> 69
	65["c__803 u32.+"]
	34 --> 65
	63 --> 65
	63["arg__805 3"]
	68["c__800 u32.+"]
	51 --> 68
	66 --> 68
	66["arg__802 1"]
</pre>`;
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["scheduler_start"] = ''
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	72 -. Stack .-> 1
	72["eff__796 push_u32"]
	70 --> 72
	19 -. Stack .-> 72
	19["seed pop_u32"]
	6 -. Stack .-> 19
	6["c4 pop_u32"]
	5 -. Stack .-> 6
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	70{"c ϕ"}
	15 --> 70
	73 --> 70
	74 --> 70
	74["mv_f__846 |False|  [u32.!= [r]]"]
	15 --> 74
	61 --> 74
	61{"c ϕ"}
	9 --> 61
	77 --> 61
	78 --> 61
	78["mv_f__850 |False|  [u32.!= [p]]"]
	9 --> 78
	57 --> 78
	57["c__810 u32.+"]
	19 --> 57
	55 --> 57
	55["arg__812 4"]
	9["p u32.!="]
	3 --> 9
	7 --> 9
	7["arg__844 0"]
	77["mv_t__849 |True|  [u32.!= [p]]"]
	9 --> 77
	60 --> 77
	60["c__807 u32.+"]
	51 --> 60
	58 --> 60
	58["arg__809 2"]
	51{"b ϕ"}
	12 --> 51
	79 --> 51
	80 --> 51
	80["mv_f__852 |False|  [u32.!= [q]]"]
	12 --> 80
	42 --> 80
	42{"b ϕ"}
	18 --> 42
	85 --> 42
	86 --> 42
	86["mv_f__858 |False|  [u32.!= [s]]"]
	18 --> 86
	38 --> 86
	38["b__825 30"]
	18["s u32.!="]
	6 --> 18
	16 --> 18
	16["arg__838 0"]
	85["mv_t__857 |True|  [u32.!= [s]]"]
	18 --> 85
	41 --> 85
	41["b__822 u32.+"]
	34 --> 41
	39 --> 41
	39["arg__824 2"]
	34{"a ϕ"}
	9 --> 34
	81 --> 34
	82 --> 34
	82["mv_f__854 |False|  [u32.!= [p]]"]
	9 --> 82
	27 --> 82
	27{"a ϕ"}
	15 --> 27
	89 --> 27
	90 --> 27
	90["mv_f__862 |False|  [u32.!= [r]]"]
	15 --> 90
	23 --> 90
	23["a__836 20"]
	15["r u32.!="]
	5 --> 15
	13 --> 15
	13["arg__840 0"]
	89["mv_t__861 |True|  [u32.!= [r]]"]
	15 --> 89
	26 --> 89
	26["a__833 u32.+"]
	19 --> 26
	24 --> 26
	24["arg__835 2"]
	81["mv_t__853 |True|  [u32.!= [p]]"]
	9 --> 81
	33 --> 81
	33{"a ϕ"}
	12 --> 33
	87 --> 33
	88 --> 33
	88["mv_f__860 |False|  [u32.!= [q]]"]
	12 --> 88
	29 --> 88
	29["a__831 10"]
	12["q u32.!="]
	4 --> 12
	10 --> 12
	10["arg__842 0"]
	87["mv_t__859 |True|  [u32.!= [q]]"]
	12 --> 87
	32 --> 87
	32["a__828 u32.+"]
	19 --> 32
	30 --> 32
	30["arg__830 1"]
	79["mv_t__851 |True|  [u32.!= [q]]"]
	12 --> 79
	50 --> 79
	50{"b ϕ"}
	15 --> 50
	83 --> 50
	84 --> 50
	84["mv_f__856 |False|  [u32.!= [r]]"]
	15 --> 84
	46 --> 84
	46["b__818 u32.+"]
	19 --> 46
	44 --> 46
	44["arg__820 3"]
	83["mv_t__855 |True|  [u32.!= [r]]"]
	15 --> 83
	49 --> 83
	49["b__815 u32.+"]
	34 --> 49
	47 --> 49
	47["arg__817 1"]
	73["mv_t__845 |True|  [u32.!= [r]]"]
	15 --> 73
	69 --> 73
	69{"c ϕ"}
	18 --> 69
	75 --> 69
	76 --> 69
	76["mv_f__848 |False|  [u32.!= [s]]"]
	18 --> 76
	65 --> 76
	65["c__803 u32.+"]
	34 --> 65
	63 --> 65
	63["arg__805 3"]
	75["mv_t__847 |True|  [u32.!= [s]]"]
	18 --> 75
	68 --> 75
	68["c__800 u32.+"]
	51 --> 68
	66 --> 68
	66["arg__802 1"]
</pre>`;
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["untangled"] = ''
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	72 -. Stack .-> 1
	72["eff__796 push_u32"]
	70 --> 72
	19 -. Stack .-> 72
	19["seed pop_u32"]
	6 -. Stack .-> 19
	6["c4 pop_u32"]
	5 -. Stack .-> 6
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	70{"c ϕ"}
	15 --> 70
	73 --> 70
	74 --> 70
	74["mv_f__846 |False|  [u32.!= [r]]"]
	15 --> 74
	61 --> 74
	61{"c ϕ"}
	150 --> 61
	77 --> 61
	78 --> 61
	78["mv_f__850 |False|  [u32.!= [p__904]]"]
	150 --> 78
	57 --> 78
	57["c__810 u32.+"]
	19 --> 57
	55 --> 57
	55["arg__812 4"]
	150["p__904 u32.!="]
	3 --> 150
	149 --> 150
	149["arg__844__903 0"]
	77["mv_t__849 |True|  [u32.!= [p__904]]"]
	150 --> 77
	60 --> 77
	60["c__807 u32.+"]
	173 --> 60
	58 --> 60
	58["arg__809 2"]
	173{"b__927 ϕ"}
	152 --> 173
	174 --> 173
	175 --> 173
	175["mv_f__852__929 |False|  [u32.!= [q__906]]"]
	152 --> 175
	167 --> 175
	167{"b__921 ϕ"}
	154 --> 167
	180 --> 167
	181 --> 167
	181["mv_f__858__935 |False|  [u32.!= [s__908]]"]
	154 --> 181
	164 --> 181
	164["b__825__918 30"]
	154["s__908 u32.!="]
	6 --> 154
	153 --> 154
	153["arg__838__907 0"]
	180["mv_t__857__934 |True|  [u32.!= [s__908]]"]
	154 --> 180
	166 --> 180
	166["b__822__920 u32.+"]
	198 --> 166
	165 --> 166
	165["arg__824__919 2"]
	198{"a__875__952 ϕ"}
	187 --> 198
	199 --> 198
	200 --> 198
	200["mv_f__854__877__954 |False|  [u32.!= [p__864__941]]"]
	187 --> 200
	193 --> 200
	193{"a__870__947 ϕ"}
	189 --> 193
	203 --> 193
	204 --> 193
	204["mv_f__862__881__958 |False|  [u32.!= [r__866__943]]"]
	189 --> 204
	190 --> 204
	190["a__836__867__944 20"]
	189["r__866__943 u32.!="]
	5 --> 189
	188 --> 189
	188["arg__840__865__942 0"]
	203["mv_t__861__880__957 |True|  [u32.!= [r__866__943]]"]
	189 --> 203
	192 --> 203
	192["a__833__869__946 u32.+"]
	19 --> 192
	191 --> 192
	191["arg__835__868__945 2"]
	187["p__864__941 u32.!="]
	3 --> 187
	186 --> 187
	186["arg__844__863__940 0"]
	199["mv_t__853__876__953 |True|  [u32.!= [p__864__941]]"]
	187 --> 199
	197 --> 199
	197{"a__874__951 ϕ"}
	152 --> 197
	201 --> 197
	202 --> 197
	202["mv_f__860__879__956 |False|  [u32.!= [q__906]]"]
	152 --> 202
	194 --> 202
	194["a__831__871__948 10"]
	152["q__906 u32.!="]
	4 --> 152
	151 --> 152
	151["arg__842__905 0"]
	201["mv_t__859__878__955 |True|  [u32.!= [q__906]]"]
	152 --> 201
	196 --> 201
	196["a__828__873__950 u32.+"]
	19 --> 196
	195 --> 196
	195["arg__830__872__949 1"]
	174["mv_t__851__928 |True|  [u32.!= [q__906]]"]
	152 --> 174
	172 --> 174
	172{"b__926 ϕ"}
	15 --> 172
	178 --> 172
	179 --> 172
	179["mv_f__856__933 |False|  [u32.!= [r]]"]
	15 --> 179
	169 --> 179
	169["b__818__923 u32.+"]
	19 --> 169
	168 --> 169
	168["arg__820__922 3"]
	15["r u32.!="]
	5 --> 15
	13 --> 15
	13["arg__840 0"]
	178["mv_t__855__932 |True|  [u32.!= [r]]"]
	15 --> 178
	171 --> 178
	171["b__815__925 u32.+"]
	163 --> 171
	170 --> 171
	170["arg__817__924 1"]
	163{"a__917 ϕ"}
	150 --> 163
	176 --> 163
	177 --> 163
	177["mv_f__854__931 |False|  [u32.!= [p__904]]"]
	150 --> 177
	158 --> 177
	158{"a__912 ϕ"}
	15 --> 158
	184 --> 158
	185 --> 158
	185["mv_f__862__939 |False|  [u32.!= [r]]"]
	15 --> 185
	155 --> 185
	155["a__836__909 20"]
	184["mv_t__861__938 |True|  [u32.!= [r]]"]
	15 --> 184
	157 --> 184
	157["a__833__911 u32.+"]
	19 --> 157
	156 --> 157
	156["arg__835__910 2"]
	176["mv_t__853__930 |True|  [u32.!= [p__904]]"]
	150 --> 176
	162 --> 176
	162{"a__916 ϕ"}
	152 --> 162
	182 --> 162
	183 --> 162
	183["mv_f__860__937 |False|  [u32.!= [q__906]]"]
	152 --> 183
	159 --> 183
	159["a__831__913 10"]
	182["mv_t__859__936 |True|  [u32.!= [q__906]]"]
	152 --> 182
	161 --> 182
	161["a__828__915 u32.+"]
	19 --> 161
	160 --> 161
	160["arg__830__914 1"]
	73["mv_t__845 |True|  [u32.!= [r]]"]
	15 --> 73
	69 --> 73
	69{"c ϕ"}
	18 --> 69
	75 --> 69
	76 --> 69
	76["mv_f__848 |False|  [u32.!= [s]]"]
	18 --> 76
	65 --> 76
	65["c__803 u32.+"]
	136 --> 65
	63 --> 65
	63["arg__805 3"]
	136{"a__896 ϕ"}
	123 --> 136
	137 --> 136
	138 --> 136
	138["mv_f__854__898 |False|  [u32.!= [p__883]]"]
	123 --> 138
	131 --> 138
	131{"a__891 ϕ"}
	127 --> 131
	141 --> 131
	142 --> 131
	142["mv_f__862__902 |False|  [u32.!= [r__887]]"]
	127 --> 142
	128 --> 142
	128["a__836__888 20"]
	127["r__887 u32.!="]
	5 --> 127
	126 --> 127
	126["arg__840__886 0"]
	141["mv_t__861__901 |True|  [u32.!= [r__887]]"]
	127 --> 141
	130 --> 141
	130["a__833__890 u32.+"]
	19 --> 130
	129 --> 130
	129["arg__835__889 2"]
	123["p__883 u32.!="]
	3 --> 123
	122 --> 123
	122["arg__844__882 0"]
	137["mv_t__853__897 |True|  [u32.!= [p__883]]"]
	123 --> 137
	135 --> 137
	135{"a__895 ϕ"}
	125 --> 135
	139 --> 135
	140 --> 135
	140["mv_f__860__900 |False|  [u32.!= [q__885]]"]
	125 --> 140
	132 --> 140
	132["a__831__892 10"]
	125["q__885 u32.!="]
	4 --> 125
	124 --> 125
	124["arg__842__884 0"]
	139["mv_t__859__899 |True|  [u32.!= [q__885]]"]
	125 --> 139
	134 --> 139
	134["a__828__894 u32.+"]
	19 --> 134
	133 --> 134
	133["arg__830__893 1"]
	18["s u32.!="]
	6 --> 18
	16 --> 18
	16["arg__838 0"]
	75["mv_t__847 |True|  [u32.!= [s]]"]
	18 --> 75
	68 --> 75
	68["c__800 u32.+"]
	51 --> 68
	66 --> 68
	66["arg__802 1"]
	51{"b ϕ"}
	12 --> 51
	79 --> 51
	80 --> 51
	80["mv_f__852 |False|  [u32.!= [q]]"]
	12 --> 80
	42 --> 80
	42{"b ϕ"}
	18 --> 42
	85 --> 42
	86 --> 42
	86["mv_f__858 |False|  [u32.!= [s]]"]
	18 --> 86
	38 --> 86
	38["b__825 30"]
	85["mv_t__857 |True|  [u32.!= [s]]"]
	18 --> 85
	41 --> 85
	41["b__822 u32.+"]
	111 --> 41
	39 --> 41
	39["arg__824 2"]
	111{"a__875 ϕ"}
	100 --> 111
	112 --> 111
	113 --> 111
	113["mv_f__854__877 |False|  [u32.!= [p__864]]"]
	100 --> 113
	106 --> 113
	106{"a__870 ϕ"}
	102 --> 106
	116 --> 106
	117 --> 106
	117["mv_f__862__881 |False|  [u32.!= [r__866]]"]
	102 --> 117
	103 --> 117
	103["a__836__867 20"]
	102["r__866 u32.!="]
	5 --> 102
	101 --> 102
	101["arg__840__865 0"]
	116["mv_t__861__880 |True|  [u32.!= [r__866]]"]
	102 --> 116
	105 --> 116
	105["a__833__869 u32.+"]
	19 --> 105
	104 --> 105
	104["arg__835__868 2"]
	100["p__864 u32.!="]
	3 --> 100
	99 --> 100
	99["arg__844__863 0"]
	112["mv_t__853__876 |True|  [u32.!= [p__864]]"]
	100 --> 112
	110 --> 112
	110{"a__874 ϕ"}
	12 --> 110
	114 --> 110
	115 --> 110
	115["mv_f__860__879 |False|  [u32.!= [q]]"]
	12 --> 115
	107 --> 115
	107["a__831__871 10"]
	12["q u32.!="]
	4 --> 12
	10 --> 12
	10["arg__842 0"]
	114["mv_t__859__878 |True|  [u32.!= [q]]"]
	12 --> 114
	109 --> 114
	109["a__828__873 u32.+"]
	19 --> 109
	108 --> 109
	108["arg__830__872 1"]
	79["mv_t__851 |True|  [u32.!= [q]]"]
	12 --> 79
	50 --> 79
	50{"b ϕ"}
	15 --> 50
	83 --> 50
	84 --> 50
	84["mv_f__856 |False|  [u32.!= [r]]"]
	15 --> 84
	46 --> 84
	46["b__818 u32.+"]
	19 --> 46
	44 --> 46
	44["arg__820 3"]
	83["mv_t__855 |True|  [u32.!= [r]]"]
	15 --> 83
	49 --> 83
	49["b__815 u32.+"]
	34 --> 49
	47 --> 49
	47["arg__817 1"]
	34{"a ϕ"}
	9 --> 34
	81 --> 34
	82 --> 34
	82["mv_f__854 |False|  [u32.!= [p]]"]
	9 --> 82
	27 --> 82
	27{"a ϕ"}
	15 --> 27
	89 --> 27
	90 --> 27
	90["mv_f__862 |False|  [u32.!= [r]]"]
	15 --> 90
	23 --> 90
	23["a__836 20"]
	89["mv_t__861 |True|  [u32.!= [r]]"]
	15 --> 89
	26 --> 89
	26["a__833 u32.+"]
	19 --> 26
	24 --> 26
	24["arg__835 2"]
	9["p u32.!="]
	3 --> 9
	7 --> 9
	7["arg__844 0"]
	81["mv_t__853 |True|  [u32.!= [p]]"]
	9 --> 81
	33 --> 81
	33{"a ϕ"}
	12 --> 33
	87 --> 33
	88 --> 33
	88["mv_f__860 |False|  [u32.!= [q]]"]
	12 --> 88
	29 --> 88
	29["a__831 10"]
	87["mv_t__859 |True|  [u32.!= [q]]"]
	12 --> 87
	32 --> 87
	32["a__828 u32.+"]
	19 --> 32
	30 --> 32
	30["arg__830 1"]
</pre>`;
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["schedulerMermaid"] = ''
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_706["Block 706"]
	direction TB
	b706_72["eff__796 push_u32"]
	b706_1[\\"Finish"/]
	b706_72 --> b706_1
end
phi_768 --> block_706
subgraph phi_768["Phi 768"]
	p768_70{"c ϕ"}
end
block_769 --> phi_768
block_770 --> phi_768
subgraph block_769["Block 769"]
	direction TB
	b769_73["mv_t__845 |True|  [u32.!= [r]]"]
end
phi_772 --> block_769
subgraph phi_772["Phi 772"]
	p772_69{"c ϕ"}
end
block_773 --> phi_772
block_774 --> phi_772
subgraph block_773["Block 773"]
	direction TB
	b773_66["arg__802 1"]
	b773_68["c__800 u32.+"]
	b773_75["mv_t__847 |True|  [u32.!= [s]]"]
	b773_66 --> b773_68
	b773_68 --> b773_75
end
phi_780 --> block_773
subgraph phi_780["Phi 780"]
	p780_51{"b ϕ"}
end
block_781 --> phi_780
block_782 --> phi_780
subgraph block_781["Block 781"]
	direction TB
	b781_79["mv_t__851 |True|  [u32.!= [q]]"]
end
phi_793 --> block_781
subgraph phi_793["Phi 793"]
	p793_50{"b ϕ"}
end
block_794 --> phi_793
block_795 --> phi_793
subgraph block_794["Block 794"]
	direction TB
	b794_47["arg__817 1"]
	b794_49["b__815 u32.+"]
	b794_83["mv_t__855 |True|  [u32.!= [r]]"]
	b794_47 --> b794_49
	b794_49 --> b794_83
end
phi_821 --> block_794
subgraph phi_821["Phi 821"]
	p821_34{"a ϕ"}
end
block_822 --> phi_821
block_823 --> phi_821
subgraph block_822["Block 822"]
	direction TB
	b822_81["mv_t__853 |True|  [u32.!= [p]]"]
end
phi_841 --> block_822
subgraph phi_841["Phi 841"]
	p841_33{"a ϕ"}
end
block_842 --> phi_841
block_843 --> phi_841
subgraph block_842["Block 842"]
	direction TB
	b842_30["arg__830 1"]
	b842_32["a__828 u32.+"]
	b842_87["mv_t__859 |True|  [u32.!= [q]]"]
	b842_30 --> b842_32
	b842_32 --> b842_87
end
branch_840 --> block_842
subgraph branch_840["Branch 840"]
	br840_12["q u32.!="]

end
branch_820 --> branch_840
subgraph branch_820["Branch 820"]
	br820_9["p u32.!="]

end
block_836 --> branch_820
subgraph block_836["Block 836"]
	direction TB
	b836_7["arg__844 0"]
	b836_9["p u32.!="]
	b836_7 --> b836_9
end
branch_792 --> block_836
subgraph branch_792["Branch 792"]
	br792_15["r u32.!="]

end
branch_779 --> branch_792
subgraph branch_779["Branch 779"]
	br779_12["q u32.!="]

end
block_872 --> branch_779
subgraph block_872["Block 872"]
	direction TB
	b872_10["arg__842 0"]
	b872_12["q u32.!="]
	b872_10 --> b872_12
end
branch_771 --> block_872
subgraph branch_771["Branch 771"]
	br771_18["s u32.!="]

end
block_816 --> branch_771
subgraph block_816["Block 816"]
	direction TB
	b816_16["arg__838 0"]
	b816_18["s u32.!="]
	b816_16 --> b816_18
end
branch_767 --> block_816
subgraph branch_767["Branch 767"]
	br767_15["r u32.!="]

end
block_874 --> branch_767
subgraph block_874["Block 874"]
	direction TB
	b874_0[/"Start"\\]
	b874_3["c1 pop_u32"]
	b874_4["c2 pop_u32"]
	b874_5["c3 pop_u32"]
	b874_6["c4 pop_u32"]
	b874_19["seed pop_u32"]
	b874_13["arg__840 0"]
	b874_15["r u32.!="]
	b874_0 --> b874_3
	b874_3 --> b874_4
	b874_4 --> b874_5
	b874_5 --> b874_6
	b874_6 --> b874_19
	b874_19 --> b874_13
	b874_13 --> b874_15
end
subgraph block_843["Block 843"]
	direction TB
	b843_29["a__831 10"]
	b843_88["mv_f__860 |False|  [u32.!= [q]]"]
	b843_29 --> b843_88
end
branch_840 --> block_843
subgraph block_823["Block 823"]
	direction TB
	b823_82["mv_f__854 |False|  [u32.!= [p]]"]
end
phi_845 --> block_823
subgraph phi_845["Phi 845"]
	p845_27{"a ϕ"}
end
block_846 --> phi_845
block_847 --> phi_845
subgraph block_846["Block 846"]
	direction TB
	b846_24["arg__835 2"]
	b846_26["a__833 u32.+"]
	b846_89["mv_t__861 |True|  [u32.!= [r]]"]
	b846_24 --> b846_26
	b846_26 --> b846_89
end
branch_844 --> block_846
subgraph branch_844["Branch 844"]
	br844_15["r u32.!="]

end
branch_820 --> branch_844
subgraph block_847["Block 847"]
	direction TB
	b847_23["a__836 20"]
	b847_90["mv_f__862 |False|  [u32.!= [r]]"]
	b847_23 --> b847_90
end
branch_844 --> block_847
subgraph block_795["Block 795"]
	direction TB
	b795_44["arg__820 3"]
	b795_46["b__818 u32.+"]
	b795_84["mv_f__856 |False|  [u32.!= [r]]"]
	b795_44 --> b795_46
	b795_46 --> b795_84
end
branch_792 --> block_795
subgraph block_782["Block 782"]
	direction TB
	b782_80["mv_f__852 |False|  [u32.!= [q]]"]
end
phi_797 --> block_782
subgraph phi_797["Phi 797"]
	p797_42{"b ϕ"}
end
block_798 --> phi_797
block_799 --> phi_797
subgraph block_798["Block 798"]
	direction TB
	b798_39["arg__824 2"]
	b798_41["b__822 u32.+"]
	b798_85["mv_t__857 |True|  [u32.!= [s]]"]
	b798_39 --> b798_41
	b798_41 --> b798_85
end
phi_825 --> block_798
subgraph phi_825["Phi 825"]
	p825_111{"a__875 ϕ"}
end
block_826 --> phi_825
block_827 --> phi_825
subgraph block_826["Block 826"]
	direction TB
	b826_112["mv_t__853__876 |True|  [u32.!= [p__864]]"]
end
phi_849 --> block_826
subgraph phi_849["Phi 849"]
	p849_110{"a__874 ϕ"}
end
block_850 --> phi_849
block_851 --> phi_849
subgraph block_850["Block 850"]
	direction TB
	b850_108["arg__830__872 1"]
	b850_109["a__828__873 u32.+"]
	b850_114["mv_t__859__878 |True|  [u32.!= [q]]"]
	b850_108 --> b850_109
	b850_109 --> b850_114
end
branch_848 --> block_850
subgraph branch_848["Branch 848"]
	br848_12["q u32.!="]

end
branch_824 --> branch_848
subgraph branch_824["Branch 824"]
	br824_100["p__864 u32.!="]

end
block_837 --> branch_824
subgraph block_837["Block 837"]
	direction TB
	b837_99["arg__844__863 0"]
	b837_100["p__864 u32.!="]
	b837_99 --> b837_100
end
branch_796 --> block_837
subgraph branch_796["Branch 796"]
	br796_18["s u32.!="]

end
branch_779 --> branch_796
subgraph block_851["Block 851"]
	direction TB
	b851_107["a__831__871 10"]
	b851_115["mv_f__860__879 |False|  [u32.!= [q]]"]
	b851_107 --> b851_115
end
branch_848 --> block_851
subgraph block_827["Block 827"]
	direction TB
	b827_113["mv_f__854__877 |False|  [u32.!= [p__864]]"]
end
phi_853 --> block_827
subgraph phi_853["Phi 853"]
	p853_106{"a__870 ϕ"}
end
block_854 --> phi_853
block_855 --> phi_853
subgraph block_854["Block 854"]
	direction TB
	b854_104["arg__835__868 2"]
	b854_105["a__833__869 u32.+"]
	b854_116["mv_t__861__880 |True|  [u32.!= [r__866]]"]
	b854_104 --> b854_105
	b854_105 --> b854_116
end
branch_852 --> block_854
subgraph branch_852["Branch 852"]
	br852_102["r__866 u32.!="]

end
block_873 --> branch_852
subgraph block_873["Block 873"]
	direction TB
	b873_101["arg__840__865 0"]
	b873_102["r__866 u32.!="]
	b873_101 --> b873_102
end
branch_824 --> block_873
subgraph block_855["Block 855"]
	direction TB
	b855_103["a__836__867 20"]
	b855_117["mv_f__862__881 |False|  [u32.!= [r__866]]"]
	b855_103 --> b855_117
end
branch_852 --> block_855
subgraph block_799["Block 799"]
	direction TB
	b799_38["b__825 30"]
	b799_86["mv_f__858 |False|  [u32.!= [s]]"]
	b799_38 --> b799_86
end
branch_796 --> block_799
subgraph block_774["Block 774"]
	direction TB
	b774_63["arg__805 3"]
	b774_65["c__803 u32.+"]
	b774_76["mv_f__848 |False|  [u32.!= [s]]"]
	b774_63 --> b774_65
	b774_65 --> b774_76
end
phi_784 --> block_774
subgraph phi_784["Phi 784"]
	p784_136{"a__896 ϕ"}
end
block_785 --> phi_784
block_786 --> phi_784
subgraph block_785["Block 785"]
	direction TB
	b785_137["mv_t__853__897 |True|  [u32.!= [p__883]]"]
end
phi_801 --> block_785
subgraph phi_801["Phi 801"]
	p801_135{"a__895 ϕ"}
end
block_802 --> phi_801
block_803 --> phi_801
subgraph block_802["Block 802"]
	direction TB
	b802_133["arg__830__893 1"]
	b802_134["a__828__894 u32.+"]
	b802_139["mv_t__859__899 |True|  [u32.!= [q__885]]"]
	b802_133 --> b802_134
	b802_134 --> b802_139
end
branch_800 --> block_802
subgraph branch_800["Branch 800"]
	br800_125["q__885 u32.!="]

end
block_817 --> branch_800
subgraph block_817["Block 817"]
	direction TB
	b817_124["arg__842__884 0"]
	b817_125["q__885 u32.!="]
	b817_124 --> b817_125
end
branch_783 --> block_817
subgraph branch_783["Branch 783"]
	br783_123["p__883 u32.!="]

end
block_791 --> branch_783
subgraph block_791["Block 791"]
	direction TB
	b791_122["arg__844__882 0"]
	b791_123["p__883 u32.!="]
	b791_122 --> b791_123
end
branch_771 --> block_791
subgraph block_803["Block 803"]
	direction TB
	b803_132["a__831__892 10"]
	b803_140["mv_f__860__900 |False|  [u32.!= [q__885]]"]
	b803_132 --> b803_140
end
branch_800 --> block_803
subgraph block_786["Block 786"]
	direction TB
	b786_138["mv_f__854__898 |False|  [u32.!= [p__883]]"]
end
phi_805 --> block_786
subgraph phi_805["Phi 805"]
	p805_131{"a__891 ϕ"}
end
block_806 --> phi_805
block_807 --> phi_805
subgraph block_806["Block 806"]
	direction TB
	b806_129["arg__835__889 2"]
	b806_130["a__833__890 u32.+"]
	b806_141["mv_t__861__901 |True|  [u32.!= [r__887]]"]
	b806_129 --> b806_130
	b806_130 --> b806_141
end
branch_804 --> block_806
subgraph branch_804["Branch 804"]
	br804_127["r__887 u32.!="]

end
block_818 --> branch_804
subgraph block_818["Block 818"]
	direction TB
	b818_126["arg__840__886 0"]
	b818_127["r__887 u32.!="]
	b818_126 --> b818_127
end
branch_783 --> block_818
subgraph block_807["Block 807"]
	direction TB
	b807_128["a__836__888 20"]
	b807_142["mv_f__862__902 |False|  [u32.!= [r__887]]"]
	b807_128 --> b807_142
end
branch_804 --> block_807
subgraph block_770["Block 770"]
	direction TB
	b770_74["mv_f__846 |False|  [u32.!= [r]]"]
end
phi_776 --> block_770
subgraph phi_776["Phi 776"]
	p776_61{"c ϕ"}
end
block_777 --> phi_776
block_778 --> phi_776
subgraph block_777["Block 777"]
	direction TB
	b777_58["arg__809 2"]
	b777_60["c__807 u32.+"]
	b777_77["mv_t__849 |True|  [u32.!= [p__904]]"]
	b777_58 --> b777_60
	b777_60 --> b777_77
end
phi_788 --> block_777
subgraph phi_788["Phi 788"]
	p788_173{"b__927 ϕ"}
end
block_789 --> phi_788
block_790 --> phi_788
subgraph block_789["Block 789"]
	direction TB
	b789_174["mv_t__851__928 |True|  [u32.!= [q__906]]"]
end
phi_809 --> block_789
subgraph phi_809["Phi 809"]
	p809_172{"b__926 ϕ"}
end
block_810 --> phi_809
block_811 --> phi_809
subgraph block_810["Block 810"]
	direction TB
	b810_170["arg__817__924 1"]
	b810_171["b__815__925 u32.+"]
	b810_178["mv_t__855__932 |True|  [u32.!= [r]]"]
	b810_170 --> b810_171
	b810_171 --> b810_178
end
phi_829 --> block_810
subgraph phi_829["Phi 829"]
	p829_163{"a__917 ϕ"}
end
block_830 --> phi_829
block_831 --> phi_829
subgraph block_830["Block 830"]
	direction TB
	b830_176["mv_t__853__930 |True|  [u32.!= [p__904]]"]
end
phi_857 --> block_830
subgraph phi_857["Phi 857"]
	p857_162{"a__916 ϕ"}
end
block_858 --> phi_857
block_859 --> phi_857
subgraph block_858["Block 858"]
	direction TB
	b858_160["arg__830__914 1"]
	b858_161["a__828__915 u32.+"]
	b858_182["mv_t__859__936 |True|  [u32.!= [q__906]]"]
	b858_160 --> b858_161
	b858_161 --> b858_182
end
branch_856 --> block_858
subgraph branch_856["Branch 856"]
	br856_152["q__906 u32.!="]

end
branch_828 --> branch_856
subgraph branch_828["Branch 828"]
	br828_150["p__904 u32.!="]

end
branch_808 --> branch_828
subgraph branch_808["Branch 808"]
	br808_15["r u32.!="]

end
branch_787 --> branch_808
subgraph branch_787["Branch 787"]
	br787_152["q__906 u32.!="]

end
block_875 --> branch_787
subgraph block_875["Block 875"]
	direction TB
	b875_151["arg__842__905 0"]
	b875_152["q__906 u32.!="]
	b875_151 --> b875_152
end
branch_775 --> block_875
subgraph branch_775["Branch 775"]
	br775_150["p__904 u32.!="]

end
block_838 --> branch_775
subgraph block_838["Block 838"]
	direction TB
	b838_149["arg__844__903 0"]
	b838_150["p__904 u32.!="]
	b838_149 --> b838_150
end
branch_767 --> block_838
subgraph block_859["Block 859"]
	direction TB
	b859_159["a__831__913 10"]
	b859_183["mv_f__860__937 |False|  [u32.!= [q__906]]"]
	b859_159 --> b859_183
end
branch_856 --> block_859
subgraph block_831["Block 831"]
	direction TB
	b831_177["mv_f__854__931 |False|  [u32.!= [p__904]]"]
end
phi_861 --> block_831
subgraph phi_861["Phi 861"]
	p861_158{"a__912 ϕ"}
end
block_862 --> phi_861
block_863 --> phi_861
subgraph block_862["Block 862"]
	direction TB
	b862_156["arg__835__910 2"]
	b862_157["a__833__911 u32.+"]
	b862_184["mv_t__861__938 |True|  [u32.!= [r]]"]
	b862_156 --> b862_157
	b862_157 --> b862_184
end
branch_860 --> block_862
subgraph branch_860["Branch 860"]
	br860_15["r u32.!="]

end
branch_828 --> branch_860
subgraph block_863["Block 863"]
	direction TB
	b863_155["a__836__909 20"]
	b863_185["mv_f__862__939 |False|  [u32.!= [r]]"]
	b863_155 --> b863_185
end
branch_860 --> block_863
subgraph block_811["Block 811"]
	direction TB
	b811_168["arg__820__922 3"]
	b811_169["b__818__923 u32.+"]
	b811_179["mv_f__856__933 |False|  [u32.!= [r]]"]
	b811_168 --> b811_169
	b811_169 --> b811_179
end
branch_808 --> block_811
subgraph block_790["Block 790"]
	direction TB
	b790_175["mv_f__852__929 |False|  [u32.!= [q__906]]"]
end
phi_813 --> block_790
subgraph phi_813["Phi 813"]
	p813_167{"b__921 ϕ"}
end
block_814 --> phi_813
block_815 --> phi_813
subgraph block_814["Block 814"]
	direction TB
	b814_165["arg__824__919 2"]
	b814_166["b__822__920 u32.+"]
	b814_180["mv_t__857__934 |True|  [u32.!= [s__908]]"]
	b814_165 --> b814_166
	b814_166 --> b814_180
end
phi_833 --> block_814
subgraph phi_833["Phi 833"]
	p833_198{"a__875__952 ϕ"}
end
block_834 --> phi_833
block_835 --> phi_833
subgraph block_834["Block 834"]
	direction TB
	b834_199["mv_t__853__876__953 |True|  [u32.!= [p__864__941]]"]
end
phi_865 --> block_834
subgraph phi_865["Phi 865"]
	p865_197{"a__874__951 ϕ"}
end
block_866 --> phi_865
block_867 --> phi_865
subgraph block_866["Block 866"]
	direction TB
	b866_195["arg__830__872__949 1"]
	b866_196["a__828__873__950 u32.+"]
	b866_201["mv_t__859__878__955 |True|  [u32.!= [q__906]]"]
	b866_195 --> b866_196
	b866_196 --> b866_201
end
branch_864 --> block_866
subgraph branch_864["Branch 864"]
	br864_152["q__906 u32.!="]

end
branch_832 --> branch_864
subgraph branch_832["Branch 832"]
	br832_187["p__864__941 u32.!="]

end
block_839 --> branch_832
subgraph block_839["Block 839"]
	direction TB
	b839_186["arg__844__863__940 0"]
	b839_187["p__864__941 u32.!="]
	b839_186 --> b839_187
end
branch_812 --> block_839
subgraph branch_812["Branch 812"]
	br812_154["s__908 u32.!="]

end
block_819 --> branch_812
subgraph block_819["Block 819"]
	direction TB
	b819_153["arg__838__907 0"]
	b819_154["s__908 u32.!="]
	b819_153 --> b819_154
end
branch_787 --> block_819
subgraph block_867["Block 867"]
	direction TB
	b867_194["a__831__871__948 10"]
	b867_202["mv_f__860__879__956 |False|  [u32.!= [q__906]]"]
	b867_194 --> b867_202
end
branch_864 --> block_867
subgraph block_835["Block 835"]
	direction TB
	b835_200["mv_f__854__877__954 |False|  [u32.!= [p__864__941]]"]
end
phi_869 --> block_835
subgraph phi_869["Phi 869"]
	p869_193{"a__870__947 ϕ"}
end
block_870 --> phi_869
block_871 --> phi_869
subgraph block_870["Block 870"]
	direction TB
	b870_191["arg__835__868__945 2"]
	b870_192["a__833__869__946 u32.+"]
	b870_203["mv_t__861__880__957 |True|  [u32.!= [r__866__943]]"]
	b870_191 --> b870_192
	b870_192 --> b870_203
end
branch_868 --> block_870
subgraph branch_868["Branch 868"]
	br868_189["r__866__943 u32.!="]

end
block_876 --> branch_868
subgraph block_876["Block 876"]
	direction TB
	b876_188["arg__840__865__942 0"]
	b876_189["r__866__943 u32.!="]
	b876_188 --> b876_189
end
branch_832 --> block_876
subgraph block_871["Block 871"]
	direction TB
	b871_190["a__836__867__944 20"]
	b871_204["mv_f__862__881__958 |False|  [u32.!= [r__866__943]]"]
	b871_190 --> b871_204
end
branch_868 --> block_871
subgraph block_815["Block 815"]
	direction TB
	b815_164["b__825__918 30"]
	b815_181["mv_f__858__935 |False|  [u32.!= [s__908]]"]
	b815_164 --> b815_181
end
branch_812 --> block_815
subgraph block_778["Block 778"]
	direction TB
	b778_55["arg__812 4"]
	b778_57["c__810 u32.+"]
	b778_78["mv_f__850 |False|  [u32.!= [p__904]]"]
	b778_55 --> b778_57
	b778_57 --> b778_78
end
branch_775 --> block_778

</pre>`;
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["scheduler_ssad"] = ''
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["scheduler_ssad"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def c3 = pop_u32();
def c4 = pop_u32();
def seed = pop_u32();
def arg__840 : u32 = 0;
def r = u32.!=(c3, arg__840);
if (r) {
	def arg__838 : u32 = 0;
	def s = u32.!=(c4, arg__838);
	if (s) {
		def arg__842 : u32 = 0;
		def q = u32.!=(c2, arg__842);
		if (q) {
			if (r) {
				def arg__844 : u32 = 0;
				def p = u32.!=(c1, arg__844);
				if (p) {
					if (q) {
						def arg__830 : u32 = 1;
						def a__828 = u32.+(seed, arg__830);
					} else {
						def a__831 : u32 = 10;
					}
// phis: a <- a__828; a <- a__831; 
				} else {
					if (r) {
						def arg__835 : u32 = 2;
						def a__833 = u32.+(seed, arg__835);
					} else {
						def a__836 : u32 = 20;
					}
// phis: a <- a__833; a <- a__836; 
				}
// phis: a <- a; a <- a; 
				def arg__817 : u32 = 1;
				def b__815 = u32.+(a, arg__817);
			} else {
				def arg__820 : u32 = 3;
				def b__818 = u32.+(seed, arg__820);
			}
// phis: b <- b__815; b <- b__818; 
		} else {
			if (s) {
				def arg__844__863 : u32 = 0;
				def p__864 = u32.!=(c1, arg__844__863);
				if (p__864) {
					if (q) {
						def arg__830__872 : u32 = 1;
						def a__828__873 = u32.+(seed, arg__830__872);
					} else {
						def a__831__871 : u32 = 10;
					}
// phis: a__874 <- a__828__873; a__874 <- a__831__871; 
				} else {
					def arg__840__865 : u32 = 0;
					def r__866 = u32.!=(c3, arg__840__865);
					if (r__866) {
						def arg__835__868 : u32 = 2;
						def a__833__869 = u32.+(seed, arg__835__868);
					} else {
						def a__836__867 : u32 = 20;
					}
// phis: a__870 <- a__833__869; a__870 <- a__836__867; 
				}
// phis: a__875 <- a__874; a__875 <- a__870; 
				def arg__824 : u32 = 2;
				def b__822 = u32.+(a__875, arg__824);
			} else {
				def b__825 : u32 = 30;
			}
// phis: b <- b__822; b <- b__825; 
		}
// phis: b <- b; b <- b; 
		def arg__802 : u32 = 1;
		def c__800 = u32.+(b, arg__802);
	} else {
		def arg__844__882 : u32 = 0;
		def p__883 = u32.!=(c1, arg__844__882);
		if (p__883) {
			def arg__842__884 : u32 = 0;
			def q__885 = u32.!=(c2, arg__842__884);
			if (q__885) {
				def arg__830__893 : u32 = 1;
				def a__828__894 = u32.+(seed, arg__830__893);
			} else {
				def a__831__892 : u32 = 10;
			}
// phis: a__895 <- a__828__894; a__895 <- a__831__892; 
		} else {
			def arg__840__886 : u32 = 0;
			def arg__840 = (arg__840__886);
			def r__887 = u32.!=(c3, arg__840__886);
			def r = (r__887);
			if (r__887) {
				def arg__835__889 : u32 = 2;
				def a__833__890 = u32.+(seed, arg__835__889);
			} else {
				def a__836__888 : u32 = 20;
			}
// phis: a__891 <- a__833__890; a__891 <- a__836__888; 
		}
// phis: a__896 <- a__895; a__896 <- a__891; 
		def arg__805 : u32 = 3;
		def c__803 = u32.+(a__896, arg__805);
	}
// phis: c <- c__800; c <- c__803; 
} else {
	def arg__844__903 : u32 = 0;
	def arg__844 = (arg__844__903);
	def p__904 = u32.!=(c1, arg__844__903);
	def p = (p__904);
	if (p__904) {
		def arg__842__905 : u32 = 0;
		def arg__842 = (arg__842__905);
		def q__906 = u32.!=(c2, arg__842__905);
		def q = (q__906);
		if (q__906) {
			if (r) {
				if (p__904) {
					if (q__906) {
						def arg__830__914 : u32 = 1;
						def arg__830 = (arg__830__914);
						def a__828__915 = u32.+(seed, arg__830__914);
						def a__828 = (a__828__915);
					} else {
						def a__831__913 : u32 = 10;
						def a__831 = (a__831__913);
					}
// phis: a__916 <- a__828__915; a__916 <- a__831__913; 
				} else {
					if (r) {
						def arg__835__910 : u32 = 2;
						def arg__835 = (arg__835__910);
						def a__833__911 = u32.+(seed, arg__835__910);
						def a__833 = (a__833__911);
					} else {
						def a__836__909 : u32 = 20;
						def a__836 = (a__836__909);
					}
// phis: a__912 <- a__833__911; a__912 <- a__836__909; 
				}
// phis: a__917 <- a__916; a__917 <- a__912; 
				def arg__817__924 : u32 = 1;
				def arg__817 = (arg__817__924);
				def b__815__925 = u32.+(a__917, arg__817__924);
				def b__815 = (b__815__925);
			} else {
				def arg__820__922 : u32 = 3;
				def arg__820 = (arg__820__922);
				def b__818__923 = u32.+(seed, arg__820__922);
				def b__818 = (b__818__923);
			}
// phis: b__926 <- b__815__925; b__926 <- b__818__923; 
		} else {
			def arg__838__907 : u32 = 0;
			def arg__838 = (arg__838__907);
			def s__908 = u32.!=(c4, arg__838__907);
			def s = (s__908);
			if (s__908) {
				def arg__844__863__940 : u32 = 0;
				def p__864__941 = u32.!=(c1, arg__844__863__940);
				if (p__864__941) {
					if (q__906) {
						def arg__830__872__949 : u32 = 1;
						def a__828__873__950 = u32.+(seed, arg__830__872__949);
					} else {
						def a__831__871__948 : u32 = 10;
					}
// phis: a__874__951 <- a__828__873__950; a__874__951 <- a__831__871__948; 
				} else {
					def arg__840__865__942 : u32 = 0;
					def r__866__943 = u32.!=(c3, arg__840__865__942);
					if (r__866__943) {
						def arg__835__868__945 : u32 = 2;
						def a__833__869__946 = u32.+(seed, arg__835__868__945);
					} else {
						def a__836__867__944 : u32 = 20;
					}
// phis: a__870__947 <- a__833__869__946; a__870__947 <- a__836__867__944; 
				}
// phis: a__875__952 <- a__874__951; a__875__952 <- a__870__947; 
				def arg__824__919 : u32 = 2;
				def arg__824 = (arg__824__919);
				def b__822__920 = u32.+(a__875__952, arg__824__919);
				def b__822 = (b__822__920);
			} else {
				def b__825__918 : u32 = 30;
				def b__825 = (b__825__918);
			}
// phis: b__921 <- b__822__920; b__921 <- b__825__918; 
		}
// phis: b__927 <- b__926; b__927 <- b__921; 
		def arg__809 : u32 = 2;
		def c__807 = u32.+(b__927, arg__809);
	} else {
		def arg__812 : u32 = 4;
		def c__810 = u32.+(seed, arg__812);
	}
// phis: c <- c__807; c <- c__810; 
}
// phis: c <- c; c <- c; 
def eff__796 = push_u32(c);
</pre>`;
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["scheduler_ssad_pretty"] = ''
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["scheduler_ssad_pretty"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def c3 = pop_u32();
def c4 = pop_u32();
def seed = pop_u32();
var c: u32;
if (u32.!=(c3, 0)) {
	if (u32.!=(c4, 0)) {
		var b: u32;
		if (u32.!=(c2, 0)) {
			if (u32.!=(c3, 0)) {
				var a: u32;
				if (u32.!=(c1, 0)) {
					if (u32.!=(c2, 0)) {
						a = u32.+(seed, 1);
					} else {
						a = 10;
					}
				} else {
					if (u32.!=(c3, 0)) {
						a = u32.+(seed, 2);
					} else {
						a = 20;
					}
				}
				b = u32.+(a, 1);
			} else {
				b = u32.+(seed, 3);
			}
		} else {
			if (u32.!=(c4, 0)) {
				var a__875: u32;
				if (u32.!=(c1, 0)) {
					if (u32.!=(c2, 0)) {
						a__875 = u32.+(seed, 1);
					} else {
						a__875 = 10;
					}
				} else {
					if (u32.!=(c3, 0)) {
						a__875 = u32.+(seed, 2);
					} else {
						a__875 = 20;
					}
				}
				b = u32.+(a__875, 2);
			} else {
				b = 30;
			}
		}
		c = u32.+(b, 1);
	} else {
		var a__896: u32;
		if (u32.!=(c1, 0)) {
			if (u32.!=(c2, 0)) {
				a__896 = u32.+(seed, 1);
			} else {
				a__896 = 10;
			}
		} else {
			if (u32.!=(c3, 0)) {
				a__896 = u32.+(seed, 2);
			} else {
				a__896 = 20;
			}
		}
		c = u32.+(a__896, 3);
	}
} else {
	if (u32.!=(c1, 0)) {
		var b__927: u32;
		if (u32.!=(c2, 0)) {
			if ((u32.!=(c3, 0))) {
				var a__917: u32;
				if (u32.!=(c1, 0)) {
					if (u32.!=(c2, 0)) {
						a__917 = u32.+(seed, 1);
						var a = (a__828__915);
					} else {
						a__917 = 10;
						def a1 = (a__831__913);
					}
				} else {
					if ((u32.!=(c3, 0))) {
						a__917 = u32.+(seed, 2);
						def a2 = (a__833__911);
					} else {
						a__917 = 20;
						def a3 = (a__836__909);
					}
				}
				b__927 = u32.+(a__917, 1);
				var b = (b__815__925);
			} else {
				b__927 = u32.+(seed, 3);
				def b1 = (b__818__923);
			}
		} else {
			if (u32.!=(c4, 0)) {
				var a__875__952: u32;
				if (u32.!=(c1, 0)) {
					if (u32.!=(c2, 0)) {
						a__875__952 = u32.+(seed, 1);
					} else {
						a__875__952 = 10;
					}
				} else {
					if (u32.!=(c3, 0)) {
						a__875__952 = u32.+(seed, 2);
					} else {
						a__875__952 = 20;
					}
				}
				b__927 = u32.+(a__875__952, 2);
				def b2 = (b__822__920);
			} else {
				b__927 = 30;
				def b3 = (b__825__918);
			}
		}
		c = u32.+(b__927, 2);
	} else {
		c = u32.+(seed, 4);
	}
}
push_u32(c);
</pre>`;
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["unLEM"] = ''
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	72 -. Stack .-> 1
	72["eff__796 push_u32"]
	70 --> 72
	19 -. Stack .-> 72
	19["seed pop_u32"]
	6 -. Stack .-> 19
	6["c4 pop_u32"]
	5 -. Stack .-> 6
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	70{"c ϕ"}
	75 --> 70
	77 --> 70
	76 --> 70
	76{"innerPhi__962 ϕ"}
	73 --> 76
	69 --> 76
	61 --> 76
	61{"c ϕ"}
	85 --> 61
	87 --> 61
	86 --> 61
	86{"innerPhi__972 ϕ"}
	83 --> 86
	60 --> 86
	57 --> 86
	57["c__810 u32.+"]
	19 --> 57
	55 --> 57
	55["arg__812 4"]
	60["c__807 u32.+"]
	51 --> 60
	58 --> 60
	58["arg__809 2"]
	51{"b ϕ"}
	90 --> 51
	92 --> 51
	91 --> 51
	91{"innerPhi__977 ϕ"}
	88 --> 91
	50 --> 91
	42 --> 91
	42{"b ϕ"}
	80 --> 42
	98 --> 42
	97 --> 42
	97{"innerPhi__983 ϕ"}
	78 --> 97
	41 --> 97
	38 --> 97
	38["b__825 30"]
	41["b__822 u32.+"]
	34 --> 41
	39 --> 41
	39["arg__824 2"]
	34{"a ϕ"}
	85 --> 34
	94 --> 34
	93 --> 34
	93{"innerPhi__979 ϕ"}
	83 --> 93
	33 --> 93
	27 --> 93
	27{"a ϕ"}
	75 --> 27
	102 --> 27
	101 --> 27
	101{"innerPhi__987 ϕ"}
	73 --> 101
	26 --> 101
	23 --> 101
	23["a__836 20"]
	26["a__833 u32.+"]
	19 --> 26
	24 --> 26
	24["arg__835 2"]
	73["mt__959 U32_maybeTrue"]
	15 --> 73
	15["r u32.!="]
	5 --> 15
	13 --> 15
	13["arg__840 0"]
	102["merge__988 merge"]
	26 --> 102
	23 --> 102
	75["mb__961 bool.&&"]
	73 --> 75
	74 --> 75
	74["mf__960 U32_maybeFalse"]
	15 --> 74
	33{"a ϕ"}
	90 --> 33
	100 --> 33
	99 --> 33
	99{"innerPhi__985 ϕ"}
	88 --> 99
	32 --> 99
	29 --> 99
	29["a__831 10"]
	32["a__828 u32.+"]
	19 --> 32
	30 --> 32
	30["arg__830 1"]
	88["mt__974 U32_maybeTrue"]
	12 --> 88
	12["q u32.!="]
	4 --> 12
	10 --> 12
	10["arg__842 0"]
	100["merge__986 merge"]
	32 --> 100
	29 --> 100
	90["mb__976 bool.&&"]
	88 --> 90
	89 --> 90
	89["mf__975 U32_maybeFalse"]
	12 --> 89
	83["mt__969 U32_maybeTrue"]
	9 --> 83
	9["p u32.!="]
	3 --> 9
	7 --> 9
	7["arg__844 0"]
	94["merge__980 merge"]
	33 --> 94
	27 --> 94
	85["mb__971 bool.&&"]
	83 --> 85
	84 --> 85
	84["mf__970 U32_maybeFalse"]
	9 --> 84
	78["mt__964 U32_maybeTrue"]
	18 --> 78
	18["s u32.!="]
	6 --> 18
	16 --> 18
	16["arg__838 0"]
	98["merge__984 merge"]
	41 --> 98
	38 --> 98
	80["mb__966 bool.&&"]
	78 --> 80
	79 --> 80
	79["mf__965 U32_maybeFalse"]
	18 --> 79
	50{"b ϕ"}
	75 --> 50
	96 --> 50
	95 --> 50
	95{"innerPhi__981 ϕ"}
	73 --> 95
	49 --> 95
	46 --> 95
	46["b__818 u32.+"]
	19 --> 46
	44 --> 46
	44["arg__820 3"]
	49["b__815 u32.+"]
	34 --> 49
	47 --> 49
	47["arg__817 1"]
	96["merge__982 merge"]
	49 --> 96
	46 --> 96
	92["merge__978 merge"]
	50 --> 92
	42 --> 92
	87["merge__973 merge"]
	60 --> 87
	57 --> 87
	69{"c ϕ"}
	80 --> 69
	82 --> 69
	81 --> 69
	81{"innerPhi__967 ϕ"}
	78 --> 81
	68 --> 81
	65 --> 81
	65["c__803 u32.+"]
	34 --> 65
	63 --> 65
	63["arg__805 3"]
	68["c__800 u32.+"]
	51 --> 68
	66 --> 68
	66["arg__802 1"]
	82["merge__968 merge"]
	68 --> 82
	65 --> 82
	77["merge__963 merge"]
	69 --> 77
	61 --> 77
</pre>`;
window.traces["UNTANGLE_BRAID_LIMIT_STRESS_ul"] = {}
window.traces["UNTANGLE_BRAID_LIMIT_STRESS_ul"]["scheduler_start"] = ''
window.traces["UNTANGLE_BRAID_LIMIT_STRESS_ul"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	72 -. Stack .-> 1
	72["eff__796 push_u32"]
	70 --> 72
	19 -. Stack .-> 72
	19["seed pop_u32"]
	6 -. Stack .-> 19
	6["c4 pop_u32"]
	5 -. Stack .-> 6
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	70{"c ϕ"}
	75 --> 70
	103 --> 70
	104 --> 70
	104["mv_f__990 |False|  [bool.&& [mb__961]]"]
	75 --> 104
	76 --> 104
	76{"innerPhi__962 ϕ"}
	73 --> 76
	105 --> 76
	106 --> 76
	106["mv_f__992 |False|  [U32_maybeTrue [mt__959]]"]
	73 --> 106
	61 --> 106
	61{"c ϕ"}
	85 --> 61
	109 --> 61
	110 --> 61
	110["mv_f__996 |False|  [bool.&& [mb__971]]"]
	85 --> 110
	86 --> 110
	86{"innerPhi__972 ϕ"}
	83 --> 86
	113 --> 86
	114 --> 86
	114["mv_f__1000 |False|  [U32_maybeTrue [mt__969]]"]
	83 --> 114
	57 --> 114
	57["c__810 u32.+"]
	19 --> 57
	55 --> 57
	55["arg__812 4"]
	83["mt__969 U32_maybeTrue"]
	9 --> 83
	9["p u32.!="]
	3 --> 9
	7 --> 9
	7["arg__844 0"]
	113["mv_t__999 |True|  [U32_maybeTrue [mt__969]]"]
	83 --> 113
	60 --> 113
	60["c__807 u32.+"]
	51 --> 60
	58 --> 60
	58["arg__809 2"]
	51{"b ϕ"}
	90 --> 51
	115 --> 51
	116 --> 51
	116["mv_f__1002 |False|  [bool.&& [mb__976]]"]
	90 --> 116
	91 --> 116
	91{"innerPhi__977 ϕ"}
	88 --> 91
	119 --> 91
	120 --> 91
	120["mv_f__1006 |False|  [U32_maybeTrue [mt__974]]"]
	88 --> 120
	42 --> 120
	42{"b ϕ"}
	80 --> 42
	125 --> 42
	126 --> 42
	126["mv_f__1012 |False|  [bool.&& [mb__966]]"]
	80 --> 126
	97 --> 126
	97{"innerPhi__983 ϕ"}
	78 --> 97
	133 --> 97
	134 --> 97
	134["mv_f__1020 |False|  [U32_maybeTrue [mt__964]]"]
	78 --> 134
	38 --> 134
	38["b__825 30"]
	78["mt__964 U32_maybeTrue"]
	18 --> 78
	18["s u32.!="]
	6 --> 18
	16 --> 18
	16["arg__838 0"]
	133["mv_t__1019 |True|  [U32_maybeTrue [mt__964]]"]
	78 --> 133
	41 --> 133
	41["b__822 u32.+"]
	34 --> 41
	39 --> 41
	39["arg__824 2"]
	34{"a ϕ"}
	85 --> 34
	117 --> 34
	118 --> 34
	118["mv_f__1004 |False|  [bool.&& [mb__971]]"]
	85 --> 118
	93 --> 118
	93{"innerPhi__979 ϕ"}
	83 --> 93
	121 --> 93
	122 --> 93
	122["mv_f__1008 |False|  [U32_maybeTrue [mt__969]]"]
	83 --> 122
	27 --> 122
	27{"a ϕ"}
	75 --> 27
	129 --> 27
	130 --> 27
	130["mv_f__1016 |False|  [bool.&& [mb__961]]"]
	75 --> 130
	101 --> 130
	101{"innerPhi__987 ϕ"}
	73 --> 101
	137 --> 101
	138 --> 101
	138["mv_f__1024 |False|  [U32_maybeTrue [mt__959]]"]
	73 --> 138
	23 --> 138
	23["a__836 20"]
	73["mt__959 U32_maybeTrue"]
	15 --> 73
	15["r u32.!="]
	5 --> 15
	13 --> 15
	13["arg__840 0"]
	137["mv_t__1023 |True|  [U32_maybeTrue [mt__959]]"]
	73 --> 137
	26 --> 137
	26["a__833 u32.+"]
	19 --> 26
	24 --> 26
	24["arg__835 2"]
	75["mb__961 bool.&&"]
	73 --> 75
	74 --> 75
	74["mf__960 U32_maybeFalse"]
	15 --> 74
	129["mv_t__1015 |True|  [bool.&& [mb__961]]"]
	75 --> 129
	102 --> 129
	102["merge__988 merge"]
	26 --> 102
	23 --> 102
	121["mv_t__1007 |True|  [U32_maybeTrue [mt__969]]"]
	83 --> 121
	33 --> 121
	33{"a ϕ"}
	90 --> 33
	127 --> 33
	128 --> 33
	128["mv_f__1014 |False|  [bool.&& [mb__976]]"]
	90 --> 128
	99 --> 128
	99{"innerPhi__985 ϕ"}
	88 --> 99
	135 --> 99
	136 --> 99
	136["mv_f__1022 |False|  [U32_maybeTrue [mt__974]]"]
	88 --> 136
	29 --> 136
	29["a__831 10"]
	88["mt__974 U32_maybeTrue"]
	12 --> 88
	12["q u32.!="]
	4 --> 12
	10 --> 12
	10["arg__842 0"]
	135["mv_t__1021 |True|  [U32_maybeTrue [mt__974]]"]
	88 --> 135
	32 --> 135
	32["a__828 u32.+"]
	19 --> 32
	30 --> 32
	30["arg__830 1"]
	90["mb__976 bool.&&"]
	88 --> 90
	89 --> 90
	89["mf__975 U32_maybeFalse"]
	12 --> 89
	127["mv_t__1013 |True|  [bool.&& [mb__976]]"]
	90 --> 127
	100 --> 127
	100["merge__986 merge"]
	32 --> 100
	29 --> 100
	85["mb__971 bool.&&"]
	83 --> 85
	84 --> 85
	84["mf__970 U32_maybeFalse"]
	9 --> 84
	117["mv_t__1003 |True|  [bool.&& [mb__971]]"]
	85 --> 117
	94 --> 117
	94["merge__980 merge"]
	33 --> 94
	27 --> 94
	80["mb__966 bool.&&"]
	78 --> 80
	79 --> 80
	79["mf__965 U32_maybeFalse"]
	18 --> 79
	125["mv_t__1011 |True|  [bool.&& [mb__966]]"]
	80 --> 125
	98 --> 125
	98["merge__984 merge"]
	41 --> 98
	38 --> 98
	119["mv_t__1005 |True|  [U32_maybeTrue [mt__974]]"]
	88 --> 119
	50 --> 119
	50{"b ϕ"}
	75 --> 50
	123 --> 50
	124 --> 50
	124["mv_f__1010 |False|  [bool.&& [mb__961]]"]
	75 --> 124
	95 --> 124
	95{"innerPhi__981 ϕ"}
	73 --> 95
	131 --> 95
	132 --> 95
	132["mv_f__1018 |False|  [U32_maybeTrue [mt__959]]"]
	73 --> 132
	46 --> 132
	46["b__818 u32.+"]
	19 --> 46
	44 --> 46
	44["arg__820 3"]
	131["mv_t__1017 |True|  [U32_maybeTrue [mt__959]]"]
	73 --> 131
	49 --> 131
	49["b__815 u32.+"]
	34 --> 49
	47 --> 49
	47["arg__817 1"]
	123["mv_t__1009 |True|  [bool.&& [mb__961]]"]
	75 --> 123
	96 --> 123
	96["merge__982 merge"]
	49 --> 96
	46 --> 96
	115["mv_t__1001 |True|  [bool.&& [mb__976]]"]
	90 --> 115
	92 --> 115
	92["merge__978 merge"]
	50 --> 92
	42 --> 92
	109["mv_t__995 |True|  [bool.&& [mb__971]]"]
	85 --> 109
	87 --> 109
	87["merge__973 merge"]
	60 --> 87
	57 --> 87
	105["mv_t__991 |True|  [U32_maybeTrue [mt__959]]"]
	73 --> 105
	69 --> 105
	69{"c ϕ"}
	80 --> 69
	107 --> 69
	108 --> 69
	108["mv_f__994 |False|  [bool.&& [mb__966]]"]
	80 --> 108
	81 --> 108
	81{"innerPhi__967 ϕ"}
	78 --> 81
	111 --> 81
	112 --> 81
	112["mv_f__998 |False|  [U32_maybeTrue [mt__964]]"]
	78 --> 112
	65 --> 112
	65["c__803 u32.+"]
	34 --> 65
	63 --> 65
	63["arg__805 3"]
	111["mv_t__997 |True|  [U32_maybeTrue [mt__964]]"]
	78 --> 111
	68 --> 111
	68["c__800 u32.+"]
	51 --> 68
	66 --> 68
	66["arg__802 1"]
	107["mv_t__993 |True|  [bool.&& [mb__966]]"]
	80 --> 107
	82 --> 107
	82["merge__968 merge"]
	68 --> 82
	65 --> 82
	103["mv_t__989 |True|  [bool.&& [mb__961]]"]
	75 --> 103
	77 --> 103
	77["merge__963 merge"]
	69 --> 77
	61 --> 77
</pre>`;
window.traces["UNTANGLE_BRAID_LIMIT_STRESS_ul"]["untangled"] = ''
window.traces["UNTANGLE_BRAID_LIMIT_STRESS_ul"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	72 -. Stack .-> 1
	72["eff__796 push_u32"]
	70 --> 72
	19 -. Stack .-> 72
	19["seed pop_u32"]
	6 -. Stack .-> 19
	6["c4 pop_u32"]
	5 -. Stack .-> 6
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	70{"c ϕ"}
	75 --> 70
	103 --> 70
	104 --> 70
	104["mv_f__990 |False|  [bool.&& [mb__961]]"]
	75 --> 104
	76 --> 104
	76{"innerPhi__962 ϕ"}
	73 --> 76
	105 --> 76
	106 --> 76
	106["mv_f__992 |False|  [U32_maybeTrue [mt__959]]"]
	73 --> 106
	61 --> 106
	61{"c ϕ"}
	85 --> 61
	109 --> 61
	110 --> 61
	110["mv_f__996 |False|  [bool.&& [mb__971]]"]
	85 --> 110
	86 --> 110
	86{"innerPhi__972 ϕ"}
	83 --> 86
	113 --> 86
	114 --> 86
	114["mv_f__1000 |False|  [U32_maybeTrue [mt__969]]"]
	83 --> 114
	57 --> 114
	57["c__810 u32.+"]
	19 --> 57
	55 --> 57
	55["arg__812 4"]
	83["mt__969 U32_maybeTrue"]
	9 --> 83
	9["p u32.!="]
	3 --> 9
	7 --> 9
	7["arg__844 0"]
	113["mv_t__999 |True|  [U32_maybeTrue [mt__969]]"]
	83 --> 113
	60 --> 113
	60["c__807 u32.+"]
	51 --> 60
	58 --> 60
	58["arg__809 2"]
	51{"b ϕ"}
	90 --> 51
	115 --> 51
	116 --> 51
	116["mv_f__1002 |False|  [bool.&& [mb__976]]"]
	90 --> 116
	91 --> 116
	91{"innerPhi__977 ϕ"}
	88 --> 91
	119 --> 91
	120 --> 91
	120["mv_f__1006 |False|  [U32_maybeTrue [mt__974]]"]
	88 --> 120
	42 --> 120
	42{"b ϕ"}
	80 --> 42
	125 --> 42
	126 --> 42
	126["mv_f__1012 |False|  [bool.&& [mb__966]]"]
	80 --> 126
	97 --> 126
	97{"innerPhi__983 ϕ"}
	78 --> 97
	133 --> 97
	134 --> 97
	134["mv_f__1020 |False|  [U32_maybeTrue [mt__964]]"]
	78 --> 134
	220 --> 134
	220["b__825__1082 30"]
	78["mt__964 U32_maybeTrue"]
	18 --> 78
	18["s u32.!="]
	6 --> 18
	16 --> 18
	16["arg__838 0"]
	133["mv_t__1019 |True|  [U32_maybeTrue [mt__964]]"]
	78 --> 133
	222 --> 133
	222["b__822__1084 u32.+"]
	219 --> 222
	221 --> 222
	221["arg__824__1083 2"]
	219{"a__1081 ϕ"}
	228 --> 219
	238 --> 219
	239 --> 219
	239["mv_f__1004__1101 |False|  [bool.&& [mb__971__1090]]"]
	228 --> 239
	232 --> 239
	232{"innerPhi__979__1094 ϕ"}
	226 --> 232
	240 --> 232
	241 --> 232
	241["mv_f__1008__1103 |False|  [U32_maybeTrue [mt__969__1088]]"]
	226 --> 241
	263 --> 241
	263{"a__1038__1125 ϕ"}
	270 --> 263
	280 --> 263
	281 --> 263
	281["mv_f__1016__1056__1143 |False|  [bool.&& [mb__961__1045__1132]]"]
	270 --> 281
	276 --> 281
	276{"innerPhi__987__1051__1138 ϕ"}
	268 --> 276
	284 --> 276
	285 --> 276
	285["mv_f__1024__1060__1147 |False|  [U32_maybeTrue [mt__959__1043__1130]]"]
	268 --> 285
	286 --> 285
	286["a__836__1025__1061__1148 20"]
	268["mt__959__1043__1130 U32_maybeTrue"]
	259 --> 268
	259["r__1034__1121 u32.!="]
	5 --> 259
	258 --> 259
	258["arg__840__1033__1120 0"]
	284["mv_t__1023__1059__1146 |True|  [U32_maybeTrue [mt__959__1043__1130]]"]
	268 --> 284
	288 --> 284
	288["a__833__1027__1063__1150 u32.+"]
	19 --> 288
	287 --> 288
	287["arg__835__1026__1062__1149 2"]
	270["mb__961__1045__1132 bool.&&"]
	268 --> 270
	269 --> 270
	269["mf__960__1044__1131 U32_maybeFalse"]
	259 --> 269
	280["mv_t__1015__1055__1142 |True|  [bool.&& [mb__961__1045__1132]]"]
	270 --> 280
	277 --> 280
	277["merge__988__1052__1139 merge"]
	262 --> 277
	260 --> 277
	260["a__836__1035__1122 20"]
	262["a__833__1037__1124 u32.+"]
	19 --> 262
	261 --> 262
	261["arg__835__1036__1123 2"]
	226["mt__969__1088 U32_maybeTrue"]
	206 --> 226
	206["p__1068 u32.!="]
	3 --> 206
	205 --> 206
	205["arg__844__1067 0"]
	240["mv_t__1007__1102 |True|  [U32_maybeTrue [mt__969__1088]]"]
	226 --> 240
	267 --> 240
	267{"a__1042__1129 ϕ"}
	273 --> 267
	278 --> 267
	279 --> 267
	279["mv_f__1014__1054__1141 |False|  [bool.&& [mb__976__1048__1135]]"]
	273 --> 279
	274 --> 279
	274{"innerPhi__985__1049__1136 ϕ"}
	271 --> 274
	282 --> 274
	283 --> 274
	283["mv_f__1022__1058__1145 |False|  [U32_maybeTrue [mt__974__1046__1133]]"]
	271 --> 283
	289 --> 283
	289["a__831__1028__1064__1151 10"]
	271["mt__974__1046__1133 U32_maybeTrue"]
	257 --> 271
	257["q__1032__1119 u32.!="]
	4 --> 257
	256 --> 257
	256["arg__842__1031__1118 0"]
	282["mv_t__1021__1057__1144 |True|  [U32_maybeTrue [mt__974__1046__1133]]"]
	271 --> 282
	291 --> 282
	291["a__828__1030__1066__1153 u32.+"]
	19 --> 291
	290 --> 291
	290["arg__830__1029__1065__1152 1"]
	273["mb__976__1048__1135 bool.&&"]
	271 --> 273
	272 --> 273
	272["mf__975__1047__1134 U32_maybeFalse"]
	257 --> 272
	278["mv_t__1013__1053__1140 |True|  [bool.&& [mb__976__1048__1135]]"]
	273 --> 278
	275 --> 278
	275["merge__986__1050__1137 merge"]
	266 --> 275
	264 --> 275
	264["a__831__1039__1126 10"]
	266["a__828__1041__1128 u32.+"]
	19 --> 266
	265 --> 266
	265["arg__830__1040__1127 1"]
	228["mb__971__1090 bool.&&"]
	226 --> 228
	227 --> 228
	227["mf__970__1089 U32_maybeFalse"]
	206 --> 227
	238["mv_t__1003__1100 |True|  [bool.&& [mb__971__1090]]"]
	228 --> 238
	233 --> 238
	233["merge__980__1095 merge"]
	218 --> 233
	214 --> 233
	214{"a__1076 ϕ"}
	225 --> 214
	244 --> 214
	245 --> 214
	245["mv_f__1016__1107 |False|  [bool.&& [mb__961__1087]]"]
	225 --> 245
	236 --> 245
	236{"innerPhi__987__1098 ϕ"}
	223 --> 236
	248 --> 236
	249 --> 236
	249["mv_f__1024__1111 |False|  [U32_maybeTrue [mt__959__1085]]"]
	223 --> 249
	250 --> 249
	250["a__836__1025__1112 20"]
	223["mt__959__1085 U32_maybeTrue"]
	210 --> 223
	210["r__1072 u32.!="]
	5 --> 210
	209 --> 210
	209["arg__840__1071 0"]
	248["mv_t__1023__1110 |True|  [U32_maybeTrue [mt__959__1085]]"]
	223 --> 248
	252 --> 248
	252["a__833__1027__1114 u32.+"]
	19 --> 252
	251 --> 252
	251["arg__835__1026__1113 2"]
	225["mb__961__1087 bool.&&"]
	223 --> 225
	224 --> 225
	224["mf__960__1086 U32_maybeFalse"]
	210 --> 224
	244["mv_t__1015__1106 |True|  [bool.&& [mb__961__1087]]"]
	225 --> 244
	237 --> 244
	237["merge__988__1099 merge"]
	213 --> 237
	211 --> 237
	211["a__836__1073 20"]
	213["a__833__1075 u32.+"]
	19 --> 213
	212 --> 213
	212["arg__835__1074 2"]
	218{"a__1080 ϕ"}
	231 --> 218
	242 --> 218
	243 --> 218
	243["mv_f__1014__1105 |False|  [bool.&& [mb__976__1093]]"]
	231 --> 243
	234 --> 243
	234{"innerPhi__985__1096 ϕ"}
	229 --> 234
	246 --> 234
	247 --> 234
	247["mv_f__1022__1109 |False|  [U32_maybeTrue [mt__974__1091]]"]
	229 --> 247
	253 --> 247
	253["a__831__1028__1115 10"]
	229["mt__974__1091 U32_maybeTrue"]
	208 --> 229
	208["q__1070 u32.!="]
	4 --> 208
	207 --> 208
	207["arg__842__1069 0"]
	246["mv_t__1021__1108 |True|  [U32_maybeTrue [mt__974__1091]]"]
	229 --> 246
	255 --> 246
	255["a__828__1030__1117 u32.+"]
	19 --> 255
	254 --> 255
	254["arg__830__1029__1116 1"]
	231["mb__976__1093 bool.&&"]
	229 --> 231
	230 --> 231
	230["mf__975__1092 U32_maybeFalse"]
	208 --> 230
	242["mv_t__1013__1104 |True|  [bool.&& [mb__976__1093]]"]
	231 --> 242
	235 --> 242
	235["merge__986__1097 merge"]
	217 --> 235
	215 --> 235
	215["a__831__1077 10"]
	217["a__828__1079 u32.+"]
	19 --> 217
	216 --> 217
	216["arg__830__1078 1"]
	80["mb__966 bool.&&"]
	78 --> 80
	79 --> 80
	79["mf__965 U32_maybeFalse"]
	18 --> 79
	125["mv_t__1011 |True|  [bool.&& [mb__966]]"]
	80 --> 125
	98 --> 125
	98["merge__984 merge"]
	41 --> 98
	38 --> 98
	38["b__825 30"]
	41["b__822 u32.+"]
	34 --> 41
	39 --> 41
	39["arg__824 2"]
	34{"a ϕ"}
	85 --> 34
	117 --> 34
	118 --> 34
	118["mv_f__1004 |False|  [bool.&& [mb__971]]"]
	85 --> 118
	93 --> 118
	93{"innerPhi__979 ϕ"}
	83 --> 93
	121 --> 93
	122 --> 93
	122["mv_f__1008 |False|  [U32_maybeTrue [mt__969]]"]
	83 --> 122
	168 --> 122
	168{"a__1038 ϕ"}
	175 --> 168
	185 --> 168
	186 --> 168
	186["mv_f__1016__1056 |False|  [bool.&& [mb__961__1045]]"]
	175 --> 186
	181 --> 186
	181{"innerPhi__987__1051 ϕ"}
	173 --> 181
	189 --> 181
	190 --> 181
	190["mv_f__1024__1060 |False|  [U32_maybeTrue [mt__959__1043]]"]
	173 --> 190
	191 --> 190
	191["a__836__1025__1061 20"]
	173["mt__959__1043 U32_maybeTrue"]
	164 --> 173
	164["r__1034 u32.!="]
	5 --> 164
	163 --> 164
	163["arg__840__1033 0"]
	189["mv_t__1023__1059 |True|  [U32_maybeTrue [mt__959__1043]]"]
	173 --> 189
	193 --> 189
	193["a__833__1027__1063 u32.+"]
	19 --> 193
	192 --> 193
	192["arg__835__1026__1062 2"]
	175["mb__961__1045 bool.&&"]
	173 --> 175
	174 --> 175
	174["mf__960__1044 U32_maybeFalse"]
	164 --> 174
	185["mv_t__1015__1055 |True|  [bool.&& [mb__961__1045]]"]
	175 --> 185
	182 --> 185
	182["merge__988__1052 merge"]
	167 --> 182
	165 --> 182
	165["a__836__1035 20"]
	167["a__833__1037 u32.+"]
	19 --> 167
	166 --> 167
	166["arg__835__1036 2"]
	121["mv_t__1007 |True|  [U32_maybeTrue [mt__969]]"]
	83 --> 121
	172 --> 121
	172{"a__1042 ϕ"}
	178 --> 172
	183 --> 172
	184 --> 172
	184["mv_f__1014__1054 |False|  [bool.&& [mb__976__1048]]"]
	178 --> 184
	179 --> 184
	179{"innerPhi__985__1049 ϕ"}
	176 --> 179
	187 --> 179
	188 --> 179
	188["mv_f__1022__1058 |False|  [U32_maybeTrue [mt__974__1046]]"]
	176 --> 188
	194 --> 188
	194["a__831__1028__1064 10"]
	176["mt__974__1046 U32_maybeTrue"]
	162 --> 176
	162["q__1032 u32.!="]
	4 --> 162
	161 --> 162
	161["arg__842__1031 0"]
	187["mv_t__1021__1057 |True|  [U32_maybeTrue [mt__974__1046]]"]
	176 --> 187
	196 --> 187
	196["a__828__1030__1066 u32.+"]
	19 --> 196
	195 --> 196
	195["arg__830__1029__1065 1"]
	178["mb__976__1048 bool.&&"]
	176 --> 178
	177 --> 178
	177["mf__975__1047 U32_maybeFalse"]
	162 --> 177
	183["mv_t__1013__1053 |True|  [bool.&& [mb__976__1048]]"]
	178 --> 183
	180 --> 183
	180["merge__986__1050 merge"]
	171 --> 180
	169 --> 180
	169["a__831__1039 10"]
	171["a__828__1041 u32.+"]
	19 --> 171
	170 --> 171
	170["arg__830__1040 1"]
	85["mb__971 bool.&&"]
	83 --> 85
	84 --> 85
	84["mf__970 U32_maybeFalse"]
	9 --> 84
	117["mv_t__1003 |True|  [bool.&& [mb__971]]"]
	85 --> 117
	94 --> 117
	94["merge__980 merge"]
	33 --> 94
	27 --> 94
	27{"a ϕ"}
	75 --> 27
	129 --> 27
	130 --> 27
	130["mv_f__1016 |False|  [bool.&& [mb__961]]"]
	75 --> 130
	101 --> 130
	101{"innerPhi__987 ϕ"}
	73 --> 101
	137 --> 101
	138 --> 101
	138["mv_f__1024 |False|  [U32_maybeTrue [mt__959]]"]
	73 --> 138
	155 --> 138
	155["a__836__1025 20"]
	73["mt__959 U32_maybeTrue"]
	15 --> 73
	15["r u32.!="]
	5 --> 15
	13 --> 15
	13["arg__840 0"]
	137["mv_t__1023 |True|  [U32_maybeTrue [mt__959]]"]
	73 --> 137
	157 --> 137
	157["a__833__1027 u32.+"]
	19 --> 157
	156 --> 157
	156["arg__835__1026 2"]
	75["mb__961 bool.&&"]
	73 --> 75
	74 --> 75
	74["mf__960 U32_maybeFalse"]
	15 --> 74
	129["mv_t__1015 |True|  [bool.&& [mb__961]]"]
	75 --> 129
	102 --> 129
	102["merge__988 merge"]
	26 --> 102
	23 --> 102
	23["a__836 20"]
	26["a__833 u32.+"]
	19 --> 26
	24 --> 26
	24["arg__835 2"]
	33{"a ϕ"}
	90 --> 33
	127 --> 33
	128 --> 33
	128["mv_f__1014 |False|  [bool.&& [mb__976]]"]
	90 --> 128
	99 --> 128
	99{"innerPhi__985 ϕ"}
	88 --> 99
	135 --> 99
	136 --> 99
	136["mv_f__1022 |False|  [U32_maybeTrue [mt__974]]"]
	88 --> 136
	158 --> 136
	158["a__831__1028 10"]
	88["mt__974 U32_maybeTrue"]
	12 --> 88
	12["q u32.!="]
	4 --> 12
	10 --> 12
	10["arg__842 0"]
	135["mv_t__1021 |True|  [U32_maybeTrue [mt__974]]"]
	88 --> 135
	160 --> 135
	160["a__828__1030 u32.+"]
	19 --> 160
	159 --> 160
	159["arg__830__1029 1"]
	90["mb__976 bool.&&"]
	88 --> 90
	89 --> 90
	89["mf__975 U32_maybeFalse"]
	12 --> 89
	127["mv_t__1013 |True|  [bool.&& [mb__976]]"]
	90 --> 127
	100 --> 127
	100["merge__986 merge"]
	32 --> 100
	29 --> 100
	29["a__831 10"]
	32["a__828 u32.+"]
	19 --> 32
	30 --> 32
	30["arg__830 1"]
	119["mv_t__1005 |True|  [U32_maybeTrue [mt__974]]"]
	88 --> 119
	50 --> 119
	50{"b ϕ"}
	75 --> 50
	123 --> 50
	124 --> 50
	124["mv_f__1010 |False|  [bool.&& [mb__961]]"]
	75 --> 124
	95 --> 124
	95{"innerPhi__981 ϕ"}
	73 --> 95
	131 --> 95
	132 --> 95
	132["mv_f__1018 |False|  [U32_maybeTrue [mt__959]]"]
	73 --> 132
	46 --> 132
	46["b__818 u32.+"]
	19 --> 46
	44 --> 46
	44["arg__820 3"]
	131["mv_t__1017 |True|  [U32_maybeTrue [mt__959]]"]
	73 --> 131
	49 --> 131
	49["b__815 u32.+"]
	34 --> 49
	47 --> 49
	47["arg__817 1"]
	123["mv_t__1009 |True|  [bool.&& [mb__961]]"]
	75 --> 123
	96 --> 123
	96["merge__982 merge"]
	49 --> 96
	46 --> 96
	115["mv_t__1001 |True|  [bool.&& [mb__976]]"]
	90 --> 115
	92 --> 115
	92["merge__978 merge"]
	50 --> 92
	42 --> 92
	109["mv_t__995 |True|  [bool.&& [mb__971]]"]
	85 --> 109
	87 --> 109
	87["merge__973 merge"]
	60 --> 87
	57 --> 87
	105["mv_t__991 |True|  [U32_maybeTrue [mt__959]]"]
	73 --> 105
	69 --> 105
	69{"c ϕ"}
	80 --> 69
	107 --> 69
	108 --> 69
	108["mv_f__994 |False|  [bool.&& [mb__966]]"]
	80 --> 108
	81 --> 108
	81{"innerPhi__967 ϕ"}
	78 --> 81
	111 --> 81
	112 --> 81
	112["mv_f__998 |False|  [U32_maybeTrue [mt__964]]"]
	78 --> 112
	65 --> 112
	65["c__803 u32.+"]
	34 --> 65
	63 --> 65
	63["arg__805 3"]
	111["mv_t__997 |True|  [U32_maybeTrue [mt__964]]"]
	78 --> 111
	68 --> 111
	68["c__800 u32.+"]
	51 --> 68
	66 --> 68
	66["arg__802 1"]
	107["mv_t__993 |True|  [bool.&& [mb__966]]"]
	80 --> 107
	82 --> 107
	82["merge__968 merge"]
	68 --> 82
	65 --> 82
	103["mv_t__989 |True|  [bool.&& [mb__961]]"]
	75 --> 103
	77 --> 103
	77["merge__963 merge"]
	69 --> 77
	61 --> 77
</pre>`;
