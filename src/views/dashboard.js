import '../css/dashboard.css';
import modalHelper from '../utils/modalHelper';

export default class Dashboard {
    constructor() {
        this.createTodoBtn = document.querySelector(".create-todo-btn");
        this.addTodoDialog = document.querySelector(".add-todo-modal");
        this.bindEvents();
    }

    bindEvents = () => {
        this.createTodoBtn.addEventListener("click", this.showAddTodoDialog);
    }

    showAddTodoDialog = () => {
        modalHelper.showAddTodoModal();
    }
}