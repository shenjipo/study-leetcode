/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let ans = []
    const dfs = (index, temp) => {
        if (temp.length === k) {
            ans.push([...temp])
            return
        }
        if (index > n || temp.length > k) {
            return
        }
        temp.push(index)
        dfs(index + 1, temp)
        temp.pop()
        dfs(index + 1, temp)
    }
    dfs(1, [])
    return ans
};
console.log(combine(4, 2))
