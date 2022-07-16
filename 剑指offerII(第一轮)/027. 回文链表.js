/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr = []
    while (head) {
        arr.push(head.val)
        head = head.next
    }
    let [i, j] = [0, arr.length - 1]
    while (i < j) {
        if (arr[i] !== arr[j]) {
            return false
        }
        i++
        j--
    }
    return true
};

var isPalindrome2 = function(head) {
    
};
