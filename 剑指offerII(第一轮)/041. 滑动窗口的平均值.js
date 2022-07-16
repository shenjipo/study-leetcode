/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
    this.size = size
    this.queue = []
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
    if (this.queue.length < this.size) {
        this.queue.push(val)
    } else {
        this.queue.shift()
        this.queue.push(val)
    }
    return this.queue.reduce((pre, curr) => {
        return pre + curr
    }) / this.queue.length
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
