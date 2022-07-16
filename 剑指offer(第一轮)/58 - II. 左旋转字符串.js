/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
    let left = [], right = []
    for (let i = 0; i < s.length; i++) {
        if (i < n) {
            left.push(s[i])
        } else {
            right.push(s[i])
        }
    }
    for (let i = 0; i < n; i++) {
        right.push(left[i])
    }
    return right.toString().split(',').join('')
};


console.log(reverseLeftWords('abcdefg', 2))