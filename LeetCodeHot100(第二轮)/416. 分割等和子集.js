/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    let sum = nums.reduce((pre, cur) => pre + cur)
    if (sum % 2 !== 0) return false
    let target = sum / 2
    let dp = new Array(nums.length).fill(false).map(item => {
        return new Array(target + 1).fill(false)
    })

    dp[0][nums[0]] = true
    dp[0][0] = true
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j <= target; j++) {
            dp[i][j] = dp[i - 1][j]
            if (target === nums[i]) {
                dp[i][j] = true
            }
            if (j >= nums[i]) {
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]]
            }
        }
    }
    return dp[nums.length - 1][target]
};
canPartition([1, 5, 10, 6])
