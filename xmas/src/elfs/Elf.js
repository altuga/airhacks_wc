import AirElement from "../AirElement.js";
import { html } from "../lib/lit-html/lit-html.js";
import addGift from "./ElfService.js";

class Elf extends AirElement { 

    view() { 
        return html`
            <input @change=${e => this.newGift(e) } placeholder="your gift...">
        `;
    } 

    newGift(e) { 
        const gift = e.target.value;
        addGift(gift);
    }
}

customElements.define('a-elf',Elf);