const template = document.createElement('template');
template.innerHTML=`
    <style>
        * {
            font-family: system-ui, sans-serif;
        }

        button {
            border: none;
            background-color: green;
            padding: 10px 20px;
            cursor: pointer;
        }

        .gallery {
            position:relative;
            display: flex;
            flex-direction: column;
            width: 500px;
            height: 500px;
            gap: 10px;
        }

        #image-container {
            display: flex;
            flex: 1;
            background-color: red;
        }

        #controls {
            display: flex;
            justify-content: space-between;
            background-color: blue;
        }

        #play-pause {
            position: absolute;
            top: 10px;
            left: 10px;
        }



    </style>
    <div class="gallery">

        <div id='image-container'>

        </div>
        <div id='controls'>
            <button id="previous">Previous</button>
            <button id="next">Next</button>
        
        </div>

        <button id="play-pause">STOP</button>
    </div>
`;

const itemTemplate = document.createElement('template')
itemTemplate.innerHTML = `
        <style>
            .item {
                width: 100%;
                height: 100%;
                background-image: url(https://programmerhumor.io/wp-content/uploads/2021/11/programmerhumor-io-programming-memes-64b53c468708b04-758x675.jpg);
                background-position: center;
                background-size: cover;
            }
        </style>
        <div class="item"></div>
`

class WebGallery extends HTMLElement {

    shadowRoot = null;
    constructor() {
        super();

        // shadowDOM
        this.shadowRoot = this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }
    
    connectedCallback() {
        console.log("Element connected")

        const imageContainer = this.shadowRoot.querySelector('#image-container');
        const item = itemTemplate.content.cloneNode(true);
        imageContainer.appendChild(item);
    
    
        // Buttons
        this.shadowRoot.querySelector('#previous').onclick=()=>{
            console.log("previous clicked")
        }
    
    
        this.shadowRoot.querySelector('#next').onclick=()=>{
            console.log("next clicked")
        }
    
        this.shadowRoot.querySelector('#play-pause').onclick=()=>{
            console.log("play-pause clicked")
        }
    }
}
customElements.define('web-gallery', WebGallery)
