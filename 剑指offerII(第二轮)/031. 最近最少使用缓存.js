/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.maxLen = capacity
    this.cache = []
    this.mp = new Map()
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    let pos = this.cache.indexOf(key)
    if (pos !== -1) {
        let fw = this.cache.splice(pos, 1)
        this.cache.push(key)
        return this.mp.get(key)
    } else {
        return -1
    }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.cache.indexOf(key) !== -1) {
        let pos = this.cache.indexOf(key)
        this.cache.splice(pos, 1)
        this.cache.push(key)
        this.mp.set(key, value)
    } else {
        if (this.cache.length >= this.maxLen) {
            this.cache.shift()
        }
        this.cache.push(key)
        this.mp.set(key, value)
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */