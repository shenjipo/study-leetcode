/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let len = nums.length;

  nums.sort((a, b) => {
    return a - b;
  });

  let Min_error = 10000;
  let ans = 0;
  for (let i = 0; i < len - 2; i++) {
    let j = i + 1;
    let k = len - 1;
    while (j < k) {
      let curr_error = Math.abs(nums[i] + nums[j] + nums[k] - target);
      if (curr_error < Min_error) {
        Min_error = curr_error;
        ans = nums[i] + nums[j] + nums[k];

      }
      if (curr_error === 0) {
        return target;
      } else if (nums[i] + nums[j] + nums[k] < target) {
        j++;
      } else {
        k--;
      }
    }
  }

  return ans;
};

let s = threeSumClosest([0, 0, 0], 1);
console.log(s);
