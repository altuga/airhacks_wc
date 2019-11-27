const increase = _ => { 

    store.dispatch({
        type:'INC'
    });

}


const decrease = _ => { 

    store.dispatch({
        type:'DEC'
    });

}

export { increase,decrease }