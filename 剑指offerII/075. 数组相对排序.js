/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    arr1.sort((a, b) => {
        if (arr2.indexOf(a) !== -1 && arr2.indexOf(b) !== -1) {
            return arr2.indexOf(a) - arr2.indexOf(b)
        } else if (arr2.indexOf(a) !== -1) {
            return false
        } else if (arr2.indexOf(b) !== -1) {
            return true
        } else {
            return a - b
        }
    })
    return arr1
};
console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]))
