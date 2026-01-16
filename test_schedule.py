from dataclasses import dataclass, field
from typing import Set, List, Tuple, Union

# ============ Graph IR ============

class Op:
    START = "start"
    FINISH = "finish"
    PHI = "phi"
    EFFECT = "effect"
    COND = "cond"
    MERGE = "merge"

@dataclass(frozen=True)
class Node:
    id: str
    op: str
    deps: Tuple['Node', ...] = ()
    
    def __repr__(self):
        return self.id

# ============ CFG Output ============

@dataclass
class Block:
    """A basic block containing a sequence of nodes."""
    nodes: List[Node] = field(default_factory=list)
    
    def __repr__(self):
        return f"Block({[n.id for n in self.nodes]})"

@dataclass
class If:
    """A conditional branch."""
    cond: Node
    then_branch: 'CFG'
    else_branch: 'CFG'
    
    def __repr__(self):
        return f"If({self.cond.id}, {self.then_branch}, {self.else_branch})"

# CFG is a sequence of blocks and ifs
CFG = List[Union[Block, If]]

# ============ Core Functions ============

def ancestors(node: Node) -> Set[Node]:
    """All nodes reachable by following deps (backwards/upwards)."""
    result = set()
    worklist = [node]
    while worklist:
        curr = worklist.pop()
        if curr in result:
            continue
        result.add(curr)
        worklist.extend(curr.deps)
    return result

def dominators(node: Node, cache: dict | None = None) -> Set[Node]:
    """
    Compute the set of nodes that dominate this node.
    A node D dominates N if N cannot execute without D executing first.
    
    For Phi nodes, only the condition dominates - the branch inputs
    are conditional and don't dominate the Phi.
    """
    if cache is None:
        cache = {}
    
    if node in cache:
        return cache[node]
    
    if node.op == Op.START:
        result = {node}
    elif node.op == Op.PHI:
        # Only the condition dominates, not the branch inputs
        cond = node.deps[0]
        result = {node} | dominators(cond, cache)
    else:
        # All deps must execute, so union of all dominator sets + this node
        result = {node}
        for dep in node.deps:
            result |= dominators(dep, cache)
    
    cache[node] = result
    return result

# ============ Scheduler ============

def schedule(nodes: List[Node]) -> CFG:
    """Bottom-up scheduler that produces a CFG using dominator analysis."""
    n = {node.id: node for node in nodes}
    finish = n["finish"]
    dom_cache: dict = {}
    
    def schedule_node(node: Node, excluded: Set[Node], scheduled: Set[Node]) -> Tuple[CFG, Set[Node]]:
        """
        Schedule a node and its dependencies, return CFG fragment.
        
        'excluded' is the set of nodes we must NOT schedule in this branch
                   (they belong to a sibling branch of an enclosing phi).
        'scheduled' is the set of nodes already scheduled in the CURRENT path.
        """
        if node in scheduled:
            return [], scheduled
        
        if node in excluded:
            return [], scheduled
        
        if node.op == Op.START or node.op == Op.COND:
            return [], scheduled | {node}
        
        if node.op == Op.PHI:
            cond, left, right = node.deps
            
            # Compute dominators for each branch input
            left_doms = dominators(left, dom_cache)
            right_doms = dominators(right, dom_cache)
            
            # Compute ancestors for exclusion logic
            left_anc = ancestors(left)
            right_anc = ancestors(right)
            
            # Nodes that dominate BOTH branches should be hoisted
            # (they will definitely execute regardless of which branch is taken)
            hoist = (left_doms & right_doms) - scheduled - {cond}
            
            # Schedule hoisted nodes first (before the If)
            cfg: CFG = []
            current_scheduled = scheduled
            
            # Topologically sort hoisted nodes by scheduling through dependencies
            for hoist_node in hoist:
                if hoist_node not in current_scheduled and hoist_node not in excluded:
                    hoist_cfg, current_scheduled = schedule_node(hoist_node, excluded, current_scheduled)
                    cfg.extend(hoist_cfg)
            
            # Compute exclusions for each branch
            # Exclude nodes that are ancestors of the OTHER branch but not THIS branch
            # (they belong exclusively to the other branch)
            left_excluded = excluded | (right_anc - left_anc) | {right}
            right_excluded = excluded | (left_anc - right_anc) | {left}
            
            # Schedule each branch independently
            then_cfg, then_scheduled = schedule_node(left, left_excluded, current_scheduled.copy())
            else_cfg, else_scheduled = schedule_node(right, right_excluded, current_scheduled.copy())
            
            # After the phi, nodes scheduled in BOTH branches are available
            new_scheduled = current_scheduled | {node} | (then_scheduled & else_scheduled)
            
            if then_cfg or else_cfg:
                cfg.append(If(cond, then_cfg, else_cfg))
                return cfg, new_scheduled
            else:
                return cfg, new_scheduled
        
        else:
            # Regular node: schedule dependencies first
            cfg: CFG = []
            current_scheduled = scheduled
            
            for dep in node.deps:
                dep_cfg, current_scheduled = schedule_node(dep, excluded, current_scheduled)
                cfg.extend(dep_cfg)
            
            current_scheduled = current_scheduled | {node}
            
            # Add this node to a block
            if cfg and isinstance(cfg[-1], Block):
                cfg[-1].nodes.append(node)
            else:
                cfg.append(Block([node]))
            
            return cfg, current_scheduled
    
    cfg, _ = schedule_node(finish, set(), set())
    return cfg

