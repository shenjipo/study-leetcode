/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let mp = new Map([[0, 0]])
    let [ans, sum] = [0, 0]
    for (let num of nums) {

        sum += num
        ans += mp.get(sum - k) || 0
        mp.set(sum, (mp.get(sum) || 0) + 1)
    }
    return ans
};
subarraySum([1, 1, 1], 2)