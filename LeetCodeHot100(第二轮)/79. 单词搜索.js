/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let flag = false
    let [row, col] = [board.length, board[0].length]
    let visited = new Array(row).fill(0).map(item => {
        return new Array(col).fill(0)
    })
    let next = [[0, 1], [1, 0], [-1, 0], [0, -1]]
    const dfs = (i, j, temp) => {
        if (temp.length === word.length) {
            if (temp.join('') === word) {
                flag = true
            }
            return
        }
        for (let k = 0; k < 4; k++) {
            let [nexti, nextj] = [i + next[k][0], j + next[k][1]]
            if (nexti > -1 && nexti < row && nextj > -1 && nextj < col && !visited[nexti][nextj]) {
                temp.push(board[nexti][nextj])
                visited[nexti][nextj] = 1
                dfs(nexti, nextj, temp)
                visited[nexti][nextj] = 0
                temp.pop()
            }
        }
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (board[i][j] === word[0][0]) {
                visited = visited.map(item => {
                    return item.fill(0)
                })
                visited[i][j] = 1
                dfs(i, j, [board[i][j]])
                if (flag) return flag
            }
        }
    }
    return false
};
let ans = exist([["a", "a"]], 'aaa')
console.log(ans)