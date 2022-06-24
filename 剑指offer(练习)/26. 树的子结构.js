/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {

    const dfs = (nodeA, nodeB) => {
        if (nodeA && nodeB) {
            if (nodeA.val === nodeB.val) {
                dfs(nodeA.left, nodeB.left)
            }
        }
        if (!nodeA && !nodeB) {
            return true
        }
        return false
    }

};
