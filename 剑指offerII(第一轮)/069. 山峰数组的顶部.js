/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    let [left, right] = [0, arr.length]
    while (left <= right) {
        let middle = parseInt((left + right) / 2)
        if (arr[middle] > arr[middle - 1] && arr[middle] > arr[middle + 1]) {
            return middle
        } else if (arr[middle] < arr[middle - 1] && arr[middle] > arr[middle + 1]) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }
};
console.log(peakIndexInMountainArray([1, 3, 5, 4, 2]))
