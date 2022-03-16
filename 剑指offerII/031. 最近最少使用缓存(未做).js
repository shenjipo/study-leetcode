function myNode(value, next, pre) {
    this.value = value
    this.next = next
    this.pre = pre
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.maxSize = capacity
    this.mp = new Map()
    this.head = new Node(0, null, null)
    this.tail = new Node(0, null, null)
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {

};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    //首先判断该元素是否已经在链表中
    if (this.mp.has(key)) {//在

    } else {//不在
        //判断是否超出了容量大小
        if (this.mp.size < this.maxSize) {
            let newNode = new myNode(value, null, null)
            this.mp[key] = newNode
            newNode.next = this.tail
            if (this.tail.pre) {
                let pre = this.tail.pre
                this.tail.pre = newNode
                pre.next = newNode
                newNode.pre = pre
            } else {
                this.head.next = newNode
            }

        } else {

        }
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
