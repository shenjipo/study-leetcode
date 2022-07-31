function Class() {
}　// 声明一个函数Class

Class.extend = function (props) {
    var NewClass = function () {
        if (this.initialize) {
            this.initialize.apply(this, arguments);
        }
    }

    //将父类的prototype取出并复制到NewClass的__super__ 静态变量中
    var parentProto = NewClass.__super__ = this.prototype;
    var proto = Object.create(parentProto); //复制parentProto到proto中
    //protos是一个新的prototype对象
    proto.constructor = NewClass;
    NewClass.prototype = proto;　//到这完成继承

    extend(proto, props); //将参数复制到NewClass的prototypez中

    for (var i in this) {
        if (this.hasOwnProperty(i) && i !== 'prototype' && i !== '__super__') {
            NewClass[i] = this[i];
        }
    }

    return NewClass;
};

function extend(dest) {
    let i, j, len, src;

    for (j = 1, len = arguments.length; j < len; j++) {
        src = arguments[j];
        for (i in src) {
            dest[i] = src[i];
        }
    }
    return dest;
}

let Parent = Class.extend({
    initialize(name) { //初始函数
        console.log(666)
        this.name = name;
    },
    greet() {
        console.log('hello ' + this.name);
    }
});
let parent = new Parent('whj');
parent.greet();　// hello whj
