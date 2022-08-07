/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let mp = new Map()
    let ans = ''
    let [left, right] = [0, 0]
    let ansmp = new Map()
    for (let item of t) {
        ansmp.has(item) ? ansmp.set(item, ansmp.get(item) + 1) : ansmp.set(item, 1)
    }
    const judge = () => {
        for (let item of ansmp) {
            if (!mp.has(item[0]) || mp.get(item[0]) < item[1]) {
                return false
            }
        }
        return true
    }
    while (left <= right && right < s.length) {
        mp.has(s[right]) ? mp.set(s[right], mp.get(s[right]) + 1) : mp.set(s[right], 1)
        if (judge()) {
            while (left <= right && judge()) {
                mp.set(s[left], mp.get(s[left]) - 1)
                left++
            }
            let tempAns = s.slice(left - 1, right + 1)
            if (tempAns.length < ans.length || ans.length === 0) {
                ans = tempAns
            }
        }
        right++
    }
    console.log(ans)
    return ans
};
minWindow('ab', 'a')