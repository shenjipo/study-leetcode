function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.sayName = function () {
    console.log(this.name)
}

function myCall(fn, obj, ...args) {
    obj.fn = fn
    return obj.fn(...args)
}


console.log(myCall(f, obj))

function myNew() {
    let obj = new Object()
    let fn = Array.prototype.shift.call(arguments)
    obj.__proto__ = fn.prototype
    fn.call(obj, ...arguments)
    console.log(obj)
    return obj
}

let p = myNew(Person, 'wang', 24)
console.log(p)