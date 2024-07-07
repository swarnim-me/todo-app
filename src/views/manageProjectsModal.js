import '../css/manageProjectsModal.css';

class ManageProjectsModal {
    constructor() {
        this.viewProjectsModal = document.querySelector(".view-projects-modal");
    }

    showModal() {
        this.viewProjectsModal.showModal();
    }
}

export default new ManageProjectsModal();