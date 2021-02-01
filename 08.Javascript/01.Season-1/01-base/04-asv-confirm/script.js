// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    // YOUR CODE HERE
})();

let age = prompt("Enter your age: ");
let sex = prompt("Enter your sex: ");
let city = prompt("Enter your city: ");

if (confirm("Age: " + age + " | Sex: " + sex + " | City: " + city + " | Confirm your entries: ") != true) {
    age = prompt("Enter your age: ");
    sex = prompt("Enter your sex: ");
    city = prompt("Enter your city: ");
}