function prime(g, dis, visited, n) {
    for (let i = 0; i < n; i++) {
        let node = -1
        for (let k = 0; k < n; k++) {
            if (visited[k] === 0 && (node === -1 || dis[k] < dis[node])) {
                node = k
            }
        }
        if (node === -1) {
            return
        }
        visited[node] = 1
        for (let j = 0; j < n; j++) {
            if (g[node][j] >= 0 && visited[j] === 0) {
                dis[j] = Math.min(dis[j], g[node][j])
            }
        }
    }
}

/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
    let map = {}
    let n = points.length
    let g = new Array(n).fill(Infinity).map(item => {
        return new Array(n).fill(Infinity)
    })
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                g[i][j] = g[j][i] = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1])
            }
        }
    }

    let dis = new Array(n).fill(Infinity);
    dis[0] = 0;
    let visited = new Array(n).fill(0);
    prime(g, dis, visited, n)
    return dis.reduce((init, curr) => {
        return init + curr
    }, 0)
};
console.log(minCostConnectPoints([[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]]))
