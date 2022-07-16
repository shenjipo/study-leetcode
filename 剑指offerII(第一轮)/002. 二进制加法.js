/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let maxLen = Math.max(a.length, b.length)
    a = a.padStart(maxLen, '0')
    b = b.padStart(maxLen, '0')
    let [carry, i] = [0, maxLen - 1]
    let ans = ''
    while (i > -1) {
        ans = (carry + Number(a[i]) + Number(b[i])) % 2 + ans
        carry = Math.floor((Number(a[i]) + Number(b[i]) + carry) / 2)
        i--
    }
    ans = carry === 1 ? '1' + ans : ans
    return ans
};
console.log(addBinary('11', '10'))

