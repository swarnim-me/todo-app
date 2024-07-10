import '../css/manageProjectsModal.css';
import databaseController from '../controllers/databaseController';
import editIcon from '../assets/icons/pencil.svg';
import deleteIcon from '../assets/icons/delete.svg';
import Formatter from '../utils/formatter';
import addProjectModal from './addProjectModal';
import confirmModal from './confirmModal';

class ManageProjectsModal {
    constructor() {
        this.viewProjectsModal = document.querySelector(".view-projects-modal");
        this.projectsList = document.querySelector(".manage-projects-list");
        this.setupProjects();
    }

    showModal() {
        this.viewProjectsModal.showModal();
    }

    setupProjects(projects = databaseController.getAllProjects()) {
        this.projectsList.innerHTML = "";
        projects.forEach(project => this.addProject(project));
    }

    addProject(project) {
        if (project.id === 0) return;
        const newProjectEle = document.createElement("li");
        newProjectEle.classList.add("manage-projects-list-item");

        const projectTitleEle = document.createElement("p");
        projectTitleEle.classList.add("manage-project-title");
        projectTitleEle.textContent = Formatter.capitalize(project.title);

        const utilityBtnsWrapper = document.createElement("div");
        utilityBtnsWrapper.classList.add("manage-project-utility-btns");

        const editIconEle = document.createElement("img");
        editIconEle.classList.add("icon", "manage-project-edit");
        editIconEle.setAttribute("src", editIcon);
        editIconEle.setAttribute("alt", "Edit Project");
        editIconEle.addEventListener("click", () => this.editProject(project));

        const deleteIconEle = document.createElement("img");
        deleteIconEle.classList.add("icon", "manage-project-delete");
        deleteIconEle.setAttribute("src", deleteIcon);
        deleteIconEle.setAttribute("alt", "Delete Project");
        deleteIconEle.addEventListener("click", () => this.deleteProject(project));

        utilityBtnsWrapper.append(editIconEle, deleteIconEle);
        newProjectEle.append(projectTitleEle, utilityBtnsWrapper);

        this.projectsList.appendChild(newProjectEle);
    }

    editProject = (project) => {
        // This will be done by the addProjectModal
        addProjectModal.registerProject(project);
        addProjectModal.showModal();
        // applicationController.addProject(project);
    }

    deleteProject = (project) => {
        confirmModal.registerProject(project);
    }
}

export default new ManageProjectsModal();