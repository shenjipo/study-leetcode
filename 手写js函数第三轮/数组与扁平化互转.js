let arr = [
    {pid: null, id: 1, name: '部门1'},
    {pid: 1, id: 2, name: '部门2'},
    {pid: 1, id: 3, name: '部门3'},
    {pid: 2, id: 7, name: '部门4'},
    {pid: 2, id: 4, name: '部门5'},
    {pid: 2, id: 5, name: '部门6'},
    {pid: 3, id: 6, name: '部门7'}
]

function arrToTree(arr, pid) {
    let treeArray = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].pid === pid) {
            treeArray.push({
                id: arr[i].id,
                pid: arr[i].pid,
                name: arr[i].name,
                children: arrToTree(arr, arr[i].id)
            })
        }
    }
    return treeArray
}

function arrToTree2(arr) {
    let treeArray = []
    let mp = new Map()
    for (let i = 0; i < arr.length; i++) {
        mp.set(arr[i].id, {
            id: arr[i].id,
            pid: arr[i].pid,
            name: arr[i].name,
            children: []
        })
    }
    for (let item of mp) {
        if (mp.has(item[1].pid)) {
            mp.get(item[1].pid).children.push(item[1])
        } else {
            treeArray.push(item[1])
        }
    }
    return treeArray
}

function treeToArray(tree) {
    let arr = []
    for (let i = 0; i < tree.length; i++) {
        arr.push({
            id: tree[i].id,
            pid: tree[i].pid,
            name: tree[i].name,
        })
        if (tree[i].children.length) {
            arr.push(...treeToArray(tree[i].children))
        }
    }
    return arr
}

let tree = arrToTree2(arr)
console.log(tree)
let array = treeToArray(tree)
console.log(array)