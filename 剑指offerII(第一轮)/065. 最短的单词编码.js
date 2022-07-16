var minimumLengthEncoding = function (words) {
    let set = new Set(words)
    console.log(set)

    for (let item of set) {
        // console.log(item)
        for (let i = 1; i < item.length; i++) {
            if (set.has(item.slice(i))) {
                set.delete(item.slice(i))
            }
        }
    }
    let arr = Array.from(set)
    return arr.reduce((initValue, curr) => {
        return initValue + curr.length
    }, 0) + arr.length
};
var minimumLengthEncoding2 = function (words) {
    let map = new Map()
    let ans = 0
    const insert = (word) => {
        let node = map
        for (let i = 0; i < word.length; i++) {
            if (node.has(word.slice(i, i + 1))) {
                node = node.get(word.slice(i, i + 1))
            } else {

                node.set(word.slice(i, i + 1), new Map())
                node = node.get(word.slice(i, i + 1))
            }
        }
    }

    const dfs = (node, currLen) => {
        //到达叶子节点
        if (node.size === 0) {
            ans += currLen + 1
            return
        }
        for (let [key, value] of node) {
            dfs(value, currLen + 1)
        }
    }
    for (let word of words) {
        insert(word.split('').reverse().join(''))
    }
    dfs(map, 0)
    return ans
};
console.log(minimumLengthEncoding2(["time", "me", "bell"]))


