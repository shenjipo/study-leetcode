/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let mp = new Map()
    for (let num of nums) {
        mp.has(num) ? mp.set(num, mp.get(num) + 1) : mp.set(num, 1)
    }
    let topArray = Array.from(mp).sort((a, b) => {
        return b[1] - a[1]
    })
    let ans = []
    for (let i = 0; i < k; i++) {
        ans.push(topArray[i][0])
    }
    console.log(topArray, ans)
    return ans
};
topKFrequent([1, 1, 1, 2, 2, 3], 2)