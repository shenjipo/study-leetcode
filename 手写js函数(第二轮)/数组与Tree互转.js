function ArrayToTree(arr, pid) {
    let treeArray = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].pid === pid) {
            treeArray.push({
                id: arr[i].id,
                name: arr[i].name,
                pid: pid,
                children: ArrayToTree(arr, arr[i].id)
            })
        }
    }

    return treeArray
}

function TreeToArray(arr) {
    let commonArray = []
    for (let i = 0; i < arr.length; i++) {
        commonArray.push({
            id: arr[i].id,
            name: arr[i].name,
            pid: arr[i].pid
        })
        if (arr[i].children.length) {
            commonArray.push(...TreeToArray(arr[i].children))
        }
    }

    return commonArray
}

let origin_arr = [
    {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门2', pid: 1},
    {id: 3, name: '部门3', pid: 1},
    {id: 4, name: '部门4', pid: 3},
    {id: 5, name: '部门5', pid: 4},
]

let ans = ArrayToTree(origin_arr, 0)
console.log(ans)
// let ans2 = []
let ans22 = TreeToArray(ans)
console.log(ans22)