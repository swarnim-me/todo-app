import ScreenController from '../controllers/screenController';
import '../css/addProjectModal.css';

export default class AddProjectDialog {
    constructor() {
        this.screenController = new ScreenController();
        this.addProjectForm = document.querySelector(".add-project-form");
        this.projectTitleInputEle = document.querySelector(".add-project-input");
    }
}