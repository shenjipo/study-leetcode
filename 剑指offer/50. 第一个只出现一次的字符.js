/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
    if (!str) return ' ';
    let mp = new Map()
    for (let item of s) {
        mp.set(item, (mp.get(item) || 0) + 1)

    }
    for (let item of mp) {
        if (item[1] === 1) {
            return item[0]
        }
    }
    return ' '
};

console.log(firstUniqChar('abaccdeff'))