/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    const map = new Map([[0, 1]])
    let sum = 0, res = 0
    for (let n of nums) {
        sum += n
        res += map.get(sum - k) || 0
        map.set(sum, (map.get(sum) || 0) + 1)
    }

    return res
};


console.log(subarraySum([1, 2, 3], 3))
