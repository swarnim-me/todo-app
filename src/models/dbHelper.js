export default class DbHelper {
    constructor() {
        if (!localStorage.getItem("data")) {
            localStorage.setItem("data", JSON.stringify({
                projects: [{ id: 0, title: "Inbox" }],
                todos: [],
                nextId: 0
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
        activeDb.nextId++;
        this.setDbItems(activeDb);
    }

    addProject = (project) => {
        const activeDb = this.getDbItems();
        activeDb.projects.push(project);
        this.setDbItems(activeDb);
    }

    getTodoById = (id) => {
        const activeDb = this.getDbItems();
        activeDb.todos.forEach((todo) => {
            if (todo.id === id) return todo;
        })
    }

    getProjectById = (id) => {
        const activeDb = this.getDbItems();
        return activeDb.projects.find((project) => project.id === id);
    }

    getAllTodos = () => {
        const activeDb = this.getDbItems();
        return activeDb.todos.length;
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

    getNextId = () => {
        return this.getDbItems().nextId;
    }
    // TODO: Write Update Todo, Delete Todo, Delete Project methods
}