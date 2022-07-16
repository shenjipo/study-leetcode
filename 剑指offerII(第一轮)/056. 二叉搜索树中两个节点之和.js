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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    let nums = []
    const dfs = (node) => {
        if (!node) {
            return
        }
        dfs(node.left)
        nums.push(node.val)
        dfs(node.right)
    }
    let [i, j] = [0, nums.length - 1]
    while (i < j) {
        if (nums[i] + nums[j] === k) {
            return true
        } else if (nums[i] + nums[j] < k) {
            i++
        } else {
            j--
        }
    }
    return false
};
