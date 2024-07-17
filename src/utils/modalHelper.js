import addTodoModal from "../views/addTodoModal";
import "../views/addProjectModal";
import "../views/confirmModal";

class ModalHelper {
	constructor() {
		this.modal = addTodoModal;
	}

	showAddTodoModal() {
		addTodoModal.showModal();
	}

	showEditTodoModal(todo) {
		addTodoModal.setupEditModal(todo);
		addTodoModal.showModal();
	}
}

export default new ModalHelper();
