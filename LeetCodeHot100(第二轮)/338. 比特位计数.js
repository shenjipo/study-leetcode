/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let ans = [0]
    for (let i = 1; i <= n; i++) {

        let temp = i.toString(2).split('').reduce((pre, cur) => {
            if (cur === '1') pre++
            return pre
        }, 0)
        ans.push(temp)
    }
    console.log(ans)
    return ans
};
countBits(5)