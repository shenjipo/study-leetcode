/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length === 0) {
        return 0
    }
    let window = []
    let ans_max = 0
    for (let i = 0; i < s.length; i++) {
        if (window.indexOf(s[i]) === -1) {
            window.push(s[i])
            ans_max = Math.max(ans_max, window.length)

        } else {
            while (window.indexOf(s[i]) !== -1) {
                window.shift()
            }
            window.push(s[i])
        }
    }
    return ans_max
};

console.log(lengthOfLongestSubstring('abcabcbb'))