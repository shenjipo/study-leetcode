/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
    let ret = new ListNode(0, head)
    let temp = ret
    let pre = ret
    while (n--) {
        temp = temp.next
    }
    while (temp.next) {
        temp = temp.next
        pre = pre.next
    }
    return pre.next
};