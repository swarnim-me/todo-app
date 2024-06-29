const closeDialogBtn = document.querySelector(".close-dialog-btn");

const closeDialog = (event) => {
    event.srcElement.parentElement.close();
}

const setupCommonEvents = () => {
    closeDialogBtn.addEventListener("click", closeDialog);
}

export default setupCommonEvents;