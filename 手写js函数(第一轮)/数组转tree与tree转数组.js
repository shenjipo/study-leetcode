function ArrayToTree(arr, pid) {
    let treeArr = []
    for (let i = 0; i < arr.length; i++) {
        let node = arr[i]
        if (node.pid === pid) {
            let newNode = {
                id: node.id,
                name: node.name,
                pid: node.pid,
                children: ArrayToTree(arr, node.id)
            }
            treeArr.push(newNode)
        }
    }
    return treeArr
}

function TreeToArray(obj, arr) {
    for (let item of obj) {
        arr.push({
            id: item.id,
            name: item.name,
            pid: item.pid,
        })
        if (Array.isArray(item.children)) {
            TreeToArray(item.children, arr)
        }
    }
}

function ArrayToTree2(arr, pid) {
    let treeArr = []
    let mp = new Map()
    for (let i = 0; i < arr.length; i++) {
        mp.set(arr[i].id, {
            id: arr[i].id,
            name: arr[i].name,
            pid: arr[i].pid,
            children: []
        })
    }
    for (let item of mp) {
        if (mp.has(item[1].pid)) {
            mp.get(item[1].pid).children.push(item[1])
        } else {
            treeArr.push(item[1])
        }
    }
    return treeArr
}

let origin_arr = [
    {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门2', pid: 1},
    {id: 3, name: '部门3', pid: 1},
    {id: 4, name: '部门4', pid: 3},
    {id: 5, name: '部门5', pid: 4},
]

let ans = ArrayToTree2(origin_arr, 0)
console.log(ans)
let ans2 = []
TreeToArray(ans, ans2)
console.log(ans2)
