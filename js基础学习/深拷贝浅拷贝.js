let obj = {
    name: 'wang',
    age: 24,
    hobbies: ['table', 'play']
}

function shallowCopy(obj) {
    if (typeof obj !== "object") return obj
    let newObj = Array.isArray(obj) ? [] : {}
    Object.keys(obj).forEach(key => {
        newObj[key] = obj[key]
    })
    return newObj
}

function deepCopy(obj) {
    if (typeof obj !== 'object') return obj
    let newObj = Array.isArray(obj) ? [] : {}
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object') {
            newObj[key] = deepCopy(obj[key])
        } else {
            newObj[key] = obj[key]
        }
    })
    return newObj
}

let deepObj = deepCopy(obj)
console.log(deepObj)
deepObj.hobbies.push(1)
obj.name = 'xing'
console.log(obj)
console.log(deepObj)