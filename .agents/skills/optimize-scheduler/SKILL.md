---
name: optimize-scheduler
description: Use this skill when the user asks to "optimize the scheduler", "speed up ValidatorGen", "improve scheduler performance", "scheduler is slow", or wants to reduce build time for the validator.
version: 0.1.0
---

# Optimize Scheduler

Guidance for improving the performance of the Sea of Nodes scheduler and validator code generator. The scheduler runs at **build time** (not runtime), so performance here means reducing the wall-clock time of `./ValidatorGen`.

## Correctness-First Protocol

**Always verify correctness before and after any optimization.** The build/test loop is:

```bash
# 1. Baseline correctness check
make validator
rg generated/Validator.v3 -e "ERROR" | wc -l   # must be 0

# 2. Make the optimization

# 3. Correctness check after change
make validator
rg generated/Validator.v3 -e "ERROR" | wc -l   # must still be 0

# 4. Timing comparison
make clean && make ValidatorGen
time ./ValidatorGen > /dev/null                  # compare vs baseline
```

Take a timing baseline **before** any changes so improvements can be quantified.

If error count increases after an optimization, the optimization is incorrect — revert it before proceeding.
