/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let [left, right] = [0, nums.length - 1]
    while (left <= right) {
        let middle = parseInt((left + right) / 2)
        if (target === nums[middle]) {
            let [ansL, ansR] = [middle, middle]
            while (ansL > -1 && nums[ansL - 1] === target) {
                ansL--
            }
            while (ansR < nums.length && nums[ansR + 1] === target) {
                ansR++
            }
            return [ansL, ansR]
        } else if (target < nums[middle]) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }
    return [-1, -1]
};