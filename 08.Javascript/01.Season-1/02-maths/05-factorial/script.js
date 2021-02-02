// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let nombre = new Number(document.getElementById("number").value);
        let f = 1;
        for (index = 1; index <= nombre; index++) {
            f *= index;
        }
        return alert(f);
    });
})();