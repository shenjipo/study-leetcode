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
 */
var CBTInserter = function (root) {
    this.root = root
    let temp = [root]
    this.queue = []
    while (temp.length) {
        let node = temp.shift()
        if (node.left && node.right) {
            temp.push(node.left)
            temp.push(node.right)
        } else if (node.left) {
            this.queue.push(node)
            temp.push(node.left)
        } else {
            this.queue.push(node)
        }
    }
};

/**
 * @param {number} v
 * @return {number}
 */
CBTInserter.prototype.insert = function (v) {
    let newNode = new TreeNode(v, null, null)
    let root = this.queue[0]
    if (!root.left) {
        root.left = newNode
    } else {
        root.right = newNode
        this.queue.shift()
    }
    this.queue.push(newNode)
    return root.val
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function () {
    return this.root
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(v)
 * var param_2 = obj.get_root()
 */