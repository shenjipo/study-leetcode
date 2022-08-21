const findTargetSumWays2 = (nums, target) => {
    let sum = nums.reduce((t, v) => t + v)
    if ((sum + target) % 2 !== 0 || sum + target < 0) return 0

    let result = parseInt((sum + target) / 2)
    // let dp = new Array(result + 1).fill(0)
    // dp[0] = 1
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = result; j >= nums[i]; j--) {
    //         dp[j] = dp[j - nums[i]] + dp[j]
    //     }
    // }
    let dp = new Array(nums.length + 1).fill(0).map(item => {
        return new Array(result + 1).fill(0)
    })
    dp[0][0] = 1
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i - 1]
        for (let j = 0; j <= result; j++) {
            dp[i][j] = dp[i - 1][j]
            if (j >= num) {
                dp[i][j] += dp[i - 1][j - num];
            }
        }
    }
    console.log(dp[nums.length][result])
    return dp[nums.length][result]

}
findTargetSumWays2([1, 1, 1, 1, 1], 3)
