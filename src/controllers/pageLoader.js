import DbHelper from "../models/dbHelper";
import TodoEle from "../views/todo";
import ProjectEle from "../views/project";

import Navbar from '../views/navbar';
import Dashboard from '../views/dashboard';
import AddTodoDialog from '../views/addTodoDialog';

import data from '../data/sampleDB.json';

export default class PageLoader {
    constructor() {
        this.dbHelper = new DbHelper();
        const dbData = this.dbHelper.getDbItems();
        dbData.todos.forEach(todo => {
            new TodoEle(todo);
        })

        dbData.projects.forEach(project => {
            new ProjectEle(project);
        })

        new AddTodoDialog(this.dbHelper.getAllProjects());
        new Navbar();
        new Dashboard();

        // Loading sample date
        // TODO: Remove this after testing
        this.dbHelper.setDbItems(data);
    }
}