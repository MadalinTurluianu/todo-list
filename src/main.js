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
  descriptionInput,
  dueDateInput,
  priorityInput,
  projectInput,
  taskFormCancelBtn,
  addTaskBtn,
} from "./components/DOM";

// ------------------------------------------- Tasks handling

const oldTasks = JSON.parse(localStorage.getItem("taskObjects"));

const taskList = [];

if (oldTasks !== null) {
  for (let obj of oldTasks) {
    let task = createTask(
      obj.description,
      obj.dueDate,
      obj.priority,
      obj.project
    );
    addTask(listContainer, task, taskList);

    let deleteTaskBtn = [...task.taskEl.children].filter(
      (element) => element.className === "delete-task__btn"
    )[0];
  
    deleteTaskBtn.addEventListener("click", function () {
      task.taskEl.style.animation = "fade-in-right-reverse 0.8s";
      setTimeout(() => {
        task.taskEl.style.animation = "";
        removeTask(listContainer, task, taskList);
        localStorage.setItem("taskObjects", JSON.stringify(taskList.map(task => task.taskObj)));
      }, 800);
    });
  }
}

const oldProjectsList = JSON.parse(localStorage.getItem("projectsList"));

const projectsList = [];

if (oldProjectsList !== null) {
  for (let projectName of oldProjectsList) {
    let project = createProject(
      projectName,
      projectInput,
      projectsContainer
    );

    projectsList.push(projectName);
    localStorage.setItem("projectsList", JSON.stringify(projectsList));


    project.button.addEventListener("click", function () {
      rerenderUl("project", projectName);

      // ---REMOVE PROJECT

      pageTitleContainer.innerHTML = "";
      pageTitleContainer.appendChild(pageTitle);
      pageTitle.textContent = projectName;
      addProjectContainer.classList.add("inactive");

      let deleteProjectBtn = document.createElement("button");
      deleteProjectBtn.className = "delete-project__btn";
      deleteProjectBtn.textContent = "Delete";

      deleteProjectBtn.addEventListener("click", function () {
        removeProject(projectName, taskList, projectInput, projectsContainer);
        projectsList.splice(projectsList.indexOf(projectName), 1)
        localStorage.setItem("projectsList", JSON.stringify(projectsList));
        rerenderUl("inbox");
      });

      pageTitleContainer.appendChild(deleteProjectBtn);
    })
  }
}

// ------------------------------------ADD TASK FORM LOGIC

descriptionInput.addEventListener("change", function() {
  descriptionInput.value = descriptionInput.value.trim();
})

function closeTaskForm() {
  taskForm.style.animation = "fade-in-down-reverse 0.8s";
  backdrop.style.animation = "fade-out 0.8s";
  rerenderUl("inbox");
  addTaskBtn.classList.remove("inactive");
  pageTitleContainer.classList.remove("inactive");

  setTimeout(() => {
    taskForm.style.animation = "";
    backdrop.style.animation = "";
    document.querySelector("ul").style.animation = "";
    taskForm.classList.add("inactive");
    descriptionInput.value = "";
    dueDateInput.value = "";
    priorityInput.value = "normal";
    projectInput.value = "";
    backdrop.classList.add("inactive");
  }, 800);
}

backdrop.addEventListener("click", closeTaskForm);

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  
  let task = createTask(
    descriptionInput.value,
    dueDateInput.value,
    priorityInput.value,
    projectInput.value
  );

  closeTaskForm();

  setTimeout(() => {
    task.taskEl.style.animation = "fade-in-right 1s";
    addTask(listContainer, task, taskList);
    localStorage.setItem("taskObjects", JSON.stringify(taskList.map(task => task.taskObj)));
  }, 400);

  setTimeout(() => {
    task.taskEl.style.animation = "";
  }, 1400);

  // ------------------------------------------- Delete task functionality

  let deleteTaskBtn = [...task.taskEl.children].filter(
    (element) => element.className === "delete-task__btn"
  )[0];

  deleteTaskBtn.addEventListener("click", function () {
    task.taskEl.style.animation = "fade-in-right-reverse 0.8s";
    setTimeout(() => {
      task.taskEl.style.animation = "";
      removeTask(listContainer, task, taskList);
      localStorage.setItem("taskObjects", JSON.stringify(taskList.map(task => task.taskObj)));
    }, 800);
  });
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

  if (projectFormInput.value.trim() !== "" && !projectsList.includes(projectFormInput.value.trim())) {
    let project = createProject(
      projectFormInput.value.trim(),
      projectInput,
      projectsContainer
    );

    projectsList.push(project.name);
    localStorage.setItem("projectsList", JSON.stringify(projectsList));


    project.button.addEventListener("click", function () {
      rerenderUl("project", project.name);

      // ---REMOVE PROJECT

      pageTitleContainer.innerHTML = "";
      pageTitleContainer.appendChild(pageTitle);
      pageTitle.textContent = project.name;
      addProjectContainer.classList.add("inactive");

      let deleteProjectBtn = document.createElement("button");
      deleteProjectBtn.className = "delete-project__btn";
      deleteProjectBtn.textContent = "Delete";

      deleteProjectBtn.addEventListener("click", function () {
        removeProject(project.name, taskList, projectInput, projectsContainer);
        projectsList.splice(projectsList.indexOf(project.name), 1)
        localStorage.setItem("projectsList", JSON.stringify(projectsList));
        rerenderUl("inbox");
      });

      pageTitleContainer.appendChild(deleteProjectBtn);
      closeMenu();
    });
  }
  closeAddProjectForm();
});

// ---MOBILE CLOSE ADD PROJECT FORM

mobileBackdrop.addEventListener("click", function () {
  closeAddProjectForm();
  closeMenu();
});

// ------------------------------------------- Filter handling

function rerenderUl(filterType, projectName = "") {
  let newUlList = createFilteredList(filterType, taskList, projectName);
  listContainer.innerHTML = "";
  listContainer.appendChild(newUlList);
  pageTitleContainer.innerHTML = "";
  pageTitle.textContent =
    filterType === "inbox"
      ? "Inbox"
      : filterType === "high priority"
      ? "High priority"
      : filterType === "today"
      ? "Today"
      : filterType === "week"
      ? "This week"
      : filterType === "project"
      ? projectName
      : "";
  pageTitleContainer.appendChild(pageTitle);
  for (let t of taskList) {
    t.taskEl.style.animation = "fade-in 1.4s";
  }
}

inboxBtn.addEventListener("click", function () {
  rerenderUl("inbox");
  closeMenu();
});

highPriorityFilterBtn.addEventListener("click", function () {
  rerenderUl("high priority");
  closeMenu();
});

dailyFilterBtn.addEventListener("click", function () {
  rerenderUl("today");
  closeMenu();
});

weeklyFilterBtn.addEventListener("click", function () {
  rerenderUl("week");
  closeMenu();
});
