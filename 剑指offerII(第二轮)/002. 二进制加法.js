/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let ans = []
    let carry = 0
    let index = 0
    let reverse_a = a.split('').reverse().map(item => parseInt(item))
    let reverse_b = b.split('').reverse().map(item => parseInt(item))
    while (index < a.length && index < b.length) {
        ans.push((reverse_a[index] ^ reverse_b[index]) ^ carry)
        carry = (reverse_a[index] & reverse_b[index]) || (reverse_a[index] & carry) || (carry & reverse_b[index])
        index++
    }
    while (index < a.length) {
        ans.push(reverse_a[index] ^ carry)
        carry = reverse_a[index] & carry
        index++
    }
    while (index < b.length) {
        ans.push(reverse_b[index] ^ carry)
        carry = reverse_b[index] & carry
        index++
    }

    if (carry) {
        ans.push(1)
    }
    ans = ans.reverse().join('')

    return ans
};
addBinary('11', '10')