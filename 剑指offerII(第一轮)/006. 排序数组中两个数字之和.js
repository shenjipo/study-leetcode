/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let [i, j] = [0, numbers.length - 1]
    while (i < j) {
        if (numbers[i] + numbers[j] === target) {
            return [i, j]
        } else if (numbers[i] + numbers[j] < target) {
            i++
        } else {
            j--
        }
    }
};
