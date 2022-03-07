/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    let maps1 = new Map()
    let maps2 = new Map()
    for (let item of p) {
        maps1.set(item, maps1.get(item) + 1 || 1)
    }
    for (let i = 0; i < p.length; i++) {
        maps2.set(s[i], maps2.get(s[i]) + 1 || 1)
    }
    let ans = []
    let flag = true
    for (let [key, value] of maps1) {
        if (maps2.get(key) !== value) {
            flag = false
            break
        }
    }
    if (flag) {
        ans.push(0)
    }
    for (let i = 1; i <= s.length - p.length; i++) {
        maps2.set(s[i - 1], maps2.get(s[i - 1]) - 1)
        if (maps2.get(s[i - 1]) === 0) {
            maps2.delete(s[i - 1])
        }
        maps2.set(s[i + p.length - 1], maps2.get(s[i + p.length - 1]) + 1 || 1)
        flag = true

        for (let [key, value] of maps1) {

            if (maps2.get(key) !== value) {
                flag = false
                break
            }
        }
        if (flag) {
            ans.push(i)
        }
    }
    return ans
};
console.log(findAnagrams('cbaebabacd', 'abc'))
