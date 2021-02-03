// 05-arrays/01-get-element/script.js - 5.3: walk through the list


(() => {

    let fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        for (index = 0; index < fruits.length; index++) {
            console.log(fruits[index]);
        }
    });

})();