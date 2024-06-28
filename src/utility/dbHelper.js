const DbHelper = (function () {
    const getDbItems = () => {
        return localStorage.getItem("data");
    }

    const addTodo = (todo) => {
        const activeDb = getDbItems();
        activeDb.todos.push(todo);
        localStorage.setItem("data", value);
    }

    const addProject = (todo) => {
        const activeDb = getDbItems();
        activeDb.projects.push(todo);
        localStorage.setItem("data", value);
    }

    const getTodoById = (id) => {
        const activeDb = getDbItems();
        activeDb.todos.forEach((todo) => {
            if (todo.id === id) return todo;
        })
    }

    const getProjectById = (id) => {
        const activeDb = getDbItems();
        activeDb.todos.forEach((todo) => {
            if (todo.id === id) return todo;
        })
    }

    return { addTodo, addProject, getTodoById, getProjectById };
})();

export default DbHelper;