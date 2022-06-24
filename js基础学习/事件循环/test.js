const p1 = new Promise((resolve, reject) => {
    console.log(666)
    resolve('success')
})
p1.then(res => {
    console.log(res)
})
setTimeout(() => {
    console.log(777)
    new Promise((resolve, reject) => {
        resolve(999)
    }).then(res => {
        console.log(res)
    })
})
setTimeout(() => {
    console.log(888)
})
console.log(777)
// 666 777 success 777 999 888
