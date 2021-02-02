// 03-colors/02-change-bcg-two/script.js - 3.2: Bcg 2

document.getElementById("run").addEventListener("click", () => {
    let choix = document.getElementById("color").value;
    return document.body.style.background = choix;
});