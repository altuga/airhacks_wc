const initialState = { counter: 0 };

const counter = (state = initialState, action) => { 
    console.log(state,action);
    switch (action.type) { 
        case 'INC':
            return {                
                counter: ++state.counter
            };
        case 'DEC':
            const newState = Object.assign({}, state);
            newState.counter = --state.counter;
            return newState;
        
        default:
                return state;                    
    }
}

export default counter;