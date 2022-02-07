/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let res = []
    let [row, col] = [matrix.length, matrix[0]?.length]
    if (!row || !col) {
        return res
    }
    let [left, right, up, down] = [0, col - 1, 0, row - 1]
    while (true) {
        for (let i = left; i <= right; i++) {
            res.push(matrix[up][i])
        }
        up++
        if (down < up) {
            break
        }

        for (let i = up; i <= down; i++) {

            res.push(matrix[i][right])
        }
        right--
        if (left > right) {
            break
        }


        for (let i = right; i >= left; i--) {
            res.push(matrix[down][i])
        }
        down--
        if (up > down) {
            break
        }

        for (let i = down; i >= up; i--) {
            res.push(matrix[i][left])
        }
        left++
        if (left > right) {
            break
        }
    }
    return res
};
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]))