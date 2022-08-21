// 声明person
let person = {
    name: "张三",
    hobbies: {
        name: '李四',
        children: ['1', '2', [4, 5]]
    }
}

const shallowCopy = function (obj) {
    if (typeof obj !== 'object') return obj
    let newObj = {}
    Object.keys(obj).forEach(key => {
        newObj[key] = obj[key]
    })
    return newObj
}

const deepClone = function (obj) {
    if (typeof obj !== 'object') return obj
    if (Array.isArray(obj)) return [...obj]
    let newObj = {}
    Object.keys(obj).forEach(key => {
        if (typeof obj !== 'object') {
            newObj[key] = obj[key]
        } else {
            newObj[key] = deepClone(obj[key])
        }
    })
    return newObj
}

let deepPerson = deepClone(person)
deepPerson.hobbies.children[2].push('5')
console.log(deepPerson.hobbies.children[2])
console.log(person)