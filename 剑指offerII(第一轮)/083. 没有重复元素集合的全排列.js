/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let ans = new Set()
    let visited = new Array(nums.length).fill(0)
    const dfs = (temp) => {
        if (temp.length === nums.length) {
            ans.add(temp.toString())
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (visited[i] === 0) {
                visited[i] = 1
                temp.push(nums[i])
                dfs(temp)
                temp.pop()
                visited[i] = 0
            }
        }
    }
    dfs([])
    return Array.from(ans).map(item => {
        return item.split(',').map(i => {
            return parseInt(i)
        })
    })
};
console.log(permute([1, 2, 3]))
