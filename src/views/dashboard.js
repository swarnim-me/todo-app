import '../css/dashboard.css';
import '../css/modal.css';

export default class Dashboard {
    constructor() {
        this.createTodoBtn = document.querySelector(".create-todo-btn");
        this.addTodoDialog = document.querySelector(".add-todo-dialog");
        this.closeDialogBtn = document.querySelector(".close-dialog-btn");
        this.bindEvents();
    }

    bindEvents = () => {
        this.createTodoBtn.addEventListener("click", this.showAddDialog);
        this.closeDialogBtn.addEventListener("click", this.closeDialog);
    }

    showAddDialog = () => {
        this.addTodoDialog.showModal();
    }

    closeDialog = (event) => {
        event.srcElement.parentElement.close();
    }
}