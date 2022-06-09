/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let ans = 0
    let [right, bottom] = [grid[0].length, grid.length]

    const dfs = (i, j) => {
        if (i < 0 || j < 0 || i >= bottom || j >= right) {
            return 0
        }
        if (grid[i][j] === 0) {
            return 0
        }
        grid[i][j] = 0
        return dfs(i - 1, j) + dfs(i + 1, j) + dfs(i, j - 1) + dfs(i, j + 1) + 1
    }
    for (let i = 0; i < bottom; i++) {
        for (let j = 0; j < right; j++) {
            if (grid[i][j] === 1) {
                let temp = dfs(i, j, 1)
                ans = Math.max(ans,temp)
            }
        }
    }
    return ans
};
console.log(maxAreaOfIsland([[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]))
