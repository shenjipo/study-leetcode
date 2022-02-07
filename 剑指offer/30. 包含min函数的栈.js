class MinStack {
    constructor() {
        this.stack = [];
    }

    push(x) {
        this.stack.push({
            val: x,
            min: this.stack.length ? Math.min(this.stack[this.stack.length-1].min, x) : x
        })
    }

    pop() {
        this.stack.pop();
    }

    top() {
        return this.stack[this.stack.length - 1].val
    }

    min() {
        return this.stack[this.stack.length - 1].min
    }
}