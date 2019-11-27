import AirElement from "../AirElement.js";
import { html } from "../lib/lit-html/lit-html.js";
import '../gifts/Gifts.js';
import '../elfs/Elf.js';
class XMas extends AirElement { 

    constructor() { 
        super();
    }

    view() { 
        return html`
        <h2>no gifts?</h2>
        <a-elf></a-elf>
        <a-gifts></a-gifts>
        `;
    }

}

customElements.define('a-xmas',XMas);