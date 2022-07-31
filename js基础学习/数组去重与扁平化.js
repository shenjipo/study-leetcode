let nums = [1, 2, 2, 3, 3, 4]
let ans = nums.reduce((pre, cur) => {
    pre.indexOf(cur) === -1 && pre.push(cur)
    return pre
}, [])
console.log(ans)

nums = [[1, 2, 3], [4, [5, 6]], 7]

function myFlat(arr) {
    return arr.reduce((pre, cur) => {
        if (Array.isArray(cur)) {
            pre.push(...myFlat(cur))
        } else {
            pre.push(cur)
        }
        return pre
    }, [])
}

ans = myFlat(nums)
console.log(ans)


