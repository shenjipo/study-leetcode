// 修改箭头函数的父函数this
function myTest1() {
    let obj = {
        age: 24,
        increaseAge: function () {
            this.age++
            console.log(this.age)
        },
        decreaseAge: () => {
            this.age--
            console.log(this.age)
        }
    }

    console.log(obj.age)
    obj.increaseAge()
    obj.decreaseAge()
}

function changeAge(callback) {
    callback && callback()
}

// 模拟this绑定丢失
function test2() {
    this.age = 30
    let obj = {
        age: 24,
        increaseAge: function () {
            this.age++
            console.log(this.age)
        },
        decreaseAge: () => {
            this.age--
            console.log(this.age)
        }
    }
    changeAge(obj.increaseAge.bind(obj))
    changeAge(obj.decreaseAge)
}


test2()