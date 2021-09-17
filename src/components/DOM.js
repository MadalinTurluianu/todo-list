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

const nav = document.querySelector("nav");
const main = document.querySelector("main");
const addTaskBtn = document.querySelector(".add-task__btn");
const form = document.querySelector("form");
const titleInput = document.querySelector("#form-title");
const descriptionInput = document.querySelector("#form-description");
const dueDateInput = document.querySelector("#form-due-date");
const priorityInput = document.querySelector("#form-priority");
const ul = document.querySelector("ul");
const formCancelBtn = document.querySelector("form button[type='button']");
const inboxBtn = document.querySelector(".inbox");
const todayFilterBtn = document.querySelector(".today");
const weeklyBtn = document.querySelector(".this-week");
const addProjectBtn = document.querySelector(".add-project_btn");
const listContainer = document.querySelector(".list-container");

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
  form.classList.remove("inactive");
  addTaskBtn.classList.add("inactive");
  priorityInput.style.backgroundColor = normalPriorityColor;
  priorityInput.style.color = secondaryFontColor;
});

export {
  nav,
  main,
  addTaskBtn,
  form,
  titleInput,
  descriptionInput,
  dueDateInput,
  priorityInput,
  ul,
  formCancelBtn,
  inboxBtn,
  todayFilterBtn,
  weeklyBtn,
  addProjectBtn,
  listContainer,
};
