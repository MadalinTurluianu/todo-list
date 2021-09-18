function createFilteredList(filterType, originList) {
  const filteredList = document.createElement("ul");
  let currentDate = new Date().toString().split(" ").slice(0, 4).join(" ");
  let filteredArray;
  if (filterType === "inbox") {
    filteredArray = originList;
  } else if (filterType === "high priority") {
    filteredArray = originList.filter(
      (task) => task.taskObj.priority === "high"
    );
  } else if (filterType === "today") {
    filteredArray = originList.filter((task) => {
      let taskDate = new Date(task.taskObj.dueDate)
        .toString()
        .split(" ")
        .slice(0, 4)
        .join(" ");
      return taskDate === currentDate;
    });
  } else if (filterType === "week") {
    filteredArray = originList.filter((task) => {
      const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      let taskDateArr = new Date(task.taskObj.dueDate)
        .toString()
        .split(" ")
        .slice(0, 4);
      let taskDayName = currentDate.split(" ")[0];
      let taskMonth = currentDate.split(" ")[1];
      let taskDay = currentDate.split(" ")[2];
      let taskYear = currentDate.split(" ")[3];
      let taskIndex = week.indexOf(taskDayName);

      for (let i = taskIndex; i >= taskIndex - 6; i--) {
        if (
          taskDateArr.slice(1, 4).join(" ") ===
          `${taskMonth} ${Number(taskDay) + 1 + i - taskIndex} ${taskYear}`
        ) {
          return true;
        }
      }
    });
  }

  filteredArray.map((task) => {
    filteredList.appendChild(task.taskEl);
  });

  return filteredList;
}

export { createFilteredList };
