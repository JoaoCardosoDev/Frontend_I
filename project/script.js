import TodoModel from "./TodoModel.js";

window.onload = async () => {

    let currentTaskIndex;

    const model = new TodoModel
    console.log(model.getTasks())

    const listsContainer = document.querySelector("#lists-container");
    const lists = document.querySelectorAll("ul");
    lists.forEach(ul => {
        
    })
    const todoHeader = document.querySelector("todo-header")
    todoHeader.state = "tasks";
    todoHeader.addEventListener("clicked", () => {
        listsContainer.style.transform = "translateX(0)";
        todoHeader.state = "tasks";
    })

    //MODAL
    
    const todoModal = document.querySelector("todo-modal");
    todoModal.addEventListener("confirm", (ev) => {
        console.log(ev.detail.value)
        if (todoHeader.getAttribute("state") === "tasks"){
            model.addTask(ev.detail.value)
            buildTaskList(model.getTasks())
        } else {
            model.addItem(currentTaskIndex, ev.detail.value)
            buildItemsList(model.getItems(currentTaskIndex))
        }
    })

    //FOOTER
    
    const footer = document.querySelector("footer");
    footer.onclick = () => {
        todoModal.show(todoHeader.getAttribute("state"));
    }
    
    const buildTaskList = (tasks) => {
        const tasksList = document.querySelector("#tasks");
        tasksList.innerHTML = "";
        if (tasks == "") {
            const taskItem = new TaskItem();
            
            taskItem.title = "Add Tasks to the list"
            const li = document.createElement('li');
            li.append(taskItem)
            tasksList.append(li);
        }
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
        if (items == "") {
            const checkItem = new CheckItem();
            
            checkItem.title = "Add Items to the list"
            checkItem.checked = "false";
            const li = document.createElement('li');
            li.append(checkItem)
            checkItemsList.append(li);
        }
        items.forEach((item, index) => {
            console.log("here")
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
    const listContainerHeight = listsContainer.offsetHeight
    document.querySelector("#tasks").style.height = `${listContainerHeight}px`;
    document.querySelector("#items").style.height = `${listContainerHeight}px`;
    

    buildTaskList(model.getTasks());
}
