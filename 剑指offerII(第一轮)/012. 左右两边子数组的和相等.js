/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let temp = 0
    let res = nums.reduce((preValue, currValue) => {
        return preValue + currValue
    })

    for (let i = 0; i < nums.length - 1; i++) {

        if (temp === res - nums[i] - temp) {
            return i
        }
        temp += nums[i]
    }
    return -1
};
console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
