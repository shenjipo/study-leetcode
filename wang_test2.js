class Widget {
    #at = 1
    b = 5

    foo() {
        console.log(this.#at)
    }

    // ...
}

function bar(baz) {
    return this.snaf = baz;
}

let s = new Widget()
console.log(s.at, s.b)
s.foo()

