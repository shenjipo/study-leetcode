const curry = (fn, ...args) => {
    if (args.length >= fn.length) {
        return fn(...args)
    } else {
        // return (..._args2) => curry(fn, ...args, ..._args2)
        return function curried(...args2) {
            return curry(fn, ...args, ...args2)
        }
    }
    curried.toString = function () {
        return fn.apply()
    }
}


// const add = curry(add1);
//
// console.log(add(1, 2, 3));
// console.log(add(1)(2)(3));
// console.log(add(1, 2)(3));
// console.log(add(1)(2, 3));


