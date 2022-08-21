function Person(name) {
    this.name = name
}

Person.prototype.sayName = function () {
    console.log(this.name)
}

function Student(school, name) {
    this.school = school
    Person.call(this, name)

}

Student.prototype.saySchool = function () {
    console.log(this.school)
}

Student.prototype.__proto__ = Person.prototype

let s = new Student('hdu', 'wang')
s.sayName()
