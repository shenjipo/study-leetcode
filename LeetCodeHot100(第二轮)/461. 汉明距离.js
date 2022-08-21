/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    let ans = x ^ y
    return ans.toString(2).split('').reduce((pre, cur) => {
        if (cur === '1') pre++
        return pre
    }, 0)
};