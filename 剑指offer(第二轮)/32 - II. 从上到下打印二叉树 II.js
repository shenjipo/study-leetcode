/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) {
        return []
    }
    let [res, temp] = [[], []]
    let queue = [{node: root, level: 1}]
    while (queue.length) {
        let node = queue.shift()
        if (node.level > res.length) {
            res.push([...temp])
            temp = []
        }
        temp.push(node.node.val)
        if (node.node.left) {
            queue.push({node: node.node.left, level: node.node.level + 1})
        }
        if (node.node.right) {
            queue.push({node: node.node.right, level: node.node.level + 1})
        }
    }
    return res
};
