// 初始化 svg-pan-zoom

const panZoomInstance = svgPanZoom('#example-image', {

    zoomEnabled: true,

    controlIconsEnabled: false,

    fit: true,

    center: true

});



// 放大功能

function zoomIn() {

    panZoomInstance.zoomIn();

}



// 縮小功能

function zoomOut() {

    panZoomInstance.zoomOut();

}
