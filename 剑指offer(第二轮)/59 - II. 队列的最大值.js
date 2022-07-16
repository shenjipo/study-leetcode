var MaxQueue = function () {
    this.queue = []
    this.dequeue = []
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
    if (this.dequeue.length) {
        return this.dequeue[0]
    } else {
        return -1
    }
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
    this.queue.push(value)
    while (this.dequeue.length && value > this.dequeue[this.dequeue.length - 1]) {
        this.dequeue.pop()
    }
    this.dequeue.push(value)
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
    if (!this.queue.length) return -1
    let popValue = this.queue.shift()
    if (popValue === this.dequeue[0]) {
        this.dequeue.shift()
    }
    return popValue
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */