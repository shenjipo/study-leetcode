/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = []
    let i = 0
    while (i < tokens.length) {
        if (tokens[i] !== '+' && tokens[i] !== '-' && tokens[i] !== '*' && tokens[i] !== '/') {
            stack.push(parseInt(tokens[i]))
        } else {
            let [num2, num1] = [stack.pop(), stack.pop()]
            if (tokens[i] === '+') {
                stack.push(num1 + num2)
            } else if (tokens[i] === '-') {
                stack.push(num2 - num1)
            } else if (tokens[i] === '*') {
                stack.push(num1 * num2)
            } else {
                stack.push(parseInt(num1 / num2))
            }
        }
        i++
    }
    return stack[0]
};
evalRPN(["2", "1", "+", "3", "*"])