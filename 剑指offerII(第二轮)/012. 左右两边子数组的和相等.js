/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let sum = nums.reduce((pre, cur) => {
        return pre + cur
    })
    let temp = 0
    for (let i = 0; i < nums.length; i++) {
        sum -= nums[i]
        if (sum === temp) {
            return i
        }
        temp += nums[i]
    }
    return -1
};

