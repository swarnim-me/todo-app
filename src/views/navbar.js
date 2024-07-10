import applicationController from '../controllers/applicationController';
import '../css/nav.css';
import manageProjectsModal from './manageProjectsModal';

export default class Navbar {
    constructor() {
        this.nav = document.querySelector("nav");
        this.menuCloseBtn = document.querySelector(".menu-close-btn");
        this.menuOpenBtn = document.querySelector(".menu-open-btn");
        this.addProjectBtn = document.querySelector(".create-project-btn");
        this.addProjectModal = document.querySelector(".add-project-modal");
        this.viewProjectsBtn = document.querySelector(".view-projects-btn");
        this.navBtns = Array.from(document.querySelectorAll(".nav-item"))
        this.bindEvents();
    }

    bindEvents = () => {
        this.menuCloseBtn.addEventListener("click", this.toggleMenu);
        this.menuOpenBtn.addEventListener("click", this.toggleMenu);
        this.addProjectBtn.addEventListener("click", this.showAddProjectModal);
        this.viewProjectsBtn.addEventListener("click", this.showViewProjectsModal);
        this.navBtns.forEach(navBtn => {
            navBtn.addEventListener("click", this.changeTab);
        })
    }

    changeTab(event) {
        console.log(event.target.dataset.itemId);
        applicationController.changeTab(event.target.dataset.itemId);
    }

    showViewProjectsModal = () => {
        manageProjectsModal.showModal();
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