var RecentCounter = function () {
    this.count = []
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    if (!this.count.length) {
        this.count.push(t)
        return 1
    } else {
        while (this.count.length && this.count[0] + 3000 < t) {
            this.count.shift()
        }
        this.count.push(t)
        return this.count.length
    }
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */