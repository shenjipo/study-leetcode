/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function (s) {
    let [dp, left, right] = [[], [], []]
    if (s[0] === '0') {
        left[0] = 0
        right[0] = count
    } else {
        left[0] = 0
        right[0] = count
    }
    for (let i = 1; i < s.length; i++) {
        if (dp[i] === '0') {
            left[i] = left[i - 1]
        } else {

        }
    }
};
minFlipsMonoIncr('00110')
