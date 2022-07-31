/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let arr = []
    while (head) {
        arr.push(head)
        head = head.next
    }
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i].val !== arr[arr.length - 1 - i].val) {
            return false
        }
    }
    return true
};