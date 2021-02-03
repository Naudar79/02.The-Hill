// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here


    //dim une variable "today" qui contiendra la date du jour
    let today = new Date();
    //afficher la variable today à la place du texte "change me !"
    document.getElementById("target").innerHTML = today;

})();