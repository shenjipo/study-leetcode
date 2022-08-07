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
var mergeKLists = function(lists) {
    if(!lists.length) return null

    const merge = (headA, headB) => {
        let ansNode = new ListNode(0, null)
        let cur = ansNode
        while (headA && headB) {
            if (headA.val < headB.val) {
                let nextNode = new ListNode(headA.val, null);
                cur.next = nextNode
                cur = cur.next
                headA = headA.next
            } else {
                let nextNode = new ListNode(headB.val, null);
                cur.next = nextNode
                cur = cur.next
                headB = headB.next
            }
        }
        while (headA) {
            let nextNode = new ListNode(headA.val, null);
            cur.next = nextNode
            cur = cur.next
            headA = headA.next
        }
        while (headB) {
            let nextNode = new ListNode(headB.val, null);
            cur.next = nextNode
            cur = cur.next
            headB = headB.next
        }
        return ansNode.next
    }

    const past = (nodes) => {
        if (nodes.length > 2) {
            let partition = parseInt(nodes.length / 2)
            let nodeA = past(nodes.slice(0, partition))
            let nodeB = past(nodes.slice(partition))
            return merge(nodeA, nodeB)
        } else if (nodes.length === 2) {
            return merge(nodes[0], nodes[1])
        } else if (nodes.length === 1) {
            return nodes[0]
        }
    }
    let ansNode = past(lists)

    return ansNode
};