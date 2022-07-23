/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    if (nums.length < 3) {
        return nums[0]
    }
    nums.sort((a, b) => {
        return a - b
    })
    let [i, j, k] = [0, 1, 2]
    while (k < nums.length) {
        if (nums[i] !== nums[j]) {
            return nums[i]
        } else {
            i += 3
            j += 3
            k += 3
        }
    }

    return nums[nums.length - 1]
};
console.log(singleNumber([0, 1, 0, 1, 0, 1, 100]))