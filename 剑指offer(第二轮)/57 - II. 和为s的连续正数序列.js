/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
    let [left, right] = [1, 1]
    let ans = []
    let temp = left
    while (left <= right && right < (target / 2) + 1) {
        if (temp === target) {
            let save = []
            for (let i = left; i <= right; i++) {
                save.push(i)
            }
            ans.push([...save])
            right++
            temp += right
        } else if (temp < target) {
            right++
            temp += right
        } else {
            temp -= left
            left++
        }
    }
    return ans
};
findContinuousSequence(9)