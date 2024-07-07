import '../css/dashboard.css';
import DatabaseController from '../controllers/databaseController';
import ModalHelper from '../utils/modalHelper';

export default class Dashboard {
    constructor() {
        this.createTodoBtn = document.querySelector(".create-todo-btn");
        this.addTodoDialog = document.querySelector(".add-todo-modal");
        this.modalHelper = new ModalHelper();
        this.bindEvents();
    }

    bindEvents = () => {
        this.createTodoBtn.addEventListener("click", this.showAddTodoDialog);
    }

    showAddTodoDialog = () => {
        this.modalHelper.showAddTodoModal();
    }
}