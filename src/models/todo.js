export default class Todo {
    constructor({ id, title, dueDate, priority, notes, project = 1, isCompleted = false }) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.project = project;
        this.isCompleted = isCompleted;
    }
}