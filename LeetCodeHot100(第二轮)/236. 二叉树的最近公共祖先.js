/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let paths = []
    const dfs = (node, temp, target) => {
        if (!node) return
        if (node.val === target.val) {
            paths.push([...temp, node])
            return;
        }
        temp.push(node)
        dfs(node.left, temp, target)
        dfs(node.right, temp, target)
        temp.pop()
    }
    dfs(root, [], p)
    dfs(root, [], q)
    let ans = null
    for (let i = 0; i < paths[0].length && i < paths[1].length; i++) {
        if (paths[0][i].val === paths[1][i].val) {
            ans = paths[0][i]
        } else {
            break
        }
    }
    return ans
};