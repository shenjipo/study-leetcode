Array.prototype._map = function (callback) {
    if (typeof callback === 'function') {
        return this.reduce((prev, item, index, arr) => {
            prev.push(callback(item, index, arr))
            return prev
        }, [])
    } else {
        console.log(new Error('callback is not function'))
    }
}

let val = [1, 5, 6]._map(item => item + 1)
console.log(val);  // [2, 6, 7]



