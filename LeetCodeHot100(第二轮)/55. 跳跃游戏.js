/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let temp = 0
    for (let i = nums.length - 2; i > -1; i--) {
        if (nums[i] === 0) {
            temp = i
            i--
            while (i > 0 && temp - i <= nums[i]) {
                i--
            }
            if (i === -1) {
                return false
            }
        }
    }
    return true
};
canJump([3, 2, 1, 0, 4])