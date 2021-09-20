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

// ---------------------------------------------NAV

const nav = document.querySelector("nav");
const addRmProjBtnContainer = document.querySelector(
  ".add-rm-project__container"
);
const addProjectBtn = document.querySelector(".add-project_btn");
const rmProjectBtn = document.querySelector(".rm-project_btn");
const projectsContainer = document.querySelector(".projects-container");

// --FILTERS

const inboxBtn = document.querySelector(".inbox");
const dailyFilterBtn = document.querySelector(".today");
const weeklyFilterBtn = document.querySelector(".this-week");
const highPriorityFilterBtn = document.querySelector(".high-priority");

// ---PROJECT FORM CONTENT

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
  if (priorityInput.value === "normal") {
    priorityInput.style.backgroundColor = normalPriorityColor;
    priorityInput.style.color = secondaryFontColor;
  } else if (priorityInput.value === "high") {
    priorityInput.style.backgroundColor = highPriorityColor;
    priorityInput.style.color = primaryFontColor;
  }
});

addTaskBtn.addEventListener("click", function () {
  taskForm.classList.remove("inactive");
  addTaskBtn.classList.add("inactive");
  priorityInput.style.backgroundColor = normalPriorityColor;
  priorityInput.style.color = secondaryFontColor;
});

export {
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
