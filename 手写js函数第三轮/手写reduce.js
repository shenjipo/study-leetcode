// 实现filter
let test = [5, 9, 1, 3, 4, 6, 8]
Array.prototype.myFilter = function (fn) {
    return this.reduce((pre, cur) => {
        fn(cur) && pre.push(cur)
        return pre
    }, [])
}
Array.prototype.myMap = function (fn) {
    return this.reduce((pre, cur) => {
        pre.push(fn(cur))
        return pre
    }, [])
}


console.log(test.myMap((item) => item + 5))

function flat(arr) {
    return arr.reduce((pre, cur) => {
        if (Array.isArray(cur)) {
            pre.push(...flat(cur))
        } else {
            pre.push(cur)
        }
        return pre
    }, [])
}

Array.prototype.myReduce = function (callback, initVal) {
    let pre
    let arr = this
    if (!initVal) {
        pre = arr[0]
        arr.shift()
    } else {
        pre = initVal
    }
    for (let i = 0; i < arr.length; i++) {
        pre = callback(pre, arr[i], i, this)
    }
    return pre
}
let nums = [1, 2, 3]
console.log(nums.myReduce((pre, cur) => {
    return pre + cur
}, 1))
console.log(flat([1, 2, [3, 4], [[5, [7, 8, 'a']]]]))