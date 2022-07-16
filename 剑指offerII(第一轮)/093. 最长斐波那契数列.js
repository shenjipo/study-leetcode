/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
    let len = arr.length
    let dp = new Array(len).fill(0).map(item => {
        return new Array(len).fill(0)
    })
    let map = new Map()
    for (let i = 0; i < len; i++) {
        map.set(arr[i], i)
    }
    let ans = 0
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            let temp = arr[i] - arr[j]
            if (map.has(arr[i] - arr[j]) && map.get(temp) < j) {
                dp[i][j] = dp[j][map.get(temp)] + 1
            } else {
                dp[i][j] = 2
            }
            ans = Math.max(ans, dp[i][j])
        }
    }
    return ans > 2 ? ans : 0
};
