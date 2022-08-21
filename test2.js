let obj = {
    name: 'wang',
    f1: function () {
        console.log(this.name)
    },
    f2: function () {
        const a = () => {
            console.log(this.name)
        }
        a()
    },
    f3: () => {
        console.log(this.name)
    }

}
obj.f1()
obj.f2()
var name = 'xing'
obj.f3()
