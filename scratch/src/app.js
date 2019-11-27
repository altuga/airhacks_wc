const html = (a, b) => { 
    return 'nice and afast';
}

import './sample.js';
class Hello extends HTMLElement { 

    constructor() { 
        super();
        this.state = {
            message: 'god morgen'
        };
    }

    connectedCallback() { 
        const { message } = this.state;
        this.innerHTML = html`
            <h2>${message}</h2>
        `

    }
    
    disconnectedCallback() { 

    }

}
customElements.define('a-hello',Hello);




