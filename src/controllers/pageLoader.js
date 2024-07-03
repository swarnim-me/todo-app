import DbHelper from "../models/dbHelper";
import TodoEle from "../views/todo";
import ProjectEle from "../views/project";

import Navbar from '../views/navbar';
import Dashboard from '../views/dashboard';
import AddTodoDialog from '../views/addTodoDialog';

import data from '../data/sampleDB.json';
import AddProjectDialog from "../views/addProjectDialog";
import LoadCommonEvents from "../utils/loadCommonEvents";

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
        new AddProjectDialog();
        new Navbar();
        new Dashboard();
        new LoadCommonEvents();

        // Loading sample date
        // TODO: Remove this after testing
        this.dbHelper.setDbItems(data);
    }
}