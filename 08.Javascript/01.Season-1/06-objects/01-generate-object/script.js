// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let lastName = "Want";
        let firstName = "Arnaud";
        let country = "Berzee";
        let age = 41;

        window.alert("Hello, i'm " + lastName + " " + firstName + ", i have " + age + " years" + " and i living in " + country + ".");
    });
})();