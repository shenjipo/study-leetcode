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
var isSymmetric = function (root) {
    if (!root)
        return true

    function backtrace(left, right) {
        if (left === null && right === null) {
            return true
        } else if (left === null || right === null) {
            return false
        } else {
            return left.val === right.val && backtrace(left.left, right.rigth) && backtrace(left.right, right.left)
        }
    }

    return backtrace(root.left, root.right)
};