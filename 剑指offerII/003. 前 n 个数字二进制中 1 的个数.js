/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let ans = []
    for (let i = 0; i <= n; i++) {
        let num = Array.from(i.toString(2))
        let count = num.reduce((pre, curr) => {

            return Number(pre) + Number(curr)
        }, 0)
        ans.push(count)
    }
    return ans
};
var countBits2 = function (n) {
    let ans = []
    for (let i = 0; i <= n; i++) {
        ans[i] = 0
        for (let j = 0; j < 32; j++) {
            ans[i] += i >> j & 1
        }
    }
    return ans
};
console.log(countBits2(5))
