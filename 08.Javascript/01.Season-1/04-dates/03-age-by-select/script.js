// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    // your code here

    //let annee = 1979;
    //let mois = 8;
    //let jour = 16;
    document.getElementById("run").addEventListener("click", () => {

        /* function getAge(date) {
             let diff = Date.now() - date.getTime();
             let age = new Date(diff);
             return Math.abs(age.getUTCFullYear() - 1970);
         }
         return alert(getAge(new Date(annee, mois, jour)));
         */
        let annee = document.getElementById("dob-year").value;
        let mois = document.getElementById("dob-month").value;
        let jour = document.getElementById("dob-day").value;

        let dateJ = new Date();
        let age = dateJ.getFullYear() - annee;
        if (mois > dateJ.getMonth() + 1) {
            age = age - 1;
        } else if (mois < dateJ.getMonth() + 1) {
            age = age;
        } else if (mois == dateJ.getMonth() + 1) {
            if (jour <= dateJ.getDate()) {
                age = age;
            } else {
                age = age - 1;
            }
        }
        alert("vous avez: " + age + " ans");
    });
})();