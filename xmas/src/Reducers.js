const giftCounter = (state = 0, action)=>{ 
    switch (action.type) { 
        case 'INC':
            return ++state;
        case 'DEC':
            return --state;
        
        default:
                return state;                    
    }
}

export default giftCounter;