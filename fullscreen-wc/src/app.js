class FullScreen extends HTMLElement{

    constructor(){
        super();
        this.root = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.root.innerHTML = `
            <style>
                main{
                height: 100vh;
                background: lightblue;
                }
            </style>
            <main>
                <h1>full</h1>
                <button>full</button>
            </main>
        `;
        const button = this.root.querySelector("button");
        button.onclick = _ => this.toggleFullscreen();
    }

    toggleFullscreen(){
        const fullscreen = document.fullscreenElement;
        if(!fullscreen){
            this.requestFullscreen();
        }else{
            console.dir(fullscreen);
            document.exitFullscreen();
        }

    }

}

customElements.define("full-screen",FullScreen);



