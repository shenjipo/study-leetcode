function sum(n1, n2, n3, n4) {
    return n1 + n2 + n3 + n4
}

function curry(fn, ...args) {
    let [originFnLen, currFnLen] = [fn.length, args.length]
    if (currFnLen === originFnLen) {
        return fn(...args)
    } else {
        return function (...args2) {
            return curry(fn, ...args, ...args2)
        }
    }
}

let sumCurry = curry(sum, 1, 2)
let flag = sumCurry(3)(4)
console.log(flag)

function curry2(fn, ...args) {
    let len = fn.length
    return function (...otherArgs) {
        let currArgs = [...args, ...otherArgs]
        if (currArgs.length === len) {
            return fn.call(this, ...currArgs)
        } else {
            return curry(fn, ...currArgs)
        }
    }
}

function add(a, b, c, d) {
    return a + b + c + d
}

let curryAdd = curry(add, 1, 2)
console.log(curryAdd(4)(3))
// console.log(curryAdd(3, 4))