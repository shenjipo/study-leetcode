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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
    if (!root) {
        return []
    }
    let tempPath = []
    let ans = []
    let sum = 0

    function dfs(node, sum) {
        tempPath.push(node.val)
        if (sum === target && !node.left && !node.right) {
            ans.push([...tempPath])
        }
        node.left && dfs(node.left, sum + node.left.val)
        node.right && dfs(node.right, sum + node.right.val)
        tempPath.pop()
    }

    dfs(root, root.val)
    return ans
};