import TodoModel from "./TodoModel.js";

window.onload = async () => {

    const model = new TodoModel
    console.log(model.getTasks())

    const listsContainer = document.querySelector("#lists-container");
    const todoHeader = document.querySelector("todo-header")
    
    todoHeader.addEventListener("clicked", () => {
        listsContainer.style.transform = "translateX(0)";
        todoHeader.state = "tasks";
    })

    const taskItem = document.querySelector("task-item");
    taskItem.addEventListener("clicked", () => {
        console.log("clicked")
        listsContainer.style.transform = "translateX(-100%)"
        todoHeader.state = "items";
        todoHeader.taskName = "testing";
    })
    taskItem.addEventListener("delete", () => {
        console.log("delete")
    })
    
}
