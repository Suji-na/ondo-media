const navIcon = document.getElementById("js-navIcon");
const nav = document.getElementById("js-nav");
const navLinks = document.querySelectorAll(".js-navLink");

const toggleNavigation = () => {
    if (navIcon != null) {
        navIcon.addEventListener("click", () => {
            navIcon.classList.toggle("is-opened");
            nav.classList.toggle("is-opened");
        });
    }

    if (navLinks != null) {
        navLinks.forEach((navLink) => {
            navLink.addEventListener("click", () => {
                navIcon.classList.remove("is-opened");
                nav.classList.remove("is-opened");
            });
        });
    }
};


export {
    toggleNavigation
};