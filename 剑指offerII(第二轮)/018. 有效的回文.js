/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let handleStr = []
    for (let char of s) {
        let code = char.charCodeAt()
        if (code >= '0'.charCodeAt() && code <= '9'.charCodeAt()) {
            handleStr.push(char)
        } else if (code >= 'a'.charCodeAt() && code <= 'z'.charCodeAt()) {
            handleStr.push(char)
        } else if (code >= 'A'.charCodeAt() && code <= 'Z'.charCodeAt()) {
            handleStr.push(String.fromCharCode(code + 32))
        }
    }
    return handleStr.toString() === handleStr.reverse().toString()
};
isPalindrome('a.')