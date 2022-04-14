/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length === 1) {
        return lists[0]
    }
    const merge = (head1, head2) => {
        let head = new ListNode(-1)
        let temp = head
        while (head1 && head2) {
            if (head1.val < head2.val) {
                temp.next = head1
                head1 = head1.next
            } else {
                temp.next = head2
                head2 = head2.next
            }
            temp = temp.next
        }
        while (head1) {
            temp.next = head1
            head1 = head1.next
            temp = temp.next
        }
        while (head2) {
            temp.next = head2
            head2 = head2.next
            temp = temp.next
        }
        return head.next
    }
    let res = null
    for (let i = 1; i < lists.length; i++) {
        res = merge(lists[i - 1], lists[i])
    }
    return res
};
