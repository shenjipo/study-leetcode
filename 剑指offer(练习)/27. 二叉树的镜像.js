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
    if(!root){
        return null
    }
    const backtrace = (node) => {
        if (node.left) {
            backtrace(node.left)
        }
        if (node.right) {
            backtrace(node.right)
        }

        let temp = node.right
        node.right = node.left
        node.left = temp

    }
    backtrace(root)
    return root
};
