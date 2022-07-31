/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let [left, right] = [0, height.length - 1]
    let maxAns = (right - left) * Math.min(height[left], height[right])
    while (left < right) {
        maxAns = Math.max(maxAns, (right - left) * Math.min(height[left], height[right]))
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return maxAns
};
