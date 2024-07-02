import DbHelper from '../models/dbHelper';
import Todo from '../models/todo';
import TodoEle from '../views/todo';

export default class ScreenController {
    constructor() {
        this.dbHelper = new DbHelper();
        this.todosWrapperEle = document.querySelector(".todos-wrapper");
        this.projectSideBarEle = document.querySelector(".project-list");
    }
    addTodo = (todo) => {
        const newTodo = new Todo({ ...todo, id: this.dbHelper.getNextId() });
        this.dbHelper.addTodo(newTodo);
        // Mapping Project ID before creating Todo Element
        new TodoEle({ ...newTodo, project: this.dbHelper.getProjectById(Number(newTodo.project)).title });
    }

    addProject = (project) => {
        this.dbHelper.addProject(project);
    }

    updateTodo = (todo) => {
        this.dbHelper.updateTodo(todo);
    }

    addTodoToScreen(todoEle) {
        this.todosWrapperEle.appendChild(todoEle);
    }

    addProjectToScreen(projectEle) {
        this.projectSideBarEle.appendChild(projectEle);
    }
}