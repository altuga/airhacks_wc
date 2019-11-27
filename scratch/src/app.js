class Hello extends HTMLElement { 

    constructor() { 
        super();
        this.state = {
            message: 'god morgen'
        };
    }

    connectedCallback() { 
        const { message } = this.state;
        this.innerHTML = `
            <h2>${message}</h2>
        `

    }
    
    disconnectedCallback() { 

    }

}
customElements.define('a-hello',Hello);




