import ScreenController from '../controllers/screenController';
import Todo from '../models/todo';

export default class AddTodoDialog {
    constructor() {
        this.screenController = new ScreenController()
        this.addTodoForm = document.querySelector(".add-todo-form")
        this.submitTodoBtn = document.querySelector(".submit-todo-btn");
        this.todoTitle = document.querySelector("#title-input");
        this.todoDueDate = document.querySelector("#date-input");
        this.todoPriority = document.querySelectorAll('input[name="priority-input"]');
        this.todoNotes = document.querySelector("#notes-input");
        this.todoProject = document.querySelector("#project-input");
        this.bindEvents();
    }

    bindEvents = () => {
        this.submitTodoBtn.addEventListener("click", this.submitTodo);
    }

    submitTodo = (event) => {
        // Get priority from radio buttons
        let todoPriority;
        this.todoPriority.forEach(priority => {
            if (priority.checked) {
                todoPriority = priority.value;
            }
        })
        // event.preventDefault();
        console.log(this.todoPriority);
        event.preventDefault();
        const checkStatus = this.addTodoForm.checkValidity();
        this.addTodoForm.reportValidity();
        if (checkStatus) {
            const newTodo = {
                title: this.todoTitle.value,
                dueDate: this.todoDueDate.value,
                priority: todoPriority,
                notes: this.todoNotes.value,
                project: this.todoProject.value,
            };
            this.screenController.addTodo(newTodo);
            // console.log(newTodo);
        }
    }

}