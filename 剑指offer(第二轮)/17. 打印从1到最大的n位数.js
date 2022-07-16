/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
    let ans = []
    let max = ''
    while (n--) {
        max += '9'
    }
    max = parseInt(max)
    for (let i = 1; i<=max; i++) {
        ans.push(i)
    }
    return ans
};
