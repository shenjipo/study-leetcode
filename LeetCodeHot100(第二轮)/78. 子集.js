/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let visited = new Array(nums.length).fill(0)
    let ans = new Set()
    const dfs = (temp) => {
        if (temp.length <= nums.length) {
            let save = [...temp]
            save.sort((a, b) => a - b)
            ans.add(save.join(','))
        }
        for (let i = 0; i < nums.length; i++) {
            if (!visited[i]) {
                visited[i] = 1
                temp.push(nums[i])
                dfs(temp)
                visited[i] = 0
                temp.pop()
            }
        }
    }
    dfs([])
  
    return Array.from(ans).map(item => {
        if (item.length) {
            return item.split(',')
        } else {
            return []
        }
    })
};
subsets([1, 2, 3])