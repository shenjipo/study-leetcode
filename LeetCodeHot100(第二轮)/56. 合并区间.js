/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length === 1 || intervals.length === 0) return intervals
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })
    let ans = []
    for (let i = 0; i < intervals.length - 1;) {
        let currRight = intervals[i][1]
        let currLeft = intervals[i][0]
        while (i < intervals.length - 1 && intervals[++i][0] < currRight) {

            currRight = Math.max(currRight, intervals[i][1])
        }
        ans.push([currLeft, currRight])
        if (i === intervals.length - 1 && currRight < intervals[i][1]) {
            ans.push([intervals[i][0], intervals[i][1]])
        }
    }

    return ans
};
merge([[1, 3], [2, 6], [8, 10], [15, 18]])