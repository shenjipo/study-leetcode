// 1.实现filter
Array.prototype.myFilter = function (callback) {
    return this.reduce((pre, cur) => {
        if (callback(cur)) {
            pre.push(cur)
        }
        return pre
    }, [])
}
console.log([1, 2, 3, 4, 5, 6].myFilter(item => item > 3))

// 2.实现map
Array.prototype.myMap = function (callback) {
    return this.reduce((pre, cur) => {
        pre.push(callback(cur))
        return pre
    }, [])
}
console.log([1, 2, 3, 4, 5, 6].myMap(item => item * 3))

// 3.实现最大值(最小值)
Array.prototype.myMax = function () {
    return this.reduce((pre, cur) => {
        return Math.max(pre, cur)
    })
}
console.log([1, 2, 3, 4, 5, 6].myMax())

// 4.实现数组去重(最小值)
Array.prototype.numberFilter = function () {
    return this.reduce((pre, cur) => {
        pre.indexOf(cur) === -1 && pre.push(cur)
        return pre
    }, [])
}
console.log([1, 2, 3, 4, 5, 6, 1].numberFilter())

// 5.实现数组扁平化
function numberDelayering(nums) {
    return nums.reduce((pre, cur) => {
        if (Array.isArray(cur)) {
            pre.push(...numberDelayering(cur))
        } else {
            pre.push(cur)
        }
        return pre
    }, [])
}

console.log(numberDelayering([1, 2, [3, 4], [[5, [7, 8, 'a']]]]))


