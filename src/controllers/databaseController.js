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
        const todayDate = new Date();
        let output = this.getAllTodos();
        switch (tab) {
            case "inbox": return output.filter(todo => {
                return Number(todo.project) === 0;
            })
            case "today": return output.filter(todo => {
                return dateHelper.compareToday(todo.dueDate)
            })
            case "week": return output.filter(todo => {
                return dateHelper.isTodoInUpcomingWeek(todo.dueDate);
            })
        }
        return output;
    }
}

export default new DatabaseController();