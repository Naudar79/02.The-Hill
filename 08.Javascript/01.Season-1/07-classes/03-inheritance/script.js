// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here
    class Cat extends Animal {
        constructor(name) {
            super(name);
            this.name = name;
        }
        static greeting = "Miaou";
        greeting() {
            return super.sayHello();
        }
    }
    class Dog extends Animal {
        constructor(name) {
            super(name);
            this.name = name;
        }
        static greeting = "Wouf";
        greeting() {
            return super.sayHello();
        }
    }
    document.getElementById("run").addEventListener("click", () => {
        let theCat = new Cat("Leo");
        let theDog = new Dog("Qoffee");
        console.log(theCat.greeting());
        console.log(theDog.greeting());
    });
})();

// *********************************************************************
// * 7.3 - créer deux classes avec deux propriétés dont une statique.  *
// * au clique, créer une instance pour chaque classe renvoyant la     *
// * valeur de la méthode sayHello dans la console                     *
// *********************************************************************