/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 排序+双指针
var twoSum = function (nums, target) {
    let temp = [...nums]
    nums.sort((a, b) => {
        return a - b
    })
    let [i, j] = [0, nums.length - 1]
    while (i < j) {
        if (nums[i] + nums[j] === target) {

            return [temp.indexOf(nums[i]), temp.lastIndexOf(nums[j])]
        } else if (nums[i] + nums[j] > target) {
            j--
        } else {
            i++
        }
    }
};

// 前缀和
var twoSum2 = function (nums, target) {
    let mp = []
    for (let i = 0; i < nums.length; i++) {
        if (mp.indexOf(target - nums[i]) !== -1) {
            return [mp.indexOf(target - nums[i]), i]
        }
        mp.push(nums[i])
    }
};
