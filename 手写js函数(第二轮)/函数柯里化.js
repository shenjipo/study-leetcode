function add(a, b, c) {
    console
    return a + b + c
}

function curry(fn, ...args) {
    if (args.length >= fn.length) {
        return fn(...args)
    } else {
        return function (...args2) {
            return curry(fn, ...args, ...args2)
        }
    }

}

const newAdd = curry(add)
console.log(newAdd(1)(2)(3))
console.log(newAdd(1, 2)(3))