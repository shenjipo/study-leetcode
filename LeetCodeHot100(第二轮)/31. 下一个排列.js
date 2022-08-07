var nextPermutation = function (nums) {
    for (let i = nums.length - 2; i >= 0; i--) {
        let pre = nums[i]
        if (pre < nums[i + 1]) {
            let cur = i + 1
            while (nums[cur + 1] > pre) {
                cur++
            }
            [nums[pre], nums[cur]] = [nums[cur], nums[pre]]
            let [left, right] = [i + 1, nums.length - 1]
            while (left < right) {
                [nums[left], nums[right]] = [nums[right], nums[left]];
                left++;
                right--;
            }
            break;

        } else if (i === 0) {
            nums.reverse()
        }
    }
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation2 = function (nums) {
    for (let i = nums.length - 2; i >= 0; i--) {
        let n = nums[i];
        // 找到第一个比后面的数小的数
        if (n < nums[i + 1]) {
            let idx = i + 1;
            // 找出后面比n大的数当中的最小值，因为后面是降序排列所以一直判断是否比n大即可
            while (nums[idx + 1] > n) {
                idx++;
            }
            // 替换i与idx位置的数
            nums[i] = nums[idx];
            nums[idx] = n;
            // 此时i后面的是一个降序排列，将这个排列转为升序排列（后面所有数对称调换）
            let left = i + 1;
            let right = nums.length - 1;
            while (left < right) {
                [nums[left], nums[right]] = [nums[right], nums[left]];
                left++;
                right--;
            }
            break;
        } else if (i === 0) {
            nums.reverse()
        }
    }
};
