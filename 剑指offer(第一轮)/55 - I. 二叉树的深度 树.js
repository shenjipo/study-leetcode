/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) {
        return 0
    }
    let maxnode = 0

    function dfs(node, level) {
        if (!node) {
            maxnode = Math.max(maxnode, level - 1)
            return
        }
        dfs(node.left, level + 1)

        dfs(node.right, level + 1)
    }
    dfs(root,1)
    return maxnode
};