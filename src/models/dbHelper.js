export default class DbHelper {
    getDbItems = () => {
        return localStorage.getItem("data");
    }

    setDbItems = (value) => {
        localStorage.setItem("data", value);
    }

    addTodo = (todo) => {
        const activeDb = getDbItems();
        activeDb.todos.push(todo);
        setDbItems(activeDb);
    }

    addProject = (project) => {
        const activeDb = getDbItems();
        activeDb.projects.push(project);
        setDbItems(activeDb);
    }

    getTodoById = (id) => {
        const activeDb = getDbItems();
        activeDb.todos.forEach((todo) => {
            if (todo.id === id) return todo;
        })
    }

    getProjectById = (id) => {
        const activeDb = getDbItems();
        activeDb.todos.forEach((todo) => {
            if (todo.id === id) return todo;
        })
    }
    // TODO: Write Update Todo, Delete Todo, Delete Project methods
}