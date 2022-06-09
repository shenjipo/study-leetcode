/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    let node = head
    let mp = new Map()
    while (node) {
        mp.set(node, new Node(node.val, null))
        node = node.next
    }
    node = head
    while (node) {
        if (node.next) {
            mp.get(node).next = mp.get(node.next)
        }
        if (node.random) {
            mp.get(node).random = mp.get(node.random)
        }
        node = node.next
    }
    return mp.get(head)
};
