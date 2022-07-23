/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let dp = [0]
    for (let i = 1; i <= n; i++) {
        dp.push(i.toString(2).split('').filter(item => item === '1').length)
    }
    return dp
};