/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let a = s.replace(/[^0-9A-Za-z]/g, '').toLowerCase()

    return a === a.split('').reverse().join('')
};
console.log(isPalindrome('A man, a plan, a canal: Panama'))
