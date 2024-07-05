import Formatter from "./formatter";

export default class ProjectsHelper {
    constructor() {
        this.projectsDropdownEle = document.querySelector("#project-input");
    }

    updateProjects(project) {
        const newProjectEle = document.createElement("option");
        newProjectEle.setAttribute("value", project.id);
        newProjectEle.textContent = Formatter.capitalize(project.title);
        this.projectsDropdownEle.appendChild(newProjectEle);
    }
}