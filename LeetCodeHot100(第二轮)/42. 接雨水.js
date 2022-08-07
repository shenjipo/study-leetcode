/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let [left, right] = [0, height.length - 1]
    while (left < height.length && height[left] === 0) {
        left++
    }
    while (right > -1 && height[right] === 0) {
        right--
    }
    if (left >= right) return 0
    let ans = 0
    let [leftTop, rightTop] = [height[left], height[right]]

    while (left < right) {
        while (leftTop < rightTop && left < right) {
            if (height[++left] <= leftTop) {
                ans += (leftTop - height[left])
            } else {
                leftTop = height[left]
            }
        }
        while (leftTop >= rightTop && left < right) {
            if (height[--right] < rightTop) {
                ans += (rightTop - height[right])
            } else {
                rightTop = height[right]
            }
        }
    }

    return ans
};
trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
var trap2 = function (height) {
    let left = 0 // 左指针
    let right = height.length - 1 //右指针
    let sum = 0 // 承接雨水量
    while (height[left] == 0) left++ // 找到左侧边缘
    if (left === right + 1) return 0 // 根本没有柱子
    while (height[right] == 0) right-- // 找到右侧边缘
    let left_top = height[left] // 左侧当前最高
    let right_top = height[right] // 右侧当前最高
    while (true) {
        if (left === right) return sum // 对于只有一个柱子的情况
        while (left_top <= right_top) { // 在左侧最高超越右侧之前
            if (height[++left] <= left_top) sum += (left_top - height[left])
            //如果下一个更矮则添水
            else
                left_top = height[left] //否则更新左侧最高
            if (left === right) return sum // 如果左右指针相遇则完成
        }
        while (left_top >= right_top) { // 在右侧最高超越左侧之前
            if (height[--right] <= right_top) sum += (right_top - height[right])
            //如果前一个更矮则添水
            else
                right_top = height[right] // 否则更新右侧最高
            if (left === right) return sum // 如果左右指针相遇则完成
        }
    }
};
