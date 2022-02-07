/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {


    function dfs(x, n) {
        if (n == 0) {
            return 1
        }
        if (n % 2 !== 0) {
            return myPow(x, n - 1) * x
        } else {
            return myPow(x * x, n / 2)
        }

    }

    if (n > 0) {
        return dfs(x, n)
    } else {
        return 1 / dfs(x, -n)
    }

};