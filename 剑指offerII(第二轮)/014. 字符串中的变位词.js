/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let [arr1, arr2] = [new Array(26).fill(0), new Array(26).fill(0)]
    if (s1.length > s2.length) return false
    for (let i = 0; i < s1.length; i++) {
        arr1[s1[i].charCodeAt() - 'a'.charCodeAt()]++
        arr2[s2[i].charCodeAt() - 'a'.charCodeAt()]++
    }
    let [l, r] = [0, s1.length - 1]
    while (r < s2.length - 1) {
        if (arr1.toString() === arr2.toString()) {
            return true
        }
        arr2[s2[l++].charCodeAt() - 'a'.charCodeAt()]--
        arr2[s2[++r].charCodeAt() - 'a'.charCodeAt()]++
    }
    return arr1.toString() === arr2.toString();

};
let ans = checkInclusion("ab", "eidbaooo")
console.log(ans)