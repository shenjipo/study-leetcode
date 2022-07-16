/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
    let dp = [null, 1, 1]
    for (let i = 3; i <= n; i++) {
        dp[i] = 0
        for (let j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i], dp[j] * (i - j), j * (i - j))
        }
    }
    return dp[n]
};