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
var convertBST = function (root) {
    let nums = []
    const dfs1 = (node) => {
        if (!node) {
            return
        }
        dfs1(node.left)
        nums.push(node.val)
        dfs1(node.right)
    }
    dfs1(root)
    for (let i = nums.length - 2; i >= 0; i--) {
        nums[i] = nums[i] + nums[i + 1]
    }
    const dfs2 = (node) => {
        if (!node) {
            return
        }
        dfs2(node.left)
        node.val = nums.shift()
        dfs2(node.right)
    }
    dfs2(root)
    return root
};
