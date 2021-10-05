class Task {
  constructor(description, dueDate, priority, project) {
    this.description = description;
    this.dueDate =
      dueDate === ""
        ? ""
        : new Date(dueDate).toString().split(" ").slice(1, 4).join(" ");
    this.priority = priority;
    this.project = project;
  }
}

function createTask(description, dueDate, priority, project) {
  const taskObj = new Task(description, dueDate, priority, project);

  let taskEl = document.createElement("li");

  let taskTitle = document.createElement("h2");
  taskTitle.textContent = taskObj.project === "" ? "" : taskObj.project;
  taskTitle.className = "task-title";

  let taskDescription = document.createElement("p");
  taskDescription.textContent = taskObj.description;
  taskDescription.className = "task-description";

  let taskDueDate = document.createElement("p");
  let date = new Date(taskObj.dueDate);
  taskDueDate.textContent = taskObj.dueDate === "" ? "" :`${date.getDate() >= 10 ? date.getDate(): `0${date.getDate()}`}-${date.getMonth() + 1 >= 10 ? date.getMonth() + 1: `0${date.getMonth() + 1}`}-${date.getFullYear()}`;
  taskDueDate.className = "task-date";

  if (taskObj.priority === "high") {
    taskEl.classList.add("high-priority");
  } 

  let deleteTaskBtn = document.createElement("button");
  deleteTaskBtn.className = "delete-task__btn";

  if (taskTitle.textContent !== "") {
    taskEl.appendChild(taskTitle);
  }else {
    taskDueDate.style.gridColumn = "1 / 3"
  }

  if (taskTitle.textContent !== "" || taskDueDate.textContent !== "") {
    taskDescription.style.gridRow = "2 / 3";
  }

  if (taskDueDate.textContent !== "") {
    taskEl.appendChild(taskDueDate);
  }

  taskEl.appendChild(taskDescription);
  taskEl.appendChild(deleteTaskBtn);

  return { taskEl, taskObj };
}

export { Task, createTask };
