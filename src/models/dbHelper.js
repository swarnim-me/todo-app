export default class DbHelper {
    constructor() {
        if (!localStorage.getItem("data")) {
            localStorage.setItem("data", JSON.stringify({
                projects: [{ id: 0, title: "Inbox" }],
                todos: [],
                nextTodoId: 0,
                nextProjectId: 1 // Default project is "Inbox"
            }))
        }
    }
    getDbItems = () => {
        return JSON.parse(localStorage.getItem("data"));
    }

    setDbItems = (value) => {
        localStorage.setItem("data", JSON.stringify(value));
    }

    addTodo = (todo) => {
        const activeDb = this.getDbItems();
        activeDb.todos.push(todo);
        activeDb.nextTodoId++;
        this.setDbItems(activeDb);
    }

    addProject = (project) => {
        const activeDb = this.getDbItems();
        activeDb.projects.push(project);
        activeDb.nextProjectId++;
        this.setDbItems(activeDb);
    }

    getTodoById = (id) => {
        const activeDb = this.getDbItems();
        return activeDb.todos.find((todo) => todo.id === id);
    }

    getProjectById = (id) => {
        const activeDb = this.getDbItems();
        return activeDb.projects.find((project) => project.id === Number(id));
    }

    getAllTodos = () => {
        const activeDb = this.getDbItems();
        return activeDb.todos;
    }

    getAllProjects = () => {
        const activeDb = this.getDbItems();
        return activeDb.projects;
    }

    updateTodo = (todo) => {
        const activeDb = this.getDbItems();
        activeDb.todos.forEach((oldTodo, index) => {
            if (todo.id === oldTodo.id) {
                activeDb.todos[index] = { ...oldTodo, ...todo };
            }
        })
        this.setDbItems(activeDb);
    }

    getNextTodoId = () => {
        return this.getDbItems().nextTodoId;
    }

    getNextProjectId = () => {
        return this.getDbItems().nextProjectId;
    }
    // TODO: Write Update Todo, Delete Todo, Delete Project methods
}