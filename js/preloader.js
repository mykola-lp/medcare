document.addEventListener("DOMContentLoaded", function() {
    let preloader = document.getElementById("preloader");
    preloader.classList.add("preloader-active");

    setTimeout(function() {
        preloader.classList.remove("preloader-active");
        preloader.classList.add("preloader-inactive");
    }, 500);
});