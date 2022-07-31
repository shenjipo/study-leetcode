/**
 * @param {number[]} heights
 * @return {number}
 */
// 超时
var largestRectangleArea = function (heights) {
    let ans = Math.max(...heights)
    for (let i = 0; i < heights.length; i++) {
        let [left, right] = [i, i]
        while (left > -1 && heights[left] >= heights[i]) {
            left--
        }
        while (right < heights.length && heights[right] >= heights[i]) {
            right++
        }
        console.log(ans, left, right)
        ans = Math.max(ans, (right - left - 1) * heights[i])
    }
    return ans
};

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let maxArea = 0;
    const stack = [];
    heights = [0, ...heights, 0] // 数组头部加入元素0 数组尾部加入元素0
    for(let i = 0; i < heights.length; i++){
        while(heights[i] < heights[stack[stack.length - 1]]){ // 当前bar比栈顶bar矮
            const stackTopIndex = stack.pop(); // 栈顶元素出栈，并保存栈顶bar的索引
            let w = i - stack[stack.length - 1] - 1;
            let h = heights[stackTopIndex];
            // 计算面积，并取最大面积
            maxArea = Math.max(maxArea, w * h);
        }
        stack.push(i); // 当前bar比栈顶bar高了，入栈
    }
    return maxArea;
};


largestRectangleArea([2, 4])