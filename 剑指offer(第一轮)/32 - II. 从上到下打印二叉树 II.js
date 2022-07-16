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
    let ans = []
    let temp = []
    temp.push({level: 0, node: root})
    let mp = new Map()

    while (temp.length) {
        let nodeclass = temp.shift()
        mp.get(nodeclass.level) ? mp.get(nodeclass.level).push(nodeclass.node.val) : mp.set(nodeclass.level, [nodeclass.node.val])
        if (nodeclass.node.left) {
            temp.push({level: nodeclass.level + 1, node: nodeclass.node.left})
        }
        if (nodeclass.node.right) {
            temp.push({level: nodeclass.level + 1, node: nodeclass.node.right})
        }
    }
    for (let item of mp) {
        ans.push(item[1])
    }
    return ans
};
