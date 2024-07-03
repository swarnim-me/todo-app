import '../css/nav.css';

export default class Navbar {
    constructor() {
        this.nav = document.querySelector("nav");
        this.menuCloseBtn = document.querySelector(".menu-close-btn");
        this.menuOpenBtn = document.querySelector(".menu-open-btn");
        this.addProjectBtn = document.querySelector(".create-project-btn");
        // FIXME
        this.addProjectModal = document.querySelector(".add-project-modal");
        this.addProjectModal.showModal();
        this.bindEvents();
    }

    bindEvents = () => {
        this.menuCloseBtn.addEventListener("click", this.toggleMenu);
        this.menuOpenBtn.addEventListener("click", this.toggleMenu);
        this.addProjectBtn.addEventListener("click", this.showAddProjectModal);
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

    showAddProjectModal = () => {
        this.addProjectModal.showModal();
    }
}