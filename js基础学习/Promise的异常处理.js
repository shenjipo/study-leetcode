function f() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(555)
            reject(555)
        }, 500)
    })
}

async function main1() {
    try {
        const res = await f()
        console.log(res, 777)
    } catch (e) {
        console.log(e, 666)
    }
}

main1()
