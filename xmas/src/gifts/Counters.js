import AirElement from "../AirElement.js";

import { html } from "../lib/lit-html/lit-html.js";

import { decrease,increase } from "./CounterService.js";

class Counters extends AirElement { 


    view() { 
        return html`
            <button @click=${_ => increase()}>+</button>
            <button @click=${_ => decrease()}>-</button>
        `;
    }

    save() { }
}
customElements.define('a-counters',Counters);