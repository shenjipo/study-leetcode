/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let len = nums.length;
    if (len < 4) {
        return [];
    }
    nums.sort((a, b) => {
        return a - b;
    })
    const resSet = new Set();
    for (let temp = 0; temp < len - 3; temp++) {
        for (let i = temp + 2; i <= len - 2; i++) {

            let l = i - 1;
            let r = i + 1;
            while (l > temp && r < len) {
                let sum = nums[i] + nums[l] + nums[r] + nums[temp] - target;
                if (sum === 0) {
                    resSet.add(`${nums[temp]},${nums[l]},${nums[i]},${nums[r]}`);
                    l--;
                    r++;
                } else if (sum < 0) {
                    r++;
                } else if (sum > 0) {
                    l--;
                }
            }

        }
    }

    return Array.from(resSet).map(i => {
        return i.split(',')
    })
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0))