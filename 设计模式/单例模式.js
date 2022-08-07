let user = null

function getUser() {
    if (user === null) {
        user = {
            name: 'wang'
        }
    }
    return user
}


let user1 = getUser()
let user2 = getUser()
console.log(user1)
user2.name = 'xing'
console.log(user1)