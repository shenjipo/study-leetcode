/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
    let mp = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (mp.get(nums[i])) {
            return nums[i]
        } else {
            mp.set(nums[i], 1)
        }
    }
    return -1
};
