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
        new TodoEle(newTodo);
        this.dbHelper.addTodo(newTodo);
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