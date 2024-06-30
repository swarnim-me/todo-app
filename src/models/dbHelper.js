export default class DbHelper {
    constructor() {
        if (!localStorage.getItem("data")) {
            localStorage.setItem("data", JSON.stringify({
                projects: [{ id: 0, title: "Inbox" }],
                todos: []
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
        activeDb.todos.forEach((todo) => {
            if (todo.id === id) return todo;
        })
    }

    getTotalTodos = () => {
        const activeDb = this.getDbItems();
        return activeDb.todos.length;
    }

    getTotalProjects = () => {
        const activeDb = this.getDbItems();
        return activeDb.project.length;
    }
    // TODO: Write Update Todo, Delete Todo, Delete Project methods
}