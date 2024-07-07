import ScreenController from '../controllers/screenController';
import '../css/addProjectModal.css';

class AddProjectModal {
    constructor() {
        console.log("HEY");
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
            ScreenController.addProject(newProject);
            this.clearInputs();
            this.addProjectModal.close();
        }
    }

    clearInputs() {
        this.addProjectForm.reset();
    }
}

export default new AddProjectModal();