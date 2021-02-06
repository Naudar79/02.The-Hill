// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)


(() => {

    // your code here
    let table = document.createElement("table");
    for (let index = 1; index <= 10; index++) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        tr.appendChild(td);
        table.appendChild(tr);
    }
    document.getElementById("target").appendChild(table);
})();