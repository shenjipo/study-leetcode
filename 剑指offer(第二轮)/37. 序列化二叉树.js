/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if (root == null) return "[]"
    let queue = [root], res = []
    while (queue.length) {
        let node = queue.shift()
        if (node != null) {
            queue.push(node.left)
            queue.push(node.right)
            res.push(node.val)
        } else {
            res.push(null)
        }
    }
    return JSON.stringify(res)
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (data === '[]') return null
    let arr = JSON.parse(data)
    let root = new TreeNode(arr[0])
    let queue = [root], i = 1
    while (queue.length && i < arr.length) {
        let node = queue.shift()
        if (arr[i] != null) {
            node.left = new TreeNode(arr[i])
            queue.push(node.left)
        }
        i++
        if (arr[i] != null) {
            node.right = new TreeNode(arr[i])
            queue.push(node.right)
        }
        i++
    }
    return root

};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

