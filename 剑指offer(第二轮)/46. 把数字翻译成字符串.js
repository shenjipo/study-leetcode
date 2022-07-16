/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
    let numbers = num.toString().split('')
    if (numbers.length === 0 || numbers.length === 1) {
        return 1
    }
    let dp = [1]
    if (parseInt(numbers[0]) !== 0 && parseInt(numbers[0] + numbers[1]) < 26) {
        dp.push(2)
    } else {
        dp.push(1)
    }
    for (let i = 2; i < numbers.length; i++) {
        if (parseInt(numbers[i - 1]) !== 0 && parseInt(numbers[i - 1] + numbers[i]) < 26) {
            dp[i] = dp[i - 1] + dp[i - 2]

        } else {
            dp[i] = dp[i - 1]
        }
    }
    return dp[dp.length - 1]
};
