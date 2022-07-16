/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let [left, right] = [0, nums.length - 1]
    while (left < right) {
        let middle = parseInt((left + right) / 2)

        if (nums[middle] === middle) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }
    return left
};
