import { html, render } from "./lib/lit-html/lit-html.js";

class Output extends HTMLElement { 

    connectedCallback() { 
        window.addEventListener('hello',e => this.applyChanges(e));
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