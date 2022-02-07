/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let inputs = s.split(' ')
    let ans = []
    for (let i = inputs.length - 1; i > -1; i--) {
        if (inputs[i]) {
            ans.push(inputs[i])
        }

    }

    return ans
};

console.log(reverseWords('the sky is blue'))