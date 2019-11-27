import AirElement from "../AirElement.js";
import { html } from "../lib/lit-html/lit-html.js";
import '../gifts/Gifts.js';
import '../elfs/Elf.js';
import '../gifts/GiftList.js';

class XMas extends AirElement { 

    constructor() { 
        super();
    }

    onBeforeEnter(location, commands, router) { 
        console.log('on before route');
    }

    view() { 
        return html`
        <h2>no gifts?</h2>
        <a-elf></a-elf>
        <a-gifts></a-gifts>
        <a-giftlist></a-giftlist>
        `;
    }

}

customElements.define('a-xmas',XMas);