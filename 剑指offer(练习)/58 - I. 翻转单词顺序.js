/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let ans = []
    s = s.split(' ')
    console.log(s)
    for (let i = s.length; i > -1; i--) {
        if (s[i]) {
            ans.push(s[i])
        }
    }
    return ans.join(' ')
};
reverseWords('a good   example')
