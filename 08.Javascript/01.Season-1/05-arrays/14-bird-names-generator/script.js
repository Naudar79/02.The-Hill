// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        { name: "mouette", fem: true },
        { name: "corbeau" },
        { name: "mésange", fem: true },
        { name: "hibou" },
        { name: "buse", fem: true },
        { name: "pigeon" },
        { name: "pie", fem: true },
        { name: "vautour" },
        { name: "faucon" },
        { name: "rouge-gorge" },
        { name: "tourterelle", fem: true },
        { name: "corneille", fem: true },
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let index = Math.floor(Math.random() * birds.length);
        let tableau = Array.from(adjectives);
        let j = Math.floor(Math.random() * tableau.length);

        if (birds[index].fem == true) {
            document.getElementById("target").innerHTML = ("La " + birds[index].name + " " + tableau[j] + "e");
        } else {
            document.getElementById("target").innerHTML = ("Le " + birds[index].name + " " + tableau[j]);
        }
    });
})();