/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    let ans = [0, 1]
    for (let i = 2; i <= n; i++) {
        ans[i] = (ans[i - 2] + ans[i - 1]) % 1000000007
    }
    return ans[n]
};
