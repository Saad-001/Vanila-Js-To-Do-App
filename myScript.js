const newTask = document.querySelector("#new-task");
const form = document.querySelector("form");
const incompleteTaskList = document.querySelector("#items");
const completeTaskList = document.querySelector(".complete-list ul");

const createNewTask = function(task){
    const li = document.createElement('li');
    li.className = "item";
    const input = document.createElement("input");
    input.type= "checkbox";
    const label = document.createElement("label");
    label.innerText = task;

    li.appendChild(input)
    li.appendChild(label);

    return li;
}

const addTask = function(event) {
    event.preventDefault();
    const listItem = createNewTask(newTask.value);
    incompleteTaskList.appendChild(listItem);
    newTask.value= "";
    bindIncompleteTask(listItem, addToCompleteTaskList);
}

const addToCompleteTaskList = function(){
    const listItem = this.parentNode;
    this.remove();
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.innerText = "Delete";
    listItem.appendChild(deleteButton);
    completeTaskList.appendChild(listItem);
    bindCompleteTask(listItem)
}

const deleteTask = function () {
    const listItem = this.parentNode;
    listItem.remove();
}

const bindCompleteTask = function (item) {
    const deleteBtn = item.querySelector(".delete");
    deleteBtn.onclick = deleteTask;
}

const bindIncompleteTask = function(taskItem, checkboxClick){
    const checkBox = taskItem.querySelector("input[type = checkbox]");
    checkBox.addEventListener("change", checkboxClick);
}
const incompleteTasksUl = incompleteTaskList.children.length;
const completeTasksUl = completeTaskList.children.length;

for (let i = 0; i < incompleteTasksUl; i++){
    const listItem = incompleteTaskList.children[i];
    bindIncompleteTask(listItem, addToCompleteTaskList)
}

for (let i = 0; i < completeTasksUl; i++){
    const listItem = completeTaskList.children[i];
    bindCompleteTask(listItem);
}


form.addEventListener("submit", addTask);

