export default class DbHelper {
	constructor() {
		if (!localStorage.getItem("data")) {
			localStorage.setItem(
				"data",
				JSON.stringify({
					projects: [{ id: 0, title: "Inbox" }],
					todos: [],
					nextTodoId: 0,
					nextProjectId: 1, // Default project is "Inbox"
					theme: "light",
				})
			);
		}
	}
	getDbItems = () => {
		return JSON.parse(localStorage.getItem("data"));
	};

	setDbItems = (value) => {
		localStorage.setItem("data", JSON.stringify(value));
	};

	getTheme = () => {
		return this.getDbItems().theme;
	};

	addTodo = (todo) => {
		const activeDb = this.getDbItems();
		activeDb.todos.push(todo);
		activeDb.nextTodoId++;
		this.setDbItems(activeDb);
	};

	addProject = (project) => {
		const activeDb = this.getDbItems();
		activeDb.projects.push(project);
		activeDb.nextProjectId++;
		this.setDbItems(activeDb);
	};

	getTodoById = (id) => {
		const activeDb = this.getDbItems();
		return activeDb.todos.find((todo) => todo.id === id);
	};

	getProjectById = (id) => {
		const activeDb = this.getDbItems();
		return activeDb.projects.find((project) => project.id === Number(id));
	};

	getAllTodos = () => {
		const activeDb = this.getDbItems();
		return activeDb.todos;
	};

	getAllProjects = () => {
		const activeDb = this.getDbItems();
		return activeDb.projects;
	};

	updateTodo = (todo) => {
		const activeDb = this.getDbItems();
		activeDb.todos.forEach((oldTodo, index) => {
			if (todo.id === oldTodo.id) {
				activeDb.todos[index] = { ...oldTodo, ...todo };
			}
		});
		this.setDbItems(activeDb);
	};

	updateProject = (project) => {
		const activeDb = this.getDbItems();
		activeDb.projects.forEach((oldProject, index) => {
			if (project.id === oldProject.id) {
				activeDb.projects[index] = { ...oldProject, ...project };
			}
		});
		this.setDbItems(activeDb);
	};

	getNextTodoId = () => {
		return this.getDbItems().nextTodoId;
	};

	getNextProjectId = () => {
		return this.getDbItems().nextProjectId;
	};

	deleteTodo = (todo) => {
		const activeDb = this.getDbItems();
		const updatedDb = {
			...activeDb,
			todos: activeDb.todos.filter((dbTodo) => dbTodo.id !== todo.id),
		};
		this.setDbItems(updatedDb);
	};

	deleteProject = (project) => {
		const activeDb = this.getDbItems();
		let updatedDb = {
			...activeDb,
			projects: activeDb.projects.filter(
				(dbProject) => dbProject.id !== project.id
			),
			// Setting up all the todos with deleted project to 0 (Inbox)
			todos: activeDb.todos.map((todo) => {
				if (parseInt(todo.project) === project.id) {
					return { ...todo, project: 0 };
				}
				return todo;
			}),
		};
		console.log(updatedDb);
		this.setDbItems(updatedDb);
	};

	setTheme(theme) {
		const activeDb = this.getDbItems();
		const updatedDb = { ...activeDb, theme: theme };
		this.setDbItems(updatedDb);
	}
	// TODO: Write Update Todo, Delete Todo, Delete Project methods
}
