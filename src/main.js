import "./style/main.css";
import { createTask } from "./components/newTask";
import { addTask, removeTask } from "./components/tasks";
import { createFilteredList } from "./components/filteredLists";
import { createProject, removeProject } from "./components/project";
import {
  backdrop,
  mobileBackdrop,
  closeMenu,
  addProjectBtn,
  projectsContainer,
  inboxBtn,
  filtersContainer,
  dailyFilterBtn,
  weeklyFilterBtn,
  highPriorityFilterBtn,
  addProjectContainer,
  projectForm,
  projectFormInput,
  projectFormCancelBtn,
  pageTitleContainer,
  pageTitle,
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
  taskForm.classList.add("inactive");
  titleInput.value = "";
  descriptionInput.value = "";
  dueDateInput.value = "";
  priorityInput.value = "normal";
  projectInput.value = "";
  backdrop.classList.add("inactive");
  document.querySelector("ul").classList.remove("inactive");
}

backdrop.addEventListener("click", closeTaskForm);

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let task = createTask(
    titleInput,
    descriptionInput,
    dueDateInput,
    priorityInput,
    projectInput
  );

  task.taskEl.style.animation = "fade-in-right 1s";
  addTask(listContainer, task, taskList);
  closeTaskForm();
  rerenderUl("inbox");
  pageTitle.textContent = "Inbox";
  setTimeout(() => {
    task.taskEl.style.animation = ""
  }, 1000);;

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
  addProjectBtn.classList.remove("inactive");
  projectForm.classList.add("inactive");
  projectFormInput.value = "";
}

addProjectBtn.addEventListener("click", function () {
  addProjectBtn.classList.add("inactive");
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

      // ---REMOVE PROJECT

      pageTitleContainer.innerHTML = "";
      pageTitleContainer.appendChild(pageTitle);
      pageTitle.textContent = project.name;
      addProjectContainer.classList.add("inactive");

      let deleteProjectBtn = document.createElement("button");
      deleteProjectBtn.className = "delete-project__btn";
      deleteProjectBtn.textContent = "Delete"

      deleteProjectBtn.addEventListener("click", function() {
        removeProject(project.name, taskList, projectInput, projectsContainer);
        rerenderUl("inbox");
        pageTitle.textContent = "Inbox";
        pageTitleContainer.remove(deleteProjectBtn);
      })

      pageTitleContainer.appendChild(deleteProjectBtn);
    });
  }
  closeAddProjectForm();
});

// ---MOBILE CLOSE ADD PROJECT FORM

mobileBackdrop.addEventListener("click", function() {
  closeAddProjectForm();
  closeMenu();
  addProjectContainer.classList.add("inactive");
  filtersContainer.classList.add("inactive");
})


// ------------------------------------------- Filter handling

function rerenderUl(filterType, projectName = "") {
  let newUlList = createFilteredList(filterType, taskList, projectName);
  listContainer.innerHTML = "";
  listContainer.appendChild(newUlList);
  pageTitleContainer.innerHTML = "";
  pageTitleContainer.appendChild(pageTitle);
}

inboxBtn.addEventListener("click", function () {
  rerenderUl("inbox");
  pageTitle.textContent = "Inbox";
   closeMenu();
});

highPriorityFilterBtn.addEventListener("click", function () {
  rerenderUl("high priority");
  pageTitle.textContent = "High priority";
  closeMenu();
});

dailyFilterBtn.addEventListener("click", function () {
  rerenderUl("today");
  pageTitle.textContent = "Today";
  closeMenu();
});

weeklyFilterBtn.addEventListener("click", function () {
  rerenderUl("week");
  pageTitle.textContent = "This week";
  closeMenu();
});
