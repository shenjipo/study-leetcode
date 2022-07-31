/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let [sLen, pLen] = [s.length, p.length]
    const judge = (i, j) => {
        if (i === sLen && j === pLen) {
            return true
        }
        if (i > sLen || j > pLen) {
            return false
        }
        let currFlag = (s[i] === p[j] || p[j] === '.')
        if (p[j + 1] === '*') {
            return currFlag && judge(i + 1, j) || judge(i, j + 2)
        } else {
            return currFlag && judge(i + 1, j + 1)
        }
    }
    return judge(0, 0)
};