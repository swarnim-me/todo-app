import ScreenController from '../controllers/screenController';
import '../css/addProjectModal.css';

export default class AddProjectDialog {
    constructor() {
        this.screenController = new ScreenController();
        this.addProjectForm = document.querySelector(".add-project-form");
        this.projectTitleInputEle = document.querySelector("#add-project-input");
        this.addProjectBtn = document.querySelector(".submit-project-btn");
        this.addProjectModal = document.querySelector(".add-project-modal");
        this.bindEvents();
    }

    bindEvents() {
        this.addProjectBtn.addEventListener("click", this.addProjectToDb);
    }

    addProjectToDb = (event) => {
        event.preventDefault();
        const checkStatus = this.addProjectForm.checkValidity();
        this.addProjectForm.reportValidity();
        if (checkStatus) {
            const newProject = {
                title: this.projectTitleInputEle.value,
            };
            this.screenController.addProject(newProject);
            this.addProjectModal.close();
        }
    }
}