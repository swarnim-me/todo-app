import ScreenController from '../controllers/screenController';

export default class AddTodoDialog {
    constructor() {
        this.screenController = new ScreenController()
        this.addTodoForm = document.querySelector(".add-todo-form")
        this.submitTodoBtn = document.querySelector(".submit-todo-btn");
        this.todoTitle = document.querySelector("#title-input");
        this.todoDueDate = document.querySelector("#date-input");
        this.todoPriority = document.querySelector("input[name='priority-input'");
        this.todoNotes = document.querySelector("#notes-input");
        this.todoProject = document.querySelector("#project-input");
        this.bindEvents();
    }

    bindEvents = () => {
        this.submitTodoBtn.addEventListener("click", this.submitTodo);
    }

    submitTodo = (event) => {
        // event.preventDefault();
        event.preventDefault();
        const checkStatus = this.addTodoForm.checkValidity();
        this.addTodoForm.reportValidity();
        if (checkStatus) {
            const newTodo = {
                title: this.todoTitle.value,
                dueDate: this.todoDueDate.value,
                priority: this.todoPriority.value,
                notes: this.todoNotes.value,
                project: this.todoProject.value,
            }
            this.screenController.addTodo(newTodo);
            // console.log(newTodo);
        }
    }

}