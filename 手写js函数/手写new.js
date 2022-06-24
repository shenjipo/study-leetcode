function Person(name) {
    this.name = name
}

Person.prototype.sayName = function () {
    console.log(this.name)
}

function Factory() {
    let obj = new Object()
    let fn = Array.prototype.shift.call(arguments)

    obj.__proto__ = fn.prototype
    fn.apply(obj, arguments)
    return obj
}

let p = Factory(Person, 'wang')
console.log(p)
