/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
    timePoints.sort((a, b) => {
        return (Number(a.split(':')[0]) * 60 + Number(a.split(':')[1])) -
            (Number(b.split(':')[0]) * 60 + Number(b.split(':')[1]))
    })

    let ans = []
    for (let i = 0; i < timePoints.length - 1; i++) {
        let hour1 = Number(timePoints[i].split(':')[0])
        let min1 = Number(timePoints[i].split(':')[1])
        let hour2 = Number(timePoints[i + 1].split(':')[0])
        let min2 = Number(timePoints[i + 1].split(':')[1])
        ans.push((hour2 * 60 + min2) - (hour1 * 60 + min1))
    }
    let hour1 = Number(timePoints[0].split(':')[0])
    let min1 = Number(timePoints[0].split(':')[1])
    let hour2 = Number(timePoints[timePoints.length - 1].split(':')[0])
    let min2 = Number(timePoints[timePoints.length - 1].split(':')[1])
    ans.push(1440 - (hour2 * 60 + min2) + (hour1 * 60 + min1))
    console.log(ans)
    return Math.min(...ans)
};
console.log(findMinDifference(["12:01", "00:10", "00:01"]))

