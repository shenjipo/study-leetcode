/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let ans = new Set()
    const dfs = (index, sum, temp) => {
        if (sum === target) {
            ans.add([...temp].sort((a, b) => {
                return a - b
            }).toString())
            return
        }
        if (index >= candidates.length || sum > target) {
            return
        }
        temp.push(candidates[index])
        sum += candidates[index]
        dfs(index + 1, sum, temp)
        temp.pop()
        sum -= candidates[index]
        dfs(index + 1, sum, temp)
    }
    dfs(0, 0, [])
    return Array.from(ans).map(item => {
        return item.split(',').map(i => {
            return parseInt(i)
        })
    })
};
console.log(combinationSum2([2, 5, 2, 1, 2], 5))
