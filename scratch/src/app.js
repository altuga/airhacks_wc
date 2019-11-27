import { html, render } from './lib/lit-html/lit-html.js';
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
        const template = html`
            <h2>${message}</h2>
        `

        render(template,this);

    }
    
    disconnectedCallback() { 

    }

}
customElements.define('a-hello',Hello);




