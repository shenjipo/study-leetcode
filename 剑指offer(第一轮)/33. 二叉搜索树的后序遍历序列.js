/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
    if (postorder.length <= 1) {
        return true
    }
    let leftindex = 0
    let last = postorder.length - 1
    while (postorder[leftindex] < postorder[last]) {
        leftindex++
    }
    let res = postorder.slice(leftindex, last).every(x => x > postorder[last])
    if (res) {
        return verifyPostorder(postorder.slice(0, leftindex)) && verifyPostorder(postorder.slice(leftindex, last - 1))
    } else {
        return false
    }
};