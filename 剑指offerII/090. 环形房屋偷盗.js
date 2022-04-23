/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let dp1 = [nums[0] || 0, nums[1] || 0]
    let dp2 = [nums[1] || 0, nums[2] || 0]
    for (let i = 2; i < nums.length - 1; i++) {
        dp1[i] = Math.max(dp1[i - 2], dp1[i - 3] || 0) + nums[i]
    }
    for (let i = 2; i < nums.length - 1; i++) {
        dp2[i] = Math.max(dp2[i - 2], dp2[i - 3] || 0) + nums[i + 1]
    }

    return Math.max(...dp1, ...dp2)
};
