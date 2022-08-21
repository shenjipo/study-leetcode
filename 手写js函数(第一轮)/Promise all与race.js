Promise.MyAll = function (promises) {
    let arr = []
    let count = 0
    return new Promise((resolve, reject) => {
        promises.forEach((item, index) => {
            Promise.resolve(item).then(res => {
                arr[index] = res
                count += 1
                if (count === promises.length) {
                    resolve(arr)
                }
            }).catch(reject)
        })
    })
}
Promise.MyRace = function (promises) {
    return new Promise((resolve, reject) => {
        promises.forEach((item, index) => {
            Promise.resolve(item).then(res => {
                resolve(res)
            }).catch(reject)
        })
    })
}
const p1 = Promise.resolve('p1')
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p2 延时一秒')
    }, 1000)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p3 延时两秒')
    }, 2000)
})
const p4 = Promise.reject('p4 rejected')
// // 所有 Promsie 都成功
// Promise.MyAll([p1, p2, p3])
//     .then(res => console.log(res))
//     .catch(err => console.log(err)) // 2秒后打印 [ 'p1', 'p2 延时一秒', 'p3 延时两秒' ]
//
// // 一个 Promise 失败
// Promise.MyAll([p1, p2, p4])
//     .then(res => console.log(res))
//     .catch(err => console.log(err)) // p4 rejected

// p1无延时，p2延时1s，p3延时2s
Promise.MyRace([p1, p2, p3])
    .then(res => console.log(res))
    .catch(err => console.log(err)) // p1

// p4无延时reject
Promise.MyRace([p4, p2, p3])
    .then(res => console.log(res))
    .catch(err => console.log(err)) // p4 rejected
