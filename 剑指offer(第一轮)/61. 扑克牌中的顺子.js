/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
    nums.sort((a, b) => {
        return a - b
    })
    let [left, right] = [0, 5]
    let count = 0
    while (nums.indexOf(0) !== -1) {
        nums.shift()
        count++
    }
    let len = nums.length
    if (count === 0) {
        if (new Set(nums).size !== len) {
            return false
        }
        if (nums[len - 1] - nums[0] === 4) {
            return true
        } else {
            return false
        }
    } else {
        if (new Set(nums).size !== len) {
            return false
        }
        if (nums[len - 1] - nums[0] + 1 <= len + count) {
            return true
        } else {
            return false
        }
    }
};

console.log(isStraight([11, 8, 12, 8, 10]))