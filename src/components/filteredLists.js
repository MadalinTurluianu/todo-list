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
      let currentDay = Number(currentDate.split(" ")[2]);
      let currentMonth = currentDate.split(" ")[1];
      let currentYear = currentDate.split(" ")[3];
      let weekIndex = week.indexOf(currentDate.split(" ")[0]);

      const months = {
        all: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        31: ["Jan", "Mar", "May", "Jul", "Aug", "Oct", "Dec"],
        30: ["Apr", "Jun", "Sep", "Nov"],
        29: Number(currentYear) % 4 === 0 ? ["Feb"] : [],
        28: Number(currentYear) % 4 === 0 ? [] : ["Feb"],
      };

      for (let i = weekIndex; i <= weekIndex + 6; i++) {
        let thisWeekDay = currentDay + (6 - i);
        let thisWeekMonth = currentMonth;
        let thisWeekYear = currentYear;

        // ---GET TO NEXT MONTH/YEAR

        function setNextMonthYear() {
          if (thisWeekMonth === "Dec") {
            thisWeekMonth = "Jan";
            thisWeekYear = (Number(thisWeekYear) + 1).toString();
          } else {
            thisWeekMonth = months.all[months.all.indexOf(thisWeekMonth) + 1];
          }
        }

        function setPreviousMonthYear() {
          if (thisWeekMonth === "Jan") {
            thisWeekMonth = "Dec";
            thisWeekYear = (Number(thisWeekYear) - 1).toString();
          } else {
            thisWeekMonth = months.all[months.all.indexOf(thisWeekMonth) - 1];
          }
        }

        if (months[31].includes(thisWeekMonth) && thisWeekDay > 31) {
          thisWeekDay = thisWeekDay - 31;
          setNextMonthYear();
        } else if (months[30].includes(thisWeekMonth) && thisWeekDay > 30) {
          setNextMonthYear();
          thisWeekDay = thisWeekDay - 30;
        } else if (months[29].includes(thisWeekMonth) && thisWeekDay > 29) {
          thisWeekDay = thisWeekDay - 29;
          setNextMonthYear();
        } else if (months[28].includes(thisWeekMonth) && thisWeekDay > 28) {
          thisWeekDay = thisWeekDay - 28;
          setNextMonthYear();
        }

        // ---GET TO PREVIOUS MONTH/YEAR
        else if (thisWeekDay < 1) {
          setPreviousMonthYear();

          if (months[31].includes(thisWeekMonth)) {
            thisWeekDay = 31 + thisWeekDay;
          } else if (months[30].includes(thisWeekMonth)) {
            thisWeekDay = 30 + thisWeekDay;
          } else if (months[29].includes(thisWeekMonth)) {
            thisWeekDay = 29 + thisWeekDay;
          } else if (months[28].includes(thisWeekMonth)) {
            thisWeekDay = 28 + thisWeekDay;
          }
        }

        // ---NORMAL BEHAVIOR
        else {
          thisWeekDay = thisWeekDay;
        }

        if (
          `${Number(taskDay)} ${taskMonth} ${taskYear}` ===
          `${thisWeekDay} ${thisWeekMonth} ${thisWeekYear}`
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
