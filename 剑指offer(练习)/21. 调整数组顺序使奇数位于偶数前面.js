/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
    let [left, right] = [0, nums.length - 1]
    while (left < right) {
        while (left < right && nums[left] % 2 !== 0) {
            left++
        }
        while (left < right && nums[right] % 2 === 0) {
            right--
        }
        let temp = nums[right]
        nums[right] = nums[left]
        nums[left] = temp
        left++
        right--
    }
    return nums
};
