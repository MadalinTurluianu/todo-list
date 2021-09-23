function createFilteredList(filterType, originList, projectName = "") {
  const filteredList = document.createElement("ul");
  let currentDate = new Date().toString().split(" ").slice(0, 4).join(" ");
  let filteredArray;

  // ------------------------------------------------ Inbox

  if (filterType === "inbox") {
    filteredArray = originList;

    // ---------------------------------------------- HP filter
  } else if (filterType === "high priority") {
    filteredArray = originList.filter(
      (task) => task.taskObj.priority === "high"
    );

    // ---------------------------------------------- daily filter
  } else if (filterType === "today") {
    filteredArray = originList.filter((task) => {
      let taskDate = new Date(task.taskObj.dueDate)
        .toString()
        .split(" ")
        .slice(0, 4)
        .join(" ");
      return taskDate === currentDate;
    });

    // ---------------------------------------------- weekly filter
  } else if (filterType === "week") {
    filteredArray = originList.filter((task) => {
      const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      let taskDateArr = new Date(task.taskObj.dueDate)
        .toString()
        .split(" ")
        .slice(0, 4);
      let taskMonth = taskDateArr[1];
      let taskDay = taskDateArr[2];
      let taskYear = taskDateArr[3];
      let index = week.indexOf(currentDate.split(" ")[0]);

      console.log(currentDate.split(" ")[2]);
      console.log(taskDay);

      for (let i = 0; i <= index; i++) {
        if (
          `${taskDay} ${taskMonth} ${taskYear}` ===
          `${Number(currentDate.split(" ")[2]) - index - i} ${currentDate.split(" ")[1]} ${currentDate.split(" ")[3]}`
        ) {
          return true;
        }
      }
      for (let i = index+1; i < 6; i++) {
        if (
          `${taskDay} ${taskMonth} ${taskYear}` ===
          `${Number(currentDate.split(" ")[2]) + 6 - i} ${currentDate.split(" ")[1]} ${currentDate.split(" ")[3]}`
        ) {
          return true;
        }
      }
    });

    // ---------------------------------------------- filter by project
  } else if (filterType === "project") {
    filteredArray = originList.filter(
      (task) => projectName === task.taskObj.project
    );
  }

  filteredArray.map((task) => {
    filteredList.appendChild(task.taskEl);
  });

  return filteredList;
}

export { createFilteredList };
