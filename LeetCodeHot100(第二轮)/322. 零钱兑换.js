/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0
    for (let coin of coins) {
        dp[coin] = 1
    }
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (dp[i - coin] !== Infinity && dp[i - coin]) {
                dp[i] = Math.min(dp[i - coin] + 1, dp[i])
            }
        }
    }
    console.log(dp)
    return dp[amount] === Infinity ? -1 : dp[amount]
};
coinChange([1, 2], 2)