import { html, render } from './lib/lit-html/lit-html.js';
import './sample.js';
class Hello extends HTMLElement { 

    constructor() { 
        super();
        this.state = {
            messages: ['god morgen','guten morgen']
        };
    }

    connectedCallback() { 
        const { messages } = this.state;
        
        const template = html`
            <button @click=${_ => this.clicked()}>click</button>
            <input placeholder="something" @change=${e => this.changed(e)}>
            <ol>
            ${messages.map(m => html`<li>${m}</li>`)}
             </ol>
        `
        render(template,this);

    }
    changed(event) { 
        console.log(event);
    }
    clicked() { 
        console.log('clicked...');
    }
    
    disconnectedCallback() { 

    }

}
customElements.define('a-hello',Hello);




