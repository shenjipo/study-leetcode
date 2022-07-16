/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
    let len = a.length
    let [left, right] = [new Array(len).fill(1), new Array(len).fill(1)]
    for (let i = 1; i < len ; i++) {
        left[i] = left[i - 1] * a[i - 1]
    }
    for (let i = len - 2; i >= 0; i--) {
        right[i] = right[i + 1] * a[i + 1]
    }

    let ans = []
    for (let i = 0; i < len; i++) {
        ans.push(left[i] * right[i])
    }
    return ans
};
console.log(constructArr([1, 2, 0, 4, 0]))