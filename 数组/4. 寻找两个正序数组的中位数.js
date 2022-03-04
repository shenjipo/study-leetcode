/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let combin_num = [...nums1, ...nums2].sort((a, b) => {
    return a - b;
  })

  return (combin_num[parseInt((combin_num.length - 1) / 2)] + combin_num[parseInt((combin_num.length) / 2)]) / 2
};

let nums1 = [1, 3];
let nums2 = [2];
ans = findMedianSortedArrays(nums1, nums2)
console.log(ans)

