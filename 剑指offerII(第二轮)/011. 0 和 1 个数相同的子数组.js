/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    let mp = new Map([[0, -1]])
    let [ans, sum] = [0, 0]
    nums.forEach((num, index) => {
        num = num === 0 ? -1 : num
        sum += num
        if (mp.has(sum)) {
            ans = Math.max(ans, index - mp.get(sum))
        } else {
            mp.set(sum, index)
        }

    })
    return ans
};
findMaxLength([0, 1, 0])