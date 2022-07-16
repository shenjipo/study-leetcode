/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
    let ans = []
    for (let i = 0; i < s.length; i++) {

        if (s[i] === ' ') {
            ans.push('%20')
        } else {
            ans.push(s[i])
        }
    }
    return ans.toString().split(',').join('')
};
console.log(replaceSpace('we are happy'))