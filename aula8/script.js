// class WordCounter{
    
//     #view;
    
//     constructor() {
//         this.#view = document.querySelector('.wordcounter');
//         console.log(this.#view)
//     }

//     get numWords() {
//         return this.innerText.split(" ").length;
//     }

//     set innerText(text) {
//         this.#view.querySelector("p").innerText = text
//     }

//     get innerText() {
//         return this.#view.querySelector("p").innerText;
//     }
    
// }

class WordCounter extends HTMLElement {
    static observedAttributes = ["name"];
    constructor() {
        super();
        console.log("Component constructed")
    }

    get numWords() {
        return this.querySelector("p").innerText.split(/\s+/g).length;
    }

    createElement(type, content) {
            let element = document.createElement(type)
            this.appendChild(element)
            element.innerText= content
    }

    createAudio(url) {
        let element = document.createElement("audio")
        this.appendChild(element)
        element.controls = "true"
        element.src = url
    }

    connectedCallback() {
        console.log("Custom element added to page")
    }

    disconnectedCallback() {
        console.log("Custom element removed from page")
    }

    adoptedCallback() {
        console.log("Custom element moved to new page")
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute ${name} has changed from ${oldValue} to ${newValue}.`)
    }

}
customElements.define('word-counter', WordCounter)

window.onload = () => {

    const wordCounter = document.querySelector("word-counter");
    // const wordcounter = new WordCounter();
    
    wordCounter.innerHTML = "<p>Hello world</p>"
    console.log(wordCounter.numWords)

    const p = wordCounter.querySelector("p");
    console.log(p)

    wordCounter.createElement("label", "Hello World2")
    wordCounter.createAudio("https://previews.customer.envatousercontent.com/files/498222365/preview.mp3")
    wordCounter.setAttribute("name", "counter")

    // document.body.removeChild(document.querySelector("word-counter"))
}