import Formatter from "../utils/formatter";

class Renderer {
    constructor() {
        this.projectsDropdownEle = document.querySelector("#project-input");
        this.todosWrapperEle = document.querySelector(".todos-wrapper");
        this.projectSideBarEle = document.querySelector(".project-list");
    }

    updateProjects(project) {
        const newProjectEle = document.createElement("option");
        newProjectEle.setAttribute("value", project.id);
        newProjectEle.textContent = Formatter.capitalize(project.title);
        this.projectsDropdownEle.appendChild(newProjectEle);
    }

    refreshAllTodos(todos) {
        this.todosWrapperEle.innerHTML = "";
        todos.forEach(todo => {
            new TodoEle(todo);
        });
    }

    addTodoToScreen(todoEle) {
        this.todosWrapperEle.appendChild(todoEle);
    }

    addProjectToScreen(projectEle) {
        this.projectSideBarEle.appendChild(projectEle);
    }
}

export default new Renderer();