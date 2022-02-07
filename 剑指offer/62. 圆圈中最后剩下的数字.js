/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
    let res = 0;
    for (let i = 2; i <= n; i++) {
        res = (res + m) % i;
    }
    return res;

};
//https://blog.csdn.net/u011500062/article/details/72855826
console.log(lastRemaining(70866, 116922))