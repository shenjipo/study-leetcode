/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let temp = []
    while (head) {
        if (temp.includes(head)) return false
        temp.push(head)
        head = head.next
    }
    return true
};