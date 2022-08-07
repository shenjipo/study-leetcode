/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let ans = []
    let visited = new Array(nums.length).fill(0)
    const dfs = (temp) => {
        if (temp.length === nums.length) {
            ans.push([...temp])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (!visited[i]) {
                temp.push(nums[i])
                visited[i] = 1
                dfs(temp)
                visited[i] = 0
                temp.pop()
            }
        }
    }
    dfs([])
    return ans
};
permute([1, 2, 3])