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
 * @return {number[]}
 */
var largestValues = function (root) {
    let queue = [{'root': root, 'level': 0}]
    let ans = []
    while (queue.length) {
        let node = queue.shift()
        ans[node.level] = ans[node.level] !== undefined ? Math.max(ans[node.level], node.root.val) : node.root.val
        if (node.root.left) {
            queue.push({'root': node.root.left, 'level': node.level + 1})
        }
        if (node.root.right) {
            queue.push({'root': node.root.right, 'level': node.level + 1})
        }
    }
    return ans
};

