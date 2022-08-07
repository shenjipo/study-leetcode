/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    return nums.reduce((pre, cur) => {
        return pre ^ cur
    }, 0)
};