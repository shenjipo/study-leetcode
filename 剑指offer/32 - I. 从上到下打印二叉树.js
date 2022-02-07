/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 二叉树的层次遍历
var levelOrder = function(root) {
    if(!root)
        return []
    let ans = []
    let temp = []
    temp.push(root)

    while(temp.length){
        let node = temp.shift()
        ans.push(node.val)
        if(node.left){
            temp.push(node.left)
        }
        if(node.right){
            temp.push(node.right)
        }
    }
    return ans
};