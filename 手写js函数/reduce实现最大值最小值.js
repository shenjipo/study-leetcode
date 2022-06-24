let arr = [1, 2, 3, 4, 5, 6]

console.log(arr.reduce((pre, curr, index, item) => {
    return Math.max(pre, curr)
}))
console.log(arr.reduce((pre, curr, index, item) => {
    return Math.min(pre, curr)
}))
