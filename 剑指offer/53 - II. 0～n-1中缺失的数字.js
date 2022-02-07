/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let left = 0, right = nums.length - 1;
    let flag = -1;
    while (left <= right) {
        let middle = parseInt((left + right) / 2)
        if (nums[middle] === middle) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }
    return left
};

console.log(missingNumber([0]))