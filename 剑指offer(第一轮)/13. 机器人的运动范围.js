/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
    let visited = new Array(m).fill(0).map(() => {
        return new Array(n).fill(0)
    })


    function backtrace(row, col) {
        visited[row][col] = 1
        if (row + 1 < m && judge(row + 1, col) && !visited[row + 1][col]) {
            backtrace(row + 1, col)
        }
        if (row - 1 > -1 && judge(row - 1, col) && !visited[row - 1][col]) {
            backtrace(row - 1, col)
        }
        if (col + 1 < n && judge(row, col + 1) && !visited[row][col + 1]) {
            backtrace(row, col + 1)
        }
        if (col - 1 > -1 && judge(row, col - 1) && !visited[row][col - 1]) {
            backtrace(row, col - 1)
        }

    }

    function judge(row, col) {
        let s = row.toString() + col.toString()
        s = s.split('')
        let res = 0
        s.forEach(item => {
            res += parseInt(item)
        })

        return res <= k
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

