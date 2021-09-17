import {
  normalPriorityColor,
  highPriorityColor,
  primaryFontColor,
  secondaryFontColor,
  primaryColor,
  secondaryColor,
  thirdColor,
  shadowColor,
} from "./colors.js";

class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title.value;
    this.description = description.value;
    this.dueDate =
      dueDate.value === ""
        ? ""
        : new Date(dueDate.value).toString().split(" ").slice(1, 4).join(" ");
    this.priority = priority.value;
  }
}

function createTask(title, description, dueDate, priority) {
  const taskObj = new Task(title, description, dueDate, priority);

  let taskEl = document.createElement("li");

  let taskTitle = document.createElement("h2");
  taskTitle.textContent = taskObj.title;

  let taskDescription = document.createElement("p");
  taskDescription.textContent = taskObj.description;
  taskDescription.className = "task-description";

  let taskDueDate = document.createElement("p");
  taskDueDate.textContent = taskObj.dueDate;
  taskDueDate.className = "task-date";

  if (taskObj.priority === "normal") {
    taskEl.style.backgroundColor = normalPriorityColor;
    taskEl.style.color = secondaryFontColor;
  } else {
    taskEl.style.backgroundColor = highPriorityColor;
  }

  let deleteTaskBtn = document.createElement("button");
  deleteTaskBtn.className = "delete-task__btn";
  deleteTaskBtn.textContent = "X";

  taskEl.appendChild(deleteTaskBtn);
  taskEl.appendChild(taskTitle);
  taskEl.appendChild(taskDescription);
  taskEl.appendChild(taskDueDate);

  return { taskEl, taskObj };
}

export { Task, createTask };
