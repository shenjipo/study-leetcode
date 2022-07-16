/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {
    let ans = null
    let count = 0
    const dfs = (pre, node) => {
        if (!node) {
            return
        }
        dfs(node, node.left)
        if (count === 1) {
            count = 2
            ans = node
        }
        if (count === 0 && node.val === p.val) {
            count = 1
        }
        dfs(node, node.right)
    }
    dfs(null, root)
    return ans
};
