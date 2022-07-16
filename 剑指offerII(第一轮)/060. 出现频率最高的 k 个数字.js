/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let map = new Map()
    nums.forEach(item => {
        map.set(item, map.get(item) + 1 || 1)
    })
    return Array.from(map).sort((a, b) => b[1] - a[1]).slice(0, k).map(n => n[0])
};
topKFrequent([1, 1, 1, 1, 2, 2, 3], 2)
