/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    let stack = []
    let curr = head
    while (stack.length || curr) {
        if (curr.child) {
            stack.push(curr.next)
            let temp = curr.child
            curr.child.prev = curr
            curr.next = curr.child
            curr.child = null
            curr = temp
        } else if (curr.next) {
            curr = curr.next
        } else if(stack.length>0){
            let node = stack.pop()
            if(node!==null){
                curr.next = node
                node.prev = curr
                curr = node
            }
        }else{
            curr = curr.next
        }
    }

    return head
};
