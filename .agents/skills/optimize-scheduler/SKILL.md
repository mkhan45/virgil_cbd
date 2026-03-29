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
./scripts/schedule_test.sh --canonical | rg FAIL

# 2. Make the optimization

# 3. Correctness check after change
make validator
./scripts/schedule_test.sh --canonical | rg FAIL

# 4. Timing comparison
make clean && make validator
hyperfine "./scripts/schedule_test.sh --canonical"
```

Take a timing baseline **before** any changes so improvements can be quantified.

If error count increases after an optimization, the optimization is incorrect — debug it or re-evaluate.
