/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    let [left, right, res] = [0, 0, 1]
    let ans = 0
    while (left <= right && right < nums.length) {
        res *= nums[right]
        while (res >= k && left < right) {

            res /= nums[left++]
        }
        if (res < k) {
            ans += right - left === 0 ? 1 : right - left + 1
        }
        right++
    }
    return ans
};

numSubarrayProductLessThanK([10, 5, 2, 6], 100)