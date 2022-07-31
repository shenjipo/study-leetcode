/*
* 六种基本数据类型 null undefined string number boolean symbol
* */

// 注意点
console.log(1 + null) // null会转成0
console.log(1 + undefined) //undefined 会转成NaN

console.log(null === null)
console.log(undefined === undefined)
console.log(false == null)
console.log(false == undefined)
console.log(NaN === NaN)