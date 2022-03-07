/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let count = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (count.get(nums[i])) {
            count.set(nums[i], count.get(nums[i]) + 1)
        } else {
            count.set(nums[i], 1)
        }
    }
    for (let item of count) {
        if (item[1] === 1) {
            return item[0]
        }
    }
};
var singleNumber2 = function (nums) {
    let ans = 0
    for (let i = 0; i < 32; i++) {
        let temp = 0
        for (let item of nums) {
            temp += item >> i & 1
        }

        if (temp % 3 !== 0) {
            console.log(i)
            ans |= 1 << i
        }
    }
    return ans
};
console.log(singleNumber2([-2, -2, 1, 1, 4, 1, 4, 4, -4, -2]))
