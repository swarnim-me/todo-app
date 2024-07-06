import DbHelper from "../models/dbHelper";
import TodoEle from "../views/todo";
import ProjectEle from "../views/project";

import Navbar from '../views/navbar';
import Dashboard from '../views/dashboard';
import AddTodoModal from '../views/addTodoModal';

import data from '../data/sampleDB.json';
import AddProjectModal from "../views/addProjectModal";
import LoadCommonEvents from "../utils/loadCommonEvents";

import ScreenController from "./screenController";

export default class PageLoader {
    constructor() {
        this.dbHelper = new DbHelper();
        this.screenController = new ScreenController();
        const dbData = this.dbHelper.getDbItems();
        dbData.todos.forEach(todo => {
            new TodoEle({ ...todo, project: this.dbHelper.getProjectById(todo.project).title });
        })

        dbData.projects.forEach(project => {
            new ProjectEle(project);
        })

        new AddTodoModal(this.dbHelper.getAllProjects());
        new AddProjectModal();
        new Navbar();
        new Dashboard();
        new LoadCommonEvents();

        // Loading sample date
        // TODO: Remove this after testing
        // this.dbHelper.setDbItems(data);
    }
}