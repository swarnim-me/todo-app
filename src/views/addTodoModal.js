import applicationController from '../controllers/applicationController';
import databaseController from '../controllers/databaseController';
import '../css/addTodoModal.css';
import Formatter from '../utils/formatter';

class AddTodoDialog {
    constructor() {
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
        this.submitTodoBtn.addEventListener("click", this.addTodoToDb);
    }

    setupEditModal(todo) {
        this.todo = todo;
        this.todoTitle.value = todo.title;
        this.todoDueDate.value = todo.dueDate;
        this.todoPriority.forEach(priority => { if (priority.value === todo.priority) priority.checked = true });
        this.todoNotes.value = todo.notes;
        this.todoProject.value = Number(todo.project);
    }

    setupProjectsDropdown(projects = databaseController.getAllProjects()) {
        this.todoProject.innerHTML = "";
        projects.forEach(project => {
            this.addProjectToDropdown(project);
        })
    }

    addTodoToDb = (event) => {
        console.log(this.todo);
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
                id: this.todo?.id ?? null,
                title: this.todoTitle.value,
                dueDate: this.todoDueDate.value,
                priority: todoPriority,
                notes: this.todoNotes.value,
                project: this.todoProject.value,
            };
            applicationController.addTodo(newTodo);
            this.addTodoForm.reset();
            this.addTodoModal.close();
            delete this.todo;
        }
    }


    showModal() {
        this.addTodoModal.showModal();
    }

    addProjectToDropdown(project) {
        const newProjectEle = document.createElement("option");
        newProjectEle.setAttribute("value", project.id);
        newProjectEle.textContent = Formatter.capitalize(project.title);
        this.todoProject.appendChild(newProjectEle);
    }
}

export default new AddTodoDialog();