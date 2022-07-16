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
    if (!root) {
        return true
    }

    const judge = (left, right) => {
        if (!left && !right) {
            return true
        }else if (!left || !right) {

            return false
        }else{
            return judge(left.left, right.right) && judge(left.right, right.left) && left.val === right.val
        }

    }
    return judge(root.left, root.right)
};
