/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let arr1 = new Array(200).fill(0)
    let arr2 = new Array(200).fill(0)
    for (let char of s) {
        arr1[char.charCodeAt()]++
    }
    for (let char of t) {
        arr2[char.charCodeAt()]++
    }
    return arr1.toString() === arr2.toString() && s !== t
};