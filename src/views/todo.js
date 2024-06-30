import ScreenController from "../controllers/screenController";

export default class TodoEle {
    constructor(todo) {
        this.screenController = new ScreenController();
        this.todoEle = document.createElement("div");
        this.todoEle.setAttribute("id", todo.id);
        this.todoEle.classList.add("todo");
        this.todo = todo;
        this.createTodo();
    }

    createTodo() {
        const todoInfoEle = document.createElement("div");
        todoInfoEle.classList.add("todo-info");

        const todoDescriptionEle = document.createElement("div");
        todoDescriptionEle.classList.add("todo-description", "hide-description");
        todoDescriptionEle.textContent = this.todo.notes;

        const todoHeaderEle = document.createElement("div");
        todoHeaderEle.classList.add("todo-header");

        const todoCheckboxEle = document.createElement("input");
        todoCheckboxEle.setAttribute("type", "checkbox");
        if (this.todo.isCompleted) todoCheckboxEle.setAttribute("checked", true);
        todoCheckboxEle.classList.add("todo-checkbox");
        todoCheckboxEle.addEventListener("click", this.toggleComplete);

        const todoTitleEle = document.createElement("todo-title");
        todoTitleEle.classList.add("todo-title");
        todoTitleEle.textContent = this.todo.title;
        if (this.todo.isCompleted) todoTitleEle.style.textDecoration = "line-through";

        todoHeaderEle.append(todoCheckboxEle, todoTitleEle);

        const todoFooterEle = document.createElement("div");
        todoFooterEle.classList.add("todo-footer");

        const todoDueDateEle = document.createElement("div");
        todoDueDateEle.classList.add(".todo-due-date");
        todoDueDateEle.textContent = this.todo.dueDate;

        const todoProjectEle = document.createElement("div");
        todoProjectEle.classList.add("todo-project");
        todoProjectEle.textContent = this.todo.project;

        const todoPriorityEle = document.createElement("div");
        todoPriorityEle.classList.add("todo-priority");
        todoPriorityEle.style.background = getComputedStyle(document.body).getPropertyValue(`--${this.todo.priority}-priority`);

        todoFooterEle.append(todoDueDateEle, todoProjectEle, todoPriorityEle);

        todoInfoEle.append(todoHeaderEle, todoFooterEle);

        this.bindEvents();
        this.todoEle.append(todoInfoEle, todoDescriptionEle);

        this.screenController.addTodoToScreen(this.todoEle);
    }

    bindEvents() {
        this.todoEle.addEventListener("click", this.toggleDescription);
    }

    toggleComplete = (event) => {
        event.stopPropagation();
        const checkboxEle = this.getChildElement(this.todoEle, '.todo-checkbox');
        const titleEle = this.getChildElement(this.todoEle, '.todo-title');
        if (checkboxEle.checked) {
            this.screenController.updateTodo({ ...this.todo, isCompleted: true });
            titleEle.style.textDecoration = "line-through";
        }
        else {
            this.screenController.updateTodo({ ...this.todo, isCompleted: false });
            titleEle.style.textDecoration = "none";
        }
    }

    toggleDescription = () => {
        const todoDescriptionEle = Array.from(this.todoEle.children)[1];
        todoDescriptionEle.classList.toggle("hide-description");
    }

    getChildElement(parent, selector) {
        return parent.querySelector(selector);
    }
}
