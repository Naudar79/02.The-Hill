//07-classes/02-methods/script.js - 7.2: methods

(() => {
    // your code here
    class person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        get sayHello() {
            let retour = ("hello " + this.firstName + " " + this.lastName);
            return (retour);
        }
    }
    document.getElementById("run").addEventListener("click", () => {
        let entree = new person("Arnaud", "Want");
        console.log(entree.sayHello);
    });
})();

// *******************************************************************
// * 7.2 this exercise will create a class withs two properties and  *
// * une method. on click create a instance of person class and      *
// * return the mehtod into the consol                               *
// *******************************************************************