import AirElement from "../AirElement.js";
import { html } from "../lib/lit-html/lit-html.js";

class GiftList extends AirElement { 

    extractState(redux) { 
        return redux.gifts;
    }

    view() { 
        return html`
         <h2>${this.state.gifts.map(g => html`<h3>${g}</h3>`)}</h2>
        `;
    }

}
customElements.define('a-giftlist',GiftList);