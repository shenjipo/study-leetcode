/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
    this.matrix = matrix
    if (matrix.length) {
        let [row, col] = [matrix.length, matrix[0].length]
        this.sum = new Array(row).fill(0).map(item => {
            return new Array(col + 1).fill(0)
        })
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                this.sum[i][j + 1] = this.sum[i][j] + this.matrix[i][j]
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
    let ans = 0
    for (let i = row1; i <= row2; i++) {
        ans += this.sum[i][col2 + 1] - this.sum[i][col1]
    }
    return ans
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */