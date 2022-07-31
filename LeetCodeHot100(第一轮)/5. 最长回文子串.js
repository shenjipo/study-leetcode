/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let maxLen = 0
    let ans = ''
    for (let i = 0; i < s.length; i++) {
        let [left, right] = [i - 1, i + 1]
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--
            right++
        }
        if (right - left + 1 > maxLen) {
            maxLen = right - left + 1
            ans = s.substring(left+1, right)
        }
        [left, right] = [i - 1, i]

        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--
            right++
        }
        if (right - left + 1 > maxLen) {
            maxLen = right - left + 1
            ans = s.substring(left + 1, right)
        }
    }
    return ans
};
console.log(longestPalindrome("caba"))
