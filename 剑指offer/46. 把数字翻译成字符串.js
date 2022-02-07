/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
    let numbers = num.toString().split('')
    if (numbers.length === 0 || numbers.length === 1) {
        return 1
    }
    let dp = [1, 1]
    for (let i = 2; i < numbers.length; i++) {
        if (parseInt(numbers[i - 2]) !== 0 && parseInt(numbers[i - 2] + numbers[i - 1]) < 26) {
            dp[i] = dp[i - 1] + dp[i - 2]
        } else {
            dp[i] = dp[i - 1]
        }

    }
    return dp[dp.length - 1]
};
console.log(translateNum(12258))