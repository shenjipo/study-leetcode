// https://juejin.cn/post/7069805387490263047


Promise.MyAll = (promises) => {
    return new Promise((resolve, reject) => {
        let count = 0
        let ans = []
        promises.forEach((item, index) => {
            item.then(res => {
                ans[index] = res
                count++
                if (count === promises.length) {
                    resolve(ans)
                }
            }, error => {
                reject(error)
            })

        })
    })
}

Promise.MyRace = (promises) => {
    return new Promise((resolve, reject) => {
        promises.forEach((item, index) => {
            item.then(res => {
                resolve(res)
            }, error => {
                reject(error)
            })

        })
    })
}

Promise.MyAny = (promises) => {
    let count = 0
    let ans = []
    return new Promise((resolve, reject) => {
        promises.forEach((item, index) => {
            item.then(res => {
                resolve(res)
            }, error => {
                count++
                ans[index] = error
                if (count === promises.length) {
                    reject(ans)
                }
            })

        })
    })
}
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('p1 success')
    }, 500)
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('p2 success')
    }, 0)
})

// Promise.MyAll([p1, p2]).then(res => {
//     console.log(res)
// }, error => {
//     console.log(error)
// })

Promise.MyRace([p1, p2]).then(res => {
    console.log(res)
}, error => {
    console.log(error)
})
