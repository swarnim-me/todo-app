import AddTodoModal from '../views/addTodoModal';

export default class ModalHelper {
    constructor() {
        this.modal = AddTodoModal;
    }

    showAddTodoModal() {
        AddTodoModal.showModal();
    }

    showEditTodoModal(todo) {
        AddTodoModal.setupEditModal(todo);
        AddTodoModal.showModal();
    }
}