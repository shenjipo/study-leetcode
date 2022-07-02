/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
    let newHead = new ListNode(0)
    newHead.next = head
    let [pre, cur] = [newHead, head]
    while (cur.val !== val) {
        cur = cur.next
        pre = pre.next
    }
    pre.next = cur.next

    return newHead.next
};
