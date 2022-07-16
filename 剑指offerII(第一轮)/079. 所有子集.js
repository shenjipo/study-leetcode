/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let ans = []
    const dfs = (index, temp) => {
        if (index >= nums.length) {
            ans.push([...temp])
            return
        }
        temp.push(nums[index])
        dfs(index + 1, temp)
        temp.pop()
        dfs(index + 1, temp)
    }
    dfs(0, [])
    return ans
};
console.log(subsets([1, 2, 3]))
