/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
    let mp = new Map()
    for (let word of words) {
        let wordToBit = 0
        for (let w of word) {
            wordToBit |= 1 << w.charCodeAt() - 'a'.charCodeAt()
        }
        let wordMaxLen = mp.has(wordToBit) ? Math.max(mp.get(wordToBit), word.length) : word.length
        mp.set(wordToBit, wordMaxLen)
    }
    let ans = 0
    for (let itemA of mp) {
        for (let itemB of mp) {
            if ((itemA[0] & itemB[0]) === 0) {
                ans = Math.max(ans, itemA[1] * itemB[1])
            }
        }
    }
    return ans
};