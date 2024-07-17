import "../css/dashboard.css";
import modalHelper from "../utils/modalHelper";
import createTodoInput from "./createTodoInput";

export default class Dashboard {
	constructor() {
		this.createTodoBtn = document.querySelector(".create-todo-btn");
		this.createTodoInput = document.querySelector(".create-todo-input");
		this.addTodoDialog = document.querySelector(".add-todo-modal");
		this.bindEvents();
	}

	bindEvents = () => {
		this.createTodoBtn.addEventListener("click", this.showAddTodoDialog);
	};

	showAddTodoDialog = () => {
		if (this.createTodoInput.value.length != 0) {
			createTodoInput.addTodo();
		} else {
			modalHelper.showAddTodoModal();
		}
	};
}
