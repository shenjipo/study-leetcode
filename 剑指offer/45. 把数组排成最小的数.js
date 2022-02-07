/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
    let ans = nums.sort((a, b) => {
        return `${a}${b}` - `${b}${a}`
    }).join('')

    return ans
};

console.log(minNumber([10, 2]))