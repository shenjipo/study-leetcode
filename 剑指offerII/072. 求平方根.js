/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let [left, right] = [0, x / 2 + 1]
    while (left <= right) {
        let middle = (left + right) >> 1
        if (middle * middle === x) {
            return middle
        } else if (middle * middle < x) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }

    return right
};
console.log(mySqrt(10))
