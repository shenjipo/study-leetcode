function thread1(count) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(count)
            resolve(count + 1)
        }, 500)
    })
}

function thread2(count) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(count)
            resolve(count + 1)
        }, 500)
    })
}

function printNumber(i, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(i)
            resolve(i+1)
        }, time)
    })
}

async function main(i) {
    let flag = 0
    Promise.resolve().then(res => {
        return printNumber(i, 20)
    }).then(res => {
        main(res)
    })
}

main(0)