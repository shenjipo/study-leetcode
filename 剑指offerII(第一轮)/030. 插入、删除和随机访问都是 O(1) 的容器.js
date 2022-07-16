/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
    this.set = []
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.set.indexOf(val) !== -1) {
        return false
    } else {
        this.set.push(val)
        return true
    }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (this.set.indexOf(val) === -1) {
        return false
    } else {
        this.set.splice(this.set.indexOf(val), 1)
        return true
    }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    let pos = Math.floor(Math.random() * this.set.length)
    return this.set[pos]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
