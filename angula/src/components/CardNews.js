class cardNews extends HTMLElement {

    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.innerHTML = "<h1>Heloo World</h1>";
    }
}

customElements.define("card-news",cardNews);


/* Um novo molde que se comporta como um elemento HTML. */