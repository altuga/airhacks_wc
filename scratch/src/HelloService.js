const getHello = async _ => { 
    const response = await fetch('hello.json');
    console.log('response: ' + response.status);
    const payload = await response.json();
    const event = new CustomEvent('hello', {
        detail: payload,
        bubbles: true
    });
    window.dispatchEvent(event);

}


export default getHello;