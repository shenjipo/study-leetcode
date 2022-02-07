/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    // 统计每一行
    let map; //统计有没有重复的
    //判断每一行有没有重复的
    let grid = Array.from({length: 3}, () => Array.from({length: 3}, () => new Array()))
    console.log(grid)
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            grid[i / 3 | 0][j / 3 | 0].push(board[i][j]);
        }
    }
    console.log(grid  = {};
        console.log(arr)
        for (let ch of arr) {
            if (ch !== '.') {
                if (map[ch]) return false;
                map[ch] = true;
            }
        }
    }


}


input = [["5", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]


console.log(isValidSudoku(input))
