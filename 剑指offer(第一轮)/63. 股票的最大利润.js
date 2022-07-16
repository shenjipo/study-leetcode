/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length === 0) {
        return 0
    }
    let min = prices[0]
    let dp = [0]
    for (let i = 1; i < prices.length; i++) {
        dp.push(prices[i] - min > 0 ? prices[i] - min : 0)
        if (prices[i] < min) {
            min = prices[i]
        }
    }
    console.log(dp)
    return Math.max.apply(null, dp)
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))