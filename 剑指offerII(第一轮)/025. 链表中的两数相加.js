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
    let [curr, next] = [null, l1]
    while (next) {
        let temp = next.next
        next.next = curr
        curr = next
        next = temp
    }
    let newL1 = curr
    curr = null
    next = l2
    while (next) {
        let temp = next.next
        next.next = curr
        curr = next
        next = temp
    }
    let newL2 = curr
    let [ans, carry] = [[], 0]
    while (newL1 && newL2) {
        ans.push((newL1.val + newL2.val + carry) % 10)
        carry = (newL1.val + newL2.val + carry) / 10
        newL1 = newL1.next
        newL2 = newL2.next

    }
    while (newL1) {
        ans.push((newL1.val + carry) % 10)
        carry = (newL1.val + carry) / 10
        newL1 = newL1.next
    }
    while (newL2) {
        ans.push((newL2.val + carry) % 10)
        carry = (newL2.val + carry) / 10
        newL2 = newL2.next
    }
    let ret = new ListNode(0, null)
    let pre = ret
    for (let i = ans.length - 1; i > -1; i--) {
        let curr = new ListNode(ans[i], null)
        pre.next = curr
    }
    return ret.next
};
