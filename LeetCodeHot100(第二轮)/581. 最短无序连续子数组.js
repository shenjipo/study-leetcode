/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
    let [left, right] = [0, nums.length - 1]
    while (left < nums.length - 1 && nums[left] <= nums[left + 1]) {
        left++
    }
    while (right > 0 && nums[right] >= nums[right - 1]) {
        right--
    }
    let newArray = nums.slice(left, right + 1)
    let [min, max] = [Math.min(...newArray), Math.max(...newArray)]
    while (nums[left] > min) {
        left--
    }
    while (nums[right] < max) {
        right++
    }

    return left < right ? right - left - 1 : 0
};