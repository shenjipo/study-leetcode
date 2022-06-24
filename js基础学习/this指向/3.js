var a = 1;

function printA() {
    console.log(this.a);
}

var obj = {
    a: 2,
    foo: printA,
    bar: function () {
        printA();
    }
}

obj.foo(); 
obj.bar(); // 1
var foo = obj.foo;
foo(); // 1
