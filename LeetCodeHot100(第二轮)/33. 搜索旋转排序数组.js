/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let [left, right] = [0, nums.length - 1]
    while (left <= right) {
        let middle = parseInt((left + right) / 2)
        if (nums[middle] === target) {
            return middle
        } else if (nums[middle] < nums[right]) {
            if (nums[middle] < target && target < nums[right]) {
                left = middle + 1
            } else {
                left = middle - 1
            }
        } else {
            if (nums[left] < target && nums[middle] > target) {
                right = middle - 1
            } else {
                left = middle + 1
            }
        }
    }
    return -1
};