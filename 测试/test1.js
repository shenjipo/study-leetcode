function compose(...middlewares) {

}

function add1(x, next) {
    console.log('add1 before');
    next(x + 1);
    console.log('add1 after');
}

function add2(x, next) {
    console.log('add2 before');
    next(x + 2);
    console.log('add2 after');
}

function output(x) {
    console.log('output:', x)
}

const input = 0;
compose(add1, add2, (output) => {
    console.log('output:', output);
})(input);
