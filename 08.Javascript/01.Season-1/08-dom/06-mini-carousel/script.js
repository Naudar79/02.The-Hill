// 08-dom/06-mini-carousel/script.js - 8.6: mini carousel


(() => {

    let gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
    let cpt = 0;
    let image = document.getElementsByTagName("img")[0];

    document.getElementById("next").addEventListener("click", () => {
        cpt = cpt + 1;
        if (cpt > gallery.length - 1) {
            cpt = 0;
        }
        image.src = gallery[cpt];
    });

})();