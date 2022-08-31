// 1.class的继承
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    getAge() {
        return this.age
    }

    static say(content) {
        console.log(content)
    }
}

class Student extends Person {
    constructor(name, age, school) {
        super(name, age);
        this.school = school
    }
}

let s = new Student('wang', 24, 'hdu')
console.log(s.getAge())
Student.say('hello')
console.log(s.__proto__ === Student.prototype)
console.log(Student.prototype.__proto__ === Person.prototype)
console.log(Person.prototype.__proto__ === Object.prototype)


console.log(Student.__proto__ === Person)
console.log(Person.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__)