/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })

    let ans = []
    for (let i = 0; i < intervals.length;) {
        let left = intervals[i][0]
        let right = intervals[i][1]
        let j = i + 1
        for (; j < intervals.length; j++) {
            if (intervals[j][0] > right) {
                break
            } else {
                right = Math.max(right, intervals[j][1])
            }
        }
        ans.push([left, right])
        i = j
    }
    return ans
};
console.log(merge([[1, 4], [0, 2], [3, 5]]))
