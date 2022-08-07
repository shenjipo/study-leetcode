/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let ans = []
    candidates.sort((a, b) => a - b)
    const dfs = (sum, temp, index) => {
        if (sum === target) {
            temp.sort((a, b) => a - b)
            ans.push([...temp])
            return
        }
        if (sum > target) {
            return
        }
        for (let i = index; i < candidates.length; i++) {
            if (candidates[i] > target) return;
            temp.push(candidates[i])
            dfs(sum + candidates[i], temp, i)
            temp.pop()
        }
    }
    dfs(0, [], 0)
    return ans
};
combinationSum([100, 200, 4, 12], 400)