function f() {
  let n = 3
  let nums = [1, 3, 4]
  let [left, right] = [0, 0]
  for (let i = 1; i < n; i++) {
    right = Math.max(right, Math.abs(nums[i] - nums[i - 1]))
  }

  function check(middle) {
    let dp = new Array(n).fill(0)
    for (let i = 1; i < n; i++) {
      dp[i] = i - 1;
      for (let j = 1; j < i; j++) {
        if (Math.abs(nums[i] - nums[j]) <= (i - j) * middle)
          dp[i] = Math.min(dp[i], dp[j] + (i - j - 1));
      }
      if (dp[i] + n - i <= 1) return true;
    }
    return false;
  }

  while (left + 1 <= right) {
    let middle = parseInt((left + right) / 2)
    if (check(middle)) {
      right = middle
    } else {
      left = middle + 1
    }
  }
  return right
}

f()