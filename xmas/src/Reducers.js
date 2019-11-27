const gifts = (state = {gifts:[]}, action)=>{ 
    switch (action.type) { 
        case 'ADD':
            return Object.assign({}, {
                creator: action.payload.creator,
                gifts: state.gifts.concat(action.payload.gift)
            });
        default:
                return state;                    
    }
}

export default gifts;