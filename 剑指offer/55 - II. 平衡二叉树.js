/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    function dfs(node) {
        if (!node) {
            return 0
        }
        let left = dfs(node.left)
        let right = dfs(node.right)
        if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
            return -1
        }
        return Math.max(left, right) + 1
    }

    let ans = dfs(root)
    return ans !== -1
};