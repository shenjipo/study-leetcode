/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let arr = []
    let mp = new Map()
    for (let str of strs) {
        let temp = new Array(26).fill(0)
        for (let char of str) {
            temp[char.charCodeAt() - 'a'.charCodeAt()]++
        }
        let flag = temp.toString()
        if (mp.has(flag)) {
            mp.set(flag, [...mp.get(flag), str])
        } else {
            mp.set(flag, [str])
        }
    }
    let ans = []
    for (let item of mp) {
        ans.push(mp[1])
    }
    return ans
};