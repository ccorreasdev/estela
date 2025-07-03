const navButton = document.querySelector("#nav-btn");
const navMenu = document.querySelector("#nav-menu");

navButton.addEventListener("click", () => {
    console.log("Menu");
    navMenu.classList.toggle("nav__menu--active");
});


navMenu.addEventListener("click", (e) => {
    if (e.target.closest(".nav__link")) {
        navMenu.classList.remove("nav__menu--active");
    }
})

function verificarPantalla() {
    if (window.innerWidth > 800) {
        navMenu.classList.remove("nav__menu--active");
    }
}

verificarPantalla();

window.addEventListener('resize', verificarPantalla);