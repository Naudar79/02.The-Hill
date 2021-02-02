// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

    let now = new Date();
    let hr = now.getHours();
    let min = now.getMinutes();
    if (hr < 17) {
        document.getElementById("target").innerHTML = "Hello";
    } else if (hr < 18 && min < 30) {
        document.getElementById("target").innerHTML = "Hello";
    } else {
        document.getElementById("target").innerHTML = "Good evening";
    }

})();