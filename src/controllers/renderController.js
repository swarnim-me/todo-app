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

    updateProjects(projects) {
        addTodoModal.setupProjectsDropdown(projects);
        manageProjectsModal.setupProjects(projects);
    }

    refreshAllTodos(todos) {
        this.todosWrapperEle.innerHTML = "";
        todos.forEach(todo => {
            this.createTodo(todo);
        });
    }

    refreshAllProjects(projects) {
        this.projectSideBarEle.innerHTML = "";
        projects.forEach(project => {
            this.createProject(project);
        });
        this.updateProjects(projects); // Update dropdown of Add Todo Modal
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
    }

    setActiveTab(tab, type) {
        this.navBtns = Array.from(document.querySelectorAll(".nav-item"));
        this.projectItems = Array.from(document.querySelectorAll(".project-list-item"));
        if (type === "project") {
            this.projectItems.forEach(item => {
                if (Number(item.dataset.id) === Number(tab)) {
                    item.classList.add("active");
                }
                else {
                    item.classList.remove("active");
                }
            })

            this.navBtns.forEach(item => item.classList.remove("active"));
        }
        else if (type === "nav") {
            this.navBtns.forEach(item => {
                if ((item.dataset.itemId) === (tab)) {
                    item.classList.add("active");
                }
                else {
                    item.classList.remove("active");
                }
            })

            this.projectItems.forEach(item => item.classList.remove("active"));
        }
    }
}

export default new Renderer();