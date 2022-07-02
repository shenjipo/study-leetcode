/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
    let [row, col] = [grid.length, grid[0].length]
    let dp = new Array(grid.length).fill(0).map(item => {
        return new Array(grid[0].length).fill(0)
    })
    dp[0][0] = grid[0][0]
    for (let i = 1; i < col; i++) {
        dp[0][i] = dp[0][i - 1] + grid[0][i]
    }
    for (let i = 1; i < row; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0]
    }
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
        }
    }
    return dp[row - 1][col - 1]
};
maxValue([[1, 2, 3], [1, 2, 3], [1, 2, 3]])
