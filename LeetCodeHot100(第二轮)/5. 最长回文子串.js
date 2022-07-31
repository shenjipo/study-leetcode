/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length === 1) return s
    let ans = ''
    for (let i = 0; i < s.length; i++) {
        let [left, right] = [i - 1, i + 1]
        while (left > -1 && right < s.length && s[left] === s[right]) {
            let temp = s.slice(left, right + 1)
            if (temp.length > ans.length) {
                ans = temp
            }
            left--
            right++
        }
        [left, right] = [i, i + 1]
        while (left > -1 && right < s.length && s[left] === s[right]) {
            let temp = s.slice(left, right + 1)
            if (temp.length > ans.length) {
                ans = temp
            }
            left--
            right++
        }
    }
    return ans.length ? ans : s[0]
};
longestPalindrome('babad')