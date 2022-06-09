/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let indgree = new Array(numCourses).fill(0)
    let adj = new Array(numCourses).fill(0).map(item => {
        return new Array(0)
    })
    for (let item of prerequisites) {
        indgree[item[0]]++
        adj[item[1]].push(item[0])
    }
    let queue = []
    for (let i = 0; i < indgree.length; i++) {
        if (indgree[i] === 0) {
            queue.push(i)
        }
    }
    while (queue.length) {
        let node = queue.shift()
        numCourses--
        for (let cour of adj[node]) {
            if (--indgree[cour] === 0) {
                queue.push(cour)
            }
        }
    }
    return numCourses === 0
};
