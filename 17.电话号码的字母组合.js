/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let len = digits.length
    let map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    if (len === 0) {
        return []
    } else if (len === 1) {
        return map[digits].split('')
    }

    let res = [], path = [];
    backtracking(0)

    function backtracking(level) {
        if (level === len) {
            res.push(path.join(''))
            return
        }
        for (let temp of map[digits[level]]) {
            path.push(temp)
            backtracking(level + 1)
            path.pop()
        }
    }

    return res;
};

console.log(letterCombinations('23'))