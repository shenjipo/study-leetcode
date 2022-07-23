/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let [l, r] = [0, 0]
    let temp = []
    let ans = 0
    while (l <= r && r < s.length) {
        if (temp.indexOf(s[r]) !== -1) {
            while (l <= r && temp.indexOf(s[r]) !== -1) {
                temp.shift()
                l++
            }
        }
        temp.push(s[r++])
        ans = Math.max(ans, r - l)
    }
    return ans
};
lengthOfLongestSubstring('abcabcbb')