/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (preorder.length === 0) {
        return null
    } else if (preorder.length === 1) {
        return new TreeNode(preorder[0])
    }
    let index = inorder.indexOf(preorder[0])
    let preleft = preorder.slice(1, index + 1)
    let preright = preorder.slice(index + 1)
    let inleft = inorder.slice(0, index)
    let inright = inorder.slice(index + 1)

    let node = new TreeNode(preorder[0])
    node.left = buildTree(preleft, inleft)
    node.right = buildTree(preright, inright)
    return node
};