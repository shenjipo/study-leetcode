
var longestValidParentheses2 = function (s) {
    let stack = [-1], ans = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i)
        } else {
            stack.pop();
            if (stack.length === 0) {
                console.log(stack, i)
                stack.push(i)
            } else {
                ans = Math.max(ans, i - stack[stack.length - 1])
            }
        }
    }
    return ans;
};


longestValidParentheses2(")()())")