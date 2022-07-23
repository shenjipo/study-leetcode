/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let temp = new Set()
    nums.sort((a, b) => {
        return a - b
    })

    for (let i = 0; i < nums.length - 2; i++) {
        let [j, k] = [i + 1, nums.length - 1]
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]
            if (sum === 0) {
                temp.add(`${nums[i]},${nums[j]},${nums[k]}`)
                j++
                k--
            } else if (sum < 0) {
                j++
            } else {
                k--
            }
        }
    }

    return Array.from(temp).map(item => {
        return item.split(',')
    })
};
threeSum([-1, 0, 1, 2, -1, -4])