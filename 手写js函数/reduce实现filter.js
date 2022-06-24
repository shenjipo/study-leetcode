Array.prototype._map = function (callback) {
    if (typeof callback === 'function') {
        return this.reduce((prev, item, index, arr) => {
            callback(item, index, arr) ? prev.push(item) : prev
            return prev
        }, [])
    } else {
        console.log(new Error('callback is not function'))
    }
}

let val = [1, 5, 6]._map(item => item > 2)
console.log(val);  // [2, 6, 7]



