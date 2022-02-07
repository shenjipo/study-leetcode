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
    let count = 0
    let ans = 0
    function dfs(cur) {
        if (!cur) {
            return
        }
        dfs(cur.right)
        if (++count === k) {
            ans=cur.val
        }
        dfs(cur.left)
    }

    dfs(root)
    return ans
};