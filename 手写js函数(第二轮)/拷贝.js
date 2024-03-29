function shallowClone(obj) {
    let cloneObj = {}
    for (let item in obj) {
        cloneObj[item] = obj[item]
    }
    return cloneObj
}

function deepClone(obj) {
    if (obj === null) {
        return obj
    }
    if (typeof obj !== 'object') {
        return obj
    }
    let cloneObj = Array.isArray(obj) ? [] : {}
    for (let item in obj) {
        cloneObj[item] = deepClone(obj[item])
    }
    return cloneObj
}

// 声明person
let person = {
    name: "张三",
    hobbies: {
        name: '李四',
        children: ['1', '2']
    }
}

//参考 https://juejin.cn/post/7029918376520581151#heading-0
let p1 = deepClone(person)
console.log(p1)
p1.name = 'wang'
p1.hobbies.children[0] = '5555'
console.log(p1)
console.log(person)
