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
    let serializeNum = []
    const dfs = (node) => {
        if (!node) {
            serializeNum.push(null)
            return
        }
        serializeNum.push(node.val)
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    console.log(serializeNum)
    return serializeNum
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {

    const createTree = (dataList) => {
        if (dataList[0] === null) {
            dataList.shift()
            return null
        }
        const root = new TreeNode(dataList[0], null, null)
        dataList.shift()
        root.left = createTree()
        root.right = createTree()

        return root
    }

    return createTree(data)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
