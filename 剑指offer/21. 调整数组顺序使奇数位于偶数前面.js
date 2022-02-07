/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
    let odd = []
    let even = []
    nums.forEach(item => {
        if (item % 2 === 0) {
            even.push(item)
        } else {
            odd.push(item)
        }
    })
    odd.push(...even)
    return odd

};


var exchange2 = function (nums) {
    let [left, right] = [0, nums.length - 1]
    while (left < right) {
        while (left < right && nums[left] % 2 !== 0) {
            left++
        }
        while (left < right && nums[right] % 2 === 0) {
            right--
        }
        let temp = nums[left]
        nums[left] = nums[right]
        nums[right] = temp
        left++
        right--
    }
    return nums

};

console.log(exchange2([1, 2, 3, 4, 5]))