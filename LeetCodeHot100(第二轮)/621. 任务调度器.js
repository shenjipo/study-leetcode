var leastInterval = function (tasks, n) {
    if (n < 1) return tasks.length
    let mp = new Map()
    for (let task of tasks) {
        mp.set(task, mp.has(task) ? mp.get(task) + 1 : 1)
    }
    let count = Array.from(mp).map(item => item[1]).sort((a, b) => b - a)
    let maxCount = 0
    for (let i = 0; i < count.length; i++) {
        if (count[0] === count[i]) {
            maxCount++
        }
    }
    let sum = (count[0] - 1) * (n + 1) + maxCount
    console.log(sum)
    if (maxCount > n + 1) {
        return tasks.length
    } else {
        return sum
    }
}
var leastInterval2 = function (tasks, n) {
    if (n < 1) return tasks.length
    let map = new Map()
    for (let task of tasks) {
        map.set(task, map.has(task) ? map.get(task) + 1 : 1)
    }
    let counts = Array.from(map).map(item => item[1]).sort((a, b) => b - a)
    let maxCount = 0
    for (let count of counts) {
        if (count === counts[0]) maxCount++
        else break
    }
    let sum = (counts[0] - 1) * (n + 1) + maxCount;
    if (sum < tasks.length) {
        return tasks.length
    } else {
        return sum
    }
}


leastInterval(["A", "A", "A", "B", "B", "B", 'c', 'c', 'c'], 2)