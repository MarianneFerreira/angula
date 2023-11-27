class cardNews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class","card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class","card__left");

        const autor = document.createElement("span");
        autor.textContent =" by " + (this.getAttribute("autor") || " Anonymous");


        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute ("link-url")

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content")
        


        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);


        const cardRight = document.createElement("div");
        cardRight.setAttribute("class","card__right");
        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "img/fotodefult.png";
        cardRight.appendChild(newsImage);
        newsImage.alt ="Foto da noticia";

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `        
            .card{
                width: 100%;
                box-shadow: 2px 0px 0px 6px rgba(0,0,0,0.69);
                -webkit-box-shadow: 2px 0px 0px 6px rgba(0,0,0,0.69);
                -moz-box-shadow: 2px 0px 0px 6px rgba(0,0,0,0.69);
                display: flex;
                flex-direction: row;
                justify-content: space-around;
            }
            
            
            .card__left{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }
            
            .card__left > span {
                font-weight: 400;
            }
            
            .card__left > h1{
                margin-top: 15px;
                font-size: 25px;
            }
            
            .card__left > p{
                color: rgba(70, 70, 70, 0.685);
            }
        
        
        `;
        return style;
    }

}

customElements.define("card-news",cardNews);


/* Um novo molde que se comporta como um elemento HTML. */