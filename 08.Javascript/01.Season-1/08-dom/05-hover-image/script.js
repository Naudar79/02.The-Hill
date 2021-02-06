// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

    // your code here
    let img = document.getElementsByTagName("img")[0];
    let value = img.getAttribute("data-hover");
    img.addEventListener("mouseover", () => {
        img.src = value;
    });
})();