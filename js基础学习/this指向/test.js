let me = {
    name: 'wang',
    sayName: function () {
        let say = () => {
            console.log(this.name)
        }
        say()
    }
}
me.sayName() //wang
me.sayName.call(null)
let a = {
    name: 'wang'
}
let b = {
    name: 'wang'
}
console.log(a == b)
