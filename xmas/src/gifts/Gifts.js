import AirElement from "../AirElement.js";
import { html } from "../lib/lit-html/lit-html.js";

class Gifts extends AirElement { 

    view() { 
        console.log('rendering with state',this.state);
        return html`
            <h2>gift shop</h2>
        `;
    }

}


customElements.define('a-gifts',Gifts);