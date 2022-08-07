/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let mp = new Map()
    for (let char of strs) {
        let count = new Array(26).fill(0)
        for (let item of char) {
            count[item.charCodeAt() - 'a'.charCodeAt()]++
        }
        if (mp.has(count.toString())) {
            mp.set(count.toString(), [...mp.get(count.toString()), char])
        } else {
            mp.set(count.toString(), [char])
        }
    }
    let ans = []
    for (let item of mp) {
        ans.push(item)
    }
    return ans
};