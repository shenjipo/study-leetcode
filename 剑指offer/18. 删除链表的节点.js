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
    let ret = new ListNode(0, head)
    let temp = head
    let pre = ret
    while (temp.val !== val) {
        temp = temp.next
        pre = pre.next
    }

    pre.next = temp.next
    return ret.next
};