class LoadCommonEvents {
    constructor() {
        this.closeBtns = Array.from(document.querySelectorAll(".close-dialog-btn"));
        this.bindEvents();
    }

    bindEvents() {
        this.closeBtns.forEach(btn => {
            btn.addEventListener("click", this.closeDialog);
        })
    }

    closeDialog() {
        this.parentElement.close();
    }
}

export default new LoadCommonEvents();