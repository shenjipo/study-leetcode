/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
    const calc = (a, b) => {
        let t1 = parseInt(a.split(':')[0]) * 60 + parseInt(a.split(':')[1])
        let t2 = parseInt(b.split(':')[0]) * 60 + parseInt(b.split(':')[1])
        return t1 - t2
    }
    let ans = Math.pow(2, 31)
    timePoints.sort((a, b) => {
        return calc(a, b)
    })
    for (let i = 0; i < timePoints.length - 2; i++) {
        let [a, b] = [timePoints[i], timePoints[i + 1]]
        ans = Math.min(Math.abs(calc(a, b)), ans)
    }
    let [a, b] = [timePoints[0], timePoints[timePoints.length - 1]]
    let t1 = parseInt(a.split(':')[0]) * 60 + parseInt(a.split(':')[1])
    let t2 = parseInt(b.split(':')[0]) * 60 + parseInt(b.split(':')[1])
    ans = Math.min(ans, 1440 - t2 + t1)

    return ans

};
findMinDifference(["00:00", "23:59", "00:00"])