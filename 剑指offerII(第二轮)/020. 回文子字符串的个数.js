/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    let count = 0
    for (let middle = 0; middle < s.length; middle++) {
        count++
        let [left, right] = [middle - 1, middle + 1]
        while (left > -1 && right < s.length && s[left] === s[right]) {
            left--
            right++
            count++
        }
        [left, right] = [middle, middle + 1]
        while (left > -1 && right < s.length && s[left] === s[right]) {
            left--
            right++
            count++
        }
    }
    return count
};