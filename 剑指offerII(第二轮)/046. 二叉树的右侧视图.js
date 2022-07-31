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
var rightSideView = function (root) {
    if (!root) return []
    let mp = new Map()
    let queue = [{node: root, level: 0}]
    while (queue.length) {
        let node = queue.shift()
        if (mp.has(node.level)) {
            mp.set(node.level, [...mp.get(node.level), node.node.val])
        } else {
            mp.set(node.level, [node.node.val])
        }
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
    let ans = []
    for (let item of mp) {
        ans.push(item[1][item[1].length - 1])
    }
    return ans
};