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
    if (!head) {
        let newNode =  new Node(insertVal, null)
        newNode.next = newNode
        return newNode
    }
    console.log(head.val)
    let newNode = new Node(insertVal, null)
    let [curr, pre] = [head.next, head]
    while (curr!==head) {
        if (curr.val < pre.val) {
            if (insertVal < curr.val || insertVal >= pre.val)
                break
        }
        if (curr.val > insertVal && pre.val <= insertVal) {
            break
        } else {
            curr = curr.next
            pre = pre.next
        }
    }
    console.log(curr.val,pre.val)
    pre.next = newNode
    newNode.next = curr
    return head
};
