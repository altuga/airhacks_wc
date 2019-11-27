import { createStore } from './lib/redux.js';

const reducer = (state = 42, action)=>{ 
    if (action.type==='INC') { 
        return ++state;
    }
    if (action.type === 'DEC') { 
        return --state;
    }

    return state;
}

window.store = createStore(reducer);

store.subscribe(_ => console.log(store.getState()));
store.dispatch({
    type: 'INC'
});

store.dispatch({
    type: 'DEC'
});