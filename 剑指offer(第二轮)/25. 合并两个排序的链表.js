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
    let newHead = new ListNode(0)
    let [node1, node2] = [l1, l2]
    let node = newHead
    while (node1 && node2) {
        if (node1.val < node2.val) {
            node.next = new ListNode(node1.val)
            node = node.next
            node1 = node1.next
        } else {
            node.next = new ListNode(node2.val)
            node = node.next
            node2 = node2.next
        }
    }
    while (node1) {
        node.next = new ListNode(node1.val)
        node = node.next
        node1 = node1.next
    }
    while (node2) {
        node.next = new ListNode(node2.val)
        node = node.next
        node2 = node2.next
    }
    return newHead.next
};
