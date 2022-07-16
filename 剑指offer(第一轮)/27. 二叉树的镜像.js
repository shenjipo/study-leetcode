/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
    if (!root) {
        return null
    }


    function backtrace(node) {
        if (node.left) {
            backtrace(node.left)
        }
        if (node.right) {
            backtrace(node.right)
        }
        let temp = node.left
        node.left = node.right
        node.right = temp

        return node
    }

    return backtrace(root)
};