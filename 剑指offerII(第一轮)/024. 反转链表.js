/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let [curr, next] = [null, head]
    while (next) {
        let temp = next.next
        next.next = curr
        curr = next
        next = temp
    }
    return curr
};