# ============ Pretty Print ============

def pp_cfg(cfg: CFG, indent: int = 0) -> str:
    lines = []
    prefix = "  " * indent
    for item in cfg:
        if isinstance(item, Block):
            for node in item.nodes:
                lines.append(f"{prefix}{node.id}()")
        elif isinstance(item, If):
            lines.append(f"{prefix}if ({item.cond.id}) {{")
            lines.append(pp_cfg(item.then_branch, indent + 1))
            lines.append(f"{prefix}}} else {{")
            lines.append(pp_cfg(item.else_branch, indent + 1))
            lines.append(f"{prefix}}}")
    return "\n".join(lines)

# ============ Test ============

def build_example():
    """
    if (a) {
       eff1();
       eff2();
       merge();
    } else {
        if (b) {
            eff1();
        } else {
            eff2();
        }
    }
    """
    start = Node("start", Op.START)
    a = Node("a", Op.COND, (start,))
    b = Node("b", Op.COND, (start,))
    eff1 = Node("eff1", Op.EFFECT, (start,))
    eff2 = Node("eff2", Op.EFFECT, (eff1,))
    merge = Node("merge", Op.MERGE, (eff1, eff2))
    phi_b = Node("phi_b", Op.PHI, (b, eff1, eff2))
    phi_a = Node("phi_a", Op.PHI, (a, merge, phi_b))
    finish = Node("finish", Op.FINISH, (phi_a,))
    
    return [start, a, b, eff1, eff2, merge, phi_b, phi_a, finish]

def build_simple_branch():
    """
    if (a) {
       eff1();
    } else {
       eff2();
    }
    """
    start = Node("start", Op.START)
    a = Node("a", Op.COND, (start,))
    eff1 = Node("eff1", Op.EFFECT, (start,))
    eff2 = Node("eff2", Op.EFFECT, (start,))
    phi_a = Node("phi_a", Op.PHI, (a, eff1, eff2))
    finish = Node("finish", Op.FINISH, (phi_a,))
    
    return [start, a, eff1, eff2, phi_a, finish]

def build_shared_before_branch():
    """
    shared();
    if (a) {
       eff1();
    } else {
       eff2();
    }
    """
    start = Node("start", Op.START)
    a = Node("a", Op.COND, (start,))
    shared = Node("shared", Op.EFFECT, (start,))
    eff1 = Node("eff1", Op.EFFECT, (shared,))
    eff2 = Node("eff2", Op.EFFECT, (shared,))
    phi_a = Node("phi_a", Op.PHI, (a, eff1, eff2))
    finish = Node("finish", Op.FINISH, (phi_a,))
    
    return [start, a, shared, eff1, eff2, phi_a, finish]

def build_diamond():
    """
    eff1();
    if (a) {
       eff2();
    } else {
       eff3();
    }
    eff4();  // depends on the phi result
    """
    start = Node("start", Op.START)
    a = Node("a", Op.COND, (start,))
    eff1 = Node("eff1", Op.EFFECT, (start,))
    eff2 = Node("eff2", Op.EFFECT, (eff1,))
    eff3 = Node("eff3", Op.EFFECT, (eff1,))
    phi_a = Node("phi_a", Op.PHI, (a, eff2, eff3))
    eff4 = Node("eff4", Op.EFFECT, (phi_a,))
    finish = Node("finish", Op.FINISH, (eff4,))
    
    return [start, a, eff1, eff2, eff3, phi_a, eff4, finish]

def test_case(name: str, nodes: List[Node], expected: str):
    cfg = schedule(nodes)
    got = pp_cfg(cfg)
    # Normalize whitespace for comparison
    expected_norm = "\n".join(line for line in expected.strip().split("\n"))
    got_norm = "\n".join(line for line in got.strip().split("\n"))
    
    if expected_norm == got_norm:
        print(f"PASS: {name}")
    else:
        print(f"FAIL: {name}")
        print(f"  Expected:\n{expected}")
        print(f"  Got:\n{got}")

def test():
    print("=== Running Tests ===\n")
    
    # Note: eff1 is hoisted before phi_b because it dominates both branches:
    # - left branch needs eff1 directly
    # - right branch needs eff2, which depends on eff1
    test_case("nested_branch", build_example(), """\
if (a) {
  eff1()
  eff2()
  merge()
} else {
  eff1()
  if (b) {

  } else {
    eff2()
  }
}
finish()""")
    
    test_case("simple_branch", build_simple_branch(), """\
if (a) {
  eff1()
} else {
  eff2()
}
finish()""")
    
    test_case("shared_before_branch", build_shared_before_branch(), """\
shared()
if (a) {
  eff1()
} else {
  eff2()
}
finish()""")
    
    test_case("diamond", build_diamond(), """\
eff1()
if (a) {
  eff2()
} else {
  eff3()
}
eff4()
finish()""")

if __name__ == "__main__":
    test()
