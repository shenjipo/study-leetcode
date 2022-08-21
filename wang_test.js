function getPostOrderOfTree(preStr, midStr) {
    // write code here
    function TreeNode(val, left, right) {
        this.val = val
        this.left = left
        this.right = right
    }

    const dfs = (preOrder, midOrder) => {
        if (!preOrder.length) return null

        let root = new TreeNode(preOrder[0], null, null)
        let pos = midOrder.indexOf(preOrder[0])
        let leftPreOrder = preOrder.slice(1, pos + 1)
        let rightPreOrder = preOrder.slice(pos + 1)
        let leftMidOrder = midOrder.slice(0, pos)
        let rightMidOrder = midOrder.slice(pos + 1)

        let left = dfs(leftPreOrder, leftMidOrder)
        let right = dfs(rightPreOrder, rightMidOrder)
        root.left = left
        root.right = right
        return root
    }
    let root = dfs(preStr.split(''), midStr.split(''))
    let ans = []

    const postOrder = (node) => {
        if (!node) return
        postOrder(node.left)
        postOrder(node.right)
        ans.push(node.val)
    }
    postOrder(root)

    return ans.join('')
}

getPostOrderOfTree("ACDEFHGB", "DECAHFBG")