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
    if (!A && !B) {
        return true
    } else if (!A || !B) {
        return false
    }
    let temp = []
    temp.push(A)
    while (temp.length) {
        let node = temp.shift()
        if (node.val === B.val) {
            if (judge(node, B)) {
                return true
            }
        }
        if (node.left) {
            temp.push(node.left)
        }
        if (node.right) {
            temp.push(node.right)
        }
    }
    function judge(nodeA, nodeB) {
        let tempB = []
        let tempA = []
        tempB.push(nodeB)
        tempA.push(nodeA)
        let flag = true
        while (tempB.length) {
            let a = tempA.shift()
            let b = tempB.shift()
            if (a.val !== b.val || (b.left && !a.left) || (b.right && !a.right)) {
                flag = false
                break
            }
            if (b.left && a.left) {
                tempB.push(b.left)
                tempA.push(a.left)
            }
            if (b.right && a.right) {
                tempB.push(b.right)
                tempA.push(a.right)
            }
        }
        return flag
    }
    return false
};