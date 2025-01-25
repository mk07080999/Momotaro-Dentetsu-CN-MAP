
// 選取圖片和按鈕

const image = document.getElementById('example-image');

const zoomInButton = document.getElementById('zoom-in');

const zoomOutButton = document.getElementById('zoom-out');



// 初始化縮放比例

let scale = 1;



// 放大功能

zoomInButton.addEventListener('click', () => {

    scale += 0.1; // 每次放大10%

    image.style.transform = `scale(${scale})`;

});



// 縮小功能

zoomOutButton.addEventListener('click', () => {

    if (scale > 0.2) { // 防止縮小到不可見

        scale -= 0.1; // 每次縮小10%

        image.style.transform = `scale(${scale})`;

    }

});

