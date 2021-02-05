// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    // your code here
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        get name() {
            return this.firstName + " " + this.lastName;
        }
        set name(add) {
            [this.firstName, this.lastName] = add.split(" ");
        }
    }
    document.getElementById("run").addEventListener("click", () => {
        let newEntr = new Person("Arnaud", "Want");
        console.log(newEntr.name);
        newEntr.name = "Arnaud Want";
        console.log(newEntr.name);
    });
})();