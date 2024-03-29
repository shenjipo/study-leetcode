/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    if (s === s.split('').reverse().join('')) return true
    const judge = (left, right) => {
        while (left < right && s[left] === s[right]) {
            left++
            right--
        }
        return left >= right
    }
    let [left, right] = [0, s.length - 1]
    while (left <= right) {
        if (s[left] !== s[right]) {
            break
        }
        left++
        right--
    }
    if (left > right) {
        return true
    }
    console.log(left, right)
    return judge(left + 1, right) || judge(left, right - 1)

};
console.log(validPalindrome('abca'))