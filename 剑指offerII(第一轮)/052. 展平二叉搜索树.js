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
var increasingBST = function (root) {
    let number = []
    const dfs = (node) => {
        if (!node) {
            return
        }
        dfs(node.left)
        number.push(node.val)
        dfs(node.right)
    }
    let curr = new TreeNode(number.shift(), null, null)
    const newRoot = curr
    while (number.length) {
        let val = number.shift()
        if (val !== null) {
            curr.right = new TreeNode(val, null, null)
            curr = curr.right
        }
    }
    return newRoot
};
