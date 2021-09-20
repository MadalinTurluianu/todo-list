import "./style/main.css";
import { createTask } from "./components/newTask";
import { addTask, removeTask } from "./components/tasks";
import { createFilteredList } from "./components/filteredLists";
import { createProject, removeProject } from "./components/project";
import {
  nav,
  addRmProjBtnContainer,
  addProjectBtn,
  rmProjectBtn,
  projectsContainer,
  inboxBtn,
  dailyFilterBtn,
  weeklyFilterBtn,
  highPriorityFilterBtn,
  projectForm,
  projectFormInput,
  projectFormCancelBtn,
  rmProjectForm,
  selectRmProject,
  cancelRmProject,
  addTaskBtn,
  listContainer,
  taskForm,
  titleInput,
  descriptionInput,
  dueDateInput,
  priorityInput,
  projectInput,
  taskFormCancelBtn,
} from "./components/DOM";

// ------------------------------------------- Tasks handling

const taskList = [];

function closeTaskForm() {
  addTaskBtn.classList.remove("inactive");
  taskForm.classList.add("inactive");
  titleInput.value = "";
  descriptionInput.value = "";
  dueDateInput.value = "";
  priorityInput.value = "normal";
  projectInput.value = "";
}

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let task = createTask(
    titleInput,
    descriptionInput,
    dueDateInput,
    priorityInput,
    projectInput
  );

  addTask(listContainer, task, taskList);
  closeTaskForm();
  rerenderUl("inbox");

  // ------------------------------------------- Delete task functionality

  let deleteTaskBtn = [...task.taskEl.children].filter(
    (element) => element.className === "delete-task__btn"
  )[0];

  deleteTaskBtn.addEventListener(
    "click",
    removeTask.bind(null, listContainer, task, taskList)
  );
});

taskFormCancelBtn.addEventListener("click", closeTaskForm);

// ------------------------------------------- Projects handling

// ---ADD PROJECT

function closeAddProjectForm() {
  addRmProjBtnContainer.classList.remove("inactive");
  projectForm.classList.add("inactive");
  projectFormInput.value = "";
}

addProjectBtn.addEventListener("click", function () {
  addRmProjBtnContainer.classList.add("inactive");
  projectForm.classList.remove("inactive");
});

projectFormCancelBtn.addEventListener("click", closeAddProjectForm);

projectForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (projectFormInput.value.trim() !== "") {
    let project = createProject(
      projectFormInput.value.trim(),
      projectInput,
      projectsContainer
    );
    project.button.addEventListener("click", function () {
      rerenderUl("project", project.name);
    });
    selectRmProject.appendChild(project.option.cloneNode(true));
  }
  closeAddProjectForm();
});


// ---REMOVE PROJECT

function closeRmProjectForm() {
  addRmProjBtnContainer.classList.remove("inactive");
  rmProjectForm.classList.add("inactive");
  selectRmProject.value = "";
}

rmProjectBtn.addEventListener("click", function () {
  addRmProjBtnContainer.classList.add("inactive");
  rmProjectForm.classList.remove("inactive");
});

cancelRmProject.addEventListener("click", closeRmProjectForm);

rmProjectForm.addEventListener("submit", function (event) {
  event.preventDefault();

  removeProject(selectRmProject.value, taskList, [selectRmProject, projectInput], projectsContainer);

  rerenderUl("inbox");
  closeRmProjectForm();
});
// ------------------------------------------- Filter handling

function rerenderUl(filterType, projectName = "") {
  let newUlList = createFilteredList(filterType, taskList, projectName);
  listContainer.innerHTML = "";
  listContainer.appendChild(newUlList);
}

inboxBtn.addEventListener("click", function () {
  rerenderUl("inbox");
});

highPriorityFilterBtn.addEventListener("click", function () {
  rerenderUl("high priority");
});

dailyFilterBtn.addEventListener("click", function () {
  rerenderUl("today");
});

weeklyFilterBtn.addEventListener("click", function () {
  rerenderUl("week");
});
