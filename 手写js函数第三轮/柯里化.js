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
let flag = sumCurry(3, 4)
console.log(flag)

