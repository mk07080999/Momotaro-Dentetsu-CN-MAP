```js
function zoomIn() {
    const img = document.getElementById("example-image");
    const width = img.clientWidth;
    img.style.width = (width * 1.2) + "px"; // 將寬度放大20%
}

function zoomOut() {
    const img = document.getElementById("example-image");
    const width = img.clientWidth;
    img.style.width = (width * 0.8) + "px"; // 將寬度縮小20%
}
