function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.sayName = function () {
    console.log(this.name)
}

function Student(name, age, school) {
    Person.call(this, name, age)
    this.school = school
}

Student.prototype.saySchool = function () {
    console.log(this.school)
}
Student.prototype.__proto__ = Person.prototype

let s1 = new Student('wang', 24, 'hdu')
console.log(s1)
s1.sayName()
s1.saySchool()