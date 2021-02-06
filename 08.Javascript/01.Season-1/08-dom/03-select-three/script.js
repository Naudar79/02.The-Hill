// 08-dom/03-select-three/script.js - 8.3: select multiple elements by css selector


(() => {

    // your code here
    let array = document.querySelectorAll("target");
    for (let index = 0; index < array.length; index++) {
        array.forEach(element => element.innerHTML("Owned"));
        tab[index].innerHTML = "Owned";
    }
})();