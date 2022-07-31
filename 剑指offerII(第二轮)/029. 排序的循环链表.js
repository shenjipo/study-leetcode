/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function (head, insertVal) {
    let newNode = new Node(insertVal, null)
    let [pre, cur] = [head, head.next]
    if (!head) return newNode
    while (cur !== head) {
        if (cur.val < pre.val) {
            if (insertVal >= pre.val || insertVal <= cur.val) {
                break
            }
        } else if (cur.val > insertVal && pre.val <= insertVal) {
            break
        }
        cur = cur.next
        pre = pre.next
    }
    pre.next = newNode
    newNode.next = cur
    return head
};