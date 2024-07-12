import applicationController from "../controllers/applicationController";
import renderController from "../controllers/renderController";

export default class ProjectEle {
    constructor(project) {
        this.project = project;
        this.projectEle = document.createElement("li");
        this.createProject();
    }

    createProject() {
        this.projectEle.classList.add("project-list-item");
        this.projectEle.setAttribute("data-id", this.project.id);
        this.projectEle.textContent = this.project.title;
        this.projectEle.addEventListener("click", this.showProjectTodos)
        renderController.addProjectToScreen(this.projectEle);
    }

    showProjectTodos = () => {
        applicationController.registerTab(this.project.id, "project");
    }

}