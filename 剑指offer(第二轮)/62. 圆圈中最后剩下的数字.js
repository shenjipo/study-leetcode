/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
    let ans = []
    for (let i = 0; i < n; i++) {
        ans.push(i)
    }

    while (ans.length > 1) {
        if (m <= ans.length) {
            ans = [...ans.slice(m), ...ans.slice(0, m - 1)]
        } else {
            let index = m % ans.length
            if (index === 0) {
                ans = ans.slice(0, ans.length - 1)
            } else {
                ans = [...ans.slice(index), ...ans.slice(0, index - 1)]
            }
        }
        console.log(ans.length)
    }

    return ans[0]

};
console.log(lastRemaining(70866, 116922))
