function Person(name) {
    this.name = name
}

Person.prototype.sayName = function () {
    console.log(this.name)
}

function Factory() {
    const fn = [].shift.call(arguments)
    let obj = {}
    obj.__proto__ = fn.prototype
    // 执行函数的构造函数，并且让this指向新的实例对象
    fn.prototype.constructor.call(obj, ...arguments)
    return obj
}

let p = Factory(Person, 'wang')
console.log(p)
p.sayName()

