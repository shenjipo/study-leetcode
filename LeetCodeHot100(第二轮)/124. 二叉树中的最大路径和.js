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
 * @return {number}
 */
var maxPathSum = function (root) {
    let ans = -Math.pow(2, 31)
    const dfs = (node) => {
        if (!node) return 0
        let left = dfs(node.left)
        let right = dfs(node.right)
        ans = Math.max(ans, left + right + node.val)
        return Math.max(0, Math.max(left, right) + node.val)
    }
    dfs(root)
    return ans
};