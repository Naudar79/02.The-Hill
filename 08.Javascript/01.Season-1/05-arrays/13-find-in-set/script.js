// 05-arrays/13-find-in-set/script.js - 5.13: Find in a Set


(() => {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Alexandre",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        //Parcourir le "set" et relevé son dernier index
        console.log("Longueur: " + people.size);
        //tester si "Alexandre" est dans le set
        if (people.has('Alexandre') == true) {
            console.log("Alexandre is into the Set");
        }
    });
})();