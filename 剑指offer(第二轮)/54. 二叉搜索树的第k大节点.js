/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
    let arr = []
    const dfs = (node) => {
        if (!node) return
        if (node.left) {
            dfs(node.left)
        }
        arr.push(node.val)
        if (node.right) {
            dfs(node.right)
        }
    }
    dfs(root)
    return arr[arr.length - k]
};
