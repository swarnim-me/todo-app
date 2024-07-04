import ScreenController from '../controllers/screenController';
import '../css/addTodoModal.css';

export default class AddTodoDialog {
    constructor(projects) {
        this.screenController = new ScreenController()
        this.projects = projects;
        this.addTodoForm = document.querySelector(".add-todo-form")
        this.addTodoModal = document.querySelector(".add-todo-modal");
        this.submitTodoBtn = document.querySelector(".submit-todo-btn");
        this.todoTitle = document.querySelector("#title-input");
        this.todoDueDate = document.querySelector("#date-input");
        this.todoPriority = document.querySelectorAll('input[name="priority-input"]');
        this.todoNotes = document.querySelector("#notes-input");
        this.todoProject = document.querySelector("#project-input");
        this.bindEvents();
        this.setupProjectsDropdown();
    }

    bindEvents = () => {
        this.submitTodoBtn.addEventListener("click", this.submitTodo);
    }

    setupProjectsDropdown() {
        this.todoProject.innerHTML = "";
        this.projects.forEach(project => {
            const newOption = document.createElement("option");
            newOption.setAttribute("value", project.id);
            // Capitalising first letter in the dropdown
            newOption.textContent = project.title.charAt(0).toUpperCase() + project.title.slice(1);
            this.todoProject.append(newOption);
        })
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
            this.addTodoModal.close();
        }
    }

}