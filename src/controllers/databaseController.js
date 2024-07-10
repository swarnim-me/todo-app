import DbHelper from '../models/dbHelper';
import Todo from '../models/todo';
import Project from '../models/project';

class DatabaseController {
    constructor() {
        this.dbHelper = new DbHelper();
    }

    addTodo = (todo) => {
        const newTodo = new Todo({ ...todo, id: this.dbHelper.getNextTodoId() });
        this.dbHelper.addTodo(newTodo);
        return newTodo;
    }

    addProject = (project) => {
        const newProject = new Project({ ...project, id: this.dbHelper.getNextProjectId() });
        this.dbHelper.addProject(newProject);
        return newProject;
    }

    updateTodo = (todo) => {
        this.dbHelper.updateTodo(todo);
    }

    updateProject = (project) => {
        this.dbHelper.updateProject(project);
    }

    deleteTodo = (todo) => {
        this.dbHelper.deleteTodo(todo);
    }

    deleteProject = (project) => {
        this.dbHelper.deleteProject(project);
    }

    getProjectById(id) {
        return this.dbHelper.getProjectById(id);
    }

    getAllProjects() {
        return this.dbHelper.getAllProjects();
    }

    getAllTodos() {
        return this.dbHelper.getAllTodos();
    }
}

export default new DatabaseController();