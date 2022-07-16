/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > k)
            break
        let res = nums[i]
        count++
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] * res < k) {
                res *= nums[j]
                count++
            } else {
                break
            }
        }
    }
    return count
};
var numSubarrayProductLessThanK2 = function (nums, k) {
    let count = 0
    let [left, right, res] = [0, 0, 1]
    while (right < nums.length) {
        res *= nums[right]
        while (res >= k) {
            res /= nums[left]
            left++
        }
        count += right >= left ? right - left + 1 : 0
        right++
    }
    return count
};
console.log(numSubarrayProductLessThanK2([1, 2, 3], 0))
