async function myTest() {

    new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                exit()
            } catch (e) {
                reject(e)
            }
        }, 1000)
    }).then(res => {

    }, error => {
        console.log(error)
    })

}

myTest()
