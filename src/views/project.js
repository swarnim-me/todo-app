import ScreenController from "../controllers/screenController";

export default class ProjectEle {
    constructor(project) {
        this.screenController = new ScreenController();
        this.project = project;
        this.projectEle = document.createElement("li");
        this.createProject();
    }

    createProject() {
        this.projectEle.classList.add("project-list-item");
        this.projectEle.setAttribute("id", this.project.id);
        this.projectEle.textContent = this.project.title;
        this.screenController.addProjectToScreen(this.projectEle);
    }
}