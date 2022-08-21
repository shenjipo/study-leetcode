/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length === 1 || !prices.length) return 0
    let dp = []
    for (let i = 0; i < prices.length; i++) {
        dp[i] = []
    }
    dp[0][0] = 0
    dp[0][1] = -prices[0]
    dp[1][0] = Math.max(dp[0][0], dp[0][1] + prices[1])
    dp[1][1] = Math.max(-prices[1], -prices[0])

    for (let i = 2; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i])
    }
    return dp[prices.length - 1][0]
};