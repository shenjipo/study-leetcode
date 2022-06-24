/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
    let ans = [1, 1, 2]
    for (let i = 2; i <= n; i++) {
        ans[i] = (ans[i - 2] + ans[i - 1]) % 1000000007
    }
    return ans[n]
};
