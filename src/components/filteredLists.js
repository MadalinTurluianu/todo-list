function createFilteredList(filterType, originList) {
  const filteredList = document.createElement("ul");
  let filteredArray;
  if (filterType === "today") {
    filteredArray = originList.filter((task) => {
      let taskDate = new Date(task.taskObj.dueDate)
        .toString()
        .split(" ")
        .slice(0, 4)
        .join(" ");
      let currentDate = new Date().toString().split(" ").slice(0, 4).join(" ");
      return taskDate === currentDate;
    });
  }else if(filterType === "inbox"){
    filteredArray = originList;
  }

  filteredArray.map((task) => {
    filteredList.appendChild(task.taskEl);
  });

  return filteredList;
}

export { createFilteredList };
