// setTimeout((i) => {
//     console.log(i)
// }, 1000)

function print(i) {
    console.log(i)
    if (i >= 4)
        return
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(i + 1)
        }, 1000)
    }).then(res => {
        print(res)
    })
}
print(0)
