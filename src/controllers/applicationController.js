import databaseController from "./databaseController";
import renderController from "./renderController";

class ApplicationController {
    constructor() {
        this.tab = "all";
    }

    registerTab = (tab, type = "project") => {
        if (tab === "projects") return;
        this.tab = tab;
        renderController.setActiveTab(tab, type);
        renderController.refreshAllTodos(databaseController.getTodosByTab(this.tab));
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
        renderController.refreshAllTodos(databaseController.getTodosByTab(this.tab));
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
        renderController.refreshAllTodos(databaseController.getTodosByTab(this.tab));
    }

    deleteProject = (project) => {
        databaseController.deleteProject(project);
        renderController.refreshAllProjects(databaseController.getAllProjects());
        renderController.refreshAllTodos(databaseController.getTodosByTab(this.tab));
    }
}

export default new ApplicationController();