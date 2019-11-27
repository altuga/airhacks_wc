import getHello from './HelloService.js';

import { html, render } from './lib/lit-html/lit-html.js';
import './sample.js';
import './Output.js';
class Hello extends HTMLElement { 

    constructor() { 
        super();
        this.state = {
            messages: ['god morgen','guten morgen']
        };
    }

    connectedCallback() { 
        this.viewChanged();
        window.addEventListener('hello', e => this.applyChanges(e));
        getHello();
    }

    applyChanges({ detail }) { 
        this.state.messages = detail.messages;
        this.viewChanged();
    }

    viewChanged() { 
        const { messages } = this.state;
        
        const template = html`
            <a-output></a-output>
            <button @click=${_ => this.clicked()}>click</button>
            <input placeholder="something" @change=${e => this.changed(e)}>
            <ol>
            ${messages.map(m => html`<li>${m} ${new Date()}</li>`)}
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




