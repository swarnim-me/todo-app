import applicationController from '../controllers/applicationController';
import '../css/confirmDeleteModal.css';

class ConfirmDeleteModal {
    constructor() {
        this.confirmModal = document.querySelector(".confirm-delete-modal");
        this.confirmBtn = document.querySelector(".confirm-delete-btn");
        this.cancelBtn = document.querySelector(".confirm-cancel-btn");
        this.modalTitle = document.querySelector(".confirm-modal-type");
        this.bindEvents();
    }

    bindEvents = () => {
        this.cancelBtn.addEventListener("click", this.closeModal);
        this.confirmBtn.addEventListener("click", this.deleteTodo);
    }

    registerTodo = (todo) => {
        this.todo = todo;
        this.modalTitle.textContent = todo.title;
        this.confirmModal.showModal();
    }

    registerProject = (project) => {
        this.project = project;
        this.modalTitle.textContent = project.title;
        this.confirmModal.showModal();
    }

    deleteTodo = () => {
        if (this.todo) {
            applicationController.deleteTodo(this.todo);
            delete this.todo;
            this.confirmModal.close();
        }
        else if (this.project) {
            applicationController.deleteProject(this.project);
            delete this.project;
            this.confirmModal.close();
        }
    }

    closeModal = () => {
        this.confirmModal.close();
    }
}

export default new ConfirmDeleteModal();