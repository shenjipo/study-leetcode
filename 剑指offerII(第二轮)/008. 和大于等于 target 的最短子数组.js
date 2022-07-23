/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let ans = Math.pow(2, 31)
    let [left, right] = [0, 0]
    let sum = 0
    while (left <= right && right < nums.length) {
        sum += nums[right]
        while (sum >= target && left <= right) {
            ans = Math.min(ans, right - left + 1)
            sum -= nums[left]
            left++
        }
        right++
    }
    if (ans === Math.pow(2, 31)) {
        return 0
    }
    return ans
};
