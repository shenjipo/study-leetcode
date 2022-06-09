/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack = []
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push({
        val: x,
        min: this.stack.length ? Math.min(x, this.stack[this.stack.length - 1].min) : x
    })
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (this.stack.length) {
        return this.stack[this.stack.length - 1].x
    } else {
        return -1
    }
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    return this.stack[this.stack.length - 1].min
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
