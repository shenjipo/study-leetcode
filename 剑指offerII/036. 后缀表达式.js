/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = []
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] !== '+' && tokens[i] !== '-' && tokens[i] !== '/' && tokens[i] !== '*') {
            stack.push(Number(tokens[i]))
        } else {

            let [num1, num2] = [stack.pop(), stack.pop()]
            console.log(num1,num2,tokens[i])
            if (tokens[i] === '+') {
                stack.push(num1 + num2)
            } else if (tokens[i] === '-') {
                stack.push(num2 - num1)
            } else if (tokens[i] === '*') {
                stack.push(num1 * num2)
            } else {
                if ((num1 ^ num2) < 0) {
                    stack.push(Math.floor(-num2 / num1))
                } else {
                    stack.push(Math.floor(num2 / num1))
                }
            }
        }
    }

    return stack[stack.length - 1]
};
console.log(evalRPN(["4", "-2", "/", "2", "-3", "-", "-"]))
