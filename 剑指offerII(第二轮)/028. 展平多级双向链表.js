/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
    let arr = []
    let cur = head
    while (arr.length || cur) {
        if (cur.child) {
            arr.push(cur.next)
            cur.child.prev = cur
            cur.next = cur.child
            let temp = cur.child
            cur.child = null
            cur = temp
        } else if (cur.next) {
            cur = cur.next
        } else if (arr.length > 0) {
            let next = arr.pop()
            if (next !== null) {
                cur.next = next
                next.prev = cur
                cur = next
            }
        } else {
            cur = cur.next
        }
    }
    return head
};