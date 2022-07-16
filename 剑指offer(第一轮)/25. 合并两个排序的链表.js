/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let ret = new ListNode(0, null)
    let temp = ret
    let a = l1
    let b = l2
    while (a && b) {
        if (a.val < b.val) {
            temp.next = a
            temp = temp.next
            a = a.next
        } else {
            temp.next = b
            temp = temp.next
            b = b.next
        }
    }
    while (a) {
        temp.next = a
        temp = temp.next
        a = a.next
    }
    while (b) {
        temp.next = b
        temp = temp.next
        b = b.next
    }
    return ret.next
};