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
 * @return {boolean}
 */
var isValidBST = function (root) {
    let flag = true
    let pre = undefined
    const judge = (cur) => {
        if (!cur) return
        judge(cur.left)
        if (pre !== undefined && cur.val <= pre) {
            flag = false
        }
        pre = cur.val
        judge(cur.right)
    }
    judge(root)
    return flag
};