let arr = [1, 2, 3, 1, 1, 2, 3, 3, 4, 3, 4, 5]

let result = arr.reduce((prev, item, index, arr) => {
    !prev.includes(item) && prev.push(item);
    return prev
}, [])
console.log(result);  //[1, 2, 3, 4, 5]

