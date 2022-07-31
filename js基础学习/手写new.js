function Person(name) {
    this.name = name
}

Person.prototype.sayName = function () {
    console.log(this.name)
}

function myNew() {
    let constructor = Array.prototype.shift.call(arguments)
    let newObj = {}
    constructor.call(newObj, ...arguments)
    newObj.__proto__ = constructor.prototype
    return newObj
}

let p = myNew(Person, 'wang')
console.log(p.sayName())