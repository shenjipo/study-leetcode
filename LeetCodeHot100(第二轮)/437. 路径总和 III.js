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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    let pre = [0]
    let ans = 0
    const dfs = (node, cur) => {
        if (!node) return
        cur += node.val
        for (let preItem of pre) {
            if (cur - targetSum === preItem) {
                ans++
            }
        }
        pre.push(cur)
        dfs(node.left, cur)
        dfs(node.right, cur)
        pre.pop()
    }
    dfs(root, 0)
    return ans
};


// time: O(deepth ^ 2)
// space: O(deepth)
var pathSum2 = function (root, targetSum) {
    let cur = 0;
    let prev = [0];
    let res = 0;

    function traverse(node) {
        if (node === null) return;
        cur += node.val;
        for (let i of prev) {
            if (cur - i === targetSum) res += 1;
        }
        prev.push(cur);
        traverse(node.left);
        traverse(node.right);
        cur -= node.val;
        prev.pop();
    }

    traverse(root);
    return res;
};

