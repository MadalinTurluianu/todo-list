const backdrop = document.querySelector(".backdrop");

// ---------------------------------------------NAV

const nav = document.querySelector("nav");

const addProjectBtn = document.querySelector(".add-project_btn");
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
const addProjectContainer = document.querySelector(
  ".add-project__container"
);

const projectForm = document.querySelector(".add-project__form");
const projectFormInput = projectForm.querySelector("input");
const projectFormCancelBtn = projectForm.querySelector("button[type='button']");

// ---------------------------------------------MAIN

const main = document.querySelector("main");
const addTaskBtn = document.querySelector(".add-task__btn");
const ul = document.querySelector("ul");
const listContainer = document.querySelector(".list-container");

// ---PAGE TITLE + CANCEL PROJECT

const pageTitleContainer = document.querySelector(".page-title__container");
const pageTitle = document.createElement("h2");
pageTitle.textContent = "Inbox";
pageTitleContainer.appendChild(pageTitle);

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

backdrop.addEventListener("click", function() {
  taskForm.classList.add("inactive");
  backdrop.classList.add("inactive");
})

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
  addProjectContainer.classList.add("inactive");
  pageTitle.textContent = "Index";
});

filtersBtn.addEventListener("click", function () {
  filtersContainerBtn.classList.toggle("inactive");
  addProjectContainer.classList.add("inactive");
});

projectsBtn.addEventListener("click", function () {
  filtersContainerBtn.classList.add("inactive");
  addProjectContainer.classList.toggle("inactive");
});

export {
  backdrop,
  nav,
  addProjectBtn,
  projectsContainer,
  inboxBtn,
  dailyFilterBtn,
  weeklyFilterBtn,
  highPriorityFilterBtn,
  projectForm,
  projectFormInput,
  projectFormCancelBtn,
  pageTitleContainer,
  pageTitle,
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
