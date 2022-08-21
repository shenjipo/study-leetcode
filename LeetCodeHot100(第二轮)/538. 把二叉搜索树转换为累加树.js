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
var convertBST = function (root) {

    let inOrder = []
    const dfs = (node) => {
        if (!node) return

        dfs(node.left)
        inOrder.push(node.val)
        dfs(node.right)
    }
    dfs(root)
    for (let i = inOrder.length - 2; i > -1; i--) {
        inOrder[i] = inOrder[i] + inOrder[i + 1]
    }

    const dfs2 = (node) => {
        if (!node) return
        console.log(node.val)
        dfs2(node.left)
        node.val = inOrder.shift()
        dfs2(node.right)
    }
    dfs2(root)
    return root

};