
window.onscroll = function() {
    changeNavbar();
};

function changeNavbar() {
    const navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add("navbar-shrink");
        navbar.classList.remove("navbar-light");
        navbar.classList.add("navbar-dark");
    } else {
        navbar.classList.remove("navbar-shrink");
        navbar.classList.remove("navbar-dark");
        navbar.classList.add("navbar-light");
    }
}
