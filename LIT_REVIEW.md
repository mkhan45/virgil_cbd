# Literature Review: Sea of Nodes Scheduling and Related Work

## 1. Sea of Nodes and Global Code Motion

### The Original Papers

**Click & Paleczny, "A Simple Graph-Based Intermediate Representation" (1995, ACM SIGPLAN Workshop)**
Introduces the Sea of Nodes IR, where both data and control dependencies are represented as edges between nodes, with no explicit basic block structure. The key insight: by removing the fixed schedule, optimizations don't need to maintain a legal instruction ordering, which simplifies passes like GVN and constant folding.

**Click, "Global Code Motion / Global Value Numbering" (PLDI 1995)**
The companion paper on *scheduling* -- converting the unordered Sea back into a CFG. The GCM algorithm works in two phases:

1. **Schedule Early**: Move each node as high as possible -- to the shallowest block that dominates all its operands. This is a fixed point: process operands first, then place the node at the deepest dominator among its operands' positions.
2. **Schedule Late**: Move each node as low as possible -- to the deepest block that still dominates all its uses. The LCA (lowest common ancestor) of all use-blocks gives the latest legal position.
3. **Select**: Between the early and late bounds, pick the block with the shallowest loop nesting to minimize execution frequency.

Phi nodes get special treatment: a phi's operand is considered used at the *predecessor* block (not the phi's own block), because phi elimination inserts copies there.

**What GCM does NOT do**: The paper doesn't discuss *cloning* or *duplication* of nodes. If a pure computation is used in two branches, GCM hoists it to their common dominator. This can slow down paths that don't need the value. The paper treats this as acceptable.

### Graal (Oracle, 2013-)

Graal is the most mature modern Sea of Nodes compiler. Key papers:

- **Duboscq et al., "An Intermediate Representation for Speculative Optimizations in a Dynamic Compiler" (VMIL 2013)** -- Graal's IR design.
- **Stadler, Würthinger & Mössenböck, "Partial Escape Analysis and Scalar Replacement for Java" (CGO 2014)** -- Demonstrates branch-sensitive optimization in Sea of Nodes: objects are only materialized on branches where they actually escape. This is conceptually related to our `untangle`: it's a per-branch duplication/specialization of shared state.

Graal's scheduler follows Click's GCM but extends it with heuristics for speculative optimizations and deoptimization points.

### V8 TurboFan / Turboshaft (Google, 2015-2025)

**"Land ahoy: leaving the Sea of Nodes" (V8 blog, 2025)**
V8's experience report on *abandoning* Sea of Nodes after 10 years. Key observations:

- **Scheduling is the central pain point.** "Eventually, all instructions must be scheduled to generate assembly code." The theory is that each instruction goes after its value, control, and effect inputs, but in practice this is fragile.
- **The duplication problem.** Pure operations that were deduplicated (by GVN/CSE) float to the common dominator of their users, "slowing down many paths that don't need them." TurboFan's scheduler tries to *re-duplicate* these instructions so they only appear on paths that need them. This creates a cycle: two divisions -> optimize to one -> re-duplicate back to two.
- **Effect chains are error-prone.** Managing parallel effect and control chains led to "many subtle bugs" taking months to discover.
- **Turboshaft (CFG IR)**: Compile time halved. "Only pure nodes actually float freely; effectful nodes end up constrained to basic blocks." Much simpler to reason about.

**Relevance to our scheduler**: V8's experience validates that the scheduling + duplication problem is genuinely hard. Our `untangle` step is doing exactly what TurboFan's scheduler tries to do -- cloning shared subgraphs so each branch has its own copy. The difference is that we do it as an explicit graph transformation before scheduling, rather than as a scheduling heuristic.

## 2. Bracevac et al.: Graph IRs for Impure Higher-Order Languages

**Bracevac, Wei, Jia, Abeysinghe, Jiang, Bao & Rompf, "Graph IRs for Impure Higher-Order Languages: Making Aggressive Optimizations Affordable with Precise Effect Dependencies" (OOPSLA 2023)**

### Core Contribution

