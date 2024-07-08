import TodoEle from "../views/todo";
import ProjectEle from "../views/project";
import manageProjectsModal from "../views/manageProjectsModal";
import addTodoModal from "../views/addTodoModal";

class Renderer {
    constructor() {
        this.projectsDropdownEle = document.querySelector("#project-input");
        this.todosWrapperEle = document.querySelector(".todos-wrapper");
        this.projectSideBarEle = document.querySelector(".project-list");
    }

    updateProjects(project) {
        addTodoModal.addProjectToDropdown(project);
        manageProjectsModal.addProject(project);
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