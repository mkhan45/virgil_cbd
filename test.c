#include <stdbool.h>
#include <stdio.h>

int sum_loop(int n, int acc) {
    int local_0 = n;
    int local_1 = acc;
    loop_start_1:
    int rtcast_2 = 0;
    int local_0_equals_rtcast_2_3 = local_0 == rtcast_2;
    int fwd_i32_4;
    if (local_0_equals_rtcast_2_3) {
    int rtcast_5 = 1;
    fwd_i32_4 = rtcast_5;
    } else {
    int rtcast_6 = 0;
    fwd_i32_4 = rtcast_6;
    }
    int rtcast_7 = 0;
    int fwd_i32_4_not_equals__rtcast_7_8 = fwd_i32_4 != rtcast_7;
    if (fwd_i32_4_not_equals__rtcast_7_8) {
    goto block_end_0;
    } else {
    }
    int local_0_plus_local_1_9 = local_0 + local_1;
    local_1 = local_0_plus_local_1_9;
    int rtcast_10 = 1;
    int local_0_minus_rtcast_10_11 = local_0 - rtcast_10;
    local_0 = local_0_minus_rtcast_10_11;
    goto loop_start_1;
    if (false) {
    return local_0_plus_local_1_9;
    } else {
    }
    block_end_0:
    if (false) {
    return local_0_minus_rtcast_10_11;
    } else {
    }
    if (true) {
    return local_0_plus_local_1_9;
    } else {
    }
}

int main() {
    int res = sum_loop(100000, 0);
    printf("res: %d\n", res);
}
