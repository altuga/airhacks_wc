const addGift = async (gift) => {
    const response = await fetch('elf.json');
    const payload = await response.json();
    const { message } = payload;

    store.dispatch({
        type: "ADD", payload: {
            gift,
            creator: message
    }});

}

export default addGift;