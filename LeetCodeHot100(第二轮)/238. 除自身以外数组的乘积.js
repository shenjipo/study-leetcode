/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let [left, right] = [[], []]
    left[0] = nums[0]
    right[nums.length - 1] = nums[nums.length - 1]
    for (let i = 1; i < nums.length; i++) {
        left[i] = left[i - 1] * nums[i]
    }
    for (let i = nums.length - 2; i > -1; i--) {
        right[i] = right[i + 1] * nums[i]
    }
    let ans = []
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            ans[0] = right[1]
        } else if (i === nums.length - 1) {
            ans[nums.length - 1] = left[nums.length - 2]
        } else {
            ans[i] = left[i - 1] * right[i + 1]
        }

    }
    return ans
};
productExceptSelf([1, 2, 3, 4])