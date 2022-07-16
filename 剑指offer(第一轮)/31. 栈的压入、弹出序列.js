/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    if (pushed.length <= 1) {
        return true
    }

    let [temp1, temp2] = [[], []]
    temp1.push(pushed.shift())
    while (temp1.length !== 0) {
        while (temp1[temp1.length - 1] !== popped[0] && pushed.length !== 0) {

            temp1.push(pushed.shift())
        }
        while (temp1.length !== 0 && temp1[temp1.length - 1] === popped[0]) {

            temp1.pop()
            popped.shift()
        }
    }

    if (popped.length === 0) {
        return true
    } else {
        return false
    }
};
console.log(validateStackSequences([0], [0]))