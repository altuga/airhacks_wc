const gifts = (state = {gifts:[]}, action)=>{ 
    switch (action.type) { 
        case 'ADD':
            return Object.assign({}, {
                
                gifts: gifts.concat(action.payload)
            });
        default:
                return state;                    
    }
}

export default gifts;