// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    // your code here
    function getAge(date) {
        var diff = Date.now() - date.getTime();
        var age = new Date(diff);
        return Math.abs(age.getUTCFullYear() - 1970);
    }
    alert(getAge(new Date(1995, 12, 6))); //Date(année, mois, jour) 

})();