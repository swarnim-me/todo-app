import '../css/dashboard.css';

export default class Dashboard {
    constructor() {
        this.createTodoBtn = document.querySelector(".create-todo-btn");
        this.addTodoDialog = document.querySelector(".add-todo-dialog");
        this.bindEvents();
    }

    bindEvents = () => {
        this.createTodoBtn.addEventListener("click", this.showAddTodoDialog);
    }

    showAddTodoDialog = () => {
        this.addTodoDialog.showModal();
    }
}