import '../css/nav.css';

const menuCloseBtn = document.querySelector(".menu-close-btn");
const menuOpenBtn = document.querySelector(".menu-open-btn");
const nav = document.querySelector("nav");
const toggleMenu = () => {
    if (nav.style.width === "0px") {
        nav.style.width = "300px";
        menuOpenBtn.style.display = "none";
    }
    else {
        nav.style.width = "0px";
        menuOpenBtn.style.display = "block";
        nav.style.overflow = "hidden";
    }
}

const setupNavEvents = () => {
    menuCloseBtn.addEventListener("click", toggleMenu);
    menuOpenBtn.addEventListener("click", toggleMenu);
}

export default setupNavEvents;