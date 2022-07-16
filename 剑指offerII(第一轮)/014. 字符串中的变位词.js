/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let maps1 = new Map()
    let maps2 = new Map()
    for (let item of s1) {
        maps1.set(item, maps1.get(item) + 1 || 1)
    }
    for (let i = 0; i < s1.length; i++) {
        maps2.set(s2[i], maps2.get(s2[i]) + 1 || 1)
    }
    let ans = true
    for (let [key, value] of maps1) {
        if (maps2.get(key) !== value) {
            ans = false
            break
        }
    }
    if (ans) {
        return ans
    }
    for (let i = 1; i <= s2.length - s1.length; i++) {
        maps2.set(s2[i - 1], maps2.get(s2[i - 1]) - 1)
        if (maps2.get(s2[i - 1]) === 0) {
            maps2.delete(s2[i - 1])
        }
        maps2.set(s2[i + s1.length - 1], maps2.get(s2[i + s1.length - 1]) + 1 || 1)
        ans = true

        for (let [key, value] of maps1) {

            if (maps2.get(key) !== value) {
                ans = false
                break
            }
        }
        if (ans) {
            return ans
        }
    }
    return false
};

var checkInclusion2 = function (s1, s2) {
    const n1 = s1.length, n2 = s2.length;
    if (n2 < n1) return false;
    const S1 = new Array(26).fill(0);
    const S2 = new Array(26).fill(0);
    let l = 0, r = n1;
    for (let i = 0; i < n1; i++) {
        S1[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        S2[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    while (r < n2) {
        if (S1.toString() === S2.toString()) {
            return true;
        }
        S2[s2[r++].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        S2[s2[l++].charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }
    if (S1.toString() === S2.toString()) {
        return true;
    }
    return false;

};
// ei id
console.log(checkInclusion2('ab', 'eidbaooo'))
