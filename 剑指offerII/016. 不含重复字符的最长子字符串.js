/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let stack = []

    let ans = 0
    for (let item of s) {
        //栈中不存在该元素
        if (stack.indexOf(item) === -1) {
            stack.push(item)
            ans = Math.max(ans, stack.length)
        } else {
            while (stack.indexOf(item) !== -1) {
                stack.shift()
            }
            stack.push(item)
            ans = Math.max(ans, stack.length)
        }
    }
    return ans
};
console.log(lengthOfLongestSubstring('dvdf'))
