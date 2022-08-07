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
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0
    let ans = 0
    let mp = new Map()
    let queue = [{node: root, level: 0}]
    while (queue.length) {
        let node = queue.shift()
        mp.has(node.level) ? mp.set(node.level, [...mp.get(node.level), node.node.val]) : mp.set(node.level, [node.node.val])
        if (node.node.left) {
            queue.push({
                node: node.node.left,
                level: node.level + 1
            })
            ans = Math.max(ans, node.level + 1)
        }
        if (node.node.right) {
            queue.push({
                node: node.node.right,
                level: node.level + 1
            })
            ans = Math.max(ans, node.level + 1)
        }
    }
    return ans + 1
};