A formal framework (λ\*\_G) for graph IRs that handles impure higher-order programs. The key insight: use *reachability types* and a simple *effect system* to statically determine the precise dependency edges needed in the graph IR. This lets you build a Sea-of-Nodes-like IR for functional languages with effects, where the effect dependencies are synthesized from types rather than hand-maintained.

### Relationship to Sea of Nodes

The paper is directly inspired by Sea of Nodes and Scala LMS (which also uses a Sea-of-Nodes-like graph IR). The λ\*\_G IR is essentially a typed, effect-aware generalization of Sea of Nodes for higher-order languages. Graph reachability corresponds to DCE; hash-consing gives CSE.

### Effect System and Dependencies

Effects are tracked per-operation and induce dependency edges:
- **Reads and writes** create hard and soft dependencies respectively
- Hard dependency: B must execute before A (A reads what B writes)
- Soft dependency: B should not be scheduled after A (anti-dependence), but B might not be scheduled at all

This is very close to our `reads`/`writes` on `StateComponent`, but formalized with types. The paper shows that static reachability types can precisely determine which effects alias, enabling more aggressive code motion than conservative approaches.

### Scheduling / Code Generation

The paper includes a code generation algorithm (building on Scala LMS's scheduler) that converts the graph IR back to sequential code. It uses a code motion algorithm that classifies dependencies as "hot" (frequently executed) or "cold" (conditional), and iteratively assigns statements to nesting levels while respecting ordering and containment constraints.

### What It Doesn't Address

The paper focuses on *correctness of the IR representation* and *optimization soundness*, not on the scheduling/duplication problem. It doesn't discuss cloning shared subgraphs between branches or anything analogous to our `untangle`. The code generation is relatively straightforward -- it doesn't handle the case where a shared pure computation should be duplicated into branches rather than hoisted.

## 3. E-Graphs and the Extraction Problem

### Background

**Willsey, Nandi, Wang, Flatt, Tatlock & Panchekha, "egg: Fast and Extensible Equality Saturation" (POPL 2021)**

E-graphs represent equivalence classes of terms. Equality saturation applies rewrite rules to exhaustion, then *extracts* an optimal concrete program from the e-graph. The extraction problem is:

> Given an e-graph (a compact representation of many equivalent programs), select one concrete program that minimizes a cost function.

### Extraction as Scheduling

There's a structural analogy between e-graph extraction and Sea of Nodes scheduling:

| E-graph | Sea of Nodes |
|---------|-------------|
| E-class (set of equivalent terms) | Node (single operation) |
| Extraction (pick one term per e-class) | Scheduling (assign each node to a block) |
| DAG cost model (shared subexpressions) | Shared subgraphs between branches |
| Cost function | Loop nesting / execution frequency |

The analogy is imperfect: e-graphs represent *alternative* implementations of the same value, while Sea of Nodes represents a *single* program with floating node placement. But the DAG extraction problem -- selecting terms while accounting for shared subexpressions -- is structurally similar to the problem of scheduling shared computations across branches.

### DAG Extraction is NP-Hard

**Key result**: E-graph extraction with DAG cost models (where shared subexpressions are counted once) is NP-hard, via reduction from minimal set cover. There is no constant-factor polynomial-time approximation unless P=NP.

This is relevant because our `untangle` step faces a related combinatorial problem: deciding which shared subgraph nodes to clone into branches vs. keep in the frontier. The optimal partition minimizes total work across all execution paths -- a DAG-cost-like objective.

### Cranelift's Aegraphs

**Fallin, "Aegraphs: Acyclic E-graphs for Cranelift" (EGRAPHS 2023)**

Cranelift (the Wasmtime compiler) uses an "acyclic e-graph" as its mid-end optimization IR. Key design decisions relevant to us:

- **Side-effect skeleton**: A reduced CFG containing only effectful instructions in their original order. Pure operations float above this skeleton. This is essentially the same distinction we make between value deps (pure) and state deps (effectful).
- **Scoped elaboration**: The extraction/scheduling algorithm. Traverses the dominator tree in preorder, materializing values "as low as possible." Uses a scoped hashmap so computed values are only visible in dominated blocks. This subsumes GVN, LICM, and rematerialization as byproducts.
- **Rematerialization as policy**: The system can *suppress* memoized values, forcing re-computation of cheap operations (constants, simple binary ops) at each use site. This is controlled duplication -- choosing to re-execute rather than hoist.
- **No explicit cloning/untangling**: Cranelift doesn't clone subgraphs between branches. Instead, scoped elaboration naturally handles it: if a value is only needed in one branch, it's materialized there. If needed in both, it's materialized at their common dominator. The "partial deadness" problem (value computed at the dominator but only used on some paths) is addressed by rematerialization policy, not by cloning.

**Relevance**: Cranelift's approach is the main alternative to our `untangle`. Instead of cloning shared subgraphs, it accepts that shared values live at the dominator and uses rematerialization to mitigate the cost. Our approach is more aggressive -- we actually duplicate the subgraph so each branch is independent. The tradeoff: our approach can produce better code (no unnecessary computation on cold paths) but increases IR size.

## 4. LMS and Effect Handling in Graph IRs

**Rompf & Odersky, "Lightweight Modular Staging" (2010-2013)**

LMS uses a graph IR with the overall structure of a Sea of Nodes. Its effect system is particularly relevant:

- **Reflect nodes** make effects explicit in the graph
- Effects are classified into reads and writes at specific allocation sites
- **Hard dependencies** (`syms`): value flow, must be serialized
- **Soft dependencies** (`softSyms`): anti-dependencies, prevent reordering but don't force scheduling
- **Nesting** (`boundSyms`): containment constraints (loop bodies, etc.)

LMS's code motion algorithm handles shared subexpressions across branches:
- Hash-consing during construction provides CSE: "structurally equivalent definitions return existing symbols, possibly moving the definition to a parent scope"
- Controlled duplication: a value "used only in conditionals but in different conditionals" gets duplicated into each branch
- Hot/cold path analysis guides placement decisions

**RandIR (Ofenbeck, Rompf & Püschel, Scala 2016)**: Differential testing for LMS's embedded compilers. Generates random IR instances from a typed grammar of operations, tests by comparing outputs across backends. Includes automatic shrinking of failing cases. Directly relevant to our PBT approach -- it's essentially Approach A (random program generation) applied to a graph IR compiler.

## 5. Substructural Types and State

**Wadler, "Linear Types Can Change the World!" (1990)**: The foundational observation that linear types enable safe in-place mutation in functional settings. A linearly-typed value must be used exactly once -- no implicit copying.

This is directly relevant to our copyable vs. non-copyable state design:
- **Linear state** (non-copyable): Memory, I/O. Must flow through exactly one path. The scheduler must use branches to avoid re-executing effects.
- **Unrestricted state** (copyable): Counters, flags. Can be freely duplicated. The scheduler may clone operations on this state.

No existing compiler IR that I found uses substructural types to *guide scheduling decisions* specifically. MLIR has a side-effect interface that classifies operations as pure/read/write, but it's used for legality checking, not for deciding whether to clone. Rust's ownership model enforces linearity at the source level but this information is erased before LLVM IR.

**The gap**: There appears to be no prior work that combines (a) Sea-of-Nodes-style graph IR, (b) substructural type annotations on state components, and (c) a scheduler that uses these annotations to decide cloning vs. branching strategies. This is the novel direction our work could explore.

## 6. Compiler Testing

**Yang, Chen, Eide & Regehr, "Finding and Understanding Bugs in C Compilers" (PLDI 2011)**: CSmith generates random C programs (40K+ lines of handwritten C++ generator) to test GCC and LLVM. Found hundreds of bugs. The key technique: generate programs with defined behavior, compile with multiple compilers, compare outputs.

**Le, Afshari & Su, "Compiler Validation via Equivalence Modulo Inputs" (PLDI 2014)**: EMI testing. Given a program and a test input, mutate dead code (code not executed on that input) to produce equivalent programs. Compile all variants, run on the same input, compare. Found 147 bugs in GCC/LLVM in 11 months. More effective at finding miscompilations than CSmith.

**Ofenbeck, Rompf & Püschel, "RandIR: Differential Testing for Embedded Compilers" (Scala 2016)**: As noted above -- random IR generation with automatic shrinking. The most directly relevant prior work to our PBT plan.

**Chen et al., "An Empirical Comparison of Compiler Testing Techniques" (ICSE 2016)**: Compares CSmith, EMI, and other approaches. Finds they are complementary -- different techniques find different bug classes.

## 7. Does Anything Do What `untangle` Does?

**Short answer: not exactly.** The closest things are:

1. **V8 TurboFan's scheduler duplication heuristic**: Re-duplicates shared pure computations into the branches that need them. But this is a scheduling-time heuristic, not an explicit graph transformation. And V8 abandoned it as too complex.

2. **Graal's partial escape analysis**: Duplicates object materializations into branches. Conceptually similar (per-branch specialization of shared state), but operates at a different abstraction level (object allocation, not arbitrary graph nodes).

3. **Cranelift's rematerialization**: Re-computes cheap values at use sites instead of hoisting. Addresses the same problem (shared values on cold paths) but with the opposite strategy -- re-compute rather than clone.

4. **Tail duplication in traditional compilers**: Duplicates code at control flow merges to enable per-path optimization. Related in spirit (duplicate to specialize per branch) but operates on CFG blocks, not graph subexpressions.

5. **LMS's conditional duplication**: Duplicates values "used only in conditionals but in different conditionals." The closest match, but appears to be a simple heuristic rather than the systematic subgraph cloning that `untangle` performs.

**What's novel about `untangle`**: It's a systematic, pre-scheduling graph transformation that:
- Partitions the dependency graph into frontier (shared), left-subgraph, and right-subgraph
- Clones the branch-exclusive subgraphs so each phi gets independent copies
- Iterates across all branch conditions in topological order
- Handles nested conditions via BranchLattice merging

This is more principled than the ad-hoc duplication heuristics used by other compilers. The closest conceptual framework is the e-graph extraction problem (selecting a concrete program from a shared representation), but `untangle` operates on a different data structure and solves a different variant of the problem.

## References

- Click & Paleczny, "A Simple Graph-Based Intermediate Representation" (1995)
- Click, ["Global Code Motion / Global Value Numbering"](https://dl.acm.org/doi/10.1145/207110.207154) (PLDI 1995)
- Bracevac et al., ["Graph IRs for Impure Higher-Order Languages"](https://dl.acm.org/doi/10.1145/3622813) (OOPSLA 2023)
- V8 Team, ["Land ahoy: leaving the Sea of Nodes"](https://v8.dev/blog/leaving-the-sea-of-nodes) (2025)
- Willsey et al., ["egg: Fast and Extensible Equality Saturation"](https://arxiv.org/pdf/2004.03082) (POPL 2021)
- Fallin, ["Aegraphs: Acyclic E-graphs for Cranelift"](https://github.com/bytecodealliance/rfcs/blob/main/accepted/cranelift-egraph.md) (EGRAPHS 2023)
- Stadler et al., ["Partial Escape Analysis and Scalar Replacement for Java"](https://ssw.jku.at/Research/Papers/Stadler14/Stadler2014-CGO-PEA.pdf) (CGO 2014)
- Rompf & Odersky, "Lightweight Modular Staging" (GPCE 2010)
- Ofenbeck, Rompf & Püschel, ["RandIR: Differential Testing for Embedded Compilers"](https://www.cs.purdue.edu/homes/rompf/papers/ofenbeck-scala16.pdf) (Scala 2016)
- Yang et al., "Finding and Understanding Bugs in C Compilers" (PLDI 2011)
- Le et al., ["Compiler Validation via Equivalence Modulo Inputs"](https://dl.acm.org/doi/10.1145/2594291.2594334) (PLDI 2014)
- [Notes on the scheduling and extraction problems of EqSat](https://effect.systems/blog/eqsat-schedule-extract-notes.html)
