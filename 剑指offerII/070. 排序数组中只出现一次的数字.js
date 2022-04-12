/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    let [left, right] = [0, nums.length - 1]
    while (left <= right) {
        let middle = parseInt((left + right) / 2)
        if (nums[middle] === nums[middle + 1]) {
            if (middle % 2 === 0) {
                left = middle + 1
            } else {
                right = middle - 1
            }
        } else {
            if (middle % 2 === 0) {
                right = middle - 1
            } else {
                left = middle + 1
            }
        }
    }

    return nums[left]
};
console.log(singleNonDuplicate([1, 2, 2, 3, 3]))
