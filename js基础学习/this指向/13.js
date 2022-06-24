function a(xx) {
    this.x = xx;
    return this
}


var x = a(5);
var y = a(6);

console.log(x)
console.log(y.x)













// 执行b(6)时 window.x就是x 直接给覆盖掉了
