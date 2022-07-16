/**
 * Initialize your data structure here.
 */
var MapSum = function () {
    this.map = new Map()
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
    this.map.set(key, val)
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
    let ans = 0
    for (let [key, value] of this.map) {
        if (key.indexOf(prefix) === 0) {
            ans += value
        }
    }
    return ans
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
