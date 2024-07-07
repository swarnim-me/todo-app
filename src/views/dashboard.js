import '../css/dashboard.css';
import ScreenController from '../controllers/screenController';

export default class Dashboard {
    constructor() {
        this.createTodoBtn = document.querySelector(".create-todo-btn");
        this.addTodoDialog = document.querySelector(".add-todo-modal");
        this.screenController = new ScreenController();
        this.bindEvents();
    }

    bindEvents = () => {
        this.createTodoBtn.addEventListener("click", this.showAddTodoDialog);
    }

    showAddTodoDialog = () => {
        this.modalHelper.showAddTodoModal();
    }
}