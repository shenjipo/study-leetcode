/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    const merge = (arr) => {
        if (arr.length <= 1) {
            return arr
        }
        let middle = Math.floor((arr.length) / 2)
        let leftArr = merge(arr.slice(0, middle))
        let rightArr = merge(arr.slice(middle))
        let ans = []
        while (leftArr.length && rightArr.length) {
            if (leftArr[0] < rightArr[0]) {
                ans.push(leftArr.shift())
            } else {
                ans.push(rightArr.shift())
            }
        }
        return ans.concat(leftArr, rightArr)
    }
    const quickSort = (begin, end, arr) => {
        if (begin > end) {
            return
        }
        let temp = arr[begin]
        let [left, right] = [begin, end]
        while (left < right) {
            while (left < right && arr[right] >= temp) {
                right--
            }
            while (left < right && arr[left] <= temp) {
                left++
            }
            if (left < right) {
                [arr[left], arr[right]] = [arr[right], arr[left]]
            }
        }
        arr[begin] = arr[left]
        arr[left] = temp
        quickSort(begin, left - 1, arr)
        quickSort(left + 1, end, arr)
    }

    let ans = merge(nums)
    console.log(ans)
    return nums
};
sortColors([2, 0, 1])


