import DbHelper from "../models/dbHelper";
import ProjectEle from "../views/project";

import Navbar from "../views/navbar";
import Dashboard from "../views/dashboard";

// Bind common events
import "../utils/loadCommonEvents";
import applicationController from "./applicationController";

export default class PageLoader {
	constructor() {
		this.dbHelper = new DbHelper();
		const dbData = this.dbHelper.getDbItems();
		dbData.todos.forEach((todo) => {
			applicationController.addTodo(todo);
		});

		dbData.projects.forEach((project) => {
			new ProjectEle(project);
		});

		new Navbar();
		new Dashboard();

		// Loading sample date
		// TODO: Remove this after testing
		// this.dbHelper.setDbItems(data);
	}
}
