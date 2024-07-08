import applicationController from '../controllers/applicationController';
import '../css/addProjectModal.css';

class AddProjectModal {
    constructor() {
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
            applicationController.addProject(newProject);
            this.clearInputs();
            this.addProjectModal.close();
        }
    }

    clearInputs() {
        this.addProjectForm.reset();
    }
}

export default new AddProjectModal();