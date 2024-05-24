import TodoModel from "./TodoModel.js";

window.onload = async () => {

    let currentTaskIndex;

    const model = new TodoModel
    console.log(model.getTasks())

    const listsContainer = document.querySelector("#lists-container");
    const todoHeader = document.querySelector("todo-header")
    
    todoHeader.addEventListener("clicked", () => {
        listsContainer.style.transform = "translateX(0)";
        todoHeader.state = "tasks";
    })

    
    const buildTaskList = (tasks) => {
        const tasksList = document.querySelector("#tasks");
        tasksList.innerHTML = "";
        
        tasks.forEach((task, index) => {

            const li = document.createElement("li");
            const taskItem = new TaskItem();

            taskItem.addEventListener("clicked", () => {
                console.log("clicked")
                listsContainer.style.transform = "translateX(-100%)"
                todoHeader.state = "items";
                todoHeader.taskName = task.title;
                buildItemsList(task.items);
                currentTaskIndex = index;
            })

            taskItem.addEventListener("delete", () => {
                console.log("delete")
                model.deleteTask(index);
                buildTaskList(model.getTasks());
            })

            taskItem.title = task.title;
            li.append(taskItem);
            tasksList.append(li);
        });
    }

    const buildItemsList = (items) => {

        const checkItemsList = document.querySelector("#items")
        checkItemsList.innerHTML = "";
        items.forEach((item, index) => {
            const li = document.createElement("li");
            const checkItem = new CheckItem();
            checkItem.addEventListener("checked", (ev) => {
                console.log(ev.detail.checked)
            });
            checkItem.addEventListener("delete", () => {
                model.deleteItem(currentTaskIndex, index);
                buildItemsList(model.getItems(currentTaskIndex))
                console.log("delete check item")

            })
            checkItem.title = item.title;
            checkItem.checked = item.checked;

            li.append(checkItem);
            checkItemsList.append(li);
        })
    }

    buildTaskList(model.getTasks());
}
