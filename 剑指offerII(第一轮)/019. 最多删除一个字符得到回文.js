/**暴力超时
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    if (s === s.split('').reverse().join('')) {
        return true
    }
    for (let i = 0; i < s.length; i++) {
        let temp = s.substring(0, i) + s.substring(i + 1, s.length)
        if (temp === temp.split('').reverse().join('')) {
            return true
        }
    }
    return false
};
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome2 = function (s) {
    const judge = (left, right) => {
        while (left <= right) {
            if (s[left] !== s[right]) {
                break
            }
            left++
            right--
        }
        return left > right ? true : false
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
    } else {
        return judge(left + 1, right) || judge(left, right - 1)
    }
};


console.log(validPalindrome('abcd'))
