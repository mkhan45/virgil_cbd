```
def IRNode::get_ctl_deps() -> Vector<CtlDep> {
    // essentially find phis which dominate?
}
```

```
def ScheduleNode::schedule(..., ctl_deps: List<CtlDep>)
```
Separate control deps from dominants, get rid of move nodes.

===========

Actually, maybe if a node is used both in/out of a phi, that means
it needs to dominate the phi, not just move nodes. So it would have to
be scheduled above. 

But if moves are dominated above the branch, how do double diamonds work?
Shouldn't be an issue, doable diamond means there will be a node above the branch
they need to dominate.

But then we still need antideps to prevent stuff just being scheduled above the branch,
or we need to schedule the branch separately from its phi. Can we just queue a new branch to
schedule whenever we schedule a non-fused phi?
