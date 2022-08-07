/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let ans = []
    const dfs = (left, right, temp) => {
        if (left + right === n * 2) {
            ans.push(temp)
            return
        }
        if (left < n) {
            dfs(left + 1, right, temp + '(')
        }
        if (right < left) {
            dfs(left, right + 1, temp + ')')
        }
    }
    dfs(0, 0, '')

    return ans
};