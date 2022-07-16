/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    let count = 0
    for (let middle = 0; middle < s.length; middle++) {
        let [left, right] = [middle - 1, middle + 1]
        count++
        while (left > -1 && right < s.length && s[left] === s[right]) {
            count++
            left--
            right++
        }
        left = middle - 1
        right = middle
        while (left > -1 && right < s.length && s[left] === s[right]) {
            count++
            left--
            right++
        }
    }
    return count
};
console.log(countSubstrings('aaa'))
