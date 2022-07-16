/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function (str) {
    str = str.trim()

    let isNumber = /\d/
    let reg = false
    if (str.length < 1) {
        return 0
    }
    if (str[0] === '-' || str[0] === '+') {
        if (!isNumber.test(str[1])) {
            return 0
        }
    } else if (!isNumber.test(str[0])) {
        return 0
    }

    let nums = []
    let len = str.length
    for (let i = 0; i < len; i++) {
        if (nums.length === 0 && str[i] === '-') {
            reg = true
            continue
        } else if (nums.length === 0 && str[i] === '+') {
            continue
        }
        if (isNumber.test(str[i])) {
            nums.push(str[i])
        } else {
            break
        }
    }

    let res = 0
    for (let i = nums.length - 1; i > -1; i--) {
        res += nums[i] * 10 ** (nums.length - 1 - i)
    }
    const [MIN, MAX] = [-(2 ** 31), 2 ** 31 - 1];
    // 若是负数，判断-res和MIN的大小
    // 若是证书，判断res和MAX的大小
    return reg ? (-res < MIN ? MIN : -res) : res > MAX ? MAX : res;
};