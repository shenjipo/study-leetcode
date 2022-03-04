/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = parseInt((left + right) / 2);

    if (nums[middle] === target)
      return middle;
    else if (nums[middle] < nums[right]) {
      if (target > nums[middle] && target <= nums[right]) {
        left = middle + 1
      } else {
        right = middle - 1;
      }
    } else {
      if (target >= nums[left] && target < nums[middle]) {
        right = middle - 1
      } else {
        left = middle + 1;
      }
    }
  }
  return -1;
};

var binarySearch = function (nums, target) {

};

console.log(search([1, 3], 1))
