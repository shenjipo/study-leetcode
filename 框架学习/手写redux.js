function createStore(reducer) {

    let state
    let listeners = []
    const subscribe = (fn) => {
        listeners.push(fn)
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


function combineReducers(reducerMap) {
    let reducerKeys = Object.keys(reducerMap)

    const reducer = (state = {}, action) => {
        let newState = {}
        for (let i = 0; i < reducerKeys.length; i++) {
            let key = reducerKeys[i]
            let currReducer = reducerMap[key]
            let preState = state[key]
            newState[key] = currReducer(preState, action)
        }
        return newState
    }
    return reducer
}

const initMilkState = {
    milk: 0
};

function milkReducer(state = initMilkState, action) {
    switch (action.type) {
        case 'PUT_MILK':
            return {...state, milk: state.milk + action.count};
        case 'TAKE_MILK':
            return {...state, milk: state.milk - action.count};
        default:
            return state;
    }
}

const initRiceState = {
    rice: 0
};

function riceReducer(state = initRiceState, action) {
    switch (action.type) {
        case 'PUT_RICE':
            return {...state, rice: state.rice + action.count};
        case 'TAKE_RICE':
            return {...state, rice: state.rice - action.count};
        default:
            return state;
    }
}

let store = createStore(combineReducers({
    milkState: milkReducer,
    riceState: riceReducer
}));
console.log(store.getState())
// 如果是结合页面更新，更新的操作就是在这里执行
store.subscribe(() => console.log(store.getState()));
// 将action发出去要用dispatch
// 操作🥛的action
store.dispatch({type: 'PUT_MILK', count: 1});    // milk: 1
store.dispatch({type: 'PUT_MILK', count: 1});    // milk: 2
store.dispatch({type: 'TAKE_MILK', count: 1});   // milk: 1

// 操作大米的action
store.dispatch({ type: 'PUT_RICE', count: 1 });    // rice: 1
store.dispatch({ type: 'PUT_RICE', count: 1 });    // rice: 2
store.dispatch({ type: 'TAKE_RICE', count: 1 });   // rice: 1

