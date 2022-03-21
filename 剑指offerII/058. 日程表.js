var MyCalendar = function () {
    this.times = []
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
    if (this.times.length === 0) {
        this.times.push([start, end])
        return true
    }

    for (let i = 0; i < this.times.length; i++) {
        if ((start >= this.times[i][0] && start < this.times[i][1]) ||
            (end > this.times[i][0] && end <= this.times[i][1]) ||
            (start <= this.time[i][0] && end >= this.times[i][1])) {
            return false
        }
    }
    this.times.push([start, end])
    return true
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
var obj = new MyCalendar()
let testdata = [[97, 100], [33, 51], [89, 100], [83, 100], [75, 92], [76, 95], [19, 30], [53, 63], [8, 23], [18, 37], [87, 100], [83, 100], [54, 67], [35, 48], [58, 75], [70, 89], [13, 32], [44, 63], [51, 62], [2, 15]]
for (let item of testdata) {
    obj.book(item[0], item[1])
}

