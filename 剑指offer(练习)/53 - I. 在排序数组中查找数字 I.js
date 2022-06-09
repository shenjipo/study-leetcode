/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let [left, right] = [0, nums.length - 1]
    let count = 0
    while (left <= right) {
        let middle = parseInt((left + right) / 2)
        if (nums[middle] === target) {
            count++
            let flag = middle
            while (nums[--flag] === target) {
                count++
            }
            flag = middle
            while (nums[++flag] === target) {
                count++
            }
            break
        } else if (nums[middle] < target) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }
    return count
};
