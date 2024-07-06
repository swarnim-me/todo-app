import ScreenController from '../controllers/screenController';
import '../css/addTodoModal.css';
import Formatter from '../utils/formatter';

export default class AddTodoDialog {
    constructor(projects, todo = {}) {
        this.todo = todo;
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
        if (Object.keys(this.todo).length !== 0) this.setupEditModal();
    }

    bindEvents = () => {
        this.submitTodoBtn.addEventListener("click", this.addTodoToDb);
    }

    setupEditModal() {
        console.log(this.todoPriority);
        console.log(this.todo.priority);
        this.todoTitle.value = this.todo.title;
        this.todoDueDate.value = this.todo.dueDate;
        this.todoPriority.forEach(priority => { if (priority.value === this.todo.priority) priority.checked = true });
        this.todoNotes.value = this.todo.notes;
        this.todoProject.value = Number(this.todo.project);
    }

    setupProjectsDropdown() {
        this.todoProject.innerHTML = "";
        this.projects.forEach(project => {
            const newOption = document.createElement("option");
            newOption.setAttribute("value", project.id);
            // Capitalising first letter in the dropdown
            newOption.textContent = Formatter.capitalize(project.title);
            this.todoProject.append(newOption);
        })
    }

    addTodoToDb = (event) => {
        // Get priority from radio buttons
        let todoPriority;
        this.todoPriority.forEach(priority => {
            if (priority.checked) {
                todoPriority = priority.value;
            }
        })
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
            this.clearInputs();
            this.addTodoModal.close();
        }
    }

    clearInputs() {
        this.addTodoForm.reset();
    }

    showModal() {
        this.addTodoModal.showModal();
    }
}