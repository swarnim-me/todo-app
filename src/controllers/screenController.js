import DbHelper from '../models/dbHelper';
import Todo from '../models/todo';

export default class {
    constructor() {
        this.dbHelper = new DbHelper();
    }
    addTodo = (todo) => {
        const id = this.dbHelper.getTotalTodos();
        const newTodo = new Todo({ id, ...todo });
        this.dbHelper.addTodo(newTodo);
    }

    addProject = (project) => {
        this.dbHelper.addProject(project);
    }
}