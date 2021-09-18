import "./style/main.css";
import { createTask } from "./components/newTask";
import { addTask, removeTask } from "./components/tasks";
import { createFilteredList } from "./components/filteredLists";
import {
  addTaskBtn,
  form,
  titleInput,
  descriptionInput,
  dueDateInput,
  priorityInput,
  projectInput,
  formCancelBtn,
  inboxBtn,
  todayFilterBtn,
  listContainer,
  weeklyBtn,
  highPriorityBtn,
} from "./components/DOM";

const taskList = [];

// ------------------------------------------- Form handling

function closeForm() {
  addTaskBtn.classList.remove("inactive");
  form.classList.add("inactive");
  titleInput.value = "";
  descriptionInput.value = "";
  dueDateInput.value = "";
  priorityInput.value = "normal";
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let task = createTask(
    titleInput,
    descriptionInput,
    dueDateInput,
    priorityInput
  );

  addTask(listContainer, task, taskList);
  closeForm();

  // ------------------------------------------- Delete task functionality

  let deleteTaskBtn = [...task.taskEl.children].filter(
    (element) => element.className === "delete-task__btn"
  )[0];

  deleteTaskBtn.addEventListener(
    "click",
    removeTask.bind(null, listContainer, task, taskList)
  );
});

formCancelBtn.addEventListener("click", closeForm);

// ------------------------------------------- Filter handling

function rerenderUl(filterType) {
  let newUlList = createFilteredList(filterType, taskList);
  listContainer.innerHTML = "";
  listContainer.appendChild(newUlList);
}

inboxBtn.addEventListener("click", function(){
  rerenderUl("inbox");
})

highPriorityBtn.addEventListener("click", function(){
  rerenderUl("high priority");
})

todayFilterBtn.addEventListener("click", function(){
  rerenderUl("today");
})

weeklyBtn.addEventListener("click", function(){
  rerenderUl("week");
})

