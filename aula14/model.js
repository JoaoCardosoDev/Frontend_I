export default class GalleryModel {
    #modelData;
    #dataUrl;
    constructor(){

    }

    async initialize(url) {
        this.#dataUrl = url
        const storageData = JSON.parse(localStorage.getItem("web-gallery"));
        if (storageData) {
            this.#modelData = storageData
        } else {
            const req = await fetch(this.#dataUrl);
            this.#modelData = await req.json();
        }

        this.#updateLocalStorage();
    }

    addItem(item) {

        this.#modelData.push(item)

        console.log(this.#modelData);
        this.#updateLocalStorage();    
    }

    updateItem(index, item){
        this.#modelData(index) = item;
        this.#updateLocalStorage();    
    }

    deleteItem(index) {
        this.#modelData.splice(index, 1)
        this.#updateLocalStorage();
    }

    #updateLocalStorage() {
        localStorage.setItem("web-gallery", JSON.stringify(this.#modelData))
    }
    reset(){
        localStorage.removeItem("web-gallery");
        this.initialize(this.#dataUrl);
    }

    get data(){
        return this.#modelData;
    }

}