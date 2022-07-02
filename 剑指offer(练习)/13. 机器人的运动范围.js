/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {

    let dir = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    let visited = new Array(m).fill(0).map(() => {
        return new Array(n).fill(0)
    })
    const backtrace = (row, col) => {
        let numbers = [...row.toString().split(''), ...col.toString().split('')].map(item => {
            return parseInt(item)
        }).reduce((preValue, currValue, currIndex, array) => {
            return preValue + currValue
        })

        if (numbers <= k) {
            visited[row][col] = 1
            if (row + 1 < m && !visited[row + 1][col]) {
                backtrace(row + 1, col)
            }
            if (row - 1 > -1 && !visited[row - 1][col]) {
                backtrace(row - 1, col)
            }
            if (col + 1 < n && !visited[row][col + 1]) {
                backtrace(row, col + 1)
            }
            if (col - 1 > -1 && !visited[row][col - 1]) {
                backtrace(row, col - 1)
            }
        }

    }
    backtrace(0, 0)
    let count = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (visited[i][j] === 1) {
                count++
            }
        }
    }
    return count
};
console.log(movingCount(38, 15, 9))
