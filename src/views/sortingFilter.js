import applicationController from "../controllers/applicationController";

class SortingFilter {
    constructor() {
        this.filter = document.querySelector(".sort");
        this.bindEvents();
    }

    bindEvents() {
        this.filter.addEventListener("change", this.sortItems);
    }

    sortItems = () => {
        console.log(this.filter.value);
        applicationController.sortTodos(this.filter.value);
    }

    reset() {
        this.filter.selectedIndex = 0;
    }
}

export default new SortingFilter();