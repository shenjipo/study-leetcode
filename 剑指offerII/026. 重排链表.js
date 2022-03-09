/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    //寻找链表总中间节点
    let [slow, fast] = [new ListNode(0,head), head]
    while (fast){
        if(!fast.next)
            break
        fast = fast.next.next
        slow = slow.next
    }
    //反转右侧链表
    let [curr, next] = [null, slow.next]
    slow.next = null
    while (next) {
        let temp = next.next
        next.next = curr
        curr = next
        next = temp
    }

    //拼接两条链表
    let [L1, L2] = [head, curr]
    while (L1) {
        let nextL1 = L1.next
        let nextL2 = L2.next
        L1.next = L2
        L2.next = nextL1
        L1 = nextL1
        L2 = nextL2
    }
    while (head.next) {
        head = head.next
    }
    head.next = L2
};
