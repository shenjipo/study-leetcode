/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
    if (matrix.length === 0)
        return false;
    let row = 0
    let col = matrix[0].length - 1
    while (row < matrix.length && col > 0) {
        if (matrix[row][col] === target) {
            return true
        } else if (matrix[row][col] > target) {
            col--
        } else {
            row++
        }
    }
    return false
};
let i = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]]


console.log(findNumberIn2DArray([[-5]], -5))