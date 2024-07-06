import DbHelper from '../models/dbHelper';
import Todo from '../models/todo';
import Project from '../models/project';
import ProjectEle from '../views/project';
import TodoEle from '../views/todo';
import ProjectsHelper from '../utils/projectsHelper';
import AddTodoModal from '../views/addTodoModal';

export default class ScreenController {
    constructor() {
        this.dbHelper = new DbHelper();
        this.updateProjects = new ProjectsHelper();
        this.todosWrapperEle = document.querySelector(".todos-wrapper");
        this.projectSideBarEle = document.querySelector(".project-list");
    }

    addTodo = (todo) => {
        const newTodo = new Todo({ ...todo, id: this.dbHelper.getNextTodoId() });
        this.dbHelper.addTodo(newTodo);
        // Mapping Project ID before creating Todo Element
        new TodoEle({ ...newTodo, project: this.dbHelper.getProjectById(Number(newTodo.project)).title });
    }

    addProject = (project) => {
        const newProject = new Project({ ...project, id: this.dbHelper.getNextProjectId() });
        this.dbHelper.addProject(newProject);
        new ProjectEle(newProject);
        this.updateProjects.updateProjects(newProject);

    }

    editTodo(todo) {
        console.log(todo);
        this.addTodoModal = new AddTodoModal(this.dbHelper.getAllProjects(), this.dbHelper.getTodoById(todo.id));
        this.addTodoModal.showModal();
    }


    addTodoToScreen(todoEle) {
        this.todosWrapperEle.appendChild(todoEle);
    }

    addProjectToScreen(projectEle) {
        this.projectSideBarEle.appendChild(projectEle);
    }
}