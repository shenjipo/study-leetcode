function dijkstraLeetCode743(map, dis, visited, n) {
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
            if (map[node]?.[j] >= 0 && visited[j] === 1) {
                dis[j] = Math.min(dis[j], dis[node] + map[node]?.[j])
            }
        }
    }
}

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 * LeetCode 743
 */

var networkDelayTime = function (times, n, k) {
    let map = new Map()
    for (const [f, t, w] of times) {
        map[f - 1] = map[f - 1] || {}
        map[f - 1][t - 1] = w;
    }
    let dis = new Array(n).fill(Infinity);
    let visited = new Array(n).fill(0);
    dis[k - 1] = 0;
    dijkstraLeetCode743(map, dis, visited, n);

    let ans = Math.max(...dis)
    return ans === Infinity ? -1 : ans
};


