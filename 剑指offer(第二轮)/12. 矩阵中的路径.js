/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let [row, col] = [board.length, board[0].length]
    let flag = false
    const backtrace = (i, j, temp, visited) => {
        if (temp.length === word.length) {
            flag = true
            return
        }
        if (i < 0 || j < 0 || i >= row || j >= col) {
            return
        }
        if (i + 1 < row && board[i + 1][j] === word[temp.length] && temp.length < word.length && visited[i + 1][j] === 0) {
            temp.push(board[i + 1][j])
            visited[i + 1][j] = 0
            backtrace(i + 1, j, temp,visited)
        }
        if (j + 1 < col && board[i][j + 1] === word[temp.length] && temp.length < word.length && visited[i][j + 1] === 0) {
            temp.push(board[i][j + 1])
            visited[i][j + 1] = 0
            backtrace(i, j + 1, temp, visited)
        }
        if (i - 1 > -1 && board[i - 1][j] === word[temp.length] && temp.length < word.length && visited[i - 1][j] === 0) {
            temp.push(board[i - 1][j])
            visited[i - 1][j] = 0
            backtrace(i - 1, j, temp, visited)
        }
        if (j - 1 > -1 && board[i][j - 1] === word[temp.length] && temp.length < word.length && visited[i][j - 1] === 0) {
            temp.push(board[i][j - 1])
            visited[i][j - 1] = 0
            backtrace(i, j - 1, temp, visited)
        }
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (board[i][j] === word[0]) {
                let visited = new Array(row).fill(0).map(() => {
                    return new Array(col).fill(0)
                })
                visited[i][j] = 1
                backtrace(i, j, [board[i][j]], visited)
            }
        }
    }

    return flag

};
