/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var divide = function (a, b) {
    const max = Math.pow(2, 31) - 1
    const min = -Math.pow(2, 31)
    if (a === min && b === -1) {
        return max
    }
    const sign = ((a > 0) ^ (b > 0)) === 1 ? -1 : 1
    if (a > 0) {
        a = -a
    }
    if (b > 0) {
        b = -b
    }
    let count = 0
    while (a <= b) {
        a -= b
        count++
    }

    return sign === -1 ? -count : count
};

var divide2 = function (a, b) {
    const max = Math.pow(2, 31) - 1
    const min = -Math.pow(2, 31)
    if (a === min && b === -1) {
        return max
    }
    const sign = ((a > 0) ^ (b > 0)) === 1 ? -1 : 1
    if (a > 0) {
        a = -a
    }
    if (b > 0) {
        b = -b
    }
    const calc = (x, y) => {
        let temp_ans = 1
        while (x < (y << 1) && y << 1 < 0) {
            y = y << 1
            temp_ans = temp_ans << 1
        }
        return [temp_ans, y]
    }
    let ans = 0
    while (a < b) {
        let [temp_ans, y] = calc(a, b)
        a -= y
        ans += temp_ans
    }

    ans = (sign === 1 ? ans : -ans)
    if (ans >= Math.pow(2, 31)) {
        return ans - 1
    } else {
        return ans
    }
};
