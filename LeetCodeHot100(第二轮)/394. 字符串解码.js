/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let ans = ''
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ']') {
            let temp = ''
            while (stack.length && stack[stack.length - 1] !== '[') {
                temp = stack.pop() + temp
            }
            stack.pop()
            let count = parseInt(stack.pop())
            while (stack.length && stack[stack.length - 1] >= '0' && stack[stack.length - 1] <= '9') {
                count = stack.pop() + count
            }
            count = parseInt(count)
            let temp_ans = ''
            while (count--) {
                temp_ans = temp_ans + temp
            }
            stack.push(temp_ans)
        } else {
            stack.push(s[i])
        }
    }

    return stack.join('')
};
decodeString("100[leetcode]")