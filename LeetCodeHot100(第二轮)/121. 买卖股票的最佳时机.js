/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = prices[0]
    let dp = [0]
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - min <= 0) {
            dp[i] = 0
        } else {
            dp[i] = prices[i] - min
        }
        if (prices[i] < min) {
            min = prices[i]
        }
    }
    console.log(dp)
    return Math.max(...dp)
};
maxProfit([7,1,5,3,6,4])