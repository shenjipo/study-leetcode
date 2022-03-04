/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let ans = -1;
  while (left <= right) {
    let middle = parseInt((left + right) / 2);
    if (nums[middle] === target) {
      return middle
    } else if (target < nums[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return left;

};

console.log(searchInsert([1, 3, 5, 6], 2))
