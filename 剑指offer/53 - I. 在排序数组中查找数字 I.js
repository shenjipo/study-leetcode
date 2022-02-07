/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0, right = nums.length - 1
    let count = 1, flag = -1;
    while (left <= right) {

        let middle = parseInt((left + right) / 2)
        if (nums[middle] === target) {
            flag = middle
            break
        } else if (nums[middle] > target) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }
    if (flag === -1) {
        return 0
    }
    let low = high = flag
    while (nums[--low] === target) {

        count++;
    }

    while (nums[++high] === target) {
        count++;
    }
    return count
};

console.log(search([5, 7, 7, 8, 8, 10], 8))