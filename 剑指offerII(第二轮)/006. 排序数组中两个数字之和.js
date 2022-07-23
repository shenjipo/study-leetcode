/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let [left, right] = [0, numbers.length - 1]
    while (left < right) {
        if ((numbers[left] + numbers[right]) === target) {
            return [left, right]
        } else if ((numbers[left] + numbers[right]) > target) {
            right--
        } else {
            left++
        }
    }
};