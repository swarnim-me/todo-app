import '../css/dashboard.css';
import '../css/modal.css';

const createTodoBtn = document.querySelector(".create-todo-btn");
const addTodoDialog = document.querySelector(".add-todo-dialog");

const showEditDialog = () => {
    // addTodoDialog.showModal();
}

const setupDashboardEvents = () => {
    createTodoBtn.addEventListener("click", showEditDialog);
    addTodoDialog.showModal();
}

export default setupDashboardEvents;