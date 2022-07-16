/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
    let m = matrix.length
    if (m > 0) {
        let n = matrix[0].length
        this.sums = new Array(m).fill(0).map(() => {
            return new Array(n + 1).fill(0)
        })
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                this.sums[i][j + 1] = this.sums[i][j] + matrix[i][j]
            }
        }
    }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    let sum = 0
    for (let i = row1; i <= row2; i++) {
        sum += this.sums[i][col2] - this.sums[i][col1 - 1]
    }
    return sum
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
var obj = new NumMatrix([[0], [0]])
var param_1 = obj.sumRegion(0, 0, 0, 0)
console.log(param_1)




