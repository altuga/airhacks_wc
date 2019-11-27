import { html, render } from "./lib/lit-html/lit-html.js";

export default class Output extends HTMLElement { 

    constructor() { 
        super();
    }

    connectedCallback() { 
        window.addEventListener('hello', e => this.applyChanges(e));
        this.innerHTML = "fallback output";
    }

    set fallbackMessage(message) { 
        console.log(message);  
        this.setAttribute("fallbackMessage",message);
    }

    applyChanges({ detail }) { 
        const template = html`
          <div>
            ${detail.messages.map(m => html`<h2>${m}</h2>`)}
    </div>
        `;
        render(template, this);
    }

}
customElements.define('a-output',Output);