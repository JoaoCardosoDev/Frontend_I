export default class TodoModel {
    #tasks = [];

    constructor() {

        if(!localStorage.getItem("todos")){ 
            localStorage.setItem("todos", JSON.stringify(this.#tasks));
            this.addTask("Add Task")
        } else {
            this.#tasks = JSON.parse(localStorage.getItem("todos"));
        }
    }

    /** TASKS */
    addTask(task) {
        this.#tasks.push({title: task, items:[]});
        this.#updateLocalStorage();
    }
    deleteTask(index) {
        this.#tasks.splice(index, 1);
        this.#updateLocalStorage();
    }
    getTasks() {
        
        return JSON.parse(localStorage.getItem("todos"));
    }

    /** ITEMS */
    addItem(taskIndex, item) {
        // this.#tasks[taskIndex].items.push(item);
        this.#tasks[taskIndex].items.push({title:item, checked:"false"});
        this.#updateLocalStorage();
    }
    deleteItem(taskIndex, itemIndex) {
        this.#tasks[taskIndex].items.splice(itemIndex, 1);
        this.#updateLocalStorage();
    }
    updateItem(taskIndex, itemIndex, val) {

        this.#tasks[taskIndex].items[itemIndex].checked = val;
        this.#updateLocalStorage();
    }
    getItems(taskIndex) {
        return this.#tasks[taskIndex].items;
    }

    #updateLocalStorage() {
        localStorage.setItem("todos", JSON.stringify(this.#tasks));
    }
}