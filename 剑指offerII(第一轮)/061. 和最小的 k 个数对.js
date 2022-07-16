/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
    let ans = []
    nums1.forEach(item1 => {
        nums2.forEach(item2 => {
            ans.push([item1,item2])
        })
    })

    return ans.sort((a, b) => {
        return a[0] + a[1] - b[0] - b[1]
    }).slice(0, k)
};
console.log(kSmallestPairs([1, 1, 2], [1, 2, 3], 10))
