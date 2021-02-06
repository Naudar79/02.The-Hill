// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)

(() => {

    // your code here
    let table = document.createElement("table");
    for (let i = 1; i <= 10; i++) {
        let tr = document.createElement("tr");
        for (let j = 1; j <= 10; j++) {
            let td = document.createElement("td");
            td.innerHTML = i * j;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.getElementById("target").appendChild(table);
})();