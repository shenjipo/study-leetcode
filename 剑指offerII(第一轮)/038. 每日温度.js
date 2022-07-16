/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let ans = new Array(temperatures.length).fill(0)
    for (let i = temperatures.length - 2; i >= 0; i--) {
        if (temperatures[i] < temperatures[i + 1]) {
            ans[i] = 1
        } else {
            let j = i + 1
            for (; ans[j] !== 0 && temperatures[i] >= temperatures[j];) {
                j = j + ans[j]
            }
            if (temperatures[i] >= temperatures[j]) {
                ans[i] = 0
            } else {
                ans[i] = j - i
            }
        }
    }
    return ans
};
//                           [1,0,0,2,1,0,0,0,0,0]
console.log(dailyTemperatures([34,80,80,34,34,80,80,80,80,34]))
