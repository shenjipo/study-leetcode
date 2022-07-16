/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
    let ans = new Set()
    let visited = new Array(s.length).fill(0)
    const dfs = (temp) => {
        if (temp.length >= s.length) {
            ans.add(temp)
            return
        }
        for (let i = 0; i < s.length; i++) {
            if (!visited[i]) {
                visited[i] = 1
                dfs(temp + s[i])
                visited[i] = 0
            }
        }
    }
    dfs('')

    return Array.from(ans)
};

permutation('abc')