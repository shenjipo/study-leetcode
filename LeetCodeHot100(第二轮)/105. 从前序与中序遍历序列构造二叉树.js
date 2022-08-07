/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {

    const build = (preorder, inorder) => {
        if (!preorder.length) return null
        else if (preorder.length === 1) {
            return new TreeNode(preorder[0])
        }
        let pos = inorder.indexOf(preorder[0])
        let node = new TreeNode(preorder[0])
        let left = buildTree(preorder.slice(1, pos + 1), inorder.slice(0, pos))
        let right = buildTree(preorder.slice(pos + 1), inorder.slice(pos + 1))
        node.left = left
        node.right = right
        return node
    }
    return build(preorder, inorder)
};