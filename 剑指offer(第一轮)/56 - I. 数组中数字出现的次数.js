/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
    let temp = 0
    for (let i = 0; i < nums.length; i++) {
        temp = temp ^ nums[i]
    }
    let k = 1
    while ((temp & k) === 0) {
        k = k << 1
    }
    let ans1 = 0, ans2 = 0
    for (let i = 0; i < nums.length; i++) {
        if (k & nums[i]) {
            ans1 = ans1 ^ nums[i]
        } else {
            ans2 = ans2 ^ nums[i]

        }
    }
    return [ans1, ans2]
};

console.log(singleNumbers([1, 2, 10, 4, 1, 4, 3, 3]))