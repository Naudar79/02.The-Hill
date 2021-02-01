// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {
        let suite = [];
        // your code here
        for (let index = 1; index <= 21; index++) {
            resu = index ** 2;
            suite.push(resu);
        }
        return alert(suite);
    });

})();