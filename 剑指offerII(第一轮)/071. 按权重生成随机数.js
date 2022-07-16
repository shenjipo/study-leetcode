/**
 * @param {number[]} w
 */
var Solution = function (w) {
    this.sum = w.reduce((total, item) => {  //计算前缀和
        total += item
        return total
    }, 0)
    this.weights = []
    w.forEach(item => {
        this.weights.push(item / this.sum)
    })

    this.sum_weights = [0]
    this.weights.reduce((initValue, currValue) => {
        this.sum_weights.push(initValue + currValue)
        return initValue+currValue
    }, 0)


};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
    const random = Math.random()

    for (let i = 0; i < this.sum_weights.length; i++) {
        if (random > this.sum_weights[i] && random < this.sum_weights[i + 1]) {
            return i
        }
    }
};

var obj = new Solution([1, 3])

for (let i = 0; i < 10; i++) {
    console.log(obj.pickIndex())
}
/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
