/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    if (height.length <= 2) {
        return 0
    }
    let ans = 0
    let currIndex = 1
    while (currIndex < height.length) {
        let rightIndex = currIndex + 1
        while (height[rightIndex] < height[currIndex]) {
            rightIndex++
        }
        if (height[rightIndex] >= height[currIndex]) {
            let temp = 0
            for (let k = currIndex + 1; k < rightIndex; k++) {
                temp += height[k]
            }
            ans += (rightIndex - currIndex - 1) * Math.min(height[currIndex], height[rightIndex]) - temp
            currIndex = rightIndex
        }else {
            currIndex++
        }
    }
    return ans
};
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
