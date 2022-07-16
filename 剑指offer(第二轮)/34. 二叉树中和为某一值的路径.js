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
    let ans = []
    const dfs = (node, sum, temp) => {
        if (sum === target && !node.left && !node.right) {
            ans.push([...temp])
            return
        }
        if (node.left) {

            temp.push(node.left.val)
            dfs(node.left, sum + node.left.val, temp)
            temp.pop()
        }
        if (node.right) {
            temp.push(node.right.val)
            dfs(node.right, sum + node.right.val, temp)
            temp.pop()
        }
    }
    dfs(root, root.val, [root.val])
    return ans
};
