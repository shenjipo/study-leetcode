class PubSub {
    constructor() {
        this.events = {}
    }

    publish(name, ...args) {
        const fn = this.events[name]
        if (fn && typeof fn === 'function') {
            fn.call(this, ...args)
        }
    }

    subscribe(name, fn) {
        this.events[name] = fn
    }

    unsubscribe(name) {
        this.events[name] = undefined
    }
}

let pubSub = new PubSub()
pubSub.subscribe('click', (name) => {
    console.log('注册事件被回调' + name)
})
pubSub.publish('click', 'wang')
// pubSub.unsubscribe('click')
pubSub.publish('click', 'wang')
