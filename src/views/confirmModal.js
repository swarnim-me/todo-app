import DatabaseController from '../controllers/databaseController';
import '../css/confirmDeleteModal.css';

class ConfirmDeleteModal {
    constructor() {
        this.confirmModal = document.querySelector(".confirm-delete-modal");
        this.confirmBtn = document.querySelector(".confirm-delete-btn");
        this.cancelBtn = document.querySelector(".confirm-cancel-btn");
        this.bindEvents();
    }

    bindEvents = () => {
        this.cancelBtn.addEventListener("click", this.closeModal);
        this.confirmBtn.addEventListener("click", this.deleteTodo);
    }

    registerTodo = (todo) => {
        this.todo = todo;
        this.confirmModal.showModal();
    }

    deleteTodo = () => {
        if (this.todo) {
            DatabaseController.deleteTodo(this.todo);
            this.confirmModal.close();
        }
    }

    closeModal = () => {
        this.confirmModal.close();
    }
}

export default new ConfirmDeleteModal();