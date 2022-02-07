/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
        if (nums.length === 0) {
            return 0
        }
        let dp = [nums[0]]
        for (let i = 1; i < nums.length; i++) {
            if (dp[i - 1] >= 0) {
                dp[i] = dp[i - 1] + nums[i]
            } else {
                dp[i] = nums[i]
            }
        }
        return Math.max.apply(nums, dp)
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))