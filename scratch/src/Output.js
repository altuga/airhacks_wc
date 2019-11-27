import { html, render } from "./lib/lit-html/lit-html.js";

export default class Output extends HTMLElement { 

    constructor() { 
        super();
        this.root = this.attachShadow({mode:"open"});
    }

    connectedCallback() { 
        window.addEventListener('hello', e => this.applyChanges(e));
        this.root.innerHTML = `
        <style>
        h2{
            background-color: var(--a-title,rebeccapurple);
        }
        </style>
        <h2> fallback output</h2>`;
    }

    set fallbackMessage(message) { 
        console.log(message);  
        this.setAttribute("fallbackMessage",message);
    }

    applyChanges({ detail }) { 
        const template = html`
          <h2>
            ${detail.messages.map(m => html`<h2>${m}</h2>`)}
         </h2>
        `;
        render(template, this.root);
    }

}
customElements.define('a-output',Output);