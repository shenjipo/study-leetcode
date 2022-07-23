/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    let [s1, s2] = [p, s]
    let [arr1, arr2] = [new Array(26).fill(0), new Array(26).fill(0)]
    if (s1.length > s2.length) return []
    for (let i = 0; i < s1.length; i++) {
        arr1[s1[i].charCodeAt() - 'a'.charCodeAt()]++
        arr2[s2[i].charCodeAt() - 'a'.charCodeAt()]++
    }
    let [l, r] = [0, s1.length - 1]
    let ans = []
    while (r < s2.length - 1) {
        if (arr1.toString() === arr2.toString()) {
            ans.push(l)
        }
        if (r === s2.length - 1) {
            break
        }
        arr2[s2[l++].charCodeAt() - 'a'.charCodeAt()]--
        arr2[s2[++r].charCodeAt() - 'a'.charCodeAt()]++
    }
    return ans
};