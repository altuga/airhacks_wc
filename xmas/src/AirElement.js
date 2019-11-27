import { render } from './lib/lit-html/lit-html.js';
import { createStore } from './lib/redux.js';
import giftsCounter from './Reducers.js';

window.store = createStore(giftsCounter,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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
        console.log('before sync', this.state);
        const rawState = store.getState();
        console.log('origin state',rawState);
        this.state = this.extractState(rawState);
        console.log('extracted state',this.state);
        console.log('after sync',this.state);
        this.viewChanged();
        console.groupEnd(this.constructor.name + '._syncState');
    }

    extractState(reduxState) { 
        return reduxState;
    }

    postConstruct() { }

    viewChanged() { 
        render(this.view(),this);
    }


}