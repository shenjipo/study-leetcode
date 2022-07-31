/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort(((a, b) => a - b))
    let ans = new Set()
    for (let i = 0; i < nums.length - 2; i++) {
        let [left, right] = [i + 1, nums.length - 1]
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (sum === 0) {
                ans.add(`${nums[i]},${nums[left]},${nums[right]}`)
                left++
                right--
            } else if (sum > 0) {
                right--
            } else {
                left++
            }
        }
    }
    return Array.from(ans).map(item => {
        item.split(',')
    })
};
let t = new Set()
t.add('1,2,3')
t.add('4,5,6')
console.log(Array.from(t).map(item => {
    return item.split(',')
}))