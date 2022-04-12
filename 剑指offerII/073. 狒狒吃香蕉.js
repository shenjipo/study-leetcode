/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    const cal = (k) => {
        let count = 0
        for (let i = 0; i < piles.length; i++) {
            count += Math.ceil(piles[i] / k)
        }

        return count
    }
    let [left, right] = [1, Math.max(...piles)]
    while (left <= right) {
        let middle = (left + right) >> 1
        let time = cal(middle)
        // 需要的时间大于给定的时间  速度不够
        if (time > h) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }

    return left
};
console.log(minEatingSpeed([312884470], 312884469))
