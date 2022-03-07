/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => {
        return a - b
    })

    let ans = new Set()
    for (let k = 0; k < nums.length - 2; k++) {
        let [i, j] = [k + 1, nums.length - 1]
        while (i < j) {
            if (nums[i] + nums[j] + nums[k] === 0) {
                ans.add(`${nums[i]},${nums[j]},${nums[k]}`)
                i++
                j--
            } else if (nums[i] + nums[j] + nums[k] < 0) {
                i++
            } else {
                j--
            }
        }
    }
    return Array.from(ans).map(item => {
        return item.split(',')
    })
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]))
