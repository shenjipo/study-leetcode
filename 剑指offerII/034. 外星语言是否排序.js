/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    let mp = new Map()
    let count = 0
    for (const item in order) {
        mp.set(item, count++)
    }
    for (let i = 0; i < words.length - 1; i++) {
        let [word1, word2] = [words[i], words[i + 1]]
        let [len1, len2] = [word1.length, word2.length]
        if (len1 > len2) {
            return false
        }
        for (let j = 0; j < len1; j++) {
            if (mp[word1[j]] > mp[word2[j]]) {
                return false
            }
        }
    }
    return true
};

var isAlienSorted2 = function (words, order) {
    var map = new Map().set("", -1)
    for (var i = 0; i < order.length; i++) {
        map.set(order[i], i)
    }
    var cmp = function (s1, s2) {
        console.log(s1,s2)
        var len1 = s1.length
        var len2 = s2.length
        var i = 0
        while (i < len1 || i < len2) {
            console.log(i)
            if (map.get(s1[i] || "") === map.get(s2[i] || "")) {
                i++
            } else {
                return map.get(s1[i] || "") - map.get(s2[i] || "")
            }
        }
        return 0
    }
    var len = words.length
    for (var i = 1; i < len; i++) {
        if (cmp(words[i - 1], words[i]) > 0) {
            return false
        }
    }

    return true
};

console.log(isAlienSorted2(["kuvp", "q"], "ngxlkthsjuoqcpavbfdermiywz"))
