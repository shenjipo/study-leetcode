/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let [row, col] = [matrix.length, matrix[0]?.length]
    if (!row || !col) {
        return []
    }
    let [left, top, right, bottom] = [0, 0, matrix[0].length, matrix.length]
    let ans = []
    row = col = 0
    while (true) {
        while (col < right) {
            ans.push(matrix[row][col++])
        }
        top++
        col--
        row++
        if (top >= bottom) break
        while (row < bottom) {
            ans.push(matrix[row++][col])
        }

        right--
        row--
        col--
        if (left >= right) break
        while (col >= left) {
            console.log(row, col)
            ans.push(matrix[row][col--])
        }
        bottom--
        col++
        row--
        if (top >= bottom) break
        while (row >= top) {
            ans.push(matrix[row--][col])
        }
        left++
        row++
        col++
        if (left >= right) break
    }
    return ans

};
let ans = spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
console.log(ans)