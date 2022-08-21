/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    let ans = []
    let target = new Array(26).fill(0)
    for (let char of p) {
        target[char.charCodeAt() - 'a'.charCodeAt()]++
    }
    target = target.toString()
    if (s.length < p.length) return []
    let [left, right] = [0, p.length - 1]
    let temp = new Array(26).fill(0)
    for (let i = 0; i < p.length; i++) {
        temp[s[i].charCodeAt() - 'a'.charCodeAt()]++
    }
    while (right < s.length) {
        if (temp.toString() === target) {
            ans.push(left)
        }
        if (right === s.length - 1) break
        temp[s[left++].charCodeAt() - 'a'.charCodeAt()]--
        temp[s[++right].charCodeAt() - 'a'.charCodeAt()]++

    }
    return ans
};
findAnagrams("cbaebabacd",
    "abc")