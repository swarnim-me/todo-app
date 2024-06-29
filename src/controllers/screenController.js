import DbHelper from '../models/dbHelper';

export default class {
    constructor() {
        this.dbHelper = new DbHelper();
    }
    addTodo = (todo) => {
        this.dbHelper.addTodo(todo);
    }

    addProject = (project) => {
        this.dbHelper.addProject(project);
    }
}