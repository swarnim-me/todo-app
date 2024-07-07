import DbHelper from '../models/dbHelper';
import Todo from '../models/todo';
import Project from '../models/project';
import renderer from './renderController';

class DatabaseController {
    constructor() {
        this.dbHelper = new DbHelper();
    }

    addTodo = (todo) => {
        // If todo already has an id, then edit case
        if (todo.id != null) {
            // Edit logic
            this.dbHelper.updateTodo(todo);
            renderer.refreshAllTodos(this.dbHelper.getAllTodos());
        }
        else {
            const newTodo = new Todo({ ...todo, id: this.dbHelper.getNextTodoId() });
            this.dbHelper.addTodo(newTodo);
            renderer.createTodo(newTodo);
        }
        // Mapping Project ID before creating Todo Element
    }

    addProject = (project) => {
        const newProject = new Project({ ...project, id: this.dbHelper.getNextProjectId() });
        this.dbHelper.addProject(newProject);
        renderer.createProject(newProject);
    }

    deleteTodo = (todo) => {
        this.dbHelper.deleteTodo(todo);
        renderer.refreshAllTodos(this.dbHelper.getAllTodos());
    }

    getProjectById(id) {
        return this.dbHelper.getProjectById(id);
    }

    getAllProjects() {
        return this.dbHelper.getAllProjects();
    }
}

export default new DatabaseController();