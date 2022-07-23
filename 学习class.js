class Person {
    sex = 'male'

    constructor(name, age) {
        this.name = name
        this.age = age
        this.hobby = 'play'
    }

    static changeName() {
        this.say666()
    }

    static say666() {
        console.log(666)
    }

    sayName() {
        console.log(this.name)
    }
}

class Student extends Person {
    constructor(name, age, school) {
        super(name, age);

    }
    static stuSay666(){
        super.say666()
    }
}

let person = new Person('wang', 24)
// console.log(p1)
// Person.changeName()
let student = new Student('li si', 22, 'hdu')
// console.log(Student.__proto__ === Person)
// Student.say666()

// 第一条原型链
console.log(student.__proto__ === Student.prototype)
console.log(Student.prototype.__proto__ === Person.prototype)
console.log(Person.prototype.__proto__ === Object.prototype)
// 第二条原型链
console.log(Student.__proto__ === Person)
console.log(Person.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)