/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let ans = new Array(temperatures.length).fill(-1)
    ans[temperatures.length - 1] = 0
    for (let i = temperatures.length - 2; i > -1; i--) {
        let next = i + 1
        while (next < temperatures.length - 1 && ans[next] !== 0 && temperatures[i] >= temperatures[next]) {
            next = next + ans[next]
        }
        if (next === temperatures.length - 1) {
            if (temperatures[i] >= temperatures[temperatures.length - 1]) {
                ans[i] = 0
            } else {
                ans[i] = temperatures.length - 1 - i
            }
        } else if (ans[next] === 0 && temperatures[i] >= temperatures[next]) {
            ans[i] = 0
        } else {
            ans[i] = next - i
        }
    }
    return ans
};  