/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  if (nums.length <= 1)
    return;
  let j = nums.length - 1;
  for (; j > 0; j--) {
    if (nums[j] > nums[j - 1]) {
      break;
    }
  }
  if (j === 0) {
    nums.reverse();
    return
  }
  let k = nums.length;
  while (k >= j) {
    if (nums[k] > nums[j - 1]) {
      break;
    } else {
      k--;
    }
  }
  nums = swap(nums, k, j - 1);
  let cnt = (nums.length - j) / 2;
  let i = 0;
  while (cnt > 0) {
    swap(nums, i + j, nums.length - 1 - i);
    ++i;
    --cnt;
  }

  console.log(nums)
};

var swap = function (nums, index1, index2) {
  let temp = nums[index1];
  nums[index1] = nums[index2]
  nums[index2] = temp
  return nums;
}

nextPermutation([1, 2, 3])
