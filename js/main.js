const image = document.querySelector("#image");

function countDown() {
    console.log('innerWidth: ' + window.innerWidth);
    timer = setTimeout(countDown, 100);
    if(window.innerWidth > 780) {
        image.src = "./image/main.jpg";
    }else {
        image.src = "./image/smartPhone.png";
    }
}
  
  // 初回実行
  let timer = setTimeout(countDown, 100);