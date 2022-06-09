let arr = new Array(5).fill(0)
console.log(arr.__proto__ === Array.prototype)

arr.__proto__ = null

// Array.prototype = null

console.log(Array.prototype)

// console.log(Array.prototype.__proto__ === Object.prototype)
// console.log(Object.prototype.__proto__ === null)
//
//
//
// console.log(Array.__proto__ === Function.prototype)
// console.log(Function.prototype.__proto__ === Object.prototype)
//
//
// console.log(Object.__proto__ === Function.prototype)
