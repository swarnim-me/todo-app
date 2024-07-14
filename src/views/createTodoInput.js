import applicationController from "../controllers/applicationController";
import dateHelper from "../utils/dateHelper";

class CreateTodoInput {
    constructor() {
        this.createTodoInput = document.querySelector(".create-todo-input");
        this.bindEvents();
    }

    bindEvents() {
        this.createTodoInput.addEventListener("keydown", this.getTodoInput);
        window.addEventListener("keydown", this.focusTodoInput);
    }

    focusTodoInput = (event) => {
        if (event.ctrlKey && event.key === "k") {
            this.createTodoInput.focus();
        }
    }

    getTodoInput = (event) => {
        if (this.createTodoInput.value.length > 0 && event.key === "Enter") {
            this.addTodo();
        }
    }

    addTodo = () => {
        const newTodo = {
            title: this.createTodoInput.value,
            dueDate: dateHelper.getDateWithoutTime(new Date()),
            priority: "low",
            notes: "No description",
            project: 0,
        }
        applicationController.addTodo(newTodo);
        this.createTodoInput.value = "";
    }


}

export default new CreateTodoInput();