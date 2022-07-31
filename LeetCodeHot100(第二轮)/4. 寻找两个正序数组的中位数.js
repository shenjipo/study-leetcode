/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let [len1, len2] = [nums1.length, nums2.length]
    let count = 0
    let ans = []
    let pos = []
    let allLen = len2 + len1
    if (allLen % 2 === 0) {
        pos = [allLen / 2 - 1, allLen / 2]
    } else {
        pos = [parseInt(allLen / 2)]
    }
    let [i, j] = [0, 0]

    while (i < len1 && j < len2) {
        if (nums1[i] < nums2[j]) {
            if (pos.indexOf(count) !== -1) {
                ans.push(nums1[i])
            }
            i++
        } else {
            if (pos.indexOf(count) !== -1) {
                ans.push(nums2[j])
            }
            j++
        }
        count++
    }
    while (i < len1) {
        if (pos.indexOf(count) !== -1) {
            ans.push(nums1[i])
        }
        i++
        count++
    }
    while (j < len2) {
        if (pos.indexOf(count) !== -1) {
            ans.push(nums2[j])
        }
        j++
        count++
    }

    return ans.reduce((pre, cur) => {
        return pre + cur
    }) / ans.length
};