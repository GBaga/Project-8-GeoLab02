const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.querySelector(".nav-menu");

mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("is-active");
    navMenu.classList.toggle("active");
});
