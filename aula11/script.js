window.onload = () => {
    const webGallery = document.querySelector("web-gallery");
    webGallery.addEventListener('ready', (ev) => {
        console.log('Gallery ready', ev.detail.numberOfimages);
    })
    webGallery.dataURL = "assets/gallery_data.json";
    webGallery.currentItem = 3;
}