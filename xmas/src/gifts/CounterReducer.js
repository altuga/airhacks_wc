const initialState = { counter: 0 };

const counter = (state = initialState, action) => { 
    console.log(state,action);
    switch (action.type) { 
        case 'INC':
            return increaseCounter(state);
        case 'DEC':
            const newState = Object.assign({}, state);
            newState.counter = --state.counter;
            return newState;
        
        default:
                return state;                    
    }
}

const increaseCounter = ({ counter }) => { 
    return {
        counter: ++counter
    }
}

export default counter;