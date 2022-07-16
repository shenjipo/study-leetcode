/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
    let stack = []
    let ans = []
    while (head) {
        stack.push(head.val)
        head = head.next;
    }
    while (stack.length) {
        ans.push(stack.pop())
    }
    return ans;
};