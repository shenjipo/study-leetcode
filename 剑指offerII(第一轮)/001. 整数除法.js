/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var divide = function (a, b) {
    const Max = Math.pow(2, 31) - 1
    const Min = -Math.pow(2, 31)

    if (a === Min && b === -1) {
        return Max
    }
    // 异或 相同为0 相异为1
    const sign = (a > 0) ^ (b > 0) ? -1 : 1
    let res = 0

    if (a > 0) a = -a
    if (b > 0) b = -b

    while (a >= b) {
        a -= b
        res++

    }

    // bug 修复：因为不能使用乘号，所以将乘号换成三目运算符
    return sign === 1 ? res : -res

};

var divide2 = function (a, b) {
    if (b === 1 && a <= Math.pow(2, 31)) {
        return a
    } else if (b === 1 && a > Math.pow(2, 31)) {
        return Math.pow(2, 31) - 1
    } else if (b === -1 && a === -Math.pow(2, 31)) {
        return Math.pow(2, 31) - 1
    }
    let ans = 0
    let flag = (a > 0) ^ (b > 0) ? -1 : 1
    a = Math.abs(a)
    b = Math.abs(b)

    const calc = (x, y) => {
        let n = 1
        while (x > (y * 2)) {
            y *= 2
            n *= 2
        }
        return [n, y]
    }

    while (a >= b) {
        let [cnt, val] = calc(a, b)
        ans += cnt
        a -= val
    }

    ans = (flag === 1 ? ans : -ans)
    if (ans >= Math.pow(2, 31)) {
        return ans - 1
    } else {
        return ans
    }
};

var divide3 = function (a, b) {
    if (b === 1 && a <= Math.pow(2, 31)) {
        return a
    } else if (b === 1 && a > Math.pow(2, 31)) {
        return Math.pow(2, 31) - 1
    } else if (b === -1 && a === -Math.pow(2, 31)) {
        return Math.pow(2, 31) - 1
    }
    let ans = 0
    let flag = (a > 0) ^ (b > 0) ? -1 : 1
    if (a > 0) {
        a = -a
    }
    if (b > 0) {
        b = -b
    }

    const calc = (x, y) => {
        let n = 1
        while (x < (y << 1) && (y << 1) < 0) {
            y <<= 1
            n <<= 1

        }

        return [n, y]
    }

    while (a <= b) {
        // + -
        let [cnt, val] = calc(a, b)
        ans += cnt
        a -= val
    }

    ans = (flag === 1 ? ans : -ans)
    if (ans >= Math.pow(2, 31)) {
        return ans - 1
    } else {
        return ans
    }
};
console.log(divide2(2147483647, 3));
