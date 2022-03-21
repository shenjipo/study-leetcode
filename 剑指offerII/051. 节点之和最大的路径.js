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
    let maxNumber = root.val
    const dfs = (node) => {
        if (!node) {
            return 0
        }
        let maxLeft = dfs(node.left)
        let maxRight = dfs(node.right)
        maxNumber = Math.max(maxNumber, node.val + maxLeft + maxRight)
        return Math.max(0, node.val, node.val + maxLeft, node.val + maxRight)
    }
    return maxNumber
};
