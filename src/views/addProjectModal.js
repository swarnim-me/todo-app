import applicationController from '../controllers/applicationController';
import '../css/addProjectModal.css';

class AddProjectModal {
    constructor() {
        this.addProjectForm = document.querySelector(".add-project-form");
        this.projectTitleInputEle = document.querySelector("#add-project-input");
        this.addProjectBtn = document.querySelector(".submit-project-btn");
        this.addProjectModal = document.querySelector(".add-project-modal");
        this.modalTitle = document.querySelector(".add-project-modal h1");
        this.bindEvents();
    }

    bindEvents() {
        this.addProjectBtn.addEventListener("click", this.addProjectToDb);
    }

    registerProject(project) {
        this.project = project;
        this.projectTitleInputEle.value = project.title;
    }

    addProjectToDb = (event) => {
        event.preventDefault();
        const checkStatus = this.addProjectForm.checkValidity();
        this.addProjectForm.reportValidity();
        if (checkStatus) {
            const newProject = {
                id: this.project ? this.project.id : null,
                title: this.projectTitleInputEle.value,
            };
            applicationController.addProject(newProject);
            // this.clearInputs();
            this.addProjectModal.close();
        }
        delete this.project;
    }

    showModal() {
        this.addProjectModal.showModal();
    }
}

export default new AddProjectModal();