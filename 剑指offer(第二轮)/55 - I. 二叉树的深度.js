/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0
    let queue = [{node: root, level: 1}]
    let ans = 0
    while (queue.length) {
        let node = queue.shift()
        ans = Math.max(ans, node.level)
        if (node.node.left) {
            queue.push({
                node: node.node.left,
                level: node.level + 1
            })
        }
        if (node.node.right) {
            queue.push({
                node: node.node.right,
                level: node.level + 1
            })
        }
    }
    return ans
};
