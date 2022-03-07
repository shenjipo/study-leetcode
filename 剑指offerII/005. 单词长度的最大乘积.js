/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
    let map = new Map()
    for (let w of words) {
        let bit = 0
        for (let s of w) {
            bit |= 1 << (s.charCodeAt() - 'a'.charCodeAt())
        }

        const wordMaxLen = map.has(bit) ? Math.max(map.get(bit), w.length) : w.length

        map.set(bit, wordMaxLen)
    }
    let max = 0
    for (let [i, vi] of map) {
        for (let [j, vj] of map) {
            if ((i & j) == 0) max = Math.max(max, vi * vj)
        }
    }

    return max
};

console.log(maxProduct(["abcw", "baz", "foo", "bar", "fxyz", "abcdef"]))
