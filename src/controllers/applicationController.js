import databaseController from "./databaseController";
import renderController from "./renderController";

class ApplicationController {
    constructor() {
        this.tab = "all";
        this.sortBy = "none";
    }

    registerTab = (tab, type = "project") => {
        if (tab === "ignore") return;
        this.tab = tab;
        renderController.setActiveTab(tab, type);
        this.refreshTodos();
    }

    addTodo = (todo) => {
        if (todo.id != null) {
            // Edit logic
            databaseController.updateTodo(todo);
        }
        else {
            const newTodo = databaseController.addTodo(todo);
            renderController.createTodo(newTodo);
        }
        this.refreshTodos();
    }

    addProject = (project) => {
        if (project.id != null) {
            databaseController.updateProject(project);
        }
        else {
            const newProject = databaseController.addProject(project);
            renderController.createProject(newProject);
        }
        renderController.refreshAllProjects(databaseController.getAllProjects());
    }

    deleteTodo = (todo) => {
        databaseController.deleteTodo(todo);
        this.refreshTodos();
    }

    deleteProject = (project) => {
        databaseController.deleteProject(project);
        renderController.refreshAllProjects(databaseController.getAllProjects());
        this.refreshTodos();
    }

    sortTodos = (sortBy) => {
        this.sortBy = sortBy;
        this.refreshTodos();
    }


    refreshTodos() {
        if (this.sortBy === "none") return renderController.refreshAllTodos(databaseController.getTodosByTab(this.tab));
        renderController.refreshAllTodos(databaseController.getSortedTodos(this.sortBy, databaseController.getTodosByTab(this.tab)));
    }
}

export default new ApplicationController();