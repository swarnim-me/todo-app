import Formatter from "../utils/formatter";
import TodoEle from "../views/todo";
import ProjectEle from "../views/project";

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

    createTodo(todo) {
        new TodoEle(todo);
    }

    createProject(project) {
        new ProjectEle(project);
        this.updateProjects(project); // Update dropdown of Add Todo Modal
    }
}

export default new Renderer();