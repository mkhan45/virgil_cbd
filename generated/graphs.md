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
	11 -. Stack .-> 1
	0 -. Trap Locals Globals Tables Memory Extra .-> 1
	0["
	Start
	"]
	0 ==> 3
	11["
	eff__0
	push_Value
	"]
	5 --> 11
	8 --> 11
	8 -. Stack .-> 11
	11 ==> 1
	8["
	val
	getLocal
	"]
	5 --> 8
	3 --> 8
	0 -. Stack .-> 8
	8 ==> 11
	3["
	index
	imm_readULEB32
	"]
	0 -. Codeptr .-> 3
	3 ==> 5
	5["
	tv
	f_getLocalType
	"]
	3 --> 5
	5 ==> 8
```
