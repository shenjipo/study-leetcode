/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length < 2) return nums.length
    nums.sort((a, b) => a - b)

    let count = 1
    let ans = 0
    for (let i = 1; i <= nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            continue
        } else if (nums[i] === nums[i - 1] + 1) {
            count++
        } else {
            ans = Math.max(ans, count)
            count = 1
        }

    }
    return ans
};