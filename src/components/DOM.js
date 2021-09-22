const backdrop = document.querySelector(".backdrop");

// ---------------------------------------------NAV

const nav = document.querySelector("nav");

const addProjectBtn = document.querySelector(".add-project_btn");
const rmProjectBtn = document.querySelector(".rm-project_btn");
const projectsContainer = document.querySelector(".projects-container");

// --FILTERS

const inboxBtn = document.querySelector(".inbox");
const filtersBtn = document.querySelector(".filters");
const projectsBtn = document.querySelector(".projects");
const filtersContainerBtn = document.querySelector(".filters-container");
const dailyFilterBtn = document.querySelector(".daily-filter");
const weeklyFilterBtn = document.querySelector(".weekly-filter");
const highPriorityFilterBtn = document.querySelector(".hp-filter");

// ---PROJECT FORM CONTENT
const addRmProjectContainer = document.querySelector(
  ".add-rm-project__container"
);
const addRmProjBtnContainer = document.querySelector(
  ".add-rm-project__container .buttons-container"
);

const projectForm = document.querySelector(".add-project__form");
const projectFormInput = projectForm.querySelector("input");
const projectFormCancelBtn = projectForm.querySelector("button[type='button']");

const rmProjectForm = document.querySelector(".remove-project__form");
const selectRmProject = rmProjectForm.querySelector("select");
const cancelRmProject = rmProjectForm.querySelector("button[type='button']");
// ---------------------------------------------MAIN

const main = document.querySelector("main");
const addTaskBtn = document.querySelector(".add-task__btn");
const ul = document.querySelector("ul");
const listContainer = document.querySelector(".list-container");

// ---TASK FORM CONTENT

const taskForm = document.querySelector(".add-task__form");
const titleInput = document.querySelector("#form-title");
const descriptionInput = document.querySelector("#form-description");
const dueDateInput = document.querySelector("#form-due-date");
const priorityInput = document.querySelector("#form-priority");
const projectInput = document.querySelector("#belong-project");
const taskFormCancelBtn = document.querySelector(
  ".add-task__form button[type='button']"
);

// ---------------------------------------------LOGIC

priorityInput.addEventListener("change", function () {
  if (priorityInput.value === "high") {
    priorityInput.classList.add("high-priority");
  }
});

addTaskBtn.addEventListener("click", function () {
  taskForm.classList.remove("inactive");
  priorityInput.classList.remove("high-priority");
  backdrop.classList.remove("inactive");
  document.querySelector("ul").classList.add("inactive");
});

inboxBtn.addEventListener("click", function () {
  filtersContainerBtn.classList.add("inactive");
  addRmProjectContainer.classList.add("inactive");
});

filtersBtn.addEventListener("click", function () {
  filtersContainerBtn.classList.toggle("inactive");
  addRmProjectContainer.classList.add("inactive");
});

projectsBtn.addEventListener("click", function () {
  filtersContainerBtn.classList.add("inactive");
  addRmProjectContainer.classList.toggle("inactive");
});

export {
  backdrop,
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
  main,
  addTaskBtn,
  ul,
  listContainer,
  taskForm,
  titleInput,
  descriptionInput,
  dueDateInput,
  priorityInput,
  projectInput,
  taskFormCancelBtn,
};
