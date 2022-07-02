/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let dp = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        if (dp[i - 1] >= 0) {
            dp.push(dp[i - 1] + nums[i])
        } else {
            dp.push(nums[i])
        }
    }
    return Math.max(...dp)
};
