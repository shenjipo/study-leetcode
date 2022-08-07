let value = {
    name: 'wang'
}
let vm = new Proxy(value, {
    set(target, p, value, receiver) {
        console.log(target, p, value, receiver)
        target[p] = value
    }
})
vm.name = 'xing'
console.log(vm)