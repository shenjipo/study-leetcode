let arr = [1, 2, '3js', [4, 5, [6], [7, 8, [9, 10, 11], null, 'abc'], {age: 58}, [13, 14]], '[]', null];

function f(arr) {
    if (Array.isArray(arr)) {
        return arr.reduce((pre, curr, index, array) => {
            return Array.isArray(curr) ? pre.concat(f(curr)) : pre.concat(curr)
        }, [])
    } else {
        throw new Error("arr+ ' is not array'")
    }
}

