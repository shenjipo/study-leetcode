// 循环内不考虑去重
var threeSum = function (nums) {
    const len = nums.length;
    if (len < 3) return [];
    nums.sort((a, b) => {
        return a - b;
    });
    const resSet = new Set();
    for (let i = 0; i < len - 2; i++) {
        if (nums[i] > 0) break;
        let l = i + 1, r = len - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum < 0) {
                l++;
                continue
            }

            if (sum > 0) {
                r--;
                continue
            }

            resSet.add(`${nums[i]},${nums[l]},${nums[r]}`);
            l++;
            r--;
        }
    }
    return Array.from(resSet).map(i => i.split(","));
};


var threeSum2 = function (nums) {
    const len = nums.length;

    if (len < 3) return [];
    nums.sort((a, b) => {
        return a - b;
    });
    const resSet = new Set();
    for (let i = 1; i <= len - 2; i++) {

        let l = i - 1, r = i + 1;

        while (l > -1 && r < len) {

            let sum = nums[i] + nums[l] + nums[r];
            if (sum === 0) {
                resSet.add(`${nums[l]},${nums[i]},${nums[r]}`);
                l--;
                r++;
            } else if (sum < 0) {
                r++;
            } else if (sum > 0) {
                l--;
            }
        }
    }
    return Array.from(resSet).map(i => i.split(","));
};

console.log(threeSum2([0, 0, 0]))