const DbHelper = (function () {
    const getDbItems = () => {
        return localStorage.getItem("data");
    }

    const setDbItems = (value) => {
        localStorage.setItem("data", value);
    }

    const addTodo = (todo) => {
        const activeDb = getDbItems();
        activeDb.todos.push(todo);
        setDbItems(activeDb);
    }

    const addProject = (project) => {
        const activeDb = getDbItems();
        activeDb.projects.push(project);
        setDbItems(activeDb);
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