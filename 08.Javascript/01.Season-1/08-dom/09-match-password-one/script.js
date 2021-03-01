// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {

    // your code here
    let passWord = []; // Contient l'entrée de la première zone
    let repassWord = []; // Contient l'entrée de la seconde zone

    document.getElementById('run').addEventListener("click", () => {
        let passOne = document.getElementById("pass-one");
        let passTwo = document.getElementById("pass-two");
        if(passOne.value.trim() !== passTwo.value.trim()) {
            passOne.style.borderColor="red";
            passTwo.style.borderColor="red";
        }
    });

})();