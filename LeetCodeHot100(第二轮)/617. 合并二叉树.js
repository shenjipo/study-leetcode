/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {

    const dfs = (node1, node2, root) => {
        if (!node1 && !node2) return null
        if (node1 && node2) {
            root = new TreeNode(node1.val + node2.val, null, null)
            let left = dfs(node1.left, node2.left, root.left)
            let right = dfs(node1.right, node2.right, root.right)
            root.left = left
            root.right = right
            return root
        } else if (node1) {
            root = new TreeNode(node1.val, null, null)
            let left = dfs(node1.left, null, root.left)
            let right = dfs(node1.right, null, root.left)
            root.left = left
            root.right = right
            return root
        } else {
            root = new TreeNode(node2.val, null, null)
            let left = dfs(null, node2.left, root.left)
            let right = dfs(null, node2.right, root.left)
            root.left = left
            root.right = right
            return root
        }
    }
    const root = dfs(root1, root2, null)
    return root
};