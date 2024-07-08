import databaseController from "./databaseController";
import renderController from "./renderController";

class ApplicationController {
    constructor() {

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
        renderController.refreshAllTodos(databaseController.getAllTodos());
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
        renderController.refreshAllTodos(databaseController.getAllTodos());
    }
}

export default new ApplicationController();