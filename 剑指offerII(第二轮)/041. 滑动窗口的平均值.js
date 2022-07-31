/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
    this.nums = []
    this.maxLen = size
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
    if (this.nums.length >= this.maxLen) {
        this.nums.shift()
    }
    this.nums.push(val)
    return this.nums.reduce((pre, cur) => pre + cur) / this.nums.length
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */