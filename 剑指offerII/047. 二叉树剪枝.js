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
 * @return {TreeNode}
 */
var pruneTree = function (root) {

    const dfs = (node) => {
        if (!node) {
            return
        }
        if (node.left) {
            if (node.left.val === 0 && !node.left.left && !node.left.right) {
                node.left = null
                return
            }
        }
        if (node.right) {
            if (node.right.val === 0 && !node.right.left && !node.right.right) {
                node.right = null
                return
            }
        }
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    return root
};
