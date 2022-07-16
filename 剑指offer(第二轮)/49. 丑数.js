/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    let ugly = [1]
    let [i, j, k] = [0, 0, 0]
    let index = 1
    while (ugly.length <= n) {
        let temp = Math.min(ugly[i] * 2, ugly[j] * 3, ugly[k] * 5)
        ugly.push(temp)
        if (temp === ugly[i] * 2) i++
        if (temp === ugly[j] * 3) j++
        if (temp === ugly[k] * 5) k++
    }

    return ugly[n - 1]
};
nthUglyNumber(10)