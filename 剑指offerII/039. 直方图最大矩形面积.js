/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let maxArea = Math.max(...heights);
    let tempHeight = [0, ...heights, 0]
    const stack = [];
    let [left, right] = [0, 0]
    for (let i = 0; i < heights.length; i++) {
        [left, right] = [i - 1, i + 1]
        while (left >= 0 && heights[i] <= heights[left]) {
            left--
        }
        while (right < heights.length - 1 && heights[i] <= heights[right]) {
            right++
        }
        maxArea = Math.max(maxArea, (right - left - 1) * heights[i])
    }
    return maxArea;
};

var largestRectangleArea2 = function (heights) {
    let maxArea = Math.max(...heights);
    const stack = [];
    stack.push(-1)
    for (let i = 0; i < heights.length; i++) {
        while (stack[stack.length - 1] !== -1 && heights[i] <= heights[stack[stack.length - 1]]) {

            maxArea = Math.max(maxArea, heights[stack.pop()] * (i - stack[stack.length - 1] - 1))
        }
        stack.push(i)
    }
    while (stack[stack.length - 1] !== -1) {
        maxArea = Math.max(maxArea, heights[stack.pop()] * (heights.length - stack[stack.length - 1] - 1))
    }
    return maxArea;
};

console.log(largestRectangleArea2([2, 1, 5, 6, 2, 3]))
