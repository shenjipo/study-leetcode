function Class() {

}

Class.extend = function (props) {
  let newClass = function (...args) {
    if (this.init) {
      this.init.call(this, ...args)
    }
  }
  newClass.prototype.__proto__ = this.prototype
  for (let key of Object.keys(props)) {
    newClass.prototype[key] = props[key]
  }
  for (let key of Object.keys(this)) {
    if (key !== 'prototype' && key !== 'constructor') {
      newClass[key] = this[key]
    }
  }
  return newClass
}

const Person = Class.extend({
  init(name, age) {
    this.name = name
    this.age = age
  },
  sayName() {
    console.log(this.name)
  }
})

const Student = Person.extend({
  init(name, age, school) {
    this.school = school
    Person.prototype.init.call(this, name, age)
  },
  saySchool() {
    console.log(this.school)
  }
})

let stu = new Student('wang', 24, 'hdu')
console.log(stu)

