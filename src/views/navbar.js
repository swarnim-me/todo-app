import '../css/nav.css';

export default class Navbar {
    constructor() {
        this.nav = document.querySelector("nav");
        this.menuCloseBtn = document.querySelector(".menu-close-btn");
        this.menuOpenBtn = document.querySelector(".menu-open-btn");
        this.bindEvents();
    }

    bindEvents = () => {
        this.menuCloseBtn.addEventListener("click", this.toggleMenu);
        this.menuOpenBtn.addEventListener("click", this.toggleMenu);
    }

    toggleMenu = () => {
        if (this.nav.style.width === "0px") {
            this.nav.style.width = "300px";
            this.menuOpenBtn.style.display = "none";
        }
        else {
            this.nav.style.width = "0px";
            this.menuOpenBtn.style.display = "block";
            this.nav.style.overflow = "hidden";
        }
    }
}