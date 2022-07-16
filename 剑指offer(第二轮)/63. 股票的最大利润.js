/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let dp = [0]
    let min = [prices[0]]
    for (let i = 1; i < prices.length; i++) {
        dp.push(prices[i] > min[i - 1] ? prices[i] - min[i - 1] : 0)
        min.push(Math.min(...min, prices[i]))
    }
    return Math.max(...dp)
};
