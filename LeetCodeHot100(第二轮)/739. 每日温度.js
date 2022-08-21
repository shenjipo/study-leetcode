/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    if (!temperatures.length === 0) return []
    if (temperatures.length === 1) return [0]
    let stack = [0]
    let ans = []
    for (let i = 1; i < temperatures.length; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const index = stack.pop()
            ans[index] = i - index
        }
        stack.push(i)
    }
    while (stack.length) {
        ans[stack.pop()] = 0
    }
    console.log(ans)
    return ans
};
dailyTemperatures([89, 62, 70, 58, 47, 47, 46, 76, 100, 70])