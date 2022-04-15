/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let ret = new ListNode(-1)
    let node = ret
    let carry = 0
    while (l1 && l2) {
        let val = (l1.val + l2.val + carry) % 10
        carry = Math.floor((l1.val + l2.val + carry) / 10)
        let temp = new ListNode(val, null)
        node.next = temp
        node = node.next
        l1 = l1.next
        l2 = l2.next
    }
    while (l1) {
        let val = (l1.val + carry) % 10
        carry = Math.floor((l1.val + carry) / 10)
        let temp = new ListNode(val, null)
        node.next = temp
        node = node.next
        l1 = l1.next
    }
    while (l2) {
        let val = (l2.val + carry) % 10
        carry = Math.floor((l2.val + carry) / 10)
        let temp = new ListNode(val, null)
        node.next = temp
        node = node.next
        l2 = l2.next
    }
    if (carry) {
        let temp = new ListNode(carry, null)
        node.next = temp
        node = node.next
    }
    return ret.next
};
