const giftCounter = (state = {counter:0}, action)=>{ 
    switch (action.type) { 
        case 'INC':
            return Object.assign({}, {
                
                counter: ++state.counter
            });
        case 'DEC':
            return Object.assign({}, {
                counter: --state.counter
            });
        
        default:
                return state;                    
    }
}

export default giftCounter;