// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


(() => {

    // your code here
    let value = document.getElementById("source").dataset.image;
    let img = document.createElement("img");
    img.src = value;
    document.getElementById("target").appendChild(img);
})();