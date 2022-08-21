// for (var i = 0; i < 10; i++) {
//     setTimeout((function (e) {
//         return function () {
//             console.log(e)
//         }
//     })(i), 1000)
// }

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

let arr = [
    {pid: null, id: '1', name: '杭州市'},
    {pid: '1', id: '1-1', name: '滨江区'},
    {pid: '1-1', id: '1-1-1', name: '乡里街道'},
    {pid: '1', id: '1-2', name: '钱塘区'},
]
// let ans = arrToTree(arr, null)
// console.log(ans)

function fn(n) {
    let ans = 1
    for (let i = 1; i <= n; i++) {
        ans = ans * i
    }
    console.log(ans)
    console.log(ans.toString().split('').reduce((pre, cur) => {
        console.log(pre, cur)
        cur === '0' && pre++
        return pre
    }, 0))
}

fn(10)