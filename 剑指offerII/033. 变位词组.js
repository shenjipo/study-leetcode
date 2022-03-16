/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let mp = new Map()
    let array = new Array(26).fill(0)
    strs.forEach((item, index) => {
        array = new Array(26).fill(0)
        for (let key of item) {
            array[key.charCodeAt() - 'a'.charCodeAt()]++
        }

        if (mp.has(array.toString())) {
            mp.set(array.toString(), mp.get(array.toString()) + ',' + item)
        } else {
            mp.set(array.toString(), item)
        }

    })

    let ans = []
    for (let [key, value] of mp) {
        ans.push(value.split(','))
    }
    return ans
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))

