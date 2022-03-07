/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let ans = Math.pow(2, 31)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return 1
        }
        let [res, count] = [nums[i], 1]
        for (let j = i - 1; j > -1; j--) {
            res += nums[j]
            count++
            if (res >= target) {
                ans = Math.min(ans, count)
                break
            }
        }
    }
    if (ans === Math.pow(2, 31)) {
        return 0
    } else {
        return ans
    }
};
var minSubArrayLen2 = function (target, nums) {
    if (nums[0] >= target) {
        return 1
    }
    let [start, end, res] = [0, 0, 0]
    let ans = Math.pow(2, 31)
    while (end < nums.length) {
        res += nums[end]
        while (res >= target) {
            ans = Math.min(ans, end - start + 1)
            res -= nums[start]
            start++
        }
        end++
    }
    if(ans === Math.pow(2,31)){
        return 0
    }else {
        return ans
    }
};
console.log(minSubArrayLen2(7, [2, 3, 1, 2, 4, 3]))
