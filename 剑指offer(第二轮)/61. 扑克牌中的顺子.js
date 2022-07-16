/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
    nums.sort((a, b) => {
        return a - b
    })
    let count = nums.filter(item => {
        return item === 0
    }).length
    let arr = nums.filter(item => {
        return item !== 0
    })
    let number = 0
    for (let i = 1; i < arr.length; i++) {
        let error = arr[i] - arr[i - 1]
        if (error === 1) {
            continue
        } else if (error === 0) {
            return false
        } else {
            count -= (error - 1)
        }
    }
    return count === 0
};
isStraight([0, 0, 1, 2, 5])
