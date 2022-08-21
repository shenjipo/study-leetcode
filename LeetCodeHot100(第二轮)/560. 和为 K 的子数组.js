/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    if (nums.length === 0) return 0

    let mp = new Map()
    let sum = 0
    let ans = 0
    mp.set(0, 1)
    for (let num of nums) {
        sum += num
        mp.has(sum) ? mp.set(sum, mp.get(sum) + 1) : mp.set(sum, 1)
        if (mp.has(sum - k)) {
            ans += mp.get(sum - k)
        }
    }
    return ans
};

subarraySum([1, 1, 1], 2)
