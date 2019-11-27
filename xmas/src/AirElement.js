import { render } from './lib/lit-html/lit-html.js';
import { createStore } from './lib/redux.js';
import giftsCounter from './Reducers.js';

window.store = createStore(giftsCounter);

export default class AirElement extends HTMLElement { 

    constructor() { 
        super();
        this.state = {};
    }

    connectedCallback() { 
        console.group(this.constructor.name + '.connectedCallback');
        store.subscribe(_ => this._syncState());
        console.log('subscribe');
        this.postConstruct();
        console.log('postConstruct');
        this.viewChanged();
        console.log('viewChanged');
        console.groupEnd(this.constructor.name + '.connectedCallback');

    }

    _syncState() { 
        console.group(this.constructor.name + '._syncState');
        console.log('before sync',this.state);
        this.state = store.getState();
        console.log('after sync',this.state);
        this.viewChanged();
        console.groupEnd(this.constructor.name + '._syncState');


    }

    postConstruct() { }

    viewChanged() { 
        render(this.view(),this);
    }


}