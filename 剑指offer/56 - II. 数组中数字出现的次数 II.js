/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let mp = new Map()
    for (let item of nums) {
        if (mp.get(item)) {
            mp.set(item, mp.get(item) + 1)
        } else {
            mp.set(item, 1)
        }
    }

    for (let key of mp) {

        if (key[1] === 1) {
            return key[0]
        }
    }
};
console.log(singleNumber([3, 4, 3, 3]))