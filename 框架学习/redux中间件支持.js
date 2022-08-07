// logger是一个中间件，注意返回值嵌了好几层函数
// 我们后面来看看为什么这么设计
function logger(store) {
    return function (next) {
        return function (action) {
            console.group(action.type);
            console.info('dispatching', action);
            let result = next(action);
            console.log('next state', store.getState());
            console.groupEnd();
            return result
        }
    }
}

// 在createStore的时候将applyMiddleware作为第二个参数传进去
const store = createStore(
    reducer,
    applyMiddleware(logger)
)

// 直接把前面的结构拿过来
function applyMiddleware(middleware) {
    function enhancer(createStore) {
        function newCreateStore(reducer) {
            const store = createStore(reducer);

            // 将middleware拿过来执行下，传入store
            // 得到第一层函数
            const func = middleware(store);

            // 解构出原始的dispatch
            const {dispatch} = store;

            // 将原始的dispatch函数传给func执行
            // 得到增强版的dispatch
            const newDispatch = func(dispatch);

            // 返回的时候用增强版的newDispatch替换原始的dispatch
            return {...store, dispatch: newDispatch}
        }

        return newCreateStore;
    }

    return enhancer;
}

function createStore(reducer, enhancer) {

    let state
    let listeners = []
    const subscribe = (fn) => {
        listeners.push(fn)
    }
    // 先处理enhancer
    // 如果enhancer存在并且是函数
    // 我们将createStore作为参数传给他
    // 他应该返回一个新的createStore给我
    // 我再拿这个新的createStore执行，应该得到一个store
    // 直接返回这个store就行
    if (enhancer && typeof enhancer === 'function') {
        const newCreateStore = enhancer(createStore);
        const newStore = newCreateStore(reducer);
        return newStore;
    }

    const dispatch = (action) => {
        state = reducer(state, action)
        for (let i = 0; i < listeners.length; i++) {
            const listener = listeners[i];
            listener();
        }
        return state
    }

    const getState = () => {
        return state
    }

    return {
        subscribe,
        dispatch,
        getState
    }
}