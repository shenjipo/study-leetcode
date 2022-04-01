/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.root = new Map()
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let parent = this.root
    let i = 0
    while (i < word.length) {
        if (parent.has(word.slice(i, i + 1))) {
            parent = parent.get(word.slice(i, i + 1))
        } else {
            let newNode = new Map()
            parent.set(word.slice(i, i + 1), newNode)
            parent = newNode
        }
    }
    parent.set('#')
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let curr = this.root
    let i = 0
    while (i < word.length) {
        if (curr.has(word.slice(i, i + 1))) {
            curr = curr.get(word.slice(i, i + 1))
            i++
        } else {
            return false
        }
    }
    return curr.has('#')
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let curr = this.root
    let i = 0
    while (i < word.length) {
        if (curr.has(word.slice(i, i + 1))) {
            curr = curr.get(word.slice(i, i + 1))
            i++
        } else {
            return false
        }
    }
    return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
