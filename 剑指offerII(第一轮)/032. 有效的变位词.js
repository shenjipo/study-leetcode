/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let [s1, s2] = [new Array(128).fill(0), new Array(128).fill(0)]
    for (let item of s) {
        s1[item.charCodeAt()]++
    }
    for (let item of t) {
        s2[item.charCodeAt()]++
    }


    return s1.toString() === s2.toString()
};
