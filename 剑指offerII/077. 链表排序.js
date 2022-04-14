/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 数组排序
var sortList = function (head) {
    if (head === null || head.next === null) {
        return head
    }
    let arr = []
    while (head) {
        arr.push(head)
        head = head.next
    }
    arr.sort((a, b) => {
        return a.val - b.val
    })
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i].next = arr[i + 1]
    }
    arr[arr.length - 1] = null
    return arr[0]
};

// 链表归并排序
function sortList(head) {
    if (head === null || head.next === null) {
        return head
    }
    let [slow, fast] = [head, head.next]
    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }
    let arr2left = slow.next
    slow.next = null
    let left = sortList(head)
    let right = sortList(arr2left)
    let res = new ListNode(-1)
    let temp = res
    while (left && right) {
        if (left.val < right.val) {
            temp.next = left
            left = left.next
        } else {
            temp.next = right
            right = right.next
        }
        temp = temp.next
    }
    temp.next = left === null ? right : left
    return res.next
}

function arrayMerge(head) {
    
}

