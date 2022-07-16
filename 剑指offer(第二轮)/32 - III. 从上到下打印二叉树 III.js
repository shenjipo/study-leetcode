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
    let queue = [{node: root, level: 0}]
    let mp = new Map()
    let res = []
    while (queue.length) {
        let node = queue.shift()
        mp.get(node.level) ? mp.get(node.level).push(node.node.val) : mp.set(node.level, [node.node.val])

        if (node.node.left) {
            queue.push({node: node.node.left, level: node.level + 1})
        }
        if (node.node.right) {
            queue.push({node: node.node.right, level: node.level + 1})
        }
    }

    for (let item of mp) {

        if (item[0] % 2 === 0) {
            res.push(item[1])
        } else {
            res.push(item[1].reverse())
        }
    }
    return res
};
