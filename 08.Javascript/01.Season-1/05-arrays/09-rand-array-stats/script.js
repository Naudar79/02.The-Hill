// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    // your code here
    let array = [];
    let moy = 0;
    document.getElementById("run").addEventListener("click", () => {
        for (let index = 0; index < 10; index++) {
            array.push(Math.floor(Math.random() * 100) + 1);
        }
        console.log(array);
        console.log(Math.max(...array));
        console.log(Math.min(...array));
        let som = array.reduce((b, c) => {
            return b + c;
        });
        console.log(som);
        console.log(som / 10);
    });
})();