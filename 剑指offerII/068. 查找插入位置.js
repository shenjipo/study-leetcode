/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let [left, right] = [0, nums.length]
    while (left <= right) {
        let middle = parseInt((left + right) / 2)
        if (nums[middle] === target) {
            return middle
        } else if (nums[middle] < target) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }
    return left
};
console.log(searchInsert([1, 3, 5, 6], 5))
