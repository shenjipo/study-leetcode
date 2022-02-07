/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let stack = []
    while (head) {
        stack.push(head.val)
        head = head.next
    }

    if (stack.length === 0) {
        return null
    }

    let len = stack.length
    let newhead = new ListNode(stack[len - 1])
    let temp = newhead
    for (let i = len - 2; i > -1; i--) {
        temp.next = new ListNode(stack[i])
        temp = temp.next
    }
    return newhead
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList2 = function(head) {
    let cur = head
    let pre = null

    while(cur){
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
};