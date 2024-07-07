import Renderer from "../controllers/renderController";

export default class ProjectEle {
    constructor(project) {
        this.project = project;
        this.projectEle = document.createElement("li");
        this.createProject();
    }

    createProject() {
        this.projectEle.classList.add("project-list-item");
        this.projectEle.setAttribute("id", this.project.id);
        this.projectEle.textContent = this.project.title;
        Renderer.addProjectToScreen(this.projectEle);
    }
}