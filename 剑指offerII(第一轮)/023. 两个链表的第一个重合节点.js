/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let [lenA, lenB] = [0, 0]
    let [nodeA, nodeB] = [new ListNode(0,headA), new ListNode(0,headB)]
    while (nodeA) {
        lenA++
        nodeA = nodeA.next
    }
    while (nodeB) {
        lenB++
        nodeB = nodeB.next
    }
    nodeA = new ListNode(0,headA)
    nodeB = new ListNode(0,headB)
    let cha = Math.abs(lenA - lenB)
    if (lenA > lenB) {
        while (cha--) {
            nodeA = nodeA.next
        }
    } else {
        while (cha--) {
            nodeB = nodeB.next
        }
    }
    while (nodeA && nodeB && nodeA.next !== nodeB.next) {
        nodeA = nodeA.next
        nodeB = nodeB.next
    }
    if(nodeA.next === nodeB.next){
        return nodeA.next
    }else {
        return null
    }
};
