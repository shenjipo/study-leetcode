/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if(s.length ===0){
        return 0
    }
    let [left, right] = [0, 0]
    let ans = 1
    let temp = [s[0]]
    while (left <= right && right < s.length) {
        if (temp.indexOf(s[right]) === -1) {
            temp.push(s[right])
            right++
            ans = Math.max(ans, temp.length)
        } else {
            while (temp.indexOf(s[right]) !== -1) {
                temp.shift()
            }
        }
    }
    return ans
};

