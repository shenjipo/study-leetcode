/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let mp = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
    let len = digits.length
    let ans = []
    let path = []
    const dfs = (index) => {
        if (index >= len) {
            ans.push(path.join(''))
            return
        }

        for (let item of mp[parseInt(digits[index])]) {
            path.push(item)
            dfs(index + 1)
            path.pop()
        }
    }
    dfs(0)
    return ans
};
letterCombinations('23')