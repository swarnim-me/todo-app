export default class ProjectsHelper {
    constructor() {
        this.projectsDropdownEle = document.querySelector("#project-input");
    }

    updateProjects(project) {
        const newProjectEle = document.createElement("option");
        newProjectEle.setAttribute("value", project.id);
        newProjectEle.textContent = project.title;
        this.projectsDropdownEle.appendChild(newProjectEle);
    }
}