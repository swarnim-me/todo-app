import DbHelper from '../models/dbHelper';
import Todo from '../models/todo';
import Project from '../models/project';
import ProjectEle from '../views/project';
import TodoEle from '../views/todo';
import Renderer from './renderController';

class ScreenController {
    constructor() {
        this.dbHelper = new DbHelper();
    }

    addTodo = (todo) => {
        // If todo already has an id, then edit case
        if (todo.id != null) {
            // Edit logic
            this.dbHelper.updateTodo(todo);
            Renderer.refreshAllTodos(this.dbHelper.getAllTodos());
        }
        else {
            const newTodo = new Todo({ ...todo, id: this.dbHelper.getNextTodoId() });
            this.dbHelper.addTodo(newTodo);
            new TodoEle(newTodo);
        }
        // Mapping Project ID before creating Todo Element
    }

    addProject = (project) => {
        const newProject = new Project({ ...project, id: this.dbHelper.getNextProjectId() });
        this.dbHelper.addProject(newProject);
        new ProjectEle(newProject);
        Renderer.updateProjects(newProject);
    }

    getProjectById(id) {
        return this.dbHelper.getProjectById(id);
    }

    getAllProjects() {
        return this.dbHelper.getAllProjects();
    }
}

export default new ScreenController();