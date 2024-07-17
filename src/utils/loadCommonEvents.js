import databaseController from "../controllers/databaseController";

class LoadCommonEvents {
	constructor() {
		this.closeBtns = Array.from(
			document.querySelectorAll(".close-dialog-btn")
		);
		this.toggleThemeBtn = document.querySelector(".toggle-theme-input");
		this.checkDefaultTheme();
		this.bindEvents();
	}

	bindEvents() {
		this.closeBtns.forEach((btn) => {
			btn.addEventListener("click", this.closeDialog);
		});

		this.toggleThemeBtn.addEventListener("change", this.changeTheme);
	}

	checkDefaultTheme() {
		if (databaseController.getTheme() === "dark")
			this.toggleThemeBtn.checked = true;
		this.changeTheme();
	}

	closeDialog() {
		this.parentElement.close();
		const form = this.parentElement.querySelector("form");
		form?.reset();
	}

	changeTheme = () => {
		if (this.toggleThemeBtn.checked) {
			document.body.classList.add("dark-mode");
			databaseController.setTheme("dark");
		} else {
			databaseController.setTheme("light");
			document.body.classList.remove("dark-mode");
		}
	};
}

export default new LoadCommonEvents();
