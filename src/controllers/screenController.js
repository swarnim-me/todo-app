import DbHelper from '../models/dbHelper';
import Todo from '../models/todo';
import Project from '../models/project';
import ProjectEle from '../views/project';
import TodoEle from '../views/todo';
import ProjectsHelper from '../utils/projectsHelper';

export default class ScreenController {
    constructor() {
        this.dbHelper = new DbHelper();
        this.updateProjects = new ProjectsHelper();
        this.todosWrapperEle = document.querySelector(".todos-wrapper");
        this.projectSideBarEle = document.querySelector(".project-list");
    }

    addTodo = (todo) => {
        // If todo already has an id, then edit case
        if (todo.id != null) {
            // Edit logic
            this.dbHelper.updateTodo(todo);
            this.refreshTodos();
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
        this.updateProjects.updateProjects(newProject);

    }

    addTodoToScreen(todoEle) {
        this.todosWrapperEle.appendChild(todoEle);
    }

    addProjectToScreen(projectEle) {
        this.projectSideBarEle.appendChild(projectEle);
    }

    getProjectById(id) {
        return this.dbHelper.getProjectById(id);
    }

    getAllProjects() {
        return this.dbHelper.getAllProjects();
    }

    refreshTodos(todos = this.dbHelper.getAllTodos()) {
        console.log(todos);
        this.todosWrapperEle.innerHTML = "";
        todos.forEach(todo => {
            new TodoEle(todo);
        });
    }


}