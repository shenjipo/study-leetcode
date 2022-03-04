/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let ans_left = -1;
  let ans_right = -1;
  while (left <= right) {
    let middle = parseInt((left + right) / 2);
    console.log(left, right, middle)
    if (nums[middle + 1] === target && nums[middle] < target) {
      ans_left = middle + 1;
      break;
    } else if (nums[middle] === target && middle === 0) {
      ans_left = 0;
      break;
    } else if (target <= nums[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  left = 0;
  right = nums.length - 1;
  while (left <= right) {
    let middle = parseInt((left + right) / 2);

    if (nums[middle - 1] === target && nums[middle] > target) {
      ans_right = middle - 1;
      break;
    } else if (nums[middle] === target && middle === nums.length - 1) {
      ans_right = nums.length - 1;
      break;
    } else if (target < nums[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return [ans_left, ans_right]
};

console.log(searchRange([1, 2, 3], 2))
