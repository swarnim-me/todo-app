import DbHelper from '../models/dbHelper';
import Todo from '../models/todo';
import Project from '../models/project';
import dateHelper from '../utils/dateHelper';

class DatabaseController {
    constructor() {
        this.dbHelper = new DbHelper();
    }

    addTodo = (todo) => {
        const newTodo = new Todo({ ...todo, id: this.dbHelper.getNextTodoId() });
        this.dbHelper.addTodo(newTodo);
        return newTodo;
    }

    addProject = (project) => {
        const newProject = new Project({ ...project, id: this.dbHelper.getNextProjectId() });
        this.dbHelper.addProject(newProject);
        return newProject;
    }

    updateTodo = (todo) => {
        this.dbHelper.updateTodo(todo);
    }

    updateProject = (project) => {
        this.dbHelper.updateProject(project);
    }

    deleteTodo = (todo) => {
        this.dbHelper.deleteTodo(todo);
    }

    deleteProject = (project) => {
        this.dbHelper.deleteProject(project);
    }

    getProjectById(id) {
        return this.dbHelper.getProjectById(id);
    }

    getAllProjects() {
        return this.dbHelper.getAllProjects();
    }

    getAllTodos() {
        return this.dbHelper.getAllTodos();
    }

    getTodosByTab(tab) {
        let output = this.getAllTodos();
        switch (tab) {
            case "all": return output;
            case "inbox": return output.filter(todo => {
                return Number(todo.project) === 0;
            })
            case "today": return output.filter(todo => {
                return dateHelper.compareToday(todo.dueDate)
            })
            case "week": return output.filter(todo => {
                return dateHelper.isTodoInUpcomingWeek(todo.dueDate);
            })
            default: return output.filter(todo => {
                return Number(todo.project) === Number(tab);
            })
        }
    }

    getSortedTodos(sortBy, todos) {
        switch (sortBy) {
            case "priority":
                return todos.sort(function (todo1, todo2) {
                    const priorityMap = {
                        "low": 0,
                        "medium": 1,
                        "high": 2
                    };
                    return priorityMap[todo2.priority] - priorityMap[todo1.priority];
                })
            case "date":
                return dateHelper.sortTodosByDate(todos);
            case "project":
                return todos.sort((todo1, todo2) => todo1.project - todo2.project);
        }
    }

    setTheme(theme) {
        this.dbHelper.setTheme(theme);
    }

    getTheme() {
        return this.dbHelper.getTheme();
    }
}

export default new DatabaseController();