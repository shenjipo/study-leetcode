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
    this.queue = []
    let temp = [root]
    while (temp.length) {
        let node = temp.shift()
        if (node.left && node.right) {
            temp.push(node.left)
            temp.push(node.right)
        } else if (node.left) {
            temp.push(node.left)
            this.queue.push(node)
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
    let node = this.queue[0]
    let newNode = new TreeNode(v, null, null)
    if (node.left === null) {
        this.queue.push(newNode)
    } else {
        this.queue.push(newNode)
        this.queue.shift()
    }
    return node.val
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
let person1 = {
    age: 20
}
let p = []
p.push(person1)
person1.age = 55
console.log(p[0])
