/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
    if (!root) return null
    let [head, pre] = [null, null]
    const dfs = (node) => {
        if (!node)
            return null
        if (node.left) {
            dfs(node.left)
        }
        if (pre === null) {
            head = node
        } else {
            node.left = pre
            pre.right = node

        }
        pre = node
        if (node.right) {
            dfs(node.right)
        }
    }
    dfs(root)
    head.left = pre
    pre.right = head
    return head
};
