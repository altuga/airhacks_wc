import AirElement from "../AirElement.js";
import './Counters.js';
import { html } from "../lib/lit-html/lit-html.js";

class Gifts extends AirElement { 

    extractState(reduxState) { 
        return reduxState.counter;
    }

    view() { 
        console.log('rendering with state',this.state);
        return html`
            <a-counters></a-counters>
            <h2>gift shop ${this.state.counter}</h2>
        `;
    }

}


customElements.define('a-gifts',Gifts);