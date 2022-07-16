/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
    let mp = new Map()
    let ans = null
    for (let i = 0; i < nums.length; i++) {

        if (mp.get(nums[i])) {
            return nums[i]
        }

        mp.set(nums[i], 1)
    }

};

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]))