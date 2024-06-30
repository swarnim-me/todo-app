import DbHelper from "../models/dbHelper";
import TodoEle from "../views/todo";

import Navbar from '../views/navbar';
import Dashboard from '../views/dashboard';
import AddTodoDialog from '../views/addTodoDialog';

import data from '../data/sampleDB.json';

export default class PageLoader {
    constructor() {
        this.dbHelper = new DbHelper();
        const allTodos = this.dbHelper.getDbItems().todos;
        allTodos.forEach(todo => {
            new TodoEle(todo);
        })

        new AddTodoDialog();
        new Navbar();
        new Dashboard();

        // Loading sample date
        // TODO: Remove this after testing
        this.dbHelper.setDbItems(data);
    }
}