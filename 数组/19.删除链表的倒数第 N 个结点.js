/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var removeNthFromEnd = function (head, n) {
    let ret = new ListNode(0, head)
    let slow = ret;
    let fast = ret;

    while (n--) {
        fast = fast.next
    }

    while (fast.next) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return ret.next
};

var createListNode = function (nums) {
    let len = nums.length;
    let head = new ListNode(nums[0])
    let temp = head;
    for (let i = 1; i < len; i++) {

        temp.next = new ListNode(nums[i])
        temp = temp.next
    }

    return head
}
let head = createListNode([1, 2])
var back = function (head) {
    while (head) {
        console.log(head.val)
        head = head.next
    }
}
back(removeNthFromEnd(head, 2))