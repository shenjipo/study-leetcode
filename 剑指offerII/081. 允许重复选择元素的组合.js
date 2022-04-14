/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let ans = new Set()
    const dfs = (index, sum, temp) => {
        if (sum === target) {
            ans.add(temp.toString())
            return
        }
        if (index >= candidates.length || sum > target) {
            return
        }
        temp.push(candidates[index])
        sum += candidates[index]
        dfs(index, sum, temp)
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
console.log(combinationSum([2, 3, 6, 7], 7))
