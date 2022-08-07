/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    let dp = new Array(n + 1).fill(0)
    dp[0] = 0
    dp[1] = 1
    dp[2] = 2
    for (let i = 3; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            dp[i] = dp[i] + dp[j] * dp[i - j - 1]
        }
    }
    return dp[n]
};