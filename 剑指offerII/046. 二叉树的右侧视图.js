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
    if (!root) {
        return []
    }
    let queue = [{'node': root, 'level': 0}]
    let ans = []
    while (queue.length) {
        let node = queue.shift()
        if (ans[node.level] === undefined) {
            ans.push([node.node.val])
        } else {
            ans[node.level].push(node.node.val)
        }
        if (node.node.left) {
            queue.push({'node': node.node.left, 'level': node.level + 1})
        }
        if (node.node.right) {
            queue.push({'node': node.node.right, 'level': node.level + 1})
        }
    }
    let res = []
    for (let item of ans) {
        res.push(item[item.length - 1])
    }
    return res
};

var rightSideView2 = function (root) {
    if (!root) {
        return []
    }
    let queue = [{'node': root, 'level': 0}]
    let ans = []

    const dfs = (node, level) => {
        if (!node.left && !node.right) {
            ans[level] = node.val
        }
        if (node.left) {
            dfs(node.left, level + 1)
        }
        if (node.right) {
            dfs(node.right, level + 1)
        }
    }
    dfs(root, 0)
    return ans
};
