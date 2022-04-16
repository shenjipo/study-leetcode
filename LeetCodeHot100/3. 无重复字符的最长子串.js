/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let [left, right] = [0, 0]
    let ans = 0
    let temp = [s[0]]
    while (left <= right && right < s.length) {
        ans = Math.max(ans, temp.length)
        right++
        if (temp.indexOf(s[right]) !== -1) {
            while (temp.indexOf(s[right]) !== -1 && left <= right) {
                left++
                temp.shift()
            }
        }
        temp.push(s[right])
    }
    return ans
};
console.log(lengthOfLongestSubstring("aab"))

