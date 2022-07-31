/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    let mp = new Map()
    for (let i = 0; i < order.length; i++) {
        mp.set(order[i], i)
    }
    for (let i = 0; i < words.length - 1; i++) {
        let [pre, cur] = [words[i], words[i + 1]]
        let j = 0
        while (j < pre.length && j < cur.length && pre[j] === cur[j]) {
            j++
        }
        if (j < pre.length && j >= cur.length) {
            return false
        } else if (j < pre.length && j < cur.length && mp.get(pre[j]) > mp.get(cur[j])) {
            return false
        }
    }
    return true
};
let flag = isAlienSorted(
    ["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz")

console.log(flag)