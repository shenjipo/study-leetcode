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
var sumNumbers = function (root) {
    let [temp1, temp2] = [[], []]
    const dfs = (node) => {
        if (!node) {
            return
        }
        temp1.push(node.val)
        if (!node.left && !node.right) {
            let num = ''
            for (let item of temp1) {
                num += item
            }
            temp2.push(num)
        }
        dfs(node.left)
        dfs(node.right)
        temp1.pop()
    }
    dfs(root)

    return temp2.reduce((curr, next) => {
        return Number(curr) + Number(next)
    })
};
