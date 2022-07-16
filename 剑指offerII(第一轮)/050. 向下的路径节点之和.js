/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    if (!root) return 0;
    let count = root.val === targetSum ? 1 : 0;

    const dfs = (node, nums) => {
        if (!node) {
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (node.val + nums[nums.length - 1] - nums[i] === targetSum) {
                count++
            }
        }
        dfs(node.left, [...nums, nums[nums.length - 1] || 0 + node.val])
        dfs(node.right, [...nums, nums[nums.length - 1] || 0 + node.val])
    }
    dfs(root, [])
    return count
};





