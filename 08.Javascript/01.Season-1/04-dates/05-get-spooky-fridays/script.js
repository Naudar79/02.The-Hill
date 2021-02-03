// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {
    let fri = 0;
    // your code here
    document.getElementById("run").addEventListener("click", (annee) => {

        annee = document.getElementById("year").value;

        for (let index = 1; index < 12; index++) {
            let date = new Date(annee, index, 13);
            if (date.getDay() == 5) {
                fri++;
            }
        }
        return alert(fri);
    });

})();