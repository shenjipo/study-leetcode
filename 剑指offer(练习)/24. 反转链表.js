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
    let [pre, curr] = [null, head]
    while (curr) {
        let next = curr.next
        curr.next = pre
        pre = curr
        if(next === null){
            break
        }
        curr = next
    }
    return curr
};
