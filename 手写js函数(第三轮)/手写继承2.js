function Person(name, age) {
    this.name = name
    this.age = age

}

Person.say = (content) => {
    console.log(content)
}
Person.prototype.getAge = function () {
    return this.age
}

function Student(name, age, shcool) {
    Person.call(this, name, age)
    this.school = shcool
}

Student.prototype.__proto__ = Person.prototype
Student.__proto__ = Person
let s = new Student('wang', 24, 'hdu')
console.log(s)
console.log(s.getAge())
Student.say('hello')
