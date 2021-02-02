// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)

(() => {
    document.getElementById("run").addEventListener("click", () => {
        let val = "0123456789ABCDEF";
        let col = "#";
        for (index = 0; index < 6; index++) {
            col += val[Math.floor(Math.random() * 16)];
        }
        return document.body.style.background = col;
    });
})();

// WARNING : code ok but don't run !!